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
        console.log("aquaaaai")
    }

    createBoard()
})