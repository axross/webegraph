import {
  RouterMiddleware,
  Status,
} from "https://deno.land/x/oak@v7.0.0/mod.ts";

export const handlePing: RouterMiddleware = (context) => {
  context.response.status = Status.OK;
};
