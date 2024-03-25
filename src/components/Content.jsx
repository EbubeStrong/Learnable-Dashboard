import React, { useState } from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from '../components/Card'
import TeacherList from './TeacherList'
import StudentList from './StudentList'
import { students } from './data'
const content = () => {
  const [showTeacher, setShowTeacher] = useState(false)
  const [filter, setFilter] = useState("");
  const handleShowTeacher = () => {
    setShowTeacher(true)
    setFilter("");

  }

  const handleHideTeacher = () => {
    setShowTeacher(false)
  }

  return (
    <div className='content'>
      <ContentHeader />
      <Card setFilter={setFilter} />
      {!showTeacher && <TeacherList handleShowTeacher={handleShowTeacher} handleHideTeacher={handleHideTeacher} />}
      {showTeacher && <StudentList handleShowTeacher={handleShowTeacher} handleHideTeacher={handleHideTeacher} filter={filter} />}
    </div>
  )
}

export default content