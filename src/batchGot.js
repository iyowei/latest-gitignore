import { cpus } from "os";

import pMap from "p-map";
import got from "got";

import get from "./get.js";

// batchGot(urls, {got: {}, concurrency: 8})
const batchGot = async (urls = [], options = {}) => {
  const defaults = Object.assign(
    {
      got: {},
      concurrency: cpus().length,
    },
    options
  );

  const done = await pMap(
    urls,
    async (url) => get(await got(url, defaults.got), "body"),
    { concurrency: defaults.concurrency }
  );

  return done;
};

export default batchGot;
