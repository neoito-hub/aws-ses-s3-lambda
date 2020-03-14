'use strict';
const AWS = require('aws-sdk');
const simpleParser = require('mailparser').simpleParser;
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: process.env.AWSREGION,
});

module.exports.emailReceive = async (event) => {
  const record = event.Records[0];
  const request = {
    Bucket: record.s3.bucket.name,
    Key: record.s3.object.key,
  };

  try {
    const data = await s3.getObject(request).promise();
    const email = await simpleParser(data.Body);
    console.log("New email:");
    console.log(email);
    return { status: 'success' };
  } catch (Error) {
    console.log(Error, Error.stack);
    return Error;
  }
};
