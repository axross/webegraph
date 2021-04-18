import { Application, Router } from "https://deno.land/x/oak@v7.0.0/mod.ts";
import { handlePing } from "./src/handlers/handle_ping.ts";
import { handleUrl } from "./src/handlers/handle_url.ts";

const app = new Application();
const router = new Router();

router.get("/", handlePing);
router.get("/:url(.+)", handleUrl);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
