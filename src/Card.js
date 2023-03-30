
const Card = (props) => {

    const { name, src, shuffleDeck, evaluateClick } = props;
    const handleClick = (e) => {
        evaluateClick(name);
        shuffleDeck();
        return
    }
    return <div className="card" name={name} onClick={handleClick}>
        <div className="title">{name}</div>
        <img src={src} alt="" className="img-card" />
    </div>
}
export default Card;