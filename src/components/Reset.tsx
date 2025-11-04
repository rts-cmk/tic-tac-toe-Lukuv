import GameState from "./GameState"
function Reset({GameState}){
    if(GameState === GameState.inProgress){
        return;
    }
    return (<button className="reset-button">Reset</button>)
}

export default Reset;