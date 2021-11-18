import { severHttp } from "./app";




const port = 4000;
severHttp.listen(port, () => console.log(`Server is running in: ${port}`));