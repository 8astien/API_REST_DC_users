import express from "express";
import { generateDuel, generateMatchTeamOf2, generateMatchTeamOf4 } from "../controllers/MatchController.js";

const router = express.Router();

router.get('/duel', generateDuel);
router.get('/duo', generateMatchTeamOf2);
router.get('/quad', generateMatchTeamOf4);


export default router;