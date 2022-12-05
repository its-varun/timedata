import React, {useEffect,useState} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {

  useEffect(() => {
    fetchUsers();
  }, []);

    const [users,setUsers] = useState([]);
    let len=0;
    const fetchUsers = async() => {
      const data = await fetch('http://localhost:5000/showData');
      const users =await data.json();
      setUsers(users);
      
    }
    len=users.length;
    const hello="";



  return (
    <>
        <Navbar/>
        <div className='body'>
            <h3>Employee working :<b> {len}</b></h3>
            <h4>

            </h4>
            <Link to="/adduser">
                <button type="button" class="btn btn-outline-secondary" id='employee_button'>Add Employee</button>
            </Link>
            <Link to="/update">
                <button type="button" class="btn btn-outline-secondary"  id='employee_button'>Update Employee</button>
            </Link>
            <main className="container my-5">
              <h1 className=" text-center" id="table">Details of Employee</h1>
              <div className='show'>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Employee Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Second Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Position</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip Code</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      users.map(user =>(
                        <tr>
                          <td>
                            {user.ID}
                          </td>
                          <td>
                            {user.FIRSTNAME}
                          </td>
                          <td>
                            {user.LASTNAME}
                          </td>
                          <td>
                            {user.EMAIL}
                          </td>
                          <td>
                            {user.MOBILE}
                          </td>
                          <td>
                            {user.POSITION}
                          </td>
                          <td>
                            {user.AGE}
                          </td>
                          <td>
                            {user.ADDRESS}
                          </td>
                          <td>
                            {user.CITY}
                          </td>
                          <td>
                            {user.STATE}
                          </td>
                          <td>
                            {user.ZIPCODE}
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
              </div>
            </main>
        </div>
    </>
  )
}

export default Home