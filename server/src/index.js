const http=require('http')
const {getCharById}=require('./controllers/getCharById')

http.createServer((req, res) => {
        const { url } = req;
        res.setHeader('Access-Control-Allow-Origin', '*');

        if(url.includes("/rickandmorty/character")){
            const id=url.split('/').at(-1)
            getCharById(res,+id)
            return
        }

        res.writeHead(404, { "Content-type": "text/plain" });
        res.end('Personaje no encontrado')
    })
    .listen(3001, "localhost");
