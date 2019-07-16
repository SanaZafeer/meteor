import React ,{Component}from 'react';
import Header from './components/Header/Header'
import  Footer from './components/Footer/footer'
import  Body from './components/Body/body'


class App extends Component{
  render() {
    return(
        <div>
          <Header/>
          <Body/>
          <Footer/>
        </div>
    );
  }


}

export default App;
