import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const courses = [
    {
        title: 'Frontend Development',
        icon: <BiLogoHtml5 />
    },
    {
        title: 'Backend Development',
        duration: '2 Hours',
        icon: <BiLogoAndroid />
    },
    {
        title: 'UX & UI',
        duration: '2 Hours',
        icon: <BiBuilding />
    },
]

const Card = ({ setFilter }) => {
    return (
        <div className='card--container'>
            {courses.map((item) => (
                <div className='card' onClick={() => setFilter(item.title)}>
                    <div className='card--cover'>{item.icon}</div>
                    <div className='card--title'>
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
