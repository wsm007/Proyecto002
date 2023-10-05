import { sql, conectarBD } from '../../db.js';


export async function getTaladroAvancesService (TaladroId) {
  const pool = await conectarBD()
  const result = await pool.request()
  .input('TaladroId', sql.Int, TaladroId)
  .execute('dbsGeo.usp_TaladroAvance_Read')
  pool.close();
  return result;
};


export async function getTaladroAvanceService (TaladroId,TaladroAvanceId) {
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroId)
    .input('TaladroAvanceId', sql.Int, TaladroAvanceId)
    .execute('dbsGeo.usp_TaladroAvance_ReadById')
  pool.close();
  return result;
};


export async function createTaladroAvanceService ( taladroAvance ) {
  const { TaladroId, Fecha, Turno, TipoDiametro, Desde, Hasta, FechaActualizacion, UsuarioActualizacion } = taladroAvance;
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroId)
    .input('Fecha', sql.Date, Fecha)
    .input('Turno', sql.VarChar(1), Turno)
    .input('TipoDiametro', sql.Int, TipoDiametro)
    .input('Desde', sql.Decimal(9, 2), Desde)
    .input('Hasta', sql.Decimal(9, 2), Hasta)
    .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
    .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
    .output('TaladroAvanceId', sql.Int)
    .execute('dbsGeo.usp_TaladroAvance_Create')
  pool.close();
  return result;
};


export async function updateTaladroAvanceService (TaladroAvanceId, taladroAvance) {
  const {TaladroId, Fecha, Turno, TipoDiametro, Desde, Hasta, FechaActualizacion, UsuarioActualizacion} = taladroAvance;
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroAvanceId', sql.Int, TaladroAvanceId)
    .input('TaladroId', sql.Int, TaladroId)
    .input('Fecha', sql.Date, Fecha)
    .input('Turno', sql.VarChar(1), Turno)
    .input('TipoDiametro', sql.Int, TipoDiametro)
    .input('Desde', sql.Decimal(9, 2), Desde)
    .input('Hasta', sql.Decimal(9, 2), Hasta)
    .input('FechaActualizacion', sql.DateTime, FechaActualizacion)
    .input('UsuarioActualizacion', sql.VarChar(50), UsuarioActualizacion)
    .execute('dbsGeo.usp_TaladroAvance_Update')
  pool.close();
  return result;
};


export async function deleteTaladroAvanceService (TaladroAvanceId) {
  const pool = await conectarBD()
  const result = await pool.request()
    .input('TaladroId', sql.Int, TaladroAvanceId)
    .execute('dbsGeo.usp_Taladro_Delete')
  pool.close();
  return result;
};