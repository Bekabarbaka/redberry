import { useState } from "react";
import Education from "./forms/Education";
import Experience from "./forms/Experience";
import PersonalInfo from "./forms/PersonalInfo";
import Resume from "./resume/Resume";
import classes from "./ResumeSection.module.css";
import RestartBtn from "../UI/RestartBtn";
import FinalPopUp from "./resume/FinalPopUp";

const ResumeSection = (props) => {
  const [turnPage, setTurnPage] = useState("1");

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [photo, setPhoto] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [aboutExperience, setAboutExperience] = useState("");

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolEndingDate, setSchoolEndingDate] = useState("");
  const [aboutEducation, setAboutEucation] = useState("");

  const [personalInfoSection, setPersonalInfoSection] = useState(false);
  const [experienceSection, setExperienceSection] = useState(false);
  const [educationSection, setEducationSection] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const restartHandler = () => {
    props.setStartResume(false);
  };

  const personalInfo = {
    turnPage,
    setTurnPage,
    restartHandler,
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    photo,
    setPhoto,
    aboutMe,
    setAboutMe,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    setPersonalInfoSection,
    personalInfoSection,
  };

  const experience = {
    setTurnPage,
    position,
    setPosition,
    employer,
    setEmployer,
    startingDate,
    setStartingDate,
    endingDate,
    setEndingDate,
    aboutExperience,
    setAboutExperience,
    setExperienceSection,
    experienceSection,
  };

  const education = {
    turnPage,
    setTurnPage,
    school,
    setSchool,
    degree,
    setDegree,
    schoolEndingDate,
    setSchoolEndingDate,
    aboutEducation,
    setAboutEucation,
    educationSection,
    setEducationSection,
    setPopUp,
    popUp,
  };

  return (
    <div className={classes.resumeSection}>
      <RestartBtn restartHandler={restartHandler} />
      {turnPage === "1" && <PersonalInfo personalInfo={personalInfo} />}
      {turnPage === "2" && <Experience experience={experience} />}
      {turnPage === "3" && <Education education={education} />}

      <Resume
        personalInfo={personalInfo}
        experience={experience}
        education={education}
      />

      {popUp && <FinalPopUp setPopUp={setPopUp} />}
    </div>
  );
};

export default ResumeSection;
