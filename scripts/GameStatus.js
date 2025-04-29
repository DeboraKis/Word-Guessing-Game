const GameStatus = ({ gameStatus, wrongAttempts, maxWrongAttempts, word }) => {
    const renderMessage = () => {
        if (gameStatus === "won") {
            return <p className="win">Congratulations! You guessed the word!</p>;
        } else if (gameStatus === "lost") {
            return (
                <p className="lose">
                    Game Over! The word was: <strong>{word}</strong>
                </p>
            );
        } else {
            return <p>Guess the word one letter at a time</p>;
        }
    };
    
    return (
        <div className="status">
            {renderMessage()}
            <p className="tries">
                Wrong attempts: {wrongAttempts} / {maxWrongAttempts}
            </p>
        </div>
    );
};