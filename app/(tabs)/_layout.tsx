import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import icons from '@/constants/icons';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View className="flex-1 mt-3 flex-col items-center">
      <Image
        source={icon}
        tintColor={focused ? '#0061FF' : '#666876'}
        resizeMode="contain"
        className="size-6"
      />
      <Text
        className={`${
          focused
            ? 'text-primary-300 font-rubik-medium'
            : 'text-black-200 font-rubik'
        } w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
