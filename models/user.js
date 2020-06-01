const Sequelize = require("sequelize")
const {db} = require("../config")

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    role: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
})

module.exports = User