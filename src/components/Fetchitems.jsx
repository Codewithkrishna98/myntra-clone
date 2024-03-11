// /* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { itemsliceAction } from "../store/item"




// const Fetchitems = () => {
  
//   const fetchstatus= useSelector(store=>store.fetchstatus)
//   const dispatch=useDispatch()
//   useEffect(()=>{
     
//      const controller= new AbortController();
//      const signal=controller.signal
     
    

//     fetch("http://localhost:8080/items",{signal})
//     .then((res)=>res.json())
//     .then(({items})=>{

  
//   dispatch(itemsliceAction.addInitailitem(items[0]))
// })
    
    
// return ()=>{
//   controller.abort();
// }

// } ,[fetchstatus ])
//   return (
//     <>
    
//     </>
//   )
// }

// export default Fetchitems