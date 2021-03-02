import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Auth /> */}
      <Profile />
    </div>
  );
}

export default App;
