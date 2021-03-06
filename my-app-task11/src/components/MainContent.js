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
    const playersIds = Object.keys(players);
    return   <React.Fragment>
        <Table>
            <TableBody>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Level</TableHeaderColumn>
                    <TableHeaderColumn>Short bio</TableHeaderColumn>
                </TableRow>

                {playersIds.map(id =>
                    <TableRow key={id}>
                        <TableRowColumn>
                            <Link to={`/player/${id}`}>{players[id].name}</Link>
                        </TableRowColumn>
                        <TableRowColumn>
                            {players[id].level}
                        </TableRowColumn>
                        <TableRowColumn>
                            {players[id].about}
                        </TableRowColumn>
                    </TableRow>)}
            </TableBody>
        </Table>
    </React.Fragment>
}