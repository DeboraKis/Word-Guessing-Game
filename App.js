const App = () => {
    const words = [
        "REACT", "JAVASCRIPT", "DEVELOPER", "PORTFOLIO",
        "FRONTEND", "CODING", "APPLICATION", "WEBSITE",
        "COMPONENT", "FUNCTION", "INTERVIEW", "CAREER"
    ];
    
    const [word, setWord] = React.useState("");
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    const [wrongAttempts, setWrongAttempts] = React.useState(0);
    const [gameStatus, setGameStatus] = React.useState("playing"); // "playing", "won", "lost"
    
    const maxWrongAttempts = 6;
    
    React.useEffect(() => {
        startNewGame();
    }, []);
    
    const startNewGame = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
        setGuessedLetters([]);
        setWrongAttempts(0);
        setGameStatus("playing");
    };
    
    const handleGuess = (letter) => {
        if (gameStatus !== "playing" || guessedLetters.includes(letter)) {
            return;
        }
        
        const newGuessedLetters = [...guessedLetters, letter];
        setGuessedLetters(newGuessedLetters);
        
        if (!word.includes(letter)) {
            const newWrongAttempts = wrongAttempts + 1;
            setWrongAttempts(newWrongAttempts);
            
            if (newWrongAttempts >= maxWrongAttempts) {
                setGameStatus("lost");
            }
        } else {
            // Check if all letters are guessed
            const isWordGuessed = word.split('').every(char => 
                newGuessedLetters.includes(char)
            );
            
            if (isWordGuessed) {
                setGameStatus("won");
            }
        }
    };
    
    return (
        <div className="app">
            <h1>Word Guessing Game</h1>
            <WordDisplay word={word} guessedLetters={guessedLetters} />
            <GameStatus 
                gameStatus={gameStatus} 
                wrongAttempts={wrongAttempts} 
                maxWrongAttempts={maxWrongAttempts}
                word={word}
            />
            <Keyboard 
                guessedLetters={guessedLetters} 
                onGuess={handleGuess}
                word={word}
                disabled={gameStatus !== "playing"}
            />
            {gameStatus !== "playing" && (
                <button className="new-game-btn" onClick={startNewGame}>
                    Play Again
                </button>
            )}
        </div>
    );
};