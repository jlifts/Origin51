import './styles/App.scss';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ShopProvider from './context/shopProvider';
import {Client as Styletron} from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import Rescroll  from './context/Top';

//componenets
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import ProgressBar from './components/ProgressBar';


const debug = 
process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();



class App extends Component {
  state = {
    scrollPosition: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollHeight = docHeight - winHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollHeight * 100)

    this.setState({
      scrollPosition,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }


  render () {
  return (
    <section className='App'>
        <ShopProvider>
          <StyletronProvider value={engine} debug={debug} debugAfterHydration>
            <Router>
              <Nav />
              <Cart />
              <ProgressBar scroll={this.state.scrollPosition + '%'}/>
              <div id="scrollPath"></div>
                <Rescroll />
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/products" exact component={Products}/>
                </Switch>
              <Footer/>
            </Router>
          </StyletronProvider>
        </ShopProvider>
    </section>
  );
  }
}

export default App;
