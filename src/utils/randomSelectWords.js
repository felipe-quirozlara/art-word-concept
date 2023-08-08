export default function randomSelectWords(array, n) {
    const resultado = [];
    const copiaArray = [...array]; // Creamos una copia para no modificar el array original

    for (let i = 0; i < n; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        resultado.push(copiaArray.splice(indiceAleatorio, 1)[0]);
    }

    return resultado;
}