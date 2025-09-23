import pilotAstronautModel from '../models/pilot-astronaut.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { PilotCallSign, DigitalCommunication, Password, MissionDesignation, PilotID, SpaceAgency } = req.body

    try {

        const passwordHash = await bcrypt.hash(Password, 10)

        const newPilotAstronaut = new pilotAstronautModel({
            PilotCallSign,
            DigitalCommunication,
            Password: passwordHash,
            MissionDesignation,
            PilotID,
            SpaceAgency
        })

        const pilotAstronautSaved = await newPilotAstronaut.save();
        
        jwt.sign(
          {
            id: pilotAstronautSaved._id,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: '1d',
          },
          (err, token) => {
            if (err) console.log(err);
            res.cookie('token', token);
            res.json({
                id: pilotAstronautSaved._id,
                PilotCallSign: pilotAstronautSaved.PilotCallSign,
                DigitalCommunication: pilotAstronautSaved.DigitalCommunication,
                MissionDesignation: pilotAstronautSaved.MissionDesignation,
                PilotID: pilotAstronautSaved.PilotID,
                SpaceAgency: pilotAstronautSaved.SpaceAgency,
                createdAt: pilotAstronautSaved.createdAt,
                updatedAt: pilotAstronautSaved.updatedAt,
            })
          }
        );
        

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {

  const { DigitalCommunication, Password } = req.body

  try {

    const userFound = await pilotAstronautModel.findOne({ DigitalCommunication })
    if (!userFound) return res.status(400).json({ message: "User not found" })

    const isMatch = await bcrypt.compare(Password, userFound.Password)
    if (!isMatch) return res.status(400).json({ message: "Unable to validate, check your credentials" })

    jwt.sign({
      id: userFound._id
    },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) console.log(err)
        res.cookie('token', token)

        res.json({
          id: userFound._id,
          PilotCallSign: userFound.PilotCallSign,
          DigitalCommunication: userFound.DigitalCommunication,
          createdAt: userFound.createdAt,
          updatedAt: userFound.updatedAt,
        })
      }
    )

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const session = async (req, res) => {

  const pilotAstonautFound = await pilotAstronautModel.findById(req.pilotAstronaut.id)

  if (!pilotAstonautFound) return res.status(400).json({ message: 'Pilot or Astronaut not found' })

  return res.json({
    id: pilotAstonautFound._id,
    PilotCallSign: pilotAstonautFound.PilotCallSign,
    DigitalCommunication: pilotAstonautFound.DigitalCommunication,
    createdAt: pilotAstonautFound.createdAt,
    updatedAt: pilotAstonautFound.updatedAt,
  })
}
