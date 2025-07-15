import "./App.css";
import InfiniteSlider from "./Components/CodingSkill";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import SkillSet from "./Components/SkillSet";

function App() {
  return (
    <>
      <Profile />
      <InfiniteSlider />
      <SkillSet />
     <Project /> 
      <Footer />
    </>
  );
}

export default App;
