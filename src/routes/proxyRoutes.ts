import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { getJSONData } from '../functions/readJson';
import path from 'path';
import rateLimitServicesMiddleware from '../middlewares/rateLimitServices';

const router = express.Router();



const filePath = path.join(__dirname, 'servicesProxy.json');
const services = getJSONData(filePath);

services.forEach(service => {
  const { prefix, target , ws  } = service;
  const proxyOptions:any  = {
    target,
    changeOrigin: true,
    onProxyRes() {
      console.log(`RESPONSE --> ${service.service.toUpperCase()} ** URL Services: ${service.target}`);
    },
  };

  // Si es WebSocket, agregar configuración adicional
  if (ws) {
    proxyOptions.ws = true;
    proxyOptions.onProxyReqWs = () => {
      console.log(`WebSocket connection for ${service.service.toUpperCase()} ** URL Services: ${service.target}`);
    }
  }

  // Crear el proxy con las opciones
  const apiProxy = createProxyMiddleware(prefix, proxyOptions);

  // Usar el middleware del límite de velocidad y el proxy
  router.use(prefix, rateLimitServicesMiddleware, apiProxy);

});

export default router;
