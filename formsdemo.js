import React, {Component} from 'react'; 
export class FormsDemo extends Component{
    constructor(props)
    {
        super(props); 
        this.state={
            uname: "Anonymous", 
            uemail: ""
        }
    }

    updateName = (e)=> this.setState({uname: e.target.value})
    updateEmail = (e)=> this.setState({uemail: e.target.value})
    registerUser = (e)=> {
        e.preventDefault(); 
        console.log(this.state); 
    }

    render(){
        return (
        <form>
            Name: <input type="text" value={this.state.uname} onChange={this.updateName}/><br/>
            E-Mail: <input type="email" value={this.state.uemail} onChange={this.updateEmail}/><br/>
            <input type="submit" value="Register" onClick={this.registerUser}/>
        </form>
        )
    }
}