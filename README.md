# react-github-activity-feed

<div align="center">

[![GitHub license](https://img.shields.io/github/license/callumjhays/react-github-activity-feed)](https://github.com/CallumJHays/react-github-activity-feed/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/react-github-activity-feed)](https://www.npmjs.com/package/react-github-activity-feed)
[![npm version](https://img.shields.io/npm/v/react-github-activity-feed)](https://www.npmjs.com/package/react-github-activity-feed)
[![npm type definitions](https://img.shields.io/npm/types/react-github-activity-feed)](https://www.npmjs.com/package/react-github-activity-feed)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://callumjhays.github.io/react-github-activity-feed/?path=/docs/githubactivityfeed--primary)
[![GitHub issues](https://img.shields.io/github/issues/callumjhays/react-github-activity-feed)](https://github.com/callumjhays/react-github-activity-feed/issues)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/callumjhays/react-github-activity-feed/build-and-deploy)

</div>

Turn-key Github activity feed React component. Great for portfolio sites of sporadic open-source developers.

![demo animation](demo.webp)

[Storybook Demo & Docs available here](https://callumjhays.github.io/react-github-activity-feed/?path=/docs/githubactivityfeed--primary)

Most of the credit goes to [@caseyscarborough](https://github.com/caseyscarborough) for his work on [github-activity-feed](https://github.com/caseyscarborough/github-activity-feed)

## Install

```bash
yarn add react-github-activity-feed
# or
npm i --save react-github-activity-feed
```

## QuickStart

```tsx
import { GithubActivityFeed } from "react-github-activity-feed";
import "react-github-activity-feed/light.css"
//  or "react-github-activity-feed/dark.css"

const MyGithubActivity = () => (
    <GithubActivityFeed
        user="callumjhays"
        repo="react-github-activity-feed"
        limit={20}
    />
);
```

Requires `react >= v16.8` for functional components & hooks. If you need older version support please post a quick github issue and I'll get around to it.

## Why
Like [react-github-activity](https://www.npmjs.com/package/react-github-activity),
I was inspired by [github-activity-feed](https://www.npmjs.com/package/github-activity-feed) but wanted a simpler way to include it in a react app.

I also wanted to publish my first npm react component package and try out Rollup and hosting storybook demos on github.io.

Unlike [react-github-activity](https://www.npmjs.com/package/react-github-activity),
rather than starting from scratch (maybe because he wanted support for private events), I just "react-ified" the original library. I also wanted to try avoiding littering the global JS namespace, so I manually copied and edited the source-code.

## Limitations
- Limited by github REST api request rate (currently 60/hour). After this, the component will display an error.
- Very bloated (added 160kB) to my next.js production build. Unsure why this 