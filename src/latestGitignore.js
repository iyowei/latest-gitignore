import debug from "debug";

import getTemplatesAllUrls from "./getTemplatesAllUrls.js";
import getTemplatesNeededUrls from "./getTemplatesNeededUrls.js";
import batchGot from "./batchGot.js";

const log = debug("LG:log");

/**
 * latestGitignore({pool, needs});
 *
 * @param {Array} pool - 下载链接池
 * @param {Array} needs - 需被 Git 忽略的内容主题
 */
export default async ({ pool = [], needs = [] }) => {
  let gotDownloadUrls;

  if (Array.isArray(pool) && !pool.length) {
    // 即使 `github/gitignore` 项目分支变动了，导致链接发生变化也没关系，此处每次获取到的都是最新链接
    gotDownloadUrls = await getTemplatesAllUrls();
    log(`获取到 ${gotDownloadUrls.length} 个模板`);
  } else {
    log("从缓存中获取下载列表");
    gotDownloadUrls = pool;
  }

  const targets = await getTemplatesNeededUrls(gotDownloadUrls, needs);
  console.log(targets);
  log(`待下载 ${targets.length} 个模板`);

  const gotGitignore = await batchGot(targets);

  return {
    error: false,
    message: "成功获取指定 gitignore 模板",

    gitignore: gotGitignore,
    downloadUrls: gotDownloadUrls,
  };
};
