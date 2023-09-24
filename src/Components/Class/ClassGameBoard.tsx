import { Component } from "react";
import "./styles/game-board.css";
import { ClassGameBoardProps } from "../../types";
import { ClassGameBoardState } from "../../types";

export class ClassGameBoard extends Component<
  ClassGameBoardProps,
  ClassGameBoardState
> {
  state: ClassGameBoardState = {
    answer: "",
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.handleAnswer(this.state.answer, this.props.currentFish);
    this.setState({ answer: "" });
  };

  render() {
    const { currentFish } = this.props;
    const { answer } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={answer}
            autoComplete="off"
            onChange={(e) => {
              this.setState({ answer: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
