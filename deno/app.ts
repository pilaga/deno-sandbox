import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts';

const app = new Application();

app.use(async (ctx, next) => {
  console.log('middleware!');
  await next();
});

app.use(async (ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*'); //allow every domain to send requests
  ctx.response.headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); //allows methods
  ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); //alows content-type header to be set
  await next();
})

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });