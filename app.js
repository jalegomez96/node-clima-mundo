const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad pa obtener el clima',
        demand: true
    }
}).argv;


getInfo = async(direccion) => {
    try {
        let ubicacion = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(ubicacion);
        return `La temperatura en ${ubicacion.direccion} es de ${temp} C`;
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         clima.getClima(resp)
//             .then(resp => console.log(resp))
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));