import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';

class Overview extends Component(){
    render(){
        return(
            <div className="contact-body" style={{width: '80%', margin: 'auto'}}>
                
            <div>
        <Grid className="demo-grid-ruler">
        <Cell col={4}>
        
            <div className="contact-top">
                <h2>Contact Page</h2>
            </div>
        </Cell>
        <Cell col={8}>
        
        <div className="contact-top">
            <h2>Contact Page</h2>
        </div>
    </Cell>
    </Grid>
    </div>
    </div>
            )
    }
       
    
}export default Overview;