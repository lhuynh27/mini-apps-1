class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clickNext = this.clickNext.bind(this);
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

  clickNext(page){
    this.setState({
      page: page
    })
  }

  displayPage(page){
    if(this.state.page === 0) return <FirstPage clickNext={this.clickNext} />
    if(this.state.page === 1) return <F1 clickNext={this.clickNext} />
    if(this.state.page === 2) return <F2 clickNext={this.clickNext} />
    if(this.state.page === 3) return <F3 clickNext={this.clickNext} />
    if(this.state.page === 4) return <Confirmation clickNext={this.clickNext} />  
  }

  render(){
    return(
      <div id="app">
        {this.displayPage(this.state.page)}
      </div>
    )
  }
};

const FirstPage = (props) => {
  return(
    <div>
    <h1>Shopping Cart</h1>
    <p>Cheese</p>
    <p>Wine</p>
    <p>Salami</p>
    <button page={1} onClick={ () => {props.clickNext(1)}}>Checkout Now</button>
    </div>
  )
};

const F1 = (props) => {
  return(
    <div>
      <h3>Create Account</h3>
      <input type="text" placeholder="Name" size="30" name="name" onChange={props.handleChange} /><br></br>
      <input type="email" placeholder="Email Address" size="30" name="email" onChange={props.handleChange} /><br></br>
      <input type="password" placeholder="Password" size="30" name="password" onChange={props.handleChange} /><br></br> 
      <button page={2} onClick={ () => {props.clickNext(2)}}>Create Account</button>
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
      <button page={3} onClick={ () => {props.clickNext(3)}}>Continue to Payment</button>
    </div>
  )
};

const F3 = (props) => {
  return(
    <div>
      <h3>Payment Information</h3>
      <input type="text" placeholder="Card Number" size="31" name="cardNumber" onChange={props.handleChange}/><br></br>
      <input type="month" placeholder="Expiration Date" size="14" name="expDate" onChange={props.handleChange}/>
      <input type="text" placeholder="CVV" size="5" name="cvv" onChange={props.handleChange}/><br></br>
      <input type="text" placeholder="Billing Zip Code" name="billZip" onChange={props.handleChange}/><br></br>
      <button page={4} onClick={ () => {props.clickNext(4)}}>Continue to Confirmation</button>
    </div>
  ) 
};

const Confirmation = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <p>Address Line 1: {props.line1}</p>
          <p>Address Line 1: {props.line2}</p>
          <p>City: {props.city}</p>
          <p>State: {props.state}</p>
          <p>Zip Code: {props.shipZip}</p>
          <p>Phone Number: {props.phoneNumber}</p>
    <br></br><br></br>
      <h3>Credit Card Information</h3>
          <p>Card Number: {props.cardNumber}</p>
          <p>Expiration Date: {props.expDate}</p>
          <p>CVV number: {props.cvv}</p>
          <p>Billing Zip Code: {props.billZip}</p>
    <br></br><br></br>
    <button page={0} onClick={ () => {props.clickNext(0)}}>Purchase Now!</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));