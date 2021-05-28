import './styles/App.scss';
import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import ShopProvider from './context/shopProvider';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import Rescroll from './functions/Top';
import { AnimatePresence } from 'framer-motion';

//componenets
// import Nav from "./components/Nav";
import Home from './pages/Home';
import AgeRestriction from './pages/RestrictionPage';
import Products from './pages/Products';
import Cart from './components/Cart';
// import ProgressBar from "./components/ProgressBar";
import PageNotFound from './pages/404';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();

//Use to be a class for the Progress Bar, need to figure out how to do it without class
function App() {
  const location = useLocation();

  return (
    <section className='App'>
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          {/* <Nav /> */}
          <Cart />
          {/* <ProgressBar scroll={this.state.scrollPosition + "%"} />
          <div id="scrollPath"></div> */}
          <Rescroll />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path='/' exact component={AgeRestriction} />
              <Route path='/home' exact component={Home} />
              <Route path='/products' exact component={Products} />
              {/* <Route path="*" component={PageNotFound} />
              <Redirect to="/404" />  for gh-pages*/}
            </Switch>
          </AnimatePresence>
        </StyletronProvider>
      </ShopProvider>
    </section>
  );
}

export default App;
