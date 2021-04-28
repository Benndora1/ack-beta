const config = {
  s3: {
    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
  },
  apiGateway: {
    REGION: "YOUR_API_GATEWAY_REGION",
    URL: "YOUR_API_GATEWAY_URL",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_e9as4mONQ",
    APP_CLIENT_ID: "5i3n6lcc8gkqe0dvktldt9ibof",
    IDENTITY_POOL_ID: "us-east-2:79026c81-ff86-4aac-8c52-0748b62a2f4c",
  },
};

export default config;