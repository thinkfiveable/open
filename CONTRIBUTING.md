# Intro
Welcome to the Fiveable Open Source Initiative repository. We are so happy to have you here and can't wait to see what you will contribute. We're gonna go over some guidelines for what we are expecting all contributions to follow. [**Please ensure all your contributions follow our CODE OF CONDUCT**](https://github.com/ThinkFiveable/open/blob/main/.github/CODE_OF_CONDUCT.md).

You are expected to fork this repository (unless you are a maintainer and have write access). You are highly recommended to create branches with appropriate naming for whatever your PR is going to be for. The reason we want you to create branches instead of pushing to *your* main branch is in the event that we do not merge your PR and it is rejected, your main branch will be out of sync.

## Keeping Sync
Let's propose a scenario, say you and another person make two separate PRs. The other persons PR is merged before yours, you are **required** to "merge the upstream main branch" into your current branch. In order to do this, you would:
1. Make sure you have our main repo as a remote `git remote add upstream https://github.com/ThinkFiveable/open.git`
2. Fetch upstream `git fetch upstream`
3. Checkout the branch you are working on (if you are already on your working branch you can skip this step) `git checkout new-feature-branch-2`
4. Merge upstream master into your branch `git merge upstream/master` (*There is a chance that you could run into merge conflicts, which are when someone elses PR has edited files and lines that you have also edited in your PR, in which case you need to decide whose change to move forward with. We will cover this more in our git tutorials.*)

## Guidelines
- PR and Issues titles should be short and descriptive.
- Commits **must** follow the [Our Commit Convention](#commiting)
- PR bodies must describe what changes were made, and if it was made in response to an issue you must include "closes #issuenumber" at the top of the body.
- Ensure that if you are making a PR to solve an open issue, that no one has already claimed it and been assigned to it.

## Commiting
Our commit convention is based directly from the [Angular Commit Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).  
We use husky and commitlint to enforce this on the developer side, so please do not try to circumvent it.  
If your commit has an unclear message or does not follow our commit convention, you are subject to being asked to edit it using `git rebase`.


