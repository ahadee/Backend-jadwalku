const express = require('express')
const router = express.Router()

const { getAll, create, update, getByID } = require("./controller")

router.get("/",getAll)
router.get("/:id",getByID)
// router.post("/",create)
// router.put("/:id", update)

module.exports = router