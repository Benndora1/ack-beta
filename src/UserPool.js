import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData={
    UserPoolId: "us-east-2_8ffcVM7p2",
    ClientId: "7gr62os3hqlgncq5dgcl94r340"
}
export const UserPool = new CognitoUserPool(poolData);