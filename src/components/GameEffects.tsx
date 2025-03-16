import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EffectOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
`;

const Message = styled(motion.div)`
  font-size: 3rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

interface Props {
  type: 'start' | 'correct' | 'wrong' | 'gameOver' | 'reward' | 'congratulations';
  onComplete?: () => void;
}

export const GameEffects: React.FC<Props> = ({ type, onComplete }) => {
  useEffect(() => {
    if (['correct', 'gameOver', 'reward', 'congratulations'].includes(type)) {
      const duration = type === 'gameOver' ? 3000 : 1000;
      const particleCount = type === 'gameOver' ? 200 : 50;

      const colors = type === 'reward' || type === 'congratulations'
        ? ['#FFD700', '#FFA500', '#FF8C00'] // Gold colors for rewards
        : ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'];

      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0.6 },
        colors,
        disableForReducedMotion: true
      });

      if (onComplete) {
        setTimeout(onComplete, duration);
      }
    }
  }, [type, onComplete]);

  const variants = {
    start: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1.5 }
    },
    correct: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1 }
    },
    wrong: {
      scale: [0, 1.1, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1 }
    },
    gameOver: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 2 }
    },
    reward: {
      scale: [0, 1.3, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1.5 }
    },
    congratulations: {
      scale: [0, 1.4, 1],
      opacity: [0, 1, 0],
      transition: { duration: 2 }
    }
  };

  const messages = {
    start: 'Bắt đầu!',
    correct: 'Đúng!',
    wrong: 'Sai!',
    gameOver: 'Kết thúc!',
    reward: 'Phần thưởng!',
    congratulations: 'Chúc mừng!'
  };

  return (
    <EffectOverlay>
      <Message
        initial={{ scale: 0, opacity: 0 }}
        animate={variants[type]}
        onAnimationComplete={onComplete}
      >
        {messages[type]}
      </Message>
    </EffectOverlay>
  );
};