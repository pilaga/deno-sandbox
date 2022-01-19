import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
    id: String,
    text: String
};
let todos: Todo[] [];

router.get('/todos', (ctx) => {
    ctx.response.body = {
        todos: todos
    };
});

router.post('/todos', (ctx) => {});

router.put('/todos/:todoId', (ctx) => {});

router.delete('/todos/:todoId', (ctx) => {});

export default router;