const caseData = {
  "metadata": {
    "id": "cs3",
    "title": "CS3 — Cloud/SaaS exposure and data exfiltration",
    "shortTitle": "Cloud/SaaS exposure and data exfiltration",
    "description": "Interactive implementation of the cloud/SaaS exposure and data exfiltration case study.",
    "source": "metamodel_v2-case3.drawio.xml",
    "layout": {
      "minX": -725.0,
      "minY": 310.0,
      "maxX": 820.0,
      "maxY": 1055.0,
      "width": 1785.0,
      "height": 985.0,
      "padding": 120
    },
    "determinants": [
      "D2",
      "D5",
      "D7"
    ],
    "patterns": [
      "P2",
      "P3",
      "P4"
    ],
    "review": {
      "generatedFrom": "metamodel_v2-case3.drawio (1).xml",
      "realDrawioEntities": 30,
      "drawioRelationships": 36,
      "excludedEdgeLabelCells": 36,
      "unmatchedRelationships": [
        {
          "label": "startsWith",
          "sourceMetamodelEntity": "Threat",
          "targetMetamodelEntity": "ThreatStep",
          "source": "Attack against Organization",
          "target": "AS1: Social-engineering access brokerage"
        },
        {
          "label": "isSource",
          "sourceMetamodelEntity": "Node",
          "targetMetamodelEntity": "Connection",
          "source": "N1: Workstation",
          "target": "Salesforce Data Management"
        }
      ]
    }
  },
  "nodes": [
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-13",
        "name": "UNC6040",
        "label": "UNC6040",
        "metamodelEntity": "ThreatActor",
        "rawMetamodelEntity": "ThreatActor",
        "description": "UNC6040 is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-13",
        "drawioPosition": {
          "x": 427.0,
          "y": 360.0
        },
        "drawioGeometry": {
          "x": 367.0,
          "y": 340.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "W-R75xxI9TsONGAs6iK0-16",
            "targetLabel": "ShinyHunters",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "Adversary",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "UNC6040 relatedTo ShinyHunters.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-11",
            "name": "initiates",
            "label": "initiates",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "W-R75xxI9TsONGAs6iK0-23",
            "targetLabel": "Attack against Organization",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Threat",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "UNC6040 initiates Attack against Organization.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "skMsq092CygeLry3JUE3-2",
            "name": "alias",
            "label": "alias",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "skMsq092CygeLry3JUE3-1",
            "targetLabel": "UNC6240",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatActor",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "UNC6040 alias UNC6240.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1272.0,
        "y": 170.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-16",
        "name": "ShinyHunters",
        "label": "ShinyHunters",
        "metamodelEntity": "Adversary",
        "rawMetamodelEntity": "Adversary",
        "description": "ShinyHunters is a case-study instance of the Adversary entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-16",
        "drawioPosition": {
          "x": 632.0,
          "y": 360.0
        },
        "drawioGeometry": {
          "x": 567.0,
          "y": 340.0,
          "width": 130.0,
          "height": 40.0
        },
        "layoutWidth": 130.0,
        "layoutHeight": 40,
        "textMaxWidth": 118.0,
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-14",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "W-R75xxI9TsONGAs6iK0-16",
            "sourceLabel": "ShinyHunters",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Adversary",
            "target": "W-R75xxI9TsONGAs6iK0-17",
            "targetLabel": "Criminal Group",
            "targetCardinality": "1",
            "targetMetamodelEntity": "AdversaryType",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "ShinyHunters hasAdversaryType Criminal Group.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "W-R75xxI9TsONGAs6iK0-16",
            "targetLabel": "ShinyHunters",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "Adversary",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "UNC6040 relatedTo ShinyHunters.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1477.0,
        "y": 170.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-17",
        "name": "Criminal Group",
        "label": "Criminal Group",
        "metamodelEntity": "AdversaryType",
        "rawMetamodelEntity": "AdversaryType",
        "description": "Criminal Group is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-17",
        "drawioPosition": {
          "x": 632.0,
          "y": 440.0
        },
        "drawioGeometry": {
          "x": 567.0,
          "y": 420.0,
          "width": 130.0,
          "height": 40.0
        },
        "layoutWidth": 130.0,
        "layoutHeight": 40,
        "textMaxWidth": 118.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-14",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "W-R75xxI9TsONGAs6iK0-16",
            "sourceLabel": "ShinyHunters",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Adversary",
            "target": "W-R75xxI9TsONGAs6iK0-17",
            "targetLabel": "Criminal Group",
            "targetCardinality": "1",
            "targetMetamodelEntity": "AdversaryType",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "ShinyHunters hasAdversaryType Criminal Group.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1477.0,
        "y": 250.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-23",
        "name": "Attack against Organization",
        "label": "Attack against Organization",
        "metamodelEntity": "Threat",
        "rawMetamodelEntity": "Threat",
        "description": "Attack against Organization is a case-study instance of the Threat entity in the feasibility-oriented metamodel.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident timelines and case-management systems",
          "SIEM and EDR event records",
          "CTI reports describing observed activity",
          "Forensic investigation notes"
        ],
        "drawioId": "W-R75xxI9TsONGAs6iK0-23",
        "drawioPosition": {
          "x": 427.0,
          "y": 450.0
        },
        "drawioGeometry": {
          "x": 367.0,
          "y": 430.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-19",
            "name": "startsWith",
            "label": "startsWith",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "Threat",
            "target": "W-R75xxI9TsONGAs6iK0-30",
            "targetLabel": "AS1: Social-engineering access brokerage",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "Threat — ThreatStep",
            "description": "Attack against Organization startsWith AS1: Social-engineering access brokerage.",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-21",
            "name": "partsOf",
            "label": "partsOf",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Threat",
            "target": "W-R75xxI9TsONGAs6iK0-47",
            "targetLabel": "Vishing Campaign against Salesforce",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Campaign",
            "cardinality": "Threat 1..* — 1 Campaign",
            "description": "Attack against Organization partsOf Vishing Campaign against Salesforce.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-11",
            "name": "initiates",
            "label": "initiates",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "W-R75xxI9TsONGAs6iK0-23",
            "targetLabel": "Attack against Organization",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Threat",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "UNC6040 initiates Attack against Organization.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 260.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-30",
        "name": "AS1: Social-engineering access brokerage",
        "label": "AS1: Social-engineering access brokerage",
        "metamodelEntity": "ThreatStep",
        "rawMetamodelEntity": "ThreatStep",
        "description": "AS1: Social-engineering access brokerage is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-30",
        "drawioPosition": {
          "x": 427.0,
          "y": 545.0
        },
        "drawioGeometry": {
          "x": 332.0,
          "y": 520.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-26",
            "name": "implements",
            "label": "implements",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-32",
            "targetLabel": "T1598.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Social-engineering access brokerage implements T1598.004.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-28",
            "name": "followedBy",
            "label": "followedBy",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-38",
            "targetLabel": "AS2: Credential and MFA acquisition",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Social-engineering access brokerage followedBy AS2: Credential and MFA acquisition.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "NNmBX69VpKK8D-qhwx8O-1",
            "name": "exploits",
            "label": "exploits",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "targetMetamodelEntity": "HumanVulnerability",
            "cardinality": "ThreatStep  —  HumanVulnerability",
            "description": "AS1: Social-engineering access brokerage exploits Prone to Phishing.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-19",
            "name": "startsWith",
            "label": "startsWith",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "Threat",
            "target": "W-R75xxI9TsONGAs6iK0-30",
            "targetLabel": "AS1: Social-engineering access brokerage",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "Threat — ThreatStep",
            "description": "Attack against Organization startsWith AS1: Social-engineering access brokerage.",
            "matchedMetamodelRelationship": false
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 355.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-32",
        "name": "T1598.004",
        "label": "T1598.004",
        "metamodelEntity": "TTP",
        "rawMetamodelEntity": "TTP",
        "description": "T1598.004 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-32",
        "drawioPosition": {
          "x": 664.5,
          "y": 540.0
        },
        "drawioGeometry": {
          "x": 632.0,
          "y": 520.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [
          {
            "id": "N9GxJEYAAonVYKU6PBBE-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "W-R75xxI9TsONGAs6iK0-32",
            "sourceLabel": "T1598.004",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "TTP",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "targetMetamodelEntity": "HumanVulnerability",
            "cardinality": "TTP 1..* — 1 HumanVulnerability",
            "description": "T1598.004 exploitsVulnerability Prone to Phishing.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-26",
            "name": "implements",
            "label": "implements",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-32",
            "targetLabel": "T1598.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Social-engineering access brokerage implements T1598.004.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1509.5,
        "y": 350.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-38",
        "name": "AS2: Credential and MFA acquisition",
        "label": "AS2: Credential and MFA acquisition",
        "metamodelEntity": "ThreatStep",
        "rawMetamodelEntity": "ThreatStep",
        "description": "AS2: Credential and MFA acquisition is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-38",
        "drawioPosition": {
          "x": 427.0,
          "y": 655.0
        },
        "drawioGeometry": {
          "x": 332.0,
          "y": 630.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-34",
            "name": "implements",
            "label": "implements",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS2: Credential and MFA acquisition",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-40",
            "targetLabel": "T1078.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Credential and MFA acquisition implements T1078.004.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-2",
            "name": "followedBy",
            "label": "followedBy",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS2: Credential and MFA acquisition",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-1",
            "targetLabel": "AS3: Malicious connected-app authorization",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Credential and MFA acquisition followedBy AS3: Malicious connected-app authorization.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-28",
            "name": "followedBy",
            "label": "followedBy",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-38",
            "targetLabel": "AS2: Credential and MFA acquisition",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Social-engineering access brokerage followedBy AS2: Credential and MFA acquisition.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 465.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-40",
        "name": "T1078.004",
        "label": "T1078.004",
        "metamodelEntity": "TTP",
        "rawMetamodelEntity": "TTP",
        "description": "T1078.004 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-40",
        "drawioPosition": {
          "x": 664.5,
          "y": 655.0
        },
        "drawioGeometry": {
          "x": 632.0,
          "y": 635.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-34",
            "name": "implements",
            "label": "implements",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS2: Credential and MFA acquisition",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "W-R75xxI9TsONGAs6iK0-40",
            "targetLabel": "T1078.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Credential and MFA acquisition implements T1078.004.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1509.5,
        "y": 465.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-47",
        "name": "Vishing Campaign against Salesforce",
        "label": "Vishing Campaign against Salesforce",
        "metamodelEntity": "Campaign",
        "rawMetamodelEntity": "Campaign",
        "description": "Vishing Campaign against Salesforce is a case-study instance of the Campaign entity in the feasibility-oriented metamodel.",
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
        "drawioId": "W-R75xxI9TsONGAs6iK0-47",
        "drawioPosition": {
          "x": 820.0,
          "y": 505.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 480.0,
          "width": 180.0,
          "height": 50.0
        },
        "layoutWidth": 180.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 168.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-21",
            "name": "partsOf",
            "label": "partsOf",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "Attack against Organization",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Threat",
            "target": "W-R75xxI9TsONGAs6iK0-47",
            "targetLabel": "Vishing Campaign against Salesforce",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Campaign",
            "cardinality": "Threat 1..* — 1 Campaign",
            "description": "Attack against Organization partsOf Vishing Campaign against Salesforce.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1665.0,
        "y": 315.0
      }
    },
    {
      "data": {
        "id": "skMsq092CygeLry3JUE3-1",
        "name": "UNC6240",
        "label": "UNC6240",
        "metamodelEntity": "ThreatActor",
        "rawMetamodelEntity": "ThreatActor",
        "description": "UNC6240 is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel.",
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
        "drawioId": "skMsq092CygeLry3JUE3-1",
        "drawioPosition": {
          "x": 250.0,
          "y": 310.0
        },
        "drawioGeometry": {
          "x": 190.0,
          "y": 290.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "skMsq092CygeLry3JUE3-2",
            "name": "alias",
            "label": "alias",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "sourceLabel": "UNC6040",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatActor",
            "target": "skMsq092CygeLry3JUE3-1",
            "targetLabel": "UNC6240",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatActor",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "UNC6040 alias UNC6240.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1095.0,
        "y": 120.0
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-5",
        "name": "Prone to Phishing",
        "label": "Prone to Phishing",
        "metamodelEntity": "HumanVulnerability",
        "rawMetamodelEntity": "HumanVulnerability",
        "description": "Prone to Phishing is a case-study instance of the HumanVulnerability entity in the feasibility-oriented metamodel.",
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
        "drawioId": "NNmBX69VpKK8D-qhwx8O-5",
        "drawioPosition": {
          "x": 20.0,
          "y": 532.5
        },
        "drawioGeometry": {
          "x": -50.0,
          "y": 510.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "NNmBX69VpKK8D-qhwx8O-3",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "HumanVulnerability",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "User",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "N9GxJEYAAonVYKU6PBBE-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "W-R75xxI9TsONGAs6iK0-32",
            "sourceLabel": "T1598.004",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "TTP",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "targetMetamodelEntity": "HumanVulnerability",
            "cardinality": "TTP 1..* — 1 HumanVulnerability",
            "description": "T1598.004 exploitsVulnerability Prone to Phishing.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "NNmBX69VpKK8D-qhwx8O-1",
            "name": "exploits",
            "label": "exploits",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "AS1: Social-engineering access brokerage",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "targetMetamodelEntity": "HumanVulnerability",
            "cardinality": "ThreatStep  —  HumanVulnerability",
            "description": "AS1: Social-engineering access brokerage exploits Prone to Phishing.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 865.0,
        "y": 342.5
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-6",
        "name": "U1: Employee 1",
        "label": "U1: Employee 1",
        "metamodelEntity": "User",
        "rawMetamodelEntity": "User",
        "description": "U1: Employee 1 is a case-study instance of the User entity in the feasibility-oriented metamodel.",
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
        "drawioId": "NNmBX69VpKK8D-qhwx8O-6",
        "drawioPosition": {
          "x": -190.0,
          "y": 607.5
        },
        "drawioGeometry": {
          "x": -260.0,
          "y": 585.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "6OHgOMSIGVsn-Z9V46qd-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "User",
            "target": "WuCqMy39X08569D0n-v9-5",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "targetMetamodelEntity": "Node",
            "cardinality": "User  —  Node",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "i3hgD8FbyJ1cXPQ31m4S-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "User",
            "target": "1v_T7K9QPGvpQHMeIzBd-1",
            "targetLabel": "N2: Salesforce Endpoint",
            "targetCardinality": "",
            "targetMetamodelEntity": "Node",
            "cardinality": "User  —  Node",
            "description": "U1: Employee 1 hasAccessTo N2: Salesforce Endpoint.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "NNmBX69VpKK8D-qhwx8O-3",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "HumanVulnerability",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "User",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "NXt1BKSTyLYTvNq0OA_7-2",
            "name": "usedBy",
            "label": "usedBy",
            "source": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Infrastructure",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "User",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod-Infra usedBy U1: Employee 1.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 655.0,
        "y": 417.5
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-1",
        "name": "AS3: Malicious connected-app authorization",
        "label": "AS3: Malicious connected-app authorization",
        "metamodelEntity": "ThreatStep",
        "rawMetamodelEntity": "ThreatStep",
        "description": "AS3: Malicious connected-app authorization is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-1",
        "drawioPosition": {
          "x": 427.0,
          "y": 765.0
        },
        "drawioGeometry": {
          "x": 332.0,
          "y": 740.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-9",
            "name": "followedBy",
            "label": "followedBy",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS3: Malicious connected-app authorization",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-8",
            "targetLabel": "AS4: Access to Salesforce data repositories",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Malicious connected-app authorization followedBy AS4: Access to Salesforce data repositories.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-5",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS3: Malicious connected-app authorization",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-7",
            "targetLabel": "T1671",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Malicious connected-app authorization implements T1671.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-2",
            "name": "followedBy",
            "label": "followedBy",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS2: Credential and MFA acquisition",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-1",
            "targetLabel": "AS3: Malicious connected-app authorization",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Credential and MFA acquisition followedBy AS3: Malicious connected-app authorization.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 575.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-7",
        "name": "T1671",
        "label": "T1671",
        "metamodelEntity": "TTP",
        "rawMetamodelEntity": "TTP",
        "description": "T1671 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-7",
        "drawioPosition": {
          "x": 664.5,
          "y": 765.0
        },
        "drawioGeometry": {
          "x": 632.0,
          "y": 745.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-5",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS3: Malicious connected-app authorization",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-7",
            "targetLabel": "T1671",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Malicious connected-app authorization implements T1671.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1509.5,
        "y": 575.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-8",
        "name": "AS4: Access to Salesforce data repositories",
        "label": "AS4: Access to Salesforce data repositories",
        "metamodelEntity": "ThreatStep",
        "rawMetamodelEntity": "ThreatStep",
        "description": "AS4: Access to Salesforce data repositories is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-8",
        "drawioPosition": {
          "x": 427.0,
          "y": 865.0
        },
        "drawioGeometry": {
          "x": 332.0,
          "y": 840.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-12",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS4: Access to Salesforce data repositories",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-11",
            "targetLabel": "T1213.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Access to Salesforce data repositories implements T1213.004.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-15",
            "name": "followedBy",
            "label": "followedBy",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS4: Access to Salesforce data repositories",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-14",
            "targetLabel": "AS5: API-driven bulk exfiltration",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Access to Salesforce data repositories followedBy AS5: API-driven bulk exfiltration.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-9",
            "name": "followedBy",
            "label": "followedBy",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS3: Malicious connected-app authorization",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-8",
            "targetLabel": "AS4: Access to Salesforce data repositories",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Malicious connected-app authorization followedBy AS4: Access to Salesforce data repositories.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-11",
        "name": "T1213.004",
        "label": "T1213.004",
        "metamodelEntity": "TTP",
        "rawMetamodelEntity": "TTP",
        "description": "T1213.004 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-11",
        "drawioPosition": {
          "x": 664.5,
          "y": 865.0
        },
        "drawioGeometry": {
          "x": 632.0,
          "y": 845.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-12",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS4: Access to Salesforce data repositories",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-11",
            "targetLabel": "T1213.004",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Access to Salesforce data repositories implements T1213.004.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1509.5,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-14",
        "name": "AS5: API-driven bulk exfiltration",
        "label": "AS5: API-driven bulk exfiltration",
        "metamodelEntity": "ThreatStep",
        "rawMetamodelEntity": "ThreatStep",
        "description": "AS5: API-driven bulk exfiltration is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-14",
        "drawioPosition": {
          "x": 427.0,
          "y": 955.0
        },
        "drawioGeometry": {
          "x": 332.0,
          "y": 930.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "WM2iYkWpVkoMOjJOuhxM-2",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "targetLabel": "Customer Data",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Asset",
            "cardinality": "ThreatStep 1..* — 1 Asset",
            "description": "AS5: API-driven bulk exfiltration targetsResource Customer Data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "qIbVtnW74JoUNaZ4yXt5-1",
            "name": "compromises",
            "label": "compromises",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "ThreatStep 1..* — 1 Asset SecurityRequirement",
            "description": "AS5: API-driven bulk exfiltration compromises ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-17",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-19",
            "targetLabel": "T1048",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: API-driven bulk exfiltration implements T1048.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-15",
            "name": "followedBy",
            "label": "followedBy",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS4: Access to Salesforce data repositories",
            "sourceCardinality": "0..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-14",
            "targetLabel": "AS5: API-driven bulk exfiltration",
            "targetCardinality": "",
            "targetMetamodelEntity": "ThreatStep",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Access to Salesforce data repositories followedBy AS5: API-driven bulk exfiltration.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1272.0,
        "y": 765.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-19",
        "name": "T1048",
        "label": "T1048",
        "metamodelEntity": "TTP",
        "rawMetamodelEntity": "TTP",
        "description": "T1048 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-19",
        "drawioPosition": {
          "x": 664.5,
          "y": 955.0
        },
        "drawioGeometry": {
          "x": 632.0,
          "y": 935.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108,
        "outgoingRelations": [
          {
            "id": "Ep7i6ejaYqTg5r7JC2yi-2",
            "name": "violates",
            "label": "violates",
            "source": "vjJMpfVSzzf0KPU9cpzq-19",
            "sourceLabel": "T1048",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "TTP",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "targetMetamodelEntity": "SecurityRequirement",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1048 violates Confidentiality.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-17",
            "name": "implements",
            "label": "implements",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "vjJMpfVSzzf0KPU9cpzq-19",
            "targetLabel": "T1048",
            "targetCardinality": "1",
            "targetMetamodelEntity": "TTP",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: API-driven bulk exfiltration implements T1048.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 1509.5,
        "y": 765.0
      }
    },
    {
      "data": {
        "id": "WM2iYkWpVkoMOjJOuhxM-1",
        "name": "Customer Data",
        "label": "Customer Data",
        "metamodelEntity": "Asset",
        "rawMetamodelEntity": "Asset",
        "description": "Customer Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel.",
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
        "drawioId": "WM2iYkWpVkoMOjJOuhxM-1",
        "drawioPosition": {
          "x": -50.0,
          "y": 1055.0
        },
        "drawioGeometry": {
          "x": -120.0,
          "y": 1030.0,
          "width": 140.0,
          "height": 50.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "1MHW0WUUoP0wR_9WGbNa-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "Customer Data",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Asset",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "Asset 1 — 1..* Asset SecurityRequirement",
            "description": "Customer Data hasSecurityRequirement ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "WM2iYkWpVkoMOjJOuhxM-2",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "targetLabel": "Customer Data",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Asset",
            "cardinality": "ThreatStep 1..* — 1 Asset",
            "description": "AS5: API-driven bulk exfiltration targetsResource Customer Data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-5",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "targetLabel": "Customer Data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset",
            "cardinality": "Node 1 — 1..* Asset",
            "description": "N2: Salesforce Endpoint hostsResource Customer Data.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 795.0,
        "y": 865.0
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-1",
        "name": "OrgCS3",
        "label": "OrgCS3",
        "metamodelEntity": "Organization",
        "rawMetamodelEntity": "Organization",
        "description": "OrgCS3 is a case-study instance of the Organization entity in the feasibility-oriented metamodel.",
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
        "drawioId": "WuCqMy39X08569D0n-v9-1",
        "drawioPosition": {
          "x": -320.0,
          "y": 312.5
        },
        "drawioGeometry": {
          "x": -390.0,
          "y": 290.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-3",
            "name": "manages",
            "label": "manages",
            "source": "WuCqMy39X08569D0n-v9-1",
            "sourceLabel": "OrgCS3",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Organization",
            "target": "WuCqMy39X08569D0n-v9-2",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Infrastructure",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "OrgCS3 manages Prod-Infra.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "eVn5_GdqCaxl72IHBsPH-1",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "WuCqMy39X08569D0n-v9-1",
            "sourceLabel": "OrgCS3",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Organization",
            "target": "eVn5_GdqCaxl72IHBsPH-3",
            "targetLabel": "BR1: Customer data must remain confidential",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "BusinessRequirement",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "OrgCS3 hasBusinessRequirement BR1: Customer data must remain confidential.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 525.0,
        "y": 122.5
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-2",
        "name": "Prod-Infra",
        "label": "Prod-Infra",
        "metamodelEntity": "Infrastructure",
        "rawMetamodelEntity": "Infrastructure",
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
        "drawioId": "WuCqMy39X08569D0n-v9-2",
        "drawioPosition": {
          "x": -320.0,
          "y": 407.5
        },
        "drawioGeometry": {
          "x": -390.0,
          "y": 385.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-6",
            "name": "madeBy",
            "label": "madeBy",
            "source": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Infrastructure",
            "target": "WuCqMy39X08569D0n-v9-5",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Node",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Workstation.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "NXt1BKSTyLYTvNq0OA_7-2",
            "name": "usedBy",
            "label": "usedBy",
            "source": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Infrastructure",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "User",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod-Infra usedBy U1: Employee 1.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-3",
            "name": "manages",
            "label": "manages",
            "source": "WuCqMy39X08569D0n-v9-1",
            "sourceLabel": "OrgCS3",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Organization",
            "target": "WuCqMy39X08569D0n-v9-2",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Infrastructure",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "OrgCS3 manages Prod-Infra.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 525.0,
        "y": 217.5
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-5",
        "name": "N1: Workstation",
        "label": "N1: Workstation",
        "metamodelEntity": "Node",
        "rawMetamodelEntity": "Node",
        "description": "N1: Workstation is a case-study instance of the Node entity in the feasibility-oriented metamodel.",
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
        "drawioId": "WuCqMy39X08569D0n-v9-5",
        "drawioPosition": {
          "x": -360.0,
          "y": 742.5
        },
        "drawioGeometry": {
          "x": -430.0,
          "y": 720.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "1wYscN70OxNXywWxwdxa-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Node",
            "target": "1wYscN70OxNXywWxwdxa-1",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "targetMetamodelEntity": "NodeType",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-3",
            "name": "isSource",
            "label": "isSource",
            "source": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "Node",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "targetLabel": "Salesforce Data Management",
            "targetCardinality": "",
            "targetMetamodelEntity": "Connection",
            "cardinality": "Node — Connection",
            "description": "N1: Workstation isSource Salesforce Data Management.",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "6OHgOMSIGVsn-Z9V46qd-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "User",
            "target": "WuCqMy39X08569D0n-v9-5",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "targetMetamodelEntity": "Node",
            "cardinality": "User  —  Node",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "WuCqMy39X08569D0n-v9-6",
            "name": "madeBy",
            "label": "madeBy",
            "source": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Infrastructure",
            "target": "WuCqMy39X08569D0n-v9-5",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Node",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Workstation.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 485.0,
        "y": 552.5
      }
    },
    {
      "data": {
        "id": "eVn5_GdqCaxl72IHBsPH-3",
        "name": "BR1: Customer data must remain confidential",
        "label": "BR1: Customer data must remain confidential",
        "metamodelEntity": "BusinessRequirement",
        "rawMetamodelEntity": "BusinessRequirement",
        "description": "BR1: Customer data must remain confidential is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "eVn5_GdqCaxl72IHBsPH-3",
        "drawioPosition": {
          "x": -565.0,
          "y": 582.5
        },
        "drawioGeometry": {
          "x": -650.0,
          "y": 560.0,
          "width": 170.0,
          "height": 45.0
        },
        "layoutWidth": 170.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 158.0,
        "outgoingRelations": [
          {
            "id": "F2QGTwjoN-LEskWlSwwC-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "eVn5_GdqCaxl72IHBsPH-3",
            "sourceLabel": "BR1: Customer data must remain confidential",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "BusinessRequirement",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset SecurityRequirement",
            "description": "BR1: Customer data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "eVn5_GdqCaxl72IHBsPH-1",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "WuCqMy39X08569D0n-v9-1",
            "sourceLabel": "OrgCS3",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Organization",
            "target": "eVn5_GdqCaxl72IHBsPH-3",
            "targetLabel": "BR1: Customer data must remain confidential",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "BusinessRequirement",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "OrgCS3 hasBusinessRequirement BR1: Customer data must remain confidential.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 280.0,
        "y": 392.5
      }
    },
    {
      "data": {
        "id": "F2QGTwjoN-LEskWlSwwC-3",
        "name": "ASR1: Confidentiality of customer data",
        "label": "ASR1: Confidentiality of customer data",
        "metamodelEntity": "Asset SecurityRequirement",
        "rawMetamodelEntity": "Asset SecurityRequirement",
        "description": "ASR1: Confidentiality of customer data is a case-study instance of the Asset SecurityRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "F2QGTwjoN-LEskWlSwwC-3",
        "drawioPosition": {
          "x": -565.0,
          "y": 672.5
        },
        "drawioGeometry": {
          "x": -650.0,
          "y": 650.0,
          "width": 170.0,
          "height": 45.0
        },
        "layoutWidth": 170.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 158.0,
        "outgoingRelations": [
          {
            "id": "mkfqWY7xLTyuWZQTjFYf-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "ASR1: Confidentiality of customer data",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Asset SecurityRequirement",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "targetMetamodelEntity": "SecurityRequirement",
            "cardinality": "Asset SecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of customer data implementationOf Confidentiality.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "qIbVtnW74JoUNaZ4yXt5-1",
            "name": "compromises",
            "label": "compromises",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS5: API-driven bulk exfiltration",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "ThreatStep",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "ThreatStep 1..* — 1 Asset SecurityRequirement",
            "description": "AS5: API-driven bulk exfiltration compromises ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "1MHW0WUUoP0wR_9WGbNa-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "Customer Data",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Asset",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "Asset 1 — 1..* Asset SecurityRequirement",
            "description": "Customer Data hasSecurityRequirement ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "F2QGTwjoN-LEskWlSwwC-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "eVn5_GdqCaxl72IHBsPH-3",
            "sourceLabel": "BR1: Customer data must remain confidential",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "BusinessRequirement",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "targetLabel": "ASR1: Confidentiality of customer data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset SecurityRequirement",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset SecurityRequirement",
            "description": "BR1: Customer data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of customer data.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 280.0,
        "y": 482.5
      }
    },
    {
      "data": {
        "id": "1wYscN70OxNXywWxwdxa-1",
        "name": "Desktop Computer",
        "label": "Desktop Computer",
        "metamodelEntity": "NodeType",
        "rawMetamodelEntity": "NodeType",
        "description": "Desktop Computer is a case-study instance of the NodeType entity in the feasibility-oriented metamodel.",
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
        "drawioId": "1wYscN70OxNXywWxwdxa-1",
        "drawioPosition": {
          "x": -450.0,
          "y": 842.5
        },
        "drawioGeometry": {
          "x": -520.0,
          "y": 820.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1wYscN70OxNXywWxwdxa-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Node",
            "target": "1wYscN70OxNXywWxwdxa-1",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "targetMetamodelEntity": "NodeType",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 395.0,
        "y": 652.5
      }
    },
    {
      "data": {
        "id": "_mnEyO-uEHkzOZovGcnc-2",
        "name": "Salesforce Service",
        "label": "Salesforce Service",
        "metamodelEntity": "ApplicationInstance",
        "rawMetamodelEntity": "ApplicationInstance",
        "description": "Salesforce Service is a case-study instance of the ApplicationInstance entity in the feasibility-oriented metamodel.",
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
        "drawioId": "_mnEyO-uEHkzOZovGcnc-2",
        "drawioPosition": {
          "x": -260.0,
          "y": 865.0
        },
        "drawioGeometry": {
          "x": -330.0,
          "y": 842.5,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "puR0N-drRlthi1GJN4Xb-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "_mnEyO-uEHkzOZovGcnc-2",
            "targetLabel": "Salesforce Service",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "ApplicationInstance",
            "cardinality": "Node 1 — 1..* ApplicationInstance",
            "description": "N2: Salesforce Endpoint hostsResource Salesforce Service.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 585.0,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-1",
        "name": "N2: Salesforce Endpoint",
        "label": "N2: Salesforce Endpoint",
        "metamodelEntity": "Node",
        "rawMetamodelEntity": "Node",
        "description": "N2: Salesforce Endpoint is a case-study instance of the Node entity in the feasibility-oriented metamodel.",
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
        "drawioId": "1v_T7K9QPGvpQHMeIzBd-1",
        "drawioPosition": {
          "x": -70.0,
          "y": 932.5
        },
        "drawioGeometry": {
          "x": -140.0,
          "y": 910.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "puR0N-drRlthi1GJN4Xb-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "_mnEyO-uEHkzOZovGcnc-2",
            "targetLabel": "Salesforce Service",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "ApplicationInstance",
            "cardinality": "Node 1 — 1..* ApplicationInstance",
            "description": "N2: Salesforce Endpoint hostsResource Salesforce Service.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-3",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Node",
            "target": "1v_T7K9QPGvpQHMeIzBd-2",
            "targetLabel": "Web Application Server",
            "targetCardinality": "1",
            "targetMetamodelEntity": "NodeType",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N2: Salesforce Endpoint hasNodeType Web Application Server.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-5",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "targetLabel": "Customer Data",
            "targetCardinality": "1..*",
            "targetMetamodelEntity": "Asset",
            "cardinality": "Node 1 — 1..* Asset",
            "description": "N2: Salesforce Endpoint hostsResource Customer Data.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-1",
            "name": "isDestination",
            "label": "isDestination",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "targetLabel": "Salesforce Data Management",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "Connection",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "N2: Salesforce Endpoint isDestination Salesforce Data Management.",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "i3hgD8FbyJ1cXPQ31m4S-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "User",
            "target": "1v_T7K9QPGvpQHMeIzBd-1",
            "targetLabel": "N2: Salesforce Endpoint",
            "targetCardinality": "",
            "targetMetamodelEntity": "Node",
            "cardinality": "User  —  Node",
            "description": "U1: Employee 1 hasAccessTo N2: Salesforce Endpoint.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 775.0,
        "y": 742.5
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-2",
        "name": "Web Application Server",
        "label": "Web Application Server",
        "metamodelEntity": "NodeType",
        "rawMetamodelEntity": "NodeType",
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
        "drawioId": "1v_T7K9QPGvpQHMeIzBd-2",
        "drawioPosition": {
          "x": -270.0,
          "y": 992.5
        },
        "drawioGeometry": {
          "x": -340.0,
          "y": 970.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-3",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Node",
            "target": "1v_T7K9QPGvpQHMeIzBd-2",
            "targetLabel": "Web Application Server",
            "targetCardinality": "1",
            "targetMetamodelEntity": "NodeType",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N2: Salesforce Endpoint hasNodeType Web Application Server.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 575.0,
        "y": 802.5
      }
    },
    {
      "data": {
        "id": "wTd-3MmVqCO39iPhYjD6-1",
        "name": "Salesforce Data Management",
        "label": "Salesforce Data Management",
        "metamodelEntity": "Connection",
        "rawMetamodelEntity": "Connection",
        "description": "Salesforce Data Management is a case-study instance of the Connection entity in the feasibility-oriented metamodel.",
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
        "drawioId": "wTd-3MmVqCO39iPhYjD6-1",
        "drawioPosition": {
          "x": -70.0,
          "y": 832.5
        },
        "drawioGeometry": {
          "x": -140.0,
          "y": 810.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-3",
            "name": "isSource",
            "label": "isSource",
            "source": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "",
            "sourceMetamodelEntity": "Node",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "targetLabel": "Salesforce Data Management",
            "targetCardinality": "",
            "targetMetamodelEntity": "Connection",
            "cardinality": "Node — Connection",
            "description": "N1: Workstation isSource Salesforce Data Management.",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-1",
            "name": "isDestination",
            "label": "isDestination",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "sourceLabel": "N2: Salesforce Endpoint",
            "sourceCardinality": "1",
            "sourceMetamodelEntity": "Node",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "targetLabel": "Salesforce Data Management",
            "targetCardinality": "0..*",
            "targetMetamodelEntity": "Connection",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "N2: Salesforce Endpoint isDestination Salesforce Data Management.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 775.0,
        "y": 642.5
      }
    },
    {
      "data": {
        "id": "mkfqWY7xLTyuWZQTjFYf-2",
        "name": "Confidentiality",
        "label": "Confidentiality",
        "metamodelEntity": "SecurityRequirement",
        "rawMetamodelEntity": "SecurityRequirement",
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
        "drawioId": "mkfqWY7xLTyuWZQTjFYf-2",
        "drawioPosition": {
          "x": -725.0,
          "y": 752.5
        },
        "drawioGeometry": {
          "x": -810.0,
          "y": 730.0,
          "width": 170.0,
          "height": 45.0
        },
        "layoutWidth": 170.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 158.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Ep7i6ejaYqTg5r7JC2yi-2",
            "name": "violates",
            "label": "violates",
            "source": "vjJMpfVSzzf0KPU9cpzq-19",
            "sourceLabel": "T1048",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "TTP",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "targetMetamodelEntity": "SecurityRequirement",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1048 violates Confidentiality.",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "mkfqWY7xLTyuWZQTjFYf-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "ASR1: Confidentiality of customer data",
            "sourceCardinality": "1..*",
            "sourceMetamodelEntity": "Asset SecurityRequirement",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "targetMetamodelEntity": "SecurityRequirement",
            "cardinality": "Asset SecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of customer data implementationOf Confidentiality.",
            "matchedMetamodelRelationship": true
          }
        ]
      },
      "position": {
        "x": 120.0,
        "y": 562.5
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-7",
        "label": "relatedTo",
        "name": "relatedTo",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "W-R75xxI9TsONGAs6iK0-16",
        "sourceLabel": "UNC6040",
        "targetLabel": "ShinyHunters",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Adversary",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatActor 1..* — 0..* Adversary",
        "description": "UNC6040 relatedTo ShinyHunters.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-7",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-11",
        "label": "initiates",
        "name": "initiates",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "W-R75xxI9TsONGAs6iK0-23",
        "sourceLabel": "UNC6040",
        "targetLabel": "Attack against Organization",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Threat",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat",
        "description": "UNC6040 initiates Attack against Organization.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-11",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "skMsq092CygeLry3JUE3-2",
        "label": "alias",
        "name": "alias",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "skMsq092CygeLry3JUE3-1",
        "sourceLabel": "UNC6040",
        "targetLabel": "UNC6240",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "ThreatActor",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor",
        "description": "UNC6040 alias UNC6240.",
        "drawioId": "skMsq092CygeLry3JUE3-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-14",
        "label": "hasAdversaryType",
        "name": "hasAdversaryType",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-16",
        "target": "W-R75xxI9TsONGAs6iK0-17",
        "sourceLabel": "ShinyHunters",
        "targetLabel": "Criminal Group",
        "sourceMetamodelEntity": "Adversary",
        "targetMetamodelEntity": "AdversaryType",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Adversary 1..* — 1 AdversaryType",
        "description": "ShinyHunters hasAdversaryType Criminal Group.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-14",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-19",
        "label": "startsWith",
        "name": "startsWith",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-23",
        "target": "W-R75xxI9TsONGAs6iK0-30",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "AS1: Social-engineering access brokerage",
        "sourceMetamodelEntity": "Threat",
        "targetMetamodelEntity": "ThreatStep",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "Threat — ThreatStep",
        "description": "Attack against Organization startsWith AS1: Social-engineering access brokerage.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-19",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-21",
        "label": "partsOf",
        "name": "partsOf",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-23",
        "target": "W-R75xxI9TsONGAs6iK0-47",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "Vishing Campaign against Salesforce",
        "sourceMetamodelEntity": "Threat",
        "targetMetamodelEntity": "Campaign",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Threat 1..* — 1 Campaign",
        "description": "Attack against Organization partsOf Vishing Campaign against Salesforce.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-21",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-26",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "W-R75xxI9TsONGAs6iK0-32",
        "sourceLabel": "AS1: Social-engineering access brokerage",
        "targetLabel": "T1598.004",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "description": "AS1: Social-engineering access brokerage implements T1598.004.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-26",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-28",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "W-R75xxI9TsONGAs6iK0-38",
        "sourceLabel": "AS1: Social-engineering access brokerage",
        "targetLabel": "AS2: Credential and MFA acquisition",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "description": "AS1: Social-engineering access brokerage followedBy AS2: Credential and MFA acquisition.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-28",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "N9GxJEYAAonVYKU6PBBE-1",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-32",
        "target": "NNmBX69VpKK8D-qhwx8O-5",
        "sourceLabel": "T1598.004",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 HumanVulnerability",
        "description": "T1598.004 exploitsVulnerability Prone to Phishing.",
        "drawioId": "N9GxJEYAAonVYKU6PBBE-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-34",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-38",
        "target": "W-R75xxI9TsONGAs6iK0-40",
        "sourceLabel": "AS2: Credential and MFA acquisition",
        "targetLabel": "T1078.004",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "description": "AS2: Credential and MFA acquisition implements T1078.004.",
        "drawioId": "W-R75xxI9TsONGAs6iK0-34",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-2",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-38",
        "target": "vjJMpfVSzzf0KPU9cpzq-1",
        "sourceLabel": "AS2: Credential and MFA acquisition",
        "targetLabel": "AS3: Malicious connected-app authorization",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "description": "AS2: Credential and MFA acquisition followedBy AS3: Malicious connected-app authorization.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-1",
        "label": "exploits",
        "name": "exploits",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "NNmBX69VpKK8D-qhwx8O-5",
        "sourceLabel": "AS1: Social-engineering access brokerage",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "ThreatStep  —  HumanVulnerability",
        "description": "AS1: Social-engineering access brokerage exploits Prone to Phishing.",
        "drawioId": "NNmBX69VpKK8D-qhwx8O-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-3",
        "label": "affectsUser",
        "name": "affectsUser",
        "kind": "relationship",
        "source": "NNmBX69VpKK8D-qhwx8O-5",
        "target": "NNmBX69VpKK8D-qhwx8O-6",
        "sourceLabel": "Prone to Phishing",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "HumanVulnerability",
        "targetMetamodelEntity": "User",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HumanVulnerability 0..* — 0..* User",
        "description": "Prone to Phishing affectsUser U1: Employee 1.",
        "drawioId": "NNmBX69VpKK8D-qhwx8O-3",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "6OHgOMSIGVsn-Z9V46qd-1",
        "label": "hasAccessTo",
        "name": "hasAccessTo",
        "kind": "relationship",
        "source": "NNmBX69VpKK8D-qhwx8O-6",
        "target": "WuCqMy39X08569D0n-v9-5",
        "sourceLabel": "U1: Employee 1",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "User",
        "targetMetamodelEntity": "Node",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "User  —  Node",
        "description": "U1: Employee 1 hasAccessTo N1: Workstation.",
        "drawioId": "6OHgOMSIGVsn-Z9V46qd-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "i3hgD8FbyJ1cXPQ31m4S-1",
        "label": "hasAccessTo",
        "name": "hasAccessTo",
        "kind": "relationship",
        "source": "NNmBX69VpKK8D-qhwx8O-6",
        "target": "1v_T7K9QPGvpQHMeIzBd-1",
        "sourceLabel": "U1: Employee 1",
        "targetLabel": "N2: Salesforce Endpoint",
        "sourceMetamodelEntity": "User",
        "targetMetamodelEntity": "Node",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "User  —  Node",
        "description": "U1: Employee 1 hasAccessTo N2: Salesforce Endpoint.",
        "drawioId": "i3hgD8FbyJ1cXPQ31m4S-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-9",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-1",
        "target": "vjJMpfVSzzf0KPU9cpzq-8",
        "sourceLabel": "AS3: Malicious connected-app authorization",
        "targetLabel": "AS4: Access to Salesforce data repositories",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "description": "AS3: Malicious connected-app authorization followedBy AS4: Access to Salesforce data repositories.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-9",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-5",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-1",
        "target": "vjJMpfVSzzf0KPU9cpzq-7",
        "sourceLabel": "AS3: Malicious connected-app authorization",
        "targetLabel": "T1671",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "description": "AS3: Malicious connected-app authorization implements T1671.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-5",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-12",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-8",
        "target": "vjJMpfVSzzf0KPU9cpzq-11",
        "sourceLabel": "AS4: Access to Salesforce data repositories",
        "targetLabel": "T1213.004",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "description": "AS4: Access to Salesforce data repositories implements T1213.004.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-12",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-15",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-8",
        "target": "vjJMpfVSzzf0KPU9cpzq-14",
        "sourceLabel": "AS4: Access to Salesforce data repositories",
        "targetLabel": "AS5: API-driven bulk exfiltration",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "description": "AS4: Access to Salesforce data repositories followedBy AS5: API-driven bulk exfiltration.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-15",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "WM2iYkWpVkoMOjJOuhxM-2",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "WM2iYkWpVkoMOjJOuhxM-1",
        "sourceLabel": "AS5: API-driven bulk exfiltration",
        "targetLabel": "Customer Data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset",
        "description": "AS5: API-driven bulk exfiltration targetsResource Customer Data.",
        "drawioId": "WM2iYkWpVkoMOjJOuhxM-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "qIbVtnW74JoUNaZ4yXt5-1",
        "label": "compromises",
        "name": "compromises",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "AS5: API-driven bulk exfiltration",
        "targetLabel": "ASR1: Confidentiality of customer data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset SecurityRequirement",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset SecurityRequirement",
        "description": "AS5: API-driven bulk exfiltration compromises ASR1: Confidentiality of customer data.",
        "drawioId": "qIbVtnW74JoUNaZ4yXt5-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-17",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "vjJMpfVSzzf0KPU9cpzq-19",
        "sourceLabel": "AS5: API-driven bulk exfiltration",
        "targetLabel": "T1048",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "description": "AS5: API-driven bulk exfiltration implements T1048.",
        "drawioId": "vjJMpfVSzzf0KPU9cpzq-17",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "Ep7i6ejaYqTg5r7JC2yi-2",
        "label": "violates",
        "name": "violates",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-19",
        "target": "mkfqWY7xLTyuWZQTjFYf-2",
        "sourceLabel": "T1048",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "SecurityRequirement",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement",
        "description": "T1048 violates Confidentiality.",
        "drawioId": "Ep7i6ejaYqTg5r7JC2yi-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "1MHW0WUUoP0wR_9WGbNa-1",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "WM2iYkWpVkoMOjJOuhxM-1",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "Customer Data",
        "targetLabel": "ASR1: Confidentiality of customer data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "Asset SecurityRequirement",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset SecurityRequirement",
        "description": "Customer Data hasSecurityRequirement ASR1: Confidentiality of customer data.",
        "drawioId": "1MHW0WUUoP0wR_9WGbNa-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-3",
        "label": "manages",
        "name": "manages",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-1",
        "target": "WuCqMy39X08569D0n-v9-2",
        "sourceLabel": "OrgCS3",
        "targetLabel": "Prod-Infra",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Infrastructure",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure",
        "description": "OrgCS3 manages Prod-Infra.",
        "drawioId": "WuCqMy39X08569D0n-v9-3",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-6",
        "label": "madeBy",
        "name": "madeBy",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-2",
        "target": "WuCqMy39X08569D0n-v9-5",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node",
        "description": "Prod-Infra madeBy N1: Workstation.",
        "drawioId": "WuCqMy39X08569D0n-v9-6",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "NXt1BKSTyLYTvNq0OA_7-2",
        "label": "usedBy",
        "name": "usedBy",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-2",
        "target": "NNmBX69VpKK8D-qhwx8O-6",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "User",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* User",
        "description": "Prod-Infra usedBy U1: Employee 1.",
        "drawioId": "NXt1BKSTyLYTvNq0OA_7-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "1wYscN70OxNXywWxwdxa-2",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-5",
        "target": "1wYscN70OxNXywWxwdxa-1",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Desktop Computer",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType",
        "description": "N1: Workstation hasNodeType Desktop Computer.",
        "drawioId": "1wYscN70OxNXywWxwdxa-2",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "puR0N-drRlthi1GJN4Xb-1",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "_mnEyO-uEHkzOZovGcnc-2",
        "sourceLabel": "N2: Salesforce Endpoint",
        "targetLabel": "Salesforce Service",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "ApplicationInstance",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* ApplicationInstance",
        "description": "N2: Salesforce Endpoint hostsResource Salesforce Service.",
        "drawioId": "puR0N-drRlthi1GJN4Xb-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XNSAvHdaGQ6QdSv4knAv-3",
        "label": "isSource",
        "name": "isSource",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-5",
        "target": "wTd-3MmVqCO39iPhYjD6-1",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Salesforce Data Management",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Connection",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "Node — Connection",
        "description": "N1: Workstation isSource Salesforce Data Management.",
        "drawioId": "XNSAvHdaGQ6QdSv4knAv-3",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "eVn5_GdqCaxl72IHBsPH-1",
        "label": "hasBusinessRequirement",
        "name": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-1",
        "target": "eVn5_GdqCaxl72IHBsPH-3",
        "sourceLabel": "OrgCS3",
        "targetLabel": "BR1: Customer data must remain confidential",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "BusinessRequirement",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* BusinessRequirement",
        "description": "OrgCS3 hasBusinessRequirement BR1: Customer data must remain confidential.",
        "drawioId": "eVn5_GdqCaxl72IHBsPH-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "F2QGTwjoN-LEskWlSwwC-1",
        "label": "drivesSecurityRequirement",
        "name": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "eVn5_GdqCaxl72IHBsPH-3",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "BR1: Customer data must remain confidential",
        "targetLabel": "ASR1: Confidentiality of customer data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "Asset SecurityRequirement",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset SecurityRequirement",
        "description": "BR1: Customer data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of customer data.",
        "drawioId": "F2QGTwjoN-LEskWlSwwC-1",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "mkfqWY7xLTyuWZQTjFYf-3",
        "label": "implementationOf",
        "name": "implementationOf",
        "kind": "relationship",
        "source": "F2QGTwjoN-LEskWlSwwC-3",
        "target": "mkfqWY7xLTyuWZQTjFYf-2",
        "sourceLabel": "ASR1: Confidentiality of customer data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "Asset SecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset SecurityRequirement 1..* — 1 SecurityRequirement",
        "description": "ASR1: Confidentiality of customer data implementationOf Confidentiality.",
        "drawioId": "mkfqWY7xLTyuWZQTjFYf-3",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-3",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "1v_T7K9QPGvpQHMeIzBd-2",
        "sourceLabel": "N2: Salesforce Endpoint",
        "targetLabel": "Web Application Server",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType",
        "description": "N2: Salesforce Endpoint hasNodeType Web Application Server.",
        "drawioId": "1v_T7K9QPGvpQHMeIzBd-3",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-5",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "WM2iYkWpVkoMOjJOuhxM-1",
        "sourceLabel": "N2: Salesforce Endpoint",
        "targetLabel": "Customer Data",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Asset",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Asset",
        "description": "N2: Salesforce Endpoint hostsResource Customer Data.",
        "drawioId": "1v_T7K9QPGvpQHMeIzBd-5",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XNSAvHdaGQ6QdSv4knAv-1",
        "label": "isDestination",
        "name": "isDestination",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "wTd-3MmVqCO39iPhYjD6-1",
        "sourceLabel": "N2: Salesforce Endpoint",
        "targetLabel": "Salesforce Data Management",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Connection",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "Node 1 — 0..* Connection",
        "description": "N2: Salesforce Endpoint isDestination Salesforce Data Management.",
        "drawioId": "XNSAvHdaGQ6QdSv4knAv-1",
        "matchedMetamodelRelationship": true
      }
    }
  ]
};
