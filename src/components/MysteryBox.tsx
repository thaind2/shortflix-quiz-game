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
  perspective: 1000px;
`;

const Box = styled(motion.div)<{ $isOpened: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  ${props => props.$isOpened && `
    transform: rotateY(180deg);
  `}
`;

const Face = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrontFace = styled(Face)`
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const BackFace = styled(Face)`
  background: white;
  transform: rotateY(180deg);
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

const getRewardIcon = (type: string) => {
  switch (type) {
    case 'LOYALTY_POINTS':
      return '/images/loyalty-points.png';
    case 'DATA_PACKAGE':
      return '/images/data-package.png';
    case 'DEVICE':
      return '/images/iphone.png';
    case 'VEHICLE':
      return '/images/vinfast.png';
    default:
      return '/images/gift.png';
  }
};

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
        <FrontFace>
          {!mysteryBox.isOpened && (
            <>
              <Lid />
              <Ribbon />
            </>
          )}
        </FrontFace>
        
        <BackFace>
          {mysteryBox.isOpened && mysteryBox.reward && (
            <RewardContent>
              <RewardImage
                src={getRewardIcon(mysteryBox.reward.type)}
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
        </BackFace>
      </Box>
    </Container>
  );
};
