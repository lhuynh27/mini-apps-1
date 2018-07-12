class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      page: 0
    }
  }
  
  handleChange(e){
    console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  clickNext(e){
    this.setState({
      page: e.target.page
    })
  }

  render(){
    return(
      <Confirmation />
    )
  }
};

const FirstPage = (props) => {
  return(
    <div>
    <button page="1" onClick={props.clickNext}>Checkout Now</button>
    </div>
  )
};

const F1 = (props) => {
  return(
    <div>
      <h3>Create Account</h3>
      <input type="text" placeholder="Name" size="30" name="name" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Email Address" size="30" name="email" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Password" size="30" name="password" onChange={props.handleChange} /><br></br> 
      <button page="2" onClick={props.clickNext}>Create Account</button>
    </div>
  )
};

const F2 = (props) => {
  return(
    <div>
      <h3>Shipping Address</h3>
      <input type="text" placeholder="Line 1" size="30" name="line1" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Line 2" size="30" name="line2" onChange={props.handleChange}/><br></br>
      <input type="text" placeholder="City" size="30" name="city" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="State" size="14" name="state" onChange={props.handleChange} />
      <input type="text" placeholder="Zip Code" size="14" name="shipZip" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={props.handleChange} /><br></br>
      <button page="3" onClick={props.clickNext}>Continue to Payment</button>
    </div>
  )
};

const F3 = (props) => {
  return(
    <div>
      <h3>Payment Information</h3>
      <input type="text" placeholder="Card Number" size="30" name="cardNumber" onChange={props.handleChange}/><br></br>
      <input type="text" placeholder="Expiration Date" size="14" name="expDate" onChange={props.handleChange}/>
      <input type="text" placeholder="CVV" size="14" name="cvv" onChange={props.handleChange}/><br></br>
      <input type="text" placeholder="Billing Zip Code" name="billZip" onChange={props.handleChange}/><br></br>
      <button page="4" onClick={props.clickNext}>Continue to Confirmation</button>
    </div>
  ) 
};

const Confirmation = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.shipZip}</p>
        <p>{props.phoneNumber}</p>
    <br></br><br></br>
      <h3>Credit Card Information</h3>
        <p>{props.cardNumber}</p>
        <p>{props.expDate}</p>
        <p>{props.cvv}</p>
        <p>{props.billZip}</p>
    <br></br><br></br>
    <button page="0" onClick={props.clickNext}>Purchase Now!</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));