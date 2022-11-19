module.exports = global.config = {
  backend_url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://toyhouse-api.onrender.com",
};
