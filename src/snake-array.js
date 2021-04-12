const snakeArray = (snakeStart) => {
    let arr = [];
  
    for (let i = 0; i < 6; i++) {
      arr.push([]);
    }
    
    let counter = 1;
    let startRow = 0;
    let endRow = 5;
    let startCol = 0;
    let endCol = 6;
    
    while (startCol <= endCol && startRow <= endRow) {
      //Top
      for (let i = startCol; i <= endCol; i++) {
        arr[startRow][i] = counter++;
      }
      startRow++;
      
      //Right
      for (let i = startRow; i <= endRow; i++) {
        arr[i][endCol] = counter++;
      } 
      endCol--;
      
      //Bottom
      for (let i = endCol; i >= startCol; i--) {
        arr[endRow][i] = counter++;
      }
      endRow--;
      
      //Left
      for (let i = endRow; i >= startRow; i--) {
        arr[i][startCol] = counter++;
      }
      startCol++;  
    }
    
    return arr;
}

module.exports = snakeArray;
