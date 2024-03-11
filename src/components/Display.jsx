/* eslint-disable react/prop-types */
import { IoBagAdd } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { bagSliceAction } from "../store/addbag"
import { MdDelete } from "react-icons/md"

const Display = ({item}) => {

 const bagItem= useSelector(store=>store.bag)
const itemIndexfound=bagItem.indexOf(item.id) >=0


const dispatch = useDispatch()
  const handleOnclick=()=>{
    dispatch(bagSliceAction.addInbag(item.id))
  }
  const handleOnremove=()=>{
    dispatch(bagSliceAction.removeitemFrombag(item.id))
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag" >Add to Bag</button> */}
{itemIndexfound ?<button type="button" className="btn btn-danger btn-add-bag" onClick={handleOnremove}> <MdDelete /> Remove</button> : 
      <button type="button" className="btn btn-success btn-add-bag"   onClick={handleOnclick }> <IoBagAdd /> Add To Bag</button>
  }
    </div>
  )
}

export default Display