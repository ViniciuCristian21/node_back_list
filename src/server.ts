import { severHttp } from "./app";
require('dotenv/config');


const port = 3000;
severHttp.listen(process.env.PORT || port, () => console.log(`Server is running in: ${port}`));