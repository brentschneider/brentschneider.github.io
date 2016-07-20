---
title: Contact
layout: default
---

<section class="post-header">
  <h1>Let's talk</h1>
</section>


Thanks for your interest, feel free to connect:

<ul class="contact-list">

  {% if site.github_username %}
  <li>
    {% include icon-github.html username=site.github_username %}
  </li>
  {% endif %}

  {% if site.twitter_username %}
  <li>
    {% include icon-twitter.html username=site.twitter_username %}
  </li>
  {% endif %}
  {% if site.linkedin_username %}
  <li>
    {% include icon-linkedin.html username=site.linkedin_username %}
  </li>
  {% endif %}
  <li>{% include icon-email.html %}</li>
</ul>
