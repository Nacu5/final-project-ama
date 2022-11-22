import { Request, Response, NextFunction } from 'express';
import connection from '../services/database';

interface User {
  id: Number;
  nume: String;
  prenume: String;
  oras: String;
  telefon: String;
  profesie: string
}

// getting all users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  await connection.query(`select * from amaProject.specialisti`, (err: any, result: User, fields: any) =>{
    if(result){
      return res.status(200).json({
        data: result
      });
    }
  })
};

export default { getUsers };