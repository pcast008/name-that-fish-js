import "./styles/final-score.css";
import { FunctionalFinalScoreProps } from "../../types";

export const FunctionalFinalScore = ({
  correctCount,
  totalCount,
}: FunctionalFinalScoreProps): JSX.Element => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
