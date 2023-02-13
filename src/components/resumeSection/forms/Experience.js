import classes from "./Experience.module.css";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";
import IsValidLogo from "../../UI/IsValidLogo";
import IsNotValidLogo from "../../UI/IsNotValidLogo";

const Experience = (props) => {
  const [positionIsvalid, setPositionIsvalid] = useState();
  const [employerIsvalid, setEmployerIsvalid] = useState();

  const positionChangeHandler = (event) => {
    props.experience.setPosition(event.target.value);

    sessionStorage.setItem("position", event.target.value);
  };

  const employerChangeHandler = (event) => {
    props.experience.setEmployer(event.target.value);

    sessionStorage.setItem("employer", event.target.value);
  };

  const startingDateChangeHandler = (event) => {
    props.experience.setStartingDate(event.target.value);

    sessionStorage.setItem("startingDate", event.target.value);
  };

  const endingDateChangeHandler = (event) => {
    props.experience.setEndingDate(event.target.value);

    sessionStorage.setItem("endingDate", event.target.value);
  };

  const aboutExperienceChangeHandler = (event) => {
    props.experience.setAboutExperience(event.target.value);

    sessionStorage.setItem("aboutExperience", event.target.value);
  };

  const validatePositionHandler = () => {
    setPositionIsvalid(props.experience.position.trim().length < 2);
  };

  const validateEmployerHandler = () => {
    setEmployerIsvalid(props.experience.employer.trim().length < 2);
  };

  const validateExperienceHandler = () => {
    if (
      !positionIsvalid &&
      !employerIsvalid &&
      props.experience.startingDate &&
      props.experience.endingDate &&
      props.experience.aboutExperience
    ) {
      props.experience.setTurnPage("3");
    } else {
      props.experience.setTurnPage("2");
    }
  };

  useEffect(() => {
    props.experience.setPosition(sessionStorage.getItem("position"));
    props.experience.setEmployer(sessionStorage.getItem("employer"));
    props.experience.setStartingDate(sessionStorage.getItem("startingDate"));
    props.experience.setEndingDate(sessionStorage.getItem("endingDate"));
    props.experience.setAboutExperience(
      sessionStorage.getItem("aboutExperience")
    );
  });

  return (
    <form
      className={classes.experiencePage}
      onSubmit={validateExperienceHandler}
    >
      <div className={classes.experienceInfoHeader}>
        <h2 className={classes.headerTitle}>გამოცდილება</h2>
        <p className={classes.pageNumber}>2/3</p>
      </div>

      <div id="form-wrapper">
        <div className="form">
          <div className={classes.inputSection}>
            <label
              className={`${classes.inputTitle} ${
                positionIsvalid === true && classes.nameInvalid
              }`}
            >
              თანამდებობა
            </label>

            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className={`${classes.inputStyle} ${
                (positionIsvalid === true && classes.invalid) ||
                (positionIsvalid === false && classes.isvalid)
              }`}
              onChange={positionChangeHandler}
              onBlur={validatePositionHandler}
              value={props.experience.position}
            />
            {positionIsvalid === false && (
              <IsValidLogo className={classes.isValidPosition} />
            )}

            {positionIsvalid === true && (
              <IsNotValidLogo className={classes.inValidPosition} />
            )}
            <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className={classes.inputSection}>
            <label
              className={`${classes.inputTitle} ${
                employerIsvalid === true && classes.nameInvalid
              } `}
            >
              დამსაქმებელი
            </label>
            <input
              type="text"
              placeholder="დმსაქმებელი"
              className={`${classes.inputStyle} ${
                (employerIsvalid === true && classes.invalid) ||
                (employerIsvalid === false && classes.isvalid)
              } `}
              onChange={employerChangeHandler}
              onBlur={validateEmployerHandler}
              value={props.experience.employer}
            />
            {employerIsvalid === false && (
              <IsValidLogo className={classes.isValidEmployer} />
            )}

            {employerIsvalid === true && (
              <IsNotValidLogo className={classes.inValidEmployer} />
            )}
            <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className={classes.dateInputSection}>
            <div className={classes.dateInputContainer}>
              <label className={classes.inputTitle}>დაწყების თარიღი</label>
              <input
                type="date"
                className={`${classes.dateInput} ${
                  props.experience.startingDate !== null &&
                  props.experience.startingDate.trim().length !== 0
                    ? classes.fill
                    : ""
                }`}
                onChange={startingDateChangeHandler}
                value={props.experience.startingDate}
              />
            </div>

            <div className={classes.dateInputContainer}>
              <label className={classes.inputTitle}>დამთავრების თარიღი</label>
              <input
                type="date"
                className={`${classes.dateInput} ${
                  props.experience.endingDate !== null &&
                  props.experience.endingDate.trim().length !== 0
                    ? classes.fill
                    : ""
                }`}
                onChange={endingDateChangeHandler}
                value={props.experience.endingDate}
              />
            </div>
          </div>

          <div className={classes.textareaSection}>
            <label className={classes.inputTitle}>არწერა</label>
            <textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              className={`${classes.textareaInput} ${
                props.experience.aboutExperience !== null &&
                props.experience.aboutExperience.trim().length !== 0
                  ? classes.fill
                  : ""
              }`}
              onChange={aboutExperienceChangeHandler}
              value={props.experience.aboutExperience}
            />
          </div>
        </div>
      </div>

      <div className={classes.btnContainer}>
        <div className={classes.addMoreExperienceBtn} default>
          მეტი გამოცდილების დამატება
        </div>
      </div>

      <div className={classes.nextPrevBtn}>
        <Button
          onClick={() => {
            props.experience.setTurnPage("1");
          }}
        >
          უკან
        </Button>
        <Button
          type="submit"
          onClick={() => {
            props.experience.setExperienceSection(true)
          }}
        >
          შემდეგ
        </Button>
      </div>
    </form>
  );
};

export default Experience;
