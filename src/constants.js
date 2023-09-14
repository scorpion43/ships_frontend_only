const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Directions = {
    UP:"UP", 
    RIGHT: "RIGHT",
    DOWN: "DOWN", 
    LEFT: "LEFT" 
}

const FIELD_BLOCK_TIME = 800

const FIELD_STATE = {
    CLICKED: "CLICKED",
    HIT: "HIT",
    SUNK: "SUNK",
    CLEAR: "CLEAR"
}

export { alphabet, Directions, FIELD_BLOCK_TIME, FIELD_STATE }