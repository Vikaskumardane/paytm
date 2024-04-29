const express = require('express');



//routing
const router = express.Router();

// router.post("/signup ")
router.use("/user", userRouter)

module.exports = router;