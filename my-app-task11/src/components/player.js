import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/players';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = items[playerToDisplay];
    const style = {
        width: 500,
        margin: 30,
        textAlign: 'center',
        display: 'inline-block',
    };

    return player?
        <div style={{textAlign: 'center'}}>
            <Paper style={style} zDepth={2}>
                <h2>{player.name}</h2>
                <h3>Level: {player.level}</h3>
                <p>{player.about}</p>
                <Link to='/'><RaisedButton label="Go back!"/></Link>
            </Paper>
        </div>
        :
        <p style={{textAlign: 'center'}}>Hey, there is no such a player!</p>
}