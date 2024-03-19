import React from 'react';
 // Import your dashboard image
import background1 from '../../assets/images/bg10.jpg'; // Import your dashboard image
import '../../assets/css/About.css';
import Footer from './Footer';



const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="background-image-container">
        <img src={background1} alt="Dashboard 1" className="background-image" />
        
      </div>
      <div className="text-on-background">
        <div className='about'>About Us</div>
       
      </div>
      
    <div className="container">
      {/* First Image */}
      

      {/* Text Content */}
     
        <div className='first'>The Best At-Home Medical Provider in Coimbatore<br></br></div>
        <br></br>
        <br></br>
        <br></br>
      

      {/* Second Image */}
      <div className="image22">
        <img src={dashboardImage2} alt="Dashboard 2" className="image" />
      </div>
      <div className='visi'>
     <div className='portea'>Certainly! Here's an expanded version:

"At [Company Name], we are dedicated to revolutionizing the way seniors experience care in their golden years. With a deep-rooted commitment to enhancing the lives of elderly individuals, we offer comprehensive home care services designed to promote independence, dignity, and quality of life. Our team of compassionate caregivers undergoes rigorous training and is handpicked for their expertise, empathy, and dedication to providing exceptional care.

We recognize that each senior has unique needs and preferences, which is why we take a personalized approach to every client we serve. Whether it's assistance with personal grooming, medication reminders, meal preparation, or simply companionship, our caregivers are there to provide the support and encouragement needed to thrive at home.

Beyond meeting the physical needs of our clients, we strive to foster meaningful connections and enriching experiences. We believe in creating a warm and nurturing environment where seniors feel valued, respected, and empowered to live life on their own terms.

At [Company Name], we understand that entrusting the care of your loved one to others is a significant decision. That's why we prioritize transparency, communication, and collaboration every step of the way. We work closely with families to develop customized care plans that align with their goals and preferences, ensuring peace of mind and confidence in the care provided.

Our commitment to excellence extends beyond the basics of caregiving. We continually seek out innovative approaches and best practices to enhance the quality of our services and improve the overall well-being of our clients. Whether it's implementing new technology solutions, participating in ongoing training, or staying abreast of industry trends, we are dedicated to staying at the forefront of senior care.

At [Company Name], we don't just provide care; we provide companionship, support, and a sense of belonging. We believe that every senior deserves to age with grace, dignity, and joy, and we are honored to be a part of their journey."</div>
     </div>
     
    </div>
    
     <Footer/>
     </div>
  );
};

export default About;