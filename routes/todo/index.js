const express = require('express')
const router = express.Router()

const { getAll, getByID, getByDate, getAllTodo } = require("./controller")

router.get("/",getAll)
router.get("/:userID",getByID)
// router.get("/:userID/:date",getByDate)
// router.get("/getall/:id/",getAllTodo)
// router.post("/",create)
// router.put("/:id", update)

module.exports = router