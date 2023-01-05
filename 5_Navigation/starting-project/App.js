import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: '#3f2f25'},
            drawerContentStyle: {
                backgroundColor: '#351401'
            },
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1'
        }}>
            <Drawer.Screen
                component={CategoriesScreen}
                name={'Categories'}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
                }}
            />
            <Drawer.Screen
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
                }}
                name={'Favorites'}/>
        </Drawer.Navigator>
    )
};

export default function App() {
    return (
        <>
            <StatusBar style={'light'}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{headerShown: false}}
                        name="Drawer"
                        component={DrawerNavigator}/>
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen name={'MealDetail'}
                                  component={MealDetailScreen}
                                  options={{title: 'About the Meal'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
