const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
   // Obtén el token del header de la petición
   const authHeader = req.headers['authorization']
   // console.log(authHeader)
   const token = authHeader && authHeader.split(' ')[1]
   // console.log(token)

   // Verifica que el token sea válido
   if (token == null) return res.sendStatus(401)
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      // console.log('llegue a next')
      console.log(user)
      next()
   })
}

module.exports = authenticateToken