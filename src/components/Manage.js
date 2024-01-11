import react, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import  {getStudents, deleteStudent} from '../services/StudentServices';
import '../App.css';
import AddStudentModal from './AddStudentModal';
import UpdateStudentModal from './UpdateStudentModal';


const Manage = () => {
    const[students, setStudent] = useState([]);
    const[addModalShow, setAddModalShow] = useState(false);
    const[editModalShow, setEditModalShow] = useState(false);
    const[editStudent, setEditStudent] = useState([]);
    const[isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if(students.length && !isUpdated) {
            return;
        }
        getStudents()
            .then(data => {
                if(mounted) {
                    setStudent(data)
                }
            })
            return () => {
            mounted = false;
            setIsUpdated(false);
            }

    }, [isUpdated, students]);

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    }

     const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(stu);
    }

    const handleDelete = (e, studentId) => {
    if(window.confirm('Are are sure?')) {
        e.preventDefault();
        deleteStudent(studentId)
        .then((result) =>  {
            alert(result);
            setIsUpdated(true);
        },
        (error) => {
            alert("Failed to Delete Student");
        })
      }
    }

    let addModalClose = () => setAddModalShow(false);
    let editModalClose = () => setEditModalShow(false);

    return (
    <div className="row">
         <Table striped bordered hover className='tab-margin'>
      <thead bg="dark" variant="dark">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Registration No</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
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
          <td>
          <Button className='mr-2' variant="primary" onClick={event => handleUpdate(event, stu)}>Update</Button>{' '}
          <UpdateStudentModal show={editModalShow} onHide={editModalClose} setUpdated={setIsUpdated}
          student={editStudent}>
          </UpdateStudentModal>
          <Button className='mr-2' variant="danger"
          onClick={event => handleDelete(event, stu.studentId)}>Delete</Button>{' '}
          </td>
        </tr>
        )}
      </tbody>
    </Table>
    <ButtonToolbar>
    <Button variant="success" onClick={handleAdd}>Add Student</Button>{' '}
    <AddStudentModal show={addModalShow} onHide={addModalClose} setUpdated={setIsUpdated}>
    </AddStudentModal>
    </ButtonToolbar>
    </div>
    );
}

export default Manage;