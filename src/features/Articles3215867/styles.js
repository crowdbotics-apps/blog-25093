import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 0,
      justifyContent: 'center', 

      backgroundColor: '#E9E0F9'
    },


  addButton: {
    backgroundColor: '#727CF5',
    fontWeight: 'bold',
    padding: 16,
  },
  card: {
    padding: 12,
    borderBottomWidth:1,
    borderColor:'#727CF5',
    backgroundColor:'#1D0A43'
  },
  card2: {
    padding: 12,
    borderBottomWidth:1,
    borderColor:'#727CF5',
    backgroundColor:'#1D0A43',
    marginTop:42,
  },
  text: {
    fontSize: 28,
    color: '#ffffff',
  },
  titleText: {
    textDecorationLine: 'underline',
    color: '#E9E0F9',
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 8,
  },
  titleTextInput: {
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 8,
  },
  bodyTextInput: {
    color: 'black',
    backgroundColor:'#ffffff',
    borderColor:'#1D0A43',
    margin: 8,
    height:142,
    borderWidth:1,
    fontSize: 12,
    padding: 12,
    textAlignVertical: 'top',
  },
  infoText: {
    color: '#1F0A45',
    fontStyle: 'italic',
    margin: 8,


    fontSize: 12,
    padding: 12,
    textAlignVertical: 'top',
  },
   bodyText: {
    fontSize: 12,
    color: '#ffffff'
  },

  author: {
    fontSize: 18,
    color: '#f2f2f2',
  },
  image: {
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'lightslategray',
  },
  body: {
    padding: 10,
    fontSize: 16
  }
});
