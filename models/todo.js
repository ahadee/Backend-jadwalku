const Sequelize = require("sequelize")
const {db} = require("../config")

const Todos = db.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    todo: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = Todos