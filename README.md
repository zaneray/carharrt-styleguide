DEMO: https://zaneray.github.io/carharrt-styleguide/

# carhartt-styleguide
A light css framework and digital styleguide for Carhartt

## Styleguide Development

### Getting Started
- Navigate to the root of this directory and run `npm install`
- Run `npm run build` to initially build the CSS and JS
- Open the `index.html` file in the root of this directory in a browser to view the styleguide.

This project uses SCSS to write styles, and a main.js file for simple styleguide functionality.
These are compiled with package.json scripts to prepare the final package of assets in the dist folder.

### Developing
Run `npm run watch:css` to continually watch for changes in any of the scss files and compile them immediately.
Any changes in the main.js file need to be compiled with `npm run build:js`.

### Building & Deploying
In order to compile the styleguide code for deploying, run `npm run build` from the command line.  This will build
the css and js files needed for the static styleguide and code usage, and put them in the `dist` folder.  Merging/pushing any
code to the `master` branch will then automatically update the static styleguide which can be viewed [here](https://zaneray.github.io/carharrt-styleguide/).


## Using the Styleguide CSS Framework

### Compile CSS
To make use of the light CSS framework provided by this repository, simply copy the `/dist/css/main.css` file and include it
in the CSS build of your web application.  Ideally it is included as one of the first CSS files in that build, in order for the
styles defined for the main site and UI elements to be respected.  Any CSS styles that are in the build after this file will essentially
override it if there are any overlapping selectors.  
 
### Develop with examples
Once the `main.css` file has been included in your site/appication CSS build, you can make use of that CSS by following/copying the 
HTML code examples in the live digitial Styleguide.  
