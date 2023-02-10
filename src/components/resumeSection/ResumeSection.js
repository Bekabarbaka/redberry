import { useState } from "react";
import Education from "./forms/Education";
import Experience from "./forms/Experience";
import PersonalInfo from "./forms/PersonalInfo";
import Resume from "./resume/Resume";
import classes from "./ResumeSection.module.css";
import RestartBtn from "../UI/RestartBtn";

const ResumeSection = (props) => {
  const [turnPage, setTurnPage] = useState("1");

  const restartHandler = () => {
    props.setStartResume(false);
  };

  return (
    <div className={classes.resumeSection}>
      <RestartBtn restartHandler={restartHandler} />
      {turnPage === "1" && (
        <PersonalInfo
          setTurnPage={setTurnPage}
          restartHandler={restartHandler}
        />
      )}
      {turnPage === "2" && <Experience setTurnPage={setTurnPage} />}
      {turnPage === "3" && <Education setTurnPage={setTurnPage} />}

      <Resume />
    </div>
  );
};

export default ResumeSection;
