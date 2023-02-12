import EmailLogo from "../../UI/EmailLogo";
import PhoneLogo from "../../UI/PhoneLogo";
import classes from "./Resume.module.css";

const Resume = (props) => {
  console.log(props.personalInfo.personalInfoSection);
  return (
    <div className={classes.resume}>
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
        {props.personalInfo.photo && (
          <img
            src={props.personalInfo.photo}
            alt="aplicant "
            className={classes.photo}
          />
        )}
      </div>
      <div className={classes.experienceContainer}>
        <h3 className={classes.experienceTitle}>გამოცდილება</h3>
        <div className={classes.positionContainer}>
          <p className={classes.position}>{`${props.experience.position},`}</p>
          <p className={classes.position}>{props.experience.employer}</p>
        </div>
        <div>
          <p
            className={classes.date}
          >{`${props.experience.startingDate} - ${props.experience.endingDate}`}</p>
        </div>
        <p className={classes.aboutExperience}>
          {props.experience.aboutExperience}
        </p>
      </div>
    </div>
  );
};

export default Resume;
