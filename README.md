# await latestGitignore({pool, needs});

从 `github/gitignore` 项目中获取最新模板。[Gitignore API](https://docs.github.com/cn/rest/reference/gitignore) 提供的模板有限。

## 安装

```shell
# 使用 Pnpm
$ pnpm add @iyowei/latest-gitignore

# 使用 NPM
$ npm i @iyowei/latest-gitignore

# 使用 Yarn
$ yarn add @iyowei/latest-gitignore
```

## 使用

- `pool` {Array} 下载链接池，**默认：** `[]`，如果事先没有下载链接，可不提供；
- `needs` {Array} 需被 Git 忽略的内容主题, 参见 [github/gitignore](https://github.com/github/gitignore)，文件名即类型名称，保留大小写，**默认：** `[]`；
- 返回: {Object} 扫描到的文件夹、文件，
  - `error` {Boolean} 出错与否；
  - `message` {String} 操作结果描述；
  - `gitignore` {Array} 下载到的模板，出错时不提供，写入文件前需要先处理成文本串；
  - `downloadUrls` {Array} **所有模板** 的下载链接，出错时不提供；

```javascript
import latestGitignore from 'latest-gitignore';

(async () => {
  const rslt = await latestGitignore({
    needs: [
      "macOS",
      "Windows",
      "Linux",
      "Node",
      "VisualStudioCode",
      "SublimeText",
      "CVS",
      "Diff",
      "Vim",
      "TortoiseGit",
      "Diff",
      "Patch",
    ],
  });

  console.log(rslt);
  /**
   * {
   * error: false,
   * message: "成功获取指定 gitignore 模板",
   * gitignore: ['# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\nlerna-debug.log*\n\n# Diagnostic reports (https://nodejs.org/api/report.html)\nreport.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json\n\n# Runtime data\npids\n*.pid\n*.seed\n*.pid.lock\n\n# Directory for instrumented libs generated by jscoverage/JSCover\nlib-cov\n\n# Coverage directory used by tools like istanbul\ncoverage\n*.lcov\n\n# nyc test coverage\n.nyc_output\n\n# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)\n.grunt\n\n# Bower dependency directory (https://bower.io/)\nbower_components\n\n# node-waf configuration\n.lock-wscript\n\n# Compiled binary addons (https://nodejs.org/api/addons.html)\nbuild/Release\n\n# Dependency directories\nnode_modules/\njspm_packages/\n\n# TypeScript v1 declaration files\ntypings/\n\n# TypeScript cache\n*.tsbuildinfo\n\n# Optional npm cache directory\n.npm\n\n# Optional eslint cache\n.eslintcache\n\n# Microbundle cache\n.rpt2_cache/\n.rts2_cache_cjs/\n.rts2_cache_es/\n.rts2_cache_umd/\n\n# Optional REPL history\n.node_repl_history\n\n# Output of 'npm pack'\n*.tgz\n\n# Yarn Integrity file\n.yarn-integrity\n\n# dotenv environment variables file\n.env\n.env.test\n\n# parcel-bundler cache (https://parceljs.org/)\n.cache\n\n# Next.js build output\n.next\n\n# Nuxt.js build / generate output\n.nuxt\ndist\n\n# Gatsby files\n.cache/\n# Comment in the public line in if your project uses Gatsby and *not* Next.js\n# https://nextjs.org/blog/next-9-1#public-directory-support\n# public\n\n# vuepress build output\n.vuepress/dist\n\n# Serverless directories\n.serverless/\n\n# FuseBox cache\n.fusebox/\n\n# DynamoDB Local files\n.dynamodb/\n\n# TernJS port file\n.tern-port\n', ...],
   * downloadUrls: ['https://raw.githubusercontent.com/github/gitignore/main/Global/Linux.gitignore', ... ],
  }*/

})();
```
