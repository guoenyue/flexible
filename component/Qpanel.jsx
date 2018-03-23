import React,{Component} from "react";
import Qitem from "./Qitem";

class Qpanel extends Component{
    constructor(){
        super();
        this.select=this.select.bind(this);
        this.nextPage=this.nextPage.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.state={
            qIndex:0,
            question:{
                isMulit:false,
                selects:[],
                title:''
            },
            answers:[]
        };
    }
    componentWillMount(){
        const curQIndex=this.state.qIndex;
        this.setState(
            {
                question:this.props.questions[curQIndex]
            }
        );
    }
    select(index){
        const curIndex=this.state.qIndex;
        const question=this.state.question;
        const isMulit=question.isMulit;
        
        if(!isMulit){
            const newSelects=question.selects.map((select,idx)=>{select.isSelected=(index===idx);return select;});
            this.state.answers[curIndex]=newSelects;
            this.setState({
                question:Object.assign({},question,{selects:newSelects}),
                answers:this.state.answers
            });
        }else{
            const newSelects=question.selects.map((select,idx)=>{(index===idx)&&(select.isSelected=!select.isSelected);return select;});
            this.state.answers[curIndex]=newSelects;
            this.setState({
                question:Object.assign({},question,{selects:newSelects}),
                answers:this.state.answers
            });
        }

    }
    prevPage(){
        const curIndex=this.state.qIndex;
        this.state.answers[curIndex]&&console.log(`第${curIndex}题选的是${JSON.stringify(this.state.answers[curIndex].filter(item=>{return item.isSelected&&item.content||false;}))}`);
        if(curIndex>0){
            const newIndex=curIndex-1;
            this.setState({
                qIndex:newIndex,
                question:this.props.questions[newIndex]
            });
        }
    }
    nextPage(){
        const curIndex=this.state.qIndex;
        this.state.answers[curIndex]&&console.log(`第${curIndex}题选的是${JSON.stringify(this.state.answers[curIndex].filter(item=>{return item.isSelected&&item.content||false;}))}`);
        const len=this.props.questions.length;
        if(curIndex<len-1){
            const newIndex=curIndex+1;
            this.setState({
                qIndex:newIndex,
                question:this.props.questions[newIndex]
            });
        }
    }
    render(){
        const curQIndex=this.state.qIndex;
        const len=this.props.questions.length;
        const question=this.state.question;
        const isMulit=question.isMulit;
        return (
            <div>
                <div className="qTitle" >
                    {question.title}
                </div>
                {question.selects.map((select,index)=>(<Qitem key={index} data={select} isMulit={isMulit} onSelect={this.select} index={index}></Qitem>))}
                <div className="btnArea">
                    <button className="btn prevBtn" style={{display:curQIndex===0&&"none"||"block"}} onClick={this.prevPage}>上一页</button>
                    <button className="btn nextBtn" style={{display:curQIndex===len-1&&"none"||"block"}} onClick={this.nextPage}>下一页</button>
                    <button className="btn subBtn" style={{display:curQIndex===len-1&&"block"||"none"}}>提交</button>
                </div>
            </div>
        );
    }

}

export default Qpanel;