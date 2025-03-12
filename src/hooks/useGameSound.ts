  const playCorrect = useCallback(() => {
    playTone(880, 0.15);      // A5
    setTimeout(() => playTone(1108.73, 0.2), 150);  // C#6
  }, [playTone]);

  const playWrong = useCallback(() => {
    playTone(440, 0.15, 'sawtooth');     // A4
    setTimeout(() => playTone(349.23, 0.3, 'sawtooth'), 150);  // F4
  }, [playTone]);

  const playTick = useCallback(() => {
    playTone(660, 0.05, 'square', 0.05);
  }, [playTone]);

  const playHover = useCallback(() => {
    playTone(1200, 0.03, 'sine', 0.05);
  }, [playTone]);

  const playGameOver = useCallback(() => {
    const notes = [
      { freq: 783.99, dur: 0.2, delay: 0 },   // G5
      { freq: 739.99, dur: 0.2, delay: 0.2 }, // F#5
      { freq: 698.46, dur: 0.2, delay: 0.4 }, // F5
      { freq: 659.25, dur: 0.4, delay: 0.6 }, // E5
    ];
    
    notes.forEach(({ freq, dur, delay }) => {
      setTimeout(() => playTone(freq, dur, 'triangle'), delay * 1000);
    });
  }, [playTone]);

  const playCongratulations = useCallback(() => {
    const notes = [
      { freq: 523.25, dur: 0.15, delay: 0 },    // C5
      { freq: 659.25, dur: 0.15, delay: 0.15 }, // E5
      { freq: 783.99, dur: 0.15, delay: 0.3 },  // G5
      { freq: 1046.50, dur: 0.15, delay: 0.45 },// C6
      { freq: 1318.51, dur: 0.4, delay: 0.6 },  // E6
    ];
    
    notes.forEach(({ freq, dur, delay }) => {
      setTimeout(() => playTone(freq, dur), delay * 1000);
    });
  }, [playTone]);

  const playReward = useCallback(() => {
    const notes = [
      { freq: 987.77, dur: 0.1, delay: 0 },    // B5
      { freq: 1318.51, dur: 0.1, delay: 0.1 }, // E6
      { freq: 1567.98, dur: 0.3, delay: 0.2 }, // G6
    ];
    
    notes.forEach(({ freq, dur, delay }) => {
      setTimeout(() => playTone(freq, dur, 'triangle'), delay * 1000);
    });
  }, [playTone]);

  return {
    playGameStart,
    playCorrect,
    playWrong,
    playTick,
    playHover,
    playGameOver,
    playCongratulations,
    playReward
  };
};
