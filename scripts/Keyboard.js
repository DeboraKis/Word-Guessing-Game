const Keyboard = ({ guessedLetters, onGuess, word, disabled }) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    
    const getKeyClassName = (letter) => {
        if (!guessedLetters.includes(letter)) return "key";
        if (word.includes(letter)) return "key correct";
        return "key used";
    };
    
    return (
        <div className="keyboard">
            {alphabet.map(letter => (
                <button
                    key={letter}
                    className={getKeyClassName(letter)}
                    onClick={() => onGuess(letter)}
                    disabled={guessedLetters.includes(letter) || disabled}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};