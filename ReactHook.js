// ************What are hooks in react? ***************
// Hooks are new feature addition in react version 16.8.
// They allow us to use React features without writing a class.
// Avoid the whole confusion of this keyword.
// Allow us to reuse stateful logic.
// organize a logic inside a class component into reusable isolated units.

// ***************what are the rules of hooks?******************
// 1. ONLY CALL HOOKS AT THE TOP LEVEL
// Dont call hooks inside loop , conditions , nested functions.
// 2. ONLY CALL HOOKS FORM REACT FUNCTIONS
//  Call them from / within React functional components and not just any regular java script functions

// USEREDUCER HOOK

// ************** What is useReducer Hook? ************************
// useReducer is a hook use for state Management. It is an alternative to useState hook. except more complex
// useReducer is related to reducer
//  The key differnce between useState and useReducer is that with useReducer , state is altered
// by passing messages rather than calling the updater function.
// A reducer is a pure function that calculates the next state based on the previous state and the
// action that has been dispathced.
// useReducer accepts as arguments a reducer function, and an Initial State value
// Reducer is a function that takes the current state and an action ,

// Reduce method in java Script :
// 1. Array.reduce(reducer ,  initialValue)
// 2. single value  = reducer (accumulator ,  itemValue)
// 3. reduce methods returns a single value
//
// useReducer hook in React
// 1. useReducer(reducer , initialState)
// newState = reducer(currentState , action)
// useReducer returns a pair of values [state , dispatch]
//

// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useReducer} from 'react';
// import { version } from 'react/cjs/react.production.min'

// const useReducerHook = () => {
//   const initialState = 0;
//   const reducer = (state, action) => {
//     switch (action) {
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//       case 'RESET':
//         return initialState;
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={{fontSize: 25}}> count = {state}</Text>
//       </View>
//       <View style={styles.buttonView}>
//         <View style={{width: '30%'}}>
//           <TouchableOpacity
//             onPress={() => dispatch('INCREMENT')}
//             style={styles.button}>
//             <Text style={styles.text}>Addition</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{width: '30%'}}>
//           <TouchableOpacity
//             onPress={() => dispatch('DECREMENT')}
//             style={styles.button}>
//             <Text style={styles.text}>Subtract</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{width: '30%'}}>
//           <TouchableOpacity
//             onPress={() => dispatch('RESET')}
//             style={styles.button}>
//             <Text style={styles.text}>Reset</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default useReducerHook;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginTop: 200,
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'grey',
//     borderRadius: 20,
//   },
//   text: {padding: 20, alignSelf: 'center'},
// });

// USESTATE HOOK
// What is useState hook?
//The React useState Hook allows us to track state in a function component.

// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:

// 1.  The current state.
// 2.  A function that updates the state.
// We cannot update the useState State directly.
// useState only takes one argument which is the initial value of that state.
// useState returns an array with two items.
// The first is the current value stored in state , and the second is a function that lets you update the state.
// when dealing with objects and array , make sure to use spread your state variable

// import {StyleSheet, Text, View, TextInput} from 'react-native';
// import React, {useState} from 'react';

// const useStateWithObject = () => {
//   const [name, setname] = useState({firstName: '', lastName: ''});
//   return (
//     <View style={styles.container}>
//       <View style={styles.header2}>
//         <View>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter Your FirstName"
//             onChangeText={e => setname({...name, firstName: e})}></TextInput>
//         </View>
//         <View>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter Your LastName"
//             onChangeText={e => setname({...name, lastName: e})}></TextInput>
//         </View>
//       </View>
//       <View style={styles.header}>
//         <Text style={styles.Name}> Your FirstName is {name.firstName}</Text>
//         <Text style={styles.Name}>Your LastName is {name.lastName}</Text>
//       </View>
//     </View>
//   );
// };

// export default useStateWithObject;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'center',
//     marginLeft: 20,
//   },
//   header2: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignContent: 'center',
//     paddingHorizontal: 20,
//   },
//   Name: {
//     fontSize: 20,
//     color: '#000',
//   },
//   textInput: {
//     borderColor: '#000',
//     borderWidth: 1,
//     borderRadius: 20,
//   },
// });

// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';

// const useStateWithArray = () => {
//   const addItem = () => {
//     setItem([
//       ...item,
//       {
//         Id: item.length,
//         Value: Math.floor(Math.random() * 10) + 1,
//       },
//     ]);
//   };
//   const [item, setItem] = useState([]);
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonView}>
//         <TouchableOpacity style={styles.TouchableOpacity} onPress={addItem}>
//           <Text style={styles.Text}>Add a Number</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.valuesBox}>
//         {item.map(item => (
//           <Text>
//             Key : {item.Id} {'   '} Vaue : {item.Value}
//           </Text>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default useStateWithArray;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Text: {
//     fontSize: 20,
//     color: '#000',
//   },
//   valuesBox: {
//     flex: 5,
//   },
//   TouchableOpacity: {
//     backgroundColor: 'grey',
//     padding: 15,
//     borderRadius: 20,
//   },
// });

//USEFFECT HOOK
// The Effect hook lets us to perform side effects in functional components
// It is close replacemt for componentDidMount, componentDidUpdate, componentWillUnmount
// useEffect takes up to two arguments
// The first is the effect that we want to run,( It is the peice of code that we would have normally put in
//  componentDidMount and  componentDidUpdate )
// The Second argument is optional , if present , it is an array of values that useEffect uses to decide when to re-run
// the function given in the first argument.
// If we will not provide the second argument then useEffect will re-run our effect after each
// render to our react Component

// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';

// const useEffectHook = () => {
//   const [number, setnumber] = useState(0);

//   useEffect(() => {
//     console.log('useEffect Called');
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonView}>
//         <TouchableOpacity
//           style={styles.TouchableOpacity}
//           onPress={setnumber(number + 1)}>
//           <Text style={styles.Text}>{number}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default useEffectHook;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   textInput: {
//     borderColor: '#000',
//     borderWidth: 1,
//     borderRadius: 20,
//     marginVertical: 20,
//   },
//   buttonView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   TouchableOpacity: {
//     backgroundColor: 'grey',
//     padding: 15,
//     borderRadius: 20,
//   },
// });
