import React, { useEffect, useState } from 'react'
import '../styles/studentList.css';
import Image1 from '../assets/photo1.jpg';
import Image2 from '../assets/photo2.jpg';
import Image3 from '../assets/photo3.jpg';
import Image4 from '../assets/photo4.jpg';
import Image5 from '../assets/photo5.jpg';
import Image6 from '../assets/photo6.jpg';

const students = [
    {
        image: Image1,
        name: "User 1",
        track: 'Frontend',
        post: 'Engineering',
    },
    {
        image: Image2,
        name: "User 2",
        track: 'UI/UX',
        post: 'Designer'
    },
    {
        image: Image3,
        name: "User 3",
        track: 'Backend',
        post: 'Engineering',
    },
    {
        image: Image4,
        name: "User 4",
        track: 'UI/UX',
        post: 'Designer',
    },
    {
        image: Image5,
        name: "User 5",
        track: 'Backend',
        post: 'Engineering',
    },
    {
        image: Image6,
        name: "User 5",
        track: 'Frontend',
        post: 'Engineering',
    },
];

const StudentList = ({ handleShowTeacher, handleHideTeacher, filter }) => {
    const [filteredStudents, setFilteredStudents] = useState(students);
    useEffect(() => {
        if (filter == "Frontend Development") {
            setFilteredStudents(students.filter(item => item.track == 'Frontend'));
        } else if (filter == "Backend Development") {
            setFilteredStudents(students.filter(item => item.track == 'Backend'));
        } else if (filter == "UX & UI") {
            setFilteredStudents(students.filter(item => item.track == 'UI/UX'));
        } else {
            setFilteredStudents(students);
        }
    }, [filter])
    return (
        <div className='student--list'>
            <div className='list--header'>
                <h2>Students</h2>
                <select onChange={e => e.target.value == 'teacher' ? handleHideTeacher() : handleShowTeacher()}>
                    <option value='student'>Students</option>
                    <option value='teacher'>Teachers</option>
                </select>
            </div>

            <div className='list--container'>
                {filteredStudents.map((student) => (
                    <div className='list'>
                        <div className='student--detail'>
                            <img src={student.image} alt={student.name} />
                            <h2>{student.name}</h2>
                        </div>

                        <div className='student-track'>
                            <span>{student.track}.</span>
                            <span>{student.post}.</span>
                            <span className='student--todo'>:</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentList
