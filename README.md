SceneVR Sample Files
====================

This repo provides a number of sample SceneVR scenes to help get you started with building your own one. For a more complete guide, see [the getting started page](http://www.scenevr.com/getting-started.html).

Quick start
-----------

 * Clone this repo

 * Download your NPM dependencies

    ```
    > npm install 
    ```

 * Start the server

    ```
    > npm start
    ```

Building 
--------

The code comes with a Gulpfile that will help you manage dependencies in your scripts. Gulp is a JavaScript build tool.

To make use of this, create a JavaScript file called `src/<name>.js`, for a scene called `<name>.xml`. For example, the source code for `wave.xml` is in `src/wave.js`

Then, in your XML scene, include the file `dist/<name>.js`. For example, in wave.xml, we include:

  <script src="./dist/wave.js"></script>

Finally, we can run gulp to process our files. If you don't already have gulp installed, you can do it like this:

    > npm install -g gulp

Then run this script in a separate shell window. It will watch for changes to `src/*.js` files, recompile them, and trigger a server restart automatically.

    > gulp

If you just wish to recompile as a one-off step, you can run this:

    > gulp browserify
