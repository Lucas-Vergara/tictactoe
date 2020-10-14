
const gameBoard = (() => {

    const selection = (i) => {
        if (counter % 2 == 1) {
            let div = document.getElementById(i);
            div.classList.add('circle');
            div.classList.remove('blank');
            div.outerHTML = div.outerHTML;
            counter ++;
        } else {
            let div = document.getElementById(i);
            div.classList.add('cross')
            div.classList.remove('blank');
            div.outerHTML = div.outerHTML; 
            counter ++;
        }
    }

    const initialize = () => {
        for (let i=0; i<9; i++) {
            div = document.createElement('div')
            div.id = i
            div.classList.add('blank');
            div.addEventListener("click", function(){
                selection(i)
            } );
            div.addEventListener("click", function(){
                turn(i)
            } );
            document.getElementById('grid').appendChild(div)
        }
    }

    const addPlayer = () => {
        span1 = createFigure()
        span2 = document.createElement('span')
        span2.innerHTML = " : " + players[players.length-1].getName()
        span3 = document.createElement('span')
        span3.style.float = "right"
        div = document.createElement('div')
        div.classList.add('player')
        div.appendChild(span1)
        div.appendChild(span2)
        div.appendChild(span3)
        document.getElementById('players').appendChild(div)
    }

    const createFigure = () => {
        let span = document.createElement('span')
        if (players.length < 2){
            span.classList.add('circleSpan')
            players[players.length-1].figure = 0
        } else {
            span.classList.add('crossSpan')
            players[players.length-1].figure = 1
        }
        return span
    }

    const clear = () => {
        document.getElementById('grid').innerHTML = "";
        grid = [2,3,4,5,6,7,8,9,10]
        document.getElementById('playAgain').classList.toggle('hide')
        document.getElementById('winner').innerHTML = ''
        initialize();
    }
    
    const winner = (number) => {
        if (number == players[0].figure) {
            players[0].points += 1
            document.getElementById('winner').innerHTML = players[0].getName() + ' wins!'
        } else {
            players[1].points += 1
            document.getElementById('winner').innerHTML = players[1].getName() + ' wins!'
        }
        renderScore()
        grid = [2,3,4,5,6,7,8,9,10]
    }

    const renderScore = () => {
        let p = document.getElementsByClassName('player')
        p[0].children[2].innerHTML = players[0].points + ' points'
        p[1].children[2].innerHTML = players[1].points + ' points'
        document.getElementById('playAgain').classList.toggle('hide')
    }

    const turn = (number) => {
        grid[number] = counter % 2
        for (let i=0; i<3; i++) {
            if (grid[i] == grid[i+3] && grid[i] == grid[i+6]) {
                winner(grid[i]);
            }
        }
        if (grid[3] == grid[4] && grid[3] == grid[5]) {
            winner(grid[3]);
        }
        if (grid[0] == grid[1] && grid[0] == grid[2]) {
            winner(grid[0]);
        }
        if (grid[6] == grid[7] && grid[6] == grid[8]) {
            winner(grid[6]);
        }
        if (grid[0] == grid[4] && grid[0] == grid[8]) {
            winner(grid[0]);
        }
        if (grid[2] == grid[4] && grid[2] == grid[6]) {
            winner(grid[2]);
        }
    }

    return {initialize, addPlayer, clear}
})();

// O = 0, X = 1
let grid = [2,3,4,5,6,7,8,9,10]
gameBoard.initialize();
let counter = 1
document.getElementById('clear').addEventListener('click', gameBoard.clear)
document.getElementById('playAgain').addEventListener('click', gameBoard.clear)


