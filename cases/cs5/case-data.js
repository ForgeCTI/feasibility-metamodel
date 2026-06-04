const caseData = {
  "metadata": {
    "id": "cs5",
    "title": "CS5 — Supply-chain or managed-service compromise",
    "shortTitle": "Supply-chain or managed-service compromise",
    "description": "Interactive implementation of the fifth case study generated from the uploaded Draw.io model.",
    "source": "metamodel_v2-case5.drawio.xml",
    "determinants": [
      "Organization",
      "Infrastructure",
      "Cyber threat"
    ],
    "patterns": [
      "Supply chain",
      "Managed service",
      "Threat-driven feasibility"
    ],
    "layout": {
      "minX": -1020.0,
      "minY": 45.0,
      "maxX": 720.0,
      "maxY": 1100.0,
      "width": 1980.0,
      "height": 1295.0,
      "padding": 120
    }
  },
  "nodes": [
    {
      "data": {
        "id": "a6G1eZ1pTnWaqZrPulQG-1",
        "name": "NOBELIUM",
        "label": "NOBELIUM",
        "metamodelEntity": "ThreatActor",
        "originalMetamodelEntity": "ThreatActor",
        "description": "NOBELIUM is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "a6G1eZ1pTnWaqZrPulQG-3",
            "name": "initiates",
            "label": "initiates",
            "source": "a6G1eZ1pTnWaqZrPulQG-1",
            "sourceLabel": "NOBELIUM",
            "sourceCardinality": "1",
            "target": "a6G1eZ1pTnWaqZrPulQG-2",
            "targetLabel": "NOBELIUM Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "NOBELIUM initiates NOBELIUM Attack.",
            "sourceMetamodelEntity": "ThreatActor",
            "targetMetamodelEntity": "Threat",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vQDsTpPWd9vX5YVv_lA--3",
            "name": "alias",
            "label": "alias",
            "source": "a6G1eZ1pTnWaqZrPulQG-1",
            "sourceLabel": "NOBELIUM",
            "sourceCardinality": "0..*",
            "target": "vQDsTpPWd9vX5YVv_lA--2",
            "targetLabel": "APT29",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "NOBELIUM alias APT29.",
            "sourceMetamodelEntity": "ThreatActor",
            "targetMetamodelEntity": "ThreatActor",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [],
        "drawioId": "a6G1eZ1pTnWaqZrPulQG-1",
        "drawioPosition": {
          "x": 510.0,
          "y": 110.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 90.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 185.0
      }
    },
    {
      "data": {
        "id": "a6G1eZ1pTnWaqZrPulQG-2",
        "name": "NOBELIUM Attack",
        "label": "NOBELIUM Attack",
        "metamodelEntity": "Threat",
        "originalMetamodelEntity": "Threat",
        "description": "NOBELIUM Attack is a case-study instance of the Threat entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "nxVt7PW1jbqtAcrwFIc7-2",
            "name": "startsWith",
            "label": "startsWith",
            "source": "a6G1eZ1pTnWaqZrPulQG-2",
            "sourceLabel": "NOBELIUM Attack",
            "sourceCardinality": "",
            "target": "nxVt7PW1jbqtAcrwFIc7-1",
            "targetLabel": "AS1: Phishing email through Constant Contact",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "NOBELIUM Attack startsWith AS1: Phishing email through Constant Contact.",
            "sourceMetamodelEntity": "Threat",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "a6G1eZ1pTnWaqZrPulQG-3",
            "name": "initiates",
            "label": "initiates",
            "source": "a6G1eZ1pTnWaqZrPulQG-1",
            "sourceLabel": "NOBELIUM",
            "sourceCardinality": "1",
            "target": "a6G1eZ1pTnWaqZrPulQG-2",
            "targetLabel": "NOBELIUM Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "NOBELIUM initiates NOBELIUM Attack.",
            "sourceMetamodelEntity": "ThreatActor",
            "targetMetamodelEntity": "Threat",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "a6G1eZ1pTnWaqZrPulQG-2",
        "drawioPosition": {
          "x": 510.0,
          "y": 230.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 210.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "nxVt7PW1jbqtAcrwFIc7-1",
        "name": "AS1: Phishing email through Constant Contact",
        "label": "AS1: Phishing email through Constant Contact",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS1: Phishing email through Constant Contact is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-2",
            "name": "implements",
            "label": "implements",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-1",
            "targetLabel": "T1566.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Phishing email through Constant Contact implements T1566.002.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-5",
            "name": "followedBy",
            "label": "followedBy",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-4",
            "targetLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Phishing email through Constant Contact followedBy AS2: Redirect to attacker-controlled infrastructure.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "u-rx46zPe2Q4j8xnACfn-2",
            "name": "exploits",
            "label": "exploits",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS1: Phishing email through Constant Contact exploits Prone to Phishing.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "2_cSzvVXBwVxwoJdG2Pc-2",
            "name": "employs",
            "label": "employs",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "1..*",
            "target": "2_cSzvVXBwVxwoJdG2Pc-1",
            "targetLabel": "Constant Contact Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS1: Phishing email through Constant Contact employs Constant Contact Instance.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "nxVt7PW1jbqtAcrwFIc7-2",
            "name": "startsWith",
            "label": "startsWith",
            "source": "a6G1eZ1pTnWaqZrPulQG-2",
            "sourceLabel": "NOBELIUM Attack",
            "sourceCardinality": "",
            "target": "nxVt7PW1jbqtAcrwFIc7-1",
            "targetLabel": "AS1: Phishing email through Constant Contact",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "NOBELIUM Attack startsWith AS1: Phishing email through Constant Contact.",
            "sourceMetamodelEntity": "Threat",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "nxVt7PW1jbqtAcrwFIc7-1",
        "drawioPosition": {
          "x": 510.0,
          "y": 330.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 290.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 405.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-1",
        "name": "T1566.002",
        "label": "T1566.002",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1566.002 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [
          {
            "id": "JHPqEOGeP-sBoX8jyG4Y-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "XpCO9PDIey8_-v72ip0i-1",
            "sourceLabel": "T1566.002",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1566.002 exploitsVulnerability Prone to Phishing.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-2",
            "name": "implements",
            "label": "implements",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-1",
            "targetLabel": "T1566.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Phishing email through Constant Contact implements T1566.002.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-1",
        "drawioPosition": {
          "x": 260.0,
          "y": 230.0
        },
        "drawioGeometry": {
          "x": 200.0,
          "y": 190.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1400.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-4",
        "name": "AS2: Redirect to attacker-controlled infrastructure",
        "label": "AS2: Redirect to attacker-controlled infrastructure",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS2: Redirect to attacker-controlled infrastructure is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-8",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-4",
            "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-7",
            "targetLabel": "T1584.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Redirect to attacker-controlled infrastructure implements T1584.001.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-11",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-4",
            "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-10",
            "targetLabel": "AS3: Deliver malicious ISO package",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Redirect to attacker-controlled infrastructure followedBy AS3: Deliver malicious ISO package.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-5",
            "name": "followedBy",
            "label": "followedBy",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-4",
            "targetLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Phishing email through Constant Contact followedBy AS2: Redirect to attacker-controlled infrastructure.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-4",
        "drawioPosition": {
          "x": 510.0,
          "y": 450.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 410.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 525.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-7",
        "name": "T1584.001",
        "label": "T1584.001",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1584.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-8",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-4",
            "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-7",
            "targetLabel": "T1584.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Redirect to attacker-controlled infrastructure implements T1584.001.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-7",
        "drawioPosition": {
          "x": 290.0,
          "y": 450.0
        },
        "drawioGeometry": {
          "x": 230.0,
          "y": 410.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1430.0,
        "y": 525.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-10",
        "name": "AS3: Deliver malicious ISO package",
        "label": "AS3: Deliver malicious ISO package",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS3: Deliver malicious ISO package is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-14",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-13",
            "targetLabel": "T1105",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Deliver malicious ISO package implements T1105.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-16",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-15",
            "targetLabel": "AS4: Execute the malicious file",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Deliver malicious ISO package followedBy AS4: Execute the malicious file.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-2",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-3",
            "targetLabel": "Malicious ISO File",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS3: Deliver malicious ISO package employs Malicious ISO File.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-11",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-4",
            "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-10",
            "targetLabel": "AS3: Deliver malicious ISO package",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Redirect to attacker-controlled infrastructure followedBy AS3: Deliver malicious ISO package.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-10",
        "drawioPosition": {
          "x": 510.0,
          "y": 570.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 530.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 645.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-13",
        "name": "T1105",
        "label": "T1105",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1105 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-14",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-13",
            "targetLabel": "T1105",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Deliver malicious ISO package implements T1105.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-13",
        "drawioPosition": {
          "x": 275.0,
          "y": 530.0
        },
        "drawioGeometry": {
          "x": 250.0,
          "y": 510.0,
          "width": 50.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1415.0,
        "y": 605.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-15",
        "name": "AS4: Execute the malicious file",
        "label": "AS4: Execute the malicious file",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS4: Execute the malicious file is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-19",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-18",
            "targetLabel": "T1204.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Execute the malicious file implements T1204.002.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-21",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-20",
            "targetLabel": "AS5: Launch DLL",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Execute the malicious file followedBy AS5: Launch DLL.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-5",
            "name": "exploits",
            "label": "exploits",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS4: Execute the malicious file exploits Prone to Phishing.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-7",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-3",
            "targetLabel": "Malicious ISO File",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: Execute the malicious file employs Malicious ISO File.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-16",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-15",
            "targetLabel": "AS4: Execute the malicious file",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Deliver malicious ISO package followedBy AS4: Execute the malicious file.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-15",
        "drawioPosition": {
          "x": 510.0,
          "y": 690.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 650.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 765.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-18",
        "name": "T1204.002",
        "label": "T1204.002",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1204.002 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [
          {
            "id": "JHPqEOGeP-sBoX8jyG4Y-3",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "XpCO9PDIey8_-v72ip0i-18",
            "sourceLabel": "T1204.002",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1204.002 exploitsVulnerability Prone to Phishing.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-19",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-18",
            "targetLabel": "T1204.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Execute the malicious file implements T1204.002.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-18",
        "drawioPosition": {
          "x": 305.0,
          "y": 690.0
        },
        "drawioGeometry": {
          "x": 260.0,
          "y": 670.0,
          "width": 90.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1445.0,
        "y": 765.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-20",
        "name": "AS5: Launch DLL",
        "label": "AS5: Launch DLL",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS5: Launch DLL is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-24",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-23",
            "targetLabel": "T1218.011",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Launch DLL implements T1218.011.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-29",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-28",
            "targetLabel": "AS6: Cobalt Strike Beacon loader",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS5: Launch DLL followedBy AS6: Cobalt Strike Beacon loader.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-10",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-22",
            "targetLabel": "Document.dll",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Launch DLL employs Document.dll.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-21",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-20",
            "targetLabel": "AS5: Launch DLL",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Execute the malicious file followedBy AS5: Launch DLL.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-20",
        "drawioPosition": {
          "x": 510.0,
          "y": 810.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 770.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 885.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-23",
        "name": "T1218.011",
        "label": "T1218.011",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1218.011 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-24",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-23",
            "targetLabel": "T1218.011",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Launch DLL implements T1218.011.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-23",
        "drawioPosition": {
          "x": 720.0,
          "y": 770.0
        },
        "drawioGeometry": {
          "x": 660.0,
          "y": 730.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1860.0,
        "y": 845.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-28",
        "name": "AS6: Cobalt Strike Beacon loader",
        "label": "AS6: Cobalt Strike Beacon loader",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS6: Cobalt Strike Beacon loader is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-32",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-31",
            "targetLabel": "T1588.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS6: Cobalt Strike Beacon loader implements T1588.001.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "XpCO9PDIey8_-v72ip0i-35",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "",
            "target": "XpCO9PDIey8_-v72ip0i-34",
            "targetLabel": "AS7: Establish persistent access",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS6: Cobalt Strike Beacon loader relatedTo AS7: Establish persistent access.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-16",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-12",
            "targetLabel": "Cobalt Strike Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS6: Cobalt Strike Beacon loader employs Cobalt Strike Instance.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-29",
            "name": "followedBy",
            "label": "followedBy",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "0..*",
            "target": "XpCO9PDIey8_-v72ip0i-28",
            "targetLabel": "AS6: Cobalt Strike Beacon loader",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS5: Launch DLL followedBy AS6: Cobalt Strike Beacon loader.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-28",
        "drawioPosition": {
          "x": 510.0,
          "y": 940.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 900.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 1015.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-31",
        "name": "T1588.001",
        "label": "T1588.001",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1588.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-32",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-31",
            "targetLabel": "T1588.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS6: Cobalt Strike Beacon loader implements T1588.001.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-31",
        "drawioPosition": {
          "x": 305.0,
          "y": 1015.0
        },
        "drawioGeometry": {
          "x": 270.0,
          "y": 990.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1445.0,
        "y": 1090.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-34",
        "name": "AS7: Establish persistent access",
        "label": "AS7: Establish persistent access",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS7: Establish persistent access is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-37",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-36",
            "targetLabel": "T1071",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS7: Establish persistent access implements T1071.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "d8I3JHHNy5NC9w95SOC3-1",
            "name": "compromises",
            "label": "compromises",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "V8wSEFiieA5Djqr3Obcq-6",
            "targetLabel": "Confidentiality of data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Establish persistent access compromises Confidentiality of data.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "d8I3JHHNy5NC9w95SOC3-3",
            "name": "compromises",
            "label": "compromises",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Establish persistent access compromises Integrity of data.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "RAx5xnODDfnls-6HHwZi-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-21",
            "targetLabel": "Policies Draft",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS7: Establish persistent access targetsResource Policies Draft.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "Asset",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-35",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "",
            "target": "XpCO9PDIey8_-v72ip0i-34",
            "targetLabel": "AS7: Establish persistent access",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS6: Cobalt Strike Beacon loader relatedTo AS7: Establish persistent access.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "ThreatStep",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-34",
        "drawioPosition": {
          "x": 510.0,
          "y": 1100.0
        },
        "drawioGeometry": {
          "x": 450.0,
          "y": 1060.0,
          "width": 120.0,
          "height": 80.0
        },
        "layoutWidth": 120,
        "layoutHeight": 80.0,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1650.0,
        "y": 1175.0
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-36",
        "name": "T1071",
        "label": "T1071",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1071 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [
          {
            "id": "DaL_grPgeYVJyLfJLXkr-1",
            "name": "violates",
            "label": "violates",
            "source": "XpCO9PDIey8_-v72ip0i-36",
            "sourceLabel": "T1071",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1071 violates Integrity of data.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "DaL_grPgeYVJyLfJLXkr-3",
            "name": "violates",
            "label": "violates",
            "source": "XpCO9PDIey8_-v72ip0i-36",
            "sourceLabel": "T1071",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1071 violates Confidentiality.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "XpCO9PDIey8_-v72ip0i-37",
            "name": "implements",
            "label": "implements",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "XpCO9PDIey8_-v72ip0i-36",
            "targetLabel": "T1071",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS7: Establish persistent access implements T1071.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "TTP",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "XpCO9PDIey8_-v72ip0i-36",
        "drawioPosition": {
          "x": 300.0,
          "y": 1100.0
        },
        "drawioGeometry": {
          "x": 260.0,
          "y": 1080.0,
          "width": 80.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1440.0,
        "y": 1175.0
      }
    },
    {
      "data": {
        "id": "kWeNGhi0rPNKMvC3xEbO-1",
        "name": "OrgFive",
        "label": "OrgFive",
        "metamodelEntity": "Organization",
        "originalMetamodelEntity": "Organization",
        "description": "OrgFive is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "kWeNGhi0rPNKMvC3xEbO-3",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "kWeNGhi0rPNKMvC3xEbO-2",
            "targetLabel": "Politics",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
            "description": "OrgFive operatesIn Politics.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "Sector",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "hryo91y_1cwGIV1Xy_qz-6",
            "name": "manages",
            "label": "manages",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "hryo91y_1cwGIV1Xy_qz-5",
            "targetLabel": "Prod. Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "OrgFive manages Prod. Infra.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "Infrastructure",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "V8wSEFiieA5Djqr3Obcq-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "V8wSEFiieA5Djqr3Obcq-3",
            "targetLabel": "IT systems must be protected against unauthorized access",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "OrgFive hasBusinessRequirement IT systems must be protected against unauthorized access.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "BusinessRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [],
        "drawioId": "kWeNGhi0rPNKMvC3xEbO-1",
        "drawioPosition": {
          "x": -380.0,
          "y": 140.0
        },
        "drawioGeometry": {
          "x": -440.0,
          "y": 120.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 760.0,
        "y": 215.0
      }
    },
    {
      "data": {
        "id": "kWeNGhi0rPNKMvC3xEbO-2",
        "name": "Politics",
        "label": "Politics",
        "metamodelEntity": "Sector",
        "originalMetamodelEntity": "Sector",
        "description": "Politics is a case-study instance of the Sector entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Sector is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "kWeNGhi0rPNKMvC3xEbO-3",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "kWeNGhi0rPNKMvC3xEbO-2",
            "targetLabel": "Politics",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
            "description": "OrgFive operatesIn Politics.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "Sector",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "kWeNGhi0rPNKMvC3xEbO-2",
        "drawioPosition": {
          "x": -240.0,
          "y": 230.0
        },
        "drawioGeometry": {
          "x": -300.0,
          "y": 210.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 900.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "hryo91y_1cwGIV1Xy_qz-5",
        "name": "Prod. Infra",
        "label": "Prod. Infra",
        "metamodelEntity": "Infrastructure",
        "originalMetamodelEntity": "Infrastructure",
        "description": "Prod. Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "hryo91y_1cwGIV1Xy_qz-9",
            "name": "usedBy",
            "label": "usedBy",
            "source": "hryo91y_1cwGIV1Xy_qz-5",
            "sourceLabel": "Prod. Infra",
            "sourceCardinality": "1",
            "target": "hryo91y_1cwGIV1Xy_qz-8",
            "targetLabel": "U1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod. Infra usedBy U1.",
            "sourceMetamodelEntity": "Infrastructure",
            "targetMetamodelEntity": "User",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "zbGxqYfjiTHwBFOA54J_-5",
            "name": "madeBy",
            "label": "madeBy",
            "source": "hryo91y_1cwGIV1Xy_qz-5",
            "sourceLabel": "Prod. Infra",
            "sourceCardinality": "1",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod. Infra madeBy N1.",
            "sourceMetamodelEntity": "Infrastructure",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "hryo91y_1cwGIV1Xy_qz-6",
            "name": "manages",
            "label": "manages",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "hryo91y_1cwGIV1Xy_qz-5",
            "targetLabel": "Prod. Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "OrgFive manages Prod. Infra.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "Infrastructure",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "hryo91y_1cwGIV1Xy_qz-5",
        "drawioPosition": {
          "x": -380.0,
          "y": 340.0
        },
        "drawioGeometry": {
          "x": -440.0,
          "y": 320.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 760.0,
        "y": 415.0
      }
    },
    {
      "data": {
        "id": "hryo91y_1cwGIV1Xy_qz-8",
        "name": "U1",
        "label": "U1",
        "metamodelEntity": "User",
        "originalMetamodelEntity": "User",
        "description": "U1 is a case-study instance of the User entity in the feasibility-oriented metamodel. It specializes the metamodel concept: User is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "Q_o9iHX-xxMBJ9QQpt6v-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "hryo91y_1cwGIV1Xy_qz-8",
            "sourceLabel": "U1",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "User  —  Node",
            "description": "U1 hasAccessTo N1.",
            "sourceMetamodelEntity": "User",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "hryo91y_1cwGIV1Xy_qz-9",
            "name": "usedBy",
            "label": "usedBy",
            "source": "hryo91y_1cwGIV1Xy_qz-5",
            "sourceLabel": "Prod. Infra",
            "sourceCardinality": "1",
            "target": "hryo91y_1cwGIV1Xy_qz-8",
            "targetLabel": "U1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod. Infra usedBy U1.",
            "sourceMetamodelEntity": "Infrastructure",
            "targetMetamodelEntity": "User",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "u-rx46zPe2Q4j8xnACfn-4",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "u-rx46zPe2Q4j8xnACfn-1",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "hryo91y_1cwGIV1Xy_qz-8",
            "targetLabel": "U1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1.",
            "sourceMetamodelEntity": "HumanVulnerability",
            "targetMetamodelEntity": "User",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "hryo91y_1cwGIV1Xy_qz-8",
        "drawioPosition": {
          "x": -210.0,
          "y": 470.0
        },
        "drawioGeometry": {
          "x": -270.0,
          "y": 450.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 930.0,
        "y": 545.0
      }
    },
    {
      "data": {
        "id": "u-rx46zPe2Q4j8xnACfn-1",
        "name": "Prone to Phishing",
        "label": "Prone to Phishing",
        "metamodelEntity": "HumanVulnerability",
        "originalMetamodelEntity": "HumanVulnerability",
        "description": "Prone to Phishing is a case-study instance of the HumanVulnerability entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HumanVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "u-rx46zPe2Q4j8xnACfn-4",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "u-rx46zPe2Q4j8xnACfn-1",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "hryo91y_1cwGIV1Xy_qz-8",
            "targetLabel": "U1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1.",
            "sourceMetamodelEntity": "HumanVulnerability",
            "targetMetamodelEntity": "User",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "u-rx46zPe2Q4j8xnACfn-2",
            "name": "exploits",
            "label": "exploits",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS1: Phishing email through Constant Contact exploits Prone to Phishing.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "JHPqEOGeP-sBoX8jyG4Y-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "XpCO9PDIey8_-v72ip0i-1",
            "sourceLabel": "T1566.002",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1566.002 exploitsVulnerability Prone to Phishing.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-5",
            "name": "exploits",
            "label": "exploits",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS4: Execute the malicious file exploits Prone to Phishing.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "JHPqEOGeP-sBoX8jyG4Y-3",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "XpCO9PDIey8_-v72ip0i-18",
            "sourceLabel": "T1204.002",
            "sourceCardinality": "",
            "target": "u-rx46zPe2Q4j8xnACfn-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1204.002 exploitsVulnerability Prone to Phishing.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "HumanVulnerability",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "u-rx46zPe2Q4j8xnACfn-1",
        "drawioPosition": {
          "x": 60.0,
          "y": 300.0
        },
        "drawioGeometry": {
          "x": 0.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1200.0,
        "y": 375.0
      }
    },
    {
      "data": {
        "id": "vQDsTpPWd9vX5YVv_lA--2",
        "name": "APT29",
        "label": "APT29",
        "metamodelEntity": "ThreatActor",
        "originalMetamodelEntity": "ThreatActor",
        "description": "APT29 is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vQDsTpPWd9vX5YVv_lA--3",
            "name": "alias",
            "label": "alias",
            "source": "a6G1eZ1pTnWaqZrPulQG-1",
            "sourceLabel": "NOBELIUM",
            "sourceCardinality": "0..*",
            "target": "vQDsTpPWd9vX5YVv_lA--2",
            "targetLabel": "APT29",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "NOBELIUM alias APT29.",
            "sourceMetamodelEntity": "ThreatActor",
            "targetMetamodelEntity": "ThreatActor",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "vQDsTpPWd9vX5YVv_lA--2",
        "drawioPosition": {
          "x": 290.0,
          "y": 110.0
        },
        "drawioGeometry": {
          "x": 230.0,
          "y": 90.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1430.0,
        "y": 185.0
      }
    },
    {
      "data": {
        "id": "2_cSzvVXBwVxwoJdG2Pc-1",
        "name": "Constant Contact Instance",
        "label": "Constant Contact Instance",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Constant Contact Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "C0XdiW15rUyJ3cWgeJDH-2",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "2_cSzvVXBwVxwoJdG2Pc-1",
            "sourceLabel": "Constant Contact Instance",
            "sourceCardinality": "1..*",
            "target": "C0XdiW15rUyJ3cWgeJDH-1",
            "targetLabel": "Constant Contact",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Constant Contact Instance instanceOf Constant Contact.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "DiR6NjmfnkmySAAi_VLq-2",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "2_cSzvVXBwVxwoJdG2Pc-1",
            "sourceLabel": "Constant Contact Instance",
            "sourceCardinality": "1",
            "target": "4Z-NknjXgCqIMUdvH7Cu-1",
            "targetLabel": "Custom email template",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration",
            "description": "Constant Contact Instance hasConfig Custom email template.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolConfiguration",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "2_cSzvVXBwVxwoJdG2Pc-2",
            "name": "employs",
            "label": "employs",
            "source": "nxVt7PW1jbqtAcrwFIc7-1",
            "sourceLabel": "AS1: Phishing email through Constant Contact",
            "sourceCardinality": "1..*",
            "target": "2_cSzvVXBwVxwoJdG2Pc-1",
            "targetLabel": "Constant Contact Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS1: Phishing email through Constant Contact employs Constant Contact Instance.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "2_cSzvVXBwVxwoJdG2Pc-1",
        "drawioPosition": {
          "x": 10.0,
          "y": 460.0
        },
        "drawioGeometry": {
          "x": -50.0,
          "y": 440.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1150.0,
        "y": 535.0
      }
    },
    {
      "data": {
        "id": "C0XdiW15rUyJ3cWgeJDH-1",
        "name": "Constant Contact",
        "label": "Constant Contact",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "Constant Contact is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [
          {
            "id": "zbGxqYfjiTHwBFOA54J_-2",
            "name": "requires",
            "label": "requires",
            "source": "C0XdiW15rUyJ3cWgeJDH-1",
            "sourceLabel": "Constant Contact",
            "sourceCardinality": "1",
            "target": "4Z-NknjXgCqIMUdvH7Cu-1",
            "targetLabel": "Custom email template",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration",
            "description": "Constant Contact requires Custom email template.",
            "sourceMetamodelEntity": "AttackTool",
            "targetMetamodelEntity": "AttackToolConfiguration",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "C0XdiW15rUyJ3cWgeJDH-2",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "2_cSzvVXBwVxwoJdG2Pc-1",
            "sourceLabel": "Constant Contact Instance",
            "sourceCardinality": "1..*",
            "target": "C0XdiW15rUyJ3cWgeJDH-1",
            "targetLabel": "Constant Contact",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Constant Contact Instance instanceOf Constant Contact.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "C0XdiW15rUyJ3cWgeJDH-1",
        "drawioPosition": {
          "x": 10.0,
          "y": 584.0
        },
        "drawioGeometry": {
          "x": -50.0,
          "y": 564.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1150.0,
        "y": 659.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-3",
        "name": "Malicious ISO File",
        "label": "Malicious ISO File",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Malicious ISO File is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "V8wSEFiieA5Djqr3Obcq-1",
            "name": "deliveredTo",
            "label": "deliveredTo",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File deliveredTo N1.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-5",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-7",
            "targetLabel": "ISO File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Malicious ISO File instanceOf ISO File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-9",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-8",
            "targetLabel": "Reports.lnk",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers Reports.lnk.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-12",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-11",
            "targetLabel": "ica-declass.pdf",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers ica-declass.pdf.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-20",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-22",
            "targetLabel": "Document.dll",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers Document.dll.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-2",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-10",
            "sourceLabel": "AS3: Deliver malicious ISO package",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-3",
            "targetLabel": "Malicious ISO File",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS3: Deliver malicious ISO package employs Malicious ISO File.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-7",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-15",
            "sourceLabel": "AS4: Execute the malicious file",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-3",
            "targetLabel": "Malicious ISO File",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: Execute the malicious file employs Malicious ISO File.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-3",
        "drawioPosition": {
          "x": 130.0,
          "y": 690.0
        },
        "drawioGeometry": {
          "x": 70.0,
          "y": 670.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1270.0,
        "y": 765.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-7",
        "name": "ISO File",
        "label": "ISO File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "ISO File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-5",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-7",
            "targetLabel": "ISO File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Malicious ISO File instanceOf ISO File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "vlI-gy6UjRVgFXrZI4Q_-1",
            "sourceLabel": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-7",
            "targetLabel": "ISO File",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252 associatedTo ISO File.",
            "sourceMetamodelEntity": "Indicator",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-7",
        "drawioPosition": {
          "x": 130.0,
          "y": 770.0
        },
        "drawioGeometry": {
          "x": 70.0,
          "y": 750.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1270.0,
        "y": 845.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-8",
        "name": "Reports.lnk",
        "label": "Reports.lnk",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Reports.lnk is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-15",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-8",
            "sourceLabel": "Reports.lnk",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-14",
            "targetLabel": "LNK File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Reports.lnk instanceOf LNK File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-9",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-8",
            "targetLabel": "Reports.lnk",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers Reports.lnk.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-8",
        "drawioPosition": {
          "x": -120.0,
          "y": 700.0
        },
        "drawioGeometry": {
          "x": -180.0,
          "y": 680.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1020.0,
        "y": 775.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-11",
        "name": "ica-declass.pdf",
        "label": "ica-declass.pdf",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "ica-declass.pdf is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-18",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-11",
            "sourceLabel": "ica-declass.pdf",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-17",
            "targetLabel": "PDF File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ica-declass.pdf instanceOf PDF File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-12",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-11",
            "targetLabel": "ica-declass.pdf",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers ica-declass.pdf.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-11",
        "drawioPosition": {
          "x": -120.0,
          "y": 760.0
        },
        "drawioGeometry": {
          "x": -180.0,
          "y": 740.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1020.0,
        "y": 835.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-14",
        "name": "LNK File",
        "label": "LNK File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "LNK File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-15",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-8",
            "sourceLabel": "Reports.lnk",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-14",
            "targetLabel": "LNK File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Reports.lnk instanceOf LNK File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-14",
        "drawioPosition": {
          "x": -340.0,
          "y": 740.0
        },
        "drawioGeometry": {
          "x": -400.0,
          "y": 720.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 800.0,
        "y": 815.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-17",
        "name": "PDF File",
        "label": "PDF File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "PDF File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-18",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-11",
            "sourceLabel": "ica-declass.pdf",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-17",
            "targetLabel": "PDF File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ica-declass.pdf instanceOf PDF File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-17",
        "drawioPosition": {
          "x": -340.0,
          "y": 810.0
        },
        "drawioGeometry": {
          "x": -400.0,
          "y": 790.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 800.0,
        "y": 885.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-22",
        "name": "Document.dll",
        "label": "Document.dll",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Document.dll is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-24",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-22",
            "sourceLabel": "Document.dll",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-23",
            "targetLabel": "DLL File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Document.dll instanceOf DLL File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-10",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-20",
            "sourceLabel": "AS5: Launch DLL",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-22",
            "targetLabel": "Document.dll",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Launch DLL employs Document.dll.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "-A7FWggeQ45b2r9V3aWm-20",
            "name": "delivers",
            "label": "delivers",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-22",
            "targetLabel": "Document.dll",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File delivers Document.dll.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-22",
        "drawioPosition": {
          "x": -120.0,
          "y": 830.0
        },
        "drawioGeometry": {
          "x": -180.0,
          "y": 810.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1020.0,
        "y": 905.0
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-23",
        "name": "DLL File",
        "label": "DLL File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "DLL File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "-A7FWggeQ45b2r9V3aWm-24",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "-A7FWggeQ45b2r9V3aWm-22",
            "sourceLabel": "Document.dll",
            "sourceCardinality": "1..*",
            "target": "-A7FWggeQ45b2r9V3aWm-23",
            "targetLabel": "DLL File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Document.dll instanceOf DLL File.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "-A7FWggeQ45b2r9V3aWm-23",
        "drawioPosition": {
          "x": -340.0,
          "y": 880.0
        },
        "drawioGeometry": {
          "x": -400.0,
          "y": 860.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 800.0,
        "y": 955.0
      }
    },
    {
      "data": {
        "id": "vlI-gy6UjRVgFXrZI4Q_-1",
        "name": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252",
        "label": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252",
        "metamodelEntity": "Indicator",
        "originalMetamodelEntity": "Indicator",
        "description": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252 is a case-study instance of the Indicator entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Indicator is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "vlI-gy6UjRVgFXrZI4Q_-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "vlI-gy6UjRVgFXrZI4Q_-1",
            "sourceLabel": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252",
            "sourceCardinality": "",
            "target": "-A7FWggeQ45b2r9V3aWm-7",
            "targetLabel": "ISO File",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252 associatedTo ISO File.",
            "sourceMetamodelEntity": "Indicator",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [],
        "drawioId": "vlI-gy6UjRVgFXrZI4Q_-1",
        "drawioPosition": {
          "x": 100.0,
          "y": 895.0
        },
        "drawioGeometry": {
          "x": -110.0,
          "y": 870.0,
          "width": 420.0,
          "height": 50.0
        },
        "layoutWidth": 420.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 408.0
      },
      "position": {
        "x": 1240.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "4Z-NknjXgCqIMUdvH7Cu-1",
        "name": "Custom email template",
        "label": "Custom email template",
        "metamodelEntity": "AttackToolConfiguration",
        "originalMetamodelEntity": "AttackToolConfiguration",
        "description": "Custom email template is a case-study instance of the AttackToolConfiguration entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolConfiguration is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "DiR6NjmfnkmySAAi_VLq-2",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "2_cSzvVXBwVxwoJdG2Pc-1",
            "sourceLabel": "Constant Contact Instance",
            "sourceCardinality": "1",
            "target": "4Z-NknjXgCqIMUdvH7Cu-1",
            "targetLabel": "Custom email template",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration",
            "description": "Constant Contact Instance hasConfig Custom email template.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackToolConfiguration",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "zbGxqYfjiTHwBFOA54J_-2",
            "name": "requires",
            "label": "requires",
            "source": "C0XdiW15rUyJ3cWgeJDH-1",
            "sourceLabel": "Constant Contact",
            "sourceCardinality": "1",
            "target": "4Z-NknjXgCqIMUdvH7Cu-1",
            "targetLabel": "Custom email template",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration",
            "description": "Constant Contact requires Custom email template.",
            "sourceMetamodelEntity": "AttackTool",
            "targetMetamodelEntity": "AttackToolConfiguration",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "4Z-NknjXgCqIMUdvH7Cu-1",
        "drawioPosition": {
          "x": -230.0,
          "y": 584.5
        },
        "drawioGeometry": {
          "x": -300.0,
          "y": 557.5,
          "width": 140.0,
          "height": 54.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 54.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 910.0,
        "y": 659.5
      }
    },
    {
      "data": {
        "id": "zbGxqYfjiTHwBFOA54J_-4",
        "name": "N1",
        "label": "N1",
        "metamodelEntity": "Node",
        "originalMetamodelEntity": "Node",
        "description": "N1 is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "l09v7P1m8Fhx9XaZaJaK-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "zbGxqYfjiTHwBFOA54J_-4",
            "sourceLabel": "N1",
            "sourceCardinality": "1..*",
            "target": "l09v7P1m8Fhx9XaZaJaK-1",
            "targetLabel": "DesktopComputer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1 hasNodeType DesktopComputer.",
            "sourceMetamodelEntity": "Node",
            "targetMetamodelEntity": "NodeType",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-22",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "zbGxqYfjiTHwBFOA54J_-4",
            "sourceLabel": "N1",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-21",
            "targetLabel": "Policies Draft",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "N1 hostsResource Policies Draft.",
            "sourceMetamodelEntity": "Node",
            "targetMetamodelEntity": "Asset",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "zbGxqYfjiTHwBFOA54J_-5",
            "name": "madeBy",
            "label": "madeBy",
            "source": "hryo91y_1cwGIV1Xy_qz-5",
            "sourceLabel": "Prod. Infra",
            "sourceCardinality": "1",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod. Infra madeBy N1.",
            "sourceMetamodelEntity": "Infrastructure",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "Q_o9iHX-xxMBJ9QQpt6v-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "hryo91y_1cwGIV1Xy_qz-8",
            "sourceLabel": "U1",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "User  —  Node",
            "description": "U1 hasAccessTo N1.",
            "sourceMetamodelEntity": "User",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "V8wSEFiieA5Djqr3Obcq-1",
            "name": "deliveredTo",
            "label": "deliveredTo",
            "source": "-A7FWggeQ45b2r9V3aWm-3",
            "sourceLabel": "Malicious ISO File",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Malicious ISO File deliveredTo N1.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-18",
            "name": "deliveredTo",
            "label": "deliveredTo",
            "source": "S6E735E0-gT0HQi0w6fD-12",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Cobalt Strike Instance deliveredTo N1.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "zbGxqYfjiTHwBFOA54J_-4",
        "drawioPosition": {
          "x": -490.0,
          "y": 460.0
        },
        "drawioGeometry": {
          "x": -550.0,
          "y": 440.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 650.0,
        "y": 535.0
      }
    },
    {
      "data": {
        "id": "l09v7P1m8Fhx9XaZaJaK-1",
        "name": "DesktopComputer",
        "label": "DesktopComputer",
        "metamodelEntity": "NodeType",
        "originalMetamodelEntity": "NodeType",
        "description": "DesktopComputer is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "l09v7P1m8Fhx9XaZaJaK-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "zbGxqYfjiTHwBFOA54J_-4",
            "sourceLabel": "N1",
            "sourceCardinality": "1..*",
            "target": "l09v7P1m8Fhx9XaZaJaK-1",
            "targetLabel": "DesktopComputer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1 hasNodeType DesktopComputer.",
            "sourceMetamodelEntity": "Node",
            "targetMetamodelEntity": "NodeType",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "l09v7P1m8Fhx9XaZaJaK-1",
        "drawioPosition": {
          "x": -540.0,
          "y": 605.0
        },
        "drawioGeometry": {
          "x": -600.0,
          "y": 585.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 600.0,
        "y": 680.0
      }
    },
    {
      "data": {
        "id": "V8wSEFiieA5Djqr3Obcq-3",
        "name": "IT systems must be protected against unauthorized access",
        "label": "IT systems must be protected against unauthorized access",
        "metamodelEntity": "BusinessRequirement",
        "originalMetamodelEntity": "BusinessRequirement",
        "description": "IT systems must be protected against unauthorized access is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "V8wSEFiieA5Djqr3Obcq-7",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "V8wSEFiieA5Djqr3Obcq-3",
            "sourceLabel": "IT systems must be protected against unauthorized access",
            "sourceCardinality": "1..*",
            "target": "V8wSEFiieA5Djqr3Obcq-6",
            "targetLabel": "Confidentiality of data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Confidentiality of data.",
            "sourceMetamodelEntity": "BusinessRequirement",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "V8wSEFiieA5Djqr3Obcq-3",
            "sourceLabel": "IT systems must be protected against unauthorized access",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Integrity of data.",
            "sourceMetamodelEntity": "BusinessRequirement",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "V8wSEFiieA5Djqr3Obcq-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "kWeNGhi0rPNKMvC3xEbO-1",
            "sourceLabel": "OrgFive",
            "sourceCardinality": "1",
            "target": "V8wSEFiieA5Djqr3Obcq-3",
            "targetLabel": "IT systems must be protected against unauthorized access",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "OrgFive hasBusinessRequirement IT systems must be protected against unauthorized access.",
            "sourceMetamodelEntity": "Organization",
            "targetMetamodelEntity": "BusinessRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "V8wSEFiieA5Djqr3Obcq-3",
        "drawioPosition": {
          "x": -630.0,
          "y": 115.0
        },
        "drawioGeometry": {
          "x": -740.0,
          "y": 90.0,
          "width": 220.0,
          "height": 50.0
        },
        "layoutWidth": 220.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 208.0
      },
      "position": {
        "x": 510.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "V8wSEFiieA5Djqr3Obcq-6",
        "name": "Confidentiality of data",
        "label": "Confidentiality of data",
        "metamodelEntity": "AssetSecurityRequirement",
        "originalMetamodelEntity": "AssetSecurityRequirement",
        "description": "Confidentiality of data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-8",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "V8wSEFiieA5Djqr3Obcq-6",
            "sourceLabel": "Confidentiality of data",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Confidentiality of data implementationOf Confidentiality.",
            "sourceMetamodelEntity": "AssetSecurityRequirement",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "d8I3JHHNy5NC9w95SOC3-1",
            "name": "compromises",
            "label": "compromises",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "V8wSEFiieA5Djqr3Obcq-6",
            "targetLabel": "Confidentiality of data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Establish persistent access compromises Confidentiality of data.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "V8wSEFiieA5Djqr3Obcq-7",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "V8wSEFiieA5Djqr3Obcq-3",
            "sourceLabel": "IT systems must be protected against unauthorized access",
            "sourceCardinality": "1..*",
            "target": "V8wSEFiieA5Djqr3Obcq-6",
            "targetLabel": "Confidentiality of data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Confidentiality of data.",
            "sourceMetamodelEntity": "BusinessRequirement",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "V8wSEFiieA5Djqr3Obcq-6",
        "drawioPosition": {
          "x": -630.0,
          "y": 215.0
        },
        "drawioGeometry": {
          "x": -740.0,
          "y": 190.0,
          "width": 220.0,
          "height": 50.0
        },
        "layoutWidth": 220.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 208.0
      },
      "position": {
        "x": 510.0,
        "y": 290.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-1",
        "name": "Integrity of data",
        "label": "Integrity of data",
        "metamodelEntity": "AssetSecurityRequirement",
        "originalMetamodelEntity": "AssetSecurityRequirement",
        "description": "Integrity of data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-5",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "S6E735E0-gT0HQi0w6fD-1",
            "sourceLabel": "Integrity of data",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-4",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Integrity of data implementationOf Integrity.",
            "sourceMetamodelEntity": "AssetSecurityRequirement",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "d8I3JHHNy5NC9w95SOC3-3",
            "name": "compromises",
            "label": "compromises",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Establish persistent access compromises Integrity of data.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "DaL_grPgeYVJyLfJLXkr-1",
            "name": "violates",
            "label": "violates",
            "source": "XpCO9PDIey8_-v72ip0i-36",
            "sourceLabel": "T1071",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "T1071 violates Integrity of data.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "V8wSEFiieA5Djqr3Obcq-3",
            "sourceLabel": "IT systems must be protected against unauthorized access",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Integrity of data.",
            "sourceMetamodelEntity": "BusinessRequirement",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "8xRDg0wGu69XekYK4Zs2-3",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "S6E735E0-gT0HQi0w6fD-21",
            "sourceLabel": "Policies Draft",
            "sourceCardinality": "1",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Policies Draft hasSecurityRequirement Integrity of data.",
            "sourceMetamodelEntity": "Asset",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-1",
        "drawioPosition": {
          "x": -870.0,
          "y": 215.0
        },
        "drawioGeometry": {
          "x": -980.0,
          "y": 190.0,
          "width": 220.0,
          "height": 50.0
        },
        "layoutWidth": 220.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 208.0
      },
      "position": {
        "x": 270.0,
        "y": 290.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-4",
        "name": "Integrity",
        "label": "Integrity",
        "metamodelEntity": "SecurityRequirement",
        "originalMetamodelEntity": "SecurityRequirement",
        "description": "Integrity is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-5",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "S6E735E0-gT0HQi0w6fD-1",
            "sourceLabel": "Integrity of data",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-4",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Integrity of data implementationOf Integrity.",
            "sourceMetamodelEntity": "AssetSecurityRequirement",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-4",
        "drawioPosition": {
          "x": -1020.0,
          "y": 45.0
        },
        "drawioGeometry": {
          "x": -1130.0,
          "y": 20.0,
          "width": 220.0,
          "height": 50.0
        },
        "layoutWidth": 220.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 208.0
      },
      "position": {
        "x": 120.0,
        "y": 120.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-7",
        "name": "Confidentiality",
        "label": "Confidentiality",
        "metamodelEntity": "SecurityRequirement",
        "originalMetamodelEntity": "SecurityRequirement",
        "description": "Confidentiality is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "DaL_grPgeYVJyLfJLXkr-3",
            "name": "violates",
            "label": "violates",
            "source": "XpCO9PDIey8_-v72ip0i-36",
            "sourceLabel": "T1071",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1071 violates Confidentiality.",
            "sourceMetamodelEntity": "TTP",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-8",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "V8wSEFiieA5Djqr3Obcq-6",
            "sourceLabel": "Confidentiality of data",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Confidentiality of data implementationOf Confidentiality.",
            "sourceMetamodelEntity": "AssetSecurityRequirement",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "8xRDg0wGu69XekYK4Zs2-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "S6E735E0-gT0HQi0w6fD-21",
            "sourceLabel": "Policies Draft",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Policies Draft hasSecurityRequirement Confidentiality.",
            "sourceMetamodelEntity": "Asset",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-7",
        "drawioPosition": {
          "x": -570.0,
          "y": 315.0
        },
        "drawioGeometry": {
          "x": -680.0,
          "y": 290.0,
          "width": 220.0,
          "height": 50.0
        },
        "layoutWidth": 220.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 208.0
      },
      "position": {
        "x": 570.0,
        "y": 390.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-12",
        "name": "Cobalt Strike Instance",
        "label": "Cobalt Strike Instance",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Cobalt Strike Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
        "outgoingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-14",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "S6E735E0-gT0HQi0w6fD-12",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-13",
            "targetLabel": "Cobalt Strike",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Cobalt Strike Instance instanceOf Cobalt Strike.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-18",
            "name": "deliveredTo",
            "label": "deliveredTo",
            "source": "S6E735E0-gT0HQi0w6fD-12",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "",
            "target": "zbGxqYfjiTHwBFOA54J_-4",
            "targetLabel": "N1",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Cobalt Strike Instance deliveredTo N1.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "Node",
            "matchedMetamodelRelationship": false
          }
        ],
        "incomingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-16",
            "name": "employs",
            "label": "employs",
            "source": "XpCO9PDIey8_-v72ip0i-28",
            "sourceLabel": "AS6: Cobalt Strike Beacon loader",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-12",
            "targetLabel": "Cobalt Strike Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS6: Cobalt Strike Beacon loader employs Cobalt Strike Instance.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "AttackToolInstance",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-12",
        "drawioPosition": {
          "x": 190.0,
          "y": 960.0
        },
        "drawioGeometry": {
          "x": 130.0,
          "y": 940.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1330.0,
        "y": 1035.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-13",
        "name": "Cobalt Strike",
        "label": "Cobalt Strike",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "Cobalt Strike is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "S6E735E0-gT0HQi0w6fD-14",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "S6E735E0-gT0HQi0w6fD-12",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "1..*",
            "target": "S6E735E0-gT0HQi0w6fD-13",
            "targetLabel": "Cobalt Strike",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Cobalt Strike Instance instanceOf Cobalt Strike.",
            "sourceMetamodelEntity": "AttackToolInstance",
            "targetMetamodelEntity": "AttackTool",
            "matchedMetamodelRelationship": true
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-13",
        "drawioPosition": {
          "x": 80.0,
          "y": 1040.0
        },
        "drawioGeometry": {
          "x": 20.0,
          "y": 1020.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 1220.0,
        "y": 1115.0
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-21",
        "name": "Policies Draft",
        "label": "Policies Draft",
        "metamodelEntity": "Asset",
        "originalMetamodelEntity": "Asset",
        "description": "Policies Draft is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "outgoingRelations": [
          {
            "id": "8xRDg0wGu69XekYK4Zs2-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "S6E735E0-gT0HQi0w6fD-21",
            "sourceLabel": "Policies Draft",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-7",
            "targetLabel": "Confidentiality",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "Policies Draft hasSecurityRequirement Confidentiality.",
            "sourceMetamodelEntity": "Asset",
            "targetMetamodelEntity": "SecurityRequirement",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "8xRDg0wGu69XekYK4Zs2-3",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "S6E735E0-gT0HQi0w6fD-21",
            "sourceLabel": "Policies Draft",
            "sourceCardinality": "1",
            "target": "S6E735E0-gT0HQi0w6fD-1",
            "targetLabel": "Integrity of data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Policies Draft hasSecurityRequirement Integrity of data.",
            "sourceMetamodelEntity": "Asset",
            "targetMetamodelEntity": "AssetSecurityRequirement",
            "matchedMetamodelRelationship": true
          }
        ],
        "incomingRelations": [
          {
            "id": "RAx5xnODDfnls-6HHwZi-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "XpCO9PDIey8_-v72ip0i-34",
            "sourceLabel": "AS7: Establish persistent access",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-21",
            "targetLabel": "Policies Draft",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "AS7: Establish persistent access targetsResource Policies Draft.",
            "sourceMetamodelEntity": "ThreatStep",
            "targetMetamodelEntity": "Asset",
            "matchedMetamodelRelationship": false
          },
          {
            "id": "S6E735E0-gT0HQi0w6fD-22",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "zbGxqYfjiTHwBFOA54J_-4",
            "sourceLabel": "N1",
            "sourceCardinality": "",
            "target": "S6E735E0-gT0HQi0w6fD-21",
            "targetLabel": "Policies Draft",
            "targetCardinality": "",
            "cardinality": "No cardinality is stored for this relationship.",
            "description": "N1 hostsResource Policies Draft.",
            "sourceMetamodelEntity": "Node",
            "targetMetamodelEntity": "Asset",
            "matchedMetamodelRelationship": false
          }
        ],
        "drawioId": "S6E735E0-gT0HQi0w6fD-21",
        "drawioPosition": {
          "x": -680.0,
          "y": 660.0
        },
        "drawioGeometry": {
          "x": -740.0,
          "y": 640.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108
      },
      "position": {
        "x": 460.0,
        "y": 735.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "a6G1eZ1pTnWaqZrPulQG-3",
        "name": "initiates",
        "label": "initiates",
        "kind": "relationship",
        "source": "a6G1eZ1pTnWaqZrPulQG-1",
        "target": "a6G1eZ1pTnWaqZrPulQG-2",
        "sourceLabel": "NOBELIUM",
        "targetLabel": "NOBELIUM Attack",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Threat",
        "description": "NOBELIUM initiates NOBELIUM Attack.",
        "drawioId": "a6G1eZ1pTnWaqZrPulQG-3",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vQDsTpPWd9vX5YVv_lA--3",
        "name": "alias",
        "label": "alias",
        "kind": "relationship",
        "source": "a6G1eZ1pTnWaqZrPulQG-1",
        "target": "vQDsTpPWd9vX5YVv_lA--2",
        "sourceLabel": "NOBELIUM",
        "targetLabel": "APT29",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "ThreatActor",
        "description": "NOBELIUM alias APT29.",
        "drawioId": "vQDsTpPWd9vX5YVv_lA--3",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "nxVt7PW1jbqtAcrwFIc7-2",
        "name": "startsWith",
        "label": "startsWith",
        "kind": "relationship",
        "source": "a6G1eZ1pTnWaqZrPulQG-2",
        "target": "nxVt7PW1jbqtAcrwFIc7-1",
        "sourceLabel": "NOBELIUM Attack",
        "targetLabel": "AS1: Phishing email through Constant Contact",
        "sourceMetamodelEntity": "Threat",
        "targetMetamodelEntity": "ThreatStep",
        "description": "NOBELIUM Attack startsWith AS1: Phishing email through Constant Contact.",
        "drawioId": "nxVt7PW1jbqtAcrwFIc7-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-2",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "nxVt7PW1jbqtAcrwFIc7-1",
        "target": "XpCO9PDIey8_-v72ip0i-1",
        "sourceLabel": "AS1: Phishing email through Constant Contact",
        "targetLabel": "T1566.002",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS1: Phishing email through Constant Contact implements T1566.002.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-5",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "nxVt7PW1jbqtAcrwFIc7-1",
        "target": "XpCO9PDIey8_-v72ip0i-4",
        "sourceLabel": "AS1: Phishing email through Constant Contact",
        "targetLabel": "AS2: Redirect to attacker-controlled infrastructure",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS1: Phishing email through Constant Contact followedBy AS2: Redirect to attacker-controlled infrastructure.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-5",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "u-rx46zPe2Q4j8xnACfn-2",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "nxVt7PW1jbqtAcrwFIc7-1",
        "target": "u-rx46zPe2Q4j8xnACfn-1",
        "sourceLabel": "AS1: Phishing email through Constant Contact",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS1: Phishing email through Constant Contact exploits Prone to Phishing.",
        "drawioId": "u-rx46zPe2Q4j8xnACfn-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "2_cSzvVXBwVxwoJdG2Pc-2",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "nxVt7PW1jbqtAcrwFIc7-1",
        "target": "2_cSzvVXBwVxwoJdG2Pc-1",
        "sourceLabel": "AS1: Phishing email through Constant Contact",
        "targetLabel": "Constant Contact Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS1: Phishing email through Constant Contact employs Constant Contact Instance.",
        "drawioId": "2_cSzvVXBwVxwoJdG2Pc-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "JHPqEOGeP-sBoX8jyG4Y-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-1",
        "target": "u-rx46zPe2Q4j8xnACfn-1",
        "sourceLabel": "T1566.002",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1566.002 exploitsVulnerability Prone to Phishing.",
        "drawioId": "JHPqEOGeP-sBoX8jyG4Y-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-8",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-4",
        "target": "XpCO9PDIey8_-v72ip0i-7",
        "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
        "targetLabel": "T1584.001",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS2: Redirect to attacker-controlled infrastructure implements T1584.001.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-8",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-11",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-4",
        "target": "XpCO9PDIey8_-v72ip0i-10",
        "sourceLabel": "AS2: Redirect to attacker-controlled infrastructure",
        "targetLabel": "AS3: Deliver malicious ISO package",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS2: Redirect to attacker-controlled infrastructure followedBy AS3: Deliver malicious ISO package.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-11",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-14",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-10",
        "target": "XpCO9PDIey8_-v72ip0i-13",
        "sourceLabel": "AS3: Deliver malicious ISO package",
        "targetLabel": "T1105",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS3: Deliver malicious ISO package implements T1105.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-14",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-16",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-10",
        "target": "XpCO9PDIey8_-v72ip0i-15",
        "sourceLabel": "AS3: Deliver malicious ISO package",
        "targetLabel": "AS4: Execute the malicious file",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS3: Deliver malicious ISO package followedBy AS4: Execute the malicious file.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-16",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-2",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-10",
        "target": "-A7FWggeQ45b2r9V3aWm-3",
        "sourceLabel": "AS3: Deliver malicious ISO package",
        "targetLabel": "Malicious ISO File",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS3: Deliver malicious ISO package employs Malicious ISO File.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-19",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-15",
        "target": "XpCO9PDIey8_-v72ip0i-18",
        "sourceLabel": "AS4: Execute the malicious file",
        "targetLabel": "T1204.002",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS4: Execute the malicious file implements T1204.002.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-19",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-21",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-15",
        "target": "XpCO9PDIey8_-v72ip0i-20",
        "sourceLabel": "AS4: Execute the malicious file",
        "targetLabel": "AS5: Launch DLL",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS4: Execute the malicious file followedBy AS5: Launch DLL.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-21",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vlI-gy6UjRVgFXrZI4Q_-5",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-15",
        "target": "u-rx46zPe2Q4j8xnACfn-1",
        "sourceLabel": "AS4: Execute the malicious file",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS4: Execute the malicious file exploits Prone to Phishing.",
        "drawioId": "vlI-gy6UjRVgFXrZI4Q_-5",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "vlI-gy6UjRVgFXrZI4Q_-7",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-15",
        "target": "-A7FWggeQ45b2r9V3aWm-3",
        "sourceLabel": "AS4: Execute the malicious file",
        "targetLabel": "Malicious ISO File",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS4: Execute the malicious file employs Malicious ISO File.",
        "drawioId": "vlI-gy6UjRVgFXrZI4Q_-7",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "JHPqEOGeP-sBoX8jyG4Y-3",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-18",
        "target": "u-rx46zPe2Q4j8xnACfn-1",
        "sourceLabel": "T1204.002",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1204.002 exploitsVulnerability Prone to Phishing.",
        "drawioId": "JHPqEOGeP-sBoX8jyG4Y-3",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-24",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-20",
        "target": "XpCO9PDIey8_-v72ip0i-23",
        "sourceLabel": "AS5: Launch DLL",
        "targetLabel": "T1218.011",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS5: Launch DLL implements T1218.011.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-24",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-29",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-20",
        "target": "XpCO9PDIey8_-v72ip0i-28",
        "sourceLabel": "AS5: Launch DLL",
        "targetLabel": "AS6: Cobalt Strike Beacon loader",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS5: Launch DLL followedBy AS6: Cobalt Strike Beacon loader.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-29",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-10",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-20",
        "target": "-A7FWggeQ45b2r9V3aWm-22",
        "sourceLabel": "AS5: Launch DLL",
        "targetLabel": "Document.dll",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS5: Launch DLL employs Document.dll.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-10",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-32",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-28",
        "target": "XpCO9PDIey8_-v72ip0i-31",
        "sourceLabel": "AS6: Cobalt Strike Beacon loader",
        "targetLabel": "T1588.001",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS6: Cobalt Strike Beacon loader implements T1588.001.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-32",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-35",
        "name": "relatedTo",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-28",
        "target": "XpCO9PDIey8_-v72ip0i-34",
        "sourceLabel": "AS6: Cobalt Strike Beacon loader",
        "targetLabel": "AS7: Establish persistent access",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS6: Cobalt Strike Beacon loader relatedTo AS7: Establish persistent access.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-35",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-16",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-28",
        "target": "S6E735E0-gT0HQi0w6fD-12",
        "sourceLabel": "AS6: Cobalt Strike Beacon loader",
        "targetLabel": "Cobalt Strike Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS6: Cobalt Strike Beacon loader employs Cobalt Strike Instance.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-16",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "XpCO9PDIey8_-v72ip0i-37",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-34",
        "target": "XpCO9PDIey8_-v72ip0i-36",
        "sourceLabel": "AS7: Establish persistent access",
        "targetLabel": "T1071",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS7: Establish persistent access implements T1071.",
        "drawioId": "XpCO9PDIey8_-v72ip0i-37",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "d8I3JHHNy5NC9w95SOC3-1",
        "name": "compromises",
        "label": "compromises",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-34",
        "target": "V8wSEFiieA5Djqr3Obcq-6",
        "sourceLabel": "AS7: Establish persistent access",
        "targetLabel": "Confidentiality of data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "AS7: Establish persistent access compromises Confidentiality of data.",
        "drawioId": "d8I3JHHNy5NC9w95SOC3-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "d8I3JHHNy5NC9w95SOC3-3",
        "name": "compromises",
        "label": "compromises",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-34",
        "target": "S6E735E0-gT0HQi0w6fD-1",
        "sourceLabel": "AS7: Establish persistent access",
        "targetLabel": "Integrity of data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "AS7: Establish persistent access compromises Integrity of data.",
        "drawioId": "d8I3JHHNy5NC9w95SOC3-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "RAx5xnODDfnls-6HHwZi-1",
        "name": "targetsResource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-34",
        "target": "S6E735E0-gT0HQi0w6fD-21",
        "sourceLabel": "AS7: Establish persistent access",
        "targetLabel": "Policies Draft",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset",
        "description": "AS7: Establish persistent access targetsResource Policies Draft.",
        "drawioId": "RAx5xnODDfnls-6HHwZi-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "DaL_grPgeYVJyLfJLXkr-1",
        "name": "violates",
        "label": "violates",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-36",
        "target": "S6E735E0-gT0HQi0w6fD-1",
        "sourceLabel": "T1071",
        "targetLabel": "Integrity of data",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "T1071 violates Integrity of data.",
        "drawioId": "DaL_grPgeYVJyLfJLXkr-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "DaL_grPgeYVJyLfJLXkr-3",
        "name": "violates",
        "label": "violates",
        "kind": "relationship",
        "source": "XpCO9PDIey8_-v72ip0i-36",
        "target": "S6E735E0-gT0HQi0w6fD-7",
        "sourceLabel": "T1071",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "T1071 violates Confidentiality.",
        "drawioId": "DaL_grPgeYVJyLfJLXkr-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "kWeNGhi0rPNKMvC3xEbO-3",
        "name": "operatesIn",
        "label": "operatesIn",
        "kind": "relationship",
        "source": "kWeNGhi0rPNKMvC3xEbO-1",
        "target": "kWeNGhi0rPNKMvC3xEbO-2",
        "sourceLabel": "OrgFive",
        "targetLabel": "Politics",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Sector",
        "description": "OrgFive operatesIn Politics.",
        "drawioId": "kWeNGhi0rPNKMvC3xEbO-3",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Sector",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "hryo91y_1cwGIV1Xy_qz-6",
        "name": "manages",
        "label": "manages",
        "kind": "relationship",
        "source": "kWeNGhi0rPNKMvC3xEbO-1",
        "target": "hryo91y_1cwGIV1Xy_qz-5",
        "sourceLabel": "OrgFive",
        "targetLabel": "Prod. Infra",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Infrastructure",
        "description": "OrgFive manages Prod. Infra.",
        "drawioId": "hryo91y_1cwGIV1Xy_qz-6",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "V8wSEFiieA5Djqr3Obcq-4",
        "name": "hasBusinessRequirement",
        "label": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "kWeNGhi0rPNKMvC3xEbO-1",
        "target": "V8wSEFiieA5Djqr3Obcq-3",
        "sourceLabel": "OrgFive",
        "targetLabel": "IT systems must be protected against unauthorized access",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "BusinessRequirement",
        "description": "OrgFive hasBusinessRequirement IT systems must be protected against unauthorized access.",
        "drawioId": "V8wSEFiieA5Djqr3Obcq-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* BusinessRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "hryo91y_1cwGIV1Xy_qz-9",
        "name": "usedBy",
        "label": "usedBy",
        "kind": "relationship",
        "source": "hryo91y_1cwGIV1Xy_qz-5",
        "target": "hryo91y_1cwGIV1Xy_qz-8",
        "sourceLabel": "Prod. Infra",
        "targetLabel": "U1",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "User",
        "description": "Prod. Infra usedBy U1.",
        "drawioId": "hryo91y_1cwGIV1Xy_qz-9",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* User",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "zbGxqYfjiTHwBFOA54J_-5",
        "name": "madeBy",
        "label": "madeBy",
        "kind": "relationship",
        "source": "hryo91y_1cwGIV1Xy_qz-5",
        "target": "zbGxqYfjiTHwBFOA54J_-4",
        "sourceLabel": "Prod. Infra",
        "targetLabel": "N1",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "description": "Prod. Infra madeBy N1.",
        "drawioId": "zbGxqYfjiTHwBFOA54J_-5",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "Q_o9iHX-xxMBJ9QQpt6v-1",
        "name": "hasAccessTo",
        "label": "hasAccessTo",
        "kind": "relationship",
        "source": "hryo91y_1cwGIV1Xy_qz-8",
        "target": "zbGxqYfjiTHwBFOA54J_-4",
        "sourceLabel": "U1",
        "targetLabel": "N1",
        "sourceMetamodelEntity": "User",
        "targetMetamodelEntity": "Node",
        "description": "U1 hasAccessTo N1.",
        "drawioId": "Q_o9iHX-xxMBJ9QQpt6v-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "User  —  Node",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "u-rx46zPe2Q4j8xnACfn-4",
        "name": "affectsUser",
        "label": "affectsUser",
        "kind": "relationship",
        "source": "u-rx46zPe2Q4j8xnACfn-1",
        "target": "hryo91y_1cwGIV1Xy_qz-8",
        "sourceLabel": "Prone to Phishing",
        "targetLabel": "U1",
        "sourceMetamodelEntity": "HumanVulnerability",
        "targetMetamodelEntity": "User",
        "description": "Prone to Phishing affectsUser U1.",
        "drawioId": "u-rx46zPe2Q4j8xnACfn-4",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HumanVulnerability 0..* — 0..* User",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "C0XdiW15rUyJ3cWgeJDH-2",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "2_cSzvVXBwVxwoJdG2Pc-1",
        "target": "C0XdiW15rUyJ3cWgeJDH-1",
        "sourceLabel": "Constant Contact Instance",
        "targetLabel": "Constant Contact",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Constant Contact Instance instanceOf Constant Contact.",
        "drawioId": "C0XdiW15rUyJ3cWgeJDH-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "DiR6NjmfnkmySAAi_VLq-2",
        "name": "hasConfig",
        "label": "hasConfig",
        "kind": "relationship",
        "source": "2_cSzvVXBwVxwoJdG2Pc-1",
        "target": "4Z-NknjXgCqIMUdvH7Cu-1",
        "sourceLabel": "Constant Contact Instance",
        "targetLabel": "Custom email template",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolConfiguration",
        "description": "Constant Contact Instance hasConfig Custom email template.",
        "drawioId": "DiR6NjmfnkmySAAi_VLq-2",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "zbGxqYfjiTHwBFOA54J_-2",
        "name": "requires",
        "label": "requires",
        "kind": "relationship",
        "source": "C0XdiW15rUyJ3cWgeJDH-1",
        "target": "4Z-NknjXgCqIMUdvH7Cu-1",
        "sourceLabel": "Constant Contact",
        "targetLabel": "Custom email template",
        "sourceMetamodelEntity": "AttackTool",
        "targetMetamodelEntity": "AttackToolConfiguration",
        "description": "Constant Contact requires Custom email template.",
        "drawioId": "zbGxqYfjiTHwBFOA54J_-2",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "V8wSEFiieA5Djqr3Obcq-1",
        "name": "deliveredTo",
        "label": "deliveredTo",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-3",
        "target": "zbGxqYfjiTHwBFOA54J_-4",
        "sourceLabel": "Malicious ISO File",
        "targetLabel": "N1",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "Node",
        "description": "Malicious ISO File deliveredTo N1.",
        "drawioId": "V8wSEFiieA5Djqr3Obcq-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-5",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-3",
        "target": "-A7FWggeQ45b2r9V3aWm-7",
        "sourceLabel": "Malicious ISO File",
        "targetLabel": "ISO File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Malicious ISO File instanceOf ISO File.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-5",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-9",
        "name": "delivers",
        "label": "delivers",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-3",
        "target": "-A7FWggeQ45b2r9V3aWm-8",
        "sourceLabel": "Malicious ISO File",
        "targetLabel": "Reports.lnk",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Malicious ISO File delivers Reports.lnk.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-9",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-12",
        "name": "delivers",
        "label": "delivers",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-3",
        "target": "-A7FWggeQ45b2r9V3aWm-11",
        "sourceLabel": "Malicious ISO File",
        "targetLabel": "ica-declass.pdf",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Malicious ISO File delivers ica-declass.pdf.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-12",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-15",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-8",
        "target": "-A7FWggeQ45b2r9V3aWm-14",
        "sourceLabel": "Reports.lnk",
        "targetLabel": "LNK File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Reports.lnk instanceOf LNK File.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-15",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-18",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-11",
        "target": "-A7FWggeQ45b2r9V3aWm-17",
        "sourceLabel": "ica-declass.pdf",
        "targetLabel": "PDF File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "ica-declass.pdf instanceOf PDF File.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-18",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-20",
        "name": "delivers",
        "label": "delivers",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-3",
        "target": "-A7FWggeQ45b2r9V3aWm-22",
        "sourceLabel": "Malicious ISO File",
        "targetLabel": "Document.dll",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Malicious ISO File delivers Document.dll.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-20",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "-A7FWggeQ45b2r9V3aWm-24",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "-A7FWggeQ45b2r9V3aWm-22",
        "target": "-A7FWggeQ45b2r9V3aWm-23",
        "sourceLabel": "Document.dll",
        "targetLabel": "DLL File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Document.dll instanceOf DLL File.",
        "drawioId": "-A7FWggeQ45b2r9V3aWm-24",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "vlI-gy6UjRVgFXrZI4Q_-2",
        "name": "associatedTo",
        "label": "associatedTo",
        "kind": "relationship",
        "source": "vlI-gy6UjRVgFXrZI4Q_-1",
        "target": "-A7FWggeQ45b2r9V3aWm-7",
        "sourceLabel": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252",
        "targetLabel": "ISO File",
        "sourceMetamodelEntity": "Indicator",
        "targetMetamodelEntity": "AttackTool",
        "description": "2523f94bd4fba4af76f4411fe61084a7e7d80dec163c9ccba9226c80b8b31252 associatedTo ISO File.",
        "drawioId": "vlI-gy6UjRVgFXrZI4Q_-2",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "l09v7P1m8Fhx9XaZaJaK-2",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "zbGxqYfjiTHwBFOA54J_-4",
        "target": "l09v7P1m8Fhx9XaZaJaK-1",
        "sourceLabel": "N1",
        "targetLabel": "DesktopComputer",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "description": "N1 hasNodeType DesktopComputer.",
        "drawioId": "l09v7P1m8Fhx9XaZaJaK-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-22",
        "name": "hostsResource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "zbGxqYfjiTHwBFOA54J_-4",
        "target": "S6E735E0-gT0HQi0w6fD-21",
        "sourceLabel": "N1",
        "targetLabel": "Policies Draft",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Asset",
        "description": "N1 hostsResource Policies Draft.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-22",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "V8wSEFiieA5Djqr3Obcq-7",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "V8wSEFiieA5Djqr3Obcq-3",
        "target": "V8wSEFiieA5Djqr3Obcq-6",
        "sourceLabel": "IT systems must be protected against unauthorized access",
        "targetLabel": "Confidentiality of data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Confidentiality of data.",
        "drawioId": "V8wSEFiieA5Djqr3Obcq-7",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-2",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "V8wSEFiieA5Djqr3Obcq-3",
        "target": "S6E735E0-gT0HQi0w6fD-1",
        "sourceLabel": "IT systems must be protected against unauthorized access",
        "targetLabel": "Integrity of data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "IT systems must be protected against unauthorized access drivesSecurityRequirement Integrity of data.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-8",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "V8wSEFiieA5Djqr3Obcq-6",
        "target": "S6E735E0-gT0HQi0w6fD-7",
        "sourceLabel": "Confidentiality of data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "AssetSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "Confidentiality of data implementationOf Confidentiality.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-8",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-5",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "S6E735E0-gT0HQi0w6fD-1",
        "target": "S6E735E0-gT0HQi0w6fD-4",
        "sourceLabel": "Integrity of data",
        "targetLabel": "Integrity",
        "sourceMetamodelEntity": "AssetSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "Integrity of data implementationOf Integrity.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-5",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-14",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "S6E735E0-gT0HQi0w6fD-12",
        "target": "S6E735E0-gT0HQi0w6fD-13",
        "sourceLabel": "Cobalt Strike Instance",
        "targetLabel": "Cobalt Strike",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Cobalt Strike Instance instanceOf Cobalt Strike.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-14",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
        "matchedMetamodelRelationship": true
      }
    },
    {
      "data": {
        "id": "S6E735E0-gT0HQi0w6fD-18",
        "name": "deliveredTo",
        "label": "deliveredTo",
        "kind": "relationship",
        "source": "S6E735E0-gT0HQi0w6fD-12",
        "target": "zbGxqYfjiTHwBFOA54J_-4",
        "sourceLabel": "Cobalt Strike Instance",
        "targetLabel": "N1",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "Node",
        "description": "Cobalt Strike Instance deliveredTo N1.",
        "drawioId": "S6E735E0-gT0HQi0w6fD-18",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "8xRDg0wGu69XekYK4Zs2-1",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "S6E735E0-gT0HQi0w6fD-21",
        "target": "S6E735E0-gT0HQi0w6fD-7",
        "sourceLabel": "Policies Draft",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "Policies Draft hasSecurityRequirement Confidentiality.",
        "drawioId": "8xRDg0wGu69XekYK4Zs2-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": "No cardinality is stored for this relationship.",
        "matchedMetamodelRelationship": false
      }
    },
    {
      "data": {
        "id": "8xRDg0wGu69XekYK4Zs2-3",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "S6E735E0-gT0HQi0w6fD-21",
        "target": "S6E735E0-gT0HQi0w6fD-1",
        "sourceLabel": "Policies Draft",
        "targetLabel": "Integrity of data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Policies Draft hasSecurityRequirement Integrity of data.",
        "drawioId": "8xRDg0wGu69XekYK4Zs2-3",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
        "matchedMetamodelRelationship": true
      }
    }
  ]
};
