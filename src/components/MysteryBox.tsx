import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  transform: ${props => props.$isOpened ? 'rotateX(180deg)' : 'rotateX(0deg)'};
  transition: transform 0.6s;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrontFace = styled(Face)`
  background: url('/images/gift.png') no-repeat center;
  background-size: contain;
`;

const BackFace = styled(Face)`
  transform: rotateX(180deg);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;

const RewardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const RewardTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffd700;
  margin: 0.5rem 0;
`;

const RewardDescription = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
`;

interface Props {
  mysteryBox: MysteryBoxType;
  onOpen: () => void;
}

export const MysteryBox: React.FC<Props> = ({ mysteryBox, onOpen }) => {
  const shakeAnimation = {
    shake: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <Container onClick={onOpen}>
      <Box
        $isOpened={mysteryBox.isOpened}
        animate={mysteryBox.animation === 'shake' ? 'shake' : undefined}
        variants={shakeAnimation}
      >
        <FrontFace />
        <BackFace>
          {mysteryBox.reward && (
            <>
              <RewardImage src={mysteryBox.reward.imageUrl} alt={mysteryBox.reward.title} />
              <RewardTitle>{mysteryBox.reward.title}</RewardTitle>
              <RewardDescription>{mysteryBox.reward.description}</RewardDescription>
            </>
          )}
        </BackFace>
      </Box>
    </Container>
  );
};
