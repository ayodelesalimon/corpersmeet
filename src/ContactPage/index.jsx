import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-body">
            <div className="contact-header-div">
                <h1 className="contact-header">Contact Support</h1>
            </div>

            <div className="section">
                <div className="contact-form">
                <form>
                    <div>
                    <input className="contact-name" type="text" name="name" placeholder="name"/>
                    </div>
                    <div>
                    <input className="contact-name" type="text" name="email" placeholder="email"/>
                    </div>
                    <div>
                    <textarea className="contact-name" rows="7" placeholder="message"/>
                    </div>
                    <div>

                    <div className="button-div">
                        <input className="button" type="submit" value="Send Message" />
                    </div>
                    
                    </div>
                </form>
                </div>

                <div>
                <h5>OUR MEDIA</h5>
            <p>
                Here you could try to tell us what you feel that we <br/>
                can use to improve the website overall experiences <br/>
                or choose to tell us anything you think we missed <br/>
                Just click on any of our handles below.
            </p>

            <h5>NEED TO TALK OVER VOICE</h5>
            <p>
               To show that we care, we decided to add our <br/>
               contact numbers that you can reach us on between <br/>
               9am and 7pm. Thanks for choosing us. <br/>

               MAY NIGERIA BE EVER GREEN!
            </p>
            <p>+234 000 000 000</p>
                </div>
            </div>
            <div className="section2">
                <div className="section3">
                    <p>Start connecting with people <br />in 10 minute</p>
                </div>
                <div className="create-button">
                    <button>Create Account</button>
                </div>
            </div>
        </div>
    )
}   

export default ContactPage