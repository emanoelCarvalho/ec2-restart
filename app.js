import express from 'express';
import helmet from 'helmet';
import path from 'path';
import dotenv from 'dotenv';
import ec2Routes, { requireApiKey } from './src/routes/ec2Routes.js';

dotenv.config();
const app = express();

app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.json());
app.use('/', express.static(path.join(path.resolve(), 'public')));
app.use('/api', ec2Routes);

if (!process.env.AWS_ACCESS_KEY_ID && !process.env.AWS_ROLE_ARN) {
  console.warn('Warning: no AWS credentials detected via env.');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
