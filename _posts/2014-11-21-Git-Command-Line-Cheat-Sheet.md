---
title: "Git Command line cheat sheet"
permalink: /blog/:title
quote: quick reference for the most commonly used Git commands.
image: /img/media/2014-11-21-Git-Command-Line-Cheat-Sheet/cover.jpg
---

Git is an open source version control system that enables developers to work together on projects while maintaining a history of what was changed and by who.

At first it can seem overwhelming but with steady practice the learning curve isn't all that steep.
<br />
<br />

### Set up git in new local directory

```
$ git init
$ git status
```

### Set up your remote repo
At this point we will want to create a new repository space on GitHub/gitlabs/bitbucket.
In this article I will be using github.

Find the create new project button, enter a name for your repository.
There are a number of optional items, lets leave them alone for now > click Create repository.
<br />
Copy the repo's url  ...https://github.com/username/ProjectName.git

Back on our command line let's set the remote origin for our project.

`$ git remote add origin https://github.com/username/ProjectName.git`


- __If for some reason you need to change the remote URL:__

    `git remote set-url origin https://github.com/USERNAME/NEWREPOSITORY.git`

###Next

Every good project has a readme file.

`$ touch README.md`


- You may edit your README.md file, if you are not familiar with [Markdown](https://help.github.com/articles/github-flavored-markdown/) check it out.


`Git status` should reveal README.md as an Untracked file.
<br /><br />
Time to ADD the file to our project for tracking.

`$ git add README.md`
<br /><br />
Next, lets commit our change to the project.

`$ git commit -m "first commit adding README.md to our project"`
<br /><br />
We are not done yet, the project is local. Next step is to push these changes to our repo on Github.

`$ git push origin master`


Switch over to our github account and double check that the files are in the repo you just pushed.
Now all we have to do in your project is __add__, __commit__, __push__, & __pull__ changes to/from our project.


__Shortcut:__ use `git commit -am "added a detailed message to this commit"` to add and commit at the same time.


#More info:


### Git Cheat Sheet:

    [github-git-cheat-sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)



### Git Clone

The git clone command copies an existing Git repository. This is sort of like svn checkout, except the “working copy” is a full-fledged Git repository—it has its own history, manages its own files, and is a completely isolated environment from the original repository.

As a convenience, cloning automatically creates a remote connection called origin pointing back to the original repository. This makes it very easy to interact with a central repository.







<br>
<br>
## Referances & Resources:

[Official Git](http://git-scm.com/)

[Git site:](http://gitref.org/)

[atlassian getting started](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

[Youtube videos:](https://www.youtube.com/user/GitHubGuides/)

[Printable sheet PDF:](http://web.archive.org/web/20090419122050/swxruby.org/git-cheat-sheet.pdf)

[Scribd:](https://www.scribd.com/fullscreen/56121827?access_key=key-12n7tlb9d2q7vducfn9m&allow_share=true&escape=false&view_mode=scroll)

<br>
<br>
### 'On the line' learning sites

[Challenge practice:](https://try.github.io/levels/1/challenges/1)

[Team Treehouse](http://teamtreehouse.com/library/git-basics/)

[Code School](https://www.codeschool.com/paths/git)

[atlassian](https://www.atlassian.com/git/)
