const { User } = require("../../models")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await User.findAll({})

            res.status(200).json({
                message: "Get All data users",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    getAllEmployee: async (req, res) => {
        try {
            const result = await User.findAll({
                where: { role: 'employee' }
            })

            res.status(200).json({
                message: "Get All Data Employee",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    getByID: async (req, res) => {
        const { id } = req.params
        try {
            const result = await User.findAll({
                where: { id: id }
            })

            res.status(200).json({
                message: "Get All data users",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    create: async (req, res) => {

        // const result = await User.findOne({email : email });
        // if (result) return res.status(401).send("Your email has already registered");
        try {
            const { password, first_name, last_name, email } = req.body
            const result = await User.create({
                email,
                password,
                first_name,
                last_name,
            })

            res.status(200).json({
                message: "Create new data successfully",
                data: result,
            })
            res.status(401).json({
                message: "Email must be unique",
                data: result,
            })
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const { password, first_name, last_name, email } = req.body
            const { id } = req.params
            const result = await User.update({
                email,
                password,
                first_name,
                last_name,
            },
                {
                    where: { id: id }
                })
            const getAll = await User.findAll({
                where: { id: id }
            })

            res.status(200).json({
                message: "Update new data successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);

        }
    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params
            const result = await User.destroy({
                where: {
                    id: id
                }
            })
            const getAll = await User.findAll({
                where: { id: id }
            })
            res.status(200).json({
                message: "Delete data is successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const result = await User.findAll({
                where: {
                    email: email,
                    // password: password
                }
            });
            console.log(result.length);

            if (result.length === 0) {
                res.status(403).send({
                    message: "Your email not registered"
                })
            }
            else if (password != result[0].password) {
                res.status(403).send({
                    message: "Your password is wrong"
                })
            }
            else {
                res.status(200).json({
                    message: "Update new data successfully",
                    data: result,
                })
            }
        } catch (error) {
            res.status(401).send({
                message: "Your password not match",
            });
            console.log(error);
        }
    }
}