import Topics from './components/Topics.components';
import Header from './components/Header.components';
import ArticleList from './components/ArticleList.components';
import ArticleId from './components/ArticleId.components';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Header />  }></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path='/articles/:article_id' element={<ArticleId />}></Route>
       {/* <Route path='/articles?topic=cooking' element={<Topics />}></Route> */}
   </Routes>
      </BrowserRouter>
     
    
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