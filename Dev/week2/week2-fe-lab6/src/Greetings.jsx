const Greetings = (props) => {
    console.log(props);

    return(
        <div className="greetings">
            <h1>Welcome{props.name}!</h1>
            <p>{props.message}</p>

        </div>
    )
}

export default Greetings;