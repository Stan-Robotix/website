# Stan Robotix 6622 - Website

VueJS project using Vite for deployment and preview.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Show the latest build in a localhost
```
npm run serve
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
1. create one folder in `./src` and create, inside two files : `page-name.vue` and `page-name.js`. Link them appropriately. 
2. add them in `vite.config.js`
3. don't forget to update `BaseNav.vue` if needed

