import { severHttp } from "./app";
require('dotenv/config');


const port = process.env.PORT || 3000;
severHttp.listen(port, () => console.log(`Server is running in: ${port}`));