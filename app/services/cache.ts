import util from 'util';
import { createClient } from 'redis';
import { REDIS_URL } from '../config';
import { PassThrough, Stream } from 'stream';

const CACHE_EXPIRATION = 24 * 60 * 60; // one day
const client = createClient();
export const cacheGet = util.promisify(client.get).bind(client);
export const cacheExists = util.promisify(client.exists).bind(client);
export const cacheSet = (key: string, value: string) =>
  new Promise((resolve, reject) => {
    client.set(key, value, 'EX', CACHE_EXPIRATION, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
export const cacheStream = (strm: Stream, key: string) => {
  const cacheStream = new PassThrough();
  strm.pipe(cacheStream);

  let cacheHeap = '';
  cacheStream.on('data', (chunk) => {
    console.log('chunk', chunk.toString());
    cacheHeap += chunk;
  });
  cacheStream.on('end', async () => {
    await cacheSet(key, cacheHeap);
  });
}