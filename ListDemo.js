import React, {Component} from 'react'; 
export class ListDemo extends Component{

    names=["asdf", "dfgh", "wert"]; 
    cities=["Bangalore", "Mumbai", "Chennai", "Delhi"];
    dataset=[
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];
    render(){
        let namelist=this.names.map((name, index)=><li key={index}>{name}</li>);
        
        return (

            <div>
                <ul>
                    <li>{namelist}</li>
                </ul>
                <select>
                    {this.cities.map((city, i)=><option key={i}>{city}</option>)}
                </select>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.dataset.map((todo)=>
                            <tr>
                                <td>{todo.color}</td>
                                <td>{todo.value}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                

            </div>

            
        )
    }
    
}                                                                                    