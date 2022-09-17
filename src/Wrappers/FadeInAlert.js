import * as React from 'react';
import {Animated} from 'react-native';

function FadeInAlert({children}) {
    const fadeAnim = React.useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 800,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <Animated.View 
            style={{
                display: 'flex',
                width: '100%',
                opacity: fadeAnim
            }}
        >
            {children}
        </Animated.View>
    );
}

export default FadeInAlert