import React, { useEffect, useRef } from "react";
// @ts-ignore
import GithubActivity from "./github-activity.js";


/**
 * For this component to display correctly, a valid theme stylesheet must be imported (globally).
 * 
 * Two themes are provided:
 * - light: `import "react-github-activity-feed/dist/light.css";`
 * - dark: `import "react-github-activity-feed/dist/dark.css";`
 * 
 * Custom themes can be made by copying the light or dark theme and modifying the CSS.
 * 
 * PS: if the error "User ... wasn't found" is shown after a little while, it's probably because the GitHub API rate limit has been reached.
 * At the time of writing, the rate limit is 60 requests per hour.
 * See [the github api docs](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limit-http-headers) for more info.
*/
export function GithubActivityFeed({
  user,
  repo = "*",
  limit = 20,
}: {
  /**
   * The username of the github user to display activity for
   */
  user: string;
  /**
   * The repo name to filter by. Only events for this repo will be shown.
   */
  repo?: string;
  
  /**
   * The max number of events to show
   */
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
