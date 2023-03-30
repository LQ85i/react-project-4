import { Logo } from "../images"
import icon_success from "../images/icon_success.svg"
import icon_fail from "../images/icon_fail.svg"

const Header = (props) => {
    const { score, highScore, lastResult } = props;

    const getIcon = () => {
        if (lastResult.result === "success") {
            return <img key={Math.random()} className='icon success' src={icon_success} alt="" />
        } else if(lastResult.result === "fail") {
            
            return <img key={Math.random()} className='icon fail' src={icon_fail} alt="" />
        } else if(lastResult.result === "level up") {
            return <div className="level-up">LEVEL UP!</div>
        }
    }

    return <div className="header">
        <div className="left">
            <img className='logo' src={Logo} alt="" />
            <div className='title'>Memory Game</div>

        </div>
        <div className='center'>
            {getIcon()}
        </div>
        <div className="right">
            <div className="score">score: {score}</div>
            <div className="high-score">high score: {highScore}</div>
        </div>

    </div>
}

export default Header;