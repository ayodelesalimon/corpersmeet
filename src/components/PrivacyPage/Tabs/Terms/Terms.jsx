import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import "./Terms.css";

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={4}>
          <div className="head-bar">
        <ol>
             <li>ayodele</li>
            <li>ayodele</li>
            <li>ayodele</li>
            <li>ayodele</li>
        </ol>
        </div>
      </Grid.Column>
      <Grid.Column width={12}>
      <div className="overview-section2">
                    <h1 className="section2-header">OUR MEDIA</h1>
                    <p className="section2-paragraph">Here you could try to tell us what you feek that we can use to improve the website overall experiences 
                    of choice to tell us anything you think we missed!  Just click on any of our handles below
                    </p>
                    <div className="icons">
                        <p className="section2-paragraph">facebook icon</p>
                        <p className="section2-paragraph">twitter icon</p>
                    </div>

                    <h1 className="section2-header">NEED TO TALK OVER VOICE ?</h1>
                    <p className="section2-paragraph">To show that we care, we decided to add overview numbers that you can reach us on between
                    9am and 7pm. Thanks for choosing us.<br />MAY NIGERIA BE EVER GREEN</p>
                    <p className="section2-paragraph2">+234 000 000 000</p>
                    <p className="section2-paragraph2">+234 000 000 000</p>
                </div>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
)

export default GridExampleCelledInternally