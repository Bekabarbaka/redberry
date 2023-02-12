import classes from "./Education.module.css";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";
import IsValidLogo from "../../UI/IsValidLogo";
import IsNotValidLogo from "../../UI/IsNotValidLogo";

const Education = (props) => {
  const [schoolIsvalid, setSchoolIsvalid] = useState();

  const schoolChangeHandler = (event) => {
    props.education.setSchool(event.target.value);

    localStorage.setItem("school", event.target.value);
  };

  const degreeChangeHandler = (event) => {
    props.education.setDegree(event.target.value);

    localStorage.setItem("degree", event.target.value);
  };

  const schoolEndingDateChangeHandler = (event) => {
    props.education.setSchoolEndingDate(event.target.value);

    localStorage.setItem("schoolEndingDate", event.target.value);
  };

  const aboutEducationChangeHandler = (event) => {
    props.education.setAboutEucation(event.target.value);

    localStorage.setItem("aboutAducation", event.target.value);
  };

  const validateSchoolHandler = () => {
    setSchoolIsvalid(props.education.school.trim().length < 2);
  };

  useEffect(() => {
    props.education.setSchool(localStorage.getItem("school"));
    props.education.setDegree(localStorage.getItem("degree"));
    props.education.setSchoolEndingDate(
      localStorage.getItem("schoolEndingDate")
    );
    props.education.setAboutEucation(localStorage.getItem("aboutAducation"));
  });

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
          value={props.education.school}
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
              props.education.degree !== null &&
              props.education.degree.trim().length > 0
                ? classes.fill
                : ""
            }`}
            onChange={degreeChangeHandler}
            value={props.education.degree}
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
              props.education.schoolEndingDate !== null &&
              props.education.schoolEndingDate.trim().length > 0
                ? classes.fill
                : ""
            }`}
            onChange={schoolEndingDateChangeHandler}
            value={props.education.schoolEndingDate}
          />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>აღწერა</label>
        <textarea
          placeholder="განათლების აღწერა"
          className={`${classes.textareaInput} ${
            props.education.aboutEducation !== null &&
            props.education.aboutEducation.trim().length > 0
              ? classes.fill
              : ""
          }`}
          onChange={aboutEducationChangeHandler}
          value={props.education.aboutEducation}
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
            props.education.setTurnPage("2");
          }}
        >
          უკან
        </Button>
        <Button
          onClick={() => {
            props.education.setTurnPage("");
          }}
        >
          შემდეგ
        </Button>
      </div>
    </form>
  );
};

export default Education;
