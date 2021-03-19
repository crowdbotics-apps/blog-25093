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
      this._onCloseAddArticlePress = this._onCloseAddArticlePress.bind(this);
      this._onTitleTextChange = this._onTitleTextChange.bind(this);
      this._onBodyTextChange = this._onBodyTextChange.bind(this);
  };

  _onOpenAddArticlePress() {
    console.log("Opening Add Article")
    this.setState({showAddArticle :true});
  };

  _onCloseAddArticlePress() {
    console.log("Closing Add Article")
    this.setState({showAddArticle :false});
  };

  _onTitleTextChange(event) {
    this.setState({
      titleText: event.val,
    })
  }
  _onBodyTextChange(event) {
    this.setState({
      bodyText: event.val,
    })
  }


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
      this.state.showAddArticle === false ?
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
        :
          <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={this._onTitleTextChange}
                value={this.state.titleText}
                placeholder={"My Amazing Title Here"}
              />
              <TextInput
                style={styles.input}
                onChangeText={this._onBodyTextChange}
                value={this.state.bodyText}
                placeholder={"Write your article here...."}
                
              />
              <Button
                title="ADD ARTICLE" 
                onPress={() => {alert("adding article"); this.props.add_article(this.state.titleText, this.state.bodyText, this.props.user.id)}}
              />
              <Button
                title="X" 
                onPress={this._onCloseAddArticlePress}
              />
            </SafeAreaView>
        
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  const detail = ownProps.navigation.detail;

  return {
    detail: detail,
    articles: state.articlesReducer.articles,
    user: state.authReducer.user,
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
