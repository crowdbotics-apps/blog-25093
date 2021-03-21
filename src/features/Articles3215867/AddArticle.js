import React, { useState } from 'react';
import { Text, View, ImageBackground, Button, SafeAreaView, TextInput } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

import { article_add, article_list } from "./store/actions";

function AddArticle(props) {
  
  const [count, setCount] = useState(0);
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("")


  return (

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitleText(text)}
          value={titleText}
          placeholder={"My Amazing Title Here"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBodyText(text)}
          value={bodyText}
          placeholder={"Write your article here...."}
          
        />
        <Button
          title="ADD ARTICLE" 
          onPress={() => { 
            alert("Adding article! Returning you to Article List now"); 
            props.add_article(titleText, bodyText, props.authReducer);
            // props.load(); //load new data before navigating back to list.
            props.navigation.navigate("Articles3215867", {})
          }}
        />
   
      </SafeAreaView>
 
  );
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.navigation.getParam("id", null);
  // console.log(ownProps);
  // const { id } = ownProps.route.params;

  // console.log("ARTICLE ID ==== " + id)
  return {
    // article: state.articlesReducer.articles.find(record => record.id == id),
    // user: state.authReducer.user
    user: state.authReducer.user,
    authReducer:state.authReducer,
    titleText: state.titleText,
    bodyText:state.bodyText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(article_list()),
    add_article: (title, body, author) => dispatch(article_add({title, body, author})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle)
