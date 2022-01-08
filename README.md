# litchi react moble

### 工程介绍

基于 React 全家桶搭建的工程化方案，是以 rem 适配的 h5 单页应用，该工程集成 路由、数据管理、Fetch 为一体。

#### 工程 features

- react-router-dom，以 React Suspense 和 lazy 组件实现路由懒加载
- 支持 配置化路由，在 config 文件下 route.ts 中配置对应的路由即可
- 支持 页面 title 切换，可在路由配置中配置对应的页面 title，当路由发生变化 页面 title 会自行切换
- 支持 hash 路由 和 history 路由，可通过配置 config/confi.js 中 history
- 设计稿支持 375px 和 750px，可通过配置 config/confi.js 中 pxtorem
- Fetch 封装 get、post、put、delete 等方法请求，并统一处理请求返回 code

### 项目命令

#### 安装项目依赖

```
npm install
```

#### 开发启动项目

```
npm run start
```

#### 构建项目

##### 构建哈希版 bundle

```
npm run build
```

##### 构建版本号 bundle

```
npm run build:version
```

##### 构建灰度版本号 bundle

```
npm run build:gray
```

##### 构建生成调试版本号 bundle

```
npm run build:watch
```

#### 分析、lint、测试

##### 构建信息分析

```
npm run build:analyze // 查看构建包信息
```

##### 语法检查 lint

```
npm run lint // 通过 eslint 检查 .js、.jsx、.ts、.tsx 语法
npm run lint:fix // 通过 eslint 检查并修复 .js、.jsx、.ts、.ts 语法
npm run stylelint // 通过 stylelint 检查样式语法
npm run stylelint:fix //通过 stylelint 检查并修复样式语法
```

##### 测试

```
npm run test // 运行测试
npm run test:coverage // 运行测试并生成覆盖率文件
npm run test:clean // 清除测试生成的覆盖率文件
npm run test:watch // 启动监听文件更改，更改时重新运行测试
```

### git 提交

git 提交前将会校验并修复 eslint 和 stylelint，还会运行所有测试，校验不通过会阻止 git 提交
