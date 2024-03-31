import React, { useState } from 'react'
import NewsContext from './NewsContext'


const NewsContextProvider = ({children}) => {

    const [newsData, setNewsData] = useState(null)

  return (
    <NewsContext.Provider value={{newsData, setNewsData}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider

// Creating News context for Preview