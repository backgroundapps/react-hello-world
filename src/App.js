import React, { Component } from 'react';

import Alice from './Alice';

class App extends Component {

  constructor() {

    super();

    this.state = {

      greeting: "Hello World!",
      parentMessage: "Hello Alice!!"

    }
    
    setTimeout(() => {

      this.setState({greeting : "Hello World Updated!"})

    }, 10000)
  }

  render() {

    return (

      <div className="greeting">

        <h1> {this.state.greeting} </h1>
        <Alice newMsg={this.state.parentMessage} />

      </div>

    );

  }

}

export default App;