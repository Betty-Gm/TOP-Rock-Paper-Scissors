# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) JavaScript course. Play against the computer using on-screen buttons, with live score tracking and a first-to-5 win condition.

## Features

- 🪨📄✂️ **Click-based gameplay** — choose Rock, Paper, or Scissors using buttons (no typing required)
- 🤖 **Computer opponent** — the computer randomly selects its move each round
- 📊 **Live score tracking** — human and computer scores update after every round
- 🏆 **Win condition** — first player to reach 5 points wins the match
- 🔒 **Button disabling** — choice buttons are disabled once the game ends, preventing further moves
- 🔁 **Play Again** — reset button appears at game end to reset scores and start a new match

## How It Works

1. Click **Rock**, **Paper**, or **Scissors** to make your move
2. The computer randomly picks its move, and the result of the round is shown (win, lose, or tie)
3. Scores update live after each round
4. First to reach 5 points wins — buttons are disabled and a **"Play Again"** button appears
5. Click **"Play Again"** to reset scores and play another match

## Tech Stack

- HTML5
- Vanilla JavaScript (DOM manipulation, event listeners)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Betty-Gm/TOP-Rock-Paper-Scissors.git
cd TOP-Rock-Paper-Scissors
```

### Run it

Just open `index.html` in your browser — no build step or dependencies required.

## Project Structure

TOP-Rock-Paper-Scissors/
├── index.html # Page structure, buttons, and score display
├── script.js # Game logic, computer choice, scoring, and reset handling

## Future Improvements

- Add a CSS file for styling (currently unstyled)
- Highlight the winning move visually each round
- Add sound effects or animations
- Add a running round history log

## Author

Built by [Bethlehem Gebremichael Abay](https://github.com/Betty-Gm) while working through The Odin Project's JavaScript curriculum.