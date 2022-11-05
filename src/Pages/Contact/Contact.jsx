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

            setFormData({
              ...formData,
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
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
          















  )
}

export default ContactPage;
