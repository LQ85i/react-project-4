import { useEffect, useState } from "react";
import {
    Ahri,
    Amumu,
    Anivia,
    Ashe,
    Blitzcrank,
    Darius,
    Fiddlesticks,
    Fizz,
    Garen,
    Hecarim,
    Jax,
    Jinx,
    Kassadin,
    Katarina,
    LeeSin,
    Lux,
    Malphite,
    MasterYi,
    Nasus,
    Nocturne,
    Renekton,
    Shaco,
    Shen,
    Sona,
    Teemo,
    Tristana,
    Vayne,
    Yasuo,
    Zac,
    Zed
} from "../images"
import Card from "./Card";
import uniqid from 'uniqid';


const GameBoard = (props) => {
    const maxCards = 20;
    const { score, setScore, highScore, setHighScore, setLastResult } = props;
    const [allCards, setAllCards] = useState({
        cards: [
            { name: "Ahri", src: Ahri },
            { name: "Amumu", src: Amumu },
            { name: "Anivia", src: Anivia },
            { name: "Ashe", src: Ashe },
            { name: "Blitzcrank", src: Blitzcrank },
            { name: "Darius", src: Darius },
            { name: "Fiddlesticks", src: Fiddlesticks },
            { name: "Fizz", src: Fizz },
            { name: "Garen", src: Garen },
            { name: "Hecarim", src: Hecarim },
            { name: "Jax", src: Jax },
            { name: "Jinx", src: Jinx },
            { name: "Kassadin", src: Kassadin },
            { name: "Katarina", src: Katarina },
            { name: "Lee Sin", src: LeeSin },
            { name: "Lux", src: Lux },
            { name: "Malphite", src: Malphite },
            { name: "Master Yi", src: MasterYi },
            { name: "Nasus", src: Nasus },
            { name: "Nocturne", src: Nocturne },
            { name: "Renekton", src: Renekton },
            { name: "Shaco", src: Shaco },
            { name: "Shen", src: Shen },
            { name: "Sona", src: Sona },
            { name: "Teemo", src: Teemo },
            { name: "Tristana", src: Tristana },
            { name: "Vayne", src: Vayne },
            { name: "Yasuo", src: Yasuo },
            { name: "Zac", src: Zac },
            { name: "Zed", src: Zed },
        ]
    })

    const createDeck = (n) => {
        let subset = [];
        let indices = new Set();

        while (indices.size < n){
            indices.add(Math.floor(Math.random() * allCards.cards.length));
        }
        for(const index of indices){
            subset.push(allCards.cards[index]);
        }
        const newDeck = {
            cards: subset
        }
        return newDeck;
    }
    const [deck, setDeck] = useState(() => createDeck(5))
    const [clickedCards, setClickedCards] = useState([])


    const shuffleDeck = () => {
        let cards = deck.cards;
        let currentIndex = cards.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }
        setDeck({
            cards: cards
        })
    }

    const evaluateClick = (name) => {
        if (clickedCards.includes(name)) {
            setLastResult({
                result: "fail",
                key: uniqid()
            });
            setClickedCards([name]);
            setScore(1);
        } else {
            setLastResult({
                result: "success",
                key: uniqid()
            });
            let newArr = clickedCards
            newArr.push(name);
            setClickedCards(newArr);
            setScore(score + 1);
            if (score + 1 > highScore) {
                setHighScore(score + 1);
            }
        }
    }
    useEffect(() => {
        if(highScore === deck.cards.length){
            increaseDifficulty();
            setScore(0);
            setClickedCards([]);
        } 
    },[highScore])

    const increaseDifficulty = () => {
        const cardCount = deck.cards.length;
        if(cardCount + 5 <= maxCards){
            setLastResult({
                result: "level up",
                key: uniqid()
            });
            setDeck(createDeck(cardCount+5));
        } else {
            setLastResult({
                result: "win",
                key: uniqid()
            });
        }
    }

    const renderCards = () => {
        let cardElements = [];
        for (let i = 0; i < deck.cards.length; i++) {
            const card = deck.cards[i];
            cardElements.push(<Card
                name={card.name}
                src={card.src}
                shuffleDeck={shuffleDeck}
                evaluateClick={evaluateClick}
                key={i} />)
        }
        return cardElements;
    }

    return <div className="gameboard">
        {renderCards()}
    </div>
}
export default GameBoard;