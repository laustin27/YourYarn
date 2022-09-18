import * as React from 'react';
import { Text} from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Body from '../Wrappers/Body'
import PrimaryButton from '../Helpers/PrimaryButton';

export default function ProfileScreen() {
    const {authContext, authState} = React.useContext(AuthContext);
    const [isLoggingOut, setLoggingOut] = React.useState(false);

    const loggedInUser = authState.loggedInUser;

    return (
        <Body>
            <Text style={{marginBottom: '5%'}}>{`Hi there ${loggedInUser?.username}!`}</Text>
            <PrimaryButton
                onPress={() => {
                    setLoggingOut(true);
                    authContext.logout()
                }} 
                text={isLoggingOut ? 'Logging Out' : 'Log Out'} 
                disabled={isLoggingOut}
            />
        </Body>
    );
}