import React, { useState } from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from '../components/Card'
import TeacherList from './TeacherList'
import StudentList from './StudentList'

const content = () => {
  const [showTeacher, setShowTeacher] = useState(false)

  const handleShowTeacher = () => {
    setShowTeacher(true)
  }

  const handleHideTeacher = () => {
    setShowTeacher(false)
  }

  return (
    <div className='content'>
        <ContentHeader />
        <Card />
        <TeacherList handleShowTeacher = {handleShowTeacher}  handleHideTeacher = {handleHideTeacher}/>
        {showTeacher && <StudentList />}
    </div>
  )
}

export default content