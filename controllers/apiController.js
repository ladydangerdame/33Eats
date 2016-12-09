function index(req, res) {
  res.json({
    message: "Welcome to 33Eats!",
    base_url: "http://localhost:3000/api/posts",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
