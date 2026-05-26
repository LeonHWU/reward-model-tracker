# Reward Model Training Roadmap

A small Docker-deployable static website for tracking reward model and process
reward model study progress.

Primary tracker:

https://github.com/users/LeonHWU/projects/2

## Run Locally

Open `index.html` directly, or run it with Docker:

```bash
docker build -t reward-model-tracker .
docker run --rm -p 8080:80 reward-model-tracker
```

Then visit:

```text
http://localhost:8080
```

## Update Progress

Edit `data.js` and update:

- `priorities`: high-level priority overview
- `tasks`: concrete learning checklist items
- `progress`: percentage complete
- `status`: `todo`, `active`, or `done`

## Suggested Repo Description

Dockerized progress tracker for reward model training foundations.
