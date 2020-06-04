const Sequelize = require("sequelize")
const {db} = require("../config")

const Todos = db.define('list_todos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    deadline: {
        type: Sequelize.DATE,
        allowNull: false,   
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = Todos