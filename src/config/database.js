module.exports = {
  dialect: 'sqlite',
  storage: './src/database/db.sqlite',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  }
}