/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import express from 'express';


const server = express();

server.get('/', (req, res) => {
    return res.send('Olá, DEV!');
});


export { server };