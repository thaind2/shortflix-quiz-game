export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  imageUrl?: string;
}

export interface GameState {
  score: number;
  currentQuestionIndex: number;
  timeRemaining: number;
  isGameOver: boolean;
  wrongAnswers: number;
}

export interface Reward {
  id: string;
  type: 'LOYALTY_POINTS' | 'DATA_PACKAGE' | 'DEVICE' | 'VEHICLE';
  title: string;
  description: string;
  value: number | string;
  imageUrl: string;
  probability: number;
}

export interface MysteryBox {
  isOpened: boolean;
  reward: Reward | null;
  animation: 'none' | 'shake' | 'open';
}