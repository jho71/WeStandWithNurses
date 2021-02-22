import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import Image from './../../images/sideBySide.jpg'
const About = () => (
  
  <div>

  <div class="container">
  <div class="row">
  <h1 class="sectionTitle">About Us</h1>
    <div class="col-sm">
    
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are passionate nursing students aiming to bring awareness to nurses’ mental health during COVID-19. </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our goal is to help support nurses’ mental health and well-being during COVID-19. Nurses have been asked 
      to take on physically and mentally demanding roles during this pandemic. It has caused severe fatigue and
      a cry for help! Our focus as nursing students is to help raise awareness of the impact that COVID-19 is
      having on nurses mental health and create a change initiative. This change initiative will consist of
      educating the public about the impact the pandmeic is having on nurses' mental health and ways that we
      can all do our part in supporting the nurses who work tirelessly to keep the public safe.</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ask yourself,
      “How is COVID-19 impacting my mental health and well-being?” and think about how nurses’ are being
      impacted everyday during these difficult times. Our nurses need our help and together we can make
      it a difference! Join us in supporting nurses’ mental health and well-being during COVID-19.</p>

      
    </div>
    <div class="col-sm">
      <img src={Image} id= "sideBySide"alt="img"></img>
    </div>
  </div>

 
</div>
</div>
)



export default About;
