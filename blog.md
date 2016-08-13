---
title: Blog
layout: default
permalink: /blog/
---

<section class="post-header">
  <h1>Articles</h1>
</section>

<article class="post">

  <div class="post-content">
    <ul class="post-list">

      {% for post in site.posts %}
        <li><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
      {% endfor %}

    </ul>

  </div>

</article>
