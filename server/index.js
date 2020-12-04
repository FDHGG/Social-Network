import devBundle from './devBundle';
import template from '../template';
import express from 'express';
import path from 'path';

const app = express();

devBundle(app);
app.use('/dist', express.static(path.join(process.cwd(),'dist')));
app.use((req,res) => {
  return res.send(template());
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT,HOST,() => console.log(`App started at http://${HOST}:${PORT}`));