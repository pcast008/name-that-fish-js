// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export interface Fish {
  name: string;
  url: string;
}

export interface FunctionalGameBoardProps {
  currentFish: Fish;
  handleAnswer(answer: string): void;
}

export interface ClassGameBoardProps {
  currentFish: Fish;
  handleAnswer(answer: string, currentFish: Fish): void;
}

export interface ClassGameBoardState {
  answer: string;
}

export interface FunctionalFinalScoreProps {
  correctCount: number;
  totalCount: number;
}

export interface FunctionalScoreBoardProps {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
}
