const { EC2Client } = require('@aws-sdk/client-ec2');

const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

const ec2 = new EC2Client({ region: AWS_REGION });

module.exports = { ec2 };

