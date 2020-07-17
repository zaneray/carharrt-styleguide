# carhartt-styleguide
A light css framework and digital styleguide for Carhartt

Live Styleguide: https://zaneray.github.io/carharrt-styleguide/

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

### Icons
In order to take advantage of the SVG icon set that is shown in the Styleguide, you will need to include the `/dist/icons/icons.html` file in your
web application.  This HTML file has the SVG markup of every icon shown in the Styleguide, wrapped in a single element that is visually hidden.
The strategy is to include this HTML file at the bottom of your web application build, so that it exists on every page, or at least on every page that 
uses these icons.  By having the visually hidden SVG reference in your web app markup, you can then display any SVG that has been defined in that 
markup by using the `<use>` tag strategy that is detailed in the Icons section of the Styleguide.

### Fonts
The CSS framework has been built to use Font Faces that reference font files which are defined at a specific path.  This path may need to change 
for your web application, and the Font Face declarations would also need to change.  The best strategy is to include the `main.css` file in your CSS build, and below that file declare new Font Faces that use the same setup as the font faces in `/src/scss/_fonts.scss`, with updated paths to the proper font files in your
application repository.
 
### Develop with examples
Once the `main.css` file has been included in your site/application CSS build, you can make use of that CSS by following/copying the 
HTML code examples in the live digitial Styleguide.  
