import classes from "./Experience.module.css";
import Button from "../../UI/Button";
import { useState } from "react";
import IsValidLogo from "../../UI/IsValidLogo";
import IsNotValidLogo from "../../UI/IsNotValidLogo";

const Experience = (props) => {
  const [position, setPosition] = useState("");
  const [positionIsvalid, setPositionIsvalid] = useState();
  const [employer, setEmployer] = useState("");
  const [employerIsvalid, setEmployerIsvalid] = useState();
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [aboutExperience, setAboutExperience] = useState("");

  const positionChangeHandler = (event) => {
    setPosition(event.target.value);
  };

  const employerChangeHandler = (event) => {
    setEmployer(event.target.value);
  };

  const startingDateChangeHandler = (event) => {
    setStartingDate(event.target.value);
  };

  const endingDateChangeHandler = (event) => {
    setEndingDate(event.target.value);
  };

  const aboutExperienceChangeHandler = (event) => {
    setAboutExperience(event.target.value);
  };

  const validatePositionHandler = () => {
    setPositionIsvalid(position.trim().length < 2);
  };

  const validateEmployerHandler = () => {
    setEmployerIsvalid(employer.trim().length < 2);
  };

  return (
    <form className={classes.experiencePage}>
      <div className={classes.experienceInfoHeader}>
        <h2 className={classes.headerTitle}>გამოცდილება</h2>
        <p className={classes.pageNumber}>2/3</p>
      </div>

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
          value={position}
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
          value={employer}
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
              startingDate.trim().length > 0 ? classes.fill : ""
            }`}
            onChange={startingDateChangeHandler}
            value={startingDate}
          />
        </div>

        <div className={classes.dateInputContainer}>
          <label className={classes.inputTitle}>დამთავრების თარიღი</label>
          <input
            type="date"
            className={`${classes.dateInput} ${
              startingDate.trim().length > 0 ? classes.fill : ""
            }`}
            onChange={endingDateChangeHandler}
            value={endingDate}
          />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>არწერა</label>
        <textarea
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          className={`${classes.textareaInput} ${
            aboutExperience.trim().length > 0 ? classes.fill : ""
          }`}
          onChange={aboutExperienceChangeHandler}
          value={aboutExperience}
        />
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.addMoreExperienceBtn}>
          მეტი გამოცდილების დამატება
        </button>
      </div>

      <div className={classes.nextPrevBtn}>
        <Button
          onClick={() => {
            props.setTurnPage("1");
          }}
        >
          უკან
        </Button>
        <Button
          onClick={() => {
            props.setTurnPage("3");
          }}
        >
          შემდეგ
        </Button>
      </div>
    </form>
  );
};

export default Experience;
