import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import COLORS from '../common/colors';
import {FONTS} from '../common/fonts';
import {HistoryIcon, HomeIcon} from '../common/icons';
import STRINGS from '../common/strings';
import {getIsLoggedIn} from '../redux/selectors';
import GamePlayScreen from '../screens/gameplay/GamePlay.screen';
import HistoryScreen from '../screens/history/History.screen';
import HomeScreen from '../screens/home/Home.screen';
import LoginScreen from '../screens/login/Login.screen';
import {
  HistoryNavigationStackType,
  HomeNavigationStackType,
  LoginNavigationStackType,
  TabNavigationStackType,
} from './rootNavigation.types';

const HomeStack = createNativeStackNavigator<HomeNavigationStackType>();
const LoginStack = createNativeStackNavigator<LoginNavigationStackType>();
const HistoryStack = createNativeStackNavigator<HistoryNavigationStackType>();

const Tab = createBottomTabNavigator<TabNavigationStackType>();

const renderHomeIcon = () => {
  return <HomeIcon height={25} width={25} />;
};

const renderHistoryIcon = () => {
  return <HistoryIcon height={32} width={32} />;
};

const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: 60},
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: COLORS.lightBlue,
        tabBarInactiveTintColor: COLORS.black,
        tabBarActiveTintColor: COLORS.black,
        tabBarLabelStyle: {fontFamily: FONTS.Medium, fontSize: 18},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigationStack}
        options={{
          tabBarLabel: STRINGS.home,
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryNavigationStack}
        options={{
          tabBarLabel: STRINGS.history,
          tabBarIcon: renderHistoryIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeNavigationStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true, headerTitle: STRINGS.startAGame}}
      />
      <HomeStack.Screen name="GamePlayScreen" component={GamePlayScreen} />
    </HomeStack.Navigator>
  );
};

const HistoryNavigationStack = () => {
  return (
    <HistoryStack.Navigator screenOptions={{headerShown: false}}>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
};

const LoginNavigationStack = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

const RootNavigator = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <TabNavigationStack /> : <LoginNavigationStack />;
};

export default RootNavigator;
