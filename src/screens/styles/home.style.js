import { StyleSheet, Platform, StatusBar } from "react-native";
import {COLORS, SIZES} from "../../../constants";

const homeStyle = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Dynamic padding for Android
    },
    appBarWrapper: {
        marginHorizontal:12,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    location: {
        fontSize: SIZES.medium,
        fontWeight: "semibold",
        color: COLORS.gray,
    },
    textStyle:{
        fontFamily: "bold",
        fontSize: 40
    },
    cartCount: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        justifyContent: "center",
        zIndex: 999,
        alignItems: "center",
    },
    cartNumber:{
        color: COLORS.lightWhite,
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: "regular",
    }
});

export default homeStyle;
