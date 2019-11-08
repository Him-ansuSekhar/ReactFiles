import React, {Component} from 'react'; 
export class StateChange extends Component{
    
     
    constructor(props)
    {
        super(props); 
        
        this.state={status: 0 }  //Initializing the state   
        
    }

    clickHandler1 = (event)=>{
        let temp=this.state.status+1;  
        this.setState({status: temp});
    }

    clickHandler2 = (event)=>{
        let temp=this.state.status-1; 
        this.setState({status: temp}); 
    }

    render(){
        return (
        <div>
            

            <h3>Counter</h3>      
            <p>{this.state.status}</p>
            <button onClick={this.clickHandler1}>Increment</button> 
            <button onClick={this.clickHandler2}>Decrement</button>
        </div>
        )
    }
    
}                                                                                    