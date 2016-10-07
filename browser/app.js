window.whiteboard.on('draw', function(start, end, strokeColor) {
  if (strokeColor === undefined){
    strokeColor = 'black'
  }
  console.log(start, end, strokeColor)
})
