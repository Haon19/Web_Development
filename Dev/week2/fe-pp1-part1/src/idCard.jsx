function IdCard(props){
    return (
        <div className="idCard">
            <img src={props.picture} alt="" />
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth date: {props.birth.toDateString()}</p>
        </div>
    )
}

export default IdCard;