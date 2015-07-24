/**
 * build.config.js
 * Contains build resource location information
 */
module.exports = {

    build_dir: 'build',
    dist_dir: 'dist',

    app_files: {
        // source, but NO specs
        js: ['src/app/**/*.js', '!src/app/**/*.spec.js'],
        // our partial templates
        atpl: ['src/app/**/*.tpl.html'],
        // the index.html
        html: ['src/index.html'],
        // static assets
        assets: ['src/assets/**']
    },

    test_files: {
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    vendor_files: {
        js: [
            'vendor/angular/angular.js',
            'vendor/js-data/dist/js-data.js',
            'vendor/js-data-angular/dist/js-data-angular.js',
            'vendor/underscore/underscore.js',
            'vendor/angular-animate/angular-animate.js',
            'vendor/angular-aria/angular-aria.js',
            'vendor/angular-ui-router/release/angular-ui-router.js'
        ],
        css: [
        ],
        assets: [
        ]
    }
};