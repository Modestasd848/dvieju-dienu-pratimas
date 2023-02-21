import express from 'express';
import {
  createMembership,
  getMemberships,
  deleteMembership,
  createUser,
  getUsersOrder,
} from './controller.js';
const router = express.Router();

router.get('/memberships', getMemberships);
router.post('/memberships', createMembership);
router.delete('/memberships/:id', deleteMembership);
router.post('/users', createUser);
router.get('/users/:order', getUsersOrder);
export default router;
