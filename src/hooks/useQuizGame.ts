import { useState, useEffect } from 'react';
import { Question, GameState } from '../types';

interface QuizGameHook {
  currentQuestion: Question;
  selectedAnswer: number | null;
  timeLeft: number;
  score: number;
  isAnswerRevealed: boolean;
  gameState: GameState;
  handleAnswerClick: (index: number) => void;
  isAnswerCorrect: boolean;
  currentQuestionIndex: number;
}

export const useQuizGame = (questions: Question[], onGameComplete: (score: number, gameState: GameState) => void): QuizGameHook => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    isGameOver: false,
    currentQuestionIndex: 0,
    score: 0,
    wrongAnswers: 0,
    timeBonus: 0
  });

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!gameState.isGameOver && !isAnswerRevealed) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsAnswerRevealed(true);
            setIsAnswerCorrect(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState.isGameOver, isAnswerRevealed]);

  const handleAnswerClick = (index: number) => {
    if (isAnswerRevealed) return;

    setSelectedAnswer(index);
    setIsAnswerRevealed(true);
    
    const correct = index === currentQuestion.correctAnswer;
    setIsAnswerCorrect(correct);

    if (correct) {
      const timeBonus = Math.floor(timeLeft / 2);
      const questionScore = 100 + timeBonus;
      setScore(prev => prev + questionScore);
      setGameState(prev => ({
        ...prev,
        score: prev.score + questionScore,
        timeBonus: prev.timeBonus + timeBonus
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }));
    }

    setTimeout(() => {
      if (currentQuestionIndex === questions.length - 1) {
        setGameState(prev => ({ ...prev, isGameOver: true }));
        onGameComplete(score, {
          ...gameState,
          score: score,
          isGameOver: true,
          currentQuestionIndex: currentQuestionIndex
        });
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswerRevealed(false);
        setTimeLeft(30);
      }
    }, 1500);
  };

  return {
    currentQuestion,
    selectedAnswer,
    timeLeft,
    score,
    isAnswerRevealed,
    gameState,
    handleAnswerClick,
    isAnswerCorrect,
    currentQuestionIndex
  };
};