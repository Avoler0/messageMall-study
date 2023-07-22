import express, { Express, Request, Response } from 'express';
import http from 'http'
import app from './app';




const server = http.createServer(app);
const port = 5000;

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});