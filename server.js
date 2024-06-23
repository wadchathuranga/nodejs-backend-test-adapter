const { Config } = require('./config');

const { PORT } = Config.APPLICATION;

const app = require('./src');

const onListeningLog = `NBST server is running on port : ${PORT} !!! - ${'http://localhost:4444/v1/api-docs/#/'}`;

const onListening = () => console.log(onListeningLog);

app.listen(PORT, onListening());

module.exports = app;