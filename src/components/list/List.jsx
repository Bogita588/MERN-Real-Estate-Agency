import './list.scss'
import Card from"../card/Card"
import {listData} from"../../lib/dummydata"

function List(){
  return (
    <div className='itemList'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List