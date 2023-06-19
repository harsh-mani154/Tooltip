import ReactTooltip from "./ReactTooltip";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Tooltip Demo</h1>
      <ReactTooltip content="See the magic! I'm a tooltip" direction="left">
        <button className="button">Hover and see the magic</button>
      </ReactTooltip>
    </div>
  );
}

export default App;
