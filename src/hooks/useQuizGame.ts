import { useState, useEffect, useCallback } from 'react';
import { Question, GameState } from '../types';

const INITIAL_TIME = 30;
const POINTS_PER_CORRECT = 100;
const TIME_BONUS_MULTIPLIER = 3;

export const useQuizGame = (questions: Question[]) => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentQuestionIndex: 0,
    timeRemaining: INITIAL_TIME,
    isGameOver: false,
    wrongAnswers: 0
  });

  // Reset timer when moving to next question
  useEffect(() => {
    setGameState(prev => ({
      ...prev,
      timeRemaining: INITIAL_TIME
    }));
  }, [gameState.currentQuestionIndex]);

  // Timer countdown
  useEffect(() => {
    if (gameState.isGameOver) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 0) {
          // Time's up, count as wrong answer and move to next question
          if (prev.currentQuestionIndex < questions.length - 1) {
            return {
              ...prev,
              currentQuestionIndex: prev.currentQuestionIndex + 1,
              timeRemaining: INITIAL_TIME,
              wrongAnswers: prev.wrongAnswers + 1
            };
          } else {
            // Game over if no more questions
            return {
              ...prev,
              isGameOver: true,
              wrongAnswers: prev.wrongAnswers + 1
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
    const currentQuestion = questions[gameState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setGameState(prev => {
      const newScore = isCorrect
        ? prev.score + POINTS_PER_CORRECT + (prev.timeRemaining * TIME_BONUS_MULTIPLIER)
        : prev.score;

      if (prev.currentQuestionIndex < questions.length - 1) {
        return {
          ...prev,
          score: newScore,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          timeRemaining: INITIAL_TIME,
          wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1
        };
      } else {
        return {
          ...prev,
          score: newScore,
          isGameOver: true,
          wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1
        };
      }
    });
  }, [gameState.currentQuestionIndex, questions]);

  return {
    gameState,
    answerQuestion
  };
};