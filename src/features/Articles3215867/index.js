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
import AddArticle from './AddArticle';
import { styles } from './styles';
import { connect } from 'react-redux';
import reducer from './store/reducers'
import { useIsFocused } from '@react-navigation/native';
import { article_list,article_add, article_edit, article_delete } from './store/actions';

class ArticleList extends Component {

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
        this.props.load()
    })
  }

  constructor(props){
      super(props);
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      key = {item.id + item.author}
      onPress={() => {
        this.props.navigation.navigate('Article', {id: item.id})
      }}
    >
      <View style={styles.card}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.bodyText}>{item.body}</Text>
        {//conditional rendering for Delete/Edit buttons
          this.props.user.id === item.author  && 
          <View>
            <TouchableOpacity
              title='📝 Edit' 
              onPress = {() => this.props.navigation.navigate('EditArticle', {id: item.id})}
              style={styles.button}
            >
              <Text style={styles.buttonText}>📝 Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              title='🗑️ Delete' 
              onPress = {() => this.props.delete_article(item.id, this.props.authReducer)}
              style={styles.button}            
            >
              <Text style={styles.buttonText}>🗑️ Delete</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </TouchableOpacity>
  )

  render() {
    const articles = this.props.articles;
    return ( 
      <View style={styles.container}>
        <Button
          style={styles.addButton}
          title='➕ Add Article'
          onPress={() => this.props.navigation.navigate('AddArticle', {})}
        />
        <FlatList
          data={articles.slice(1)}
          renderItem={this.renderItem}
          keyExtractor={item => `${item.id}`}
        />     
      </View>
    )
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
    delete_article: (article_id, auth) => dispatch(article_delete({article_id, auth})),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList)