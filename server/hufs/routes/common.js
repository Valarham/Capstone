const express = require("express");
const router = express.Router();

const common = require("../controllers/common");

router.get("/ping", common.ping);
router.post("/login", common.login);

module.exports = router;
