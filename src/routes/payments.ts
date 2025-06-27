import express from 'express';
import { createPaymentIntent, webhookHandler } from '../utils/stripe';

const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), webhookHandler);

export default router;