class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        page: ''
      }
  }
  
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

const F1 = (props) => {
      return(
        <div>
          <h3>Create Account</h3>
          <input type="text" placeholder="Enter Name" size="30"/><br></br>
          <input type="text" placeholder="Enter Email Address" size="30"/><br></br>
          <input type="text" placeholder="Enter Password" size="30"/><br></br>
          <button>Create Account</button>
        </div>
      ) 
};

const F2 = (props) => {
      return(
        <div>
          <h3>Shipping Address</h3>
          <input type="text" placeholder="Address Line 1" size="30"/><br></br>
          <input type="text" placeholder="Address Line 1" size="30"/><br></br>
          <input type="text" placeholder="City" size="30"/><br></br>
          <input type="text" placeholder="State" size="14"/>
          <input type="text" placeholder="Zip Code" size="14"/><br></br>
          <input type="text" placeholder="Phone Number" /><br></br>
          <button>Continue</button>
        </div>
      ) 
};

const F3 = (props) => {
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
};

ReactDOM.render(<App />, document.getElementById('app'));