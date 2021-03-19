import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen2215868 from "../features/SplashScreen2215868"
import LoginAndSignup1215869 from "../features/LoginAndSignup1215869/screens"
import ArticleList from "../features/Articles3215867"
import Article from "../features/Articles3215867/article"

import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import SplashScreen2215868Navigator from "../features/SplashScreen2215868/navigator"
import LoginAndSignup1215869Navigator from "../features/LoginAndSignup1215869/navigator"
import ArticlesNavigator from "../features/Articles3215867/navigator";
/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen2215868: {
    screen: SplashScreen2215868Navigator,
  },
  LoginAndSignup1215869: {
    screen: LoginAndSignup1215869Navigator,
  },
  Articles3215867: {
    screen: ArticlesNavigator,
  },
  Article: {
    screen: Article,
  }
}

const Stack= createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen2215868">
        <Stack.Screen
          name='SplashScreen2215868'
          component={SplashScreen2215868}
        />
        <Stack.Screen
          name='LoginAndSignup1215869'
          component={LoginAndSignup1215869}
          screen={LoginAndSignup1215869Navigator}
        />
        <Stack.Screen
          name='Articles3215867'
          component={ArticleList}
          screen={ArticlesNavigator}
        />
        <Stack.Screen
          name='Article'
          component={Article}
          screen={Article}
        />
       


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
