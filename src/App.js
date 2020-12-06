import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  //ココ↑が呼び出されたときに実行
  constructor(props) {
    //↑初期化処理時に実行されるメソッド
    super(props);
    this.state = { count: 0 };
  }
  //setStateが実行されると再レンダーされる状態(state)を変化させる場合はsetStateを使う
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    );
  }
}

export default App;
