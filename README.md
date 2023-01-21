# Minesweeper v1.0

Play my version of Minesweeper!

![Screenshot of the game](minesweeper-screenshot.png)

## Requirements

[Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Node.js](https://nodejs.org/en/) installed. <br>
In the following, I will give instructions on how to run the game with either Docker or Node.

## Instructions with Docker installed

1. Clone the repository, or download the zip and extract
2. Run the command prompt at the directory, by opening the downloaded folder and typing `cmd` into the address bar:<br>

<div style="margin-left: 25px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="runcmd.png" alt="Instruction on how to run cmd"> </div> <br>

3. Inside the command prompt, type and confirm:
```
  docker compose up
```
4. Open your browser of choice, type `localhost` into the URL bar and start playing!

## Instructions with Node.js installed

1. Clone the repository, or download the zip and extract
2. Run the command prompt at the directory, by opening the downloaded folder and typing `cmd` into the address bar:<br>

<div style="margin-left: 25px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="runcmd.png" alt="Instruction on how to run cmd"> </div> <br>

3. Inside the command prompt, type and confirm:
```
  npm install 
```
```
  npm run dev
```
4. Open your browser of choice, type `localhost:5173` into the URL bar and start playing!

## Features
- three difficulty modes (Easy, Medium, Hard)
- automatic revealing of neighbours, when there's no mine around
- revealing all neighbours with Left-Click + Right-Click
- timer, that's tracking your progress
- flag counter
- flagging tiles with Right-Click


## What technologies were used

This application was created with [Svelte](https://svelte.dev/), which is a frontend framework for Javascript. 
The application consists of multiple components, which are located in the `src` folder and are joined together in the `App.svelte` file.

## Structure
The component structure that I chose for this project:
- `App.svelte`
- - `DifficultySelection.svelte`
- - `UserInterface.svelte`
- - - `FlagsCount.svelte`
- - - `Timer.svelte`
- - - `ResetButton.svelte`
- - - `Minesfield.svelte`
- - - - `Cells.svelte`
- `stores.js`