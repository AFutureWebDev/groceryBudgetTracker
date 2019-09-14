import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import GroceryList from './components/GroceryList';
import AddItem from './components/AddItem';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends React.Component {

  state = {
    groceryList: [
      {
        id: uuid.v4(),
        title: 'Milk',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Cookies',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Spinach',
        completed: false
      },
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({groceryList: this.state.groceryList.map(item => {
      if(item.id ===id) {
        item.completed = !item.completed
      }
      return item;
    }) });
  }

  // Delete Item
  delItem = (id) => {
    this.setState({groceryList: [...this.state.groceryList.filter(item => item.id !== id)]});
  }


  // Add Item
  addItem = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({groceryList: [...this.state.groceryList, newItem]});
  }


  render() {
  return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddItem addItem={this.addItem}/>
                <GroceryList groceryList = {this.state.groceryList} markComplete = {this.markComplete} delItem = {this.delItem}/>
              </React.Fragment>
              )}/>
              <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
