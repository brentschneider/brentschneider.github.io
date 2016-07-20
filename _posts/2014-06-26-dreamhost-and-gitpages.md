---
title: "Setting DNS on Dreamhost to github pages"
permalink: /blog/:title
quote: Setting up your custom domain name
image: /img/media/cover.jpg
---

# How to point your custom domain name to GitHub Pages

Okay, so far so good.  You have your site up and running at username.github.io. Next step is to customize it to use your own domain name. GitHub has a [useful article](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages) for setting up custom domains with GitHub Pages.

To can edit the root DNS records - you'd just need to set the
domain to be DNS only as outlined here [DNS](http://wiki.dreamhost.com/Custom_DNS) settings.


### In your repo

Within the root directory of your project add a new file, save it as CNAME (yes all caps!), in this file add your custom [sub.]domain name.
Then add/commit/push your changes up to your github pages repo. [full write up ...](https://help.github.com/articles/adding-a-cname-file-to-your-repository/)

I like to do this step first so that once the dreamhost DNS refreshes across the we the change will be fairly immediate.

### Setting up the Dreamhost DNS

__From the c-panel:__  

1. Click the DNS link located under your domain.
2. Enter www in the Name: field.
3. Change the Type: to CNAME.
4. Enter your username.github.io site in the Value: field.
5. Click the Add Record Now! button to add the record.

__Next__  

1. Create two __A records__ that point your domain to `192.30.252.153` & `192.30.252.154`.
Those are the GitHub Pages servers.  



Save & wait...


Cheers!
Brent
