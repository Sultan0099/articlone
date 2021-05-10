import dev from "./dev";
import prod from "./prod";

console.log('Node env', process.env['NODE_ENV'])
console.log('dev', dev)

const keys = (process.env["NODE_ENV"].trim() === "test" || process.env["NODE_ENV"].trim() === "production") ? { ...prod } : { ...dev };

console.log('keys', keys)


export default keys;
