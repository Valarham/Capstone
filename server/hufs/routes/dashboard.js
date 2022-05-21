const express = require("express");
const router = express.Router();
const dashboard = require("../controllers/dashboard");

router.get("/", dashboard.dashboard);//대쉬보드 불러오기
router.get("/brief", dashboard.brief);//브리핑
router.post("/query", dashboard.queryList);//매장목록 쿼리
router.post("/collect", dashboard.collectStore);//매장 수집
router.post("/cat_1", dashboard.cat_1);//1차 카테고리 목록
router.post("/cat_2", dashboard.cat_2);//2차 카테고리 목록
router.post("/cat_3", dashboard.cat_3);//3차 카테고리 목록
router.post("/addr_1", dashboard.addr_1);//1차 지역 목록
router.post("/addr_2", dashboard.addr_2);//2차 지역 목록
router.post("/addr_3", dashboard.addr_3);//3차 지역 목록
/*
router.("/", dashboard.);
*/
module.exports = router;