import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next) => {

  const { token } = req.cookies

  if(!token) return res.status(401).json({message: "Authorization denied"})
  
  jwt.verify(token, process.env.SECRET_KEY, (err, pilotAstronaut)=> {
    if(err) return res.status(403).json({message: "Invalid Token"})
      req.pilotAstronaut= pilotAstronaut
  })

  next()

}