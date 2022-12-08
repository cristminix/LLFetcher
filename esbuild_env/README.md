# Esbuild + Typescript + Vue3.0组件库模板

## 功能介绍
-	typescript
-	esbuild打包编译
-	eslint代码规范检查
-	sass，postcss预处理
- browserSync本地开发服务

## 开发指南
请使用wecoder-cli初始化使用
```
# 安装cli

npm install -g wecoder-cli

# 初始化项目

wecoder init <project-name>

# 1.项目基本配置
# 2.选择基于esbuild的vue3.0组件库模板
# 3.等待初始化完成
# 4.修改esbuild.config.js中libraryName变量为包的名
cd <project-name>
```

安装依赖
```
npm install
# or
yarn
```

本地开发
```
npm run serve
# or
yarn serve
```


生产打包
```
npm run build
# or
yarn build
```

## 目录结构
```
...
packages --------------- 组件库源码
 - components ---------- 组件目录
  - Button ------------- 组件目录
   - index.ts ---------- 组件注册入口
   - src --------------- 组件源码
 - index.ts ----------- 组件库打包入口文件
examples -------------- 开发预览页面源码
 - main.ts ------------ 预览页入口文件
 - App.vue ------------ 预览页入口组件
 - index.html --------- 预览页htlm模板
types ----------------- ts注解文件目录
.editorconfig --------- 编辑器配置文件
.eslintignore --------- eslint检查忽略目录
.eslintrc ------------- eslint检查配置文件
esbuild.config.js ------ esbuild配置文件
tsconfig.json --------- ts编译配置文件
components.js --------- 单组件映射表
...
```

