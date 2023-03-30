import {Logo} from '../images'

const Header = (props) => {
    const { score, highScore } = props;
    return <div className="header">
        <div className="left">
            <img className='logo' src={Logo} alt="" />
            <div className='title'>Memory Game</div>
            
        </div>
        <div className="right">
            <div className="score">score: {score}</div>
            <div className="high-score">high score: {highScore}</div>
        </div>

    </div>
}

export default Header;