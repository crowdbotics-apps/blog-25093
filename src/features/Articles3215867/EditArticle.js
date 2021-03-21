import React, { useState } from 'react';
import { Text, View, ImageBackground, Button, SafeAreaView, TextInput } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

import { article_list, article_edit } from "./store/actions";

function EditArticle(props) {
  
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("")


  return (

      <SafeAreaView>
        <Text> Edit Article </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitleText(text)}
          value={titleText}
          placeholder={props.article.title}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBodyText(text)}
          value={bodyText}
          placeholder={props.article.body}
          
        />
        <Button
          title="edit ARTICLE" 
          onPress={() => { 
            alert("Editing article! Returning you to Article List now"); 
            props.edit_article(props.article.id, titleText, bodyText, props.authReducer);
            // props.load(); //load new data before navigating back to list.
            props.navigation.navigate("Articles3215867", {})
          }}
        />
   
      </SafeAreaView>
 
  );
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.navigation.getParam("id", null);
  console.log(state);
  const { id } = ownProps.route.params;

  // console.log("ARTICLE ID ==== " + id)
  return {
    // article: state.articlesReducer.articles.find(record => record.id == id),
    // user: state.authReducer.user
    article: state.articlesReducer.articles.find(record => record.id == id),
    user: state.authReducer.user,
    authReducer:state.authReducer,
    titleText: state.titleText,
    bodyText:state.bodyText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(article_list()),
    edit_article: (article_id, newTitle, newBody, auth) => dispatch( article_edit({article_id, newTitle, newBody, auth}) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle)
