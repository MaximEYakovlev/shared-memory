const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });
buffer.grow(12);

const uint8Array = new Uint8Array(buffer);
