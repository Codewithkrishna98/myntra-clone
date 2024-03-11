import Display from "../components/Display"
import {useSelector} from "react-redux"

const Home = () => {
   const homeItems=useSelector(store=>store.items)
 
  return (
    <main>
        <div className="items-container">
          {homeItems.map((item)=> <Display key={item.id} item={item} />)}
        </div>
    </main>
  )
}

export default Home