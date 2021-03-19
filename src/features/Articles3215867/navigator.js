import React from 'react';
import { SlideMenuIcon } from '../../navigator/slideMenuIcon';
import { createStackNavigator } from "react-navigation-stack";

import ArticleList from "./index";
import Article from "./article";

export default ArticlesNavigator = createStackNavigator({
  ArticleList: {
    screen: ArticleList,
    navigationOptions: ({ navigation }) => ({
      title: "Article List",
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    }),
    params: {
      detail: "Article"
    }
  },
  Article: {
    name: "Article",
    screen: Article,
  },
});




// const ArticlesNavigator = {
//   //@BlueprintNavigationInsertion

 
//   Articles3215867: {
//     screen: ArticlesNavigator,
//   },
//   Article: {
//     screen: Article,
//   }
// // }

// const Stack= createStackNavigator();

// const ArticlesContainer = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Articles3215867">
//          <Stack.Screen
//           name='Articles3215867'
//           component={ArticleList}
//           screen={ArticlesNavigator}
//         />
//         <Stack.Screen
//           name='Article'
//           component='Article'
//           screen='Article'
//         />
      
       
       

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default ArticlesContainer
