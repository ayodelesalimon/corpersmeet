import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Cell} from 'react-mdl';
import grey from "@material-ui/core/colors/grey";
import Overview from './Tabs/Overview';

const primary800 = grey["100"];
const primary700 = grey["800"]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <Typography
    
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
    
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: primary800,
    color: primary700,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="contact">
    <div className="contact-div">
        <h1 className="contact-header">Privacy & Terms</h1>
    </div>
    <div className="contact-body" style={{width: '80%', margin: 'auto'}}>
                
    
    <div >
      <AppBar position="static" className="tab-div">
        <Tabs value={value} color="green" onChange={handleChange} aria-label="simple tabs example" className={classes.root}>
          <Tab color="green" label="Overview" {...a11yProps(0)} className={classes.root}/>
          <Tab label="Privacy Policy" {...a11yProps(1)} />
          <Tab label="Term and Condition" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      
      
                <Overview/>
       
        
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid className="demo-grid-ruler">
        <Cell col={4}>
      
                <h2>Privacy & Terms </h2>
            
        </Cell>
        <Cell col={8}>
            <div>
            <h4>Terms of Service</h4>
            </div>
    </Cell>
    </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
    </div>
    </div>
    
  );
}