import React from 'react';

const MembersList = props => {
    console.log(props);
    return (
        <div className='members-list'>
            {props.teamMembers.map( member => {
                return (
                    <div className='member' key={member.id}>
                        <h2>{member.name}</h2>
                        <h3>{member.email}</h3>
                        <h3>{member.role}</h3>
                     </div>
                )
            })}
       </div>
    )
}

export default MembersList;
