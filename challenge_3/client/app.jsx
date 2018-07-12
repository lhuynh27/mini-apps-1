class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.clickNext = this.clickNext.bind(this);
      this.state = {
        currentPage: ''
      }
  }
  
  handleChange(e){
    console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  // clickNext() => {
  //   this.setState({
  //     page: //page that will render next
  //   })
  // }
  
  render(){
    return(
      <div>
        <h1>Shopping Cart</h1>
        <F1 handleChange={this.handleChange} onClick={this.clickNext} /> 
        <F2 handleChange={this.handleChange} onClick={this.clickNext} />
        <F3 handleChange={this.handleChange} onClick={this.clickNext} />
      </div>
    )
  }
};

const F1 = (props) => {
  return(
    <div>
      <h3>Create Account</h3>
      <input type="text" placeholder="Name" size="30" name="name" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Email Address" size="30" name="email" onChange={props.handleChange} /><br></br>
      <input type="text" placeholder="Password" size="30" name="password" onChange={props.handleChange} /><br></br> 
      <button>Create Account</button>
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
      <button>Continue to Payment</button>
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
      <button>Continue to Confirmation</button>
    </div>
  ) 
};

ReactDOM.render(<App />, document.getElementById('app'));