const { BSONSymbol, BSONType } = require('mongodb');
const RRSchema = require('./models');

const postSchedule = async (req, res, err) =>{
    const body= req.body;
    const data = await RRSchema.create({quantum: body.quantum, $push: {documents:{$each: body.documents}}}, (err,res)=>{
        if(err){
            return console.log({error:err })
        }
        else{
            console.log("Data Posted Successfully");
        }
    });
}
module.exports = {postSchedule};

const getAllSchedules = async(req, res)=>{
    const id = req.body;
    const data = await RRSchema.findById(id);
}