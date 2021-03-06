module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        app.db.sequelize.sync().done(() => {
            app.listen(app.get('port'), () => {
                console.log(`Rodando na porta ${app.get('port')}`);
            });
        })
    }
}