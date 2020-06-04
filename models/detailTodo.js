const Sequelize = require("sequelize")
const {db} = require("../config")

const DetailTodos = db.define('detail_todos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_list_todo: {
        type: Sequelize.INTEGER,
        allowNull: false,   
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

module.exports = DetailTodos