import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutos
  max: 5000, // número máximo de solicitudes permitidas en el intervalo de tiempo
});

export default limiter;
