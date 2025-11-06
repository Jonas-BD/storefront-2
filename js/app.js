import { HomePage } from "./controllers/homePage.js";
import { ProductPage } from "./controllers/productController.js";
import { router } from "./router/index.js";

router({
    '/': () => ProductPage(),
}, '#app')