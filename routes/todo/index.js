const express = require('express')
const router = express.Router()

const { getAll, create, update, getByID } = require("./controller")

router.get("/",getAll)
router.get("/:userID",getByID)
// router.post("/",create)
// router.put("/:id", update)

module.exports = router