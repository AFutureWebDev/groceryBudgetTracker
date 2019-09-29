import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export class GroceryItem extends Component {
    state = {
        completed: false,
    }

getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        // Is the groceryItem completed? If yes, put a line through the text, and if not, leave the styling as is.
        textDecoration: this.state.completed ?
        'line-through' : 'none'
    }
}

complete = () => {
    let currentState = this.state.completed;
    this.setState({completed:!currentState});
}

    render() {
        const {id, title} = this.props.item;
        return (
            <div style={this.getStyle()}>
                <div style={{display: 'flex', flexDirection: 'row', width: '300px',}}>
                    <Modal complete={this.complete}/> 
                    <p style={{marginLeft: '10px'}}>{title}</p>
                </div>
                <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
            
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
}

export default GroceryItem
