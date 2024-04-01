
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {CartScreen, HomeScreen, ProfileScreen, SearchScreen, SettingsScreen} from "../screens";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "react-native-paper";
import { COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 70,
    },
};

const BottomTabNavigation = () => {
    const theme = useTheme();
    return (
        <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "home" : "home-outline"} size={25} color={focused ? theme.colors.primary : theme.colors.secondary} />},
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "search-sharp": "search"} size={25} />},
        }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "cart" : "cart-outline"} size={25} color={focused ? theme.colors.primary : theme.colors.secondary} />},
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "settings" : "settings-outline"} size={25} color={focused ? theme.colors.primary : theme.colors.secondary} />},
        }} />
        </Tab.Navigator>
    );
    }

export default BottomTabNavigation;