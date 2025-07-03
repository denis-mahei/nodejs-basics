import express from 'express';

const exp = express();

exp.get('/contacts/', (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully get contacts',
    data: [],
  });
});
exp.get('/contacts/:id', (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully get contacts',
    data: { id: req.params.id },
  });
});

export default exp;
