# my-website-vue

This repo hosts the source code for my website.

## Server Setup

This website is being hosted on GitHub pages.

## Repository Setup

### GitHub Actions

This repo makes use of GitHub actions to deploy updates. Whenever a commit is made to the `production` branch, it is built into the `gh-pages` branch which GitHub pages reads from.

### Branch Protection

`development` and `production` are branch protected. This means that commits cannot be made to them without a pull request. This forces me to follow the [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

## Management

I am using a GitHub project and issues to manage the development of this website. The project board is linked here: [https://github.com/users/AlexJFDev/projects/1](https://github.com/users/AlexJFDev/projects/1).
