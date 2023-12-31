import React from 'react'

import { typeActions } from '/Studying-React/organization/components/PostsProvider/typeActions/index.jsx'

export const reducer = (state, action) => {
  
  switch (action.type) {
    case typeActions.POSTS_LOADED:
      console.log(action.type)
      return { ...state, posts: action.payload, loading: false }
      
    case typeActions.LOADING_POSTS:
      console.log(action.type)
      return { ...state, loading: true }
  }
  
  return { ...state }
}