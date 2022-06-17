import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import customTheme from "../../theme"
import TableData from '../../Interfaces';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: customTheme.palette.primary.dark,
    color: customTheme.palette.primary.contrastText,
    fontSize: 18,
  }
}));

type HeadCell<Type> = {
  id: Extract<keyof Type, string>;
  label: string;
};

type TableProps<Type> = {
  heads: HeadCell<Type>[];
  rows: Array<Type|TableData>;
}

export function UsersTable<T>({heads, rows}: TableProps<T>) { 
  const ColumnsKeys = heads.map((item: HeadCell<T>) => item.id);
  
  return (
    <div>
    <TableContainer sx={{maxWidth: 1400}} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {heads.map((head, headKey) => {
              return <StyledTableCell key={headKey}>{head.label}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowKey) => {
            return (
              <TableRow key={rowKey}>
                {ColumnsKeys.map((column: keyof T, columnKey) => {
                  return <StyledTableCell key={columnKey}>{row[column]}</StyledTableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}