# Kata TicTacToe

## First pomodoro:
Be able to create and format an empty game board,
and be able to place a players marker on some squares, maybe all

✔ Create an empty game board
✔ Format an empty game board

Now we want to place an X:
✔ Place an x in the top left
✔ Place an x in the top center
✔ Place an x in the bottom right

And of course, we want to place some O's as well:
✔ Place an O in the center of the board

## Second pomodoro:
Be able to detect column wins, with both players

First we want to detect an X win in the first column:
✔ One X: no win
✔ Two Xes below eachother: No win
✔ Two Xes disconnected: No win
✔ Three Xes below eachother: Win!

We also want to detect other column X wins:
✔ Three Xes in the second row: win
✔ Three Xes in the third row: win
✔ Two Xes in the third row and one in the second row: no win

We want to detect column wins for O:
✔ Three O's in the second row: win
✔ Three Xes in the second row: no win for O

We want to be able to detect diagonal wins for both players:
✔ Xes top left to bottom right: win
✔ O's bottom left to top right: win

## Third pomodoro:
Allright, I went too fast. Let's first check the second UAT scenario.
Then move on to horizontal lines, check with the third UAT scenario.
Then, if there is time, move on with the fourth (the logic is already there, oops)