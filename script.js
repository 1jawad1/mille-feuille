let pages = document.querySelectorAll(".page")
let slides = document.querySelector(".slides")

pagesNumber = {
    "Introduction": 0,
    "Historia": 1,
    "Ingredientes" : 2,
    "Material" : 3,
    "Etapas" : 4,
    "Fin" : 5
}

// séléction de la page => changement de la couleur du bouton + scroll

pages.forEach(element=>{
    element.addEventListener("click", ()=>{
        pages.forEach(elemente1=>{
        elemente1.style.backgroundColor = "transparent"
        elemente1.style.color = "white"

        })
        element.style.backgroundColor = "#ecdeabd9"
        element.style.color = "#543514"
        move(slides, pagesNumber[element.innerHTML], -(100/6))
    })
})





function move(div, proportion, step){
    div.style.transform = `translateX(${step*proportion}%)`

}


// ----------------------------------------------------------------------------------

const video = document.querySelector(".video")
currenttimeout = null
étape = 0

étapes = {

    0 : {
        instruction: "Tenéis el material y los ingredientes ? Ahora, vamos a guiaros para las etapas de la preparación.",
        debut: 0,
        fin: 5
    },
    1 : {
        instruction: "- Primero,verter el leche en la cazuela, añadir los granos de la vaina de vainilla, y la mitad del azúcar. <br><br> - Poner la cazuela en el fuego.",
        debut: 5,
        fin: 12
    },
    2 : {
        instruction: "- Introducir el huevo en un bol <br><br>- Batir el huevo para blanquearlo y añadir poco a poco los tres gramos restantes de azúcar.",
        debut: 12,
        fin: 19
    },
    3 : {
        instruction: "- Añadir la maizena y mezclarla con el huevo y el azúcar.<br><br>- Cuando el leche esta hervido, verter una parte del leche en el bol, mezclando todo.",
        debut: 19,
        fin: 26
    },
    4 : {
        instruction: "- Servir la mezcla en la cazuela y ponerla en el fuego durante cinco minutos, mezclando todo sin parar.<br><br>- Cubrir con el filmo el pato y verter la crema pastelera para enfriarla.<br><br>- Poner la crema en el congelador durante veinte minutos",
        debut: 26,
        fin: 39.6
    },
    5 : {
        instruction: "- Pre-calentar el horno a ciento ochenta grados.<br><br>- Extender el hojaldre en una bandeja suficientemente grande.<br><br>- Picar el hojaldre y cubrirlo con papel de horno.<br><br>- Hornear durante treinta minutos a ciento ochenta grados.",
        debut: 40,
        fin: 55
    },
    6 : {
        instruction: "- Batir la mantequilla hasta obtener la misma textura que una pomada.<br><br>- Servir la crema en la batidora amasadora.<br><br>- Batir la crema para alisarla<br><br>- Anadir la mantequilla poquito a poquito y mezclar.",
        debut: 55,
        fin: 61.8
    },
    7 : {
        instruction: "- Retirar el hojaldre del horno y cortarlo en tres capas superpuestas.<br><br>- Dejarlo enfriarse<br><br>- Montar la crema pastelera sobre la primera capa de hojaldre.",
        debut: 61.8,
        fin: 67.4
    },
    8 : {
        instruction: "- Hacer lo mismo sobre la secunda capa de hojaldre.<br><br>- Poner la ultima capa de hojaldre.<br><br>- Apoyar delicadamente.",
        debut: 67.5,
        fin: 74.5
    },
    9 : {
        instruction: "- Derretir el “fondant” y el chocolate negro.<br><br>- Extender el fondant sobre la tercera capa.<br><br>- Anadir el chocolate y decorar con la punta de un cochillo o con un otro utensilio.",
        debut: 74.6,
        fin: 85
    }

}



function step(sentence, debut, fin){

    clearTimeout(currenttimeout)
    

    document.querySelector(".description").innerHTML = sentence
    video.currentTime = debut;
    video.play()

    title = document.querySelector(".netape")
    title.innerHTML = étape

    
    currenttimeout = setTimeout(()=>{
        video.pause()
    },(fin-debut)*1000)
}

document.querySelector(".last").addEventListener("click", ()=>{

    if(étape > 0){
        étape -= 1
    }else{
        étape = 9
    }
    step(étapes[étape]["instruction"], étapes[étape]["debut"], étapes[étape]["fin"])
})

document.querySelector(".next").addEventListener("click", ()=>{

    if(étape < 9){
        étape += 1
    }else{
        étape = 0
    }
    step(étapes[étape]["instruction"], étapes[étape]["debut"], étapes[étape]["fin"])
})