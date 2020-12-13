import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
// import TableContainer from '@material-ui/core/TableContainer';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
//import AdminNav from '../nav/AdminNav';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class AdminPlayers extends Component {

    state= {
        isloading: true,
        players:[]
    }
    componentDidMount() {
        firebasePlayers.once('value')
        .then((snapshort) => {
            const players = firebaseLooper(snapshort);

            this.setState({
                isLoading: false,
                players: reverseArray(players)
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <AdminLayout>
                <div>
                    <Paper>
                       <Table>
                           <TableHead>
                               <TableRow>
                                   <TableCell>First Name</TableCell>
                                   <TableCell>Last Name</TableCell>
                                   <TableCell>Number</TableCell>
                                   <TableCell>Position</TableCell>
                               </TableRow>
                           </TableHead>
                           <TableBody>
                               {
                                   this.state.players ?
                                   this.state.players.map((player, i) => (
                                       <TableRow key={i}>
                                           <TableCell>
                                               <Link to={`/admin_players/add_players/${player.id}`}>
                                                   {player.name}
                                               </Link>
                                           </TableCell>
                                           <TableCell>
                                           <Link to={`/admin_players/add_players/${player.id}`}>
                                                   {player.lastname}
                                               </Link>
                                           </TableCell>
                                           <TableCell>
                                               {player.number}
                                           </TableCell>
                                           <TableCell>
                                             {player.position}
                                           </TableCell>
                                       </TableRow>
                                   ))
                                   : null
                               }
                           </TableBody>
                       </Table>
                    </Paper>
                <div className="admin_progress">
                    { this.state.isloading ?
                    <CircularProgress thickness={7} 
                    style={{color: '#98c5e9'}}/>
                 :''
                 }
                </div>
                </div>
            </AdminLayout>
         );
    }
}

export default AdminPlayers;