const express = require('express')
const router = express.Router()

const { getAll, create, update, login, getByID, getAllEmployee, destroy } = require("./controller")

router.get("/",getAll)
router.get("/allemployee", getAllEmployee)
router.get("/:id",getByID)
router.post("/",create)
router.post("/login",login)
router.put("/:id", update)
router.delete("/:id",destroy)

module.exports = router