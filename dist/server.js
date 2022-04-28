"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv/config');
const port = process.env.PORT || 3000;
app_1.severHttp.listen(port, () => console.log(`Server is running in: ${port}`));
