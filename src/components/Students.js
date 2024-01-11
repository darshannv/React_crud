import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {getStudents} from '../services/StudentServices';
import '../App.css';


const Students = () => {
    const[students, setStudent] = useState([]);

    useEffect(() => {
        let mounted = true;
        getStudents()
            .then(data => {
                if(mounted) {
                    setStudent(data)
                }
            })
            return () => mounted = false;
    }, []);

    return (
    <div className="row">
         <Table striped bordered hover>
      <thead bg="dark" variant="dark">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Registration No</th>
          <th>Email</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
      {students.map((stu) =>
       <tr key={stu.id}>
          <td>{stu.studentId}</td>
          <td>{stu.FirstName}</td>
          <td>{stu.LastName}</td>
          <td>{stu.RegisterNo}</td>
          <td>{stu.Email}</td>
          <td>{stu.Course}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
    );
}

export default Students;