const axios = require('axios');

const getClima = async(lugar) => {
    // let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lng}&units=metric&appid=2278fbeedbb8c2dd01535844b438a77c`)
    if (resp.data.code === 400) {
        throw new Error(`No hay resultados para la ciudad ${lugar.direccion}`)
    }

    let temperatura = resp.data.main.temp;
    return temperatura;
}

module.exports = {
    getClima
}