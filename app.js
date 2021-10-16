document.addEventListener('DOMContentLoaded',() => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const colors = [
        'blue',
        'red',
        'green',
        'yellow',
        'orange',
        'pink'
    ]


    // create a board
    function createBoard() {
        for (let i=0; i<width*width; i++) {
            const square = document.createElement('div')
            square.setAttribute('draggable', 'true')
            square.setAttribute('id', i)
            let randomColor = Math.floor(Math.random() * colors.length)
            square.style.backgroundColor = colors[randomColor]
            grid.appendChild(square)
            squares.push(square)

        }
    }

    createBoard()


    // Dragging the Candy
    let colorBeingDragged 
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('drageleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))
    

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
    }

    function dragEnter(event) {
        event.preventDefault()
    }

    function dragOver(event) {
        event.preventDefault()
    }

    function dragLeave() {
        this.style.backgroundColor = ''
    }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor
        this.style.backgroundColor = colorBeingDragged
        squareIdBeingReplaced = parseInt(this.id)
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }

    function dragEnd() {
        //What is a valid move?
        let validMoves = [squareIdBeingDragged -1 , squareIdBeingDragged -width, squareIdBeingDragged +1, squareIdBeingDragged +width]
        let validMove = validMoves.includes(squareIdBeingReplaced)
    
        if (squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null
        }  else if (squareIdBeingReplaced && !validMove) {
           squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
           squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
        } else  squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }
})