import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 17,
        fontWeight: "500",
        marginVertical: 15
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 3,
        height: 45,
        borderRadius: 10
    },
    inputBox: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 40,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "500",
        color: '#585858'
    },
    emptyText: {
        fontWeight: '400',
        fontSize: 15
    },

})