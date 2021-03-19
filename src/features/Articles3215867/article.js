import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from "react-redux";
import { styles } from "./styles";

function Article(props) {
  console.log("@@@@@@@@@@@@")
  console.log(props)


  return (
    <View>
      
        <View style={styles.card}>
          <Text style={styles.text}>
           Title:  
          </Text>
          <Text style={styles.author}>
           by:
          </Text>
        </View>
      <Text style={styles.body}>
       
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
    article: state.articlesReducer.articles.find(record => record.id == id)
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
