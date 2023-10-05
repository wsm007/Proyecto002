import { 
  getTaladrosService,
  getTaladroService,
  createTaladroService,
  updateTaladroService,
  deleteTaladroService
} from './service.js';


export async function getTaladros(req, res) {
  try {
    const result = await getTaladrosService();

    res.status(200).json({
      Registros: result.rowsAffected[0] ,
      Detalle: result.recordset
    })

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function getTaladro(req, res) {
  try {
    const TaladroId = req.params.TaladroId;
    const result = await getTaladroService(TaladroId);
    
    // Verificar si el Taladro existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
          Mensaje: "Taladro no encontrada"
      })
    } else {
      res.status(200).json({
        Registros: result.rowsAffected[0],
        Detalle: result.recordset
      })
    }

    //res.json(taladro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function createTaladro(req, res, next) {
  try {
    const taladro = req.body;
    const result = await createTaladroService(taladro);
    res.status(200).json({
      Id: result.output.TaladroId,
      Registros: result.rowsAffected[0],
      Mensaje: "El Taladro se creó correctamente"
    })
  } catch (error) {
    if (error.number == 2601) {
      return res.status(409).json({
        Mensaje: "El Taladro ya existe"
      })
    }
    next(error);
  }
}


export async function updateTaladro(req, res, next) {
  try {
    const TaladroId = req.params.TaladroId;
    const taladro = req.body;
    const result = await updateTaladroService(TaladroId, taladro);

    // Verificar si la Taladro existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
          Mensaje: "Taladro no encontrado"
      })
    } else {
      res.status(200).json({
        Id: result.output.TaladroId,
        Registros: result.rowsAffected[0],
        Mensaje: "El Taladro se actualizó correctamente"
      })
    }
  } catch (error) {
    if (error.number == 2601) {
        return res.status(409).json({
          Mensaje: "El Taladro ya existe"
        })
    }
    next(error);
  }
}


export async function deleteTaladro(req, res) {
  try {
    const TaladroId = req.params.TaladroId;
    const result = await deleteTaladroService(TaladroId);
    // Verificar si el Taladro existe
    if (result.rowsAffected[0] == 0) {
      res.status(404).json({
        Mensaje: "Taladro no encontrado"
      })
    } else {
      res.status(200).json({
        Id: result.output.TaladroId,
        Registros: result.rowsAffected[0],
        Mensaje: "El Taladro se eliminó correctamente"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}