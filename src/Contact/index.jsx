import React from "react"
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="contact-div">
                <h1 className="contact-header">Contact Support</h1>
            </div>

            <div className="contact-section">
                <div className="section-div">
                    <h3 className="section-header">How can we help you ?</h3>
                    <hr />
                    <form className="form">
                        <div className="inputs">
                             <input type="text" className="form-input" placeholder="Name" />
                            <input type="email" className="form-input" placeholder="Email" />
                        </div>
                       
                        <textarea rows="9" placeholder="Message" className="form-input2" />

                        <button type="submit" className="buttons">Send Message</button>
                    </form>
                </div>

                <div className="contact-section2">
                    <h1 className="section2-header">OUR MEDIA</h1>
                    <p className="section2-paragraph">Here you could try to tell us what you feek that we can use to improve the website overall experiences 
                    of choice to tell us anything you think we missed!  Just click on any of our handles below
                    </p>
                    <div className="icons">
                        <p className="section2-paragraph">facebook icon</p>
                        <p className="section2-paragraph">twitter icon</p>
                    </div>

                    <h1 className="section2-header">NEED TO TALK OVER VOICE ?</h1>
                    <p className="section2-paragraph">To show that we care, we decided to add contact numbers that you can reach us on between
                    9am and 7pm. Thanks for choosing us.<br />MAY NIGERIA BE EVER GREEN</p>
                    <p className="section2-paragraph2">+234 000 000 000</p>
                    <p className="section2-paragraph2">+234 000 000 000</p>
                </div>
            </div>

            <div className="contact-footer">
                <div>
                    <h2 className="contact-footer-header">Start connecting with people in less than 10 minutes..</h2>
                </div>
                <div className="contact-footer-button">
                    <button type="button" className="button2">Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Contact