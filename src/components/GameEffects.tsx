import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GameEffectsProps } from '../types';

const EffectOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const EffectText = styled.h2`
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const GameEffects: React.FC<GameEffectsProps> = ({
  type,
  onComplete,
  isPlaying,
  playCorrect,
  playWrong
}) => {
  useEffect(() => {
    if (type && ['correct', 'gameOver', 'reward', 'congratulations'].includes(type)) {
      const duration = type === 'gameOver' ? 3000 : 1000;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, duration);
      }
    }
  }, [type, onComplete]);

  useEffect(() => {
    if (playCorrect) {
      const audio = new Audio('/sounds/correct.mp3');
      audio.play().catch(error => {
        console.error('Error playing correct sound:', error);
      });
    }
  }, [playCorrect]);

  useEffect(() => {
    if (playWrong) {
      const audio = new Audio('/sounds/wrong.mp3');
      audio.play().catch(error => {
        console.error('Error playing wrong sound:', error);
      });
    }
  }, [playWrong]);

  const variants = {
    start: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1 }
    },
    correct: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1 }
    },
    wrong: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1 }
    },
    gameOver: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: { duration: 1 }
    },
    reward: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1.5 }
    },
    congratulations: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1.5 }
    }
  };

  const effectText: { [key: string]: string } = {
    start: 'Bắt đầu!',
    correct: 'Đúng rồi!',
    wrong: 'Sai rồi!',
    gameOver: 'Kết thúc!',
    reward: 'Phần thưởng!',
    congratulations: 'Chúc mừng!'
  };

  if (!type) return null;

  return (
    <EffectOverlay
      initial="hidden"
      animate={type}
      variants={variants}
    >
      <EffectText>{effectText[type]}</EffectText>
    </EffectOverlay>
  );
};