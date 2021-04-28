import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData={
    UserPoolId: "us-east-2_e9as4mONQT",
    ClientId: "5i3n6lcc8gkqe0dvktldt9ibof"
}
export const UserPool = new CognitoUserPool(poolData);