let restartButton = document.createElement("button");
let score = 0;
let toWin = 0;


window.addEventListener("load",function windowinfo(){
	windowParent2.style.display = "block";
	windowParent2.style.animationName = "scaleUp";
	h2Score.style.display = "none";
	h2bestScore.style.display = "none";

document.getElementById("closeThanksinfo").addEventListener("click", function game() {
	windowParent2.style.display = "none";
	h2Score.style.display = "block";
	h2bestScore.style.display = "block";
	const scoreDisplay = document.getElementById("score");
	const width = 28; // 28*28 = 784 squares
	const grid = document.querySelector(".grid")
	const layout = [
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,3,0,0,0,0,0,0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,1,
		1,0,1,1,1,1,0,1,1,1,1,1,0,1,4,1,0,1,1,1,1,0,1,1,1,1,0,1,
		1,0,1,4,4,1,0,1,4,4,4,1,0,1,4,1,0,1,4,4,1,0,1,4,4,1,0,1,
		1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,
		1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,
		1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,3,1,
		1,1,1,1,1,1,0,1,1,1,0,4,0,1,0,4,4,0,1,1,1,0,1,1,1,1,1,1,
		4,4,4,4,4,1,0,1,0,0,0,4,0,1,0,4,4,0,0,0,1,0,1,4,4,4,4,4,
		1,1,1,1,1,1,0,1,0,4,4,4,0,0,0,4,4,4,4,0,1,0,1,1,1,1,1,1,
		1,0,0,0,0,0,0,0,0,4,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,1,
		1,3,4,4,4,4,0,4,4,4,2,2,2,2,2,2,2,2,4,4,0,4,4,4,4,4,0,1,
		1,0,0,0,0,0,0,0,0,4,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,1,
		1,1,1,1,1,1,0,1,0,4,4,2,2,2,2,2,2,2,4,0,1,0,1,1,1,1,1,1,
		4,4,4,4,4,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,4,4,4,4,4,
		1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
		1,0,1,1,1,1,0,1,0,1,1,1,0,1,4,1,1,1,1,0,1,0,1,1,1,1,0,1,
		1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
		1,1,1,0,1,1,4,4,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
		4,4,4,0,1,0,0,0,0,1,0,1,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,1,
		1,1,1,0,1,1,1,1,1,1,0,1,1,1,4,1,1,1,0,1,1,1,1,1,1,1,0,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,1,4,1,0,0,0,1,0,0,0,0,0,1,0,1,
		1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,4,4,4,1,1,0,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
		]; 
	// 0 = pac-dot ; 1 = wall ; 2 = ghost-lair ; 3 = power-pellet ; 4 = empty;
	const squares = [];


// Draw the grid
	function createBoard() {
		for (let i = 0; i < layout.length ; i++){
			const square = document.createElement("div");
			grid.appendChild(square);
			squares.push(square);

		// Add layout to the board
			if (layout[i] === 0) {
				squares[i].classList.add("pac-dot");
			} else if (layout[i] === 1) {
				squares[i].classList.add("wall");
			} else if (layout[i] === 2) {
				squares[i].classList.add("ghost-lair");
			} else if (layout[i] === 3) {
				squares[i].classList.add("power-pelletp");
			} else if (layout[i] === 4) {
				squares[i].classList.add("empty");
			}
		}
	}
	createBoard();
	
//User's best score
	function bestScoreCount () {
		let higher;
		let bestScore = window.localStorage.getItem(higher);
		window.localStorage.setItem(bestScore, higher);
		const bestScoreDisplay = document.getElementById("bestScore");
		if (bestScore == null) {
			bestScore = score;
			window.localStorage.setItem(higher, bestScore);
		} else if (score < Number(window.localStorage.getItem(higher))) {
			bestScore = score;	
		} else if (score > Number(window.localStorage.getItem(higher))) {
			window.localStorage.clear();
			bestScore = score;
			window.localStorage.setItem(higher, bestScore);
		}
		bestScoreDisplay.innerHTML = window.localStorage.getItem(higher);
	}
	bestScoreCount();
	
// Starting position of Pac-Man
	let pacmanCurrentIndex = 518;
	squares[pacmanCurrentIndex].classList.add("pac-man");

// Move Pac-Man
	function movePacman (e) {
		squares[pacmanCurrentIndex].classList.remove("pac-man");
		switch(e.keyCode){
			case 37:
				if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")) {
					pacmanCurrentIndex -=1;
					squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
					// If Pac-Man is on the left exit
					if (pacmanCurrentIndex - 1 === 363) {
						pacmanCurrentIndex = 391;
				}}
				break;
			case 38:
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) { 
          pacmanCurrentIndex -= width;
					squares[pacmanCurrentIndex].style.transform = "scaleY(-1) rotate(95deg)";
				}
				break;
			case 39:
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex +1].classList.contains("wall") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-lair")){ 
          pacmanCurrentIndex += 1;
					squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(190deg)";
					// If Pac-Man is on the right exit
					if(pacmanCurrentIndex + 1 === 392) {
						pacmanCurrentIndex = 364;
				}}
				break;
			case 40:
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
					pacmanCurrentIndex += width;
					squares[pacmanCurrentIndex].style.transform = " scaleY(1) rotate(95deg)";
				}
				break;
		}

		squares[pacmanCurrentIndex].classList.add("pac-man");

		pacDotEaten();
		powerPelletEaten();
		checkForGameOver();
		checkForWin();
	}

	document.addEventListener("keydown", movePacman);
  
  // Move Pac-Man on mobile devices (Swipe up-down-left-right)
	var initialX = null;
	var initialY = null;

	function startTouch (e) {
		initialX = e.touches[0].clientX;
		initialY = e.touches[0].clientY;
	} 
	
	function moveTouch (e) {
		
		if (initialX === null){
			return;
		}
		if (initialY === null){
			return;
		}
		
		var currentX = e.touches[0].clientX;
		var currentY = e.touches[0].clientY;
		var diffX = initialX - currentX;
		var diffY = initialY - currentY;
    
		squares[pacmanCurrentIndex].classList.remove("pac-man");
    
		if (Math.abs(diffX) > Math.abs(diffY)){
			if (diffX > 0) {
				// Swipe Left
        if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")) {
					pacmanCurrentIndex -=1;
					squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
					// If Pac-Man is on the left exit
					if (pacmanCurrentIndex - 1 === 363) {
						pacmanCurrentIndex = 391;
				}}
			} else {
				// Swipe Right
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex +1].classList.contains("wall") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-lair")){ pacmanCurrentIndex += 1;
					squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(190deg)";
					// If Pac-Man is on the right exit
					if(pacmanCurrentIndex + 1 === 392) {
						pacmanCurrentIndex = 364;
				}}
			}
		} else {
			if (diffY > 0){
				// Swipe Up
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) { pacmanCurrentIndex -= width;
					squares[pacmanCurrentIndex].style.transform = "scaleY(-1) rotate(95deg)";
				}
			} else {
				// Swipe Down
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
					pacmanCurrentIndex += width;
					squares[pacmanCurrentIndex].style.transform = "scaleY(1) rotate(95deg)";
				}
			}
		}
			squares[pacmanCurrentIndex].classList.add("pac-man");
		initialX = null;
		initialY = null;
		
		e.preventDefault();
	

		pacDotEaten();
		powerPelletEaten();
		checkForGameOver();
		checkForWin();
		
	}
	
	document.querySelector(".grid").addEventListener("touchstart", startTouch, false);
	document.querySelector(".grid").addEventListener("touchmove", moveTouch, false);
  
  

// When Pac-Man eats a Pac-Dot
	function pacDotEaten() {
		if (squares[pacmanCurrentIndex].classList.contains("pac-dot")){
			score++;
			toWin++;
			squares[pacmanCurrentIndex].classList.remove("pac-dot");
		}
		scoreDisplay.innerHTML = score;
	}

// When Pac-Man eats a Power-Pellet
		function powerPelletEaten () {
			
			 if (squares[pacmanCurrentIndex].classList.contains("power-pelletp")) {
				score += 10;
				toWin += 10;
				ghosts.forEach(ghost => ghost.isScared = true);
				setTimeout(unScareGhosts, 7000);
				squares[pacmanCurrentIndex].classList.remove("power-pelletp");
			}
			scoreDisplay.innerHTML = score;
		}


// Create Ghost template
	class Ghost {
		constructor(className, startIndex, speed){
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.timerId = NaN;
			this.isScared = false;
		}
	}

	const ghosts = [
		new Ghost("blinky", 200, 40),
		new Ghost("pinky", 376, 120),
		new Ghost("inky", 500, 140),
		new Ghost("clyde", 721, 150),
	]
		
// Give back their colors to the ghosts
	function unScareGhosts () {ghosts.forEach(ghost => ghost.isScared = false)}
	
		
// Draw the ghosts onto the grid
	ghosts.forEach(ghost => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add("ghost");
	})

// Move the ghosts 
	ghosts.forEach(ghost => moveGhost(ghost));

	function moveGhost (ghost) {
		const directions = [-1, +1, width, -width];
		let direction = directions[Math.floor(Math.random() * directions.length)];
		ghost.timerId = setInterval(function () {
			if (!squares[ghost.currentIndex + direction].classList.contains("ghost") && !squares[ghost.currentIndex + direction].classList.contains("wall")) {
				squares[ghost.currentIndex].classList.remove(ghost.className);
				squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
				ghost.currentIndex += direction;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			} else if (ghost.currentIndex - 1 === 363) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
				ghost.currentIndex = 391;
				squares[ghost.currentIndex].classList.add("ghost");
			} else if (ghost.currentIndex + 1 === 392) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
				ghost.currentIndex = 364;
				squares[ghost.currentIndex].classList.add("ghost");
			} else {
				direction = directions[Math.floor(Math.random() * directions.length)]
			}

			
			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add("scared-ghost");
			}

			if (squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
				ghost.currentIndex = ghost.startIndex;
				score += 5;
				toWin += 5;
				scoreDisplay.innerHTML = score;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			}
				
			checkForGameOver();
			
		}, ghost.speed)
	}
let windowParent = document.getElementById("windowParent");
let windowParent1 = document.getElementById("windowParent1");
let content = document.getElementById("content");
const scoreDisplay1 = document.getElementById("scor");
const scoreDisplay2 = document.getElementById("score1");

// Check for Game Over
	function checkForGameOver () {
		if (squares[pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
			ghosts.forEach(ghost => clearInterval(ghost.timerId));
			document.removeEventListener("keydown", movePacman);
			bestScoreCount();
			scoreDisplay.innerHTML = score;
			scoreDisplay1.innerHTML = score;
			windowParent1.style.display = "block";
  windowParent1.style.animationName = "scaleUp";
 
      			
		}	
	}

// Check for Win
	function checkForWin () {
		if (toWin >= 374) {
			ghosts.forEach(ghost => clearInterval(ghost.timerId));
			document.removeEventListener("keydown", movePacman);
			bestScoreCount();
			scoreDisplay.innerHTML = score;
			scoreDisplay2.innerHTML = score;
			
			windowParent.style.display = "block";
            windowParent.style.animationName = "scaleUp";
			
			scoreDisplay1.innerHTML = score;
		}
	}
}) 



})

