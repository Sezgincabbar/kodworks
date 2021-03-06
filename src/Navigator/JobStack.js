import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../Pages/Detail/Detail';
import JobDrawer from './JobDrawer';

const Stack = createNativeStackNavigator();
const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobDrawer"
        component={JobDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={Detail}
        options={({route}) => ({
          headerTintColor: '#ef534f',
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default JobStack;
