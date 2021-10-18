
function respawn (){

    const dessuLamp = document.getElementById('dessulamp')
    const barreLamp = document.getElementById('barrelamp')
    const cannaper = document.getElementById('cannap')
    const enfant = document.getElementById('enfant')
    const enseigne = document.getElementById('enseigne')
    const menus = document.getElementById('menus')
    const horloge = document.getElementById('num2')
    
    dessuLamp.addEventListener('click', () =>{
        dessuLamp.style.opacity = 1
    })
    barreLamp.addEventListener('click', () =>{
        barreLamp.style.opacity = 1
    })
    cannaper.addEventListener('click', () =>{
        cannaper.style.opacity = 1
    })
    enfant.addEventListener('click', () =>{
        enfant.style.opacity = 1
    })
    enseigne.addEventListener('click', () =>{
        enseigne.style.opacity = 1
    })
    menus.addEventListener('click', () =>{
        menus.style.opacity = 1
    })
    horloge.addEventListener('click', () =>{
        horloge.style.opacity = 1
    })
}
respawn();