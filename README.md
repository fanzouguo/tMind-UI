# tmind-ui

### Project setup
```
yarn add tmind-ui
```

### get your own build
```
yarn build
```

### how to debug
if you want to preview the effect when debug, your should clone the whole repo from github first cause of the npm package is just a pared-down forlder. then you can like this:
```
yarn dev      // will run the example into localhost:8080
yarn debug    // will rebuild the lib forlder without neither git commit nor yarn publish. At the same
              // time the files in lib forlder will be copy to the example/.libTemp
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### What happend in build
```
1、The terminal console will be cleared;
2、The version tag in package.json file will be update(depends on your choose);
3、Application will be packed into ./lib folder;
4、Add & commit into git repo;
5、Push the builded files into remote github(if this project is link to remote git repo);
6、Pubulish the new version lib into npmJs, if this project is not privated(see the package.json -> private);
7、Then local repo store will reinstall with new version.(local repo store's location was set by .tMind file of tMind-Cli).
8、It's Done.
```

### about
Want more infomation, you can visit the offcial website of Shanghai smpoo soft Co.
[SMPOO](www.smpoo.om)
