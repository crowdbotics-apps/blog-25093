import React, { Component } from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';
import { styles } from "./styles";
import { connect } from "react-redux";
import reducer from "./store/reducers"
import { article_list } from "./store/actions";


class ArticleList extends Component {
  componentDidMount() {
    this.props.load();
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
      <View>
         <Button
          title="Add Article" 
        />
        <FlatList
          data={articles}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(article_list())
  }
}

// export default {
//   name: "ArticleList",
//   screen: connect(mapStateToProps, mapDispatchToProps)(ArticleList),
//   reducer: reducer,
//   actions: [article_list]
// }



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);
