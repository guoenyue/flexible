import React from "react";

const Qitem = ({data,onSelect,index})=>{
    const isSelected=data.isSelected;
    return (<div className="qItem" style={{opacity:isSelected&&.4||1,backgroundColor:isSelected&&"#eee"||"transparent"}} onClick={()=>onSelect(index)}>
        {data.content}
    </div>);
};

export default Qitem;