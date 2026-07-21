(() => {
  "use strict";

  const data = window.CHARACTER_DATA;
  const app = document.getElementById("app");

  if (!data || !app) {
    throw new Error("CHARACTER_DATA または #app が見つかりません。");
  }

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const validateData = () => {
    const sectionIds = new Set((data.sections || []).map(section => section.id));
    const entryIds = new Set();

    (data.entries || []).forEach((entry, index) => {
      if (!entry.id || !entry.section || !entry.title) {
        throw new Error(`entries[${index}] は id・section・title が必須です。`);
      }
      if (entryIds.has(entry.id)) {
        throw new Error(`コンボ項目IDが重複しています: ${entry.id}`);
      }
      if (!sectionIds.has(entry.section)) {
        throw new Error(`未定義のsectionです: ${entry.section} (${entry.id})`);
      }
      if (!Array.isArray(entry.routes) || entry.routes.length === 0) {
        throw new Error(`routesを1件以上指定してください: ${entry.id}`);
      }
      entry.routes.forEach((route, routeIndex) => {
        if (!Array.isArray(route.steps) || route.steps.length === 0) {
          throw new Error(`stepsを1件以上指定してください: ${entry.id}.routes[${routeIndex}]`);
        }
      });
      entryIds.add(entry.id);
    });
  };

  validateData();

  const renderTags = (tags = []) => tags.length
    ? `<div class="meta-row">${tags.map(tag => `<span class="tag ${escapeHtml(tag.tone || "")}">${escapeHtml(tag.text)}</span>`).join("")}</div>`
    : "";

  const routeCopyText = (route) => {
    const prefix = route.label ? `${route.label}：\n` : "";
    return `${prefix}${route.steps.join(" → ")}`;
  };

  const renderRoute = (route) => `
    <div class="combo-route" data-copy-text="${encodeURIComponent(routeCopyText(route))}">
      ${route.label ? `<div class="route-label">${escapeHtml(route.label)}</div>` : ""}
      <div class="route-content">
        <div class="route-steps">
          ${route.steps.map((step, index) => `
            ${index ? '<span class="combo-arrow" aria-hidden="true">→</span>' : ""}
            <span class="combo-step">${escapeHtml(step)}</span>
          `).join("")}
        </div>
        <button class="copy-btn" type="button" aria-label="コンボをコピー">⧉</button>
      </div>
    </div>`;

  const renderCard = (entry) => `
    <article class="combo-card" data-category="${escapeHtml((entry.categories || []).join(" "))}" data-entry-id="${escapeHtml(entry.id)}">
      <details${entry.open ? " open" : ""}>
        <summary>
          <div class="summary-row">
            <div class="summary-title">
              <h3>${escapeHtml(entry.title)}</h3>
              ${entry.subtitle ? `<p>${escapeHtml(entry.subtitle)}</p>` : ""}
            </div>
            <span class="open-mark">＋</span>
          </div>
        </summary>
        <div class="card-body">
          ${renderTags(entry.tags)}
          ${(entry.routes || []).map(renderRoute).join("")}
          ${(entry.notes || []).map(note => `<p class="note">${escapeHtml(note)}</p>`).join("")}
          ${(entry.callouts || []).map(callout => `<div class="callout ${escapeHtml(callout.tone || "")}">${escapeHtml(callout.text)}</div>`).join("")}
        </div>
      </details>
    </article>`;

  const renderSection = (section) => {
    const entries = data.entries.filter(entry => entry.section === section.id);
    if (!entries.length) return "";

    return `
      <section class="section" id="${escapeHtml(section.id)}">
        <div class="section-heading">
          <h2>${escapeHtml(section.title)}</h2>
          ${section.caption ? `<p>${escapeHtml(section.caption)}</p>` : ""}
        </div>
        <div class="card-grid">${entries.map(renderCard).join("")}</div>
      </section>`;
  };

  const header = `
    <header class="site-header" id="top">
      <div class="header-inner">
        <div class="eyebrow">${escapeHtml(data.meta.game)} / ${escapeHtml(data.meta.romanName)}</div>
        <h1>${escapeHtml(data.meta.name)}<br>${escapeHtml(data.meta.title)}</h1>
      </div>
    </header>`;

  const toolbar = `
    <div class="toolbar-wrap">
      <div class="toolbar">
        <div class="chip-row" aria-label="カテゴリ絞り込み">
          ${data.filters.map((filter, index) => `<button class="filter-chip${index === 0 ? " active" : ""}" type="button" data-filter="${escapeHtml(filter.id)}">${escapeHtml(filter.label)}</button>`).join("")}
        </div>
      </div>
    </div>`;

  const notation = `
    <section class="section" id="notation">
      <div class="section-heading"><h2>表記</h2><p>数字は方向入力</p></div>
      <dl class="legend">
        ${data.notation.map(([term, meaning]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(meaning)}</dd></div>`).join("")}
      </dl>
    </section>`;

  const decision = data.decision ? `
    <section class="section" id="decision">
      <div class="section-heading"><h2>${escapeHtml(data.decision.title)}</h2>${data.decision.caption ? `<p>${escapeHtml(data.decision.caption)}</p>` : ""}</div>
      <div class="info-card decision-card">
        <table class="decision-table">
          <thead><tr><th>状況</th><th>優先ルート</th></tr></thead>
          <tbody>${data.decision.rows.map(row => `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td></tr>`).join("")}</tbody>
        </table>
      </div>
      ${data.decision.note ? `<div class="callout warn">${escapeHtml(data.decision.note)}</div>` : ""}
    </section>` : "";

  const sources = data.sources?.length ? `
    <section class="section" id="sources">
      <div class="section-heading"><h2>参照先</h2></div>
      <ul class="source-list">
        ${data.sources.map(source => `<li><a href="${escapeHtml(source.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join("")}
      </ul>
    </section>` : "";

  app.innerHTML = `
    ${header}
    ${toolbar}
    <main>
      ${notation}
      ${data.sections.map(renderSection).join("")}
      ${decision}
      ${sources}
      <div class="empty-state" id="emptyState">該当する項目がありません。</div>
    </main>
    <footer>個人用リファレンス。アップデート後はフレーム・追撃可否を再確認してください。</footer>
    <button class="back-top" id="backTop" type="button" aria-label="ページ上部へ戻る">↑</button>`;

  const chips = [...document.querySelectorAll(".filter-chip")];
  const cards = [...document.querySelectorAll(".combo-card")];
  const sections = [...document.querySelectorAll("main > .section")];
  const emptyState = document.getElementById("emptyState");
  const backTop = document.getElementById("backTop");

  const applyFilter = (filter) => {
    let visibleCards = 0;

    cards.forEach(card => {
      const categories = (card.dataset.category || "").split(" ");
      const visible = filter === "all" || categories.includes(filter);
      card.hidden = !visible;
      if (visible) visibleCards += 1;
    });

    sections.forEach(section => {
      const sectionCards = [...section.querySelectorAll(".combo-card")];
      if (sectionCards.length) {
        section.hidden = sectionCards.every(card => card.hidden);
      }
    });

    emptyState.style.display = visibleCards ? "none" : "block";
  };

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(item => item.classList.remove("active"));
      chip.classList.add("active");
      applyFilter(chip.dataset.filter);
    });
  });

  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const text = decodeURIComponent(button.closest(".combo-route").dataset.copyText);

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }

      button.textContent = "✓";
      button.classList.add("copied");
      setTimeout(() => {
        button.textContent = "⧉";
        button.classList.remove("copied");
      }, 1200);
    });
  });

  window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 600), { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
