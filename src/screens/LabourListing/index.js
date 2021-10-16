import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import ListItem from '../../components/ListItem';
import style from './style';
import { useSelector, useDispatch } from 'react-redux';
import { getLabours } from '../../actions/labour';
const LabourListing = (props) => {
    const renderItem = ({ item }) => (
        <ListItem
            item={item}
            navigation={props.navigation}
        />
    );
    const emptyList = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={style.emptyText}>No Labours found</Text>
        </View>
    )
    const loader = () => (
        <View style={{ alignItems: 'center' }}>
            <ActivityIndicator color="#173756" animating size="large" />
        </View>
    )
    const [searchText, setSeacrhText] = useState('');
    const [filterList, setFilterList] = useState(null);
    const dispatch = useDispatch();
    const laboursList = useSelector((state) => state.laborsList);
    const isLoading = useSelector((state) => state.isLoading)
    useEffect(() => {
        dispatch(getLabours())
    }, [])
    return (
        <View style={style.container}>
            <Text style={style.title}>Labours</Text>
            <View style={style.inputContainer}>
                <TextInput
                    style={style.inputBox}
                    placeholderTextColor="#6E6E6E"
                    placeholder="Search"
                    onChangeText={(searchString) => {
                        setSeacrhText(searchString);
                        let filteredData = laboursList.filter(function (item) {
                            return item.name.toLowerCase().includes(searchString.toLowerCase());
                        });
                        setFilterList(filteredData);
                    }}
                />
            </View>
            <FlatList
                ItemSeparatorComponent={() => (
                    <View style={{
                        height: 10
                    }}></View>
                )}
                contentContainerStyle={{ marginVertical: 10 }}
                data={searchText != '' ? filterList : laboursList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={isLoading ? loader : emptyList}
            />
        </View>
    );
}
export default LabourListing;