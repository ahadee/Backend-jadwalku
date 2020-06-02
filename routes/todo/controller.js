const { Todos } = require("../../models")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

module.exports = {
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
    // create: async (req,res) => {
        
    //     // const result = await Todos.findOne({email : email });
    //     // if (result) return res.status(401).send("Your email has already registered");
    //     try {
    //         const { password, first_name, last_name, email} = req.body
    //         const result = await Todos.create({
    //             email,
    //             password,
    //             first_name,
    //             last_name,
    //         })

    //         res.status(200).json({
    //             message: "Create new data successfully",
    //             data: result,
    //         })
    //         res.status(401).json({
    //             message: "Email must be unique",
    //             data: result,
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    // update: async (req, res) => {
    //     try {
    //         const { password, first_name, last_name, email } = req.body
    //         const { id } = req.params
    //         const result = await Todos.update({
    //             email,
    //             password,
    //             first_name,
    //             last_name,
    //         },
    //             {
    //                 where: { id: id }
    //             })
    //         const getAll = await Todos.findAll({
    //             where: { id: id }
    //         })

    //         res.status(200).json({
    //             message: "Update new data successfully",
    //             data: getAll,
    //         })
    //     } catch (error) {
    //         console.log(error);

    //     }
    // },
}