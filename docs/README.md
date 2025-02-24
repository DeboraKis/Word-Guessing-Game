Word Guessing Game
A fun, interactive React word guessing game where players need to discover hidden words one letter at a time. Perfect for demonstrating front-end development skills and React fundamentals.

Features

Random Word Selection: Game randomly selects from a collection of developer-related terms
Interactive Keyboard: On-screen keyboard for letter selection with color-coded feedback
Visual Progress: See your progress as correct letters appear in the word display
Game States: Complete game loop with win/lose conditions and score tracking
Responsive Design: Clean, modern UI that works on various screen sizes

Technologies Used

React.js
JavaScript (ES6+)
HTML5
CSS3
React Hooks for state management

Installation & Setup

Clone the repository:
Copygit clone https://github.com/DeboraKis/Word-Guessing-Game.git

Navigate to the project directory:
Copycd word-guessing-game

Open the index.html file in your browser to run the application.

Project Structure
Copyword-guessing-game/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── App.js                  # Main React component with game logic
├── WordDisplay.js          # Component for displaying the hidden/revealed word
├── Keyboard.js             # Interactive keyboard component
├── GameStatus.js           # Game status and messages component
└── index.js                # React entry point
How to Play

The game randomly selects a word from a predefined list
Use the on-screen keyboard to guess one letter at a time
Correct guesses reveal the letter in the word
Incorrect guesses count toward your limit of 6 wrong attempts
Win by revealing the entire word, or lose after 6 wrong guesses
Click "Play Again" to start a new game with a different word

Game Logic

The game maintains the current word, guessed letters, and wrong attempt count
Each letter guess is checked against the current word
Correct guesses reveal letter positions in the word
Wrong guesses increment the wrong attempt counter
Game ends when the word is fully revealed or the attempt limit is reached

Future Enhancements