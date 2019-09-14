import React from 'react';
import GroceryItem from './GroceryItem';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {

    render() {
    return this.props.groceryList.map((item) => (
        <GroceryItem key = {item.id} item = {item} markComplete = {this.props.markComplete} delItem = {this.props.delItem}/>
    ));
    }
  }
  
//   PropTypes
  GroceryList.propType = {
      groceryList: PropTypes.array.isRequired
  }

  export default GroceryList;