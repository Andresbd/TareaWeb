import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

//Images
import thunderstorm from '../images/Thunderstorm.png'
import drizzle from '../images/Drizzle.png'
import rain from '../images/Rain.png'
import snow from '../images/Snow.png'
import atmosphere from '../images/Atmosphere.png'
import clear from '../images/Clear.png'
import clouds from '../images/Cloudy.png'
import extreme from '../images/Extreme.png'

//Flux stuff
var WeatherStore = require('../stores/WeatherStore')
var WeatherActions = require('../actions/WeatherActions')

const styles = theme => ({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
 },
 container: {
   
 },
  root: {
    flexGrow : 1,
    fontfamily: 'Raleway, sans-serif',
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: 200,
    width: 100,
    marginTop: '10%',
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  styles: {
    width: '100%',
    fontsize: '4em',
    fontfamily: 'Raleway, sans-serif',
    textAlign: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing.unit * 5,
    width: 300,
  },
  Typography: {
    fontfamily: 'Raleway, sans-serif',
    textAlign: 'center'
  }
});

const styleBox = {
  marginTop: '5rem',
}


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.cities = WeatherStore.getList().list

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    open: false,
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    WeatherStore.clearList();
    window.history.pushState(this.state.value, this.state.value+'\'s forecast', '/'+this.state.value);
    console.log('Retrieving weather data for: '+this.state.value);
    WeatherActions.getRandom(this.state.value)
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
      <Grid 
      container 
      spacing={24}
      justify="center"
      alignItems="center"
      style={styleBox}
      >
      <Grid container spacing={12}
      justify="center"
      alignItems="center">
      <Typography className={classes.root} component="h2" variant="h1" gutterBottom align="center">
        Consulta de clima
      </Typography>
      </Grid>
      <Grid container spacing={6}
      justify="center"
      alignItems="center">
        <form onSubmit={this.handleSubmit}>
          <TextField
          id="city"
          label="Ciudad"
          margin="normal"
          value={this.state.value} onChange={this.handleChange}>
          </TextField>
        </form>
        </Grid>
      </Grid>
      <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={24}>
      {this.cities.map(value => (
        <Grid item s>
        <Paper className={classes.paper}>
        <Typography type="display1">
          {JSON.stringify(value.datetime)}
        </Typography>
        {/* <img src={`${weatherIcon}`} alt="WeatherIcon" height="64" width="64" /> */}
        <Typography type="subheading" >
          Minima: {JSON.stringify(value.temp_min)} Maxima: {JSON.stringify(value.temp_max)} Desc: {JSON.stringify(value.description)}
        </Typography>
              </Paper>
            </Grid>
            ))}
        
      </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
