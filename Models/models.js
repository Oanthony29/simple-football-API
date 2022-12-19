import  Sequelize from "sequelize";
import db from "../Config/dbConfig.js";

const {DataTypes}= Sequelize
const teams = db.define("TeamsInfo",{
    nameOfTeam: {
        type: DataTypes.STRING
    },
    homeKitColor: {
        type: DataTypes.STRING
    },
    awayKitColor: {
        type: DataTypes.STRING
    },
    numberOfPlayers: {
        type: DataTypes.DOUBLE
    },
    playerFirstName: {
        type: DataTypes.STRING
    }, 
    playerLastName: {
        type: DataTypes.STRING
    },
    playerAge: {
        type: DataTypes.DOUBLE
    },
    playerCountry: {
        type:DataTypes.STRING
    },
    playerJerseyNumber: {
        type: DataTypes.DOUBLE
    },
    playerSigningfee: {
        type: DataTypes.DOUBLE
    },
    clubOwnerName: {
        type:DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default teams;