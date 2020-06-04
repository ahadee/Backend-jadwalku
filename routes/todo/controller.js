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
}