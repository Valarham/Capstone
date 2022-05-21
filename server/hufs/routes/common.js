const express = require("express");
const router = express.Router();
const common = require("../controllers/common");

router.get("/ping", common.ping);
router.post("/login", common.login);//로그인
router.get("/logout", common.logout);//logout
router.post("/register", common.register);//회원가입
router.post("/detail", common.detail);//상세페이지
router.get("/user", common.user);//유저 데이터

/*router.("/", common.);//사용자 이름 가져오기
router.get("/dashboard", common.dashboard);//대쉬보드 불러오기
router.post("/dashboard/query", common.queryList);//매장목록 쿼리
router.post("/dashboard/collect", common.collectStore);//매장 수집

router.get("/myshop", common.myShop);//My shop
router.post("/myshop/prog", common.businessProgress);//진행상황 업데이트
router.post("/myshop/delete", common.deleteCollection);//수집된 매장 삭제
//router.post("/myshop/delete/all", common.);//수집된 매장 전체 삭제

router.("/", common.);
*/
module.exports = router;
