import React from "react";
import "./style.css";


function ContactForm(props) {

    return (
        <form id="contactmeform" action="mailto:himadris@gmail.com" method="post" enctype="text/plain">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Please enter your name" />
            </div>
            <div className="form-group">
                <label for="email">E-mail Address</label>
                <input type="email" class="form-control" id="email" placeholder="Please enter your email " />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="4" required="required" placeholder="Enter your message here"></textarea>
            </div>
            <input className="btn btn-outline-dark" type="submit" name="sumbit" />
            <input className="btn btn-outline-dark" type="reset" name="reset" />
        </form>
    );
}

export default ContactForm;