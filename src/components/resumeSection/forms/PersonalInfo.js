import Button from "../../UI/Button";
import RestartBtn from "../../UI/RestartBtn";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  return (
    <form className={classes.personalInfo}>
      <div className={classes.personalInfoHeader}>
        <h2 className={classes.headerTitle}>პირადი ინფო</h2>
        <p className={classes.pageNumber}>1/3</p>
      </div>

      <RestartBtn restartHandler={props.restartHandler} />

      <div className={classes.userName}>
        <div className={classes.usernameSection}>
          <label className={classes.inputTitle}>სახელი</label>

          <input
            className={classes.inputName}
            type="text"
            placeholder="ანზორ"
          />
          <p className={classes.inputHint}>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>

        <div className={classes.usernameSection}>
          <label className={classes.inputTitle}>გვარი</label>
          <input
            className={classes.inputName}
            type="text"
            placeholder="მუმლაძე"
          />
          <p className={classes.inputHint}>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </div>

      <div className={classes.upload}>
        <p className={classes.uploadName}>პირადი ფოტოს ატვირთვა</p>
        <input type="file" id="upload" hidden />
        <label className={classes.uploadButton} htmlFor="upload">
          ატვირთვა
        </label>
      </div>

      <div className={classes.inputSection}>
        <label
          className={classes.inputTitle}
        >{`ჩემ შესახებ (არასავალდებულო)`}</label>
        <textarea
          className={classes.textarea}
          placeholder="ზოგადი ინფო შენს შესახებ"
        />
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>ელ.ფოსტა</label>
        <input
          type="email"
          className={classes.inputStyle}
          placeholder="anzorr666@redberry.ge"
        />
        <p className={classes.inputHint}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>მობილურის ნომერი</label>
        <input
          type="text"
          className={classes.inputStyle}
          placeholder="+995 551 12 34 56"
        />
        <p className={classes.inputHint}>
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>

      <Button
        className={classes.nextBtn}
        onClick={() => {
          props.setTurnSecondPage(true);
        }}
      >
        შემდეგი
      </Button>
    </form>
  );
};

export default PersonalInfo;
