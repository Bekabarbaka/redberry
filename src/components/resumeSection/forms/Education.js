import classes from "./Education.module.css";
import Button from "../../UI/Button";

const Education = (props) => {
  return (
    <form className={classes.eucationPage}>
      <div className={classes.educationInfoHeader}>
        <h2 className={classes.headerTitle}>განათლება</h2>
        <p className={classes.pageNumber}>3/3</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>სასწავლებელი</label>
        <input
          type="text"
          placeholder="სასწავლებელი"
          className={classes.inputStyle}
        />
        <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
      </div>

      <div className={classes.degreeInputSection}>
        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>ხარისხი</label>
          <select className={classes.selectDegree}>
            <option>beka</option>
            <option>barbakadze</option>
          </select>
        </div>

        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>დამთავრების რიცხვი</label>
          <input type="date" className={classes.selectDegree} />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>აღწერა</label>
        <textarea
          placeholder="განათლების აღწერა"
          className={classes.textareaInput}
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
