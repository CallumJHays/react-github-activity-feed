import React, { useEffect, useRef } from "react";
// @ts-ignore
import GithubActivity from "./github-activity.js";
import "./octicons/octicons.min.css";

export function GithubActivityFeed({
  user,
  repo = "*",
  limit = 20,
}: {
  user: string;
  repo?: string;
  limit?: number;
}) {
  // unsure what pattern should be preferred here,
  // the alternative would be to just pass a callback of into ref (ref={divEl => ...})
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      GithubActivity.feed({
        username: user,
        repository: repo == "*" ? null : repo,
        selector: `#${ref.current.id}`,
        limit,
      });
    }
  }, [user, repo, limit]);

  return <div id={genRandStr(16)} ref={ref} style={{ height: "100%" }} />;
}

function genRandStr(length: number) {
  // kudos to https://stackoverflow.com/a/1349426/1266662
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
