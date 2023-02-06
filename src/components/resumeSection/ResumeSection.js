import { useState } from "react";
import Education from "./forms/Education";
import Experience from "./forms/Experience";
import PersonalInfo from "./forms/PersonalInfo";
import Resume from "./resume/Resume";
import classes from "./ResumeSection.module.css";

const ResumeSection = (props) => {
  const [turnSecontPage, setTurnSecondPage] = useState(false);
  const [turnThirdPage, setTurnThirdPage] = useState('');

  const restartHandler = () => {
    props.setStartResume(false);
  };

  return (
    <div className={classes.resumeSection}>
      {turnSecontPage || (
        <PersonalInfo
          restartHandler={restartHandler}
          setTurnSecondPage={setTurnSecondPage}
        />
      )}
      {turnSecontPage && (
        <Experience
          restartHandler={restartHandler}
          setTurnSecondPage={setTurnSecondPage}
          setTurnThirdPage={setTurnThirdPage}
        />
      )}
      {turnThirdPage === '1' && <Education />}

      <Resume />
    </div>
  );
};

export default ResumeSection;
