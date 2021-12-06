import latestGitignore from "./index.js";

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
})();
