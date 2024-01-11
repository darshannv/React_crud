import axios from 'axios';

export function getStudents(){
    return axios.get('http://127.0.0.1:8000/students/')
        .then(response => response.data)
}

export function addStudent(student){
    return axios.post('http://127.0.0.1:8000/students/', {
        studentID:null,
        FirstName: student?.FirstName?.value || null,
        LastName: student?.LastName?.value || null,
        RegisterNo: student?.RegisterNo?.value || null,
        Email: student?.Email?.value || null,
        Course: student?.Course?.value || null,
    })
        .then(response => response.data)
}

export function updateStudent(stuid, student){
    return axios.put('http://127.0.0.1:8000/students/'+ stuid + '/', {
        studentID:null,
        FirstName: student?.FirstName?.value || null,
        LastName: student?.LastName?.value || null,
        RegisterNo: student?.RegisterNo?.value || null,
        Email: student?.Email?.value || null,
        Course: student?.Course?.value || null,
    })
        .then(response => response.data)
}

export function deleteStudent(studentId) {
   return axios.delete('http://127.0.0.1:8000/students/'+ studentId +'/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.data)
}