import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="container p-0 bg-light-gray">
      <Navbar />
      <Header />
      <Skills />
      <ProjectList />
    </div>
  );
};

export default App;
