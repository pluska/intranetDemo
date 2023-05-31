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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@material-ui/core/Select';



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


const DepsaElectronicChargeNaturalPerson = ({ options }) => {
  const rows = [
    createData('1', 'Edwin', '561615616', 'Activo'),
  ];



  const classes = useStyles();
  const [ListUser] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [age2, setAge2] = React.useState('');


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

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
    <div style={{backgroundColor: '#FFFFFF', padding:"0 50px" }}>
      <center>
        <Grid container style={{ marginTop: 20 }}>
          <Grid item xs={12} style={{ borderTop: 5, borderBottomWidth: 2, borderBottomColor: '#FF0000', }}>
            <h1 style={{ margin: 1, fontSize: '15pt', color: '#FF0000' }}>Cargo Electrónico de Documentos para enviar a DEPSA  Persona Natural</h1>
          </Grid>
        </Grid>
      </center>


      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={10}>

          <Grid container spacing={2} style={{ textAlign: "left" }} >
            <Grid item xs={4}>
              <TextField id="standard-basic" label="CDR" variant="standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Oficina" variant="standard" style={{ width: '80%' }} />
            </Grid>
            <Grid item xs={4}>
              Documentos:
            </Grid>
            <Grid item xs={8}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ flexDirection: 'row' }}
              >
                <FormControlLabel value="female" control={<Radio />} label="de Operaciones" />
                <FormControlLabel value="male" control={<Radio />} label="Actualizados por Usuario" />
              </RadioGroup>
            </Grid>
            <Grid item xs={4}>
              Desde:  <TextField
                id="date"
                type="date"
                defaultValue="2023-05-23"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                
                <div>
                Hasta: <TextField
                  id="date"
                  type="date"
                  defaultValue="2023-05-23"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </div>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">Tipo Doc.</InputLabel>
                  <Select
                    value={age2}
                    labelId="demo-simple-select-outlined-label2"
                    id="demo-simple-select-outlined2"
                    // onChange={handleChangeCombo}
                    label="Seleccionar"
                    style={{ width: 200 }}
                  >
                    <MenuItem value={'1'} key={1}>{'Todos'}</MenuItem>
                    <MenuItem value={'2'} key={2}>{'Suscripciones'}</MenuItem>
                    <MenuItem value={'3'} key={3}>{'Rescates'}</MenuItem>
                    <MenuItem value={'4'} key={4}>{'Afiliaciones Virtuales'}</MenuItem>
                    <MenuItem value={'5'} key={5}>{'Actualizacion de Datos'}</MenuItem>
                    <MenuItem value={'6'} key={6}>{'DJ Fuera de Perfil'}</MenuItem>
                  </Select>
                </FormControl>

                <TextField id="standard-basic" label="Total de Operaciones" variant="standard" />
              </div>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={2}>
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
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TableContainer component={Paper}></TableContainer>

            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>T</StyledTableCell>
                  <StyledTableCell align="left">Nro.Soli</StyledTableCell>
                  <StyledTableCell align="left">Fondo</StyledTableCell>
                  <StyledTableCell align="left">Cod.Part.</StyledTableCell>
                  <StyledTableCell align="left">Participe</StyledTableCell>
                  <StyledTableCell align="left">Importe</StyledTableCell>
                  <StyledTableCell align="left">Fch.Soli.</StyledTableCell>
                  <StyledTableCell align="left">Prom.</StyledTableCell>
                  <StyledTableCell align="left">Bol.</StyledTableCell>
                  <StyledTableCell align="left">Cont</StyledTableCell>
                  <StyledTableCell align="left">DNI</StyledTableCell>
                  <StyledTableCell align="left">DOF</StyledTableCell>
                  <StyledTableCell align="left">Fir.</StyledTableCell>
                  <StyledTableCell align="left">Ren.</StyledTableCell>
                  <StyledTableCell align="left">2°Doc</StyledTableCell>
                  <StyledTableCell align="left">DJur.</StyledTableCell>
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
        </Grid>

      </div>

      <Grid container spacing={2} >
          <Grid item xs={10}>

          <Grid container spacing={2} style={{ textAlign: "left" }} >
          <Grid item xs={4}>
              Bol.: Boleta
            </Grid>
            <Grid item xs={4}>
              Cont.: Contrato
            </Grid>
            <Grid item xs={4}>
              DJur.: Declaracion Jurada
            </Grid>
            <Grid item xs={4}>
              Ren.:Reniec
            </Grid>
            <Grid item xs={4}>
              2° Doc.: 2° Documento para Extranjeros
            </Grid>
            <Grid item xs={4}>
              <TextField
                className='ng-pristine ng-valid ng-touched'
                type="checkbox"
              />
              :Doc.obligatorio
            </Grid>
            <Grid item xs={4}>
              Fir.: Firma
            </Grid>
            <Grid item xs={4}>
              DOF:Declaracion Origen de Fondos
            </Grid>
          </Grid>
            
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ backgroundColor: '#fff', color: '#000', textTransform: 'none', width: '100%', marginLeft: 10, marginBottom: 5 }}  >
              Grabar cambios
            </Button>
          </Grid>
        </Grid>
    </div>
  )
}

export default DepsaElectronicChargeNaturalPerson