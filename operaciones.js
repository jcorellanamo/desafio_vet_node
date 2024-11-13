const fs = require('fs');

// Ruta del JSON
const archivo = './citas.json';

// Función registrar
function registrar(nombre, edad, tipo, color, enfermedad) {

    const citas = JSON.parse(fs.readFileSync(archivo, 'utf-8'));

    // Crear cita
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    // Agregar
    citas.push(nuevaCita);

    // Guardar
    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2), 'utf-8');
    console.log("Cita registrada exitosamente.");
}

// Función leer
function leer() {

    const citas = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    console.log("Citas registradas:");
    console.log(citas);
}

// Exportar fn
module.exports = { registrar, leer };
