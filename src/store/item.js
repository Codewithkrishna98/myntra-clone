/* eslint-disable no-unused-vars */
import { createSlice} from "@reduxjs/toolkit"
import { DEFAULT_ITEMS } from "../data/items"



const itemSlice=createSlice({
  name:'items',
  // initialState:[],
  initialState:DEFAULT_ITEMS,
  reducers:{
    addInitailitem:(state,action)=>{
      return action.payload
    },
  }
})

export const itemsliceAction = itemSlice.actions
export default itemSlice