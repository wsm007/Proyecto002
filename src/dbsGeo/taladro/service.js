import { sql, conectarBD } from '../../db.js';


export async function getTaladrosService () {
  const pool = await conectarBD()
  const result = await pool.request()
    .execute('dbsGeo.usp_Taladro_Read')
  pool.close();
  return result;
};


export async function getTaladroService (TaladroId) {
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroId)
    .execute('dbsGeo.usp_Taladro_ReadById')
  pool.close();
  return result;
};


export async function createTaladroService ( taladro ) {
  const { Codigo, Descripcion, RegistroActivo, FechaActualizacion, UsuarioActualizacion } = taladro;
  const pool = await conectarBD()
  const result = await pool.request()
    .input('Codigo', sql.VarChar(30), Codigo)
    .input('Descripcion', sql.VarChar(400), Descripcion)
    .input('RegistroActivo', sql.Int, RegistroActivo)
    .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
    .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
    .output('TaladroId', sql.Int)
    .execute('dbsGeo.usp_Taladro_Create')
  pool.close();
  return result;
};


export async function updateTaladroService (TaladroId, taladro) {
  const { Codigo, Descripcion, RegistroActivo, FechaActualizacion, UsuarioActualizacion} = taladro;
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroId)
    .input('Codigo', sql.VarChar(30), Codigo)
    .input('Descripcion', sql.VarChar(400), Descripcion)
    .input('RegistroActivo', sql.Int, RegistroActivo)
    .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
    .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
    .execute('dbsGeo.usp_Taladro_Update')
  pool.close();
  return result;
};


export async function deleteTaladroService (TaladroId) {
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroId)
    .execute('dbsGeo.usp_Taladro_Delete')
  pool.close();
  return result;
};