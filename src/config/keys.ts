import dev from "./dev";
import prod from "./prod";

const keys = process.env["NODE_ENV"].trim() === "production" ? { ...prod } : { ...dev };



export default keys;