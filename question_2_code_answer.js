function runGameLogic(){
      /* Below are the 9 necessary helper functions (p.s. place-holders depending on exact customized game matrix setups) for executing the gaming logic */
    function determineAwardBoxIndex(gameMatrix){/*...*/}//helper function that decides the index of award box 
    function determineFinalTileOfAwardBox(awardBoxIdx){/*...*/}//helper function that determines the index of the final tile of the award box
    function getAllUnfilledBoxesIndices(awardBoxIdx){/*...*/}//returns an array of all the unfilled boxes (excluding the awardBox Index)
    function determineOutsideUnfilledTiles(boxIndex){/*...*/};//helper function that returns an array with all unfilled tile numbers laying outside of the current box
    function determineInsideUnfilledTiles(boxIndex){/*...*/};//helper function that returns an array with all unfilled tile numbers laying inside of the current box
    function selectFromInsideOrOutside(factor_X){/*...*/};//helper function that returns True for selecting from inside of the current box and False for selecting from outside tiles instead; its probability processing logic is based upon the value of factor_X
    function currentBoxFullyFilled(boxIndex){/*...*/};//helper function that returns True if all the tiles of a box has been fully filled and False for otherwise
    function markTileAsFilled(tileIdx){/*...*/};//marks a tile index as filled
    function getRandomIdxForArray(array){
      if(array.length == 0) return null;
      return Math.floor(Math.random() * array.length);
    }
    
    try{
      /* Execution starts here */
      const awardBoxIdx = determineAwardBoxIndex(gameMatrix); // e.g. selected the F index (e.g. interval) with tiles' indices [11, 12, 17, 18] as the award box's index
      const finalTileNumber = determineFinalTileOfAwardBox(awardBoxIdx);//e.g. 18
    
      let factor_X = 0.2;
    
      let unfilledBoxIndicesArray = getAllUnfilledBoxesIndices(awardBoxIdx);//returns an array of all the unfilled boxes (excluding the awardBox Index)
    
      let currentUnfilledBoxIdx = getRandomIdxForArray(unfilledBoxIndicesArray);//e.g. 'B'
    
      let insideUnfilledTilesArray = determineInsideUnfilledTiles(currentUnfilledBoxIdx);//e.g. [2, 3, 8, 9] 
    
      let currentTilePosIdx = getRandomIdxForArray(insideUnfilledTilesArray);//e.g. 2

      markTileAsFilled(currentTilePosIdx);
    
      while(getAllUnfilledBoxesIndices(awardBoxIdx).length > 0){

          if(!currentBoxFullyFilled(currentUnfilledBoxIdx)){

              if(selectFromInsideOrOutside(factor_X)){

                insideUnfilledTilesArray = determineInsideUnfilledTiles(currentUnfilledBoxIdx);

                currentTilePosIdx = getRandomIdxForArray(insideUnfilledTilesArray);

                markTileAsFilled(currentTilePosIdx);

                factor_X = 0.2; 
              }else{

                outsideUnfilledTilesArray = determineOutsideUnfilledTiles(currentUnfilledBoxIdx);

                currentTilePosIdx = getRandomIdxForArray(outsideUnfilledTilesArray);

                markTileAsFilled(currentTilePosIdx);

                factor_X = 1.0;  
              }
          }else{

            unfilledBoxIndicesArray = getAllUnfilledBoxesIndices(awardBoxIdx);//returns an array of all the unfilled boxes

            currentUnfilledBoxIdx = getRandomIdxForArray(unfilledBoxIndicesArray);

            insideUnfilledTilesArray = determineInsideUnfilledTiles(currentUnfilledBoxIdx);

            currentTilePosIdx = getRandomIdxForArray(insideUnfilledTilesArray);

            markTileAsFilled(currentTilePosIdx);

            factor_X = 0.2; 
          }
      }
      //Now with only the award box left to finish filling-out completely
      while(currentTilePosIdx !== finalTileNumber){

          insideUnfilledTilesArray = determineInsideUnfilledTiles(awardBoxIdx);//e.g. [17, 18]

          if(insideUnfilledTilesArray > 1){

            currentTilePosIdx = getRandomIdxForArray(insideUnfilledTilesArray, finalTileNumber);//e.g. 17

            markTileAsFilled(currentTilePosIdx); 
          }else {

            currentTilePosIdx = finalTileNumber;

            markTileAsFilled(currentTilePosIdx); 
          }
      }
      
      console.log('Game completed, successfully exited!');

    }catch(err){
      console.log(err);
      throw err;
    }
}
runGameLogic();
