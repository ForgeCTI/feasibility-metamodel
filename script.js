const CLASS_COLORS = {
  "generic-a-priori": "#ff4d5e",
  "instance-specific": "#3b82f6",
  "a-posteriori": "#facc15"
};

const MAIN_LAYOUT_KEY = "feasibility-metamodel:main:layout";

applyRelativePositions(metamodel);
applySavedLayoutToModel(metamodel, MAIN_LAYOUT_KEY);

const elements = [...metamodel.nodes, ...metamodel.edges];

const cy = cytoscape({
  container: document.getElementById("graph"),
  elements,
  autoungrabify: false,
  autolock: false,
  minZoom: 0.12,
  maxZoom: 3,
  wheelSensitivity: 0.18,

  style: [
    {
      selector: "node",
      style: {
        label: "data(name)",
        shape: "rectangle",
        width: "data(layoutWidth)",
        height: "data(layoutHeight)",
        "background-color": "#0c1727",
        "border-width": 6,
        "border-style": "double",
        "border-color": "#e9f1fb",
        color: "#07111f",
        "font-weight": 800,
        "font-size": "11px",
        "text-valign": "center",
        "text-halign": "center",
        "text-wrap": "wrap",
        "text-max-width": "data(textMaxWidth)",
        "text-outline-width": 0
      }
    },
    { selector: 'node[informationClass = "generic-a-priori"]', style: { "background-color": CLASS_COLORS["generic-a-priori"], color: "#07111f" } },
    { selector: 'node[informationClass = "instance-specific"]', style: { "background-color": CLASS_COLORS["instance-specific"], color: "#e9f1fb" } },
    { selector: 'node[informationClass = "a-posteriori"]', style: { "background-color": CLASS_COLORS["a-posteriori"], color: "#07111f" } },
    {
      selector: "edge",
      style: {
        label: "data(label)",
        "source-label": "data(sourceCardinality)",
        "target-label": "data(targetCardinality)",
        width: 2,
        "line-color": "rgba(173, 194, 217, 0.72)",
        "target-arrow-color": "rgba(173, 194, 217, 0.72)",
        "target-arrow-shape": "vee",
        "curve-style": "bezier",
        "font-size": "10px",
        "source-text-offset": 24,
        "target-text-offset": 24,
        color: "#e9f1fb",
        "source-text-margin-y": -8,
        "target-text-margin-y": -8,
        "text-background-color": "#0c1727",
        "text-background-opacity": 0.95,
        "text-background-padding": "3px",
        "text-rotation": "autorotate",
        "source-text-rotation": "autorotate",
        "target-text-rotation": "autorotate"
      }
    },
    { selector: ".selected", style: { "border-color": "#4cc9f0", "line-color": "#4cc9f0", "target-arrow-color": "#4cc9f0", "z-index": 999 } },
    { selector: ".neighbor", style: { "border-color": "#e9f1fb", "line-color": "#e9f1fb", "target-arrow-color": "#e9f1fb", opacity: 1 } },
    { selector: ".faded", style: { opacity: 0.13 } },
    { selector: ".hidden", style: { display: "none" } }
  ],

  layout: { name: "preset", fit: true, padding: 90, animate: false }
});

cy.ready(() => {
  cy.resize();
  cy.fit(cy.elements(), 90);
  renderEmptyDetails();
  updateStats();
});

window.addEventListener("resize", debounce(() => {
  cy.resize();
  cy.fit(cy.elements().not(".hidden"), 90);
}, 150));

cy.on("tap", "node", (event) => {
  const node = event.target;
  clearSelection();
  const neighborhood = node.closedNeighborhood();
  cy.elements().not(neighborhood).addClass("faded");
  neighborhood.addClass("neighbor");
  node.addClass("selected");
  renderEntityDetails(node);
});

cy.on("tap", "edge", (event) => {
  const edge = event.target;
  clearSelection();
  edge.addClass("selected");
  edge.source().addClass("neighbor");
  edge.target().addClass("neighbor");
  cy.elements().not(edge).not(edge.source()).not(edge.target()).addClass("faded");
  renderRelationshipDetails(edge);
});

cy.on("tap", (event) => {
  if (event.target === cy) {
    clearSelection();
    renderEmptyDetails();
  }
});

document.querySelectorAll(".class-filter").forEach((checkbox) => checkbox.addEventListener("change", applyFilters));
document.querySelectorAll(".submodel-filter").forEach((checkbox) => checkbox.addEventListener("change", applyFilters));
document.getElementById("search").addEventListener("input", applyFilters);

document.getElementById("fitButton").addEventListener("click", () => cy.fit(cy.elements().not(".hidden"), 90));
document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("search").value = "";
  document.querySelectorAll(".class-filter, .submodel-filter").forEach((checkbox) => { checkbox.checked = true; });
  cy.elements().removeClass("hidden selected faded neighbor");
  cy.fit(cy.elements(), 90);
  renderEmptyDetails();
  updateStats();
});
document.getElementById("saveLayoutButton").addEventListener("click", () => {
  saveLayout(MAIN_LAYOUT_KEY, cy);
  flashNotice("Layout saved in this browser.");
});
document.getElementById("resetLayoutButton").addEventListener("click", () => {
  localStorage.removeItem(MAIN_LAYOUT_KEY);
  location.reload();
});

function applyRelativePositions(model) {
  const layout = model.metadata && model.metadata.drawioLayout
    ? model.metadata.drawioLayout
    : { sourceWidth: 1600, sourceHeight: 1000, spacing: 1.18, marginX: 160, marginY: 120 };

  const sourceWidth = Number(layout.sourceWidth || 1600);
  const sourceHeight = Number(layout.sourceHeight || 1000);
  const spacing = Number(layout.spacing || 1);
  const marginX = Number(layout.marginX || 120);
  const marginY = Number(layout.marginY || 90);

  model.nodes.forEach((node) => {
    const relative = node.data && node.data.relativePosition;
    if (!relative) return;
    node.position = {
      x: marginX + relative.x * sourceWidth * spacing,
      y: marginY + relative.y * sourceHeight * spacing
    };
  });
}

function applySavedLayoutToModel(model, key) {
  const saved = loadSavedLayout(key);
  if (!saved) return;
  model.nodes.forEach((node) => {
    const pos = saved[node.data.id];
    if (pos && Number.isFinite(pos.x) && Number.isFinite(pos.y)) node.position = pos;
  });
}

function saveLayout(key, graph) {
  const positions = {};
  graph.nodes().forEach((node) => { positions[node.id()] = node.position(); });
  localStorage.setItem(key, JSON.stringify(positions));
}

function loadSavedLayout(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function flashNotice(message) {
  const notice = document.getElementById("layoutNotice");
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add("visible");
  window.setTimeout(() => notice.classList.remove("visible"), 2200);
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), delay);
  };
}

function clearSelection() {
  cy.elements().removeClass("selected faded neighbor");
}

function applyFilters() {
  clearSelection();
  const activeClasses = Array.from(document.querySelectorAll(".class-filter:checked")).map((checkbox) => checkbox.value);
  const activeSubmodels = Array.from(document.querySelectorAll(".submodel-filter:checked")).map((checkbox) => checkbox.value);
  const query = document.getElementById("search").value.trim().toLowerCase();

  cy.elements().removeClass("hidden");

  cy.nodes().forEach((node) => {
    const data = node.data();
    const searchable = [data.name, data.label, data.description, data.informationClassLabel, data.submetamodelLabel].join(" ").toLowerCase();
    const matchesClass = activeClasses.includes(data.informationClass);
    const matchesSubmodel = activeSubmodels.includes(data.submetamodel);
    const matchesSearch = !query || searchable.includes(query);
    if (!matchesClass || !matchesSubmodel || !matchesSearch) node.addClass("hidden");
  });

  cy.edges().forEach((edge) => {
    const data = edge.data();
    const searchable = [data.name, data.label, data.sourceLabel, data.targetLabel, data.description].join(" ").toLowerCase();
    const endpointHidden = edge.source().hasClass("hidden") || edge.target().hasClass("hidden");
    const matchesSearch = !query || searchable.includes(query);
    if (endpointHidden || !matchesSearch) edge.addClass("hidden");
  });

  renderEmptyDetails();
  updateStats();
}

function updateStats() {
  const visibleNodes = cy.nodes().not(".hidden").length;
  const visibleEdges = cy.edges().not(".hidden").length;
  const totalNodes = cy.nodes().length;
  const totalEdges = cy.edges().length;
  document.getElementById("stats").textContent = `${visibleNodes}/${totalNodes} entities and ${visibleEdges}/${totalEdges} relationships visible.`;
}

function renderEntityDetails(node) {
  const data = node.data();
  const informationClass = data.informationClass || "";
  const informationClassLabel = data.informationClassLabel || informationClass || "Information class";
  const submetamodel = data.submetamodel || "";
  const submetamodelLabel = data.submetamodelLabel || submetamodel || "Sub-metamodel";

  document.getElementById("details").innerHTML = `
    <h2>${escapeHtml(data.name)}</h2>
    <div class="badge-row">
      <span class="badge ${escapeHtml(informationClass)}">${escapeHtml(informationClassLabel)}</span>
      <span class="badge submodel-badge ${escapeHtml(submetamodel)}">${escapeHtml(submetamodelLabel)}</span>
    </div>
    <dl>
      <dt>Name</dt><dd>${escapeHtml(data.name)}</dd>
      <dt>Information class</dt><dd>${escapeHtml(informationClassLabel)}</dd>
      <dt>Sub-metamodel</dt><dd>${escapeHtml(submetamodelLabel)}</dd>
    </dl>
    <h3>Sub-metamodel</h3>
    <p>${escapeHtml(getSubmetamodelDescription(submetamodel))}</p>
    <h3>Description</h3>
    <p>${escapeHtml(data.description || "")}</p>
    ${renderSources(data.possibleSourcesOfInformation)}
    ${renderAttributes(data.attributes)}
    ${renderRelationshipList("Outgoing relationships", data.outgoingRelations, "outgoing")}
    ${renderRelationshipList("Incoming relationships", data.incomingRelations, "incoming")}
  `;
}

function getSubmetamodelDescription(submetamodel) {
  const descriptions = {
    organization: "The organization sub-metamodel captures the organizational context in which feasibility analysis is performed, including organizations, sectors, countries, business requirements, and governance-level security requirements.",
    infrastructure: "The infrastructure sub-metamodel captures the assets and technical state of the organization, including nodes, software, ports, users, resources, code, applications, processes, information, vulnerabilities, and infrastructure instances.",
    "cyber-threat": "The cyber threat sub-metamodel captures threat-related knowledge, including adversaries, campaigns or threat scenarios, attack steps, attack tools, configurations, TTPs, indicators, artifacts, and threat events."
  };
  return descriptions[submetamodel] || "No sub-metamodel description is available for this entity.";
}

function renderRelationshipDetails(edge) {
  const data = edge.data();
  document.getElementById("details").innerHTML = `
    <h2>${escapeHtml(data.name || data.label)}</h2>
    <span class="badge relationship">Relationship</span>
    <p>${escapeHtml(data.description || "")}</p>
    <dl>
      <dt>Name</dt><dd>${escapeHtml(data.name || data.label)}</dd>
      <dt>Source</dt><dd>${escapeHtml(data.sourceLabel)} <span class="cardinality-pill">${escapeHtml(data.sourceCardinality || "")}</span></dd>
      <dt>Target</dt><dd>${escapeHtml(data.targetLabel)} <span class="cardinality-pill">${escapeHtml(data.targetCardinality || "")}</span></dd>
      <dt>Cardinality</dt><dd>${escapeHtml(formatCardinality(data))}</dd>
    </dl>
  `;
}

function formatCardinality(data) {
  const source = data.sourceLabel || data.source || "Source";
  const target = data.targetLabel || data.target || "Target";
  const sourceCardinality = data.sourceCardinality || "";
  const targetCardinality = data.targetCardinality || "";
  if (!sourceCardinality && !targetCardinality) return "No cardinality is currently stored for this relationship.";
  return `${source} [${sourceCardinality}] — ${data.label || data.name || "relationship"} → [${targetCardinality}] ${target}`;
}

function renderSources(sources) {
  if (!sources || sources.length === 0) return `<h3>Possible sources of information</h3><p class="muted">No possible sources of information are currently stored for this entity.</p>`;
  return `<h3>Possible sources of information</h3><ul>${sources.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderAttributes(attributes) {
  if (!attributes || attributes.length === 0) return "";
  return `<h3>Attributes</h3><ul>${attributes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderRelationshipList(title, relationships, direction) {
  if (!relationships || relationships.length === 0) return `<h3>${escapeHtml(title)}</h3><p class="muted">No ${escapeHtml(direction)} relationships stored for this entity.</p>`;
  return `
    <h3>${escapeHtml(title)}</h3>
    <ul class="relation-list">
      ${relationships.map((rel) => {
        const text = direction === "outgoing" ? `${rel.label} → ${rel.targetLabel}` : `${rel.sourceLabel} → ${rel.label}`;
        const cardinality = `${rel.sourceCardinality || ""} → ${rel.targetCardinality || ""}`;
        return `<li><span>${escapeHtml(text)}</span><small><strong>Cardinality:</strong> ${escapeHtml(cardinality)}</small><small>${escapeHtml(rel.description || "")}</small></li>`;
      }).join("")}
    </ul>`;
}

function renderEmptyDetails() {
  const classCounts = Object.entries(metamodel.metadata.nodeClasses)
    .map(([key, info]) => `<li><strong>${escapeHtml(info.label)}:</strong> ${cy.nodes(`[informationClass = "${key}"]`).length} entities</li>`)
    .join("");
  const submodelCounts = Object.entries(metamodel.metadata.submetamodels)
    .map(([key, info]) => `<li><strong>${escapeHtml(info.label)}:</strong> ${cy.nodes(`[submetamodel = "${key}"]`).length} entities</li>`)
    .join("");
  document.getElementById("details").innerHTML = `
    <h2>Metamodel element</h2>
    <p>Click an entity or relationship to inspect its details. Entities are draggable.</p>
    <h3>Stored entity fields</h3>
    <ul>
      <li>Name</li><li>Description</li><li>Information class</li><li>Submetamodel</li><li>Possible sources of information</li><li>Outgoing and incoming relationships with cardinalities</li>
    </ul>
    <h3>Information classes</h3><ul>${classCounts}</ul>
    <h3>Submetamodels</h3><ul>${submodelCounts}</ul>
  `;
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
