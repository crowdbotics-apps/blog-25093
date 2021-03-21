import React from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

function Article(props) {
  console.log("@@@@@@@@@@@@")
  console.log(props)


  return (
    <View>
      {props.user.id === props.article.author  && 
        <Button
          title="You are the author of this article. Click to Edit" 
          onPress = {() => props.navigation.navigate('EditArticle', {id: props.article.id})}
        />

      }
        
        <View >
          <Text >
           Title: {props.article.title} 
          </Text>
          <Text >
           by: {props.article.author}
          </Text>
          <Text>{props.article.body}</Text>
        </View>
      <Text>
       
      </Text>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.navigation.getParam("id", null);
  console.log(ownProps);
  const { id } = ownProps.route.params;

  console.log("ARTICLE ID ==== " + id)
  return {
    article: state.articlesReducer.articles.find(record => record.id == id),
    user: state.authReducer.user
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
