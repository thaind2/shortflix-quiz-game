import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';
import { useQuizGame } from '../hooks/useQuizGame';
import { useGameSound } from '../hooks/useGameSound';
import { GameEffects } from './GameEffects';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestionContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const OptionButton = styled(motion.button)<{ $isCorrect?: boolean; $isWrong?: boolean }>`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  background: ${props =>
    props.$isCorrect
      ? '#4caf50'
      : props.$isWrong
      ? '#f44336'
      : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${props => (props.$isCorrect || props.$isWrong ? 1 : 0.5)};
  }
`;

const Score = styled(motion.div)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
`;

const QuestionProgress = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const TimeDisplay = styled.div<{ timeRemaining: number }>`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => (props.timeRemaining <= 5 ? '#ff5252' : 'white')};
`;

const Timer = styled.div<{ timeRemaining: number }>`
  height: 4px;
  background: #ff5252;
  border-radius: 2px;
  width: ${props => (props.timeRemaining / 30) * 100}%;
  transition: width 1s linear;
  margin-bottom: 2rem;
`;

interface Props {
  questions: Question[];
  onGameComplete: (score: number) => void;
}

export const QuizGame: React.FC<Props> = ({ questions, onGameComplete }) => {
  const { gameState, answerQuestion } = useQuizGame(questions);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [showEffect, setShowEffect] = useState<'start' | 'correct' | 'wrong' | 'gameOver' | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const currentQuestion = questions[gameState.currentQuestion];

  // Hiệu ứng khi bắt đầu game
  useEffect(() => {
    if (isFirstRender) {
      setShowEffect('start');
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  const handleAnswer = async (index: number) => {
    if (isAnswerLocked) return;
    setSelectedAnswer(index);
    setIsAnswerLocked(true);

    // Hiển thị hiệu ứng dựa vào kết quả
    const isCorrect = index === currentQuestion.correctAnswer;
    setShowEffect(isCorrect ? 'correct' : 'wrong');

    // Đợi animation và âm thanh hoàn thành
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    answerQuestion(index);
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
    setShowEffect(null);
  };

  // Kiểm tra kết thúc game
  useEffect(() => {
    if (gameState.isGameOver) {
      setShowEffect('gameOver');
      setTimeout(() => {
        onGameComplete(gameState.score);
      }, 1500);
    }
  }, [gameState.isGameOver, gameState.score, onGameComplete]);

  if (!currentQuestion || gameState.isGameOver) {
    return showEffect === 'gameOver' ? <GameEffects type="gameOver" /> : null;
  }

  return (
    <>
      <Container>
        <Score
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Điểm: {gameState.score}
        </Score>
        
        <QuestionProgress>
          Câu hỏi {gameState.currentQuestion + 1}/{questions.length}
        </QuestionProgress>

        <TimeDisplay timeRemaining={gameState.timeRemaining}>
          {gameState.timeRemaining}s
        </TimeDisplay>
        
        <Timer timeRemaining={gameState.timeRemaining} />
        
        <AnimatePresence mode="wait">
          <QuestionContainer
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <QuestionText>{currentQuestion.text}</QuestionText>
            
            {currentQuestion.imageUrl && (
              <motion.img 
                src={currentQuestion.imageUrl} 
                alt="Question context"
                style={{ 
                  width: '100%', 
                  marginBottom: '1.5rem', 
                  borderRadius: '8px',
                  objectFit: 'cover',
                  maxHeight: '300px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            )}
            
            {currentQuestion.options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswerLocked}
                $isCorrect={isAnswerLocked && index === currentQuestion.correctAnswer}
                $isWrong={isAnswerLocked && selectedAnswer === index && index !== currentQuestion.correctAnswer}
                whileHover={{ scale: isAnswerLocked ? 1 : 1.02 }}
                whileTap={{ scale: isAnswerLocked ? 1 : 0.98 }}
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
