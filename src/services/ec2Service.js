import { RebootInstancesCommand } from '@aws-sdk/client-ec2';
import { ec2 } from '../config/awsConfig.js';

export async function rebootInstances(instanceIds) {
  const cmd = new RebootInstancesCommand({ InstanceIds: instanceIds });
  return ec2.send(cmd);
}
