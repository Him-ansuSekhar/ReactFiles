import React, {Component} from 'react'; 
export class Search extends Component{
    render(){
        return (
        <div><center>
            <input type="text" placeholder="Search Text"/>
            <button>Go</button></center>
        </div>
        )
    }
}