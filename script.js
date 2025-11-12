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
        "Cuello y Hombros": "Percibe el peso de tus hombros. ¿Están elevados?
