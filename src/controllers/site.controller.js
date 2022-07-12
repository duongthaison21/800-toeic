const siteController = {
    home: (req, res, next) => {
        try {
            res.status(200).render('home');
        }
        catch (err) {
            res.status(404);
        }
    },

    search: (req, res, next) => {
        try {
            res.status(200).json({search: 'Search'});
        }
        catch (err) {
            res.status(404);
        }
    }
}

module.exports = siteController;