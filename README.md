We used serverless framework for creating the template. Serverless framework basically creates a cloudformation template and deploying the corresponding resources inside AWS. 

# Install serverless

```
sudo npm install -g serverless
```

Install dependencies

```
npm install
```

# setup aws credentials
```
export AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY
```

## Setup

- [Create a SES verified Domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-getting-started-verify.html) 
 - also inside Rule Set 
      - select Bucket and select optional settings.

# Deploy

In order to deploy the example, simply run:

```
serverless deploy
```

# To test
serverless logs --function postprocess
