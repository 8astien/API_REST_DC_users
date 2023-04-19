import 'dotenv/config.js';
import express from 'express';
import UserRoutes from './routes/UserRoutes.js';
import TeamRoutes from './routes/TeamRoutes.js'

const app = express();
const port = process.env.PORT;

// ROUTING
app.use('/api/user', UserRoutes);
app.use('/api/team', TeamRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
