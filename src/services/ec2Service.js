const { RebootInstancesCommand } = require('@aws-sdk/client-ec2');
const { ec2 } = require('../config/awsConfig');

async function rebootInstances(instanceIds) {
  const cmd = new RebootInstancesCommand({ InstanceIds: instanceIds });
  return ec2.send(cmd);
}

module.exports = { rebootInstances };

