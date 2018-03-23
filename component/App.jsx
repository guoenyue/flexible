import React from "react";
import Qpanel from "./Qpanel";


const questions=[
    {
        isMulit:false,
        selects:[{content:"我是选项1",isSelected:false},{content:"我是选项2",isSelected:false},{content:"我是选项3",isSelected:false}],
        title:'我是第1道题目'
    },
    {
        isMulit:true,
        selects:[{content:"我是选项1",isSelected:false},{content:"我是选项2",isSelected:false},{content:"我是选项3",isSelected:false},{content:"我是选项4",isSelected:false}],
        title:'我是第2道题目'
    },
    {
        isMulit:false,
        selects:[{content:"我是选项1",isSelected:false},{content:"我是选项2",isSelected:false},{content:"我是选项3",isSelected:false}],
        title:'我是第3道题目'
    },
    {
        isMulit:false,
        selects:[{content:"我是选项1",isSelected:false},{content:"我是选项2",isSelected:false},{content:"我是选项3",isSelected:false}],
        title:'我是第4道题目'
    }
];





const App=()=>(
    <Qpanel questions={questions}></Qpanel>
);

export default App;