import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({navigation}) => ({
                headerTintColor: "white",
                tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                headerRight: ({tintColor}) => (<IconButton icon='add' color={tintColor} size={24} onPress={() => {
                    navigation.navigate('ManageExpense');
                }}/>)
            })}
        >
            <BottomTabs.Screen
                name={"RecentExpenses"}
                component={RecentExpenses}
                options={{
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={"hourglass"} color={color} size={size}/>
                    ),
                }}
            />
            <BottomTabs.Screen
                name={"AllExpenses"}
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={"calendar"} color={color} size={size}/>
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={"ExpensesOverview"}
                        component={ExpenseOverview}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name={"ManageExpense"} component={ManageExpense}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
