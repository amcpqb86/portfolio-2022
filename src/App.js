import LandingContainer from "./components/LandingContainer";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import {
  BlurredShape1,
  BlurredShape2,
  BlurredShape3,
} from "./components/BlurredShapes";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <BlurredShape1 />
      <BlurredShape2 />
      <BlurredShape3 />
      <Menu />
      <LandingContainer />
      <Presentation />
      <Projects />

      <script src="utils/slider.js"></script>
    </div>
  );
}

export default App;
