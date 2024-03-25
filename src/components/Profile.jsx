import React from 'react'
import ProfileHeader from './ProfileHeader';
import '../styles/profile.css'
import userImage from '../assets/me.jpg'
import Image1 from '../assets/pic3.jpg';
import Image2 from '../assets/pic1.jpg';
import Image3 from '../assets/pic2.jpg';
// import Image_1 from '../assets/me.jpg';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    image: userImage,
    title: 'HTML CSS',
    duration: '2 hours',
    icon: <BiBook />
  },
  {
    title: 'Java Script',
    duration: '2 hours',
    icon: <BiBook />
  },
  {
    title: 'React.Js',
    duration: '2 hours',
    icon: <BiBook />
  },
]

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />

      <div className='user--profile'>
        <div className='user--detail'>
          <img src={userImage} alt='' />
          <h3 className='username'>Godwin Obi</h3>
          <span className='profession'>Teacher</span>
        

         {/* { {courses.map((course) => (
                <div className='list'>
                      <img src={course.image} alt={course.name} />
                      <h2>{course.name}</h2>
                </div>
          ))} } */}

        </div>

        <div className='user-courses'>
        {courses.map((courses) => (
          <div className='course'>

            <div className='course-detail'>

              <div className='course-cover'>{courses.icon}</div>

              <div className='course-name'>
                <h5 className='title'>{courses.title}</h5>
                <span className='duration'>{courses.duration}</span>
              </div>
            </div>

            <div className='action'>:</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Profile