import { server } from "./server/Server";

const port = process.env.PORT || 5050;

server.listen(port, () => console.log('server listening on port ' + port));
