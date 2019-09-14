import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GroceryItem extends Component {
getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        // Is the groceryItem completed? If yes, put a line through the text, and if not, leave the styling as is.
        textDecoration: this.props.item.completed ?
        'line-through' : 'none'
    }
}

    render() {
        const {id, title} = this.props.item;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//   PropTypes
GroceryItem.propType = {
   item: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right' 
}

export default GroceryItem
