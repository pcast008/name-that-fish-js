import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";
import { Fish } from "../../types";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state: { incorrectCount: number; correctCount: number } = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleAnswer = (answer: string, currentFish: Fish): void => {
    if (answer === currentFish.name) {
      this.setState((prevState: { correctCount: number }) => {
        return {
          correctCount: prevState.correctCount + 1,
        };
      });
    } else {
      this.setState((prevState: { incorrectCount: number }) => {
        return {
          incorrectCount: prevState.incorrectCount + 1,
        };
      });
    }
  };

  render() {
    const currentIndex: number =
      this.state.incorrectCount + this.state.correctCount;
    const currentFish = initialFishes[currentIndex];
    const answersLeft = initialFishes
      .slice(currentIndex)
      .map((fish) => fish.name);
    const isGameOver = currentIndex === initialFishes.length;

    const { incorrectCount, correctCount } = this.state;

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              answersLeft={answersLeft}
              incorrectCount={incorrectCount}
              correctCount={correctCount}
            />
            <ClassGameBoard
              currentFish={currentFish}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
