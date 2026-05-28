# A CTI Metamodel for Intelligence-driven and Infrastructure-aware Feasibility Evaluation

Static GitHub Pages visualization of the feasibility-oriented metamodel.

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Notes

This version adapts the visualization to the visual identity of the main FORGE CTI website:

- dark gradient background;
- translucent card panels;
- cyan/purple accent palette;
- rounded cards and pill controls;
- dark graph canvas with cyan grid;
- entity colors preserved for the metamodel information classes.

The layout uses relative node positions mapped onto a large virtual canvas to reduce overlaps.


## Version v9 - Draw.io-like spacing

This version extracts the entity coordinates from the `Leonardo's touch` page of the Draw.io source and maps them to Cytoscape using a Draw.io-like virtual canvas. The result preserves relative distances between entities much more closely than viewport-relative positioning.
