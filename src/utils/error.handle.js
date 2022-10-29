"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error) => {
    if (res.status(500)) {
        res.send({ error } + "Error en el backend ");
    }
    if (res.status(404)) {
        
        res.send({ error } + "Búsquedas sin resultados. ");
    }
    if (res.status(400)) {
        
        res.send({ error } + "Búsquedas sin resultados. ");
    }
};
exports.handleHttp = handleHttp;
