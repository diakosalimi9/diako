import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    // axios.all([
    //   axios.get('https://jsonplaceholder.typicode.com/todo'),
    //   axios.get('https://jsonplaceholder.typicode.com/users'),
    //   axios.get('https://jsonplaceholder.typicode.com/posts'),
    //   axios.get('https://jsonplaceholder.typicode.com/products'),
    // ])
    //   .then(axios.spread((todo, users, posts, products) => {
    //     console.log(todo);

    //   }))
    axios.all([
      api.get('/todo'),
      api.get('/users'),
      api.get('/posts'),
      api.get('/products'),
    ])
      .then(axios.spread((todo, users, posts, products) => {
        console.log(todo);

      }))
  },[])
  return (
    <>

    </>
  )
}

export default App;