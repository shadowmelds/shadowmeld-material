# 影遁的个人网站

预览：[影遁的小站](https://shadowmeld.cool)

### 用到的库
- [Next.js](https://nextjs.org/) 开发框架
- [sharp](https://sharp.pixelplumbing.com/) 图像压缩
- [markdown-it](https://github.com/markdown-it/markdown-it) Markdown 解析

### 目录结构

```
.
|____app # 页面
|____app_module # 通用数据、组件
| |____component # 通用组件
|____public # 静态文件
| |____asset # 页面展示数据
|themes # CSS 主题
```

### 自定义页面展示数据

修改 `public/asset/*.json` 内容

### 自定义服务器

NextJS 不允许动态正式环境下修改静态文件，使用自定义服务器并在路径前加上 `/public` 以支持运行时动态查询静态文件

`server.js`

### 本地调试

```bash
npm install
npm run server
```

运行结果 [http://localhost:3000](http://localhost:3000)


### 部署

```
npm install
npm run build
chmod +x next-start.sh
./next-start.sh
```

### Markdown 本地调试热更新

热更新Markdown页面资料参考：[监听 Markdown 文件并热更新 Next.js 页面](https://gauliang.github.io/blogs/2022/watch-markdown-files-and-hot-load-the-nextjs-page/)

`watch.js`

运行一下命令以开启 Markdown 热更新，保存 md 文件短文页面会自动刷新
```
node watch
```

### 其他命令

```
# 查看后台运行的 node 程序进程 id
ps -ax | grep node 
```

---