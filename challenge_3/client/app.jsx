class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        page: ''
      }
  }

  // clickNext() => {
  //   this.setState{
  //     page: //page that the button was click on
  //   }
  // }
  
  render(){
    return(
      <div>
        <h1>Shopping Cart</h1>
        <F1 /> 
        <F2 />
        <F3 />
      </div>
    )
  }
};

//IGNORE EVERYTHING IN BETWEEN <DIV>; testing to see how the forms look

class F1 extends React.Component {
  constructor(props){
    super(props);
  }
  
  // goes to the next form
  // toAddressPage() {
  //   e.preventDefault();
  // }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  render(){
    return(
      <div>
        <h3>Create Account</h3>
        <input type="text" placeholder="Enter Name" size="30" onChange={this.handleNameChange.bind(this)} /><br></br>
        <input type="text" placeholder="Enter Email Address" size="30" onChange={this.handleEmailChange.bind(this)} /><br></br>
        <input type="text" placeholder="Enter Password" size="30" onChange={this.handlePasswordChange.bind(this)} /><br></br> 
        <button onClick={this.toAddressPage}>Create Account</button>
      </div>
    ) 
  }
};

class F2 extends React.Component {
  constructor(props){
    super(props);
  }

  handleLine1Change(e) {
    this.setState({
      line1: e.target.value
    })
  }

  handleLine2Change(e) {
    this.setState({
      line2: e.target.value
    })
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleStateChange(e) {
    this.setState({
      state: e.target.value
    })
  }

  handleShipZipChange(e) {
    this.setState({
      shipZip: e.target.value
    })
  }

  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  render(){
      return(
        <div>
          <h3>Shipping Address</h3>
          <input type="text" placeholder="Address Line 1" size="30" onChange={this.handleLine1Change.bind(this)} /><br></br>
          <input type="text" placeholder="Address Line 1" size="30" onChange={this.handleLine2Change.bind(this)}/><br></br>
          <input type="text" placeholder="City" size="30"onChange={this.handleCityChange.bind(this)} /><br></br>
          <input type="text" placeholder="State" size="14"onChange={this.handleStateChange.bind(this)} />
          <input type="text" placeholder="Zip Code" size="14"onChange={this.handleShipZipChange.bind(this)} /><br></br>
          <input type="text" placeholder="Phone Number" onChange={this.handlePhoneNumberChange.bind(this)} /><br></br>
          <button>Continue</button>
        </div>
      )
  } 
};

class F3 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>Payment Information</h3>
        <input type="text" placeholder="Card Number" size="30"/><br></br>
        <input type="text" placeholder="Expiration Date" size="14"/>
        <input type="text" placeholder="CVV" size="14"/><br></br>
        <input type="text" placeholder="Billing Zip Code" /><br></br>
        <button>Continue</button>
      </div>
    ) 
  }
};

ReactDOM.render(<App />, document.getElementById('app'));