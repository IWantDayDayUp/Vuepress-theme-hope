# Vuepress-theme-hope

Vuepress-theme-hope Web site

home page [here](https://IWantDayDayUp.github.io/Vuepress-theme-hope/)

## 疑难解答

### 1. Github Action Workflows

问题描述: `Install pnpm` 阶段出现以下错误

```cmd
Error: No pnpm version is specified.
Please specify it by one of the following ways:
  - in the GitHub Action config with the key "version"
  - in the package.json with the key "packageManager" (See https://nodejs.org/api/corepack.html)
```

解决办法:

- 推荐的第一条解决办法(GitHub Action...)不知道怎么改
- 按照第二条建议, 修改项目文件`package.json`, 增加`"packageManager": "pnpm@8.6.9",`

### 2. GitHub Action Workflows

问题描述: `Build Docs` 阶段出现以下错误

```cmd
RollupError: "useModel" is not exported by "node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.runtime.esm-bundler.js", imported by "node_modules/.pnpm/@vue+repl@2.5.5/node_modules/@vue/repl/dist/vue-repl.js".
```

解决办法: 确定使用最新版本与正确的依赖树

```cmd
pnpm dlx vp-update
# 或: npx vp-update
```

### 3. 404

问题描述: 顺利通过 `GitHub Action Workflows`, 点击`home page`后返回 `404`

解决办法:

- 进入GitHub仓库, 点击 `setting`, 找到 `Pages`
- 找到 `Branch`, 选择分支 `gh-pages`(GitHub官方推荐该分支, `main`也行)
