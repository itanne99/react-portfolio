import { NavBar } from './Components/UI/NavBar';
import { AboutMe } from './Components/UI/Sections/AboutMe';
import { Home } from './Components/UI/Sections/Home';
import { Projects } from './Components/UI/Sections/Projects';

function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <AboutMe/>
      <Projects/>
    </>
  );
}

export default App;
