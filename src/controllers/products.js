exports.getProducts = (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'Ogiso Setsuna',
      price: 0,
    },
    {
      id: 2,
      name: 'Touma Kazusa',
      price: 0,
    },
  ]);
  next();
};

exports.createProduct = (req, res, next) => {
  const data = req.body;
  res.json({
    message: 'product created!',
    data: {
      id: data.id,
      name: data.name,
      price: data.price,
    },
  });
  next();
};
