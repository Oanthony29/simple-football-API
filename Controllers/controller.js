import express from "express";
import { where } from "sequelize";
import teams from "../Models/models.js";

export const allRecord = async(req, res)=>{
    try{
        const record = await teams.findAll();
            res.status(200).json({
                message: "All TEAMS RECORD",
                data:record
            })
    }catch(e){
        res.status(400).json({
            message: e.message
        })
    }
}

export const oneRecord = async(req, res)=>{
    try{
        const id = req.params.id
        const singleRecord = await teams.findAll({where:{id: id}})
        if(singleRecord === 0) {
            res.status(404).json({
                message: `No such id: ${id}`
            })
        }else{
            res.status(200).json({
                message: "For a particular record.",
                data: singleRecord
            })
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}

export const newRecord = async (req, res)=>{
    try{
        const create = await teams.create(req.body)
        res.status(200).json({
            message: "Sucessfully created.",
            data: create
        })
    }catch(e){
        res.status(500).json({

        })
    }
}

export const updateRecord = async (req, res)=>{
    try{
        const id = req.params.id;
        let body = req.body.numberOfPlayers
        const team = await teams.update(req.body, {where:{id: id}})
        if(team[0] === 1 && body>=22 && body <=25){
            res.status(200).json({
                message: 'sucessfully updated.',
                data: team
            })
        }else{
            res.status(404).json({
                message: "No such id found or the numbers of players added is lower or higher than the required value. "
            })
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}

export const deleteRecord = async(req, res)=>{
    try{
        const id = req.params.id
        const remove = await teams.destroy({where: {id: id}})
        if(remove === 0){
            res.status(404).json({
                message: `No such id: ${id}`
            })
        }else{
            res.status(200).json({
                message: 'record deleted.',
                data: remove
            })
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}