function main(gameState, side) {
	const myTeam = gameState.teamStates[side];
	const [rowSize, colSize] = gameState.boardSize;
	const possibleMoves = [];
	allMoves = [];	//possible moves for all 6 monsters
	for (let member of gameState.teamStates.home){
		//get moves for home team
		console.log(member);
		//console.log(home.getOwnPropertyNames());
		allMoves.push(getValidMoves(gameState, member))
	}
	for (let member of gameState.teamStates.away){
		//get moves for away team
		allMoves.push(getValidMoves(gameState, member))
	}
	//at this point, there should be a 2D array with 6 elements that are possible moves for each of the monsters
	//the actual return value will depend on which side you are playing for
	console.log("MOVE ARRAY:");
	console.log(allMoves);
	console.log(minimax(gameState, allMoves, side));
	return minimax(gameState, allMoves, side);
	// we are returning a timeout here to test limiting execution time on the sandbox side.
}

function getValidMoves(gameState, member){
	const [rowSize, colSize] = gameState.boardSize;
	moves = []
	if (member.isDead){
		moves.push('none');
	}else{
		moves.push('none');
		const [row, col] = member.coord;
		if (row > 1) moves.push('north');
		if (row < rowSize - 1)  moves.push('south');
		if (col > 1) moves.push('west');
		if (col < colSize - 1)  moves.push('east');
	}
	return moves;
}

function value(gameState, possibleMoves){
	//piece alive = good
	//piece near middle = good
	//piece near opponent = good
	//piece near ally = bad
	//piece in region = C*value of region
}
function getGameState(gameState, moves){
	//determines what the state of the board will be after a valid move set
}
function getRegionValue(gameState, x, y){
	//determines the size of an area that a monster is in, may not get to implementation

}
function minimax(gameState, possibleMoves, side, depth){
	//to be implemented, use the best n moves from the combineArr paired with getGameState
	if (side === 'home'){
		return [possibleMoves[0][0], possibleMoves[1][0], possibleMoves[2][0]];
	}
	else{
		return [possibleMoves[3][0], possibleMoves[4][1], possibleMoves[5][0]];
	}
}
function combineArr(arr, ind = 0, result = [[]]){
	//takes in an array of possible moves (probably limited for 2 for the sake of branching factors), and outputs all possible combinations
	//because of the synchronous move setup, this is most easily done here
	//example array would be [["N","none"],["S", "W"],["E","W"],["E", "N"],["N", "S"],["none", "W"]]
	//with NSEW representing 'north', 'south', 'east' and 'west'
	newResult = [];
	for (let j of result){
		for (let i of arr[ind]){
			if (j.length === 0){
    			newResult.push([]);
			}
			else{
    			toAdd = [];
    			for (i = 0; i < j.length; i++){
    			    toAdd.push(j[i]);
    			}
    			newResult.push(toAdd);
		    }
		    
		}
	}
	for (i = 0; i < newResult.length; i++) {
		newResult[i].push(arr[ind][i%arr[ind].length]);
	}

	if (ind == arr.length - 1){
		return newResult;
	}
	else{
		return combineArr(arr, ind+1, newResult);
	}
}
