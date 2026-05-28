# Feasibility-Oriented Metamodel

Static GitHub Pages site for interactively browsing the feasibility-oriented metamodel.

## Run locally

From this folder:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

## Notes

- The site uses plain HTML, CSS, and JavaScript.
- Cytoscape.js is loaded from a CDN.
- Entities use relative positions stored in `metamodel.js` as `data.relativePosition`.
- `script.js` converts relative positions into fixed Cytoscape positions using a large virtual canvas so entities do not overlap on small screens.
- Nodes are locked to preserve the intended layout.
- Each entity stores name, description, information class, possible sources of information, sub-metamodel, outgoing relationships, and incoming relationships.
- Each edge stores source-side and target-side cardinalities.
