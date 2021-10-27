import "./App.css";
import Cardss from "./components/Centered/CenteredCard.js";

function App() {
  class Animals {
    constructor(name, move, local) {
      this._name = name;
      this._move = move;
      this._local = local;
    }
  }
  const animal1 = new Animals("Fish", "swim", "Water");
  const animal2 = new Animals("Snake", "crawl", "Florest");
  const animal3 = new Animals("Human", "walk", "Cities");
  return (
    <div className="App">
      <div className="grandFather">
        <Cardss
          names={animal1._name}
          move={animal1._move}
          local={animal1._local}
        ></Cardss>
        <Cardss
          names={animal2._name}
          move={animal2._move}
          local={animal2._local}
        ></Cardss>
        <Cardss
          names={animal3._name}
          move={animal3._move}
          local={animal3._local}
        ></Cardss>
      </div>
    </div>
  );
}

export default App;
