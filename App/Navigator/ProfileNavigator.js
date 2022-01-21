import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Views/Profile";
import Setting from "../Views/Setting";
const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
