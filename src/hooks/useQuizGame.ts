import { useState, useEffect, useCallback } from 'react';
import { Question, GameState } from '../types';

const INITIAL_TIME = 30;
const POINTS_PER_CORRECT = 100;
const TIME_BONUS_MULTIPLIER = 3;

export const useQuizGame = (questions: Question[]) => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentQuestion: 0,
    timeRemaining: INITIAL_TIME,
    isGameOver: false
  });

  // Reset timer when moving to next question
  useEffect(() => {
    setGameState(prev => ({
      ...prev,
      timeRemaining: INITIAL_TIME
    }));
  }, [gameState.currentQuestion]);

  // Timer countdown
  useEffect(() => {
    if (gameState.isGameOver) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 0) {
          // Time's up, move to next question
          if (prev.currentQuestion < questions.length - 1) {
            return {
              ...prev,
              currentQuestion: prev.currentQuestion + 1,
              timeRemaining: INITIAL_TIME
            };
          } else {
            // Game over if no more questions
            return {
              ...prev,
              isGameOver: true
            };
          }
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isGameOver, questions.length]);

  const answerQuestion = useCallback((selectedAnswer: number) => {
    const currentQuestion = questions[gameState.currentQuestion];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setGameState(prev => {
      const newScore = isCorrect
        ? prev.score + POINTS_PER_CORRECT + (prev.timeRemaining * TIME_BONUS_MULTIPLIER)
        : prev.score;

      if (prev.currentQuestion < questions.length - 1) {
        return {
          ...prev,
          score: newScore,
          currentQuestion: prev.currentQuestion + 1,
          timeRemaining: INITIAL_TIME
        };
      } else {
        return {
          ...prev,
          score: newScore,
          isGameOver: true
        };
      }
    });
  }, [gameState.currentQuestion, questions]);

  return {
    gameState,
    answerQuestion
  };
};