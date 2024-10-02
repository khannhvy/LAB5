import { createStackNavigator } from "@react-navigation/stack"; 
import Services from "../Services";
import AddNewService from "../AddNewService"; 
import ServiceDetail from "../ServiceDetail"; 
import { useMyContextController } from "../store"; 
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator() 
const RouterService = ()=>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

return(
    <Stack.Navigator
        initialRouteName="Services"
        screenOptions={{
            title: (userLogin!=null)&& (userLogin.name),
            headerTitleAlign: "center", 
            headerStyle: {
                backgroundColor:"pink"
    },
    headerRight: (props)=> <IconButton icon={"account"} />
    }}>
    <Stack.Screen name="Services" component={Services}/>
    <Stack.Screen name="AddNewService" component={AddNewService}/> 
    <Stack.Screen name="ServiceDetail" component={ServiceDetail}/>
 </Stack.Navigator>
)}
export default RouterService;