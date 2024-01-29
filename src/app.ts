import express from 'express';
import morganMiddleware from './middlewares/morgan';
import compressionMiddleware from './middlewares/compression';
import proxyRoutes from './routes/proxyRoutes';


const app = express();

// Middleware Morgan para el registro de solicitudes
app.use(morganMiddleware);

// Middleware Compression para la compresión de respuestas
app.use(compressionMiddleware);

// Rutas para redireccionar a los servicios de destino
app.use(proxyRoutes);

// Ruta predeterminada para cualquier otra URL no definida
app.get('*', (req, res) => {
  res.send('404 - Ruta no encontrada');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000');
});
