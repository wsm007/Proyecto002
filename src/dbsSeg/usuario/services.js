import { sql, conectarBD } from '../../db.js';


export async function signinService (Email) {
  const pool = await conectarBD();
  const result = await pool.request()
    .input('Email', sql.VarChar(50), Email)
    .execute('dbsSeg.usp_Usuario_SignIn')
  pool.close();
  return result;
};


export async function signupService (usuario, hashPassword) {
  const {Nombre, Email, UsuarioTipo, Estado, FechaAlta, RegistroActivo, FechaActualizacion, UsuarioActualizacion } = usuario;
  const pool = await conectarBD()
  const result = await pool.request()
    .input('Nombre', sql.VarChar(50), Nombre)
    .input('Email', sql.VarChar(50), Email)
    .input('Password', sql.VarChar(256), hashPassword)
    .input('UsuarioTipo', sql.VarChar(1), UsuarioTipo)
    .input('Estado', sql.VarChar(1), Estado)
    .input('FechaAlta', sql.DateTime, FechaAlta)
    .input('RegistroActivo', sql.Int, RegistroActivo)
    .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
    .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
    .output('UsuarioId', sql.Int)
    .execute('dbsSeg.usp_Usuario_SignUp')
  pool.close();
  return result;
};


// export async function createTaladroService ( taladro ) {
//   const { Codigo, Descripcion, RegistroActivo, FechaActualizacion, UsuarioActualizacion } = taladro;
//   const pool = await conectarBD()
//   const result = await pool.request()
//     .input('Codigo', sql.VarChar(30), Codigo)
//     .input('Descripcion', sql.VarChar(400), Descripcion)
//     .input('RegistroActivo', sql.Int, RegistroActivo)
//     .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
//     .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
//     .output('TaladroId', sql.Int)
//     .execute('dbsGeo.usp_Taladro_Create')
//   pool.close();
//   return result;
// };


// export async function updateTaladroService (TaladroId, taladro) {
//   const { Codigo, Descripcion, RegistroActivo, FechaActualizacion, UsuarioActualizacion} = taladro;
//   const pool = await conectarBD()
//   const result = await pool.request()
//     .input('TaladroId', sql.Int, TaladroId)
//     .input('Codigo', sql.VarChar(30), Codigo)
//     .input('Descripcion', sql.VarChar(400), Descripcion)
//     .input('RegistroActivo', sql.Int, RegistroActivo)
//     .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
//     .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
//     .execute('dbsGeo.usp_Taladro_Update')
//   pool.close();
//   return result;
// };


// export async function deleteTaladroService (TaladroId) {
//   const pool = await conectarBD()
//   const result = await pool.request()
//     .input('TaladroId', sql.Int, TaladroId)
//     .execute('dbsGeo.usp_Taladro_Delete')
//   pool.close();
//   return result;
// };