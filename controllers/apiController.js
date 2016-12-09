function index(req, res) {
  res.json({
    message: "Welcome to 33Eats!",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;