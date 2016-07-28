import sdm530 from './index'
import * as async from "async";


sdm530({ tz: 'Europe/Rome', uid: 'rrerrrr', dev: '/dev/ttyUSB0', address: 1, baud: 9600, type: 'import' }).then(function (a) {
    console.log(a)
}).catch(function (a) {
    console.warn(a)
})