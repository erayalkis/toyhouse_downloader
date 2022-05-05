module.exports = global.config = {
  backend_url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://toyhouse-rails-api.herokuapp.com",
};
