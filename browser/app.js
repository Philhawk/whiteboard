var socket = io(window.location.origin);

window.whiteboard.on('draw', function(start, end, strokeColor) {
  if (strokeColor === undefined){
    strokeColor = 'black'
  }
  socket.emit('drawing', start, end, strokeColor)
  socket.on('drew', function(start, end, strokeColor){
    console.log(start, end, strokeColor)
    window.whiteboard.draw(start, end, strokeColor)
  })
})

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});
