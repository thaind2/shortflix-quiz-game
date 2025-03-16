import React, { useState } from 'react';
import { QuizGame } from './components/QuizGame';
import { ResultScreen } from './components/ResultScreen';
import { Question, Reward } from './types';

// Mock questions data
const questions: Question[] = [
  {
    id: '1',
    text: 'Đâu là thủ đô của Việt Nam?',
    options: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Huế'],
    correctAnswer: 0,
    imageUrl: 'https://picsum.photos/800/400'
  },
  {
    id: '2',
    text: 'Việt Nam có bao nhiêu tỉnh thành?',
    options: ['61', '62', '63', '64'],
    correctAnswer: 2,
    imageUrl: 'https://picsum.photos/800/400'
  },
  {
    id: '3',
    text: 'Đâu là món ăn truyền thống của Việt Nam?',
    options: ['Sushi', 'Pizza', 'Phở', 'Hamburger'],
    correctAnswer: 2,
    imageUrl: 'https://picsum.photos/800/400'
  }
];

// Mock rewards data
const rewards: Reward[] = [
  {
    title: 'Huy chương Đồng',
    description: 'Chúc mừng! Bạn đã đạt được huy chương đồng!',
    threshold: 100,
    imageUrl: 'https://picsum.photos/200/200'
  },
  {
    title: 'Huy chương Bạc',
    description: 'Tuyệt vời! Bạn đã đạt được huy chương bạc!',
    threshold: 200,
    imageUrl: 'https://picsum.photos/200/200'
  },
  {
    title: 'Huy chương Vàng',
    description: 'Xuất sắc! Bạn đã đạt được huy chương vàng!',
    threshold: 300,
    imageUrl: 'https://picsum.photos/200/200'
  }
];

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [score, setScore] = useState(0);

  const handleGameComplete = (finalScore: number) => {
    setScore(finalScore);
    setGameState('completed');
  };

  const handlePlayAgain = () => {
    setScore(0);
    setGameState('playing');
  };

  const getReward = (score: number): Reward | null => {
    return rewards.reduce((highest, current) => {
      if (score >= current.threshold && (!highest || current.threshold > highest.threshold)) {
        return current;
      }
      return highest;
    }, null as Reward | null);
  };

  return (
    <div>
      {gameState === 'playing' ? (
        <QuizGame
          questions={questions}
          onGameComplete={handleGameComplete}
        />
      ) : (
        <ResultScreen
          score={score}
          reward={getReward(score)}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default App;