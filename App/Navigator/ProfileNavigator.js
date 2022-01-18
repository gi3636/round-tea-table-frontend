import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Views/Profile";
import Setting from "../Views/Setting";
const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
