import React, { Component } from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';
import AddArticle from "./AddArticle";
import { styles } from "./styles";
import { connect } from "react-redux";
import reducer from "./store/reducers"
import { useIsFocused } from '@react-navigation/native';
import { article_list,article_add, article_edit, article_delete } from "./store/actions";

class ArticleList extends Component {

  componentDidMount() {
    // this.props.load()
    this.props.navigation.addListener('focus', () => {
        this.props.load()
    });
  }
  
  constructor(props){
      super(props);
      this.state = {
        showAddArticle:false,
      
      };
      this._onOpenAddArticlePress = this._onOpenAddArticlePress.bind(this);
      
  }

  _onOpenAddArticlePress() {
    this.props.navigation.navigate('AddArticle', {})
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      key = {item.id + item.author}
      onPress={() => {
        console.log("Pressed on Article detail")
        console.log(this.props)
        this.props.navigation.navigate('Article', {
          id: item.id})
      }}
    >
      <View style={styles.card}>

        <Text style={styles.titleText}>
          {item.title} 
        </Text>
        <Text style={styles.bodyText}>
         {item.body}
        </Text>
        {this.props.user.id === item.author  && 
          <Button
            title="📝 Edit" 
            onPress = {() => this.props.navigation.navigate('EditArticle', {id: item.id})}
          />
        }
        
        {this.props.user.id === item.author  && 
          <Button
            title="🗑️ Delete" 
            onPress = {() => this.props.delete_article(item.id, this.props.authReducer)}
          />
        }

       
    </View>
      </TouchableOpacity>
  );

  render() {
      const articles = this.props.articles;
      console.log(articles)
      console.log(Object.keys(articles))
      console.log(Object.values(articles))
    return ( 
      <View style={styles.container}>
        <Button
          style={styles.addButton}
          title="➕ Add Article"
          onPress={this._onOpenAddArticlePress}
        />
        <FlatList
          data={articles.slice(1)}
          renderItem={this.renderItem}
          keyExtractor={item => `${item.id}`}

        />
       </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const detail = ownProps.navigation.detail;

  return {
    detail: detail,
    articles: state.articlesReducer.articles,
    user: state.authReducer.user,
    authReducer:state.authReducer,
    titleText: state.titleText,
    bodyText:state.bodyText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(article_list()),
    edit_article: (article_id, newTitle, newText, auth) => dispatch( article_edit({article_id, newTitle, newText, auth}) ),



    delete_article: (article_id, auth) => dispatch(article_delete({article_id, auth})),
    add_article: (title, body, author) => dispatch(article_add({title, body, author})),
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);