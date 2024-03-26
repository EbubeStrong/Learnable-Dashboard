// import React, { useEffect, useState } from 'react'
// import '../styles/studentList.css';
// import Image1 from '../assets/photo1.jpg';
// import Image2 from '../assets/photo2.jpg';
// import Image3 from '../assets/photo3.jpg';
// import Image4 from '../assets/photo4.jpg';
// import Image5 from '../assets/photo5.jpg';
// import Image6 from '../assets/photo6.jpg';

// const students = [
//     {
//         image: Image1,
//         name: "User 1",
//         track: 'Frontend',
//         post: 'Engineering',
//     },
//     {
//         image: Image2,
//         name: "User 2",
//         track: 'UI/UX',
//         post: 'Designer'
//     },
//     {
//         image: Image3,
//         name: "User 3",
//         track: 'Backend',
//         post: 'Engineering',
//     },
//     {
//         image: Image4,
//         name: "User 4",
//         track: 'UI/UX',
//         post: 'Designer',
//     },
//     {
//         image: Image5,
//         name: "User 5",
//         track: 'Backend',
//         post: 'Engineering',
//     },
//     {
//         image: Image6,
//         name: "User 5",
//         track: 'Frontend',
//         post: 'Engineering',
//     },
// ];

// const StudentList = ({ handleShowTeacher, handleHideTeacher, filter }) => {
//     const [filteredStudents, setFilteredStudents] = useState(students);
//     useEffect(() => {
//         if (filter == "Frontend Development") {
//             setFilteredStudents(students.filter(item => item.track == 'Frontend'));
//         } else if (filter == "Backend Development") {
//             setFilteredStudents(students.filter(item => item.track == 'Backend'));
//         } else if (filter == "UX & UI") {
//             setFilteredStudents(students.filter(item => item.track == 'UI/UX'));
//         } else {
//             setFilteredStudents(students);
//         }
//     }, [filter])
//     return (
//         <div className='student--list'>
//             <div className='list--header'>
//                 <h2>Students</h2>
//                 <select onChange={e => e.target.value == 'teacher' ? handleHideTeacher() : handleShowTeacher()}>
//                     <option value='student'>Students</option>
//                     <option value='teacher'>Teachers</option>
//                 </select>
//             </div>

//             <div className='list--container'>
//                 {filteredStudents.map((student) => (
//                     <div className='list'>
//                         <div className='student--detail'>
//                             <img src={student.image} alt={student.name} />
//                             <h2>{student.name}</h2>
//                         </div>

//                         <div className='student-track'>
//                             <span>{student.track}.</span>
//                             <span>{student.post}.</span>
//                             <span className='student--todo'>:</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default StudentList


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
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>18</td>
                <td>20</td>
                <td>20</td>
                <td>18</td>
                <td>20</td>
                <td>96</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
    </div>,
    score: <div className='result-container'>
    <div className='resultScore'>
        <h5>Task 1(20)</h5>
        <p>18</p>
    </div>
    <div className='resultScore'>
        <h5>Task 2(20)</h5>
        <p>20</p>
    </div>
    <div className='resultScore'>
        <h5>Task 3(20)</h5>
        <p>20</p>
    </div>
    <div className='resultScore'>
        <h5>Task 4(20)</h5>
        <p>18</p>
    </div>
    <div className='resultScore'>
        <h5>Task 5(20)</h5>
        <p>20</p>
    </div>
    <div className='resultScore'>
        <h5>Total Score(100)</h5>
        <p>96</p>
    </div>
    <div className='resultScore'>
        <h5>Attendance(100)</h5>
        <p>95</p>
    </div>
</div>
    },
    {
        image: Image2,
        name: "User 2",
        track: 'UI/UX',
        post: 'Designer',
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>15</td>
                <td>15</td>
                <td>20</td>
                <td>15</td>
                <td>20</td>
                <td>85</td>
                <td>95</td>
            </tr>
        </tbody>
    </table>
    </div>,
     score: <div className='result-container'>
     <div className='resultScore'>
         <h5>Task 1(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 2(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 3(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Task 4(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 5(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Total Score(100)</h5>
         <p>85</p>
     </div>
     <div className='resultScore'>
         <h5>Attendance(100)</h5>
         <p>95</p>
     </div>
 </div>
    },
    {
        image: Image3,
        name: "User 3",
        track: 'Backend',
        post: 'Engineering',
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>10</td>
                <td>20</td>
                <td>12</td>
                <td>15</td>
                <td>13</td>
                <td>60</td>
                <td>70</td>
            </tr>
        </tbody>
    </table>
    </div>,
     score: <div className='result-container'>
     <div className='resultScore'>
         <h5>Task 1(20)</h5>
         <p>10</p>
     </div>
     <div className='resultScore'>
         <h5>Task 2(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Task 3(20)</h5>
         <p>12</p>
     </div>
     <div className='resultScore'>
         <h5>Task 4(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 5(20)</h5>
         <p>13</p>
     </div>
     <div className='resultScore'>
         <h5>Total Score(100)</h5>
         <p>60</p>
     </div>
     <div className='resultScore'>
         <h5>Attendance(100)</h5>
         <p>50</p>
     </div>
 </div>
    },
    {
        image: Image4,
        name: "User 4",
        track: 'UI/UX',
        post: 'Designer',
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>16</td>
                <td>17</td>
                <td>19</td>
                <td>15</td>
                <td>20</td>
                <td>72</td>
                <td>75</td>
            </tr>
        </tbody>
    </table>
    </div>,
     score: <div className='result-container'>
     <div className='resultScore'>
         <h5>Task 1(20)</h5>
         <p>16</p>
     </div>
     <div className='resultScore'>
         <h5>Task 2(20)</h5>
         <p>17</p>
     </div>
     <div className='resultScore'>
         <h5>Task 3(20)</h5>
         <p>19</p>
     </div>
     <div className='resultScore'>
         <h5>Task 4(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 5(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Total Score(100)</h5>
         <p>72</p>
     </div>
     <div className='resultScore'>
         <h5>Attendance(100)</h5>
         <p>70</p>
     </div>
 </div>
    },
    {
        image: Image5,
        name: "User 5",
        track: 'Backend',
        post: 'Engineering',
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>18</td>
                <td>20</td>
                <td>20</td>
                <td>18</td>
                <td>20</td>
                <td>96</td>
                <td>95</td>
            </tr>
        </tbody>
    </table>
    </div>,
     score: <div className='result-container'>
     <div className='resultScore'>
         <h5>Task 1(20)</h5>
         <p>18</p>
     </div>
     <div className='resultScore'>
         <h5>Task 2(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Task 3(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Task 4(20)</h5>
         <p>18</p>
     </div>
     <div className='resultScore'>
         <h5>Task 5(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Total Score(100)</h5>
         <p>96</p>
     </div>
     <div className='resultScore'>
         <h5>Attendance(100)</h5>
         <p>95</p>
     </div>
 </div>
    },
    {
        image: Image6,
        name: "User 5",
        track: 'Frontend',
        post: 'Engineering',
        result:  <div className='tab'><table>
        <caption>Learnable LeaderBoard</caption>
        <thead>
            <tr>
                <th scope="col">Task 1(20)</th>
                <th scope="col">Task 2(20)</th>
                <th scope="col">Task 3(20)</th>
                <th scope="col">Task 4(20)</th>
                <th scope="col">Task 5(20)</th>
                <th scope="col">Total Score(100)</th>
                <th scope="col">Attendance(100)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>18</td>
                <td>20</td>
                <td>20</td>
                <td>18</td>
                <td>20</td>
                <td>98</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
    </div>,
     score: <div className='result-container'>
     <div className='resultScore'>
         <h5>Task 1(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 2(20)</h5>
         <p>15</p>
     </div>
     <div className='resultScore'>
         <h5>Task 3(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Task 4(20)</h5>
         <p>18</p>
     </div>
     <div className='resultScore'>
         <h5>Task 5(20)</h5>
         <p>20</p>
     </div>
     <div className='resultScore'>
         <h5>Total Score(100)</h5>
         <p>98</p>
     </div>
     <div className='resultScore'>
         <h5>Attendance(100)</h5>
         <p>100</p>
     </div>
 </div>
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

                        <div className='result'>{student.result}</div>
                        <div className='scores'>{student.score}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentList
