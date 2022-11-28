import { Request, Response, NextFunction, query } from 'express';
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
  const query=`select * from specialisti.notari where locatia='${req.query.locatia}'`;
  await connection.query(query, (err: any, result: Specialist, fields: any) =>{
    console.log (err)
    if(result){
      return res.status(200).json({
        data: result
      });
    }
  });
};


const getExecutori = async (req: Request, res: Response, next: NextFunction) => {
  const query=`select * from specialisti.executori where locatia='${req.query.locatia}'`;
  await connection.query(query, (err: any, result: Specialist, fields: any) =>{
    console.log (err)
    if(result){
      return res.status(200).json({
        data: result
      });
    }
  });
};

export default { getSpecialisti, getExecutori };