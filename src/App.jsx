import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return <h1>HELLO {props.match.params.id.toUpperCase()}</h1>;
};

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/:id" component={HatsPage} />
  </div>
);

export default App;
