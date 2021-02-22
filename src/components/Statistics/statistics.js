import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './statistics.css';
import Logo from './../../images/mentalhealth.jpg'

const Statistics = () => (
  <div>
<div class= "rightQuoteDiv">
      
      “Being a nurse was associated with a range of mental health issues, including higher stress, burnout, anxiety, depression, PTSD symptoms, psychiatric morbidity, and psychological distress compared to being a physician or other HCW.” <br/>
     (Sirois & Owens,2021)</div>
     <div class= "leftQuoteDiv">
      
     “Being a nurse working in the pandemic has become worrisome but I know that I have to be strong for my family.” <br/>
     (Khristel Dulatre, 2021)</div>
  <div class="container">
  <div class="row">
  <h1 class="sectionTitle">Statistics of How Covid-19 Impacts Nurses</h1>
  
    <div class="col-sm">
    <h4>General Statistics about COVID-19</h4>
    <ul>

<li> <a target="blank" href= "https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html">  Canadian statistics on COVID-19 </a></li>
<li> <a target="blank" href= "https://covid-19.ontario.ca/index.html">  Ontario statistics on COVID-19 </a></li>
<li>Stelnicki, A. M., Carleton, R. N., & Reichert, C. (2020). Nurses’ mental health and well-being: Covid-19 impacts. Canadian Journal of Nursing Research, 52(3), 237–239. <a  target="blank" href= "https://doi.org/10.1177/0844562120931623">https://doi.org/10.1177/0844562120931623</a></li>
<li>Galehdar, N., Kamran, A., Toulabi, T., & Heydari, H. (2020). Exploring nurses’ experiences of psychological distress during care of patients with COVID-19: a qualitative study. BMC Psychiatry, 20(1). <a  target="blank" href= "https://doi.org/10.1186/s12888-020-02898-1">https://doi.org/10.1186/s12888-020-02898-1</a></li>
<li> <a target="blank" href= "https://www.camh.ca/-/media/files/pdfs---public-policy-submissions/covid-and-mh-policy-paper-pdf.pdf">  Mental Health in Canada: Covid-19 and Beyond CAMH Policy Advice </a></li>
</ul>
</div>
<div class="col-sm">
      <img src={Logo} id= "mentalHealth"alt="img"></img>
    </div>
  </div>

<br/>
<h4>Impact of COVID-19 on the mental health of nurses and other health care providers</h4>

<ul>

<li> About 70% of Canadian health care providers have reported that their mental health has worsened since the start of the COVID-19 pandemic (Statistics Canada, 2021)
  <ul> 
    <li>Nurses already are in a profession that is stressful, and with COVID-19 they are encountering other factors that contribute to their increase in stress (Stelnicki et al., 2020). 
        On top of being short staffed and being burnt out, these nurses are worrying about the lack of and access to personal protective equipment (PPE), limiting contact with their families
        and the continuation of ignorance for the precautionary guidelines by the public (Stelnicki et al., 2020).</li>
  </ul> 

</li>

<li> 63% of Canadian health care providers working directly with patients confirmed or suspected to have COVID-19 have experienced increased stress while at work (Statistics Canada, 2021)
  <ul> 
    <li>Working with confirmed or suspected COVID-19 patients heightens the stress of nurses due to the severity of the disease process. At the start of the pandemic there were uncertainties
        of interventions that would be effective. Stress related to potentially infecting their families, causing them to isolate themselves from their loved ones and constant anxiety of 
        potentially contracting the disease. Lastly, the stress related to contacting the patients families, regarding the prognosis and explaining to the family about the state of the
         patient (Galehdar et al., 2020).
    </li>
  </ul> 

</li>

<li> High prevalence of burnout, anxiety, depression, and fear among frontline nurses (Hu et al., 2020)</li>
<li> One study indicates that 41.5% of nurses and physicians directly caring for those with COVID-19 experienced depression, anxiety, insomnia, and/or distress (Wu et al., 2020)
  <ul> 
    <li>These essential workers have increased susceptibility of mental health problems due to the fact that they are at the greatest risk of exposure to COVID-19. There are many factors
       that contribute to these mental health problems such as keeping themselves, colleagues and their families safe by wearing the appropriate PPE (Center for Addiction and Mental Health 
       [CAMH], 2020). When that PPE is insufficiently provided and shortages become an issue, reduced staffing all increases a nurses stress contributing to their mental health problems
        (CAMH, 2020).
    </li>
  </ul> 

</li>
<li>Another study found that 42.7% of frontline nurses experienced somatic symptoms such as fatigue, bodily pain, and shortness of breath (Hong et al., 2021).
</li>
<li> Nurses in British Columbia were found to have higher suicidal ideation rates compared to the national average (Hainsworth, 2020)</li>
</ul>
      
    </div>
  
  </div>

 

)



export default Statistics;
