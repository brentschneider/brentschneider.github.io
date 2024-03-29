---
title: "Git Command line cheat sheet"
permalink: /blog/:title
quote: a quick reference for the most commonly used Git commands.
image: /img/media/2014-11-21-Git-Command-Line-Cheat-Sheet/cover.jpg
---

Git is an open source version control system that enables developers to work together on projects while maintaining a history of what changed and by who. At first, it can seem overwhelming but with steady practice, the learning curve isn't all that steep.

### 1) Starting with setup

Set up git in the local folder/directory you want to track changes by entering the following command.

```
$ git init
$ git status
```
<br>
### 2) Set up your __remote__ repository on GitHub.

At this point, reate a new repo in either GitHub, Gitlabs, or Bitbucket. *For this article, I'm using GitHub.* Sign in, locate the create new project button and enter a name for your repository along with a brief description of your project.
<br>

Next, leave the rest of the options as default, > click Create repository (repo).

Copy the repo's url `https://github.com/YOUR-USERNAME/PROJECT-NAME.git`
<br>
### 3) Switch back on our local machine:

We will set the remote origin for our project.

```
$ git remote add origin https://github.com/YOUR-USERNAME/PROJECT-NAME.git
```
<br>
> __Q: Can I add more than one remote location?__
>
> Yes, in addition to the origin set above say add another remote location.
>`git remote add github https://github.com/Company_Name/repository_name.git`
>
> Now you can push to two different remote locations.
>
>__If you need to change the remote URL:__
>`git remote set-url origin https://github.com/YOUR-USERNAME/NEW-REPOSITORY.git`

<br />

### 4) Adding your files to the repo

A. Every good project has a readme.md file.

```
$ touch README.md
```
<br>
B. Typing `Git status` will reveal __README.md__ as an Untracked file.
<br />
<br />
C. Let's add it to our local repo.
```
$ git add README.md
```
<br />
D. Next, we will __commit__ the file to the project. This also lets us note our changes.

```
$ git commit -m "first commit adding README.md to our project"
```
<br />

E. Finally, since the file is __added__ and __committed__ now we will __push__ the new changes from out local project up to the repo on GitHub.

```
$ git push origin master
```
<br>
Open a browser and navigate to your repo on github to see the changes you just pushed.

🥁 ... That's it, congratulations now you know how to commit changes locally and to gitHub. 🎉
<br />
# What's our new montra? 📢

__add__ (a file) <br />
__commit__ (your work) <br />
__push__ (to origin/branch) <br />
__pull__ (newest changes before creating new work)
<br />
*__Shortcut:__ to add & commit  all at once: `git commit -am "added a detailed message to this commit"`*
<br /><br />


### Push new local branch to repo

First time push

```git push --set-upstream origin {Name of local branch}:{Name of remote branch}```

Then afterwards

```git push -u origin {Name of remote branch}```

---

### Git Clone

The git clone command copies an existing Git repository. This is sort of like svn checkout, except the “working copy” is a full-fledged Git repository—it has its own history, manages its own files, and is an isolated environment from the original repository.

	git clone git@github.com/A-USERNAME/THE-REPO.git

As a convenience, cloning automatically creates a remote connection called origin pointing back to the original repository. This makes it easy to interact with a central repository.

# Keeping a fork up to date

### 1. Clone your fork:

	git clone git@github.com/YOUR-USERNAME/YOUR-FORKED-REPO.git
<br>
### 2. Add remote from original repository in your forked repository: 

	cd into/cloned/fork-repo
	git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
	git fetch upstream
<br>
### 3. Updating your fork from original repo to keep up with their changes:

	git pull upstream master
<br>
# setting up .gitignore file

First let's remove the existing files from the repository:

	`find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch`

Now add the line to your .gitignore file, which is at the top level of your repository (or create one if it isn't there already).

`.DS_Store`

Then add and commit the file

```
git add .gitignore
git commit -m '.DS_Store banished!'
```

*if you are not familiar with Markdown* [documentation](https://help.github.com/articles/github-flavored-markdown/)

## Referances & Resources:

- [github-git-cheat-sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
- [Official Git](http://git-scm.com/)
- [Git site:](http://gitref.org/)
- [atlassian getting started](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [Youtube videos:](https://www.youtube.com/user/GitHubGuides/)
- [Printable sheet PDF:](http://web.archive.org/web/20090419122050/swxruby.org/git-cheat-sheet.pdf)
- [Scribd:](https://www.scribd.com/fullscreen/56121827?access_key=key-12n7tlb9d2q7vducfn9m&allow_share=true&escape=false&view_mode=scroll)



### On line learning sites

- [Challenge practice:](https://try.github.io/levels/1/challenges/1)
- [Team Treehouse](http://teamtreehouse.com/library/git-basics/)
- [Code School](https://www.codeschool.com/paths/git)
- [atlassian](https://www.atlassian.com/git/)
