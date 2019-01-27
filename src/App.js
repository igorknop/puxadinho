import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const S = 5;
const CARDS = [
  {
    left: { type: "Quarto", w: 3, h: 5 },
    right: { type: "Adulto", w: 1, h: 2 }
  },
  {
    left: { type: "Banheiro", w: 2, h: 2 },
    right: { type: "Quarto", w: 5, h: 3 }
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }
  render() {
    let allCardsE = CARDS.map((card, k) => {
      return (
        <main className="card" key={"card" + k}>
          <table>
            <tbody>
              <tr id="left">
                <td>
                  <div
                    className={"symbol " + card.left.type}
                    style={{
                      width: card.left.w * S + "mm",
                      height: card.left.h * S + "mm"
                    }}
                  />
                </td>
                <td>
                  <div
                    className={"symbol " + card.right.type}
                    style={{
                      width: card.right.w * S + "mm",
                      height: card.right.h * S + "mm"
                    }}
                  />
                </td>
              </tr>
              <tr id="right">
                <td className="name">
                  {card.left.type} {card.left.w}x{card.left.h}
                </td>
                <td className="name">
                  {card.right.type} {card.right.w}x{card.right.h}
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      );
    });

    return (
      <div className="App">
        <div
          onClick={() => {
            let k = this.state.n + 1;
            if (k >= allCardsE.length) k = 0;
            this.setState({ n: k });
          }}
        >
          {allCardsE[this.state.n]}
        </div>
        <div id="allCards">{allCardsE}</div>
      </div>
    );
  }
}

export default App;
