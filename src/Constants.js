import { CardStyleInterpolators } from "@react-navigation/stack";

const API_URL  = "https://lake-cherry-troodon.glitch.me"
const USER_KEY = "user";

const cardAnimationConfig = {
  animation: 'timing',
  config: {
    duration: 500
  }
};

const addModalOptions = {
    headerShown: false,
    transitionSpec: {
        open: cardAnimationConfig,
        close: cardAnimationConfig
    },
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
}

export {API_URL, USER_KEY, addModalOptions}