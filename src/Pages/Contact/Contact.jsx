import React, { useState, useEffect } from "react";
import "./Contact.css";
import FooterSection from "../../components/Footer/Footer";






function ContactPage() {
          const [formInfo, setFormInfo] = useState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });

          const [emailError, setEmailError] = useState(false);
          const [showMessage, setShowMessage] = useState(false);

          // to handle any change in input 
          const handleInputChange = (e) => {
            const { name, value } = e.target;

            setFormInfo({
              ...formInfo,
              [name]: value,
            });
          };
           // to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (message.trim() === "") {
      setEmailError(true);
    }

    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      setShowMessage(true);
      setEmailError(false);
      setFormInfo({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };




  return (
    <section>
    
      {showMessage && (
        <p className="form_modal">Your message was sent succesfully</p>
      )}


      <div className="contact_container">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form
          action="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className= "contact_form"
        >
         
          <div className="form_names">

            <div>
              <label >First Name</label>
              <input
                value={formInfo.firstName}
                onChange={handleInputChange}
                type="text"
                id="first_name"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            {/* last name */}
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                value={formInfo.lastName}
                onChange={handleInputChange}
                type="text"
                id="last_name"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* email */}
          <div className= "form_email" >
            <label htmlFor="email">Email</label>
            <input
              value={formInfo.email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              required
            />
          </div>

          {/* message */}
          <div className="form_message" >
            <label htmlFor="message">Message</label>
            <textarea
              style={{
                outline: `${
                  emailError ? "2px solid red" : "1px solid #d0d5dd"
                }`,
              }}
              value={formInfo.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            {emailError && <p>Please enter a message</p>}
          </div>

          {/* confirmation */}
          <div className= "form_confirm" >
            <input type="checkbox" id="confirm" />
            <p>
              You agree to providing your data to Ibukunoluwa who may contact you.
            </p>
          </div>

          {/* submit */}
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>

      <FooterSection />

      
    </section>
  );
}

export default ContactPage;
