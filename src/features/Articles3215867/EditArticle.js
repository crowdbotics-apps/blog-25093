import React, { useState } from 'react';
import { Text, View, ImageBackground, Button, SafeAreaView, TextInput, TextArea } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

import { article_list, article_edit } from "./store/actions";

function EditArticle(props) {
  
  const [titleText, setTitleText] = useState(props.article.title);
  const [bodyText, setBodyText] = useState(props.article.body)

  function onSubmit(){
    if(bodyText !== "" && titleText !== ""){
      alert("Adding article! Returning you to Article List now"); 
      props.edit_article(props.article.id, titleText, bodyText, props.authReducer);
            // props.load(); //load new data before navigating back to list.
      props.navigation.navigate("Articles3215867", {})
    } else{
      alert("Please finish filling out the form.")
    }
  }

  return (

      <SafeAreaView style={styles.container}>
        <Text style={styles.infoText}>Your existing article is shown below, edit as you see fit and submit! </Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={(text) => setTitleText(text)}
          value={titleText}

        />
        <TextInput
          style={styles.bodyTextInput}
          onChangeText={(text) => setBodyText(text)}
          value={bodyText}
          multiline={true}

          
        />
        <Button
          title="✅ Submit Changes" 
          onPress={onSubmit}
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
