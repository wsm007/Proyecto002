import varEntorno from '../config/config.js';

export function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === varEntorno.apikey) {
    next();
  } else {
    res.status(401).send('No estas autorizado');
  }
}
