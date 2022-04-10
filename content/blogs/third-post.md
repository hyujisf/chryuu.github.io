---
title: My third blog post
description: The legendary start of my blog! Here begins the epic quest to write at least weekly!
createdAt: Monday, September 27 2021, 3:05 PM
image: third-post.jpg
tags:
  - Front-end
  - Programming
  - Career
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

### Base on writing Content

```vue
<template>
  <div>
    <h1>{{ $content('title') }}</h1>
    <p>{{ $content('description') }}</p>
    <img src="{{ $content('image') }}" />
    <p>{{ $content('createdAt') }}</p>
    <p>{{ $content('tags') }}</p>
  </div>
</template>
```
