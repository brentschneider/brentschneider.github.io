---
title: "Git Command line cheat sheet"
permalink: /blog/:title
quote: a quick reference for the most commonly used Git commands.
image: /img/media/2014-11-21-Git-Command-Line-Cheat-Sheet/cover.jpg
---

Git is an open source version control system that enables developers to work together on projects while maintaining a history of what was changed and by who. At first, it can seem overwhelming but with steady practice, the learning curve isn't all that steep.
<br />

### Set up git in new local directory

```
$ git init
$ git status
```

### Set up your __remote__ repository.

At this point, we are going to create a new repo in either GitHub, Gitlabs, or Bitbucket. *For this article I'm using GitHub.* Sign in, locate the create new project button and enter a name for your repository along with a brief description of your project.
<br><br>

Next, Let's leave the rest of the options as default, for now, > click Create repository.


Copy the repo's url ` https://github.com/username/ProjectName.git`
<br><br>

### Back on our local machine:

Let's set the remote origin for our project.

  `$ git remote add origin https://github.com/username/ProjectName.git`

__If for some reason you need to change the remote URL:__

  `git remote set-url origin https://github.com/USERNAME/NEWREPOSITORY.git`

---
<br />
### Adding your first file to the new repo

Every good project has a readme.md file.

`$ touch README.md`

*if you are not familiar with Markdown* [documentation](https://help.github.com/articles/github-flavored-markdown/)
<br>

Typing `Git status` should reveal __README.md__ as an Untracked file.
<br />

Let's add it to our local repo.
`$ git add README.md`
<br />

Next, __commit__ our file to the project, also give us the option to make note of our changes.

`$ git commit -m "first commit adding README.md to our project"`
<br />

Lastly once __added__ and __committed__ we are going to __push__ the change from out local project up to the repo on GitHub.

`$ git push origin master`

Switch over to our browser, hit refresh to double check that the files are in the repo you just pushed.

That's it, you should see your file reflected in your GitHub repo.

---
<br />

# Your new Montra

__add__ (a file) <br />
__commit__ (your work) <br />
__push__ (to origin/branch) <br />
__pull__ (newest changes before creating new work) <br />

<br />
__Shortcut:__ use `git commit -am "added a detailed message to this commit"` to add & commit  all at once.
<br />
---
<br />
### Git Clone

The git clone command copies an existing Git repository. This is sort of like svn checkout, except the “working copy” is a full-fledged Git repository—it has its own history, manages its own files, and is a completely isolated environment from the original repository.

As a convenience, cloning automatically creates a remote connection called origin pointing back to the original repository. This makes it very easy to interact with a central repository.
<br>

## Referances & Resources:

[github-git-cheat-sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)

[Official Git](http://git-scm.com/)

[Git site:](http://gitref.org/)

[atlassian getting started](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

[Youtube videos:](https://www.youtube.com/user/GitHubGuides/)

[Printable sheet PDF:](http://web.archive.org/web/20090419122050/swxruby.org/git-cheat-sheet.pdf)

[Scribd:](https://www.scribd.com/fullscreen/56121827?access_key=key-12n7tlb9d2q7vducfn9m&allow_share=true&escape=false&view_mode=scroll)

<br>
<br>
### On line learning sites

[Challenge practice:](https://try.github.io/levels/1/challenges/1)

[Team Treehouse](http://teamtreehouse.com/library/git-basics/)

[Code School](https://www.codeschool.com/paths/git)

[atlassian](https://www.atlassian.com/git/)
