
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen, ProfileScreen, SearchScreen} from "../screens";
import Ionicons from '@expo/vector-icons/Ionicons';
import {COLORS} from "../../constants";

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
    return (
        <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "home" : "home-outline"} size={25} color={focused ? COLORS.primary : COLORS.gray2} />},
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={"search-sharp"} size={25} />},
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon:({focused})=>{return <Ionicons name={focused ? "person" : "person-outline"} size={25} color={focused ? COLORS.primary : COLORS.gray2} />},
        }} />
        </Tab.Navigator>
    );
    }

export default BottomTabNavigation;