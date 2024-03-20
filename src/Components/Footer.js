import React from 'react';
import './Footer.css';
import image from '../../src/Assets/medical.png'
import play from '../../src/Assets/play1.png'
import ios from '../../src/Assets/ios.png'
const Footer = () => {
  return (
    
    <footer className="footer">

      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='Hospital-detail'>
        <h2 >Lifeline Hospital</h2>
        <h3>Chunangamvely, Aluva - 683 112<br />
          (6 km Mansarovar to Lifeline hospital)<br/>
          Jaipur, India </h3>
      </div>
      <div className='mail-phone'>
        <ul>
          <li>
            <i>Email :</i>
            mail@lifelinehospital.com
          </li>

          <br />
          <li>
            <i>Phone : </i> +91 484-290 5000, 718 4000</li>
        </ul>
      </div>
      =====================================
      <h1>Let's Stay in Touch!</h1>
      
      <div className="subScribeWrapper">

        <input name="txtEmail" type="text" maxLength="18" id="txtEmail" placeholder="Your Email Address" />

        <a className="subScribeWrapperDiv" validationgroup="subscriber" href=""> Subscribe </a>
      </div>
      <div className="footer-section">
        <h3>Hospital Links</h3>
        <ul>
          <li><a href="/">About </a></li>
          <li><a href="/">Our Inspiration</a></li>
          <li><a href="">Management Team</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">CMI Legacy</a></li>
          <li><a href="/">Group of Institution</a></li>
          <li><a href="/">Advisory Board</a></li>
          <li><a href=""> Policies & Research</a></li>

        </ul>
      </div>
      --------------------------------------------
      <div className="footer-section">
        <h3>Information Links</h3>
        <ul>
          <li><a href="/">Medical Team</a></li>
          <li><a href="">Heealth Check Packages</a></li>
          <li><a href="">Lifeline Medical Center Angamaly</a></li>
          <li><a href="">Quality</a></li>
          <li><a href="">Patient care</a></li>
          <li><a href="">STENT Price list</a></li>


          <li><a href="">Organ Transplant Service</a></li>
          <li><a href="">Otheer services</a></li>

        </ul>
      </div>
      -----------------------------------
      <div className="footer-section">
        <h3>Extra link</h3>
        <ul>
          <li><a href="/">Online Appointment</a></li>
          <li><a href="/">Find a Doctor</a></li>
          <li><a href="/">AIIMS</a></li>
          <li><a href="/">Telemedicine Services</a></li>
          <li><a href="/">Press Release</a></li>
          <li><a href="/">Globus Wing</a></li>
          <li><a href="/">Feedback</a></li>
        </ul>
      </div>
      
       <div className='download-btn'>
         <img src={play} alt=""  className='android'/>
         <img src={ios} alt="" className='mac' />
       </div>
      <div className="footer-section02">
        Lifeline Health care and Education Trust © 2024  All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;