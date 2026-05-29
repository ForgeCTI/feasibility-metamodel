const CLASS_COLORS = {
  "generic-a-priori": "#ff4d5e",
  "instance-specific": "#3b82f6",
  "a-posteriori": "#facc15"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBadgeList(items) {
  if (!items || !items.length) return "";
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function initCaseImplementation(caseData) {
  const graphElement = document.getElementById("caseGraph");
  ensureCaseGraphSize(graphElement);

  const title = document.getElementById("caseTitle");
  const subtitle = document.getElementById("caseSubtitle");
  const stats = document.getElementById("caseStats");

  if (title) title.textContent = caseData.metadata.title;
  if (subtitle) subtitle.textContent = caseData.metadata.description;
  if (stats) stats.textContent = `${caseData.nodes.length} entities and ${caseData.edges.length} relationships.`;

  const savedLayoutKey = `feasibility-metamodel:${caseData.metadata.id}:layout`;
  const saved = loadSavedLayout(savedLayoutKey);
  if (saved) {
    caseData.nodes.forEach((node) => {
      if (saved[node.data.id]) node.position = saved[node.data.id];
    });
  }

  const cy = cytoscape({
    container: graphElement,
    elements: [...caseData.nodes, ...caseData.edges],
    minZoom: 0.12,
    maxZoom: 3,
    wheelSensitivity: 0.18,
    autoungrabify: false,
    autolock: false,
    style: [
      {
        selector: "node",
        style: {
          label: "data(name)",
          shape: "rectangle",
          width: "label",
          height: "label",
          "padding-left": "16px",
          "padding-right": "16px",
          "padding-top": "10px",
          "padding-bottom": "10px",
          "min-width": "110px",
          "min-height": "40px",
          "background-color": "#1f2937",
          "border-width": 6,
          "border-style": "double",
          "border-color": "rgba(233, 241, 251, 0.95)",
          color: "#e9f1fb",
          "font-weight": 780,
          "font-size": "12px",
          "text-valign": "center",
          "text-halign": "center",
          "text-wrap": "wrap",
          "text-max-width": "135px",
          "text-outline-width": 0
        }
      },
      {
        selector: 'node[informationClass = "generic-a-priori"]',
        style: { "background-color": CLASS_COLORS["generic-a-priori"] }
      },
      {
        selector: 'node[informationClass = "instance-specific"]',
        style: { "background-color": CLASS_COLORS["instance-specific"] }
      },
      {
        selector: 'node[informationClass = "a-posteriori"]',
        style: { "background-color": CLASS_COLORS["a-posteriori"], color: "#111827" }
      },
      {
        selector: "edge",
        style: {
          label: "data(label)",
          width: 2,
          "line-color": "rgba(173, 194, 217, 0.58)",
          "target-arrow-color": "rgba(173, 194, 217, 0.72)",
          "target-arrow-shape": "vee",
          "curve-style": "bezier",
          "font-size": "10px",
          color: "#e9f1fb",
          "text-background-color": "#07111f",
          "text-background-opacity": 0.92,
          "text-background-padding": "3px",
          "text-rotation": "autorotate"
        }
      },
      {
        selector: ".selected",
        style: {
          "border-color": "#4cc9f0",
          "line-color": "#4cc9f0",
          "target-arrow-color": "#4cc9f0",
          "z-index": 999
        }
      },
      { selector: ".faded", style: { opacity: 0.14 } },
      { selector: ".neighbor", style: { opacity: 1 } }
    ],
    layout: { name: "preset", fit: true, padding: 80, animate: false }
  });

  cy.ready(() => {
    cy.resize();
    cy.fit(cy.elements(), 80);
    renderEmptyCaseDetails(caseData, cy);
  });

  requestAnimationFrame(() => {
    ensureCaseGraphSize(graphElement);
    cy.resize();
    cy.fit(cy.elements(), 80);
  });

  window.addEventListener("resize", debounce(() => {
    ensureCaseGraphSize(graphElement);
    cy.resize();
    cy.fit(cy.elements(), 80);
  }, 120));

  cy.on("tap", "node", (event) => {
    const node = event.target;
    clearSelection(cy);
    const neighborhood = node.closedNeighborhood();
    cy.elements().not(neighborhood).addClass("faded");
    neighborhood.addClass("neighbor");
    node.addClass("selected");
    renderCaseEntity(node.data());
  });

  cy.on("tap", "edge", (event) => {
    const edge = event.target;
    clearSelection(cy);
    edge.addClass("selected");
    edge.source().addClass("neighbor");
    edge.target().addClass("neighbor");
    cy.elements().not(edge).not(edge.source()).not(edge.target()).addClass("faded");
    renderCaseRelation(edge.data());
  });

  cy.on("tap", (event) => {
    if (event.target === cy) {
      clearSelection(cy);
      renderEmptyCaseDetails(caseData, cy);
    }
  });

  document.getElementById("caseFitButton")?.addEventListener("click", () => cy.fit(cy.elements(), 80));
  document.getElementById("caseResetSelectionButton")?.addEventListener("click", () => {
    clearSelection(cy);
    renderEmptyCaseDetails(caseData, cy);
  });
  document.getElementById("caseSaveLayoutButton")?.addEventListener("click", () => {
    saveLayout(savedLayoutKey, cy);
    flashNotice("Layout saved in this browser.");
  });
  document.getElementById("caseResetLayoutButton")?.addEventListener("click", () => {
    localStorage.removeItem(savedLayoutKey);
    location.reload();
  });
}

function clearSelection(cy) {
  cy.elements().removeClass("selected faded neighbor");
}

function renderEmptyCaseDetails(caseData, cy) {
  document.getElementById("caseDetails").innerHTML = `
    <h2>Case implementation</h2>
    <p>${escapeHtml(caseData.metadata.description)}</p>
    <dl>
      <dt>Implementation source</dt>
      <dd>${escapeHtml(caseData.metadata.source)}</dd>
      <dt>Entities</dt>
      <dd>${cy.nodes().length}</dd>
      <dt>Relationships</dt>
      <dd>${cy.edges().length}</dd>
      <dt>Determinants</dt>
      <dd class="case-chip-row">${renderBadgeList(caseData.metadata.determinants)}</dd>
      <dt>Interaction patterns</dt>
      <dd class="case-chip-row">${renderBadgeList(caseData.metadata.patterns)}</dd>
    </dl>
    <h3>Interaction</h3>
    <p class="muted">Drag entities to adjust the implementation view. Use “Save layout” to persist your layout in this browser.</p>
  `;
}

function renderCaseEntity(data) {
  document.getElementById("caseDetails").innerHTML = `
    <h2>${escapeHtml(data.name)}</h2>
    <div class="badge-row">
      <span class="badge ${escapeHtml(data.informationClass)}">${escapeHtml(data.informationClassLabel)}</span>
      <span class="badge submodel-badge ${escapeHtml(data.submetamodel)}">${escapeHtml(data.submetamodelLabel)}</span>
    </div>
    <dl>
      <dt>Metamodel entity</dt><dd>${escapeHtml(data.metamodelEntity)}</dd>
      <dt>Sub-metamodel</dt><dd>${escapeHtml(data.submetamodelLabel)}</dd>
      <dt>Information class</dt><dd>${escapeHtml(data.informationClassLabel)}</dd>
    </dl>
    <h3>Description</h3>
    <p>${escapeHtml(data.description)}</p>
    <h3>Possible sources of information</h3>
    <ul>${(data.possibleSourcesOfInformation || []).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
    ${renderCaseRelationList("Outgoing relationships", data.outgoingRelations, "outgoing")}
    ${renderCaseRelationList("Incoming relationships", data.incomingRelations, "incoming")}
  `;
}

function renderCaseRelation(data) {
  document.getElementById("caseDetails").innerHTML = `
    <h2>${escapeHtml(data.label)}</h2>
    <span class="badge relationship">Relationship</span>
    <p>${escapeHtml(data.description)}</p>
    <dl>
      <dt>Source</dt><dd>${escapeHtml(data.sourceLabel)}</dd>
      <dt>Target</dt><dd>${escapeHtml(data.targetLabel)}</dd>
    </dl>
  `;
}

function renderCaseRelationList(title, relationships, direction) {
  if (!relationships || !relationships.length) {
    return `<h3>${escapeHtml(title)}</h3><p class="muted">No ${escapeHtml(direction)} relationships.</p>`;
  }
  return `
    <h3>${escapeHtml(title)}</h3>
    <ul class="relation-list">
      ${relationships.map((rel) => {
        const text = direction === "outgoing" ? `${rel.label} → ${rel.targetLabel}` : `${rel.sourceLabel} → ${rel.label}`;
        return `<li><span>${escapeHtml(text)}</span><small>${escapeHtml(rel.description)}</small></li>`;
      }).join("")}
    </ul>
  `;
}

function saveLayout(key, cy) {
  const positions = {};
  cy.nodes().forEach((node) => { positions[node.id()] = node.position(); });
  localStorage.setItem(key, JSON.stringify(positions));
}

function loadSavedLayout(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}

function flashNotice(message) {
  const notice = document.getElementById("layoutNotice");
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add("visible");
  setTimeout(() => notice.classList.remove("visible"), 1800);
}


function ensureCaseGraphSize(element) {
  if (!element) return;

  const width = element.clientWidth;
  const height = element.clientHeight;

  if (!height || height < 240) {
    element.style.minHeight = "640px";
    element.style.height = "640px";
  }

  if (!width || width < 320) {
    element.style.minWidth = "640px";
  }
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), delay);
  };
}
