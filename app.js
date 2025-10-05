require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const ec2Routes = require('./src/routes/ec2Routes');

const app = express();
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api', ec2Routes);

if (!process.env.AWS_ACCESS_KEY_ID && !process.env.AWS_ROLE_ARN) {
  console.warn('Warning: no AWS credentials detected via env. Use AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY or run on an instance with an IAM role.');
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
