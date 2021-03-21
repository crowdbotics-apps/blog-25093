import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen2215868 from "../features/SplashScreen2215868"
import LoginAndSignup1215869 from "../features/LoginAndSignup1215869/screens"
import PasswordRecover from "../features/LoginAndSignup1215869/screens/PasswordRecover"
import ArticleList from "../features/Articles3215867"
import Article from "../features/Articles3215867/article"
import AddArticle from "../features/Articles3215867/AddArticle"
import EditArticle from "../features/Articles3215867/EditArticle"

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
  },
  AddArticle: {
    screen: AddArticle,
  },
  PasswordRecover: {
    screen: PasswordRecover,
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='LoginAndSignup1215869'
          component={LoginAndSignup1215869}
          screen={LoginAndSignup1215869Navigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Articles3215867'
          component={ArticleList}
          screen={ArticlesNavigator}
          options={{headerShown: true}}

        />
        <Stack.Screen
          name='Article'
          component={Article}
          screen={Article}
        />
         <Stack.Screen
          name='AddArticle'
          component={AddArticle}
          screen={AddArticle}
        />
        <Stack.Screen
          name='PasswordRecover'
          component={PasswordRecover}
          screen={PasswordRecover}
        />
        <Stack.Screen
          name='EditArticle'
          component={EditArticle}
          screen={EditArticle}
        />
       


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
