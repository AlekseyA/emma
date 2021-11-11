import { cpus } from 'os';
import cluster from 'cluster';
import process from 'process';
import app from './app';

if (cluster.isMaster) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(8080, () => console.log('Server running at 8080'));
  console.log(`Worker ${process.pid} started`);
}
