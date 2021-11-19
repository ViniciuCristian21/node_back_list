"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv/config');
const port = 3000;
app_1.severHttp.listen(process.env.PORT || port, () => console.log(`Server is running in: ${port}`));
