import { Request, Response } from 'express';
const{ authentication, random } = require("../helpers");
const { createUser, getUserByEmail, getUserBySessionToken, getUserById, deleteUserById } = require("../models/user");

const express=require('express');

export const register=async (req:Request,res:Response)=>{
    try{
        const {email,password,username}=req.body;
        if(!email || !password || !username){
            return res.sendStatus(400);
        }

        const existingUser=await getUserByEmail(email);
        if(existingUser){
            return res.sendStatus(400);
        }

        const salt=random();
        const user=await createUser({
            email,
            userName:username,
            authentication:{
                salt,
                password:await authentication(password,salt),
            }
        })

        return res.status(201).json(user).end();
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}