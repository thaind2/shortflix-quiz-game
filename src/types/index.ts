export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  imageUrl?: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  timeRemaining: number;
  isGameOver: boolean;
}

export interface Reward {
  id: string;
  type: 'LOYALTY_POINTS' | 'DATA_PACKAGE' | 'DEVICE' | 'VEHICLE';
  title: string;
  description: string;
  value: string | number;
  imageUrl: string;
  probability: number; // Xác suất trúng phần thưởng (0-100)
}

export interface MysteryBox {
  isOpened: boolean;
  reward: Reward | null;
  animation: 'shake' | 'open' | 'none';
}