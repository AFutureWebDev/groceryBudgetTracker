import React, { Component } from 'react'

export class CartTotal extends Component {
    state = {
        amount: '$10.00'
    }


    render() {
        return (
            <div> 
                <h2 style={amountTotalStyle}>$0.00</h2>
            </div>
        )
    }
}
const amountTotalStyle = {
    backgroundColor: '#3F51B5',
    height: '50px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '35px',
}
export default CartTotal
