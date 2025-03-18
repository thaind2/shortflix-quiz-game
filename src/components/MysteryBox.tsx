import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MysteryBox as MysteryBoxType, Reward } from '../types';

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  perspective: 1000px;
  cursor: pointer;
`;

const Box = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
`;

const Face = styled.div<{ $isBack?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${props => props.$isBack ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const GiftImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const RewardImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const RewardTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const RewardValue = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0;
  text-align: center;
`;

const RewardDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: center;
`;

interface Props {
  mysteryBox: MysteryBoxType;
  onOpen: () => void;
}

export const MysteryBox: React.FC<Props> = ({ mysteryBox, onOpen }) => {
  const handleClick = () => {
    if (!mysteryBox.isOpened) {
      onOpen();
    }
  };

  const boxVariants = {
    shake: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity
      }
    },
    open: {
      rotateY: 180,
      transition: {
        duration: 0.8
      }
    }
  };

  const getRewardImage = (reward: Reward) => {
    switch (reward.type) {
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

  const formatValue = (reward: Reward) => {
    if (reward.type === 'LOYALTY_POINTS') {
      return `${reward.value.toLocaleString()} điểm`;
    }
    return reward.value;
  };

  return (
    <Container onClick={handleClick}>
      <Box
        animate={mysteryBox.animation}
        variants={boxVariants}
        style={{ transform: mysteryBox.isOpened ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        <Face>
          <GiftImage src="/images/gift.png" alt="Mystery Box" />
        </Face>
        <Face $isBack>
          {mysteryBox.reward && (
            <>
              <RewardImage
                src={getRewardImage(mysteryBox.reward)}
                alt={mysteryBox.reward.title}
              />
              <RewardTitle>{mysteryBox.reward.title}</RewardTitle>
              <RewardValue>{formatValue(mysteryBox.reward)}</RewardValue>
              <RewardDescription>{mysteryBox.reward.description}</RewardDescription>
            </>
          )}
        </Face>
      </Box>
    </Container>
  );
};
