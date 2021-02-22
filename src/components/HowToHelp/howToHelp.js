import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './howToHelp.css';
import Logo from './../../images/sideBySide.jpg'

const HowToHelp = () => (
  <div class="container">
  <div class="row">
  <h1 class="aboutUsTitle"> How You Can Help Nurses</h1>
    <div class="col-sm">
    
    
<ul>
<li>Strengthen your awareness of the impact that COVID-19 is having on nurses’ mental health by completing our quiz, that highlights the importance of supporting nurses.</li>
<li>Continue to support our cause by following our Instagram page <a target="blank" href= "https://www.instagram.com/westandwithnurses/?hl=en"> @westandwithnurses</a> where we raise awareness and provide information on the impact of COVID-19 on nurses’ mental health and how you can help!</li>
<li>Strive to continually adhere to the COVID-19 safety protocols that have been implemented by the Canadian government. </li>
<li>Show your solidarity for nurses by respecting the tremendous sacrifices they are making by working long hours without seeing their loved ones</li>
<li>Regularly check our website and Instagram page for informational updates and ways you can support nurses during this pandemic</li>
<li>By collaborating together, we can support frontline nurses who tirelessly work to keep us healthy when we become ill and in need of care. </li>
</ul>
  </div>
      
   
    <div class="col-sm">
      <img src={Logo} alt="img"></img>
    </div>
  </div>
 </div>
   
)



export default HowToHelp;