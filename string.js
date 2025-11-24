const client = require('./client')

async function init() {
    // await client.set("msg:2", "i am fine");
    await client.expire("msg:2", 10);
    const result = await client.get("msg:2");
    console.log("Result -> ", result);
}

init();