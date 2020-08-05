const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const botDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
const startButton = document.querySelector("#start");
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};
const isClicked = (door) => {
    if (door === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors <= 0) {
        gameOver("win");
    } else if (isBot(door)) {
        return gameOver();
    }
};
doorImage1.onclick = () => {
    if (isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
doorImage2.onclick = () => {
    if (isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
doorImage3.onclick = () => {
    if (isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};
startButton.onclick=()=>{
    if(currentlyPlaying===false){
        startROund();
    };
};
const startROund=()=>{
    doorImage1.src=closedDoorPath;
    doorImage2.src=closedDoorPath;
    doorImage3.src=closedDoorPath;
    numClosedDoors=3;
    startButton.innerHTML='Good Luck!';
    currentlyPlaying=true;
    randomChoreDoorGenerator();
}
const gameOver = (status) => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    }
    currentlyPlaying = false;
};
startROund();