import React from 'react';
import { Component } from 'react';


export class Data extends Component {

   render(){
    
       return (
           <>
               <div className='database'>
            <div>
               <h1 className='heading'>Employee Feedback Data</h1>
            </div>
           
            <div className='table'>
                <div className='boxes'>
                  
                        {
                            this.props.database.map((value, index) => {
                                return (
                                    <table key={index}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Name:{value.Name} <br>
                                                    </br>
                                                    Department:{value.Department} <br />
                                                    Rating:{value.Rating}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                );
                            })
                        }
                    
                </div>
                <br></br>
                <div>
                    <button className='backbtn' onClick={()=>{this.props.backbutton()}}>GoBack</button>
                </div>
                   </div>
                   </div>
               </>
        );
    }
               
};
export default Data;
