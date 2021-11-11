import { Readable, PassThrough } from 'stream';
import JSONStream from 'JSONStream';
import { cacheGet, cacheStream } from '../services/cache';
import db from '../db';

const getOneAsStream = async (
  id: Number,
  fromDate: string,
  endDate: string
) => {
  const cached = await cacheGet(`${id}_${fromDate}_${endDate}`);
  if (cached) {
    console.log('hello', cached);
    return Readable.from(Buffer.from(cached));
  }
  const result = db('transactions')
    .select('merchant_id', 'user_id')
    .sum('amount as total')
    .where('user_id', id)
    .whereBetween('date', [
      fromDate,
      endDate
    ])
    .groupBy('merchant_id', 'user_id', 'date');
  
  const strm = result.stream().pipe(JSONStream.stringify());
  cacheStream(strm, `${id}_${fromDate}_${endDate}`)
  return strm;
};

export default {
  getOneAsStream,
};
