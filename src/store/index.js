import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./item"
// import fetchStatusslice from "./fetchSlice"
import bagSlice from "./addbag"






const myntraStore = configureStore({
  reducer:{
    items:itemSlice.reducer,
    // fetchstatus:fetchStatusslice.reducer,
    bag:bagSlice.reducer,
  }
})

export default myntraStore