import {Router} from 'express';

import { getAllProfiles,getProfile,analyzeProfile } from '../controllers/github.controller.js';

const router = Router();

router.post("/analyze/:username",analyzeProfile);
router.get("/profiles", getAllProfiles);
router.get("/profiles/:username",getProfile);

export default router;