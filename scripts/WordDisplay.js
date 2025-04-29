const WordDisplay = ({ word, guessedLetters }) => {
    return (
        <div className="word-display">
            {word.split('').map((letter, index) => (
                <div key={index} className="letter-box">
                    {guessedLetters.includes(letter) ? letter : ""}
                </div>
            ))}
        </div>
    );
};