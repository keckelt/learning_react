# :school_satchel: Learning React

I'm learning react and track code and resources here.

## :books: Resources

* [Einführung in React Video Series](https://www.youtube.com/playlist?list=PL6QrD7_cU23newNJV_5XMwfgvlFrIHo0_)  
  ![image](https://user-images.githubusercontent.com/10337788/116060722-68d9de00-a682-11eb-9caf-b74536099a16.png)
Source: https://www.thenativeweb.io/learning/techlounge-react

  * https://github.com/thenativeweb/techlounge-react
    * Part 1: Overview of React
    * Part 2: Hello World with React elements and JSX (and babel)
      * [babel](https://babeljs.io/docs/en/): converts code. For example, javascript with bleeding age ES2020 code, to backwards compatible ES5 code.
        Babel can also convert JSX to JavaScript.
        There are presets for common use cases, e.g., the react preset.
        babel has a separate config file at the project root.
    * Part 3: react components:  
      * atomic elment of react app
      * define components as classes or functions
      * props as a component's input
      * nesting components
    * Part 4: webpack
      * webpack config
        * rules: defines which files are processed how -> no rule != no loading of file .. its just taken as is
          * babel-loader JSX files need to be processed, because it's not vanilla JS and webpack doesn't know what to do with it --> apply babel-loader to .jsx (and .js)
          * css-loader/style-loader
            * css-loader: loads css as text, handles imports in CSS code
            * style-loader: applies the styles loaded by the css-loader
            * styles are applied by importing them in the JS code.
          * exclude: what should not be handled by this rule, even though the test is successful --> node_modules shouild not be touched again usually
        * `resolve: { extensions: [ '.js', '.jsx' ] }` let's me omit the file extension in imports
          webpack will try thje given extensions to find the right one
        * all files are combined and minimized to output file: bundle.js
      * webpack dev server
        * does not actually create files in `dist/`, but in memory due to better performance
        * [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/): copies html files.
          this is a plugin, not a loader because its just copied over
          * also adds bundle.js (or an other used JS code) to index.html
 * [Bulletproof React](https://github.com/alan2207/bulletproof-react) A simple, scalable, and powerful architecture for building production ready React applications. 
