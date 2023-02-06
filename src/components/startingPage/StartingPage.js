import classes from "./StartingPage.module.css";
import redberryImage from "../startingPage/startingPageImages/LOGO-02.png";
import redberrySign from "../startingPage/startingPageImages/LOGO-40.png";

const StartingPage = (props) => {
  return (
    <div className={classes.background}>
      <img
        src={redberryImage}
        alt="redberry"
        className={classes.redberryImage}
      />

      <div className={classes.border} />

      <img
        src={redberrySign}
        alt="redberry sign"
        className={classes.redberrySign}
      />

      <button
        className={classes.addResumeBtn}
        onClick={() => {
          props.setStartResume(true);
        }}
      >
        <p className={classes.addResume}>რეზიუმეს დამატება</p>
      </button>
    </div>
  );
};

export default StartingPage;
