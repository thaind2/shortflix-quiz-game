  import { useCallback } from 'react';

interface Note {
  freq: number;
  duration: number;
  delay: number;
}

export const useGameSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

  const playNote = useCallback((freq: number, duration: number) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;

    gainNode.gain.setValueAtTime(0.7, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }, [audioContext]);

  const playMelody = useCallback((notes: Note[]) => {
    notes.forEach(note => {
      setTimeout(() => {
        playNote(note.freq, note.duration);
      }, note.delay);
    });
  }, [playNote]);

  const playCorrect = useCallback(() => {
    playMelody([
      { freq: 880, duration: 0.15, delay: 0 },
      { freq: 1108.73, duration: 0.2, delay: 150 }
    ]);
  }, [playMelody]);

  const playWrong = useCallback(() => {
    playMelody([
      { freq: 440, duration: 0.2, delay: 0 },
      { freq: 349.23, duration: 0.3, delay: 200 }
    ]);
  }, [playMelody]);

  const playGameStart = useCallback(() => {
    playMelody([
      { freq: 523.25, duration: 0.15, delay: 0 },
      { freq: 659.25, duration: 0.15, delay: 150 },
      { freq: 783.99, duration: 0.3, delay: 300 }
    ]);
  }, [playMelody]);

  const playGameOver = useCallback(() => {
    playMelody([
      { freq: 783.99, duration: 0.2, delay: 0 },
      { freq: 659.25, duration: 0.2, delay: 200 },
      { freq: 523.25, duration: 0.4, delay: 400 }
    ]);
  }, [playMelody]);

  const playCongratulations = useCallback(() => {
    playMelody([
      { freq: 523.25, duration: 0.15, delay: 0 },
      { freq: 659.25, duration: 0.15, delay: 150 },
      { freq: 783.99, duration: 0.15, delay: 300 },
      { freq: 1046.50, duration: 0.4, delay: 450 }
    ]);
  }, [playMelody]);

  const playTick = useCallback(() => {
    playMelody([
      { freq: 660, duration: 0.05, delay: 0 }
    ]);
  }, [playMelody]);

  const playHover = useCallback(() => {
    playMelody([
      { freq: 1200, duration: 0.03, delay: 0 }
    ]);
  }, [playMelody]);

  const playReward = useCallback(() => {
    playMelody([
      { freq: 987.77, duration: 0.1, delay: 0 },
      { freq: 1318.51, duration: 0.1, delay: 100 },
      { freq: 1567.98, duration: 0.3, delay: 200 }
    ]);
  }, [playMelody]);

  return {
    playCorrect,
    playWrong,
    playGameStart,
    playGameOver,
    playCongratulations,
    playTick,
    playHover,
    playReward
  };
};
