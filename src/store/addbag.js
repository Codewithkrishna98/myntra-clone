import { createSlice} from "@reduxjs/toolkit"



const bagSlice=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addInbag:(state,action)=>{
      state.push(action.payload)
    },
    removeitemFrombag:(state,action)=>{
      return state.filter(itemId=> itemId !=action.payload)
    },
  }
})

export const bagSliceAction = bagSlice.actions
export default bagSlice