import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabourListing from '../screens/LabourListing'
import DetailScreen from '../screens/DetailScreen'

const MScreens = createStackNavigator();
function MainScreen() {
    return (
        <MScreens.Navigator>
            <MScreens.Screen
                name="LabourListing"
                component={LabourListing}
                options={{
                    title: null,
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <MScreens.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{
                    title: null,
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
        </MScreens.Navigator>
    )

}
export default MainScreen;