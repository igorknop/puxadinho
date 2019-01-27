import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const S = 5;
const CARDS = [
  {
    left: { type: "Quarto", w: 3, h: 5 },
    right: { type: "Adulto", w: 1, h: 2 }
  }
];

class App extends Component {
  render() {
    let card = CARDS[0];

    return (
      <div className="App">
        <main id="card">
          <table>
            <tr id="left">
              <td>
                <div
                  className={"symbol " + card.left.type}
                  style={{ width: card.left.w * S+"mm", height: card.left.h * S+"mm" }}
                >
                </div>
              </td>
              <td>
                <div
                  className={"symbol " + card.right.type}
                  style={{ width: card.right.w * S+"mm", height: card.right.h * S+"mm" }}
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
          </table>
        </main>
      </div>
    );
  }
}

export default App;
