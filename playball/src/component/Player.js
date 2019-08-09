import React from 'react';


const Player = ({props}) =>{
    return(
        <div>
            <p data-testid='balltest'>Ball: {props.ball}</p>
            <p>Foul: {props.foul}</p>
        </div>
    )
}

export default Player