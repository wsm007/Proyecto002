import bcrypt from 'bcrypt';
import { 
  signinService,
  signupService
} from './services.js';

export const signin = async (req, res) => {
  try {
    const {Email, Password } = req.body;
    const result = await signinService(Email);
    
    // Verificar si el Email existe
    if (!result.recordset[0]) {
      return res.status(400).json({
        message: "El correo indicado no está registrado."
      })
    }
  
    // Validar la contraseña
    const validPassword = await bcrypt.compare(Password, result.recordset[0].Password);

    if (!validPassword) {
      return res.status(400).json({
        message: "La contraseña no es correcta"
      })
    }
  
    if (result.recordset[0].RegistroActivo == 0) {
      return res.status(400).json({
        message: "El usuario está inactivo."
      })
    }

    // Si el usuario es válido
    res.status(200).json({
      message: 'Bienvenido ' + result.recordset[0].Nombre
    })

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const signup = async (req, res, next) => {
  const { Password, ConfirmPassword } = req.body;

  // Validar que las contraseñas coincidan
  if (Password != ConfirmPassword) {
    return res.status(400).json({
      Mensaje: "Las contraseñas no coinciden"
    })
  }
  // Encriptar la contraseña
  const hashPassword = await bcrypt.hash(Password, 10);

  try {
    const usuario = req.body;
    const result = await signupService(usuario, hashPassword);
    res.status(200).json({
      Id: result.output.UsuarioId,
      Registros: result.rowsAffected[0],
      Mensaje: "Usuario creado correctamente"
    })

  } catch (error) {
    if (error.number == 2601) {
      return res.status(409).json({
        Mensaje: "El usuario ya existe"
      })
    }

    next(error);
  }
}

// export const signout = (req, res) => {

//   return res.status(200).json({
//     Mensaje: "Sesión cerrada."
//   })
// }

// export const profile = async (req, res) => {

//   // Conexion a la base de datos
//   const pool = await getConnection();

//   // Ejecutar el procedimiento almacenado
//   const result = await pool.request()
//   .input('UsuarioId', sql.Int, req.UsuarioId)
//   .execute('dbsSeg.usp_Usuario_ReadById')

//   return res.status(200).json(result.recordset[0])
// }
