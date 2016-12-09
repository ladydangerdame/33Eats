function index(req, res) {
  res.json({
    message: "Welcome to Angular Pokemon App!",
    // documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "https://super-crud.herokuapp.com/pokemon",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
