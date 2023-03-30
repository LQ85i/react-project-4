import { useEffect, useState } from "react";
import {
    Ahri, Amumu, Anivia, Ashe
} from "./images/"
import Card from "./Card";

const GameBoard = (props) => {
    const { score, setScore, highScore, setHighScore} = props;
    const [allCards, setAllCards] = useState({
        cards: [
            { name: "Ahri", src: Ahri },
            { name: "Amumu", src: Amumu },
            { name: "Anivia", src: Anivia },
            { name: "Ashe", src: Ashe }
        ]
    })
    const [deck, setDeck] = useState({
        cards: [{ name: "Ahri", src: Ahri },
        { name: "Amumu", src: Amumu },
        { name: "Anivia", src: Anivia },
        { name: "Ashe", src: Ashe }]
    })
    const [clickedCards, setClickedCards] = useState([])

    const shuffleDeck = () => {
        let cards = deck.cards;
        let currentIndex = cards.length, randomIndex;
        
        while(currentIndex !== 0) {
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
        if(clickedCards.includes(name)){
            setClickedCards([]);
            setScore(0);
        } else {
            let newArr = clickedCards
            newArr.push(name);
            setClickedCards(newArr);
            setScore(score+1);
            if(score + 1 > highScore) {
                setHighScore(score+1);
            }
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