const http = require('http');
const PORT = process.env.PORT || 3000;
const app = http.createServer();
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});