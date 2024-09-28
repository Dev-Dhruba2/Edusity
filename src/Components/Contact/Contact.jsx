import React from 'react'
import './Contact.css'
import messageicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ca09dd9-7b42-4e0c-afbe-8b51326192a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-call">
        <h3>Send us a message <img src={messageicon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact infromation below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our university community.</p>
        <ul>
          <li><img src={mailicon} alt="" /> contact@edusity.com</li>
          <li><img src={phoneicon} alt="" /> +11 123-456-789</li>
          <li><img src={locationicon} alt="" /> A dummy address</li>
        </ul>
      </div>
      <div className="contact-call">
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name="name" placeholder='Enter your name required' />
          <label >Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label >Write your message here</label>
          <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={whitearrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact