import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.User.addTags({'user_name': 'Claudia Hobus', 'user_email': 'clauu013@gmail.com'});
}