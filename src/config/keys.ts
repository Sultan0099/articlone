import dev from "./dev";
import prod from "./prod";

console.log((process.env["NODE_ENV"].trim() === "test" || process.env["NODE_ENV"].trim() === "production") ? { ...prod } : { ...dev });

const keys = (process.env["NODE_ENV"].trim() === "test" || process.env["NODE_ENV"].trim() === "production") ? { ...prod } : { ...dev };



export default keys;