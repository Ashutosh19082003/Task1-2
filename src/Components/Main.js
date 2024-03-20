import React from 'react'
import './Main.css'
import Doctor from '../../src/Assets/dr.png'
import global from '../../src/Assets/global.png'

const Main = () => {
  return (

    <div className='container mb-5'>
      <div className='row mt-5 mb-5'>

        <div className='col-md-6'>
          <h1>
            Treat Your Illness at Home and Save Your Time and Money
          </h1>
          <p>Are you searching for a convenient and efficient way to access Homeopathy treatment? Well, your search ends here with H-CURA, the premier Online Homeopathy Consultation platform. Our distinctive service seamlessly brings Homeopathy treatment right to your fingertips. Thanks to our user-friendly app, you can bid farewell to the hassles of travel and, in the process, save both time and money by consulting with Homeopathic Doctors online. You’ll have the flexibility to connect with some of India’s most trusted and leading Homeopathic Doctors from the comfort of your own home or wherever you may be. So, why wait? Embrace the future of healthcare with H-CURA. Join us in our mission to make quality care accessible to all. Download our app today and experience the convenience of Online Homeopathy Consultation at your Fingertips.</p>
        </div>
        <div className='col-md-6'>
          <img src={Doctor} alt="" className='doctor' />
        </div>

      </div>
      <div className='row mt-5 mb-5'>
        <h1 className='center head'>HAPPY PATIENTS </h1>
        <div className='col-md-6 mt-5'>
          <img src={global} alt="" className='patient-global' />
        </div>                                           
        <div className='col-md-6 mt-5'>
          <h3 className='patient-para'>Iam sufering from Multiple compliants of PCOS,Obesity and GERD My body has been showing periods symptoms since 24th Sep. Breast pain....Thanks to hcura which transformed my life
            Swetha
            Goverment Staff
            I was suffering from Sevier alergetic problem and had taken allopethic medicine (levo citrizin) for 3 month but as i stop to taking it, it again started. After that i consult homiopethic Dr. Devangi Rajyaguru through H-cura. With her advice started to take Homiopethic medicine and the miracle is.... within a month i got successful results and i.e. around 90% cured. Thanks to H-cura, i can overcome from that small but depressed phase</h3>
          <div className='row mt-5'>
            <div className='col-md-4 mt-3'>
              <button className='button-download' type="button">Download Now <span><i class="fa-solid fa-arrow-right"></i></span></button>
            </div>
            <div className='col-md-4 mt-3'>
              <button className='button-play' type="button"><span><i class="fa-brands fa-google-play"></i></span> Google play </button>
            </div>
            <div className='col-md-4 mt-3'>
              <button className='button-ios' type="button"><span><i class="fa-brands fa-apple"></i></span> App store </button>
            </div>
          </div>

        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <h1 className='magazine-head'>Magazine Features</h1>
        <div className='col-md-3 mt-5 magazine'>
              <img src="	https://h-cura.com/wp-content/uploads/2023/07/Screenshot-2023-07-21-152034.png" alt="" />
        </div>
        <div className='col-md-3 mt-5  magazine'>
                 <img src="	https://h-cura.com/wp-content/uploads/2023/07/Screenshot-2023-07-21-151932.png" alt="" />
        </div>
        <div className='col-md-3 mt-5 magazine'>
          <img src="	https://h-cura.com/wp-content/uploads/2023/07/Screenshot-2023-07-21-152808-1024x674.png" alt="" />
        </div>
        <div className='col-md-3 mt-5 magazine'>
               <img src="	https://h-cura.com/wp-content/uploads/2023/07/Screenshot-2023-07-21-152305.png" alt="" />
        </div>
      </div>
      <div className='row mt-5 mb-5'>
    <div className='col-md-6 mt-5'>
    <img src="https://h-cura.com/wp-content/uploads/2021/08/Dr-Sakshi-edited-808x1024.jpg" alt="" className='dr-sakshi'/>
    </div>
    <div className='col-md-6 mt-5 enhanced'>
       <h1>

Expert Doctors for Enhanced Healthcare</h1>
<p>In today’s fast-paced world, people frequently encounter a myriad of health issues that can significantly disrupt their daily lives. To effectively tackle these challenges, our Online Homeopathy Consultation platform has been meticulously designed and launched. We have assembled a diverse team of highly experienced and renowned doctors, each possessing their own unique specializations. All of this expertise is readily accessible through a user-friendly online platform, just a click away.

Our foremost concern is your safety, and we take it seriously. Our app strictly adheres to stringent safety protocols, guaranteeing you a secure and dependable means of connecting with our team of expert doctors instantaneously, irrespective of your location or the time of day. With our Online Homeopathy Consultation platform, accessing top-notch healthcare has never been more convenient.

Don’t let health issues hinder your progress any longer. Explore the myriad benefits of online homeopathy consultation and establish a connection with our team of distinguished experts today
</p>
    </div>
      </div>
    </div>

    
    

  )
}

export default Main
