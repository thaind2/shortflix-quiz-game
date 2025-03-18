import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MysteryBox as MysteryBoxType, Reward } from '../types';
import {
  giftImage,
  loyaltyPointsImage,
  dataPackageImage,
  iphoneImage,
  vinfastImage
} from '../assets/images';

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

const GiftBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GiftBoxTop = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(135deg, #ff4b4b 0%, #ff0000 100%);
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 10px;
    background: #ffeb3b;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 100%;
    background: #ffeb3b;
    transform: translateX(-50%);
  }
`;

const RewardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
`;

const RewardImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const RewardTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
`;

const RewardValue = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const RewardDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
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
    }
  };

  const getRewardImage = (reward: Reward) => {
    switch (reward.type) {
      case 'LOYALTY_POINTS':
        return loyaltyPointsImage;
      case 'DATA_PACKAGE':
        return dataPackageImage;
      case 'DEVICE':
        return iphoneImage;
      case 'VEHICLE':
        return vinfastImage;
      default:
        return giftImage;
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
        animate={mysteryBox.animation === 'shake' ? 'shake' : undefined}
        variants={boxVariants}
        style={{ transform: mysteryBox.isOpened ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        <Face>
          <GiftBox>
            <GiftBoxTop />
          </GiftBox>
        </Face>
        <Face $isBack>
          {mysteryBox.reward && (
            <RewardContainer>
              <RewardImage
                src={getRewardImage(mysteryBox.reward)}
                alt={mysteryBox.reward.title}
              />
              <RewardTitle>{mysteryBox.reward.title}</RewardTitle>
              <RewardValue>{formatValue(mysteryBox.reward)}</RewardValue>
              <RewardDescription>{mysteryBox.reward.description}</RewardDescription>
            </RewardContainer>
          )}
        </Face>
      </Box>
    </Container>
  );
};
