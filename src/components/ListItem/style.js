import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#A9F5E1',
        width: Dimensions.get("window").width - 20,
        borderRadius: 10,
    },
    title: {
        color: "#FFFFFF",
        fontWeight: '700',
        fontSize: 15
    },
    subText: {
        color: "#FFFFFF",
        fontWeight: '400',
        fontSize: 12
    }
})