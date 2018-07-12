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
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  clickNext(page){
    this.setState({
      page: page
    });
    fetch('http://127.0.0.1:3000/', {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(response => console.log(response))
    .catch(err => console.log(err, 'Error Posting'));
  }

  displayPage(page){
    if(this.state.page === 0) return <FirstPage clickNext={this.clickNext} handleChange={this.handleChange} />
    if(this.state.page === 1) return <F1 clickNext={this.clickNext} handleChange={this.handleChange} />
    if(this.state.page === 2) return <F2 clickNext={this.clickNext} handleChange={this.handleChange} />
    if(this.state.page === 3) return <F3 clickNext={this.clickNext} handleChange={this.handleChange} />
    if(this.state.page === 4) return <Confirmation clickNext={this.clickNext} data={this.state} />  
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
    <button onClick={ () => {props.clickNext(1)}}>Checkout Now</button>
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
      <button onClick={ () => {props.clickNext(2)}}>Create Account</button>
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
      <button onClick={ () => {props.clickNext(3)}}>Continue to Payment</button>
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
      <button onClick={ () => {props.clickNext(4)}}>Continue to Confirmation</button>
    </div>
  ) 
};

const Confirmation = (props) => {
  console.log(props.data);
  return (
    <div>
      <h3>Personal Information</h3>
          <p>Name: {props.data.name}</p>
          <p>Email: {props.data.email}</p>
          <p>Address Line 1: {props.data.line1}</p>
          <p>Address Line 1: {props.data.line2}</p>
          <p>City: {props.data.city}</p>
          <p>State: {props.data.state}</p>
          <p>Zip Code: {props.data.shipZip}</p>
          <p>Phone Number: {props.data.phoneNumber}</p>
      <h3>Credit Card Information</h3>
          <p>Card Number: {props.data.cardNumber}</p>
          <p>Expiration Date: {props.data.expDate}</p>
          <p>CVV number: {props.data.cvv}</p>
          <p>Billing Zip Code: {props.data.billZip}</p>
    <button onClick={ () => props.clickNext(0) }>Purchase Now!</button>
    </div>
  )

};

ReactDOM.render(<App />, document.getElementById('app'));