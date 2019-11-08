import React, {Component} from 'react'; 
export class UCForm extends Component{
    
    registerUser=(e)=>{
        e.preventDefault(); 
        console.log(this.refs.uname); 
        //console.log(this.refs.uemail); 
    }

    render(){
        return (
        <form onSubmit={this.registerUser}>
            Name: <input type="text" ref="uname"/><br/>
            Email: <input type="email" ref="uemail"/><br/>
            <input type="submit" value="Register"/>
        </form>
        )
    }
}