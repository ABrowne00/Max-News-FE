import Header from './components/Header.components';
import { UserContext } from './utils/Context';
import ArticleList from './components/ArticleList.components';
import ArticleId from './components/ArticleId.components';
import './App.css';
import React, {useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser }}>
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Header />  }></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path='/articles/:article_id' element={<ArticleId />}></Route>
       
   </Routes>
      </BrowserRouter>
      </UserContext.Provider>
     
    
    </div>
  );
}

export default App;




/* <>
<Header />
<h2>List of items</h2>
<ul>
    {items.map((item) => {
        return (
        <Link key={item.item_id} to={`/items/${item.item_id}`}>
            <li>{item.item_name}</li>
            </Link>
        )
    })}
</ul>
</> */