import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    subText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '300'
    },
    title1: {
        color: 'black',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 5
    },
    starStyle: {
        width: (width - 80) / 5,
        height: (width - 80) / 5,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#A9F5E1',
        borderRadius: 10
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500'
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})