import { Route, Router, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/AboutPage/AboutPage";
import Contact from "./pages/ContactPage/ContactPage";
import Home from "./pages/HomePage/HomePage";
import Posts from "./pages/PostsPage/PostsPage";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={newHistory}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
