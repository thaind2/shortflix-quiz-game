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

// Danh sách phần thưởng
const rewards: Reward[] = [
  {
    id: 'loyalty-1000',
    type: 'LOYALTY_POINTS',
    title: '1,000 Điểm thưởng',
    description: 'Bạn đã nhận được 1,000 điểm thưởng!',
    value: 1000,
    imageUrl: '/images/loyalty-points.png',
    probability: 30
  },
  {
    id: 'loyalty-5000',
    type: 'LOYALTY_POINTS',
    title: '5,000 Điểm thưởng',
    description: 'Bạn đã nhận được 5,000 điểm thưởng!',
    value: 5000,
    imageUrl: '/images/loyalty-points.png',
    probability: 20
  },
  {
    id: 'data-1gb',
    type: 'DATA_PACKAGE',
    title: 'Gói data 1GB',
    description: 'Bạn đã nhận được gói data 1GB!',
    value: '1GB',
    imageUrl: '/images/data-package.png',
    probability: 20
  },
  {
    id: 'data-5gb',
    type: 'DATA_PACKAGE',
    title: 'Gói data 5GB',
    description: 'Bạn đã nhận được gói data 5GB!',
    value: '5GB',
    imageUrl: '/images/data-package.png',
    probability: 15
  },
  {
    id: 'iphone-15',
    type: 'DEVICE',
    title: 'iPhone 15',
    description: 'Chúc mừng! Bạn đã trúng iPhone 15!',
    value: 'iPhone 15 128GB',
    imageUrl: '/images/iphone.png',
    probability: 10
  },
  {
    id: 'car-vinfast',
    type: 'VEHICLE',
    title: 'VinFast VF8',
    description: 'Chúc mừng! Bạn đã trúng xe VinFast VF8!',
    value: 'VinFast VF8 Eco',
    imageUrl: '/images/vinfast.png',
    probability: 5
  }
];

const getRandomReward = (): Reward => {
  // Tính tổng xác suất
  const totalProbability = rewards.reduce((sum, reward) => sum + reward.probability, 0);
  
  // Tạo số ngẫu nhiên từ 0 đến tổng xác suất
  let random = Math.random() * totalProbability;
  
  // Tìm phần thưởng dựa trên xác suất
  for (const reward of rewards) {
    random -= reward.probability;
    if (random <= 0) {
      return reward;
    }
  }
  
  // Trả về phần thưởng đầu tiên nếu có lỗi
  return rewards[0];
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [score, setScore] = useState(0);
  const [earnedReward, setEarnedReward] = useState<Reward | null>(null);

  const handleGameComplete = (finalScore: number) => {
    setScore(finalScore);
    
    // Kiểm tra xem người chơi có trả lời đúng hết không
    // Điểm cơ bản cho mỗi câu hỏi là 100
    // Điểm thời gian cho mỗi câu là tối đa 30 * 3 = 90
    // Tổng điểm tối thiểu khi trả lời đúng hết = số câu hỏi * 100
    const minimumPerfectScore = questions.length * 100;
    
    // Nếu điểm số >= điểm tối thiểu khi trả lời đúng hết
    // nghĩa là người chơi đã trả lời đúng tất cả các câu hỏi
    if (finalScore >= minimumPerfectScore) {
      setEarnedReward(getRandomReward());
    }
    
    setGameState('completed');
  };

  const handlePlayAgain = () => {
    setScore(0);
    setEarnedReward(null);
    setGameState('playing');
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
          reward={earnedReward}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default App;