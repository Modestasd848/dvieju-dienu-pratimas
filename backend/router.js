import express from 'express';
import {
  createMembership,
  getMemberships,
  deleteMembership,
  createUser,
  getAllUsers,
} from './controller.js';
const router = express.Router();

router.get('/memberships', getMemberships);
router.post('/memberships', createMembership);
router.delete('/memberships/:id', deleteMembership);
router.post('/users', createUser);
router.get('/users', getAllUsers);
export default router;
