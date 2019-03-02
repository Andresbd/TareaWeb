import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 8,
    width: '100%',
    marginBottom: 16

  },
});

function SimpleAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleAppBar);