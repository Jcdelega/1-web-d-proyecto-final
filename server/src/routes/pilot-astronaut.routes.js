import { Router } from 'express';
import  PilotAstronaut  from '../models/pilot-astronaut.model.js';

const ROUTER = Router();
 
ROUTER.post('/', async(req, res)=>{
    const newPilotAstronaut = new PilotAstronaut(req.body);
    await newPilotAstronaut.save();
    res.json(newPilotAstronaut);
});

ROUTER.get('/', async(req, res)=>{
    const pilotAstronauts = await PilotAstronaut.find();
    res.json(pilotAstronauts);
})

ROUTER.put('/:id', async(req,res)=>{
    const updatedPilotAstronaut = await PilotAstronaut.findByIdAndUpdate(req.params.id, req.body,{ new:true });
    res.json(updatedPilotAstronaut);
})

ROUTER.delete('/:id', async(req,res)=>{
    const deletedPilotAstronaut = await PilotAstronaut.findByIdAndDelete(req.params.id);
    res.json(`Log with ID: ${req.params.id}, Pilot Call Sign: ${deletedPilotAstronaut.PilotCallSign}\n deleted successfully`);
})

export default ROUTER;
