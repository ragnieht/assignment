import React, { useEffect, useReducer, createContext } from "react";
import { 
  View,
  StyleSheet,
  Image, 
  Dimensions,  
} from "react-native";
import PostComponent from "./components/post";
import SearchComponent from "./components/search";

export const DataContext = createContext()

// generating random number between 1000000000 t0 9000000000
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
} 

// setting up state/reducer
export const initialState = {
  query: '',
  posts: [],
  display: []
}
export const reducer = ( state , action ) => {
  switch (action.type) {
    case 'onQueryChange' : {
      console.log(action.payload.input)
      let filtered = state.posts.filter(post => {
        return post.body.toUpperCase().includes(action.payload.input.toUpperCase())
      })
      return { ...state, query: action.payload.input, display: filtered }
    }
    case 'initData' : {
      let temp = Array(30).fill(action.payload.data).flat() 
      let newData = temp.map(( post, index ) => {
        return {...post, key : index + 1, randomInt: getRandomInt(1000000000,9000000000)}
      })
      return { ...state, posts: newData, display: newData }      
    }
    case 'tglRandom' : {
      state.display.forEach(post => post.randomInt = getRandomInt(1000000000,9000000000))
      return { ...state }
    }
  }
}

export default function App() {
  const [ state , dispatch ] = useReducer( reducer, initialState )
  // Fetching and initial storing of data into state WITH duplicating it 30 times
  const fetchApi = () => {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => dispatch({type: 'initData', payload: { data: data }}))
    // .catch(error => console.log(error))
  }
  useEffect(()=> {
    fetchApi()
  },[])

  // Updating State according to search Input 
  const handleChange = (e) => {   
    dispatch({type: 'onQueryChange', payload: { input: e }})    
  }
  // change random numbers on Re-render
  const onPress = () => {
    dispatch({type: 'tglRandom'})
  }

  return (    
    // <DataContext.Provider value={state.display}>
      <View style={styles.container}>
        <Image source={require('./assets/doggo_walk.gif')} style={styles.image}/>
        <SearchComponent handleChange={handleChange} onPress={onPress}/>
        <PostComponent data={state.display}/>
      </View>
    // </DataContext.Provider>
  )
}

const win = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",  
    justifyContent: 'top'  
  },
  image: {
    width: win.width,
    height: 200
  }
})