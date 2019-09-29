import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './styles/modal.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    textAlign: 'center'
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    price: ''
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChangePrice = (e) => {
      this.setState({price: e.target.value});
  }

  sendGrocery = (e) => {
    e.preventDefault();
    let newItem={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          item: 'pineapple',
          price: this.state.price,
      })
    }
    fetch("http://localhost:3001/groceries", newItem).then((res)=>{
      console.log(res.json())
    })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Button className="priceButton" style={{marginBottom: 10}} size="small" variant="contained" color="primary" onClick={()=> {this.handleOpen(); this.props.complete();}}><i class="fas fa-check-square"></i></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              How much is this item?
            </Typography>
            <i class="fas fa-dollar-sign"></i><input style={{marginLeft: 5}} onChange = {this.onChangePrice}></input> <br/>
            <Button style={{marginTop: 10}} size="small" variant="contained" color="secondary" onClick={this.sendGrocery, this.handleClose}>Submit</Button>
          </div>
        </Modal>
      </div>
    );
  }
}



// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;