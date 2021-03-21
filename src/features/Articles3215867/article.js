import React from 'react';
import { Text, View, ImageBackground, Button, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

function Article(props) {
  console.log("@@@@@@@@@@@@")
  console.log(props)


  return (
    <View style={styles.container}>
      <View style={styles.card2}>
        <Text style = {styles.titleText}> {props.article.title} </Text>
          <ScrollView>
            <Text style={styles.bodyText}>{props.article.body}</Text>
          </ScrollView>
          {props.user.id === props.article.author  && 
          <Button
            style={styles.title}
            title="📝 Edit" 
            onPress = {() => props.navigation.navigate('EditArticle', {id: props.article.id})}
          />
          }
      </View>
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
