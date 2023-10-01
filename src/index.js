import app from './app.js';
import varEntorno from './config/config.js';

const PORT = varEntorno.port;

app.listen(PORT, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${PORT}.`);
});
