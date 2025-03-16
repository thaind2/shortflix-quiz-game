import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MysteryBox as MysteryBoxType, Reward } from '../types';

const Container = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  cursor: pointer;
`;

const Box = styled(motion.div)<{ $isOpened: boolean }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  ${props => props.$isOpened && `
    transform: rotateX(180deg);
  `}
`;

const Lid = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 30px;
  background: #ffd700;
  border-radius: 10px;
  transform-origin: top;
`;

const Ribbon = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 6px solid #ff0000;
  border-radius: 50%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    width: 30px;
    height: 60px;
    background: #ff0000;
    border-radius: 0 0 30px 30px;
  }
  
  &::before {
    left: -15px;
    transform: rotate(-30deg);
  }
  
  &::after {
    right: -15px;
    transform: rotate(30deg);
  }
`;

const RewardContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  padding: 1rem;
  transform: rotateX(180deg);
  backface-visibility: hidden;
`;

const RewardImage = styled(motion.img)`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const RewardTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
  text-align: center;
`;

const RewardValue = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  text-align: center;
`;

interface Props {
  mysteryBox: MysteryBoxType;
  onOpen: () => void;
}

export const MysteryBox: React.FC<Props> = ({ mysteryBox, onOpen }) => {
  const boxVariants: Variants = {
    shake: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    },
    idle: {
      rotate: 0
    }
  };

  const handleClick = () => {
    if (!mysteryBox.isOpened) {
      onOpen();
    }
  };

  return (
    <Container onClick={handleClick}>
      <Box
        $isOpened={mysteryBox.isOpened}
        variants={boxVariants}
        animate={mysteryBox.animation === 'shake' ? 'shake' : 'idle'}
      >
        {!mysteryBox.isOpened && (
          <>
            <Lid />
            <Ribbon />
          </>
        )}
        {mysteryBox.isOpened && mysteryBox.reward && (
          <RewardContent>
            <RewardImage
              src={mysteryBox.reward.imageUrl}
              alt={mysteryBox.reward.title}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <RewardTitle>{mysteryBox.reward.title}</RewardTitle>
            <RewardValue>
              {typeof mysteryBox.reward.value === 'number' 
                ? mysteryBox.reward.value.toLocaleString()
                : mysteryBox.reward.value}
            </RewardValue>
          </RewardContent>
        )}
      </Box>
    </Container>
  );
};
