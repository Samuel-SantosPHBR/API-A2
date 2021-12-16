import { Router } from "express";
import { loginUserController } from "../useCase/LoginUser";
import { createUserController } from "./../useCase/CreateUser/index"

const router = Router();

router.post('/user/create',async (req,res) => await createUserController.handle(req,res));
router.post('/user/login',async (req,res) => await loginUserController.handle(req,res));
router.get('/user',async (req,res) => res.json({data: process.env.HASH_JWT}));

export default router;