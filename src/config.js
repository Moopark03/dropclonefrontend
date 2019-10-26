export default {
    MAX_ATTACHMENT_SIZE: 10000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "projectone172files"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://0ska19b8q7.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_6cYsNUOmZ",
      APP_CLIENT_ID: "3aagi7s8ecse5j68n0e4ubs3pg",
      IDENTITY_POOL_ID: "us-west-2:2a1e7713-b913-4f46-bad4-b4ed2851b906"
    }
  };