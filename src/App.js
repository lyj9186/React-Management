import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
  root: {
    width: '100%',
    maginTop: theme.spacing.unit * 3,
    overflow: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
  'id': 1,
  'img': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'brithday': '910806',
  'job': '대학생'
},
{
  'id': 2,
  'img': 'https://placeimg.com/64/64/2',
  'name': '이용준',
  'brithday': '910526',
  'job': '사장님'
},
{
  'id': 3,
  'img': 'https://placeimg.com/64/64/3',
  'name': '윤우식',
  'brithday': '910922',
  'job': '프로그래머'
}
]



class App extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {customers.map(c => {  return  ( <Customer key={c.id}  id={c.id} img={c.img} name={c.name} brithday={c.brithday} job={c.job}/>  ) })  }
          </TableBody>
        </Table>
      </Paper>
          );
    }

}

export default withStyles(styles)(App);
