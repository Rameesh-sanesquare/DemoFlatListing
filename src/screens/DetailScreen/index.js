import { Dimensions, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import style from './style';
import * as Progress from 'react-native-progress';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { getLabourDetails } from '../../actions/labour';

const DetailScreen = (props) => {
    const labour = useSelector((state) => state.laborDetails)
    const [rating, setRating] = useState(3);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading)
    useEffect(() => {
        dispatch(getLabourDetails())
    }, [])
    if (isLoading) {
        return (
            <View style={style.loaderContainer}>
                <ActivityIndicator color="#173756" animating size="large" />
            </View>
        )
    } else {

        return (
            <View style={style.container}>
                <Text style={style.title}>{props.route.params.name}</Text>
                <Text style={style.subText}>
                    {labour.description}
                </Text>
                <View style={{ marginVertical: 15, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.subText}>Quantity</Text>
                        <Text style={style.subText}>Start Date</Text>
                        <Text style={style.subText}>End Date</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.subText}>{"  -  "}</Text>
                        <Text style={style.subText}>{"  -  "}</Text>
                        <Text style={style.subText}>{"  -  "}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.subText}>{labour.quantity + " " + labour.unit}</Text>
                        <Text style={style.subText}>{labour.startDate}</Text>
                        <Text style={style.subText}>{labour.endtDate}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={style.title1}>Progress</Text>
                    <Progress.Bar
                        progress={0.5}
                        width={Dimensions.get("window").width - 40}
                        borderColor={"#FFFFFF"}
                        color={"#A9F5E1"}
                        unfilledColor={"#E6E6E6"}
                        height={10}
                        borderRadius={10}
                    />
                </View>
                <ScrollView contentContainerStyle={{ marginVertical: 10 }}>
                    <Text style={style.title1}>Feedback</Text>
                    <StarRatingBar
                        emptyStarColor='#6b6c6e'
                        tintColor='#DFB300'
                        starStyle={{
                            width: 20,
                            height: 20,
                        }}
                        readOnly={false}
                        continuous={true}
                        score={rating}
                        allowsHalfStars={false}
                        accurateHalfStars={true}
                        onStarValueChanged={(score) => {
                            setRating(score)
                        }}
                        dontShowScore={false}
                        scoreTextStyle={{ display: 'none' }}
                    />
                </ScrollView>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.btnText}>Approve</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default DetailScreen;