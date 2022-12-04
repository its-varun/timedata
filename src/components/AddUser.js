import React from 'react'
import './AddUser.css'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddUser() {


    const [credentials1, setCredentials1] = useState({firstName:"", lastName: "", email:"", mobile:"", position:"",age:"", address:"", city:"", state:"",zipcode:""});
    let navigate1 = useNavigate();
    const handleSignup = async (e)=>{
        e.preventDefault();
        
        const {firstName, lastName, email,mobile,position,age,address,city,state,zipcode} = credentials1;
        const response = await fetch("http://localhost:5000/storeData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({firstName, lastName, email,mobile,position,age,address,city,state,zipcode})

        });
        
        // console.log(email, password);
        // console.log(email, firstName,secondName);
        const json = await response.json();
        console.log("hello");
        if(json.status === 200){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            alert("Employee added!")
            navigate1('/');
            
        }
        else{
            alert("Please enter all the details correctly");
        }
        // console.log(json);  
    }

    const onChange1 = (e)=>{
        setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
    }


  return (
    <>
        <Navbar/>
        <h1 id="main_heading_add">
            Add new Employee details
        </h1>
        <div className='form'>
            <form onSubmit={handleSignup}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">First Name</label>
                    <input type="text" name="firstName" class="form-control"  placeholder="First Name" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" name="lastName" class="form-control"  placeholder="Last Name" onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Email id</label>
                    <input type="email" name="email" class="form-control"  placeholder="Email Id" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Mobile Number</label>
                    <input type="text" name="mobile" class="form-control"  placeholder="Mobile Number" maxlength={10}onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Current Position</label>
                    <input type="text" name="position" class="form-control"  placeholder="Current Position" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Age</label>
                    <input type="Number" name="age" class="form-control"  placeholder="Age" maxlength={3}onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" name="address"  placeholder="1234 Main St"  onChange={onChange1}/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" name="city"  onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control" name="state"  onChange={onChange1}>
                        <option selected>Choose...</option> 
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" name="zipcode" id="inputZip" maxLength={6}  onChange={onChange1}/ >
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" >Add</button>
            </form>
        </div>
    </>
  )
}

export default AddUser