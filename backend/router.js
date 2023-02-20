import express from 'express';
import { createMembership, getMemberships } from './controller.js';
const router = express.Router();

router.get('/memberships', getMemberships);
router.post('/memberships', createMembership);

export default router;
