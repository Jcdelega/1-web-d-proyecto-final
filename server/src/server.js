import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from 'dotenv';
import pilotAstronautRouter from './routes/pilot-astronaut.routes.js';
import authRoutes from './routes/auth.routes.js';
config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/pilot-astronaut', pilotAstronautRouter);
app.use('/api', authRoutes);

mongoose.connect(process.env.MONGO_KEY)
    .then( ()=>{
        console.log(`Connected to MongooseDB Cluster 0`)
    });

    app.listen(PORT, ()=>{
        console.log(`Server running on PORT=${PORT}`)
    });