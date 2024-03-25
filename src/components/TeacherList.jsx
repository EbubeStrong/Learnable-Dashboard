import React from 'react'
import '../styles/teacherList.css';
import Image1 from '../assets/pic3.jpg';
import Image2 from '../assets/pic1.jpg';
import Image3 from '../assets/pic2.jpg';
import Image_1 from '../assets/me.jpg';

const teachers = [
    {
        image: Image_1,
        name:"Organizer",
        track: 'Learnable',
        post: 'Cordinator',
    },
    {
        image: Image1,
        name:"Tappi",
        post: 'UI/UX',
        track: 'Designer',
    },
    {
        image: Image2,
        name:"Joshua Adegoke",
        post: 'Frontend',
        track: 'Engineering',
    },
    {
        image: Image3,
        name:"Ezeh Livinus",
        post: 'Backend',
        track: 'Engineering',
    },
];

const TeacherList = ({handleShowTeacher, handleHideTeacher}) => {
  return (
    <div className='teacher--list'>
        <div className='list--header'>
            <h2>Teachers</h2>
            <select onChange={ e => e.target.value == 'teacher' } >
                <option value='teacher'>Teachers</option>
                <option value='student'>Students</option>
            </select>
        </div>

        <div className='list--container'>
            {teachers.map((teacher) => (
                <div className='list'>
                    <div className='teacher--detail'>
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>

                    <div className='teacher-time'>
                    <span>{teacher.post}</span>
                    <span>{teacher.track}.</span>
                    <span className='teacher--todo'>:</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TeacherList