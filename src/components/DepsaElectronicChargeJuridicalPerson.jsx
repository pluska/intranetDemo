import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TablePagination from '@material-ui/core/TablePagination';
import { CheckBox, CheckBoxSharp, RadioButtonUnchecked } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@material-ui/core/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#444444',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const DepsaElectronicChargeJuridicalPerson = ({ options }) => {
  const rows = [
    createData('1', 'Edwin', '561615616', 'Activo'),
  ];



  const classes = useStyles();
  const [ListUser] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [age2, setAge2] = React.useState('');


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  //   const setListUser = [
  //     ['s','9069555','SFP $','263080','ejemplo JIMENZ TODE   ROBERTO IGNACIO','U$ 1600','10/04/2023','99655','',''],
  //     ['s','9065525','SFP $','263050','ejemplo JIMENZ TODE   ROBERTO IGNACIO','U$ 1600','10/04/2023','99655','',''],
  //     ['s','9069999','SFP S./','266680','ejemplo JIMENZ TODE   ROBERTO IGNACIO','U$ 1600','10/04/2023','99655','','']
  //  ];


  const setListUser = [
    {
      "T": "s",
      "NROSOLI": "9069555",
      "FONDO": "SFP $",
      "CODPART": "263080",
      "Participe": "ejemplo JIMENZ TODE   ROBERTO IGNACIO",
      "importe": "U$ 1600",
      "fechasoli": "10/04/2023",
      "prom": "99655",
      "": "",
      "": "",
      "": "",
      "": "",
      "canal": "Red de Agencias"
    },
    {
      "T": "s",
      "NROSOLI": "9069555",
      "FONDO": "SFP $",
      "CODPART": "263080",
      "Participe": "ejemplo JIMENZ TODE   ROBERTO IGNACIO",
      "importe": "U$ 1600",
      "fechasoli": "10/04/2023",
      "prom": "99655",
      "": "",
      "": "",
      "": "",
      "": "",
      "canal": "Red de Agencias"
    },
    {
      "T": "s",
      "NROSOLI": "9069555",
      "FONDO": "SFP $",
      "CODPART": "263080",
      "Participe": "ejemplo JIMENZ TODE   ROBERTO IGNACIO",
      "importe": "U$ 1600",
      "fechasoli": "10/04/2023",
      "prom": "99655",
      "": "",
      "": "",
      "": "",
      "": "",
      "canal": "Red de Agencias"
    }
  ];


  return (
    <div style={{ marginRight: 50, backgroundColor: '#FFFFFF' }}>
      <center>
        <Grid container style={{ marginTop: 20 }}>
          <Grid item xs={12} style={{ borderTop: 5, borderBottomWidth: 2, borderBottomColor: '#FF0000', }}>
            <h1 style={{ margin: 1, fontSize: '15pt', color: '#FF0000' }}>Cargo Electrónico de Documentos para enviar a Depsa  Persona Jurídica</h1>
          </Grid>
        </Grid>
      </center>

      <Grid container style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={1} >
        </Grid>

        <Grid item xs={3} style={{ paddingTop: 10, textAlign: 'left' }} >
          <TextField id="standard-basic" label="CDR" variant="standard" />
          <div>Documentos:</div>
          <a style={{ fontSize: 18 }}>Desde:</a>
          <TextField
            id="date"
            type="date"
            defaultValue="2023-05-23"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={6} style={{ paddingTop: 10, textAlign: 'left' }} >
          <TextField id="standard-basic" label="Oficina" variant="standard" style={{ width: '80%' }} />
          <div style={{ display: 'flex', width: '100%' }} >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ flexDirection: 'row' }}
            >
              <FormControlLabel value="female" control={<Radio />} label="de Operaciones" />
              <FormControlLabel value="male" control={<Radio />} label="Actualizados por Usuario" />
            </RadioGroup>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
              <a style={{ fontSize: 18 }}>Hasta:</a>

              <TextField
                id="date"
                type="date"
                defaultValue="2023-05-23"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <InputLabel id="demo-simple-select-label">Tipo Doc.</InputLabel>
              <Select
                value={age2}
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined2"
                // onChange={handleChangeCombo}
                label="Seleccionar"
                style={{ width: 120 }}
              >
                <MenuItem value={'1'} key={1}>{'Todos'}</MenuItem>
                <MenuItem value={'2'} key={2}>{'Suscripciones'}</MenuItem>
                <MenuItem value={'3'} key={3}>{'Rescates'}</MenuItem>
                <MenuItem value={'4'} key={4}>{'Afiliaciones Virtuales'}</MenuItem>
                <MenuItem value={'5'} key={5}>{'Actualizacion de Datos'}</MenuItem>
                <MenuItem value={'6'} key={6}>{'DJ Fuera de Perfil'}</MenuItem>
              </Select>


              <TextField id="standard-basic" label="Total de Operaciones" variant="standard" />
            </div>
          </div>
        </Grid>

        <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
          <div style={{ display: 'flex', flexDirection: 'column', }} >
            <Button variant="contained" style={{ backgroundColor: '#cc222842', color: '#cc2229', textTransform: 'none', width: '100%', marginLeft: 10, marginBottom: 5 }}  >
              Buscar
            </Button>
            <Button variant="outlined" style={{ backgroundColor: '#fff', color: '#000', textTransform: 'none', width: '100%', marginLeft: 10, marginBottom: 5 }}  >
              Imprimir
            </Button>
            <Button variant="outlined" style={{ backgroundColor: '#fff', color: '#000', textTransform: 'none', width: '100%', marginLeft: 10, marginBottom: 5 }}  >
              Salir
            </Button>
          </div>

        </Grid>
      </Grid>


      <div>
        <Grid container >
          <Grid item xs={1} >
          </Grid>
          <Grid item xs={10} >
            <TableContainer component={Paper}></TableContainer>

            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>T</StyledTableCell>
                  <StyledTableCell align="left">Nro.Solki</StyledTableCell>
                  <StyledTableCell align="left">Fondo</StyledTableCell>
                  <StyledTableCell align="left">Cod.Part</StyledTableCell>
                  <StyledTableCell align="left">Participe</StyledTableCell>
                  <StyledTableCell align="left">Importe</StyledTableCell>
                  <StyledTableCell align="left">Fch.Soli.</StyledTableCell>
                  <StyledTableCell align="left">Prom.</StyledTableCell>
                  <StyledTableCell align="left">Bol.</StyledTableCell>
                  <StyledTableCell align="left">Cont</StyledTableCell>
                  <StyledTableCell align="left">Dni</StyledTableCell>
                  <StyledTableCell align="left">Dof</StyledTableCell>
                  <StyledTableCell align="left">Fir</StyledTableCell>
                  <StyledTableCell align="left">Ren.</StyledTableCell>
                  <StyledTableCell align="left">2 Doc</StyledTableCell>
                  <StyledTableCell align="left">Djur.</StyledTableCell>
                  <StyledTableCell align="left">Canal</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  setListUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element, key) =>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">{element.T}</StyledTableCell>
                      <StyledTableCell align="left">{element.NROSOLI}</StyledTableCell>
                      <StyledTableCell align="left">{element.FONDO}</StyledTableCell>
                      <StyledTableCell align="left">{element.CODPART}</StyledTableCell>
                      <StyledTableCell align="left">{element.Participe}</StyledTableCell>
                      <StyledTableCell align="left">{element.importe}</StyledTableCell>
                      <StyledTableCell align="left">{element.fechasoli}</StyledTableCell>
                      <StyledTableCell align="left">{element.prom}</StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          className='ng-pristine ng-valid ng-touched'
                          type="checkbox"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">{element.canal}</StyledTableCell>
                    </StyledTableRow>
                  )}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 1 * emptyRows }}>
                    <TableCell colSpan={6} style={{ display: 'none' }} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={ListUser.length}
              rowsPerPage={rowsPerPage}
              page={page}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
          <Grid item xs={1} >
          </Grid>
        </Grid>



        <div style={{ paddingBottom: 10 }}>
          <Grid container style={{ marginTop: 10 }}>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={1} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>Bol.:Boleta</a>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>Cont.:Contrato</a>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>D Jur:Declaracion Jurada</a>
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingBottom: 10 }}>
          <Grid container style={{ marginTop: 10 }}>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={1} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>Ren.:Reniec</a>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>2 Doc.:2 Documento para Extranjeros</a>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
              <TextField
                className='ng-pristine ng-valid ng-touched'
                type="checkbox"
              />
              <a style={{ fontSize: 18 }}>:Doc.obligatorio</a>
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingBottom: 10 }}>
          <Grid container style={{ marginTop: 10 }}>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={1} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>Fir.:Firma</a>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: 10, textAlign: 'left' }} >
              <a style={{ fontSize: 18 }}>DOF:Declaracion Origen de Fondos</a>
            </Grid>
          </Grid>
        </div>


      </div>
    </div>
  )
}

export default DepsaElectronicChargeJuridicalPerson