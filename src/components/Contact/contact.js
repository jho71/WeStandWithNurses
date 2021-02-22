import React from 'react';
import Image from './../../images/covid-19-ptsd-frontline-health-care-workers-mental-health.jpg'
import './contact.css'
const Contact = () => {
  
        return (
          <div class="container">
          <div class="row">
          <h1 class="sectionTitle">Contact Information</h1>
            <div class="col-sm">

             <ul>
                 <li> <a target="blank" href= "https://www.instagram.com/westandwithnurses/?hl=en"> Instagram</a></li>
                 <li>Hashtag - <a target="blank" href= "https://www.instagram.com/westandwithnurses/?hl=en"> #WeStandWithNurses</a>  </li>

            </ul> 
            </div>
    <div class="col-sm">
      <img src={Image} id="doc" alt="img"></img>
    </div>
  </div>
  </div>
        );
}

export default Contact;