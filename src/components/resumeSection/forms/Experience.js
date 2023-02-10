import classes from "./Experience.module.css";

import Button from "../../UI/Button";

const Experience = (props) => {
  return (
    <form className={classes.experiencePage}>
      <div className={classes.experienceInfoHeader}>
        <h2 className={classes.headerTitle}>გამოცდილება</h2>
        <p className={classes.pageNumber}>2/3</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>თანამდებობა</label>
        <input
          type="text"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          className={classes.inputStyle}
        />
        <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>დამსაქმებელი</label>
        <input
          type="text"
          placeholder="დმსაქმებელი"
          className={classes.inputStyle}
        />
        <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
      </div>

      <div className={classes.dateInputSection}>
        <div className={classes.dateInputContainer}>
          <label className={classes.inputTitle}>დაწყების თარიღი</label>
          <input type="date" className={classes.dateInput} />
        </div>

        <div className={classes.dateInputContainer}>
          <label className={classes.inputTitle}>დამთავრების თარიღი</label>
          <input type="date" className={classes.dateInput} />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>არწერა</label>
        <textarea
          placeholder="როლი ტანამდებობაზე და ზოგადი აღწერა"
          className={classes.textareaInput}
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
