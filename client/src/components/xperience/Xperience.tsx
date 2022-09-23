
import React from 'react';
import '../../styles/Xperience.scss';

function Xperience() {


  return (
    <div id="experienceSection" className="scrollspy container myHomeSectionTitleHolder myContactMeTitleHolder" >
      <div className="myHomeSectionTitle">Xperience</div>

      <p className="myExperienceParagraph" style={{ marginBottom: "50px", userSelect: "text" }} >
        <div className="companyNameHolder">
          <i className="fa fa-biohazard myXpSectionIcon"></i>
          <span className="companyTitle">X0PA AI</span>
        </div>

        <div className="companyXp">
          <p className="expSectionTitle myThemeColorText" style={{ marginBottom: "0px" }}>
            <i className={`circle myMainIcon`}></i> Software Engineer II, X0PA AI (Apr 2022 - present)
          </p>
          <p style={{ marginTop: "0px" }}>

            <li>
              Developed highly customizable large-scale reports having dynamic SQL generation
            </li>
            <li>
              Responsible for software maintenance across the codebase. Required wide understanding of the internals of the software and systems
            </li>
            <li>
              Implemented bulk action on queue cron making sure with lowest latency to the end user
            </li>
            <li>
              Developing api(s), handling CRUD, database and many more
            </li>
            <li>
              Helping with deployment especially Staging and RPO
            </li>
          </p>

          <p className="expSectionTitle myThemeColorText" style={{ marginBottom: "0px" }}>
            Software Engineer, X0PA AI (Feb 2021 - Apr 2021)
          </p>
          <p style={{ marginTop: "0px" }}>

            <li>
              Developed two Virtual Mentors (Eus and Eme) with Ms Botframework SDK. One for employers and one for people with autism.
            </li>
            <li>
              Implemented FTS Search Algorithm
            </li>
            <li>
              Implemented Boolean Search Algorithm
            </li>
            <li>
              Worked on Nylas Email Integration
            </li>
            <li>
              Helped with data migration
            </li>
            <li>
              Developed REST-ful API(s)
            </li>
            <li>
              Handled CRUD, Database, and Serverside stuff
            </li>
            <li>
              Scripting and Automations etc
            </li>
          </p>
        </div>



        <div className="companyNameHolder">
          <i className="fa fa-biohazard myXpSectionIcon"></i>
          <span className="companyTitle">SilvenLEAF ORG</span>
        </div>


        <div className="companyXp">
          <p className="expSectionTitle myThemeColorText" style={{ marginBottom: "0px" }}>
            Backend Engineer, SilvenLEAF (Apr 2020 - present)
          </p>
          <p style={{ marginTop: "0px" }}>
            <li>
              Created API(s)
            </li>
            <li>
              Implemented Oauth 2.0
            </li>
            <li>
              Applied MVC Design Pattern
            </li>
            <li>
              Created Chatbots with Ms Botframework SDK
            </li>
            <li>
              Worked on Nylas Email integration
            </li>
            <li>
              Implemented FTS Search Algorithm
            </li>
            <li>
              Implemented Boolean Search Algorithm
            </li>
            <li>
              Created Web Apps and PWA(s)
            </li>
            <li>
              Cross platform React Native Apps (with expo)
            </li>
            <li>
              Automate manual tasks
            </li>
            <li>
              Applied Clean Code etc
            </li>
          </p>
        </div>
      </p>
    </div>
  )
}

export default Xperience;
