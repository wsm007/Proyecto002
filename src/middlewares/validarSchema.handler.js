export function validarSchema (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      res.status(400).json({
        Error: "Solicitud incorrecta.",
        Mensaje: error.details.map((x) => x.message)
      })
    } else {
      next();
    }
  }
}
