import * as React from 'react';
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import './App.scss';
import ProductsContent from "./components/products/productsContent";

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ProductsContent></ProductsContent>
      </div>
      
    );
  }
}
const mapStateToProps = (state:any) => ({
  ...state
});
const mapDispatchToProps = (dispatch:any) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps) (App);
