import { serve } from 'https://deno.land/std@0.103.0/http/server.ts';

const server = serve({ port: 3000 });

for await(const req of server) {
    req.respond({ body: "hellow world" });
}