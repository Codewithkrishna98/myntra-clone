import { useSelector } from "react-redux"
import Bagsummary from "../components/Bagsummary"
import Displayitem from "../components/Displayitem"



const Bag = () => {
  const bagitems=useSelector(store=>store.bag)
  const items=useSelector(store=>store.items)
  const finalItem = items.filter((item)=>{
  const itemIndex=bagitems.indexOf(item.id)
  return itemIndex >=0;
})
  
  return (
    <>
    
    {/* <Header/> */}
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map(item=><Displayitem key={item.id} item={item}/>)}
       
        </div>
        
          <Bagsummary/>
        

      </div>
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Bag