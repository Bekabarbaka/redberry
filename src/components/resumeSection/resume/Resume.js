import EmailLogo from "../../UI/EmailLogo";
import PhoneLogo from "../../UI/PhoneLogo";
import classes from "./Resume.module.css";
import resumeLogo from "../resume/LOGO-12 1.png";

const Resume = (props) => {
  return (
    <div
      className={`${classes.resume} ${
        props.education.educationSection && classes.resumeBorder
      }`}
    >
      <div
        className={`${classes.personalInfoContainer} ${
          props.personalInfo.personalInfoSection && classes.border
        }`}
      >
        <div className={classes.personalInfo}>
          <div className={classes.userNameContainer}>
            <h1 className={classes.userName}>{props.personalInfo.firstName}</h1>
            <h1 className={classes.userName}>
              {props.personalInfo.secondName}
            </h1>
          </div>
          <div className={classes.mailContainer}>
            {props.personalInfo.email && <EmailLogo />}
            <p className={classes.mail}>{props.personalInfo.email}</p>
          </div>
          <div className={classes.phonecontainer}>
            {props.personalInfo.phoneNumber && <PhoneLogo />}
            <p className={classes.phone}>{props.personalInfo.phoneNumber}</p>
          </div>
          <div className={classes.aboutMecontainer}>
            {props.personalInfo.aboutMe && (
              <h2 className={classes.aboutMeTitle}>ჩემს შესახებ</h2>
            )}

            <p>{props.personalInfo.aboutMe}</p>
          </div>
        </div>
        <div className={classes.photoSection}>
          {props.personalInfo.photo && (
            <img
              src={props.personalInfo.photo}
              alt="aplicant "
              className={classes.photo}
            />
          )}
        </div>
      </div>

      <div
        className={`${classes.experienceContainer}  ${
          props.experience.experienceSection && classes.border
        }`}
      >
        {props.personalInfo.personalInfoSection && (
          <h3 className={classes.experienceTitle}>გამოცდილება</h3>
        )}
        <div className={classes.positionContainer}>
          {props.experience.position && (
            <p
              className={classes.position}
            >{`${props.experience.position},`}</p>
          )}
          {props.experience.employer && (
            <p className={classes.position}>{props.experience.employer}</p>
          )}
        </div>
        <div className={classes.experienceDate}>
          {props.experience.startingDate && (
            <p
              className={classes.date}
            >{`${props.experience.startingDate} -`}</p>
          )}

          {props.experience.endingDate && (
            <p className={classes.date}>{props.experience.endingDate}</p>
          )}
        </div>
        <p className={classes.aboutExperience}>
          {props.experience.aboutExperience}
        </p>
      </div>

      <div className={classes.experienceContainer}>
        {props.experience.experienceSection && (
          <h3 className={classes.experienceTitle}>განათლრბა</h3>
        )}
        <div className={classes.positionContainer}>
          {props.education.school && (
            <p className={classes.position}>{`${props.education.school},`}</p>
          )}
          {props.education.degree && (
            <p className={classes.position}>{props.education.degree}</p>
          )}
        </div>
        <div className={classes.experienceDate}>
          {props.education.schoolEndingDate && (
            <p className={classes.date}>{props.education.schoolEndingDate}</p>
          )}
        </div>
        <p className={classes.aboutExperience}>
          {props.education.aboutEducation}
        </p>
      </div>
      <img className={classes.resumeLogo} src={resumeLogo} alt="resumeicon" />
    </div>
  );
};

export default Resume;
