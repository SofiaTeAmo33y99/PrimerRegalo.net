/*
 * SCRIPT.JS para UN ESPACIO DE CALMA
 *
 * Este script controla la animación de respiración guiada (4-6),
 * el Escaneo Corporal Interactivo y los Mensajes de Amor.
 */

// Espera a que todo el contenido de la página (HTML) se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Animación de Respiración Guiada ---
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');

    const inhaleTime = 4000; // 4 segundos
    const exhaleTime = 6000; // 6 segundos

    const inhaleColor = '#a8d8c9'; // Verde menta
    const exhaleColor = '#d0eaf0'; // Azul pálido

    function breatheCycle() {
        text.textContent = 'Inhala... (4s)';
        circle.style.transform = 'scale(1.25)';
        circle.style.backgroundColor = inhaleColor;
        circle.style.transitionDuration = `${inhaleTime / 1000}s`;

        setTimeout(() => {
            text.textContent = 'Exhala... (6s)';
            circle.style.transform = 'scale(1)';
            circle.style.backgroundColor = exhaleColor;
            circle.style.transitionDuration = `${exhaleTime / 1000}s`;
            
            // Llama a la función de nuevo después de la exhalación
            setTimeout(breatheCycle, exhaleTime); 
        }, inhaleTime);
    }

    breatheCycle();

    // --- Escaneo Corporal Interactivo ---
    const bodyParts = document.querySelectorAll('.body-scan-svg path');
    const scanInstructions = document.getElementById('scan-instructions');

    const instructionsMap = {
        "Cabeza y Rostro": "Siente la frente, la mandíbula, los ojos. ¿Hay tensión? Relaja. Dirige tu respiración a esta zona.",
        "Cuello y Hombros": "Percibe el peso de tus hombros. ¿Están elevados? Déjalos caer. Suelta el cuello. Suelta la tensión.",
        "Pecho y Espalda Superior": "Nota tu respiración. ¿Es profunda? ¿Hay presión? Observa el movimiento de tu pecho. Respira hondo.",
        "Brazo Izquierdo": "Siente tu brazo izquierdo, desde el hombro hasta los dedos. ¿Alguna sensación? Solo obsérvala. ",
        "Brazo Derecho": "Siente tu brazo derecho, desde el hombro hasta los dedos. ¿Alguna sensación? Solo obsérvala.",
        "Abdomen y Espalda Baja": "Dirige tu respiración al abdomen. Siente cómo se expande al inhalar y se contrae al exhalar. Conéctate con tu centro.",
        "Cadera y Glúteos": "Conecta con tu base. Siente el asiento bajo tus glúteos. Permite que cualquier tensión se libere. Sujeta tu peso.",
        "Piernas y Rodillas": "Siente tus piernas y rodillas. ¿Peso, calor, hormigueo? Envía tu respiración a esa zona.",
        "Pantorrillas y Pies": "Observa tus pantorrillas y tus pies, la conexión con el suelo. ¿Descansan suavemente? Relaja."
    };

    bodyParts.forEach(part => {
        part.addEventListener('click', function() {
            // Remueve la clase 'active' de todas las partes
            bodyParts.forEach(p => p.classList.remove('active'));
            
            // Añade la clase 'active' a la parte clickeada
            this.classList.add('active');
            
            // Muestra la instrucción correspondiente
            const label = this.getAttribute('data-label');
            scanInstructions.textContent = instructionsMap[label] || "Dirige tu atención a esta zona del cuerpo. Observa sin juzgar.";
        });
    });

    // --- Mensajes de Amor Cambiantes ---
    const loveMessages = [
        "TE QUIERO mucho no lo olvides",
        "Te adoro preciosa la más linda sos",
        "SOS super inteligente no dudes de eso",
        "NUNCA te voy a dejar sola",
        "SOS mi persona favorita",
        "Te Amo te amo te amo",
        "Te re compre dale deci k si",
        "TE ADORO DIOSSSS",
        "SOS PERFECTAAAA",
        "UNICA Y HERMOSA",
        "DIOS K HERMOSA",
        "Ya se acabaron segui",
        "AH te la creíste sigue",
        "Te amo",
        "Ya se acabaron encerio",
        "Mmm sigue",
        "¿Todavía?",
        "Porque te reis?",
        "SI YO TAMB TE AMO",
        "Ya acabo ahora si",
        "Posta gorda ya termino",
        "¿Seguis acá?",
        "...",
        "...",
        "Seguía aca",
        "Ahora si termino."
    ];

    const messageDisplay = document.getElementById('love-message-display');
    let messageIndex = 0;
    const intervalTime = 3000; // Cambia cada 3 segundos

    function displayNextMessage() {
        // Animación de salida (opacidad y escala)
        messageDisplay.style.opacity = '0';
        messageDisplay.style.transform = 'scale(0.9)';

        setTimeout(() => {
            // Cambia el texto
            messageDisplay.textContent = loveMessages[messageIndex];
            messageIndex = (messageIndex + 1) % loveMessages.length; // Ciclo

            // Animación de entrada
            messageDisplay.style.opacity = '1';
            messageDisplay.style.transform = 'scale(1)';
        }, 300); // Espera a que la animación de salida termine
    }

    // Inicia el bucle de mensajes
    displayNextMessage(); // Muestra el primer mensaje inmediatamente
    setInterval(displayNextMessage, intervalTime);

});
