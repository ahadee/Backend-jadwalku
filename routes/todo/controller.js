const { Todos, DetailTodos } = require("../../models")


module.exports = {
    getByID: async (req, res) => {
        const { userID } = req.params
        try {
            const result = await Todos.findAll({
                where: { userID: userID }
            })

            res.status(200).json({
                message: "Get data Todos by user ID",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    getAll: async (req, res) => {
        try {
            const result = await Todos.findAll({})

            res.status(200).json({
                message: "Get All data Todos",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    update: async (req, res) => {
        try {
            const { status } = req.body
            const { id, userID } = req.params
            const result = await Todos.update({
                status
            },
                {
                    where: {
                        userID: userID,
                        id: id
                    }
                })
            const getAll = await Todos.findAll({
                where: {
                    userID: userID,
                    id: id
                }
            })

            res.status(200).json({
                message: "Update new data successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);

        }
    },
    create: async (req, res) => {

        try {
            const { todo, status, } = req.body
            const {userID} = req.params
            const result = await Todos.create({
                todo,
                status,
                userID,
                where : {
                    userID: userID
                }
            })

            res.status(200).json({
                message: "Create new todo is successfully",
                data: result,
            })
        } catch (error) {
            console.log(error);
        }
    },
}