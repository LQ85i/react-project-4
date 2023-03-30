
const Card = (props) => {

    const { name, src, shuffleDeck, evaluateClick } = props;
    const handleClick = (e) => {
        evaluateClick(name);
        shuffleDeck();
        return
    }
    return <div className="card" name={name} onClick={handleClick}>
        <img src={src} alt="" className="img-card" />
        <div className="title">{name}</div>
    </div>
}
export default Card;