export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  imageUrl?: string;
}

export interface GameState {
  score: number;
  currentQuestion: number;
  timeRemaining: number;
  isGameOver: boolean;
}

export interface Reward {
  title: string;
  description: string;
  imageUrl?: string;
  threshold: number;
}