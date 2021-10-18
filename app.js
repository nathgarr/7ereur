function respawn (){

    const dessuLamp = document.getElementById('dessulamp')
    const barreLamp = document.getElementById('barrelamp')
    const cannaper = document.getElementById('cannap')
    const enfant = document.getElementById('enfant')
    const enseigne = document.getElementById('enseigne')
    const menus = document.getElementById('menus')
    const horloge = document.getElementById('num2')
    const conteur = document.getElementById('errorconteur')
    
    let score = 0;

    dessuLamp.addEventListener('click', () =>{
        score ++;
        dessuLamp.style.opacity = 1;
        conteur.innerHTML = score;
        dessuLamp.setAttribute("disabled");
    })
    barreLamp.addEventListener('click', () =>{
        score ++;
        barreLamp.style.opacity = 1;
        conteur.innerHTML = score;
        barreLamp.setAttribute("disabled");
    })
    cannaper.addEventListener('click', () =>{
        score ++;
        cannaper.style.opacity = 1;
        conteur.innerHTML = score;
        cannaper.setAttribute("disabled");
    })
    enfant.addEventListener('click', () =>{
        score ++;
        enfant.style.opacity = 1;
        conteur.innerHTML = score;
        enfant.setAttribute("disabled");
    })
    enseigne.addEventListener('click', () =>{
        score ++;
        enseigne.style.opacity = 1;
        conteur.innerHTML = score;
        enseigne.setAttribute("disabled");
    })
    menus.addEventListener('click', () =>{
        score ++;
        menus.style.opacity = 1;
        conteur.innerHTML = score;
        menus.setAttribute("disabled");
    })
    horloge.addEventListener('click', () =>{
        score ++;
        horloge.style.opacity = 1;
        conteur.innerHTML = score;
        horloge.setAttribute("disabled");
    })
}
respawn();