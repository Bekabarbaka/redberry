import "./App.css";

import { useState } from "react";
import StartingPage from "./components/startingPage/StartingPage";
import ResumeSection from "./components/resumeSection/ResumeSection";

function App() {
  const [startResume, setStartResume] = useState(false);

  return (
    <div className="App">
      {startResume || <StartingPage setStartResume={setStartResume} />}
      {startResume && <ResumeSection setStartResume={setStartResume} />}
    </div>
  );
}

export default App;
