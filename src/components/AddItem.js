import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: '',
        searchText: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({title: ''});
    }

    // addItemText = (e) => {
    //     console.log('hello');
    // this.setState({[e.target.name]:e.target.value})
    // };

    // Search Text
    searchText = (e) => {
        console.log('is this working');
        this.setState({searchText:e.target.value});
        // added the next line from the addItemText function above
        this.setState({[e.target.name]:e.target.value});
     }

     searchGroceries() {
        fetch(`/search/${this.state.searchText}`)
            .then(function(response) {
              return response.json();
            })
            .then(function(myJson) {
              console.log(JSON.stringify(myJson));
            });
        }


    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                <input type="text" name="title" style={{flex: '10', padding: '5px'}} placeholder="Add Item..." value={this.state.title} 
                onChange={this.searchText}/>
                <input type="submit" value="Submit" className="btn"
                style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddItem
