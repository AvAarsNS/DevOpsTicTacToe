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

✔ First, make a scenario for UAT 2

Then we want to check for horizontal wins:
✔ Two Xes in the first row: no win
✔ Three Xes in first row: win
✔ Three Xes in second row: win
✔ Three O's in third row: win

Then, we want to check the UAT 3 and 4:
✔ UAT 3
✔ UAT 4

To detect draws, we want to be able to detect if all fields are filled:
✔ Empty board: not filled
✔ Almost filled board: not filled
✔ Filled board: yes!

## Final pomodoro:
Continue with the draw tests above, then be able to format the board with players in it
Then be able to select the next player
Then finally, be able to run the game

✔ Test with UAT 5

We want to be able to format the board:
- Test with UAT 3 (half full)
- Test with UAT 5 (full)