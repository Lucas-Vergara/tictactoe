
//factories 
const Player = (name) => {
    const getName = () => name;
    let points = 0;
    let figure = 2
    return {getName, points, figure}
}

const players = [];

const addPlayer = () => {
    if (players.length < 2) {
        name = prompt('Enter player name: ');
        let player = Player(name);
        players.push(player);
        gameBoard.addPlayer();
    } else {
        alert('Maximum numbers of players is 2')
    }
    if (players.length == 1) {
        document.getElementById('goesFirst').innerHTML = players[0].getName() + ' goes first'
    }
}

const changeFigure = () => {
    let div = document.getElementById('players')
    if (div.children[0].children[0].classList[0] == 'circleSpan') {
        // O = 0, X = 1
        players[0].figure = 1
        players[1].figure = 0
        div.children[0].children[0].classList.add('crossSpan')
        div.children[0].children[0].classList.remove('circleSpan')
        div.children[1].children[0].classList.add('circleSpan')
        div.children[1].children[0].classList.remove('crossSpan')
    } else {
        // O = 0, X = 1
        players[0].figure = 0
        players[1].figure = 1
        div.children[0].children[0].classList.add('circleSpan')
        div.children[0].children[0].classList.remove('crossSpan')
        div.children[1].children[0].classList.add('crossSpan')
        div.children[1].children[0].classList.remove('circleSpan')
    }
    counter += 1   
}


document.getElementById('addPlayer').addEventListener('click', addPlayer)
document.getElementById('changeFigure').addEventListener('click', changeFigure)