const mix = require('laravel-mix');
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + '/resources'
        }
    }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//for front section
mix.js('resources/front/tcjstech/js/app.js', 'public/front/tcjstech/js')
    .sass('resources/front/tcjstech/sass/app.scss', 'public/front/tcjstech/css')
    .copy('resources/front/tcjstech/assets', 'public/front/tcjstech/assets')
    //news section
    .js('resources/front/news/js/app.js', 'public/front/news/js')
    .sass('resources/front/news/sass/app.scss', 'public/front/news/css')
    .copy('resources/front/news/assets', 'public/front/news/assets')
    //admin section
    // .js('resources/admin/js/app.js', 'public/admin/js')
    // .sass('resources/admin/sass/app.scss', 'public/admin/css')
    // .copy('resources/admin/assets', 'public/admin/assets')
    // .version();
