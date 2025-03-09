import DefaultLayout from "./layout/DefaultLayout"

import GlobalContext from "./context/GlobalContext"

import { useState, useEffect } from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import axios from "axios"

import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"


function App() {


  const [posts, setPosts] = useState([])

  function FetchPosts() {


    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data)
        console.log(res);

      })
      .catch(err => console.log(err))
  }

  useEffect(FetchPosts, [])



  return (
    <>
      <GlobalContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
