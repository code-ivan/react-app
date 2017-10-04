import express from 'express'
import cors from 'cors';

const server = express()

if (__DEV__) {
  const webpack = require('../webpack.server').default
  webpack(server)
  server.use(express.static('src/static'));
} else {
  server.use(express.static('dist'));
  server.use(express.static('lib/static'));
}

//cors
server.use(cors());

//routing pages
server.all('*', async (req, res) => {
  //rendering on serverside
  const { render } = require('./server')
  const { status, redirect, body } = await render(req.path)
  //load page
  res.send(body);
});

export default server
