import express from "express";

import { generateTeamOfTwo, generateTeamOfFour } from "../controllers/TeamController.js";

const router = express.Router();

// GET TEAM OF 2 
router.get('/2', generateTeamOfTwo);

// GET TEAM OF 4
router.get('/4', generateTeamOfFour);

export default router;