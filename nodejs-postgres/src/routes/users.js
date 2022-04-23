import { Router } from "express";
import {getQuery, insertQuery } from "../services/userQuery";

const router = Router();

router.post('/_get',(req,res)=>{
    // console.log("check: ",req.query)
    getQuery(req,res);
});

router.post('/_insert', (req, res)=> {
    // console.log("check: ",req.body)
    insertQuery(req,res);
});


export default router;