exports.success = (req, res, message, status) => {
  res.status(status || 200).send({
    success: message,
    error: "",
  });
};

exports.error = (req, res, message, status) => {
  res.status(status || 500).send({
    success: "",
    error: message,
  });
};
