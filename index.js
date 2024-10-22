const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
    buffer.grow(12);
}

const uint8Array = new Uint8Array(buffer);

uint8Array[0] = 2;

Atomics.add(uint8Array, 0, 5);

console.log(Atomics.load(uint8Array, 0));