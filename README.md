# Reward Model Study Tracker

A small Docker-deployable static website for tracking what to learn for reward
model training and the current progress for each topic.

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

Edit `data.js` and update the `topics` list:

- `title`: topic name
- `why`: why this topic matters
- `goal`: concrete learning target
- `progress`: percentage complete
- `status`: `todo`, `active`, or `done`

## Suggested Repo Description

Dockerized progress tracker for reward model training foundations.
