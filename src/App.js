import './styles/App.css';

// Header, Content, and Footer components imported.
import Header from "./components/header.jsx";
import LandingPage from './components/Landing.jsx';
import Footer from "../src/components/footer.jsx";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
