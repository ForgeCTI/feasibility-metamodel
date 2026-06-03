const caseData = {
  "metadata": {
    "id": "cs2",
    "title": "CS2 — Case study 2 implementation",
    "shortTitle": "Case study 2 implementation",
    "description": "Interactive case-study implementation generated from the updated Draw.io model.",
    "source": "metamodel_v2-case2.drawio (1).xml",
    "layout": {
      "minX": -1030.0,
      "minY": 240.0,
      "maxX": 1535.0,
      "maxY": 1180.0,
      "width": 2805.0,
      "height": 1180.0,
      "padding": 120
    }
  },
  "nodes": [
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-7",
        "name": "CS2Org",
        "label": "CS2Org",
        "metamodelEntity": "Organization",
        "description": "CS2Org is a case-study instance of the Organization entity in the feasibility-oriented metamodel.",
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
        "drawioId": "DXn6xaRNV8009_fZBqU1-7",
        "drawioPosition": {
          "x": 380.0,
          "y": 295.0
        },
        "drawioGeometry": {
          "x": 320.0,
          "y": 275.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "DXn6xaRNV8009_fZBqU1-5",
            "name": "manages",
            "label": "manages",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "sourceLabel": "CS2Org",
            "sourceCardinality": "1",
            "target": "DXn6xaRNV8009_fZBqU1-10",
            "targetLabel": "Main-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "CS2Org manages Main-Infra."
          },
          {
            "id": "t9Zseuc7trHZRqGckOzh-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "sourceLabel": "CS2Org",
            "sourceCardinality": "1",
            "target": "t9Zseuc7trHZRqGckOzh-3",
            "targetLabel": "BR1: Organization Data must be Protected",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1530.0,
        "y": 175.0
      }
    },
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-10",
        "name": "Main-Infra",
        "label": "Main-Infra",
        "metamodelEntity": "Infrastructure",
        "description": "Main-Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel.",
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
        "drawioId": "DXn6xaRNV8009_fZBqU1-10",
        "drawioPosition": {
          "x": 380.0,
          "y": 385.0
        },
        "drawioGeometry": {
          "x": 320.0,
          "y": 365.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "mOJ0zVzwKr9MfSjEqvfX-1",
            "name": "usedBy",
            "label": "usedBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Main-Infra usedBy U1: Employee 1."
          },
          {
            "id": "Zcl4WLPny9slI91kZ9_o-2",
            "name": "madeBy",
            "label": "madeBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Main-Infra madeBy N1: Workstation."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-7",
            "name": "madeBy",
            "label": "madeBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "fOiOA0MLRFIGU3IK7tZ9-1",
            "targetLabel": "N2: Database Server",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Main-Infra madeBy N2: Database Server."
          }
        ],
        "incomingRelations": [
          {
            "id": "DXn6xaRNV8009_fZBqU1-5",
            "name": "manages",
            "label": "manages",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "sourceLabel": "CS2Org",
            "sourceCardinality": "1",
            "target": "DXn6xaRNV8009_fZBqU1-10",
            "targetLabel": "Main-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "CS2Org manages Main-Infra."
          }
        ]
      },
      "position": {
        "x": 1530.0,
        "y": 265.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-7",
        "name": "Unknown",
        "label": "Unknown",
        "metamodelEntity": "ThreatActor",
        "description": "Unknown is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel.",
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
        "drawioId": "DXTTVG0T_Y0voirAc8tk-7",
        "drawioPosition": {
          "x": 1229.0,
          "y": 260.0
        },
        "drawioGeometry": {
          "x": 1169.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "DXTTVG0T_Y0voirAc8tk-5",
            "name": "initiates",
            "label": "initiates",
            "source": "DXTTVG0T_Y0voirAc8tk-7",
            "sourceLabel": "Unknown",
            "sourceCardinality": "1",
            "target": "DXTTVG0T_Y0voirAc8tk-13",
            "targetLabel": "Ransomware Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "Unknown initiates Ransomware Attack."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 2379.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-13",
        "name": "Ransomware Attack",
        "label": "Ransomware Attack",
        "metamodelEntity": "Threat",
        "description": "Ransomware Attack is a case-study instance of the Threat entity in the feasibility-oriented metamodel.",
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
        "drawioId": "DXTTVG0T_Y0voirAc8tk-13",
        "drawioPosition": {
          "x": 1229.0,
          "y": 340.0
        },
        "drawioGeometry": {
          "x": 1169.0,
          "y": 320.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0,
        "outgoingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-1",
            "name": "startsWith",
            "label": "startsWith",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "sourceLabel": "Ransomware Attack",
            "sourceCardinality": "",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "targetLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document."
          }
        ],
        "incomingRelations": [
          {
            "id": "DXTTVG0T_Y0voirAc8tk-5",
            "name": "initiates",
            "label": "initiates",
            "source": "DXTTVG0T_Y0voirAc8tk-7",
            "sourceLabel": "Unknown",
            "sourceCardinality": "1",
            "target": "DXTTVG0T_Y0voirAc8tk-13",
            "targetLabel": "Ransomware Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "Unknown initiates Ransomware Attack."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 220.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-5",
        "name": "AS1: Phishing Attack with Weaponized Document",
        "label": "AS1: Phishing Attack with Weaponized Document",
        "metamodelEntity": "ThreatStep",
        "description": "AS1: Phishing Attack with Weaponized Document is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "isKCdTBRIcX7ZzF2_SF_-5",
        "drawioPosition": {
          "x": 1229.0,
          "y": 445.0
        },
        "drawioGeometry": {
          "x": 1134.0,
          "y": 420.0,
          "width": 190.0,
          "height": 50.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "0..*",
            "target": "isKCdTBRIcX7ZzF2_SF_-6",
            "targetLabel": "AS2: BazarLoader Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution."
          },
          {
            "id": "5_uvdN_fO5OIq28JDHqv-1",
            "name": "exploits",
            "label": "exploits",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing."
          },
          {
            "id": "7615FOlYJKEI97l76xLW-1",
            "name": "implements",
            "label": "implements",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "9aJOADVmqYrCJmHLZuZJ-1",
            "targetLabel": "T1566.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001."
          },
          {
            "id": "niolT3tTzyHpKWggiv-i-1",
            "name": "employs",
            "label": "employs",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "niolT3tTzyHpKWggiv-i-3",
            "targetLabel": "Weaponized Document",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document."
          }
        ],
        "incomingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-1",
            "name": "startsWith",
            "label": "startsWith",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "sourceLabel": "Ransomware Attack",
            "sourceCardinality": "",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "targetLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 325.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-6",
        "name": "AS2: BazarLoader Execution",
        "label": "AS2: BazarLoader Execution",
        "metamodelEntity": "ThreatStep",
        "description": "AS2: BazarLoader Execution is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "isKCdTBRIcX7ZzF2_SF_-6",
        "drawioPosition": {
          "x": 1229.0,
          "y": 550.0
        },
        "drawioGeometry": {
          "x": 1134.0,
          "y": 530.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "G_SW_Vu1ddHmdaGLCPAa-1",
            "name": "employs",
            "label": "employs",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "1..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "targetLabel": "BazarLoader",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS2: BazarLoader Execution employs BazarLoader."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-13",
            "name": "implements",
            "label": "implements",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "1..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-15",
            "targetLabel": "T1105",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: BazarLoader Execution implements T1105."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-4",
            "name": "followedBy",
            "label": "followedBy",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-3",
            "targetLabel": "AS3: Infrastructure Discovery",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery."
          }
        ],
        "incomingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "0..*",
            "target": "isKCdTBRIcX7ZzF2_SF_-6",
            "targetLabel": "AS2: BazarLoader Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 430.0
      }
    },
    {
      "data": {
        "id": "9aJOADVmqYrCJmHLZuZJ-1",
        "name": "T1566.001",
        "label": "T1566.001",
        "metamodelEntity": "TTP",
        "description": "T1566.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "9aJOADVmqYrCJmHLZuZJ-1",
        "drawioPosition": {
          "x": 1462.5,
          "y": 445.0
        },
        "drawioGeometry": {
          "x": 1430.0,
          "y": 425.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "9aJOADVmqYrCJmHLZuZJ-1",
            "sourceLabel": "T1566.001",
            "sourceCardinality": "1..*",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1566.001 exploitsVulnerability Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "7615FOlYJKEI97l76xLW-1",
            "name": "implements",
            "label": "implements",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "9aJOADVmqYrCJmHLZuZJ-1",
            "targetLabel": "T1566.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001."
          }
        ]
      },
      "position": {
        "x": 2612.5,
        "y": 325.0
      }
    },
    {
      "data": {
        "id": "niolT3tTzyHpKWggiv-i-3",
        "name": "Weaponized Document",
        "label": "Weaponized Document",
        "metamodelEntity": "AttackToolInstance",
        "description": "Weaponized Document is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
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
        "drawioId": "niolT3tTzyHpKWggiv-i-3",
        "drawioPosition": {
          "x": 990.0,
          "y": 540.0
        },
        "drawioGeometry": {
          "x": 920.0,
          "y": 520.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
            "targetLabel": "Office Document",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Weaponized Document instanceOf Office Document."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "Weaponized Document",
            "sourceCardinality": "0..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "targetLabel": "BazarLoader",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Weaponized Document deploys BazarLoader."
          }
        ],
        "incomingRelations": [
          {
            "id": "niolT3tTzyHpKWggiv-i-1",
            "name": "employs",
            "label": "employs",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "niolT3tTzyHpKWggiv-i-3",
            "targetLabel": "Weaponized Document",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document."
          }
        ]
      },
      "position": {
        "x": 2140.0,
        "y": 420.0
      }
    },
    {
      "data": {
        "id": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "name": "Office Document",
        "label": "Office Document",
        "metamodelEntity": "AttackTool",
        "description": "Office Document is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
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
        "drawioId": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "drawioPosition": {
          "x": 990.0,
          "y": 620.0
        },
        "drawioGeometry": {
          "x": 920.0,
          "y": 600.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "Weaponized Document",
            "sourceCardinality": "1..*",
            "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
            "targetLabel": "Office Document",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Weaponized Document instanceOf Office Document."
          }
        ]
      },
      "position": {
        "x": 2140.0,
        "y": 500.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-3",
        "name": "BazarLoader",
        "label": "BazarLoader",
        "metamodelEntity": "AttackToolInstance",
        "description": "BazarLoader is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
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
        "drawioId": "ImEBZV-vzcU5x6acnLZ7-3",
        "drawioPosition": {
          "x": 800.0,
          "y": 590.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 570.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "G_SW_Vu1ddHmdaGLCPAa-1",
            "name": "employs",
            "label": "employs",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "1..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "targetLabel": "BazarLoader",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS2: BazarLoader Execution employs BazarLoader."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "Weaponized Document",
            "sourceCardinality": "0..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "targetLabel": "BazarLoader",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Weaponized Document deploys BazarLoader."
          }
        ]
      },
      "position": {
        "x": 1950.0,
        "y": 470.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-8",
        "name": "BazarLoader",
        "label": "BazarLoader",
        "metamodelEntity": "AttackTool",
        "description": "BazarLoader is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
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
        "drawioId": "ImEBZV-vzcU5x6acnLZ7-8",
        "drawioPosition": {
          "x": 800.0,
          "y": 690.0
        },
        "drawioGeometry": {
          "x": 730.0,
          "y": 670.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": []
      },
      "position": {
        "x": 1950.0,
        "y": 570.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-15",
        "name": "T1105",
        "label": "T1105",
        "metamodelEntity": "TTP",
        "description": "T1105 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "ImEBZV-vzcU5x6acnLZ7-15",
        "drawioPosition": {
          "x": 1462.5,
          "y": 540.0
        },
        "drawioGeometry": {
          "x": 1430.0,
          "y": 520.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-13",
            "name": "implements",
            "label": "implements",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "1..*",
            "target": "ImEBZV-vzcU5x6acnLZ7-15",
            "targetLabel": "T1105",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: BazarLoader Execution implements T1105."
          }
        ]
      },
      "position": {
        "x": 2612.5,
        "y": 420.0
      }
    },
    {
      "data": {
        "id": "1zz9dUDx6NtFQG9qIyYO-1",
        "name": "Prone to Phishing",
        "label": "Prone to Phishing",
        "metamodelEntity": "HumanVulnerability",
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
        "drawioId": "1zz9dUDx6NtFQG9qIyYO-1",
        "drawioPosition": {
          "x": 910.0,
          "y": 352.5
        },
        "drawioGeometry": {
          "x": 840.0,
          "y": 330.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "nj5hpQ6kMEfSOXQIEmYd-2",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          }
        ],
        "incomingRelations": [
          {
            "id": "5_uvdN_fO5OIq28JDHqv-1",
            "name": "exploits",
            "label": "exploits",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "sourceCardinality": "",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "9aJOADVmqYrCJmHLZuZJ-1",
            "sourceLabel": "T1566.001",
            "sourceCardinality": "1..*",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1566.001 exploitsVulnerability Prone to Phishing."
          }
        ]
      },
      "position": {
        "x": 2060.0,
        "y": 232.5
      }
    },
    {
      "data": {
        "id": "nj5hpQ6kMEfSOXQIEmYd-1",
        "name": "U1: Employee 1",
        "label": "U1: Employee 1",
        "metamodelEntity": "User",
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
        "drawioId": "nj5hpQ6kMEfSOXQIEmYd-1",
        "drawioPosition": {
          "x": 630.0,
          "y": 497.5
        },
        "drawioGeometry": {
          "x": 560.0,
          "y": 475.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "2yveyayf0f4Zed5tB9-e-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "cardinality": "",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          }
        ],
        "incomingRelations": [
          {
            "id": "mOJ0zVzwKr9MfSjEqvfX-1",
            "name": "usedBy",
            "label": "usedBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Main-Infra usedBy U1: Employee 1."
          },
          {
            "id": "nj5hpQ6kMEfSOXQIEmYd-2",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          }
        ]
      },
      "position": {
        "x": 1780.0,
        "y": 377.5
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-3",
        "name": "AS3: Infrastructure Discovery",
        "label": "AS3: Infrastructure Discovery",
        "metamodelEntity": "ThreatStep",
        "description": "AS3: Infrastructure Discovery is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-3",
        "drawioPosition": {
          "x": 1229.0,
          "y": 740.0
        },
        "drawioGeometry": {
          "x": 1134.0,
          "y": 720.0,
          "width": 190.0,
          "height": 40.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 40,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-10",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-9",
            "targetLabel": "T1018",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Infrastructure Discovery implements T1018."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-13",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-12",
            "targetLabel": "AS4: Lateral Movement to Other Nodes",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-4",
            "name": "followedBy",
            "label": "followedBy",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS2: BazarLoader Execution",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-3",
            "targetLabel": "AS3: Infrastructure Discovery",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 620.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-9",
        "name": "T1018",
        "label": "T1018",
        "metamodelEntity": "TTP",
        "description": "T1018 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-9",
        "drawioPosition": {
          "x": 1502.5,
          "y": 720.0
        },
        "drawioGeometry": {
          "x": 1470.0,
          "y": 700.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-10",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-9",
            "targetLabel": "T1018",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Infrastructure Discovery implements T1018."
          }
        ]
      },
      "position": {
        "x": 2652.5,
        "y": 600.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-12",
        "name": "AS4: Lateral Movement to Other Nodes",
        "label": "AS4: Lateral Movement to Other Nodes",
        "metamodelEntity": "ThreatStep",
        "description": "AS4: Lateral Movement to Other Nodes is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-12",
        "drawioPosition": {
          "x": 1229.0,
          "y": 840.0
        },
        "drawioGeometry": {
          "x": 1134.0,
          "y": 810.0,
          "width": 190.0,
          "height": 60.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 60.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-18",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-20",
            "targetLabel": "T1570",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Lateral Movement to Other Nodes implements T1570."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-22",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-21",
            "targetLabel": "AS5: Ransomware Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-13",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-12",
            "targetLabel": "AS4: Lateral Movement to Other Nodes",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 720.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-20",
        "name": "T1570",
        "label": "T1570",
        "metamodelEntity": "TTP",
        "description": "T1570 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-20",
        "drawioPosition": {
          "x": 1490.0,
          "y": 840.0
        },
        "drawioGeometry": {
          "x": 1457.5,
          "y": 820.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-18",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-20",
            "targetLabel": "T1570",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: Lateral Movement to Other Nodes implements T1570."
          }
        ]
      },
      "position": {
        "x": 2640.0,
        "y": 720.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-21",
        "name": "AS5: Ransomware Execution",
        "label": "AS5: Ransomware Execution",
        "metamodelEntity": "ThreatStep",
        "description": "AS5: Ransomware Execution is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-21",
        "drawioPosition": {
          "x": 1229.0,
          "y": 970.0
        },
        "drawioGeometry": {
          "x": 1134.0,
          "y": 940.0,
          "width": 190.0,
          "height": 60.0
        },
        "layoutWidth": 190.0,
        "layoutHeight": 60.0,
        "textMaxWidth": 178.0,
        "outgoingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Ransomware Execution targetsResource Client Data."
          },
          {
            "id": "W3w3qxBm9yhByrui9fDT-3",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "targetLabel": "Employees Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Ransomware Execution targetsResource Employees Data."
          },
          {
            "id": "mb8l3Fbao_xBAS6c-KFB-1",
            "name": "compromises",
            "label": "compromises",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-27",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-29",
            "targetLabel": "T1486",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Ransomware Execution implements T1486."
          },
          {
            "id": "3yI27mflQqRDWPVXWcn1-1",
            "name": "employs",
            "label": "employs",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "3yI27mflQqRDWPVXWcn1-3",
            "targetLabel": "Conti Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Ransomware Execution employs Conti Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-22",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "sourceCardinality": "0..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-21",
            "targetLabel": "AS5: Ransomware Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution."
          }
        ]
      },
      "position": {
        "x": 2379.0,
        "y": 850.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-29",
        "name": "T1486",
        "label": "T1486",
        "metamodelEntity": "TTP",
        "description": "T1486 is a case-study instance of the TTP entity in the feasibility-oriented metamodel.",
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
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-29",
        "drawioPosition": {
          "x": 1482.5,
          "y": 990.0
        },
        "drawioGeometry": {
          "x": 1450.0,
          "y": 970.0,
          "width": 65.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 90,
        "outgoingRelations": [
          {
            "id": "vo9jejg2OZcYDb8uq2dd-1",
            "name": "violates",
            "label": "violates",
            "source": "5fuBaIPhzgW5u_tKo_7_-29",
            "sourceLabel": "T1486",
            "sourceCardinality": "1..*",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1486 violates Integrity."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-27",
            "name": "implements",
            "label": "implements",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "5fuBaIPhzgW5u_tKo_7_-29",
            "targetLabel": "T1486",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Ransomware Execution implements T1486."
          }
        ]
      },
      "position": {
        "x": 2632.5,
        "y": 870.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-3",
        "name": "Conti Instance",
        "label": "Conti Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Conti Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel.",
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
        "drawioId": "3yI27mflQqRDWPVXWcn1-3",
        "drawioPosition": {
          "x": 910.0,
          "y": 995.0
        },
        "drawioGeometry": {
          "x": 840.0,
          "y": 975.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "3yI27mflQqRDWPVXWcn1-3",
            "sourceLabel": "Conti Instance",
            "sourceCardinality": "1..*",
            "target": "3yI27mflQqRDWPVXWcn1-6",
            "targetLabel": "Conti",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Conti Instance instanceOf Conti."
          }
        ],
        "incomingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-1",
            "name": "employs",
            "label": "employs",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "3yI27mflQqRDWPVXWcn1-3",
            "targetLabel": "Conti Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Ransomware Execution employs Conti Instance."
          }
        ]
      },
      "position": {
        "x": 2060.0,
        "y": 875.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-6",
        "name": "Conti",
        "label": "Conti",
        "metamodelEntity": "AttackTool",
        "description": "Conti is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel.",
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
        "drawioId": "3yI27mflQqRDWPVXWcn1-6",
        "drawioPosition": {
          "x": 910.0,
          "y": 1075.0
        },
        "drawioGeometry": {
          "x": 840.0,
          "y": 1055.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "3yI27mflQqRDWPVXWcn1-3",
            "sourceLabel": "Conti Instance",
            "sourceCardinality": "1..*",
            "target": "3yI27mflQqRDWPVXWcn1-6",
            "targetLabel": "Conti",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Conti Instance instanceOf Conti."
          }
        ]
      },
      "position": {
        "x": 2060.0,
        "y": 955.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-1",
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
        "drawioId": "rVEplnxd9geB-yA5XOS9-1",
        "drawioPosition": {
          "x": 260.0,
          "y": 1090.0
        },
        "drawioGeometry": {
          "x": 190.0,
          "y": 1070.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "XfZH5y7X7novlaDJgZcS-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Ransomware Execution targetsResource Client Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N2: Database Server hostsResource Client Data."
          }
        ]
      },
      "position": {
        "x": 1410.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-2",
        "name": "Employees Data",
        "label": "Employees Data",
        "metamodelEntity": "Asset",
        "description": "Employees Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel.",
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
        "drawioId": "rVEplnxd9geB-yA5XOS9-2",
        "drawioPosition": {
          "x": 260.0,
          "y": 1160.0
        },
        "drawioGeometry": {
          "x": 190.0,
          "y": 1140.0,
          "width": 140.0,
          "height": 40.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 40,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-2",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "Employees Data",
            "sourceCardinality": "1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "Employees Data",
            "sourceCardinality": "1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-3",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "targetLabel": "Employees Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS5: Ransomware Execution targetsResource Employees Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "targetLabel": "Employees Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N2: Database Server hostsResource Employees Data."
          }
        ]
      },
      "position": {
        "x": 1410.0,
        "y": 1040.0
      }
    },
    {
      "data": {
        "id": "Zcl4WLPny9slI91kZ9_o-1",
        "name": "N1: Workstation",
        "label": "N1: Workstation",
        "metamodelEntity": "Node",
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
        "drawioId": "Zcl4WLPny9slI91kZ9_o-1",
        "drawioPosition": {
          "x": 440.0,
          "y": 578.71
        },
        "drawioGeometry": {
          "x": 370.0,
          "y": 556.21,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "pADUx78GfB26Rjjpd5Rp-1",
            "name": "isSource",
            "label": "isSource",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "targetLabel": "Interact with DB",
            "targetCardinality": "",
            "cardinality": "",
            "description": "N1: Workstation isSource Interact with DB."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "target": "flr8XU77myX9OvzYn5zU-6",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          }
        ],
        "incomingRelations": [
          {
            "id": "Zcl4WLPny9slI91kZ9_o-2",
            "name": "madeBy",
            "label": "madeBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Main-Infra madeBy N1: Workstation."
          },
          {
            "id": "2yveyayf0f4Zed5tB9-e-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "cardinality": "",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          }
        ]
      },
      "position": {
        "x": 1590.0,
        "y": 458.71
      }
    },
    {
      "data": {
        "id": "fOiOA0MLRFIGU3IK7tZ9-1",
        "name": "N2: Database Server",
        "label": "N2: Database Server",
        "metamodelEntity": "Node",
        "description": "N2: Database Server is a case-study instance of the Node entity in the feasibility-oriented metamodel.",
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
        "drawioId": "fOiOA0MLRFIGU3IK7tZ9-1",
        "drawioPosition": {
          "x": 170.0,
          "y": 550.0
        },
        "drawioGeometry": {
          "x": 100.0,
          "y": 527.5,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1..*",
            "target": "flr8XU77myX9OvzYn5zU-1",
            "targetLabel": "Database Server",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N2: Database Server hasNodeType Database Server."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestination",
            "label": "isDestination",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "targetLabel": "Interact with DB",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "N2: Database Server isDestination Interact with DB."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-3",
            "name": "exposesPort",
            "label": "exposesPort",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "targetLabel": "5432",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Port",
            "description": "N2: Database Server exposesPort 5432."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "targetLabel": "Client Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N2: Database Server hostsResource Client Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "targetLabel": "Employees Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N2: Database Server hostsResource Employees Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-7",
            "name": "madeBy",
            "label": "madeBy",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "Main-Infra",
            "sourceCardinality": "1",
            "target": "fOiOA0MLRFIGU3IK7tZ9-1",
            "targetLabel": "N2: Database Server",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Main-Infra madeBy N2: Database Server."
          }
        ]
      },
      "position": {
        "x": 1320.0,
        "y": 430.0
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-1",
        "name": "Database Server",
        "label": "Database Server",
        "metamodelEntity": "NodeType",
        "description": "Database Server is a case-study instance of the NodeType entity in the feasibility-oriented metamodel.",
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
        "drawioId": "flr8XU77myX9OvzYn5zU-1",
        "drawioPosition": {
          "x": 10.0,
          "y": 677.5
        },
        "drawioGeometry": {
          "x": -60.0,
          "y": 655.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1..*",
            "target": "flr8XU77myX9OvzYn5zU-1",
            "targetLabel": "Database Server",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N2: Database Server hasNodeType Database Server."
          }
        ]
      },
      "position": {
        "x": 1160.0,
        "y": 557.5
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-6",
        "name": "Desktop Computer",
        "label": "Desktop Computer",
        "metamodelEntity": "NodeType",
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
        "drawioId": "flr8XU77myX9OvzYn5zU-6",
        "drawioPosition": {
          "x": 440.0,
          "y": 673.71
        },
        "drawioGeometry": {
          "x": 370.0,
          "y": 651.21,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "target": "flr8XU77myX9OvzYn5zU-6",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          }
        ]
      },
      "position": {
        "x": 1590.0,
        "y": 553.71
      }
    },
    {
      "data": {
        "id": "ze9FDJWhSHo_2HU-X0Ti-2",
        "name": "Interact with DB",
        "label": "Interact with DB",
        "metamodelEntity": "Connection",
        "description": "Interact with DB is a case-study instance of the Connection entity in the feasibility-oriented metamodel.",
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
        "drawioId": "ze9FDJWhSHo_2HU-X0Ti-2",
        "drawioPosition": {
          "x": 310.0,
          "y": 797.5
        },
        "drawioGeometry": {
          "x": 240.0,
          "y": 775.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [
          {
            "id": "1qLYpMFIIv6NwulWZkVb-1",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "Interact with DB",
            "sourceCardinality": "1..*",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "targetLabel": "5432",
            "targetCardinality": "1",
            "cardinality": "Connection 1..* — 1 Port",
            "description": "Interact with DB hasDestinationPort 5432."
          }
        ],
        "incomingRelations": [
          {
            "id": "pADUx78GfB26Rjjpd5Rp-1",
            "name": "isSource",
            "label": "isSource",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "targetLabel": "Interact with DB",
            "targetCardinality": "",
            "cardinality": "",
            "description": "N1: Workstation isSource Interact with DB."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestination",
            "label": "isDestination",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "targetLabel": "Interact with DB",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "N2: Database Server isDestination Interact with DB."
          }
        ]
      },
      "position": {
        "x": 1460.0,
        "y": 677.5
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-5",
        "name": "5432",
        "label": "5432",
        "metamodelEntity": "Port",
        "description": "5432 is a case-study instance of the Port entity in the feasibility-oriented metamodel.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Network scans such as Nmap or vulnerability scanner output",
          "Firewall and security-group configurations",
          "Service inventory and load balancer configuration",
          "Host-level listening service inspection"
        ],
        "drawioId": "pADUx78GfB26Rjjpd5Rp-5",
        "drawioPosition": {
          "x": 160.0,
          "y": 872.5
        },
        "drawioGeometry": {
          "x": 90.0,
          "y": 850.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1qLYpMFIIv6NwulWZkVb-3",
            "name": "exposesPort",
            "label": "exposesPort",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "N2: Database Server",
            "sourceCardinality": "1",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "targetLabel": "5432",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Port",
            "description": "N2: Database Server exposesPort 5432."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-1",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "Interact with DB",
            "sourceCardinality": "1..*",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "targetLabel": "5432",
            "targetCardinality": "1",
            "cardinality": "Connection 1..* — 1 Port",
            "description": "Interact with DB hasDestinationPort 5432."
          }
        ]
      },
      "position": {
        "x": 1310.0,
        "y": 752.5
      }
    },
    {
      "data": {
        "id": "t9Zseuc7trHZRqGckOzh-3",
        "name": "BR1: Organization Data must be Protected",
        "label": "BR1: Organization Data must be Protected",
        "metamodelEntity": "BusinessRequirement",
        "description": "BR1: Organization Data must be Protected is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "t9Zseuc7trHZRqGckOzh-3",
        "drawioPosition": {
          "x": 25.0,
          "y": 310.0
        },
        "drawioGeometry": {
          "x": -100.0,
          "y": 290.0,
          "width": 250.0,
          "height": 40.0
        },
        "layoutWidth": 250.0,
        "layoutHeight": 40,
        "textMaxWidth": 238.0,
        "outgoingRelations": [
          {
            "id": "eZx1rzvC6ny3f7PKwibH-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "sourceCardinality": "1..*",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "sourceCardinality": "1..*",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "t9Zseuc7trHZRqGckOzh-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "sourceLabel": "CS2Org",
            "sourceCardinality": "1",
            "target": "t9Zseuc7trHZRqGckOzh-3",
            "targetLabel": "BR1: Organization Data must be Protected",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected."
          }
        ]
      },
      "position": {
        "x": 1175.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "eZx1rzvC6ny3f7PKwibH-3",
        "name": "ASR1: Confidentiality of Data",
        "label": "ASR1: Confidentiality of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "eZx1rzvC6ny3f7PKwibH-3",
        "drawioPosition": {
          "x": -195.0,
          "y": 434.0
        },
        "drawioGeometry": {
          "x": -330.0,
          "y": 414.0,
          "width": 270.0,
          "height": 40.0
        },
        "layoutWidth": 270.0,
        "layoutHeight": 40,
        "textMaxWidth": 258.0,
        "outgoingRelations": [
          {
            "id": "zYwYgb49FxiR_k0q7Q0m-2",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "ASR1: Confidentiality of Data",
            "sourceCardinality": "1..*",
            "target": "zYwYgb49FxiR_k0q7Q0m-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of Data implementationOf Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "XfZH5y7X7novlaDJgZcS-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "Employees Data",
            "sourceCardinality": "1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "eZx1rzvC6ny3f7PKwibH-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "sourceCardinality": "1..*",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "targetLabel": "ASR1: Confidentiality of Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data."
          }
        ]
      },
      "position": {
        "x": 955.0,
        "y": 314.0
      }
    },
    {
      "data": {
        "id": "cdA-2u69LmOZn_5sE9tN-2",
        "name": "ASR2: Integrity of Data",
        "label": "ASR2: Integrity of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR2: Integrity of Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "cdA-2u69LmOZn_5sE9tN-2",
        "drawioPosition": {
          "x": -449.0,
          "y": 380.0
        },
        "drawioGeometry": {
          "x": -584.0,
          "y": 360.0,
          "width": 270.0,
          "height": 40.0
        },
        "layoutWidth": 270.0,
        "layoutHeight": 40,
        "textMaxWidth": 258.0,
        "outgoingRelations": [
          {
            "id": "YudfH6V3qxk8uhn8DXTI-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "ASR2: Integrity of Data",
            "sourceCardinality": "1..*",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR2: Integrity of Data implementationOf Integrity."
          }
        ],
        "incomingRelations": [
          {
            "id": "mb8l3Fbao_xBAS6c-KFB-1",
            "name": "compromises",
            "label": "compromises",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS5: Ransomware Execution",
            "sourceCardinality": "1..*",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "Client Data",
            "sourceCardinality": "1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-2",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "Employees Data",
            "sourceCardinality": "1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "sourceCardinality": "1..*",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "targetLabel": "ASR2: Integrity of Data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data."
          }
        ]
      },
      "position": {
        "x": 701.0,
        "y": 260.0
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-8",
        "name": "Integrity",
        "label": "Integrity",
        "metamodelEntity": "SecurityRequirement",
        "description": "Integrity is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel.",
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
        "drawioId": "Ry1iGIntjKa-yCpNBPo0-8",
        "drawioPosition": {
          "x": -895.0,
          "y": 425.0
        },
        "drawioGeometry": {
          "x": -1030.0,
          "y": 405.0,
          "width": 270.0,
          "height": 40.0
        },
        "layoutWidth": 270.0,
        "layoutHeight": 40,
        "textMaxWidth": 258.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vo9jejg2OZcYDb8uq2dd-1",
            "name": "violates",
            "label": "violates",
            "source": "5fuBaIPhzgW5u_tKo_7_-29",
            "sourceLabel": "T1486",
            "sourceCardinality": "1..*",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1486 violates Integrity."
          },
          {
            "id": "YudfH6V3qxk8uhn8DXTI-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "ASR2: Integrity of Data",
            "sourceCardinality": "1..*",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "targetLabel": "Integrity",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR2: Integrity of Data implementationOf Integrity."
          }
        ]
      },
      "position": {
        "x": 255.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "zYwYgb49FxiR_k0q7Q0m-1",
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
        "drawioId": "zYwYgb49FxiR_k0q7Q0m-1",
        "drawioPosition": {
          "x": -485.0,
          "y": 260.0
        },
        "drawioGeometry": {
          "x": -620.0,
          "y": 240.0,
          "width": 270.0,
          "height": 40.0
        },
        "layoutWidth": 270.0,
        "layoutHeight": 40,
        "textMaxWidth": 258.0,
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "zYwYgb49FxiR_k0q7Q0m-2",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "ASR1: Confidentiality of Data",
            "sourceCardinality": "1..*",
            "target": "zYwYgb49FxiR_k0q7Q0m-1",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of Data implementationOf Confidentiality."
          }
        ]
      },
      "position": {
        "x": 665.0,
        "y": 140.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-5",
        "label": "manages",
        "name": "manages",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-7",
        "target": "DXn6xaRNV8009_fZBqU1-10",
        "sourceLabel": "CS2Org",
        "targetLabel": "Main-Infra",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Infrastructure",
        "description": "CS2Org manages Main-Infra.",
        "drawioId": "DXn6xaRNV8009_fZBqU1-5",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure"
      }
    },
    {
      "data": {
        "id": "t9Zseuc7trHZRqGckOzh-4",
        "label": "hasBusinessRequirement",
        "name": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-7",
        "target": "t9Zseuc7trHZRqGckOzh-3",
        "sourceLabel": "CS2Org",
        "targetLabel": "BR1: Organization Data must be Protected",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "BusinessRequirement",
        "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected.",
        "drawioId": "t9Zseuc7trHZRqGckOzh-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* BusinessRequirement"
      }
    },
    {
      "data": {
        "id": "mOJ0zVzwKr9MfSjEqvfX-1",
        "label": "usedBy",
        "name": "usedBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "nj5hpQ6kMEfSOXQIEmYd-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "User",
        "description": "Main-Infra usedBy U1: Employee 1.",
        "drawioId": "mOJ0zVzwKr9MfSjEqvfX-1",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* User"
      }
    },
    {
      "data": {
        "id": "Zcl4WLPny9slI91kZ9_o-2",
        "label": "madeBy",
        "name": "madeBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "Zcl4WLPny9slI91kZ9_o-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "description": "Main-Infra madeBy N1: Workstation.",
        "drawioId": "Zcl4WLPny9slI91kZ9_o-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node"
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-7",
        "label": "madeBy",
        "name": "madeBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "fOiOA0MLRFIGU3IK7tZ9-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "N2: Database Server",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "description": "Main-Infra madeBy N2: Database Server.",
        "drawioId": "flr8XU77myX9OvzYn5zU-7",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node"
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-5",
        "label": "initiates",
        "name": "initiates",
        "kind": "relationship",
        "source": "DXTTVG0T_Y0voirAc8tk-7",
        "target": "DXTTVG0T_Y0voirAc8tk-13",
        "sourceLabel": "Unknown",
        "targetLabel": "Ransomware Attack",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Threat",
        "description": "Unknown initiates Ransomware Attack.",
        "drawioId": "DXTTVG0T_Y0voirAc8tk-5",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat"
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-1",
        "label": "startsWith",
        "name": "startsWith",
        "kind": "relationship",
        "source": "DXTTVG0T_Y0voirAc8tk-13",
        "target": "isKCdTBRIcX7ZzF2_SF_-5",
        "sourceLabel": "Ransomware Attack",
        "targetLabel": "AS1: Phishing Attack with Weaponized Document",
        "sourceMetamodelEntity": "Threat",
        "targetMetamodelEntity": "ThreatStep",
        "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document.",
        "drawioId": "isKCdTBRIcX7ZzF2_SF_-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-3",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "isKCdTBRIcX7ZzF2_SF_-6",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "AS2: BazarLoader Execution",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution.",
        "drawioId": "isKCdTBRIcX7ZzF2_SF_-3",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "5_uvdN_fO5OIq28JDHqv-1",
        "label": "exploits",
        "name": "exploits",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "1zz9dUDx6NtFQG9qIyYO-1",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing.",
        "drawioId": "5_uvdN_fO5OIq28JDHqv-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "G_SW_Vu1ddHmdaGLCPAa-1",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "ImEBZV-vzcU5x6acnLZ7-3",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "BazarLoader",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS2: BazarLoader Execution employs BazarLoader.",
        "drawioId": "G_SW_Vu1ddHmdaGLCPAa-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "7615FOlYJKEI97l76xLW-1",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "9aJOADVmqYrCJmHLZuZJ-1",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "T1566.001",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001.",
        "drawioId": "7615FOlYJKEI97l76xLW-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-1",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "9aJOADVmqYrCJmHLZuZJ-1",
        "target": "1zz9dUDx6NtFQG9qIyYO-1",
        "sourceLabel": "T1566.001",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1566.001 exploitsVulnerability Prone to Phishing.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
      }
    },
    {
      "data": {
        "id": "niolT3tTzyHpKWggiv-i-1",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "niolT3tTzyHpKWggiv-i-3",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "Weaponized Document",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document.",
        "drawioId": "niolT3tTzyHpKWggiv-i-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "niolT3tTzyHpKWggiv-i-3",
        "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "sourceLabel": "Weaponized Document",
        "targetLabel": "Office Document",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Weaponized Document instanceOf Office Document.",
        "drawioId": "S2bj8Yupr1EtsPe4_ZwJ-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-1",
        "label": "deploys",
        "name": "deploys",
        "kind": "relationship",
        "source": "niolT3tTzyHpKWggiv-i-3",
        "target": "ImEBZV-vzcU5x6acnLZ7-3",
        "sourceLabel": "Weaponized Document",
        "targetLabel": "BazarLoader",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Weaponized Document deploys BazarLoader.",
        "drawioId": "ImEBZV-vzcU5x6acnLZ7-1",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-13",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "ImEBZV-vzcU5x6acnLZ7-15",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "T1105",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS2: BazarLoader Execution implements T1105.",
        "drawioId": "ImEBZV-vzcU5x6acnLZ7-13",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "nj5hpQ6kMEfSOXQIEmYd-2",
        "label": "affectsUser",
        "name": "affectsUser",
        "kind": "relationship",
        "source": "1zz9dUDx6NtFQG9qIyYO-1",
        "target": "nj5hpQ6kMEfSOXQIEmYd-1",
        "sourceLabel": "Prone to Phishing",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "HumanVulnerability",
        "targetMetamodelEntity": "User",
        "description": "Prone to Phishing affectsUser U1: Employee 1.",
        "drawioId": "nj5hpQ6kMEfSOXQIEmYd-2",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HumanVulnerability 0..* — 0..* User"
      }
    },
    {
      "data": {
        "id": "2yveyayf0f4Zed5tB9-e-1",
        "label": "hasAccessTo",
        "name": "hasAccessTo",
        "kind": "relationship",
        "source": "nj5hpQ6kMEfSOXQIEmYd-1",
        "target": "Zcl4WLPny9slI91kZ9_o-1",
        "sourceLabel": "U1: Employee 1",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "User",
        "targetMetamodelEntity": "Node",
        "description": "U1: Employee 1 hasAccessTo N1: Workstation.",
        "drawioId": "2yveyayf0f4Zed5tB9-e-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-4",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "5fuBaIPhzgW5u_tKo_7_-3",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "AS3: Infrastructure Discovery",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-4",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-10",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-3",
        "target": "5fuBaIPhzgW5u_tKo_7_-9",
        "sourceLabel": "AS3: Infrastructure Discovery",
        "targetLabel": "T1018",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS3: Infrastructure Discovery implements T1018.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-10",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-13",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-3",
        "target": "5fuBaIPhzgW5u_tKo_7_-12",
        "sourceLabel": "AS3: Infrastructure Discovery",
        "targetLabel": "AS4: Lateral Movement to Other Nodes",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-13",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-18",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-12",
        "target": "5fuBaIPhzgW5u_tKo_7_-20",
        "sourceLabel": "AS4: Lateral Movement to Other Nodes",
        "targetLabel": "T1570",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS4: Lateral Movement to Other Nodes implements T1570.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-18",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "W3w3qxBm9yhByrui9fDT-1",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "rVEplnxd9geB-yA5XOS9-1",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset",
        "description": "AS5: Ransomware Execution targetsResource Client Data.",
        "drawioId": "W3w3qxBm9yhByrui9fDT-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "W3w3qxBm9yhByrui9fDT-3",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "rVEplnxd9geB-yA5XOS9-2",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Employees Data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset",
        "description": "AS5: Ransomware Execution targetsResource Employees Data.",
        "drawioId": "W3w3qxBm9yhByrui9fDT-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "mb8l3Fbao_xBAS6c-KFB-1",
        "label": "compromises",
        "name": "compromises",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "ASR2: Integrity of Data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data.",
        "drawioId": "mb8l3Fbao_xBAS6c-KFB-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-22",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-12",
        "target": "5fuBaIPhzgW5u_tKo_7_-21",
        "sourceLabel": "AS4: Lateral Movement to Other Nodes",
        "targetLabel": "AS5: Ransomware Execution",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-22",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "vo9jejg2OZcYDb8uq2dd-1",
        "label": "violates",
        "name": "violates",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-29",
        "target": "Ry1iGIntjKa-yCpNBPo0-8",
        "sourceLabel": "T1486",
        "targetLabel": "Integrity",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "T1486 violates Integrity.",
        "drawioId": "vo9jejg2OZcYDb8uq2dd-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-27",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "5fuBaIPhzgW5u_tKo_7_-29",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "T1486",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS5: Ransomware Execution implements T1486.",
        "drawioId": "5fuBaIPhzgW5u_tKo_7_-27",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-1",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "3yI27mflQqRDWPVXWcn1-3",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Conti Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS5: Ransomware Execution employs Conti Instance.",
        "drawioId": "3yI27mflQqRDWPVXWcn1-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-4",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "3yI27mflQqRDWPVXWcn1-3",
        "target": "3yI27mflQqRDWPVXWcn1-6",
        "sourceLabel": "Conti Instance",
        "targetLabel": "Conti",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Conti Instance instanceOf Conti.",
        "drawioId": "3yI27mflQqRDWPVXWcn1-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "XfZH5y7X7novlaDJgZcS-1",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-1",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "Client Data",
        "targetLabel": "ASR1: Confidentiality of Data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data.",
        "drawioId": "XfZH5y7X7novlaDJgZcS-1",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-6",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-1",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "Client Data",
        "targetLabel": "ASR2: Integrity of Data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data.",
        "drawioId": "Ry1iGIntjKa-yCpNBPo0-6",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-2",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-2",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "Employees Data",
        "targetLabel": "ASR2: Integrity of Data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data.",
        "drawioId": "Ry1iGIntjKa-yCpNBPo0-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-4",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-2",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "Employees Data",
        "targetLabel": "ASR1: Confidentiality of Data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data.",
        "drawioId": "Ry1iGIntjKa-yCpNBPo0-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-1",
        "label": "isSource",
        "name": "isSource",
        "kind": "relationship",
        "source": "Zcl4WLPny9slI91kZ9_o-1",
        "target": "ze9FDJWhSHo_2HU-X0Ti-2",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Interact with DB",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Connection",
        "description": "N1: Workstation isSource Interact with DB.",
        "drawioId": "pADUx78GfB26Rjjpd5Rp-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-2",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "flr8XU77myX9OvzYn5zU-1",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Database Server",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "description": "N2: Database Server hasNodeType Database Server.",
        "drawioId": "flr8XU77myX9OvzYn5zU-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType"
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-3",
        "label": "isDestination",
        "name": "isDestination",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "ze9FDJWhSHo_2HU-X0Ti-2",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Interact with DB",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Connection",
        "description": "N2: Database Server isDestination Interact with DB.",
        "drawioId": "pADUx78GfB26Rjjpd5Rp-3",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "Node 1 — 0..* Connection"
      }
    },
    {
      "data": {
        "id": "1qLYpMFIIv6NwulWZkVb-3",
        "label": "exposesPort",
        "name": "exposesPort",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "pADUx78GfB26Rjjpd5Rp-5",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "5432",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Port",
        "description": "N2: Database Server exposesPort 5432.",
        "drawioId": "1qLYpMFIIv6NwulWZkVb-3",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Port"
      }
    },
    {
      "data": {
        "id": "yAQWF--oj1ht1P_PKinq-2",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "rVEplnxd9geB-yA5XOS9-1",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Client Data",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Asset",
        "description": "N2: Database Server hostsResource Client Data.",
        "drawioId": "yAQWF--oj1ht1P_PKinq-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
      }
    },
    {
      "data": {
        "id": "yAQWF--oj1ht1P_PKinq-4",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "rVEplnxd9geB-yA5XOS9-2",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Employees Data",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Asset",
        "description": "N2: Database Server hostsResource Employees Data.",
        "drawioId": "yAQWF--oj1ht1P_PKinq-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-4",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "Zcl4WLPny9slI91kZ9_o-1",
        "target": "flr8XU77myX9OvzYn5zU-6",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Desktop Computer",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "description": "N1: Workstation hasNodeType Desktop Computer.",
        "drawioId": "flr8XU77myX9OvzYn5zU-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType"
      }
    },
    {
      "data": {
        "id": "1qLYpMFIIv6NwulWZkVb-1",
        "label": "hasDestinationPort",
        "name": "hasDestinationPort",
        "kind": "relationship",
        "source": "ze9FDJWhSHo_2HU-X0Ti-2",
        "target": "pADUx78GfB26Rjjpd5Rp-5",
        "sourceLabel": "Interact with DB",
        "targetLabel": "5432",
        "sourceMetamodelEntity": "Connection",
        "targetMetamodelEntity": "Port",
        "description": "Interact with DB hasDestinationPort 5432.",
        "drawioId": "1qLYpMFIIv6NwulWZkVb-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Connection 1..* — 1 Port"
      }
    },
    {
      "data": {
        "id": "eZx1rzvC6ny3f7PKwibH-4",
        "label": "drivesSecurityRequirement",
        "name": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "t9Zseuc7trHZRqGckOzh-3",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "BR1: Organization Data must be Protected",
        "targetLabel": "ASR1: Confidentiality of Data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data.",
        "drawioId": "eZx1rzvC6ny3f7PKwibH-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "cdA-2u69LmOZn_5sE9tN-3",
        "label": "drivesSecurityRequirement",
        "name": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "t9Zseuc7trHZRqGckOzh-3",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "BR1: Organization Data must be Protected",
        "targetLabel": "ASR2: Integrity of Data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "AssetSecurityRequirement",
        "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data.",
        "drawioId": "cdA-2u69LmOZn_5sE9tN-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "zYwYgb49FxiR_k0q7Q0m-2",
        "label": "implementationOf",
        "name": "implementationOf",
        "kind": "relationship",
        "source": "eZx1rzvC6ny3f7PKwibH-3",
        "target": "zYwYgb49FxiR_k0q7Q0m-1",
        "sourceLabel": "ASR1: Confidentiality of Data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "AssetSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "ASR1: Confidentiality of Data implementationOf Confidentiality.",
        "drawioId": "zYwYgb49FxiR_k0q7Q0m-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "YudfH6V3qxk8uhn8DXTI-1",
        "label": "implementationOf",
        "name": "implementationOf",
        "kind": "relationship",
        "source": "cdA-2u69LmOZn_5sE9tN-2",
        "target": "Ry1iGIntjKa-yCpNBPo0-8",
        "sourceLabel": "ASR2: Integrity of Data",
        "targetLabel": "Integrity",
        "sourceMetamodelEntity": "AssetSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "ASR2: Integrity of Data implementationOf Integrity.",
        "drawioId": "YudfH6V3qxk8uhn8DXTI-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement"
      }
    }
  ]
};
