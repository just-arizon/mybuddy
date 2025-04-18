import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
// console.log(Object.keys(FontAwesome.glyphMap));

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1B4F40' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: 'Store',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-bag" color={color} />,
        }}
      />
      <Tabs.Screen
        name="magazine"
        options={{
          title: 'Magazine',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
