var quizz = {
    titulo: "AdivinaLaCancion",
    preguntas: [
        {
            letra: "Letra: Can I go where you go? Can we always be this close, forever and ever?",
            respuestas: ["Lover", "Cruel Summer", "Blank Space", "Love Story"],
            correcta: 0 // La respuesta correcta está en el índice 1 
        },
        {
            letra: "Letra: I'm drunk in the back of the car, And I cried like a baby coming home from the bar",
            respuestas: ["Shake It Off", "Cruel Summer", "Style", "Lover"],
            correcta: 1 
        },
        {
            letra: "Letra: Did you think we'd be fine? Still got scars on my back from your knife",
            respuestas: ["Love Story", "Enchanted", "Bad Blood", "Shake It Off"],
            correcta: 2 
        }, 
        {
            letra: "Letra: Ocean blue eyes looking in mine, I feel like I might sink and drown and die",
            respuestas: ["Karma", "Gorgeous", "Style", "Back to December"],
            correcta: 1 
        },
        {
            letra: "Letra: I miss your tan skin, your sweet smile, so good to me, so right, And how you held me in your arms that September night",
            respuestas: ["Daylight", "Karma", "Enchanted", "Back to December"],
            correcta: 3
        },
        {
            letra: "Letra: I don't wanna look at anything else now that I saw you,I don't wanna think of anything else now that I thought of you",
            respuestas: ["Cruel Summer", "Style", "Lover", "Daylight"],
            correcta: 3
        },
        {
            letra: "Letra: Kiss you once 'cause I know you had a long night, Kiss you twice 'cause it's gonna be alright",
            respuestas: ["...Ready For It?", "Back to December", "Shake It Off", "Lover"],
            correcta: 0
        },
        {
            letra: "Letra: I know I tend to make it about me, I know you never get just what you see",
            respuestas: ["Shake It Off", "ME!", "Lover", "Style"],
            correcta: 1
        },
        {
            letra: "Letra: Cause there we are again in the middle of the night, We're dancing 'round the kitchen in the refrigerator light",
            respuestas: ["All Too Well", "Back to December", "...Ready For It?", "Karma"],
            correcta: 0
        },
        {
            letra: "Letra: This night is sparkling, don't you let it go, I'm wonderstruck, blushing all the way home",
            respuestas: ["Enchanted", "All Too Well", "Karma", "Blank Space"],
            correcta: 0
        },
        {
            letra: "Letra: Please don't be in love with someone else, Please don't have somebody waiting on you",
            respuestas: ["All Too Well", "Karma", "Enchanted", "Blank Space"],
            correcta: 2
        },
    ]
};
var numeroRandom;
var puntaje = 0;

function mostrarPopup() {
    document.getElementById('popupMensaje').textContent = "PUNTAJE: "+puntaje;
    document.getElementById('miPopup').style.display = 'block';
  }


function tiempoTerminado() {
    console.log("muerto")
    mostrarPopup();
}

function volverAMenu() {
    window.location.href = "inicio.html";
}

function volverAJugar() {
    window.location.reload();
}

function iniciarTimer() {
    let tiempoRestante = 10; // Tiempo en segundos
    timer = setInterval(function() {
        tiempoRestante--;
        document.getElementById('miBarra').value = (tiempoRestante / 10) * 100; // Actualiza la barra de progreso
        if (tiempoRestante <= 0) {
            tiempoTerminado();
            clearInterval(timer);
        }
    }, 1000); // Actualiza cada segundo (1000 milisegundos)
}


function cancelarTimer() {
    clearTimeout(timer);
}

window.onload = function() {
    mostrarPregunta()
};

function mostrarPregunta() {
    iniciarTimer();
    numeroRandom = Math.floor(Math.random() * 10);
    document.getElementById("letraTXT").innerHTML = quizz.preguntas[numeroRandom].letra
    document.getElementById("preguntaTXT1").innerHTML = quizz.preguntas[numeroRandom].respuestas[0]
    document.getElementById("preguntaTXT2").innerHTML = quizz.preguntas[numeroRandom].respuestas[1]
    document.getElementById("preguntaTXT3").innerHTML = quizz.preguntas[numeroRandom].respuestas[2]
    document.getElementById("preguntaTXT4").innerHTML = quizz.preguntas[numeroRandom].respuestas[3]
}

function respuestaClick(id) {
    if (document.getElementById(id).textContent==quizz.preguntas[numeroRandom].respuestas[quizz.preguntas[numeroRandom].correcta]) {
        cancelarTimer();
        document.getElementById("preguntaTXT1").style.backgroundColor = "green";
        document.getElementById("preguntaTXT2").style.backgroundColor = "green";
        document.getElementById("preguntaTXT3").style.backgroundColor = "green";
        document.getElementById("preguntaTXT4").style.backgroundColor = "green";
        setTimeout(() => {
            document.getElementById("preguntaTXT1").style.backgroundColor = "rgb(245, 242, 49)";
            document.getElementById("preguntaTXT2").style.backgroundColor = "rgb(49, 183, 245)";
            document.getElementById("preguntaTXT3").style.backgroundColor = "rgb(245, 49, 196)";
            document.getElementById("preguntaTXT4").style.backgroundColor = "rgb(233, 105, 0)";
        }, 300);


        setTimeout(() => {
            puntaje= puntaje+1;
            document.getElementById("puntaje").innerHTML = puntaje;
            mostrarPregunta();
        }, 400);


    }else{
        cancelarTimer();
        document.getElementById("preguntaTXT1").style.backgroundColor = "red";
        document.getElementById("preguntaTXT2").style.backgroundColor = "red";
        document.getElementById("preguntaTXT3").style.backgroundColor = "red";
        document.getElementById("preguntaTXT4").style.backgroundColor = "red";
        setTimeout(() => {
            document.getElementById("preguntaTXT1").style.backgroundColor = "rgb(245, 242, 49)";
            document.getElementById("preguntaTXT2").style.backgroundColor = "rgb(49, 183, 245)";
            document.getElementById("preguntaTXT3").style.backgroundColor = "rgb(245, 49, 196)";
            document.getElementById("preguntaTXT4").style.backgroundColor = "rgb(233, 105, 0)";
        }, 300);
        setTimeout(() => {
            tiempoTerminado();            
        }, 400);

    }
}