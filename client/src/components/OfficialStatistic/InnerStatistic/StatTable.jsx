import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Индекс потребительских цен, фиксированные веса', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс потребительских цен, фиксированные веса', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс цен производителей', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс оптовых цен на товары', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс оптовых цен ', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс потребительских цен, фиксированные веса', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс потребительских цен, фиксированные веса', 'PDF', 'CSV', 'JSON', 'XML'),
  createData('Индекс цен производителей', 'PDF', 'CSV', 'JSON', 'XML'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

export default function StatTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Индекс потребительских цен</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>

          {/* Dessert (100g serving)
          Calories
          Fat&nbsp;(g)
          Carbs&nbsp;(g)
          Protein&nbsp;(g)
           */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
