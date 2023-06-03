import React from "react";
import Cardlist from "./cardList";
import SearchBox from "./searchBox";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      SearchField: "",
    };
  }

  render() {
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox />
        <Cardlist />
      </div>
    );
  }
}

export default App;
