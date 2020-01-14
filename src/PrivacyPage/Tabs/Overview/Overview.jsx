import React from "react";
import { Grid, Image, Segment } from 'semantic-ui-react'
import "./Overview.css";

function Overview() {
    return (
       <div className="overview">
            <div className="overview-div">
                <p>kjfjkjfgaaagfjjjjfffffffffffffff <br/>
                fhgfdgkggggggggggggggggggggggggggggggg <br/>
                hgfffffffffffffffffffffffffffffffffffff <br/>
                jhahhdddddddddddddddddddddddddddddddddd <br/>
                        aaaaaaaaaaaaaaaaaaaaaaaaaa <br/>
                
                </p>
                <hr />
                <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
      <h5 className="section-head">Privacy Policy</h5>
      
                    <p className="section-paragraph">Explain what information we collect and why,
                        how we use it, and how to review and update it.</p>
                        <br/>
                    <p className="section-link"> <a href="http://fb.com" style={{}}>Read our Privacy Policy</a></p> 

                    <br/>
                    <br/>
                    <h5 className="section-head">Data Policy</h5>
                    
                    <p className="section-paragraph">Explain what information we collect and why,
                        how we use it, and how to review and update it.</p>
                        <br/>
                    <p className="section-link"> <a href="http://fb.com" style={{}}>Read our Privacy Policy</a></p>    
            
                
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <h5 className="section-head">Privacy Policy</h5>
                    
                    <p className="section-paragraph">Explain what information we collect and why,
                        how we use it, and how to review and update it.</p>
                        <br/>
                    <p className="section-link"> <a href="http://fb.com" style={{}}>Read our Privacy Policy</a></p> 

                    <br/>
                    <br/>
                    <h5 className="section-head">Data Policy</h5>
                    
                    <p className="section-paragraph">Explain what information we collect and why,
                        how we use it, and how to review and update it.</p>
                        <br/>
                    <p className="section-link"> <a href="http://fb.com" style={{}}>Read our Privacy Policy</a></p>    
            
                

    </Segment>
    </Grid.Column>
  </Grid>
                </div>
       </div>
    )
}

export default Overview