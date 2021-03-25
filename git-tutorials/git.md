Table of Contents
- [Getting Started with Git/GitHub](#getting-started-with-git-github)
    + [Clone](#clone)
    + [Pull](#pull)
    + [Commit](#commit)
    + [Push](#push)
    + [Pull Request](#pull-request)

# Getting Started with Git/GitHub
To use Git, you'll need to download it [here](https://git-scm.com/downloads).

### Clone
First things first, we'll want to get a copy of our repository on our computer locally by cloning our repository. We will need the HTTPS address on the repository page which you can copy/paste from the browser. We will now use our terminal's shell commands to move to the place where we want to put our directory copy.

For example, if we wanted to change to our Documents directory, we would do the following:
`cd Documents`

To clone our repository, we use the following command in our terminal:
`git clone <https address here>`

For example:
`git clone https://github.com/ThinkFiveable/open fiveable-open`

Again, this will create a local copy of the repository at the directory specified earlier. You will then need to open these files in your preferred text editor to make your changes.
 
### Pull
You will need to use `git pull` to fetch the latest changes from another repository or local branch. When you run `git pull` in your terminal, remote content will be downloaded and immediately change the local state of your repository to match the new content. It is strongly recommended to not `git pull` when you have uncommitted changes. 

In the event that you do have uncommitted changes and want to `git pull`, you will need to do the following in your command line.
First, `git stash` which "stashes" your changes away temporarily. Then, `git pull` to fetch the latest changes. Next, `git stash pop` to apply the changes back onto your local copy.

### Commit
After making your changes, you will use terminal commands to commit them. Our commit message needs to explain what we've done. This message may be useful if we want to check our change history in the future, and it can also be useful to other contributors.

The syntax for a commit message is as follows `git commit -m "your commit message here"`.

### Push
The next step is relatively simple; now that we've committed our changes, all we have to do is push our changes to the repository on GitHub.

To push our changes, all we have to do is enter the following into the terminal `git push`.

### Pull Request
To submit your new changes to the original project, you will need to create a pull request. Head back to your fork on GitHub, and you should be presented with a green button that says `Compare & pull request`. 

(image)

If you click that button, you will be asked to give your pull reqest a name and description. Please write a description that accurately reflects what you were trying to do. When you hit the `Create pull request` button on the screen, a maintainer of the project will be notified to review the suggested changes. 

### [Merge Conflicts](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)
Sometimes you might encounter a message saying that there are "merge conflicts" that must be resolved before merging. This happens when multiple people make different changes to the same line of the same file in the repository. This tutorial will go over resolving merge conflicts using GitHub's web interface.

Near the bottom of your pull request, click the grey button `Resolve conflicts`. Delete the conflict markers `<<<<<<<`, `=======`, `>>>>>>>`, and make changes appropriately. Once you have resolved all conflicts, click the green button `Commit merge`.
