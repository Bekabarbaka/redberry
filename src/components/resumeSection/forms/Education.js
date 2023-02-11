import classes from "./Education.module.css";
import Button from "../../UI/Button";
import { useState } from "react";
import IsValidLogo from "../../UI/IsValidLogo";
import IsNotValidLogo from "../../UI/IsNotValidLogo";

const Education = (props) => {
  const [school, setSchool] = useState("");
  const [schoolIsvalid, setSchoolIsvalid] = useState();
  const [degree, setDegree] = useState("");
  const [schoolEndingDate, setSchoolEndingDate] = useState("");
  const [aboutEducation, setAboutEucation] = useState("");

  const schoolChangeHandler = (event) => {
    setSchool(event.target.value);
  };

  const degreeChangeHandler = (event) => {
    setDegree(event.target.value);
  };

  const schoolEndingDateChangeHandler = (event) => {
    setSchoolEndingDate(event.target.value);
  };

  const aboutEducationChangeHandler = (event) => {
    setAboutEucation(event.target.value);
  };

  const validateSchoolHandler = () => {
    setSchoolIsvalid(school.trim().length < 2);
  };

  return (
    <form className={classes.eucationPage}>
      <div className={classes.educationInfoHeader}>
        <h2 className={classes.headerTitle}>განათლება</h2>
        <p className={classes.pageNumber}>3/3</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>სასწავლებელი</label>
        <input
          className={`${classes.inputStyle} ${
            (schoolIsvalid === true && classes.invalid) ||
            (schoolIsvalid === false && classes.isvalid)
          }`}
          type="text"
          placeholder="სასწავლებელი"
          onChange={schoolChangeHandler}
          onBlur={validateSchoolHandler}
          value={school}
        />
        {schoolIsvalid === false && (
          <IsValidLogo className={classes.isValidSchool} />
        )}

        {schoolIsvalid === true && (
          <IsNotValidLogo className={classes.inValidSchool} />
        )}
        <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
      </div>

      <div className={classes.degreeInputSection}>
        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>ხარისხი</label>
          <select
            className={`${classes.selectDegree} ${
              degree.trim().length > 0 ? classes.fill : ""
            }`}
            onChange={degreeChangeHandler}
            value={degree}
          >
            <option value="" disabled selected hidden>
              Choose a drink
            </option>
            <option>beka</option>
            <option>barbakadze</option>
          </select>
        </div>

        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>დამთავრების რიცხვი</label>
          <input
            type="date"
            className={`${classes.selectDegree} ${
              schoolEndingDate.trim().length > 0 ? classes.fill : ""
            }`}
            onChange={schoolEndingDateChangeHandler}
            value={schoolEndingDate}
          />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>აღწერა</label>
        <textarea
          placeholder="განათლების აღწერა"
          className={`${classes.textareaInput} ${
            aboutEducation.trim().length > 0 ? classes.fill : ""
          }`}
          onChange={aboutEducationChangeHandler}
          value={aboutEducation}
        ></textarea>
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.addMoreSchoolBtn}>
          სხვა სასწავლებლის დამატება
        </button>
      </div>

      <div className={classes.nextPrevBtn}>
        <Button
          onClick={() => {
            props.setTurnPage("2");
          }}
        >
          უკან
        </Button>
        <Button
          onClick={() => {
            props.setTurnPage("");
          }}
        >
          შემდეგ
        </Button>
      </div>
    </form>
  );
};

export default Education;
