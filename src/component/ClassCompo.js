import React from "react";

class ClassCompo extends React.Component{
    constructor(props){
      super(props);
      console.log(this.props.name+"child constructor");
      this.state={
        count1:1,
         
      };
    }
    
    componentDidMount(){
        console.log(this.props.name+"child Did Mount");
    }

     render(){
        const{name,location}=this.props;
        const{count1}=this.state;
        console.log(this. props.name+"Child Render");
        return (
            <div>
                <h1>This is class based component</h1>
                {/* <h2>{ name}</h2>
                <h2>{ location}</h2> */}
                <h1>Count:{count1}</h1>
                 <button onClick={()=>{
                     this.setState({//it takes an object
                        count1:this.state.count1+1,
                     });
                 }}>Increase count</button>
            </div>
        )
     }
}

export default ClassCompo;