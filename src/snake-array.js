const snakeArray = (snakeStart, rows = 6, cols = 7) => {
    let arr = [];
  
    for (let i = 0; i < rows; i++) {
      arr.push([]);
    }
    
    let counter = snakeStart;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    
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
