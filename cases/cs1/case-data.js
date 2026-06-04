const caseData = {
  "metadata": {
    "id": "cs1",
    "title": "CS1 — Case study 1 implementation",
    "shortTitle": "Case study 1 implementation",
    "description": "Interactive case-study implementation generated from the updated Draw.io model.",
    "source": "metamodel_v2-case1.drawio.xml",
    "layout": {
      "minX": -40.0,
      "minY": 70.0,
      "maxX": 1190.0,
      "maxY": 1241.0,
      "width": 1470.0,
      "height": 1411.0,
      "padding": 120
    }
  },
  "nodes": [
    {
      "data": {
        "id": "0BvM-G4DcYzrvQnhOk9X-1",
        "name": "FinOrg",
        "label": "FinOrg",
        "metamodelEntity": "Organization",
        "description": "FinOrg is a case-study instance of the Organization entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organization registry and official website",
          "Internal governance documents and organizational charts",
          "CMDB or asset ownership records",
          "Security interviews with business and IT owners"
        ],
        "drawioId": "0BvM-G4DcYzrvQnhOk9X-1",
        "drawioPosition": {
          "x": 300.0,
          "y": 180.0
        },
        "drawioGeometry": {
          "x": 240.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "0BvM-G4DcYzrvQnhOk9X-3",
            "name": "basedIn",
            "label": "basedIn",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "targetLabel": "Germany",
            "targetCardinality": "",
            "cardinality": "Organization 1 —  HomeCountry",
            "description": "FinOrg basedIn Germany."
          },
          {
            "id": "izy8kfX3pBO5z0ifo8so-2",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "targetLabel": "Finance",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
            "description": "FinOrg operatesIn Finance."
          },
          {
            "id": "BLdz90eUOZqGWJi0qpWp-2",
            "name": "hasBusinessRequirment",
            "label": "hasBusinessRequirment",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "",
            "target": "6eOacnnfol6akpcFKc8O-3",
            "targetLabel": "Sensitive data must remain confidential",
            "targetCardinality": "",
            "cardinality": "",
            "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential."
          },
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-4",
            "name": "manages",
            "label": "manages",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "ONCgWmA4yeiABO8jPh6Q-3",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "FinOrg manages Prod-Infra."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 460.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "0BvM-G4DcYzrvQnhOk9X-2",
        "name": "Germany",
        "label": "Germany",
        "metamodelEntity": "HomeCountry",
        "description": "Germany is a case-study instance of the HomeCountry entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "0BvM-G4DcYzrvQnhOk9X-2",
        "drawioPosition": {
          "x": 100.0,
          "y": 180.0
        },
        "drawioGeometry": {
          "x": 40.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-3",
            "name": "partsOf",
            "label": "partsOf",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "sourceLabel": "Germany",
            "sourceCardinality": "1..*",
            "target": "qnMAzMPU2UIx0dhE2o8o-2",
            "targetLabel": "European Union",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
            "description": "Germany partsOf European Union."
          },
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-5",
            "name": "partsOf",
            "label": "partsOf",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "sourceLabel": "Germany",
            "sourceCardinality": "1..*",
            "target": "qnMAzMPU2UIx0dhE2o8o-4",
            "targetLabel": "NATO",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
            "description": "Germany partsOf NATO."
          }
        ],
        "incomingRelations": [
          {
            "id": "0BvM-G4DcYzrvQnhOk9X-3",
            "name": "basedIn",
            "label": "basedIn",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "targetLabel": "Germany",
            "targetCardinality": "",
            "cardinality": "Organization 1 —  HomeCountry",
            "description": "FinOrg basedIn Germany."
          },
          {
            "id": "XvtYkyKbk3l0ouDT-OjV-1",
            "name": "focusesOn",
            "label": "focusesOn",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "sourceLabel": "Operation Wocao",
            "sourceCardinality": "",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "targetLabel": "Germany",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Operation Wocao focusesOn Germany."
          }
        ]
      },
      "position": {
        "x": 260.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "izy8kfX3pBO5z0ifo8so-1",
        "name": "Finance",
        "label": "Finance",
        "metamodelEntity": "Sector",
        "description": "Finance is a case-study instance of the Sector entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Sector classification taxonomies such as NACE, NAICS, or SIC",
          "Public sector reports and regulatory guidance",
          "CTI reports describing sector-targeted campaigns",
          "Industry ISAC or CERT advisories"
        ],
        "drawioId": "izy8kfX3pBO5z0ifo8so-1",
        "drawioPosition": {
          "x": 540.0,
          "y": 180.0
        },
        "drawioGeometry": {
          "x": 480.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "izy8kfX3pBO5z0ifo8so-2",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "targetLabel": "Finance",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
            "description": "FinOrg operatesIn Finance."
          },
          {
            "id": "bEFLhpSV-8ZIpqk4wgaV-1",
            "name": "targetsSector",
            "label": "targetsSector",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "sourceLabel": "Operation Wocao",
            "sourceCardinality": "0..*",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "targetLabel": "Finance",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* Sector",
            "description": "Operation Wocao targetsSector Finance."
          }
        ]
      },
      "position": {
        "x": 700.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-2",
        "name": "European Union",
        "label": "European Union",
        "metamodelEntity": "InternationalBody",
        "description": "European Union is a case-study instance of the InternationalBody entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "qnMAzMPU2UIx0dhE2o8o-2",
        "drawioPosition": {
          "x": 20.0,
          "y": 300.0
        },
        "drawioGeometry": {
          "x": -40.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-3",
            "name": "partsOf",
            "label": "partsOf",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "sourceLabel": "Germany",
            "sourceCardinality": "1..*",
            "target": "qnMAzMPU2UIx0dhE2o8o-2",
            "targetLabel": "European Union",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
            "description": "Germany partsOf European Union."
          }
        ]
      },
      "position": {
        "x": 180.0,
        "y": 350.0
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-4",
        "name": "NATO",
        "label": "NATO",
        "metamodelEntity": "InternationalBody",
        "description": "NATO is a case-study instance of the InternationalBody entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "qnMAzMPU2UIx0dhE2o8o-4",
        "drawioPosition": {
          "x": 180.0,
          "y": 300.0
        },
        "drawioGeometry": {
          "x": 120.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-5",
            "name": "partsOf",
            "label": "partsOf",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "sourceLabel": "Germany",
            "sourceCardinality": "1..*",
            "target": "qnMAzMPU2UIx0dhE2o8o-4",
            "targetLabel": "NATO",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
            "description": "Germany partsOf NATO."
          }
        ]
      },
      "position": {
        "x": 340.0,
        "y": 350.0
      }
    },
    {
      "data": {
        "id": "vcZTPhuOb6B-M6w-B_EE-3",
        "name": "APT20",
        "label": "APT20",
        "metamodelEntity": "ThreatSource",
        "description": "APT20 is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "vcZTPhuOb6B-M6w-B_EE-3",
        "drawioPosition": {
          "x": 790.0,
          "y": 180.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "vcZTPhuOb6B-M6w-B_EE-5",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1..*",
            "target": "vcZTPhuOb6B-M6w-B_EE-4",
            "targetLabel": "China-backed Group",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "APT20 relatedTo China-backed Group."
          },
          {
            "id": "RB2Fht_Hu-7ZOwt2WELK-2",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1..*",
            "target": "RB2Fht_Hu-7ZOwt2WELK-1",
            "targetLabel": "Expert",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1..* — 1 Expertise",
            "description": "APT20 hasExpertise Expert."
          },
          {
            "id": "9HdykkMEKshDh6IqXlot-1",
            "name": "initiates",
            "label": "initiates",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1",
            "target": "MXbeosHEiHACBSZkGos4-1",
            "targetLabel": "Attack against Organization",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "APT20 initiates Attack against Organization."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 950.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "vcZTPhuOb6B-M6w-B_EE-4",
        "name": "China-backed Group",
        "label": "China-backed Group",
        "metamodelEntity": "Adversary",
        "description": "China-backed Group is a case-study instance of the Adversary entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "vcZTPhuOb6B-M6w-B_EE-4",
        "drawioPosition": {
          "x": 995.0,
          "y": 180.0
        },
        "drawioGeometry": {
          "x": 930.0,
          "y": 160.0,
          "width": 130.0,
          "height": 40.0
        },
        "layoutWidth": 130.0,
        "layoutHeight": 40,
        "textMaxWidth": 118.0,
        "outgoingRelations": [
          {
            "id": "Y4xnolLzykD4MCw7Hd5a-1",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "vcZTPhuOb6B-M6w-B_EE-4",
            "sourceLabel": "China-backed Group",
            "sourceCardinality": "1..*",
            "target": "cvImlgJpU3P0QqpsDf0G-1",
            "targetLabel": "State-sponsored actor",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "China-backed Group hasAdversaryType State-sponsored actor."
          }
        ],
        "incomingRelations": [
          {
            "id": "vcZTPhuOb6B-M6w-B_EE-5",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1..*",
            "target": "vcZTPhuOb6B-M6w-B_EE-4",
            "targetLabel": "China-backed Group",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "APT20 relatedTo China-backed Group."
          }
        ]
      },
      "position": {
        "x": 1155.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "cvImlgJpU3P0QqpsDf0G-1",
        "name": "State-sponsored actor",
        "label": "State-sponsored actor",
        "metamodelEntity": "AdversaryType",
        "description": "State-sponsored actor is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "cvImlgJpU3P0QqpsDf0G-1",
        "drawioPosition": {
          "x": 995.0,
          "y": 260.0
        },
        "drawioGeometry": {
          "x": 930.0,
          "y": 240.0,
          "width": 130.0,
          "height": 40.0
        },
        "layoutWidth": 130.0,
        "layoutHeight": 40,
        "textMaxWidth": 118.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Y4xnolLzykD4MCw7Hd5a-1",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "vcZTPhuOb6B-M6w-B_EE-4",
            "sourceLabel": "China-backed Group",
            "sourceCardinality": "1..*",
            "target": "cvImlgJpU3P0QqpsDf0G-1",
            "targetLabel": "State-sponsored actor",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "China-backed Group hasAdversaryType State-sponsored actor."
          }
        ]
      },
      "position": {
        "x": 1155.0,
        "y": 310.0
      }
    },
    {
      "data": {
        "id": "RB2Fht_Hu-7ZOwt2WELK-1",
        "name": "Expert",
        "label": "Expert",
        "metamodelEntity": "Expertise",
        "description": "Expert is a case-study instance of the Expertise entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "RB2Fht_Hu-7ZOwt2WELK-1",
        "drawioPosition": {
          "x": 790.0,
          "y": 90.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "RB2Fht_Hu-7ZOwt2WELK-2",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1..*",
            "target": "RB2Fht_Hu-7ZOwt2WELK-1",
            "targetLabel": "Expert",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1..* — 1 Expertise",
            "description": "APT20 hasExpertise Expert."
          }
        ]
      },
      "position": {
        "x": 950.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "MXbeosHEiHACBSZkGos4-1",
        "name": "Attack against Organization",
        "label": "Attack against Organization",
        "metamodelEntity": "ThreatEvent",
        "description": "Attack against Organization is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident timelines and case-management systems",
          "SIEM and EDR event records",
          "CTI reports describing observed activity",
          "Forensic investigation notes"
        ],
        "drawioId": "MXbeosHEiHACBSZkGos4-1",
        "drawioPosition": {
          "x": 790.0,
          "y": 260.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-4",
            "name": "startsWith",
            "label": "startsWith",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "target": "9HdykkMEKshDh6IqXlot-3",
            "targetLabel": "AS1: Active Recon",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Attack against Organization startsWith AS1: Active Recon."
          },
          {
            "id": "r0pgC3ykTX_Oh4rQCJO8-2",
            "name": "partsOf",
            "label": "partsOf",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "target": "r0pgC3ykTX_Oh4rQCJO8-1",
            "targetLabel": "Operation Wocao",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Attack against Organization partsOf Operation Wocao."
          }
        ],
        "incomingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-1",
            "name": "initiates",
            "label": "initiates",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "sourceLabel": "APT20",
            "sourceCardinality": "1",
            "target": "MXbeosHEiHACBSZkGos4-1",
            "targetLabel": "Attack against Organization",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "APT20 initiates Attack against Organization."
          }
        ]
      },
      "position": {
        "x": 950.0,
        "y": 310.0
      }
    },
    {
      "data": {
        "id": "9HdykkMEKshDh6IqXlot-3",
        "name": "AS1: Active Recon",
        "label": "AS1: Active Recon",
        "metamodelEntity": "AttackStepItem",
        "description": "AS1: Active Recon is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "drawioId": "9HdykkMEKshDh6IqXlot-3",
        "drawioPosition": {
          "x": 790.0,
          "y": 360.0
        },
        "drawioGeometry": {
          "x": 695.0,
          "y": 340.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "vJn6_qnLwv68IXdAuOWm-2",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "",
            "target": "vJn6_qnLwv68IXdAuOWm-1",
            "targetLabel": "Active Recon",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Active Recon refersTo Active Recon."
          },
          {
            "id": "jCq8-NTqf9Jp3o_aXnjk-2",
            "name": "implements",
            "label": "implements",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "1..*",
            "target": "jCq8-NTqf9Jp3o_aXnjk-1",
            "targetLabel": "T1595",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Active Recon implements T1595."
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-1",
            "name": "followedBy",
            "label": "followedBy",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "0..*",
            "target": "DyAQahDk-dQDjuwduhnR-1",
            "targetLabel": "AS2: Exploit JBoss Vulnerability",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-4",
            "name": "startsWith",
            "label": "startsWith",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "target": "9HdykkMEKshDh6IqXlot-3",
            "targetLabel": "AS1: Active Recon",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Attack against Organization startsWith AS1: Active Recon."
          }
        ]
      },
      "position": {
        "x": 950.0,
        "y": 410.0
      }
    },
    {
      "data": {
        "id": "vJn6_qnLwv68IXdAuOWm-1",
        "name": "Active Recon",
        "label": "Active Recon",
        "metamodelEntity": "AttackStep",
        "description": "Active Recon is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "drawioId": "vJn6_qnLwv68IXdAuOWm-1",
        "drawioPosition": {
          "x": 610.0,
          "y": 240.0
        },
        "drawioGeometry": {
          "x": 540.0,
          "y": 220.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vJn6_qnLwv68IXdAuOWm-2",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "",
            "target": "vJn6_qnLwv68IXdAuOWm-1",
            "targetLabel": "Active Recon",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Active Recon refersTo Active Recon."
          }
        ]
      },
      "position": {
        "x": 770.0,
        "y": 290.0
      }
    },
    {
      "data": {
        "id": "jCq8-NTqf9Jp3o_aXnjk-1",
        "name": "T1595",
        "label": "T1595",
        "metamodelEntity": "TTP",
        "description": "T1595 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "jCq8-NTqf9Jp3o_aXnjk-1",
        "drawioPosition": {
          "x": 1027.5,
          "y": 360.0
        },
        "drawioGeometry": {
          "x": 995.0,
          "y": 340.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "jCq8-NTqf9Jp3o_aXnjk-2",
            "name": "implements",
            "label": "implements",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "1..*",
            "target": "jCq8-NTqf9Jp3o_aXnjk-1",
            "targetLabel": "T1595",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Active Recon implements T1595."
          }
        ]
      },
      "position": {
        "x": 1187.5,
        "y": 410.0
      }
    },
    {
      "data": {
        "id": "DyAQahDk-dQDjuwduhnR-1",
        "name": "AS2: Exploit JBoss Vulnerability",
        "label": "AS2: Exploit JBoss Vulnerability",
        "metamodelEntity": "AttackStepItem",
        "description": "AS2: Exploit JBoss Vulnerability is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "drawioId": "DyAQahDk-dQDjuwduhnR-1",
        "drawioPosition": {
          "x": 790.0,
          "y": 440.0
        },
        "drawioGeometry": {
          "x": 695.0,
          "y": 420.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-4",
            "name": "refersTo",
            "label": "refersTo",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "IPQajqL7GtjNWv-qm3LO-3",
            "targetLabel": "Exploit Public-Facing Application",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application."
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-7",
            "name": "implements",
            "label": "implements",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "IPQajqL7GtjNWv-qm3LO-6",
            "targetLabel": "T1190",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Exploit JBoss Vulnerability implements T1190."
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-10",
            "name": "followedBy",
            "label": "followedBy",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "0..*",
            "target": "IPQajqL7GtjNWv-qm3LO-9",
            "targetLabel": "AS3: Upload Webshell",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell."
          },
          {
            "id": "DO7GT-WBBtTGcN2kVyb9-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server."
          },
          {
            "id": "Dk6PDdwM20E52lIHaNhg-2",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "targetLabel": "JBoss Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability."
          },
          {
            "id": "3gRsCNvQQYv_DzA845zK-3",
            "name": "employs",
            "label": "employs",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "3gRsCNvQQYv_DzA845zK-2",
            "targetLabel": "JexBoss Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-1",
            "name": "followedBy",
            "label": "followedBy",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "sourceLabel": "AS1: Active Recon",
            "sourceCardinality": "0..*",
            "target": "DyAQahDk-dQDjuwduhnR-1",
            "targetLabel": "AS2: Exploit JBoss Vulnerability",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability."
          }
        ]
      },
      "position": {
        "x": 950.0,
        "y": 490.0
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-3",
        "name": "Exploit Public-Facing Application",
        "label": "Exploit Public-Facing Application",
        "metamodelEntity": "AttackStep",
        "description": "Exploit Public-Facing Application is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "drawioId": "IPQajqL7GtjNWv-qm3LO-3",
        "drawioPosition": {
          "x": 560.0,
          "y": 570.0
        },
        "drawioGeometry": {
          "x": 490.0,
          "y": 550.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "Rnk911M4N2P_T4AlKA5v-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "IPQajqL7GtjNWv-qm3LO-3",
            "sourceLabel": "Exploit Public-Facing Application",
            "sourceCardinality": "1..*",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "targetLabel": "JBoss Vulnerability",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-4",
            "name": "refersTo",
            "label": "refersTo",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "IPQajqL7GtjNWv-qm3LO-3",
            "targetLabel": "Exploit Public-Facing Application",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application."
          }
        ]
      },
      "position": {
        "x": 720.0,
        "y": 620.0
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-6",
        "name": "T1190",
        "label": "T1190",
        "metamodelEntity": "TTP",
        "description": "T1190 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "IPQajqL7GtjNWv-qm3LO-6",
        "drawioPosition": {
          "x": 1027.5,
          "y": 440.0
        },
        "drawioGeometry": {
          "x": 995.0,
          "y": 420.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-7",
            "name": "implements",
            "label": "implements",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "IPQajqL7GtjNWv-qm3LO-6",
            "targetLabel": "T1190",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Exploit JBoss Vulnerability implements T1190."
          }
        ]
      },
      "position": {
        "x": 1187.5,
        "y": 490.0
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-9",
        "name": "AS3: Upload Webshell",
        "label": "AS3: Upload Webshell",
        "metamodelEntity": "AttackStepItem",
        "description": "AS3: Upload Webshell is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "drawioId": "IPQajqL7GtjNWv-qm3LO-9",
        "drawioPosition": {
          "x": 925.0,
          "y": 640.0
        },
        "drawioGeometry": {
          "x": 830.0,
          "y": 620.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-13",
            "name": "refersTo",
            "label": "refersTo",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "",
            "target": "IPQajqL7GtjNWv-qm3LO-12",
            "targetLabel": "Web Shell",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS3: Upload Webshell refersTo Web Shell."
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-16",
            "name": "implements",
            "label": "implements",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "1..*",
            "target": "IPQajqL7GtjNWv-qm3LO-15",
            "targetLabel": "T1505.003",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Upload Webshell implements T1505.003."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-5",
            "name": "followedBy",
            "label": "followedBy",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-4",
            "targetLabel": "AS4: Custom Backdoor",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor."
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-10",
            "name": "followedBy",
            "label": "followedBy",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "0..*",
            "target": "IPQajqL7GtjNWv-qm3LO-9",
            "targetLabel": "AS3: Upload Webshell",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell."
          }
        ]
      },
      "position": {
        "x": 1085.0,
        "y": 690.0
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-12",
        "name": "Web Shell",
        "label": "Web Shell",
        "metamodelEntity": "AttackStep",
        "description": "Web Shell is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "drawioId": "IPQajqL7GtjNWv-qm3LO-12",
        "drawioPosition": {
          "x": 740.0,
          "y": 750.0
        },
        "drawioGeometry": {
          "x": 670.0,
          "y": 730.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-13",
            "name": "refersTo",
            "label": "refersTo",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "",
            "target": "IPQajqL7GtjNWv-qm3LO-12",
            "targetLabel": "Web Shell",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS3: Upload Webshell refersTo Web Shell."
          }
        ]
      },
      "position": {
        "x": 900.0,
        "y": 800.0
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-15",
        "name": "T1505.003",
        "label": "T1505.003",
        "metamodelEntity": "TTP",
        "description": "T1505.003 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "IPQajqL7GtjNWv-qm3LO-15",
        "drawioPosition": {
          "x": 1072.5,
          "y": 700.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 680.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-16",
            "name": "implements",
            "label": "implements",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "1..*",
            "target": "IPQajqL7GtjNWv-qm3LO-15",
            "targetLabel": "T1505.003",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Upload Webshell implements T1505.003."
          }
        ]
      },
      "position": {
        "x": 1232.5,
        "y": 750.0
      }
    },
    {
      "data": {
        "id": "XqnBadelrtm9o-audj2r-1",
        "name": "JBoss Server",
        "label": "JBoss Server",
        "metamodelEntity": "ApplicationInstance",
        "description": "JBoss Server is a case-study instance of the ApplicationInstance entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "drawioId": "XqnBadelrtm9o-audj2r-1",
        "drawioPosition": {
          "x": 220.0,
          "y": 570.0
        },
        "drawioGeometry": {
          "x": 150.0,
          "y": 550.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "W3W2Np_yM1KxrGV2YGuf-1",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "source": "XqnBadelrtm9o-audj2r-1",
            "sourceLabel": "JBoss Server",
            "sourceCardinality": "",
            "target": "Btdde5L8To60vzw6WzB_-1",
            "targetLabel": "Web Server Application",
            "targetCardinality": "",
            "cardinality": "",
            "description": "JBoss Server hasApplicationType Web Server Application."
          }
        ],
        "incomingRelations": [
          {
            "id": "DO7GT-WBBtTGcN2kVyb9-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server."
          },
          {
            "id": "sxwr4EOJseUQ3gBsYOZb-2",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "source": "Dk6PDdwM20E52lIHaNhg-1",
            "sourceLabel": "JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "",
            "cardinality": "",
            "description": "JBoss Vulnerability affectsProcess JBoss Server."
          },
          {
            "id": "8OmmlQFm2b0RUREKoeL3-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Web Server hostsResource JBoss Server."
          }
        ]
      },
      "position": {
        "x": 380.0,
        "y": 620.0
      }
    },
    {
      "data": {
        "id": "Dk6PDdwM20E52lIHaNhg-1",
        "name": "JBoss Vulnerability",
        "label": "JBoss Vulnerability",
        "metamodelEntity": "SoftwareVulnerability",
        "description": "JBoss Vulnerability is a case-study instance of the SoftwareVulnerability entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "Dk6PDdwM20E52lIHaNhg-1",
        "drawioPosition": {
          "x": 315.0,
          "y": 460.0
        },
        "drawioGeometry": {
          "x": 240.0,
          "y": 440.0,
          "width": 150.0,
          "height": 40.0
        },
        "layoutWidth": 150.0,
        "layoutHeight": 40,
        "textMaxWidth": 138.0,
        "outgoingRelations": [
          {
            "id": "sxwr4EOJseUQ3gBsYOZb-2",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "source": "Dk6PDdwM20E52lIHaNhg-1",
            "sourceLabel": "JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "",
            "cardinality": "",
            "description": "JBoss Vulnerability affectsProcess JBoss Server."
          }
        ],
        "incomingRelations": [
          {
            "id": "Dk6PDdwM20E52lIHaNhg-2",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "targetLabel": "JBoss Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability."
          },
          {
            "id": "Rnk911M4N2P_T4AlKA5v-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "IPQajqL7GtjNWv-qm3LO-3",
            "sourceLabel": "Exploit Public-Facing Application",
            "sourceCardinality": "1..*",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "targetLabel": "JBoss Vulnerability",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability."
          }
        ]
      },
      "position": {
        "x": 475.0,
        "y": 510.0
      }
    },
    {
      "data": {
        "id": "Btdde5L8To60vzw6WzB_-1",
        "name": "Web Server Application",
        "label": "Web Server Application",
        "metamodelEntity": "ApplicationType",
        "description": "Web Server Application is a case-study instance of the ApplicationType entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Application portfolio catalogues",
          "Software classification taxonomies",
          "Vendor product documentation",
          "Enterprise architecture repositories"
        ],
        "drawioId": "Btdde5L8To60vzw6WzB_-1",
        "drawioPosition": {
          "x": 220.0,
          "y": 650.0
        },
        "drawioGeometry": {
          "x": 150.0,
          "y": 630.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W3W2Np_yM1KxrGV2YGuf-1",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "source": "XqnBadelrtm9o-audj2r-1",
            "sourceLabel": "JBoss Server",
            "sourceCardinality": "",
            "target": "Btdde5L8To60vzw6WzB_-1",
            "targetLabel": "Web Server Application",
            "targetCardinality": "",
            "cardinality": "",
            "description": "JBoss Server hasApplicationType Web Server Application."
          }
        ]
      },
      "position": {
        "x": 380.0,
        "y": 700.0
      }
    },
    {
      "data": {
        "id": "r0pgC3ykTX_Oh4rQCJO8-1",
        "name": "Operation Wocao",
        "label": "Operation Wocao",
        "metamodelEntity": "Campaign",
        "description": "Operation Wocao is a case-study instance of the Campaign entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "r0pgC3ykTX_Oh4rQCJO8-1",
        "drawioPosition": {
          "x": 1130.0,
          "y": 320.0
        },
        "drawioGeometry": {
          "x": 1070.0,
          "y": 300.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "bEFLhpSV-8ZIpqk4wgaV-1",
            "name": "targetsSector",
            "label": "targetsSector",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "sourceLabel": "Operation Wocao",
            "sourceCardinality": "0..*",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "targetLabel": "Finance",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* Sector",
            "description": "Operation Wocao targetsSector Finance."
          },
          {
            "id": "XvtYkyKbk3l0ouDT-OjV-1",
            "name": "focusesOn",
            "label": "focusesOn",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "sourceLabel": "Operation Wocao",
            "sourceCardinality": "",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "targetLabel": "Germany",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Operation Wocao focusesOn Germany."
          }
        ],
        "incomingRelations": [
          {
            "id": "r0pgC3ykTX_Oh4rQCJO8-2",
            "name": "partsOf",
            "label": "partsOf",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "target": "r0pgC3ykTX_Oh4rQCJO8-1",
            "targetLabel": "Operation Wocao",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Attack against Organization partsOf Operation Wocao."
          }
        ]
      },
      "position": {
        "x": 1290.0,
        "y": 370.0
      }
    },
    {
      "data": {
        "id": "3gRsCNvQQYv_DzA845zK-2",
        "name": "JexBoss Instance",
        "label": "JexBoss Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "JexBoss Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "3gRsCNvQQYv_DzA845zK-2",
        "drawioPosition": {
          "x": 670.0,
          "y": 640.0
        },
        "drawioGeometry": {
          "x": 600.0,
          "y": 620.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "3gRsCNvQQYv_DzA845zK-2",
            "sourceLabel": "JexBoss Instance",
            "sourceCardinality": "1..*",
            "target": "3gRsCNvQQYv_DzA845zK-5",
            "targetLabel": "JexBoss",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "JexBoss Instance instanceOf JexBoss."
          }
        ],
        "incomingRelations": [
          {
            "id": "3gRsCNvQQYv_DzA845zK-3",
            "name": "employs",
            "label": "employs",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "sourceCardinality": "1..*",
            "target": "3gRsCNvQQYv_DzA845zK-2",
            "targetLabel": "JexBoss Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance."
          }
        ]
      },
      "position": {
        "x": 830.0,
        "y": 690.0
      }
    },
    {
      "data": {
        "id": "3gRsCNvQQYv_DzA845zK-5",
        "name": "JexBoss",
        "label": "JexBoss",
        "metamodelEntity": "AttackTool",
        "description": "JexBoss is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "3gRsCNvQQYv_DzA845zK-5",
        "drawioPosition": {
          "x": 550.0,
          "y": 730.0
        },
        "drawioGeometry": {
          "x": 480.0,
          "y": 710.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "3gRsCNvQQYv_DzA845zK-2",
            "sourceLabel": "JexBoss Instance",
            "sourceCardinality": "1..*",
            "target": "3gRsCNvQQYv_DzA845zK-5",
            "targetLabel": "JexBoss",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "JexBoss Instance instanceOf JexBoss."
          }
        ]
      },
      "position": {
        "x": 710.0,
        "y": 780.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-3",
        "name": "AS5: Exfiltration using Backdoor",
        "label": "AS5: Exfiltration using Backdoor",
        "metamodelEntity": "AttackStepItem",
        "description": "AS5: Exfiltration using Backdoor is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-3",
        "drawioPosition": {
          "x": 925.0,
          "y": 930.0
        },
        "drawioGeometry": {
          "x": 830.0,
          "y": 910.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-29",
            "name": "employs",
            "label": "employs",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "targetLabel": "XServer",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Exfiltration using Backdoor employs XServer."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-32",
            "name": "implements",
            "label": "implements",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-31",
            "targetLabel": "T1005",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Exfiltration using Backdoor implements T1005."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-35",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "",
            "target": "9Yofr0bB0NcOsz9Q7CJN-34",
            "targetLabel": "Exfiltrate Local Data",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data."
          },
          {
            "id": "Cb2qYGBpAWJw18aUzXTZ-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "0BVC2g_B0jFCjWbnhG5Y-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Exfiltration using Backdoor targetsResource Client Data."
          },
          {
            "id": "pfjEKUk9ezN4QYxd3kiN-1",
            "name": "compromises",
            "label": "compromises",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS5: Exfiltration using Backdoor compromises Client Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-10",
            "name": "followedBy",
            "label": "followedBy",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-3",
            "targetLabel": "AS5: Exfiltration using Backdoor",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor."
          }
        ]
      },
      "position": {
        "x": 1085.0,
        "y": 980.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-4",
        "name": "AS4: Custom Backdoor",
        "label": "AS4: Custom Backdoor",
        "metamodelEntity": "AttackStepItem",
        "description": "AS4: Custom Backdoor is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-4",
        "drawioPosition": {
          "x": 925.0,
          "y": 830.0
        },
        "drawioGeometry": {
          "x": 830.0,
          "y": 810.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-8",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "",
            "target": "9Yofr0bB0NcOsz9Q7CJN-7",
            "targetLabel": "Install Custom Backdoor",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-10",
            "name": "followedBy",
            "label": "followedBy",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-3",
            "targetLabel": "AS5: Exfiltration using Backdoor",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-14",
            "name": "implements",
            "label": "implements",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-12",
            "targetLabel": "T1059.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Custom Backdoor implements T1059.001."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-17",
            "name": "employs",
            "label": "employs",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-16",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: Custom Backdoor employs Powershell Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-5",
            "name": "followedBy",
            "label": "followedBy",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "sourceLabel": "AS3: Upload Webshell",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-4",
            "targetLabel": "AS4: Custom Backdoor",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor."
          }
        ]
      },
      "position": {
        "x": 1085.0,
        "y": 880.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-7",
        "name": "Install Custom Backdoor",
        "label": "Install Custom Backdoor",
        "metamodelEntity": "AttackStep",
        "description": "Install Custom Backdoor is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-7",
        "drawioPosition": {
          "x": 625.0,
          "y": 830.0
        },
        "drawioGeometry": {
          "x": 540.0,
          "y": 810.0,
          "width": 170.0,
          "height": 40.0
        },
        "layoutWidth": 170.0,
        "layoutHeight": 40,
        "textMaxWidth": 158.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-8",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "",
            "target": "9Yofr0bB0NcOsz9Q7CJN-7",
            "targetLabel": "Install Custom Backdoor",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor."
          }
        ]
      },
      "position": {
        "x": 785.0,
        "y": 880.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-12",
        "name": "T1059.001",
        "label": "T1059.001",
        "metamodelEntity": "TTP",
        "description": "T1059.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-12",
        "drawioPosition": {
          "x": 1072.5,
          "y": 770.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 750.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-14",
            "name": "implements",
            "label": "implements",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-12",
            "targetLabel": "T1059.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Custom Backdoor implements T1059.001."
          }
        ]
      },
      "position": {
        "x": 1232.5,
        "y": 820.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-16",
        "name": "Powershell Instance",
        "label": "Powershell Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Powershell Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-16",
        "drawioPosition": {
          "x": 625.0,
          "y": 920.0
        },
        "drawioGeometry": {
          "x": 555.0,
          "y": 900.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-20",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-19",
            "targetLabel": "Powershell",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Powershell Instance instanceOf Powershell."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-24",
            "name": "deploys",
            "label": "deploys",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-23",
            "targetLabel": "XServer Instance",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys XServer Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-17",
            "name": "employs",
            "label": "employs",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "sourceLabel": "AS4: Custom Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-16",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: Custom Backdoor employs Powershell Instance."
          }
        ]
      },
      "position": {
        "x": 785.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-19",
        "name": "Powershell",
        "label": "Powershell",
        "metamodelEntity": "AttackTool",
        "description": "Powershell is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-19",
        "drawioPosition": {
          "x": 625.0,
          "y": 1010.0
        },
        "drawioGeometry": {
          "x": 555.0,
          "y": 990.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-20",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-19",
            "targetLabel": "Powershell",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Powershell Instance instanceOf Powershell."
          }
        ]
      },
      "position": {
        "x": 785.0,
        "y": 1060.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-23",
        "name": "XServer Instance",
        "label": "XServer Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "XServer Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-23",
        "drawioPosition": {
          "x": 420.0,
          "y": 1120.0
        },
        "drawioGeometry": {
          "x": 350.0,
          "y": 1100.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-27",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "9Yofr0bB0NcOsz9Q7CJN-23",
            "sourceLabel": "XServer Instance",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "targetLabel": "XServer",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "XServer Instance instanceOf XServer."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-24",
            "name": "deploys",
            "label": "deploys",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-23",
            "targetLabel": "XServer Instance",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys XServer Instance."
          }
        ]
      },
      "position": {
        "x": 580.0,
        "y": 1170.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-26",
        "name": "XServer",
        "label": "XServer",
        "metamodelEntity": "AttackTool",
        "description": "XServer is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-26",
        "drawioPosition": {
          "x": 420.0,
          "y": 1221.0
        },
        "drawioGeometry": {
          "x": 350.0,
          "y": 1201.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-29",
            "name": "employs",
            "label": "employs",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "targetLabel": "XServer",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Exfiltration using Backdoor employs XServer."
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-27",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "9Yofr0bB0NcOsz9Q7CJN-23",
            "sourceLabel": "XServer Instance",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "targetLabel": "XServer",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "XServer Instance instanceOf XServer."
          }
        ]
      },
      "position": {
        "x": 580.0,
        "y": 1271.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-31",
        "name": "T1005",
        "label": "T1005",
        "metamodelEntity": "TTP",
        "description": "T1005 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-31",
        "drawioPosition": {
          "x": 1072.5,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 980.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-1",
            "name": "impacts",
            "label": "impacts",
            "source": "9Yofr0bB0NcOsz9Q7CJN-31",
            "sourceLabel": "T1005",
            "sourceCardinality": "",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "",
            "cardinality": "",
            "description": "T1005 impacts Client Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-32",
            "name": "implements",
            "label": "implements",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "9Yofr0bB0NcOsz9Q7CJN-31",
            "targetLabel": "T1005",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Exfiltration using Backdoor implements T1005."
          }
        ]
      },
      "position": {
        "x": 1232.5,
        "y": 1050.0
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-34",
        "name": "Exfiltrate Local Data",
        "label": "Exfiltrate Local Data",
        "metamodelEntity": "AttackStep",
        "description": "Exfiltrate Local Data is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-34",
        "drawioPosition": {
          "x": 925.0,
          "y": 1060.0
        },
        "drawioGeometry": {
          "x": 840.0,
          "y": 1040.0,
          "width": 170.0,
          "height": 40.0
        },
        "layoutWidth": 170.0,
        "layoutHeight": 40,
        "textMaxWidth": 158.0,
        "outgoingRelations": [
          {
            "id": "OhYZWlmZeSA9s69LXVcg-1",
            "name": "violates",
            "label": "violates",
            "source": "9Yofr0bB0NcOsz9Q7CJN-34",
            "sourceLabel": "Exfiltrate Local Data",
            "sourceCardinality": "1..*",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "Exfiltrate Local Data violates Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-35",
            "name": "refersTo",
            "label": "refersTo",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "",
            "target": "9Yofr0bB0NcOsz9Q7CJN-34",
            "targetLabel": "Exfiltrate Local Data",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data."
          }
        ]
      },
      "position": {
        "x": 1085.0,
        "y": 1110.0
      }
    },
    {
      "data": {
        "id": "R0iVRIHVncbUqXWk4Rdu-1",
        "name": "Confidentiality",
        "label": "Confidentiality",
        "metamodelEntity": "SecurityRequirement",
        "description": "Confidentiality is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "R0iVRIHVncbUqXWk4Rdu-1",
        "drawioPosition": {
          "x": 40.0,
          "y": 900.0
        },
        "drawioGeometry": {
          "x": -30.0,
          "y": 880.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "OhYZWlmZeSA9s69LXVcg-1",
            "name": "violates",
            "label": "violates",
            "source": "9Yofr0bB0NcOsz9Q7CJN-34",
            "sourceLabel": "Exfiltrate Local Data",
            "sourceCardinality": "1..*",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "Exfiltrate Local Data violates Confidentiality."
          },
          {
            "id": "6eOacnnfol6akpcFKc8O-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "nlouQvjGSw6mbKcphsgJ-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1..*",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Client Data implementationOf Confidentiality."
          }
        ]
      },
      "position": {
        "x": 200.0,
        "y": 950.0
      }
    },
    {
      "data": {
        "id": "0BVC2g_B0jFCjWbnhG5Y-1",
        "name": "Client Data",
        "label": "Client Data",
        "metamodelEntity": "Asset",
        "description": "Client Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "drawioId": "0BVC2g_B0jFCjWbnhG5Y-1",
        "drawioPosition": {
          "x": 230.0,
          "y": 950.0
        },
        "drawioGeometry": {
          "x": 160.0,
          "y": 930.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "nlouQvjGSw6mbKcphsgJ-3",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "0BVC2g_B0jFCjWbnhG5Y-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement Client Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "Cb2qYGBpAWJw18aUzXTZ-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "0BVC2g_B0jFCjWbnhG5Y-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Exfiltration using Backdoor targetsResource Client Data."
          }
        ]
      },
      "position": {
        "x": 390.0,
        "y": 1000.0
      }
    },
    {
      "data": {
        "id": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "Client Data",
        "label": "Client Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "Client Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Security requirement catalogues",
          "Risk assessment and treatment plans",
          "Data classification policy and asset criticality analysis",
          "Compliance controls linked to specific assets"
        ],
        "drawioId": "nlouQvjGSw6mbKcphsgJ-1",
        "drawioPosition": {
          "x": 230.0,
          "y": 820.0
        },
        "drawioGeometry": {
          "x": 160.0,
          "y": 800.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "6eOacnnfol6akpcFKc8O-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "nlouQvjGSw6mbKcphsgJ-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1..*",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Client Data implementationOf Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "pfjEKUk9ezN4QYxd3kiN-1",
            "name": "compromises",
            "label": "compromises",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "sourceCardinality": "1..*",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS5: Exfiltration using Backdoor compromises Client Data."
          },
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-1",
            "name": "impacts",
            "label": "impacts",
            "source": "9Yofr0bB0NcOsz9Q7CJN-31",
            "sourceLabel": "T1005",
            "sourceCardinality": "",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "",
            "cardinality": "",
            "description": "T1005 impacts Client Data."
          },
          {
            "id": "nlouQvjGSw6mbKcphsgJ-3",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "0BVC2g_B0jFCjWbnhG5Y-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement Client Data."
          },
          {
            "id": "6eOacnnfol6akpcFKc8O-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "6eOacnnfol6akpcFKc8O-3",
            "sourceLabel": "Sensitive data must remain confidential",
            "sourceCardinality": "1..*",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data."
          },
          {
            "id": "TQ2-MOSyF8PbvZfVK9nl-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Web Server hostsResource Client Data."
          }
        ]
      },
      "position": {
        "x": 390.0,
        "y": 870.0
      }
    },
    {
      "data": {
        "id": "6eOacnnfol6akpcFKc8O-3",
        "name": "Sensitive data must remain confidential",
        "label": "Sensitive data must remain confidential",
        "metamodelEntity": "BusinessRequirement",
        "description": "Sensitive data must remain confidential is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "drawioId": "6eOacnnfol6akpcFKc8O-3",
        "drawioPosition": {
          "x": 30.0,
          "y": 600.0
        },
        "drawioGeometry": {
          "x": -40.0,
          "y": 560.0,
          "width": 140.0,
          "height": 80.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 80.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "6eOacnnfol6akpcFKc8O-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "6eOacnnfol6akpcFKc8O-3",
            "sourceLabel": "Sensitive data must remain confidential",
            "sourceCardinality": "1..*",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "BLdz90eUOZqGWJi0qpWp-2",
            "name": "hasBusinessRequirment",
            "label": "hasBusinessRequirment",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "",
            "target": "6eOacnnfol6akpcFKc8O-3",
            "targetLabel": "Sensitive data must remain confidential",
            "targetCardinality": "",
            "cardinality": "",
            "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential."
          }
        ]
      },
      "position": {
        "x": 190.0,
        "y": 650.0
      }
    },
    {
      "data": {
        "id": "ONCgWmA4yeiABO8jPh6Q-3",
        "name": "Prod-Infra",
        "label": "Prod-Infra",
        "metamodelEntity": "Infrastructure",
        "description": "Prod-Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "drawioId": "ONCgWmA4yeiABO8jPh6Q-3",
        "drawioPosition": {
          "x": 420.0,
          "y": 300.0
        },
        "drawioGeometry": {
          "x": 360.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
            "name": "madeBy",
            "label": "madeBy",
            "source": "ONCgWmA4yeiABO8jPh6Q-3",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "targetLabel": "N1: Web Server",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Web Server."
          }
        ],
        "incomingRelations": [
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-4",
            "name": "manages",
            "label": "manages",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "sourceLabel": "FinOrg",
            "sourceCardinality": "1",
            "target": "ONCgWmA4yeiABO8jPh6Q-3",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "FinOrg manages Prod-Infra."
          }
        ]
      },
      "position": {
        "x": 580.0,
        "y": 350.0
      }
    },
    {
      "data": {
        "id": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "name": "N1: Web Server",
        "label": "N1: Web Server",
        "metamodelEntity": "Node",
        "description": "N1: Web Server is a case-study instance of the Node entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "CMDB and asset inventory",
          "Network discovery scans",
          "Endpoint management or EDR inventory",
          "Infrastructure-as-code and cloud asset exports"
        ],
        "drawioId": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "drawioPosition": {
          "x": 510.0,
          "y": 390.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 370.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1..*",
            "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
            "targetLabel": "Web Application Server",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Web Server hasNodeType Web Application Server."
          },
          {
            "id": "8OmmlQFm2b0RUREKoeL3-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "targetLabel": "JBoss Server",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Web Server hostsResource JBoss Server."
          },
          {
            "id": "TQ2-MOSyF8PbvZfVK9nl-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Web Server hostsResource Client Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
            "name": "madeBy",
            "label": "madeBy",
            "source": "ONCgWmA4yeiABO8jPh6Q-3",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "targetLabel": "N1: Web Server",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Web Server."
          }
        ]
      },
      "position": {
        "x": 670.0,
        "y": 440.0
      }
    },
    {
      "data": {
        "id": "FMxZ0zwrN68Z7Mt1Hq2i-1",
        "name": "Web Application Server",
        "label": "Web Application Server",
        "metamodelEntity": "NodeType",
        "description": "Web Application Server is a case-study instance of the NodeType entity in the feasibility-oriented metamodel.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "drawioId": "FMxZ0zwrN68Z7Mt1Hq2i-1",
        "drawioPosition": {
          "x": 595.0,
          "y": 300.0
        },
        "drawioGeometry": {
          "x": 520.0,
          "y": 280.0,
          "width": 150.0,
          "height": 40.0
        },
        "layoutWidth": 150.0,
        "layoutHeight": 40,
        "textMaxWidth": 138.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "sourceLabel": "N1: Web Server",
            "sourceCardinality": "1..*",
            "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
            "targetLabel": "Web Application Server",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Web Server hasNodeType Web Application Server."
          }
        ]
      },
      "position": {
        "x": 755.0,
        "y": 350.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "0BvM-G4DcYzrvQnhOk9X-3",
        "label": "basedIn",
        "name": "basedIn",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "0BvM-G4DcYzrvQnhOk9X-2",
        "sourceLabel": "FinOrg",
        "targetLabel": "Germany",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "HomeCountry",
        "description": "FinOrg basedIn Germany.",
        "drawioId": "0BvM-G4DcYzrvQnhOk9X-3",
        "sourceCardinality": "1",
        "targetCardinality": "",
        "cardinality": "Organization 1 —  HomeCountry"
      }
    },
    {
      "data": {
        "id": "izy8kfX3pBO5z0ifo8so-2",
        "label": "operatesIn",
        "name": "operatesIn",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "izy8kfX3pBO5z0ifo8so-1",
        "sourceLabel": "FinOrg",
        "targetLabel": "Finance",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Sector",
        "description": "FinOrg operatesIn Finance.",
        "drawioId": "izy8kfX3pBO5z0ifo8so-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Sector"
      }
    },
    {
      "data": {
        "id": "BLdz90eUOZqGWJi0qpWp-2",
        "label": "hasBusinessRequirment",
        "name": "hasBusinessRequirment",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "6eOacnnfol6akpcFKc8O-3",
        "sourceLabel": "FinOrg",
        "targetLabel": "Sensitive data must remain confidential",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "BusinessRequirement",
        "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential.",
        "drawioId": "BLdz90eUOZqGWJi0qpWp-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "ONCgWmA4yeiABO8jPh6Q-4",
        "label": "manages",
        "name": "manages",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "ONCgWmA4yeiABO8jPh6Q-3",
        "sourceLabel": "FinOrg",
        "targetLabel": "Prod-Infra",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Infrastructure",
        "description": "FinOrg manages Prod-Infra.",
        "drawioId": "ONCgWmA4yeiABO8jPh6Q-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure"
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-3",
        "label": "partsOf",
        "name": "partsOf",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-2",
        "target": "qnMAzMPU2UIx0dhE2o8o-2",
        "sourceLabel": "Germany",
        "targetLabel": "European Union",
        "sourceMetamodelEntity": "HomeCountry",
        "targetMetamodelEntity": "InternationalBody",
        "description": "Germany partsOf European Union.",
        "drawioId": "qnMAzMPU2UIx0dhE2o8o-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "HomeCountry 1..* — 1..* International Body"
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-5",
        "label": "partsOf",
        "name": "partsOf",
        "kind": "relationship",
        "source": "0BvM-G4DcYzrvQnhOk9X-2",
        "target": "qnMAzMPU2UIx0dhE2o8o-4",
        "sourceLabel": "Germany",
        "targetLabel": "NATO",
        "sourceMetamodelEntity": "HomeCountry",
        "targetMetamodelEntity": "InternationalBody",
        "description": "Germany partsOf NATO.",
        "drawioId": "qnMAzMPU2UIx0dhE2o8o-5",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "HomeCountry 1..* — 1..* International Body"
      }
    },
    {
      "data": {
        "id": "vcZTPhuOb6B-M6w-B_EE-5",
        "label": "relatedTo",
        "name": "relatedTo",
        "kind": "relationship",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "vcZTPhuOb6B-M6w-B_EE-4",
        "sourceLabel": "APT20",
        "targetLabel": "China-backed Group",
        "sourceMetamodelEntity": "ThreatSource",
        "targetMetamodelEntity": "Adversary",
        "description": "APT20 relatedTo China-backed Group.",
        "drawioId": "vcZTPhuOb6B-M6w-B_EE-5",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatActor 1..* — 0..* Adversary"
      }
    },
    {
      "data": {
        "id": "RB2Fht_Hu-7ZOwt2WELK-2",
        "label": "hasExpertise",
        "name": "hasExpertise",
        "kind": "relationship",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "RB2Fht_Hu-7ZOwt2WELK-1",
        "sourceLabel": "APT20",
        "targetLabel": "Expert",
        "sourceMetamodelEntity": "ThreatSource",
        "targetMetamodelEntity": "Expertise",
        "description": "APT20 hasExpertise Expert.",
        "drawioId": "RB2Fht_Hu-7ZOwt2WELK-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1..* — 1 Expertise"
      }
    },
    {
      "data": {
        "id": "9HdykkMEKshDh6IqXlot-1",
        "label": "initiates",
        "name": "initiates",
        "kind": "relationship",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "MXbeosHEiHACBSZkGos4-1",
        "sourceLabel": "APT20",
        "targetLabel": "Attack against Organization",
        "sourceMetamodelEntity": "ThreatSource",
        "targetMetamodelEntity": "ThreatEvent",
        "description": "APT20 initiates Attack against Organization.",
        "drawioId": "9HdykkMEKshDh6IqXlot-1",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat"
      }
    },
    {
      "data": {
        "id": "Y4xnolLzykD4MCw7Hd5a-1",
        "label": "hasAdversaryType",
        "name": "hasAdversaryType",
        "kind": "relationship",
        "source": "vcZTPhuOb6B-M6w-B_EE-4",
        "target": "cvImlgJpU3P0QqpsDf0G-1",
        "sourceLabel": "China-backed Group",
        "targetLabel": "State-sponsored actor",
        "sourceMetamodelEntity": "Adversary",
        "targetMetamodelEntity": "AdversaryType",
        "description": "China-backed Group hasAdversaryType State-sponsored actor.",
        "drawioId": "Y4xnolLzykD4MCw7Hd5a-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Adversary 1..* — 1 AdversaryType"
      }
    },
    {
      "data": {
        "id": "9HdykkMEKshDh6IqXlot-4",
        "label": "startsWith",
        "name": "startsWith",
        "kind": "relationship",
        "source": "MXbeosHEiHACBSZkGos4-1",
        "target": "9HdykkMEKshDh6IqXlot-3",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "AS1: Active Recon",
        "sourceMetamodelEntity": "ThreatEvent",
        "targetMetamodelEntity": "AttackStepItem",
        "description": "Attack against Organization startsWith AS1: Active Recon.",
        "drawioId": "9HdykkMEKshDh6IqXlot-4",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "r0pgC3ykTX_Oh4rQCJO8-2",
        "label": "partsOf",
        "name": "partsOf",
        "kind": "relationship",
        "source": "MXbeosHEiHACBSZkGos4-1",
        "target": "r0pgC3ykTX_Oh4rQCJO8-1",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "Operation Wocao",
        "sourceMetamodelEntity": "ThreatEvent",
        "targetMetamodelEntity": "Campaign",
        "description": "Attack against Organization partsOf Operation Wocao.",
        "drawioId": "r0pgC3ykTX_Oh4rQCJO8-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "vJn6_qnLwv68IXdAuOWm-2",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "vJn6_qnLwv68IXdAuOWm-1",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "Active Recon",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStep",
        "description": "AS1: Active Recon refersTo Active Recon.",
        "drawioId": "vJn6_qnLwv68IXdAuOWm-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "jCq8-NTqf9Jp3o_aXnjk-2",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "jCq8-NTqf9Jp3o_aXnjk-1",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "T1595",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "TTP",
        "description": "AS1: Active Recon implements T1595.",
        "drawioId": "jCq8-NTqf9Jp3o_aXnjk-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-1",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "DyAQahDk-dQDjuwduhnR-1",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "AS2: Exploit JBoss Vulnerability",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStepItem",
        "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-1",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-4",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-3",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "Exploit Public-Facing Application",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStep",
        "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-4",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-7",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-6",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "T1190",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "TTP",
        "description": "AS2: Exploit JBoss Vulnerability implements T1190.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-7",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-10",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-9",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "AS3: Upload Webshell",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStepItem",
        "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-10",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "DO7GT-WBBtTGcN2kVyb9-1",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JBoss Server",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "ApplicationInstance",
        "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server.",
        "drawioId": "DO7GT-WBBtTGcN2kVyb9-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "Dk6PDdwM20E52lIHaNhg-2",
        "label": "relatesTo",
        "name": "relatesTo",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "Dk6PDdwM20E52lIHaNhg-1",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JBoss Vulnerability",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "SoftwareVulnerability",
        "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability.",
        "drawioId": "Dk6PDdwM20E52lIHaNhg-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "3gRsCNvQQYv_DzA845zK-3",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "3gRsCNvQQYv_DzA845zK-2",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JexBoss Instance",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance.",
        "drawioId": "3gRsCNvQQYv_DzA845zK-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "Rnk911M4N2P_T4AlKA5v-1",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "IPQajqL7GtjNWv-qm3LO-3",
        "target": "Dk6PDdwM20E52lIHaNhg-1",
        "sourceLabel": "Exploit Public-Facing Application",
        "targetLabel": "JBoss Vulnerability",
        "sourceMetamodelEntity": "AttackStep",
        "targetMetamodelEntity": "SoftwareVulnerability",
        "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability.",
        "drawioId": "Rnk911M4N2P_T4AlKA5v-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-13",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "IPQajqL7GtjNWv-qm3LO-12",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "Web Shell",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStep",
        "description": "AS3: Upload Webshell refersTo Web Shell.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-13",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-16",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "IPQajqL7GtjNWv-qm3LO-15",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "T1505.003",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "TTP",
        "description": "AS3: Upload Webshell implements T1505.003.",
        "drawioId": "IPQajqL7GtjNWv-qm3LO-16",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "W3W2Np_yM1KxrGV2YGuf-1",
        "label": "hasApplicationType",
        "name": "hasApplicationType",
        "kind": "relationship",
        "source": "XqnBadelrtm9o-audj2r-1",
        "target": "Btdde5L8To60vzw6WzB_-1",
        "sourceLabel": "JBoss Server",
        "targetLabel": "Web Server Application",
        "sourceMetamodelEntity": "ApplicationInstance",
        "targetMetamodelEntity": "ApplicationType",
        "description": "JBoss Server hasApplicationType Web Server Application.",
        "drawioId": "W3W2Np_yM1KxrGV2YGuf-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "sxwr4EOJseUQ3gBsYOZb-2",
        "label": "affectsProcess",
        "name": "affectsProcess",
        "kind": "relationship",
        "source": "Dk6PDdwM20E52lIHaNhg-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "sourceLabel": "JBoss Vulnerability",
        "targetLabel": "JBoss Server",
        "sourceMetamodelEntity": "SoftwareVulnerability",
        "targetMetamodelEntity": "ApplicationInstance",
        "description": "JBoss Vulnerability affectsProcess JBoss Server.",
        "drawioId": "sxwr4EOJseUQ3gBsYOZb-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "bEFLhpSV-8ZIpqk4wgaV-1",
        "label": "targetsSector",
        "name": "targetsSector",
        "kind": "relationship",
        "source": "r0pgC3ykTX_Oh4rQCJO8-1",
        "target": "izy8kfX3pBO5z0ifo8so-1",
        "sourceLabel": "Operation Wocao",
        "targetLabel": "Finance",
        "sourceMetamodelEntity": "Campaign",
        "targetMetamodelEntity": "Sector",
        "description": "Operation Wocao targetsSector Finance.",
        "drawioId": "bEFLhpSV-8ZIpqk4wgaV-1",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Campaign 0..* — 0..* Sector"
      }
    },
    {
      "data": {
        "id": "XvtYkyKbk3l0ouDT-OjV-1",
        "label": "focusesOn",
        "name": "focusesOn",
        "kind": "relationship",
        "source": "r0pgC3ykTX_Oh4rQCJO8-1",
        "target": "0BvM-G4DcYzrvQnhOk9X-2",
        "sourceLabel": "Operation Wocao",
        "targetLabel": "Germany",
        "sourceMetamodelEntity": "Campaign",
        "targetMetamodelEntity": "HomeCountry",
        "description": "Operation Wocao focusesOn Germany.",
        "drawioId": "XvtYkyKbk3l0ouDT-OjV-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-1",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "3gRsCNvQQYv_DzA845zK-2",
        "target": "3gRsCNvQQYv_DzA845zK-5",
        "sourceLabel": "JexBoss Instance",
        "targetLabel": "JexBoss",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "JexBoss Instance instanceOf JexBoss.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-29",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-26",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "XServer",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackTool",
        "description": "AS5: Exfiltration using Backdoor employs XServer.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-29",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-32",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-31",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "T1005",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "TTP",
        "description": "AS5: Exfiltration using Backdoor implements T1005.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-32",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-35",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-34",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Exfiltrate Local Data",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStep",
        "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-35",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "Cb2qYGBpAWJw18aUzXTZ-1",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "0BVC2g_B0jFCjWbnhG5Y-1",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "Asset",
        "description": "AS5: Exfiltration using Backdoor targetsResource Client Data.",
        "drawioId": "Cb2qYGBpAWJw18aUzXTZ-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "pfjEKUk9ezN4QYxd3kiN-1",
        "label": "compromises",
        "name": "compromises",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "AS5: Exfiltration using Backdoor compromises Client Data.",
        "drawioId": "pfjEKUk9ezN4QYxd3kiN-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-8",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-7",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "Install Custom Backdoor",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStep",
        "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-8",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-10",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-3",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "AS5: Exfiltration using Backdoor",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStepItem",
        "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-10",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-14",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-12",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "T1059.001",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "TTP",
        "description": "AS4: Custom Backdoor implements T1059.001.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-14",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-17",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-16",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "Powershell Instance",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS4: Custom Backdoor employs Powershell Instance.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-17",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-5",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "9Yofr0bB0NcOsz9Q7CJN-4",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "AS4: Custom Backdoor",
        "sourceMetamodelEntity": "AttackStepItem",
        "targetMetamodelEntity": "AttackStepItem",
        "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-5",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-20",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-16",
        "target": "9Yofr0bB0NcOsz9Q7CJN-19",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "Powershell",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Powershell Instance instanceOf Powershell.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-20",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-24",
        "label": "deploys",
        "name": "deploys",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-16",
        "target": "9Yofr0bB0NcOsz9Q7CJN-23",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "XServer Instance",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Powershell Instance deploys XServer Instance.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-24",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-27",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-23",
        "target": "9Yofr0bB0NcOsz9Q7CJN-26",
        "sourceLabel": "XServer Instance",
        "targetLabel": "XServer",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "XServer Instance instanceOf XServer.",
        "drawioId": "9Yofr0bB0NcOsz9Q7CJN-27",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "ONCgWmA4yeiABO8jPh6Q-1",
        "label": "impacts",
        "name": "impacts",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-31",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "sourceLabel": "T1005",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "T1005 impacts Client Data.",
        "drawioId": "ONCgWmA4yeiABO8jPh6Q-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "OhYZWlmZeSA9s69LXVcg-1",
        "label": "violates",
        "name": "violates",
        "kind": "relationship",
        "source": "9Yofr0bB0NcOsz9Q7CJN-34",
        "target": "R0iVRIHVncbUqXWk4Rdu-1",
        "sourceLabel": "Exfiltrate Local Data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "AttackStep",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "Exfiltrate Local Data violates Confidentiality.",
        "drawioId": "OhYZWlmZeSA9s69LXVcg-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "nlouQvjGSw6mbKcphsgJ-3",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "0BVC2g_B0jFCjWbnhG5Y-1",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "sourceLabel": "Client Data",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Client Data hasSecurityRequirement Client Data.",
        "drawioId": "nlouQvjGSw6mbKcphsgJ-3",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "6eOacnnfol6akpcFKc8O-1",
        "label": "implementationOf",
        "name": "implementationOf",
        "kind": "relationship",
        "source": "nlouQvjGSw6mbKcphsgJ-1",
        "target": "R0iVRIHVncbUqXWk4Rdu-1",
        "sourceLabel": "Client Data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "AssetSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "Client Data implementationOf Confidentiality.",
        "drawioId": "6eOacnnfol6akpcFKc8O-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "6eOacnnfol6akpcFKc8O-4",
        "label": "drivesSecurityRequirement",
        "name": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "6eOacnnfol6akpcFKc8O-3",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "sourceLabel": "Sensitive data must remain confidential",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data.",
        "drawioId": "6eOacnnfol6akpcFKc8O-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
        "label": "madeBy",
        "name": "madeBy",
        "kind": "relationship",
        "source": "ONCgWmA4yeiABO8jPh6Q-3",
        "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "N1: Web Server",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "description": "Prod-Infra madeBy N1: Web Server.",
        "drawioId": "Ocu_n1y9aNbJ_N_YXtDR-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node"
      }
    },
    {
      "data": {
        "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "Web Application Server",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "description": "N1: Web Server hasNodeType Web Application Server.",
        "drawioId": "FMxZ0zwrN68Z7Mt1Hq2i-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType"
      }
    },
    {
      "data": {
        "id": "8OmmlQFm2b0RUREKoeL3-1",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "JBoss Server",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "ApplicationInstance",
        "description": "N1: Web Server hostsResource JBoss Server.",
        "drawioId": "8OmmlQFm2b0RUREKoeL3-1",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
      }
    },
    {
      "data": {
        "id": "TQ2-MOSyF8PbvZfVK9nl-2",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "N1: Web Server hostsResource Client Data.",
        "drawioId": "TQ2-MOSyF8PbvZfVK9nl-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
      }
    }
  ]
};
