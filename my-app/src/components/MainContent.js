import React from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';
import {
    Table,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';



export default () => {
    let state = {
        tableLayout: 'auto',
        showCheckboxes: false,

        displayRowCheckbox: false,
        showRowHover:true,
        stripedRows: false
    };


    const playersIds = Object.keys(players);
    return   <React.Fragment>
        <Table>
            <TableBody
                displayRowCheckbox={state.showCheckboxes}
                showRowHover={state.showRowHover}
                stripedRows={state.stripedRows}
            >
                <TableRow>
                    <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                        Players Table
                    </TableHeaderColumn>
                </TableRow>
                {playersIds.map(id => <TableRow key={id}><TableRowColumn><Link to={`/player/${id}`}>{players[id].name}</Link></TableRowColumn><TableRowColumn>{players[id].level}</TableRowColumn></TableRow>)}
            </TableBody>
        </Table>
    </React.Fragment>




}