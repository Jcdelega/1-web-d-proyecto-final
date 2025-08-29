import { Router } from 'express';
import { PilotAstronaut } from '../models/pilot-astronaut.model.js';

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
    const deletedPilotAstronaut = PilotAstronaut.findByIdAndDelete(req.params.id);
    res.json(deletedPilotAstronaut);
})

export default ROUTER;
