import { EC2Client } from '@aws-sdk/client-ec2';

const AWS_REGION = process.env.AWS_REGION;

export const ec2 = new EC2Client({ region: AWS_REGION });
