import masterCardLogo from "./assets/images/master.png";
import visaLogo from "./assets/images/visa.png";

function CreditCard(props) {
    const maskedNumber = props.number.slice(-4).padStart(props.number.length, "•");
    const expirationMonth = props.expirationMonth.toString().padStart(2, "0"); // ensures two digits
    const expirationYear = props.expirationYear.toString().slice(-2); // last 2 digits
    const cardLogos = {
        "Visa":visaLogo,
        "Master Card":masterCardLogo,
    };
    const logo = cardLogos[props.type]
  
    return (
      <div>
        <img src={logo} alt={props.type} width={100}/>
        <h1>{maskedNumber}</h1>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>Bank: {props.bank}</p>
            </div>
        <p>{props.owner}</p>
      </div>
    );
  }
  
  export default CreditCard;
  