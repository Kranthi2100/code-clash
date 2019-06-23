let grid = [
  [{ value: 'Omar1' }, { value: 25 }, { value: 49 }],
  [{ value: 'Vamsi1' }, { value: 49 }, { value: 34 }],
  [{ value: '' }, { value: '' }, { value: '' }],
]
// let cols = 3;
// let labels = []

// datasets = Array(2).fill(null).map(d => ({data: []}));

// for(let i=0; i<grid.length; i++) {
//  for(let j=1; j<grid[i].length; j++) {
//   datasets[j-1].data.push(grid[i][j].value);
//  }
// }


function isNotEmptyRow(row){
  return row.filter(v => v.value !== '').length !== 0;
}

grid = grid.filter(isNotEmptyRow);

console.log(grid)
