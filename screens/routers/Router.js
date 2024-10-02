import { createStackNavigator } from "@react-navigation/stack" 
import Login from "../Login"
import Register from "../Register"
import Admin from "../Admin"
import Customer from "../Customer"
const Stack = createStackNavigator()

const Router = ()=>{
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
        }}
        >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="Customer" component={Customer}/>
        <Stack.Screen name="Register" component={Register}/> 
    </Stack.Navigator>
    )}
export default Router