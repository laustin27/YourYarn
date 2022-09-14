import * as React from 'react';
import { Text} from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Body from '../Wrappers/Body'
import PrimaryButton from '../Helpers/PrimaryButton';

export default function ProfileScreen() {
    const {authContext, authState} = React.useContext(AuthContext);

    const loggedInUser = authState.loggedInUser;

    return (
        <Body>
            <Text>{`Hi there ${loggedInUser?.firstName}`}</Text>
            <PrimaryButton onPress={() => authContext.logout()} text={'Sign Out'} />
        </Body>
    );
}