module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/weatherapp/" : "/",

  transpileDependencies: ["vuetify"],
};
