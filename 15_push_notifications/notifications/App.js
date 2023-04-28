import {StatusBar} from "expo-status-bar";
import {Alert, Button, StyleSheet, View, Platform} from "react-native";
import * as Notifications from "expo-notifications";
import {useEffect} from "react";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true,
        };
    },
});

export default function App() {
    useEffect(() => {
        const configurePushNotifications = async () => {
            const {status} = await Notifications.getPermissionsAsync();
            let finalStatus = status;

            if (finalStatus !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== 'granted') {
                Alert.alert('Permission required', 'Push notifications need the appropriate permissions.')
                return;
            }

            const pushTokenData = await Notifications.getExpoPushTokenAsync()
            console.log(pushTokenData);
        }

        configurePushNotifications().then()

      if (Platform.OS === 'android') {
        // Additional setup required for Android
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }
    }, [])

    useEffect(() => {
        const subscription1 = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log('SUBSCRIPTION 1')
                console.log(JSON.stringify(notification, null, 2));
            }
        );

        // When clicking on notification
        const subscription2 = Notifications.addNotificationResponseReceivedListener((notification) => {
            console.log('SUBSCRIPTION 2')
            console.log(JSON.stringify(notification, null, 2));
            const userName = notification.notification.request.content.data.userName;
            console.log(userName);
        });

        return () => {
            subscription1.remove();
            subscription2.remove();
        };
    }, []);

    const scheduleNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "My first local notification",
                body: "This is the body of the notification",
                data: {userName: "Max"},
            },
            trigger: {
                seconds: 3,
            },
        });
    };

    const sendPushNotificationsHandler = () => {
      fetch('https://exp.host/--/api/v2/push/send', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'ExponentPushToken[--InsertTokenHere--]',
          title: 'Test - sent from a device!',
          body: 'This is a test',
        })
      }).then();
    }

    return (
        <View style={styles.container}>
            <Button
                title="Schedule Notification"
                onPress={scheduleNotificationHandler}
            />
            <Button title={'Send Push Notification'} onPress={sendPushNotificationsHandler} />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
