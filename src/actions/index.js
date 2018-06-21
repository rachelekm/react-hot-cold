export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const RESTART = 'RESTART';
export const restartGame = () => ({
    type: RESTART,
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = () => ({
    type: AURAL_UPDATE
});