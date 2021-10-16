import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';
const ListItem = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("DetailScreen", { name: props.item.name })
            }}
            style={style.container}>
            <Text style={style.title}>{props.item.name}</Text>
            <Text style={style.subText}>{"Quantity-" + props.item.quantity + " " + props.item.unit}</Text>
        </TouchableOpacity>
    );
}
export default ListItem;