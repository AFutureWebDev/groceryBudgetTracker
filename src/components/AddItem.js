import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }


    addItemText = (e) => this.setState({[e.target.name]:e.target.value});

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                <input type="text" name="title" style={{flex: '10', padding: '5px'}} placeholder="Add Item..." value={this.state.title} onChange={this.addItemText}/>
                <input type="submit" value="submit" className="btn"
                style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddItem
