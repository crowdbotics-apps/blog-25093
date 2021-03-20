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
import { article_list,article_add, article_edit, article_delete } from "./store/actions";


class ArticleList extends Component {

 

  componentDidMount() {
    this.props.load();
  }

  constructor(props){
      super(props);
      this.state = {
        showAddArticle: false,
        titleText: "",
        bodyText: "",
      };
      this._onOpenAddArticlePress = this._onOpenAddArticlePress.bind(this);
      // this._onCloseAddArticlePress = this._onCloseAddArticlePress.bind(this);
      // this._onTitleTextChange = this._onTitleTextChange.bind(this);
      // this._onBodyTextChange = this._onBodyTextChange.bind(this);
      // this._onAddArticlePress = this._onAddArticlePress.bind(this);
  };

  _onOpenAddArticlePress() {
    this.props.navigation.navigate('AddArticle', {})
  };

  // _onCloseAddArticlePress() {
  //   console.log("Closing Add Article")
  //   this.setState({showAddArticle :false});
  // };

  // _onTitleTextChange(event) {
  //   this.setState({
  //     titleText: event.val,
  //   })
  // }
  // _onBodyTextChange(event) {
  //   this.setState({
  //     bodyText: event.val,
  //   })
  // }

  // _onAddArticlePress(){

  //   //this approach may require
  //   console.log(this.state)
  //   console.log(this.props)
  //   const titleText = this.state.titleText;
  //   const bodyText = this.state.bodyText;
  //   console.log ("saving article :::::::: ", titleText, bodyText);
  //   this.props.add_article(this.state.titleText, this.state.bodyText, this.props.authReducer)

  // }


renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
      console.log("Pressed on Article detail")
      console.log(this.props)
      this.props.navigation.navigate('Article', {
        id: item.id})
    }}>
        <View style={styles.card}>
          <Text style="">
            Title: {item.title}
          </Text>
          <Text style="">
            by: {item.author}
          </Text>
          {this.props.user.id === item.author  && 
            <Button
              title="You are the author of this article. Click to Edit." 
            />
          }
          {this.props.user.id === item.author  && 
            <Button
              title="You are the author of this article. Click to Delete." 
            />
          }
        </View>
      
    </TouchableOpacity>
  );

  render() {
    const { articles } = this.props;
    return ( 
      // this.state.showAddArticle === false ?
          <View>
            <Button
              title="Add Article" 
              onPress={this._onOpenAddArticlePress}
            />
            <FlatList
              data={articles}
              renderItem={this.renderItem}
              keyExtractor={item => `${item.id}`}
            />
           </View>
        // : 
        
          
        
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
    add_article: (title, body, author) => dispatch(article_add({title, body, author})),
  }
}






export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);
