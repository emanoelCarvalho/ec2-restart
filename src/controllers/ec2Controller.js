import { rebootInstances } from '../services/ec2Service.js';

const ALLOWED_INSTANCES = (process.env.ALLOWED_INSTANCES || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

export async function rebootHandler(req, res) {
  try {
    const { instanceIds } = req.body;
    if (!Array.isArray(instanceIds) || instanceIds.length === 0) {
      return res.status(400).json({ error: 'instanceIds required' });
    }

    const unknown = instanceIds.filter(id => !ALLOWED_INSTANCES.includes(id));
    if (unknown.length) return res.status(403).json({ error: 'Instance not allowed', unknown });

    await rebootInstances(instanceIds);

    return res.json({ ok: true, message: 'Reboot command sent', instanceIds });
  } catch (err) {
    console.error('Reboot error', err);
    return res.status(500).json({ error: 'Failed to reboot', details: err.message || err.toString() });
  }
}
