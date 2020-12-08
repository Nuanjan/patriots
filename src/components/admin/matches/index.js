import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
// import TableContainer from '@material-ui/core/TableContainer';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
//import AdminNav from '../nav/AdminNav';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class AdminMatches extends Component {
    state= {
        isloading: true,
        matches:[]
    }

componentDidMount() {

firebaseMatches.once('value')
.then(snapshort => {
    const matches = firebaseLooper(snapshort);
    this.setState({
        isloading: false,
        matches: reverseArray(matches)
    })
})
}
    render() {
        return (
           <AdminLayout>
               <div>
                   <Paper>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Date</TableCell>
                                  <TableCell>Matches</TableCell>
                                  <TableCell>Result</TableCell>
                                  <TableCell>Final</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {
                                  this.state.matches ?
                                  this.state.matches.map((match, i) => (
                                      <TableRow key={i}>
                                          <TableCell>
                                              {match.date}
                                          </TableCell>
                                          <TableCell>
                                              <Link to={`/admin_matches/edit_match/${match.id}`}>
                                              {match.away}<strong> - </strong>{match.local}
                                              </Link>
                                          </TableCell>
                                          <TableCell>
                                              {match.resultAway}<strong> - </strong>{match.resultLocal}
                                          </TableCell>
                                          <TableCell>
                                            
                                              {match.final === 'Yes' ?
                                            <span className="matches_tag_red">Final</span>
                                            :  
                                            <span className="matches_tag_green">Not Played Yet</span>
                                            }
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
                :
                ''
                }
               </div>
               </div>
           </AdminLayout>
        );
    }
}

export default AdminMatches;