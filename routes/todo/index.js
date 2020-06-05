const express = require('express')
const router = express.Router()

const { getAll, getByID, update, create } = require("./controller")

router.get("/",getAll)
router.get("/:userID",getByID)
// router.get("/:userID/:date",getByDate)
// router.get("/getall/:id/",getAllTodo)
router.post("/:userID/",create)
router.put("/:userID/:id/", update)

module.exports = router