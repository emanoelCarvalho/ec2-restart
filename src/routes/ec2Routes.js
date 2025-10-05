const express = require('express');
const router = express.Router();
const { rebootHandler } = require('../controllers/ec2Controller');

export function requireApiKey(req, res, next) {
  const auth = req.header('authorization') || '';
  if (!auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing Bearer token' });
  const token = auth.slice(7);
  if (!token || token !== process.env.API_KEY) return res.status(403).json({ error: 'Invalid API token' });
  next();
}

router.post('/reboot', requireApiKey, rebootHandler);

