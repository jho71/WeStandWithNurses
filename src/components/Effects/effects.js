import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './effects.css';
import Image from './../../images/PHOTO-2021-02-15-15-50-50 - Copy.jpg'
const Effects = () => (
  
  <div>
  <div class= "rightQuoteDiv">
  “Working during COVID-19 has affected my work life. Donning and doffing PPE and wearing the surgical mask or n95 mask the whole 12 hr shift can be a hassle but I have to be vigilant now more than ever...It is tiring and stressful to wear PPE...I am scared that I can contract the virus and pass it on to my family.” <br/>
 (Khristel Dulatre, 2021) </div>
 <div class= "leftQuoteDiv">
       
 “Worry about becoming infected is a key stressor for HCW in the context of an outbreak as risk of infection has implications for not only for their own health but also for that of their families” <br/>
  (Sirois & Owens, 2021) </div>
  
  <div class="container p-3 my-3 ">
    <div class="row">
    <h1 class = "sectionTitle effectsTitle">Effects of Covid-19 on Nurses and Why The Public Should Care</h1>
  
    <div class="col-sm">
    <br/>
    <br/>
    <ul>
      <li>“Psychological distress is linked to adverse occupational outcomes including decreased quality of patient care, irritability with colleagues, cognitive impairments that negatively impact patient care, and intentions to leave one's job” (Sirois & Owens,2021).</li>
      <li>High degrees of job-related stress may result in a loss of compassion, leading to suboptimal care, elevated rates of safety breaches, and higher incidents of clinical practice errors (Safaris et al., 2016).</li>
      <li>One survey reveals coping with the reality of human suffering before (the patient’s) actual death as the most stressful dimension of nursing. The regretful feelings about not being able to prevent a death may be a major source of stress, impeding the nurse’s ability to work efficiently (Safaris et al., 2016)</li>
      <li>Issues with patients and their families range from absence of cooperation to violent episodes. Feeling unequipped to cope with their different emotional needs creates feelings of anger, fear and disappointment in nursing staff, leading to higher stress levels (Sarafis et al., 2016) </li>
      <li>Research reveals that the risk of physical and psychological violence from abusive patients and their relatives is a major stressor for nurses (Safaris et al., 2016)</li>
      <li>On an emotional plane, workplace stress has been associated with anxiety, reduced self-esteem, depression and feelings of deficiency (Safaris et al., 2016), </li> 
    </ul>
    </div>
    <div class="col-sm">  
    <br/>
    <br/>
      <img src={Image} id="help" alt="img"></img>
    </div>
  </div>
  </div>
  </div>
)



export default Effects;
