const Header = (props) => {
    const {score, highScore} = props;
    return <div className="header">
        <div className="left">
            memory game
        </div>
        <div className="right">
            <div className="score">score: {score}</div>
            <div className="high-score">high score: {highScore}</div>
        </div>

    </div>
}

export default Header;