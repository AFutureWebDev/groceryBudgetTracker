import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PaperSheet from './PaperSheet'
import './SimpleModal.css';

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
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const name = this.props.name;
    const instrument = this.props.instrument;
    const location = this.props.location;
    const image = this.props.image;
    return (
      <div>
        <Button style={{marginBottom: 10}} size="small" variant="contained" color="primary" onClick={this.handleOpen}>View</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <img src={image} style={{maxHeight: 300}} alt="{name}" className="prof"/>
            <Typography variant="h6" id="modal-title">
              {name}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {instrument}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {location}
            </Typography>
            <PaperSheet endorsements={this.props.endorsements}/>
            <Button style={{marginTop: 10}} size="small" variant="contained" color="secondary" ><a style={{color: "white"}} href="mailto:{this.props.email}" target="_blank">Contact</a></Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;