module.exports = app => {
    app.models.user.initializeAssociations();
}