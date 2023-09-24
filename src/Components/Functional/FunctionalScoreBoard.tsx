import "./styles/score-board.css";
import { FunctionalScoreBoardProps } from "../../types";
//  Where the score is presented

export const FunctionalScoreBoard = ({
  incorrectCount,
  correctCount,
  answersLeft,
}: FunctionalScoreBoardProps): JSX.Element => (
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
