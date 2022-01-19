import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
    id: String,
    text: String
};
let todos: Todo[] = [];

router.get('/todos', (ctx) => {
    ctx.response.body = {
        todos: todos
    };
});

router.post('/todos', (ctx) => {
    const data = ctx.request.body({ type: "json" });
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: data.value.text
    };
    todos.push(newTodo);
    ctx.response.body = {
        message: 'created todo',
        todo: newTodo
    };
});

router.put('/todos/:todoId', (ctx) => {
    const tid = ctx.params.todoId;
    const data = ctx.request.body({ type: "json" });
    const tindex = todos.findIndex(item => {
        return item.id === tid;
    });
    todos[tindex] = {
        id: todos[tindex].id,
        text: data.value.text
    };
    ctx.response.body = {
        message: 'updated todo'
    };
});

router.delete('/todos/:todoId', (ctx) => {
    const tid = ctx.params.todoId;
    todos = todos.filter(item => {
        item.id !== tid;
    });
    ctx.response.body = {
        message: 'deleted todo'
    };
});

export default router;