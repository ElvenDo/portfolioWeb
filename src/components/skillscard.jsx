import '../scss/skillscard.scss';
export default function skillscard({icon, title}) {
  return (
        <div className="skill-card">
            <img src={icon} alt="" />
            <p>{title}</p>
        </div> 
  )
}


