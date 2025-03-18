export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  imageUrl: string;
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

export interface GameState {
  isGameOver: boolean;
  currentQuestionIndex: number;
  score: number;
  wrongAnswers: number;
  timeBonus: number;
}

export interface GameEffectsProps {
  type?: 'start' | 'correct' | 'wrong' | 'gameOver' | 'reward' | 'congratulations';
  onComplete?: () => void;
  isPlaying?: boolean;
  playCorrect?: boolean;
  playWrong?: boolean;
}