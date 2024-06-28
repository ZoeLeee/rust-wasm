import init, { greet } from './pkg/rust_wasm.js';

async function run() {
  await init();
  alert(greet("World"));
}

run();