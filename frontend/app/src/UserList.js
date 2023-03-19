import React from 'react';

// class UserList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>UserList</h1>
//         <ul>
//           <li>田中</li>
//           <li>山田</li>
//           <li>佐藤</li>
//         </ul>
//       </div>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 9つのnullが入った配列を作成
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    // this.state.squares をそのままコピー
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return <Square
             value={this.state.squares[i]}
             onClick={() => this.handleClick(i)}
           />;
  }

  render() {
    const status = "Next player: X";

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
