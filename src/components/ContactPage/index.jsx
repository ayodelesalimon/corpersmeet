import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl';
import './ContactPage.css';

class ContactPage extends Component{
    render(){
        return(
            <div className="contact-body">
               <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={12}>1=contact</Cell>
        
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={6}>
        <Card shadow={0} style={{width: '300px', height: '456px', margin: 'auto'}}>
        <form>
            <div>
            <input className="contact-name" type="text" name="name" placeholder="name"/>
            </div>
            <div>
            <input className="contact-email" type="text" name="email" placeholder="email"/>
            </div>
            <div>
            <input className="contact-message" type="text" name="text" placeholder="message"/>
            </div>
            <div>
            <input className="send-btn" type="submit" value="Send Message" />
            </div>
    </form>
    
</Card>

        </Cell>
        <Cell col={6}>
            <h2>OUR MEDIA</h2>
            <p>
                adhvgjhjshdgjsghljshgljsghlsghsljghg <br/>
            </p>
        </Cell>
        
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={12}>contact</Cell>
    
        
    </Grid>
</div>      
 </div>

        )
}
}

export default ContactPage;