const { Worker, isMainThread, parentPort, workerData } = require('node:worker_threads');

const createWorker = (sharedBuffer) => {
    return new Worker(__filename, {
        workerData: sharedBuffer
    });
}

if (isMainThread) {
    const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

    if (buffer.growable) {
        buffer.grow(12);
    }

    const uint8Array = new Uint8Array(buffer);

    const workerOne = createWorker(buffer);
    const workerTwo = createWorker(buffer);

    uint8Array[0] = 2;

    Atomics.add(uint8Array, 0, 5);

    console.log(Atomics.load(uint8Array, 0));
}







