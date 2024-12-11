import express from 'express';
import routes from './routes/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.config.js'; // Swagger konfigürasyonu

const app = express();

// Global users array
const users = []; // Global olarak erişilebilir

// JSON isteği desteği
app.use(express.json());

// Swagger API Dokümantasyonu
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotaları bağla
app.use('/api', routes);

// Sunucu çalıştır
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger Docs: http://localhost:3000/api-docs`);
});