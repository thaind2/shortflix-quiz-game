import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizGame } from '../hooks/useQuizGame';
import { Question, GameState } from '../types';
import { GameEffects } from './GameEffects';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  color: #fff;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Score = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Timer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
`;

const QuestionContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
`;

const QuestionText = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
`;

const QuestionImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const OptionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Option = styled(motion.button)<{ $isSelected?: boolean; $isCorrect?: boolean; $isWrong?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => {
    if (props.$isCorrect) return '#4CAF50';
    if (props.$isWrong) return '#f44336';
    if (props.$isSelected) return '#2196F3';
    return 'rgba(255, 255, 255, 0.2)';
  }};
  background: ${props => {
    if (props.$isCorrect) return 'rgba(76, 175, 80, 0.2)';
    if (props.$isWrong) return 'rgba(244, 67, 54, 0.2)';
    if (props.$isSelected) return 'rgba(33, 150, 243, 0.2)';
    return 'rgba(255, 255, 255, 0.1)';
  }};
  color: #fff;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${props => (props.$isCorrect || props.$isWrong) ? 1 : 0.5};
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  width: ${props => props.$progress}%;
  height: 100%;
  background: #2196F3;
  border-radius: 2px;
  transition: width 0.3s ease;
`;

interface Props {
  questions: Question[];
  onGameComplete: (score: number, gameState: GameState) => void;
}

export const QuizGame: React.FC<Props> = ({ questions, onGameComplete }) => {
  const {
    currentQuestion,
    selectedAnswer,
    timeLeft,
    score,
    isAnswerRevealed,
    gameState,
    handleAnswerClick,
    isAnswerCorrect,
    currentQuestionIndex
  } = useQuizGame(questions, onGameComplete);

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Container>
      <GameEffects
        type={isAnswerRevealed ? (isAnswerCorrect ? 'correct' : 'wrong') : undefined}
        onComplete={() => {}}
        isPlaying={true}
        playCorrect={isAnswerRevealed && isAnswerCorrect}
        playWrong={isAnswerRevealed && !isAnswerCorrect}
      />
      
      <Header>
        <Score>Điểm: {score}</Score>
        <Timer color={timeLeft <= 5 ? '#f44336' : undefined}>
          {timeLeft}s
        </Timer>
      </Header>

      <Progress>
        <ProgressBar $progress={progress} />
      </Progress>

      <QuestionContainer>
        <QuestionText>{currentQuestion.text}</QuestionText>
        <AnimatePresence mode="wait">
          <QuestionImage
            key={currentQuestion.id}
            src={currentQuestion.imageUrl}
            alt="Question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              console.error('Error loading image:', e);
              e.currentTarget.src = '/images/placeholder.jpg';
            }}
          />
        </AnimatePresence>
        <OptionsContainer>
          {currentQuestion.options.map((option: string, index: number) => (
            <Option
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isAnswerRevealed || gameState.isGameOver}
              $isSelected={selectedAnswer === index}
              $isCorrect={isAnswerRevealed && index === currentQuestion.correctAnswer}
              $isWrong={isAnswerRevealed && selectedAnswer === index && index !== currentQuestion.correctAnswer}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
      </QuestionContainer>
    </Container>
  );
};
