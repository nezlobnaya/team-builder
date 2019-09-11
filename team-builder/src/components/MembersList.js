import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px 10px 10px;
    width: 70%;
    justify-content: space-evenly;
    align-items:center;
    border: 2px dashed black;
    cursor: pointer;
`

const MembersList = props => {
    console.log(props);
    return (
        <div className='members-list'>
            <CardContainer>
            {props.teamMembers.map( member => {
                return (
                    <div className='member' key={member.id}>
                        <h2>{member.name}</h2>
                        <h3>{member.email}</h3>
                        <h3>{member.role}</h3>
                     </div>
                )
            })}
            </CardContainer>
       </div>
    )
}

export default MembersList;
