import { Request, Response, NextFunction } from 'express';
import connection from '../services/database';

interface Specialist {
  id: Number;
  nume: String;
  prenume: String;
  oras: String;
  telefon: String;
  profesie: String
}

// getting all specialisti
const getSpecialisti = async (req: Request, res: Response, next: NextFunction) => {
  await connection.query(`select * from amaProject.specialisti`, (err: any, result: Specialist, fields: any) =>{
    if(result){
      return res.status(200).json({
        data: result
      });
    }
  })
};

export default { getSpecialisti };