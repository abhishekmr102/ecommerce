import React,{useState} from 'react'
import "../Tabs/Tab.css"

function Tab() {

const [index, setIndex] = useState(1);

  return (
    <>
        <div className="tabs">
            <div className='tab_list'>
                <div className={`tab_head ${index===1  ? "activee" : null}`} onClick={()=>{setIndex(1)}}>
                    Tab1
                </div>

                <div className={`tab_head ${index===2  ? "activee" : null}`} onClick={()=>{setIndex(2)}}>
                    Tab2
                </div>

                <div className={`tab_head ${index===3  ? "activee" : null}`} onClick={()=>{setIndex(3)}}>
                    Tab3
                </div>
            </div>
     
          <div className="tab_contant" hidden={index != 1}>Tab Contant 1</div>
          <div className="tab_contant" hidden={index != 2}>Tab Contant 2</div>
          <div className="tab_contant" hidden={index != 3}>Tab Contant 3</div>  
        </div>
    </>
  )
}

export default Tab