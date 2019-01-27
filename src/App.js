import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./fundo.jpg";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const S = 5;
const CARDS = [
  [{ type: "TV (Quarto/Sala)", w: 2, h: 1 }, { type: "Quarto", w: 6, h: 7 }],
  [{ type: "Quarto", w: 6, h: 7 }, { type: "Cama Casal (Quarto)", w: 3, h: 5 }],
  [{ type: "Quarto", w: 6, h: 7 }, { type: "Adulto (Cama)", w: 1, h: 2 }],
  [{ type: "Banheiro", w: 3, h: 4 }, { type: "Criança (Cama)", w: 1, h: 1 }],
  [{ type: "Cama (Quarto)", w: 2, h: 4 }, { type: "Garagem", w: 6, h: 5 }],

  [{ type: "Sala", w: 8, h: 5 }, { type: "Criança (Cama)", w: 1, h: 1 }],
  [
    { type: "TV (Quarto/Sala)", w: 1, h: 1 },
    { type: "Geladeira (Cozinha)", w: 1, h: 1 }
  ],
  [
    { type: "Carro (Garagem/Quintal)", w: 5, h: 3 },
    { type: "Criança", w: 1, h: 1 }
  ],
  [
    { type: "Banheira (Banheiro)", w: 2, h: 2 },
    { type: "Papagaio (Sala)", w: 1, h: 1 }
  ],
  [{ type: "Banheiro", w: 3, h: 4 }, { type: "Fogão (Cozinha)", w: 1, h: 1 }],
  [{ type: "Sala", w: 8, h: 5 }, { type: "Corredor", w: 1, h: 8 }],
  [{ type: "Cozinha", w: 5, h: 5 }, { type: "Sofá (Sala)", w: 3, h: 2 }],
  [
    { type: "Gato (Sofá)", w: 1, h: 1 },
    { type: "Cachorro (Quintal/Sala)", w: 1, h: 1 }
  ],
  [
    { type: "Adulto (Cama)", w: 1, h: 2 },
    { type: "Criança (Cama)", w: 1, h: 1 }
  ],
  [
    { type: "Adulto (Cama)", w: 1, h: 2 },
    { type: "Corredor", w: 1, h: 5 }
  ]
];
/*
    { type: "Escritório", w: 3, h: 5 }],
    { type: "Escritório", w: 5, h: 4 }, 
    { type: "Computador (Escritório)", w: 3, h: 1 },
  ],
  [
    { type: "Quarto", w: 5, h: 3 }
  ],
  [
  ],
  [
    { type: "Adulto (Cama)", w: 1, h: 2 },
    { type: "Criança (Cama)", w: 1, h: 1 }
  ],
  [
    { type: "Banheiro", w: 4, h: 6 }],
  [
    { type: "Sala", w: 4, h: 6 }, 
  ],
  [
  ],
  [{ type: "Corredor", w: 1, h: 6 }, { type: "Sofá (Sala)", w: 3, h: 2 }],
  [{ type: "TV (Quarto/Sala)", w: 1, h: 2 }, { type: "Corredor", w: 6, h: 1 }],
  [
    { type: "Corredor", w: 1, h: 3 },
  ],
  [
    { type: "Corredor", w: 3, h: 1 }
  ],
  [
    { type: "Piscina (Quintal)", w: 6, h: 3 },
    { type: "Criança (Cama)", w: 1, h: 1 }
  ],
  [
    { type: "Computador (Escritório)", w: 1, h: 3 },
    { type: "Criança (Cama)", w: 1, h: 1 }
  ],
  [
  ],
  [
    { type: "Árvore (Quintal)", w: 3, h: 3 },
  ],
  [
  ],
];
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 0, t: 1 };
    this.allCardsShu = shuffle(CARDS);
  }
  render() {
    let allCardsE = this.allCardsShu.map((card, k) => {
      return (
        <main className="card" key={"card" + k}>
          <table>
            <tbody>
              <tr id="left">
                <td>
                  <div
                    className={"symbol " + card[0].type}
                    style={{
                      width: card[0].w * S + "mm",
                      height: card[0].h * S + "mm"
                    }}
                  />
                </td>
                <td>
                  <div
                    className={"symbol " + card[1].type}
                    style={{
                      width: card[1].w * S + "mm",
                      height: card[1].h * S + "mm"
                    }}
                  />
                </td>
              </tr>
              <tr id="right">
                <td className="name">
                  {card[0].type} {card[0].w}x{card[0].h}
                </td>
                <td className="name">
                  {card[1].type} {card[1].w}x{card[1].h}
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      );
    });
    
    //<div id="allCards">{allCardsE}</div>
    return (
      <div className="App">
        <div
          onClick={() => {
            let k = this.state.n + 1;
            if (k >= allCardsE.length) k = 0;
            this.setState({ n: k, t: this.state + 1 });
          }}
        >
          {allCardsE[this.state.n]}
        </div>
        <div id="pontuacao">
          <h1>Pontuação {this.state.t}</h1>
          <table border={1} cellPadding={2}>
            <tbody>
              <tr>
                <th>Habitável (15 PV)</th>
                <th>Pets (2/5/8 PV)</th>
              </tr>
              <tr>
                <td>⬜ Quarto + ⬜ Cozinha + ⬜ Banheiro = ______</td>
                <td>⬜ Gato ⬜ Cachorro ⬜ Papagaio =______</td>
              </tr>
              <tr>
                <th>Mobilia</th>
                <th>Corredores 1x5 e 1x8</th>
              </tr>
              <tr>
                <td>( ___ Quartos + ___ Móveis + ___ Pessoas) x 2 = ______</td>
                <td> ___ Comodos Adjacentes x 1 = ______</td>
              </tr>
              <tr>
                <td>( ___ Banheiros + ___ Móveis ) x 3 = ______</td>
                <th>Corredores 1x3</th>
              </tr>
              <tr>
                <td>( ___ Salas + ___ Móveis + ___ Pets) x 3 = ______</td>
                <td> ___ Comodos Adjacentes x 1 - 2 = ______</td>
              </tr>
              <tr>
                <th>Motorizado</th>
                <th>Puxadinho</th>
              </tr>
              <tr>
                <td>⬜ Quarto = 5PV ⬜ Carro = 7PV</td>
                <td>⬜ =-1PV ⬜ =-3PV ⬜ =-5PV </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
