import { HomePage } from "./controllers/homePage.js";
import { router } from "./router/index.js";

router({
    '/': () => HomePage(),
}, '#app')