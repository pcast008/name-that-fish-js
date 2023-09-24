import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component<{
  answersLeft: string[];
  incorrectCount: number;
  correctCount: number;
}> {
  render() {
    const { answersLeft, incorrectCount, correctCount } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
