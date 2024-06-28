# vue-deploy

VueJS project using Vue Cli for deployment and Vite for preview.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### To deploy to Github Pages
```
npm run deploy
```

## Adding a new page

To add a page :
1. create 3 files in the root, `page-name.html`, `page-name.js` and `page-name.vue`. Link them appropriately.
2. add them in `vite.config.js`
3. add them in `vue.congif.js`
4. don't forget to update `BaseNav.vue` if needed

