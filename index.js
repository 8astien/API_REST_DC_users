import 'dotenv/config.js';
import express from 'express';
import userRoutes from './routes/UserRoutes.js';

const app = express();
const port = process.env.PORT;

// Utilise les routes des utilisateurs
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
