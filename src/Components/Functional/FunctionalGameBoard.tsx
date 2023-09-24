import "./styles/game-board.css";
import { useState } from "react";
import { FunctionalGameBoardProps } from "../../types";

export function FunctionalGameBoard({
  currentFish,
  handleAnswer,
}: FunctionalGameBoardProps): JSX.Element {
  const [answer, setAnswer] = useState("");

  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    handleAnswer(answer);
    setAnswer("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          autoComplete="off"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          value={answer}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
