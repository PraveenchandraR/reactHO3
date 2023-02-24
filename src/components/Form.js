import React from 'react';
import { Component } from 'react';
import { Data } from './Data';
import './style.css';

class Form extends Component {
    state = { Name: "", Department: "", Rating: "",userDetails : [],formstate:true };
  
    handleOnSubmit(event) {
        event.preventDefault();
        const obj = {
            Name: this.state.Name,
            Department: this.state.Department,
            Rating: this.state.Rating,
            formstate:this.state.formstate,
        };

       
        const detailsArray = this.state.userDetails;//the details entered by the user in the state are stored on 
                                                        //userDetails and that is stored in a array called detailsArray
        
        detailsArray.push(obj);//here the object created  is pushed into detailsArray

        this.setState({ userDetails: detailsArray,formstate:!this.state.formstate })//here the state of form will be false until the event is changed
    }

    //now the changeEvent will follow 
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,  //the input is targeted using the name given and the value is taaken
        });

    };
    goback = () => {
        this.setState({
            formstate: !this.state.formstate
        });
    }

    render() {
        return (
            <>
                {this.state.formstate ?
                    (
                  
                      <div>
                        <div className='form'>
                              <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
                            <form  >
                                <label htmlFor={"Name"} className="lable">Name : </label>
                                <input type="text" name="Name" className='text' id="Name" placeholder='enter name..' onChange={
                                   this.handleOnChange} value={this.state.Name} required />
                                <br></br>

                                <label htmlFor={"Department"}  className="lable">Department : </label>
                                <input type={"text"} name="Department" className='text' id="Department" placeholder={'enter Dept..'} onChange={this.handleOnChange} value={this.state.Department} required/>
                                <br></br>
                
                                <label htmlFor={"Rating"}  className="lable">Rating : </label>
                                <input type={"number"} name="Rating" className='text' id="Rating" placeholder={"enter rating"} onChange={this.handleOnChange}
                                    value={this.state.Rating} required /><br>
                                </br>
                                <button   className='sub' onClick={this.handleOnSubmit.bind(this)}>Submit</button><br></br>
                 
                            </form>
                        </div>
                            <br></br>
                             </div>
                      ) : (<Data database={this.state.userDetails} backbutton={this.goback } />)    
                }
              
            </>
        );
    }
}
export default Form;