const express = require('express')
const router = express.Router()

const { getAll, getByID, getByDate } = require("./controller")

router.get("/",getAll)
router.get("/:userID",getByID)
router.get("/:userID/:date",getByDate)
// router.post("/",create)
// router.put("/:id", update)

module.exports = router