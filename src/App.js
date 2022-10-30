import "./App.css";
import Profile from "./components/Profile";
import Mappings from "./mappings";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Profile />
      <Mappings />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
