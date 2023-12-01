var quizz = {
    titulo: "AdivinaLaCancion",
    preguntas: [
        {
            letra: "Letra: Cause the players gonna play, play, play, play, play,And the haters gonna hate, hate, hate, hate, hate",
            respuestas: ["Lover", "Shake It Off", "Blank Space", "Love Story"],
            correcta: 1 // La respuesta correcta está en el índice 1 
        },
        {
            letra: "Letra: Oh, my God, look at that face,You look like my next mistake",
            respuestas: ["Shake It Off", "Cruel Summer", "Lover", "Blank Space"],
            correcta: 3 
        },
        {
            letra: "Letra: Cause baby, now we got bad blood,You know it used to be mad love",
            respuestas: ["Love Story", "Enchanted", "Bad Blood", "Bad Blood"],
            correcta: 3
        }, 
        {
            letra: "Letra: Oh, I remember you driving to my house,In the middle of the night",
            respuestas: ["Karma", "Gorgeous", "Style", "Back to December"],
            correcta: 1 
        },
        {
            letra: "Letra: I miss your tan skin, your sweet smile, so good to me, so right, And how you held me in your arms that September night",
            respuestas: ["Daylight", "You Belong With Me", "Enchanted", "Back to December"],
            correcta: 1
        },
        {
            letra: "Letra: I don't trust nobody and nobody trusts me,I'll be the actress starring in your bad dreams",
            respuestas: ["Look What You Made Me Do", "Style", "Lover", "Daylight"],
            correcta: 0
        },
        {
            letra: "Letra: Say you'll remember me,Standing in a nice dress,Staring at the sunset, babe",
            respuestas: ["...Ready For It?", "Back to December", "Shake It Off", "Wildest Dreams"],
            correcta: 3
        },
        {
            letra: "Letra: You got that James Dean daydream look in your eye,And I got that red lip classic thing that you like",
            respuestas: ["Shake It Off", "ME!", "Style", "ME!"],
            correcta: 2
        },
        {
            letra: "Letra: I remember when we broke up, the first timeSaying: This is it, I’ve had enough! ‘Cause, like",
            respuestas: ["All Too Well", "We Are Never Ever Getting Back Together", "...Ready For It?", "Karma"],
            correcta: 1
        },
        {
            letra: "Letra: I don't wanna live forever, 'cause I know I'll be living in vain,And I don't wanna fit wherever",
            respuestas: ["I Don't Wanna Live Forever", "All Too Well", "Karma", "Blank Space"],
            correcta: 0
        },
        {
            letra: "Letra: Romeo, take me somewhere we can be alone,I'll be waiting, all there's left to do is run",
            respuestas: ["All Too Well", "Karma", "Enchanted", "Love Story"],
            correcta: 3
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