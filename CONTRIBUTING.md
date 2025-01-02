# Contributing

Thanks for your interest in contributing to Tally Fruit Trees. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## About this repository

This repository is something my wife and I have thought about for 3 years. While talking around town we always see fruit trees and even pick a couple of them. We wanted a way to track the trees and to share with friends and family. We also wanted to make it easy to add new trees to the database. So we decided to build a website to do just that.

## Structure

This repository is structured as follows:

```
apps
└── website
    └── src
        ├── app
        └── components
```

| Path                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `website/src/app`        | The Next.js application for the website. |
| `website/src/components` | The React components for the website.    |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/tally-fruit-trees.git
```

### Navigate to project directory

```bash
cd website
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
npm install
```

### update the .env file

```bash
cp .env.example .env
```

### add your mapbox token

```bash
vi .env
```

and add your mapbox token

### Run the project

```bash
npm run dev
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Keys

We do have a MAPBOX_TOKEN im trying to figure out if it should be public for contributions or to have people make their own.

## Testing

No test yet but we're working on it. I think we want to use [Vitest](https://vitest.dev) for testing and to run all the tests from the root of the repository.

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
