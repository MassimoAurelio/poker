const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/join", userController.join);
router.post("/leave", userController.leave);
router.get("/players", userController.getPlayers);
router.post("/updatepos", userController.updatePositions);
router.post("/mbbb", userController.mbBB);
router.post("/nextplayer", userController.nextTurnPlayer);
router.post("/raise", userController.raise);
router.post("/fold", userController.fold);
module.exports = router;
