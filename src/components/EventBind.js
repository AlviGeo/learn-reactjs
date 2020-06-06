<<<<<<< HEAD
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello!",
    };

    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye!",
  //   });
  //   console.log(this);
  // }

  clickHandler = () => {
      this.setState({
          message: 'Goodbye!'
      })
  }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
=======
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind
>>>>>>> 707da041bea24915b92f49c5ea0e601ed0ee4867
