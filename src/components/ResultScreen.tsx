import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Reward, MysteryBox as MysteryBoxType } from '../types';
import { useGameSound } from '../hooks/useGameSound';
import { GameEffects } from './GameEffects';
import { MysteryBox } from './MysteryBox';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ScoreDisplay = styled(motion.div)`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #4caf50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const RewardCard = styled(motion.div)`
  background: rgba(255, 215, 0, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 2rem 0;
  border: 2px solid rgba(255, 215, 0, 0.3);
`;

const RewardTitle = styled.h3`
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Button = styled(motion.button)`
  background: #2196f3;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #1976d2;
  }
`;

interface Props {
  score: number;
  reward: Reward | null;
  onPlayAgain: () => void;
}

export const ResultScreen: React.FC<Props> = ({ score, reward, onPlayAgain }) => {
  const [showEffect, setShowEffect] = useState<'congratulations' | 'reward' | null>(null);
  const [mysteryBox, setMysteryBox] = useState<MysteryBoxType>({
    isOpened: false,
    reward: null,
    animation: 'none'
  });
  const { playCongratulations, playReward } = useGameSound();
  const [canPlaySound, setCanPlaySound] = useState(true);

  useEffect(() => {
    // Hiệu ứng chúc mừng khi màn hình kết quả hiển thị
    if (canPlaySound) {
      setShowEffect('congratulations');
      playCongratulations();
      setCanPlaySound(false);
    }

    // Nếu có phần thưởng, bắt đầu hiệu ứng rung hộp quà
    if (reward) {
      const timer = setTimeout(() => {
        setMysteryBox(prev => ({ ...prev, animation: 'shake' }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [reward, playCongratulations, canPlaySound]);

  const handleOpenBox = () => {
    if (mysteryBox.isOpened) return;
    
    setMysteryBox(prev => ({
      ...prev,
      isOpened: true,
      animation: 'open',
      reward
    }));
    playReward();
    setShowEffect('reward');
  };

  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>Chúc mừng bạn đã hoàn thành!</h2>
        
        <ScoreDisplay
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {score} điểm
        </ScoreDisplay>

        {reward && !mysteryBox.isOpened && (
          <RewardCard
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <RewardTitle>🎉 Chúc mừng! Bạn có một phần quà bí ẩn!</RewardTitle>
            <p>Hãy mở hộp quà để xem bạn đã trúng gì nhé!</p>
          </RewardCard>
        )}

        {reward && (
          <MysteryBox
            mysteryBox={mysteryBox}
            onOpen={handleOpenBox}
          />
        )}

        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayAgain}
        >
          Chơi lại
        </Button>
      </Container>

      {showEffect && (
        <GameEffects 
          type={showEffect} 
          onComplete={() => setShowEffect(null)}
        />
      )}
    </>
  );
};
