const data = window.trackerData;

const statusLabel = {
  done: "Done",
  active: "Active",
  todo: "To do",
};

function renderRoadmap() {
  const grid = document.querySelector("#roadmap-grid");
  grid.innerHTML = data.roadmap
    .map(
      (item) => `
        <article class="card">
          <div class="card-header">
            <h3>${item.title}</h3>
            <span class="status ${item.status}">${statusLabel[item.status]}</span>
          </div>
          <p>${item.summary}</p>
          <div class="progress-track" aria-label="${item.title} progress">
            <span style="width: ${item.progress}%"></span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMilestones() {
  const list = document.querySelector("#milestone-list");
  list.innerHTML = data.milestones
    .map(
      (item) => `
        <article class="milestone">
          <div class="meta">${item.week}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderTopics() {
  const grid = document.querySelector("#topic-grid");
  grid.innerHTML = data.interviewTopics
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderLogs() {
  const list = document.querySelector("#log-list");
  list.innerHTML = data.logs
    .map(
      (item) => `
        <article class="log-entry">
          <div class="meta">${item.date}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderProgress() {
  const values = data.roadmap.map((item) => item.progress);
  const average = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  document.querySelector("#overall-progress").textContent = `${average}%`;
  document.querySelector("#overall-progress-bar").style.width = `${average}%`;
}

renderRoadmap();
renderMilestones();
renderTopics();
renderLogs();
renderProgress();
