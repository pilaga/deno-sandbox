const text = 'This is a test - should be stored in a file';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt', data)
.then(result => {
    console.log('wrote to file!');
})
.catch(err => console.log(err));