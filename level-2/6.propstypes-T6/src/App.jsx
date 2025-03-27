import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

const StudentCard = ({ name, age, skills }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

// Define prop types
StudentCard.propTypes = {
    name: PropTypes.string.isRequired,  // Required string
    age: PropTypes.number.isRequired,   // Required number
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,  
    
// Required array of strings
};
function App(){
  return(
    <>
    <div className='bg'>
     <h1>StudentsList and Skillset (props-Types)</h1>
     <StudentCard name="sanjay" age={20} skills={['html', 'css', 'javascript']} />
     <StudentCard name="balaji" age={20} skills={['React', 'Node.js', 'MongoDB']} />
    </div>
    </>
  )
}

export default App;
