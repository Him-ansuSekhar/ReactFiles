import React, {Component} from 'react'; 
export class Data extends Component{
    render(){
        return (
        <div><center>
            <table className="table table-bordered table-hover">
                <tr className="bg-dark text-light">
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
                <hr width="200%"/>
                <tr>
                    <td>Sam </td>
                    <td>35 </td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Ravi</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Shyam</td>
                    <td>30</td>
                </tr>
                
            </table></center>
        </div>
        )
    }
}