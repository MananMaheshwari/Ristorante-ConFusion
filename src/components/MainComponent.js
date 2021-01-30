import React, {Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dishes: DISHES,
       selectedDish: null
    }
  }
   
  render(){
    const HomePage= () => {
      return(
        <Home/>
      );
    }

    return (
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes}/> }/> 
        <Redirect to="/home"/> 
      </Switch>  
      <Footer/>
      </div>
    );
  }
}

export default Main;
