function respawn (){

    const dessuLamp = document.getElementById('dessulamp')
    const barreLamp = document.getElementById('barrelamp')
    const cannaper = document.getElementById('cannap')
    const enfant = document.getElementById('enfant')
    const enseigne = document.getElementById('enseigne')
    const menus = document.getElementById('menus')
    const horloge = document.getElementById('num2')
    const conteur = document.getElementById('errorconteur')
    const progress = document.getElementById('progress');
    
    let score = 0;
    var scorepourcent;

    var cannapClick = true;
    var lanptopClick =true;
    var lempbarreClick =true;
    var enfantClick=true;
    var numClick=true;
    var enseigneClick=true;
    var menuClick=true;


    dessuLamp.addEventListener('click', () =>{
        if(lanptopClick==true){
         score ++;
         conteur.innerHTML = score;
          scorepourcent=score*14.2857142857;
         dessuLamp.style.opacity = 1;  
         lanptopClick=false;
         progress.style.width= scorepourcent+"%";
         progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    barreLamp.addEventListener('click', () =>{
        if(lempbarreClick==true){
            score ++;
            barreLamp.style.opacity = 1;
            conteur.innerHTML = score;
            lempbarreClick=false;
            scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    cannaper.addEventListener('click', () =>{
        
        if(cannapClick==true){
          cannaper.style.opacity = 1;  
          score ++;
          conteur.innerHTML = score;
          cannapClick=false;
          scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    enfant.addEventListener('click', () =>{
        if(enfantClick==true){
            score ++;
            enfant.style.opacity = 1;
            conteur.innerHTML = score;
            enfantClick=false;
            scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    enseigne.addEventListener('click', () =>{
        if(enseigneClick==true){
            score ++;
            enseigne.style.opacity = 1;
            conteur.innerHTML = score;
            enseigneClick=false;
            scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    menus.addEventListener('click', () =>{
        if(menuClick==true){
            score ++;
            menus.style.opacity = 1;
            conteur.innerHTML = score;  
            menuClick=false;
            scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
    horloge.addEventListener('click', () =>{
        if(numClick==true){
            score ++;
            horloge.style.opacity = 1;
            conteur.innerHTML = score;
            scorepourcent=score*14.2857142857;
            progress.style.width= scorepourcent+"%";
            progress.setAttribute('aria-valuenow',scorepourcent)
        }
    })
}
respawn();