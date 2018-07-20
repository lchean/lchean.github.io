import React, { Component } from 'react';
import './app.css';
import Intro from '../Intro/index';
import Footer from '../Footer/index';

class App extends Component {

  componentDidMount(){
    const email = 'laurentchean@gmail.com';

    console.log(`==> Contact : ${email}`);
    // console.log('Did mount');
  }

  render() {
      return (
          <main className="main">
              <Intro />
              <Footer />
          </main>
      );
  }
}

export default App;
