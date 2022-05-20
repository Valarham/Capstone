const express = require("express");
const router = express.Router();
const dashboard = require("../controllers/dashboard");

router.get("/", dashboard.dashboard);//대쉬보드 불러오기
router.post("/query", dashboard.queryList);//매장목록 쿼리
router.post("/collect", dashboard.collectStore);//매장 수집

/*
router.("/", dashboard.);
*/
module.exports = router;