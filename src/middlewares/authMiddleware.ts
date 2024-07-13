import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

// Extender la interfaz Request para incluir la propiedad user
declare global {
  namespace Express {
    interface Request {
      user?: any; // Cambia `any` por un tipo más específico si es necesario
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user; // Almacenar el usuario en la solicitud
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

