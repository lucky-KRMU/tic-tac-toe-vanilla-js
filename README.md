# Tic-Tac-Toe Web Game

A clean, functional **Tic-Tac-Toe** game built using vanilla web technologies. This project features a responsive layout, alternating player turns, and real-time win detection.

---

## 🚀 Features

* **Alternating Turns**: Automatically switches between **X** and **O** starting with player X.
* **Win Detection**: Checks all 8 possible winning combinations (rows, columns, and diagonals) after every move.
* **Move Validation**: Prevents players from overwriting a square that has already been played.
* **Responsive UI**: Uses `vmin` units in CSS to ensure the game board scales perfectly on both mobile and desktop screens.
* **Modern Styling**: Features a bold color palette (deep pink and yellow-green) with dashed borders and the "Google Sans" font family.

---

## 🛠️ File Structure

* `index.html`: Defines the game structure, including the  grid of buttons and the winner display area.
* `style.css`: Contains the visual styling, Flexbox layouts for centering, and responsive board dimensions.
* `logic.js`: Handles the game state, click events, and the logic to determine the winner.

---

## 🕹️ How to Play

1. Open `index.html` in any modern web browser.
2. Player X starts by clicking any empty square on the grid.
3. Player O follows by selecting another empty square.
4. The first player to get three of their marks in a horizontal, vertical, or diagonal row wins!
5. When a win is detected, the winner's name is displayed at the top of the screen.

---

## 💻 Code Overview

### Winning Logic

The game uses a `dataArray` to track the state of the 9 cells. The `winCheck` function iterates through a 2D array of winning indices:

```javascript
let winCheckPara = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];

```

### Styling

The board is contained within a flex container to keep everything centered:

* **Background**: `rgb(156, 0, 76)`.
* **Buttons**: `15vmin` square with a `yellowgreen` background.

---

