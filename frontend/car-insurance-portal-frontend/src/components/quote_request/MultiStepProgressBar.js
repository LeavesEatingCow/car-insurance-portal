import "react-step-progress-bar/styles.css";
import "./MultiStepProgressBar.css";
import {ProgressBar, Step} from "react-step-progress-bar/index.mjs";

const MultiStepProgressBar = (props) => {
    return (
      <ProgressBar
        percent={((props.step - 1) / 7) * 100}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              3
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              4
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              5
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              6
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              7
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
              8
            </div>
          )}
        </Step>
      </ProgressBar>
    );
}

export default MultiStepProgressBar;