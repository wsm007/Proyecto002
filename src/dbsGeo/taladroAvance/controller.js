import { 
  getTaladroAvancesService,
  getTaladroAvanceService,
  createTaladroAvanceService,
  updateTaladroAvanceService,
  deleteTaladroAvanceService
} from './service.js';


export async function getTaladroAvances(req, res) {
  try {
    const TaladroId = req.params.TaladroId;
    const result = await getTaladroAvancesService(TaladroId);

    res.status(200).json({
      Registros: result.rowsAffected[0] ,
      Mensaje: "1",
      Detalle: result.recordset
    })

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function getTaladroAvance(req, res) {
  try {
    const TaladroId = req.params.TaladroId;
    const TaladroAvanceId = req.params.TaladroAvanceId;
    const result = await getTaladroAvanceService(TaladroId,TaladroAvanceId);
    
    // Verificar si el Avance existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
          Mensaje: "Avance no encontrado"
      })
    } else {
      res.status(200).json({
        Registros: result.rowsAffected[0],
        Mensaje: "2",
        Detalle: result.recordset
      })
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function createTaladroAvance(req, res, next) {
  try {
    const taladroAvance = req.body;
    const result = await createTaladroAvanceService(taladroAvance);
    res.status(200).json({
      Id: result.output.TaladroId,
      Registros: result.rowsAffected[0],
      Mensaje: "El Avance se creó correctamente"
    })
  } catch (error) {
    if (error.number == 2601) {
      return res.status(409).json({
        Mensaje: "El Avance ya existe"
      })
    }
    next(error);
  }
}


export async function updateTaladroAvance(req, res, next) {
  try {
    const TaladroAvanceId = req.params.TaladroId;
    const taladroAvance = req.body;
    const result = await updateTaladroAvanceService(TaladroAvanceId, taladroAvance);

    // Verificar si la Taladro existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
          Mensaje: "Avance no encontrado"
      })
    } else {
      res.status(200).json({
        Id: result.output.TaladroId,
        Registros: result.rowsAffected[0],
        Mensaje: "El Avance se actualizó correctamente"
      })
    }
  } catch (error) {
    if (error.number == 2601) {
        return res.status(409).json({
          Mensaje: "El Avance ya existe"
        })
    }
    next(error);
  }
}


export async function deleteTaladroAvance(req, res) {
  try {
    const TaladroId = req.params.TaladroAvanceId;
    const result = await deleteTaladroAvanceService(TaladroAvanceId);

    // Verificar si el Taladro existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
        Mensaje: "Avance no encontrado"
      })
    } else {
      res.status(200).json({
        Id: result.output.TaladroId,
        Registros: result.rowsAffected[0],
        Mensaje: "El Avance se eliminó correctamente"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}