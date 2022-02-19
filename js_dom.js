// apply css style by js dom
function playersStyle(player){
    player.style.border = '2px solid green'
    player.style.padding = '20px'
    player.style.borderRadius = '20px'
    player.style.margin = '20px'
}

// select element by query selectors that is given nodelist
const players = document.querySelectorAll('#players .player')
for(const player of players){
    playersStyle(player)
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'green'
    // })
}


// add player by clicking button
function addItem(){
    const div = document.createElement('div')
    div.classList.add('player')
    div.innerHTML = `
    <h1>player-1</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum non reiciendis voluptates praesentium maxime iste laudantium iure corrupti atque repudiandae aspernatur, enim optio dolorum nemo molestias quod velit cupiditate officiis?</p>
`
    // div.addEventListener('click', function(){
    //     div.style.backgroundColor = 'green'
    // })
    playersStyle(div)
    document.getElementById('players').appendChild(div)
}

// target child by event bubble
document.getElementById('players').addEventListener('click', function(event){
    console.log(event.target.tagName.toLowerCase())
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow'
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})