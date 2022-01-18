import { serve } from 'http://deno.land/std/http/server.ts';

const server = serve({ port: 3000 });

for await(const req of server) {
    req.respond({ body: "hellow world" });
}