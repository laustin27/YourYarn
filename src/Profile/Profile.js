import * as React from 'react';
import { Text, Button} from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Body from '../Wrappers/Body'

export default function Profile() {
    const {authContext} = React.useContext(AuthContext);

    return (
        <Body>
            <Text>Profile!</Text>
            <Button title="Logout" onPress={() => authContext.logout()} />
        </Body>
    );
}