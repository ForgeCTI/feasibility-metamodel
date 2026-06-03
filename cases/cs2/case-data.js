const caseData = {
  "metadata": {
    "id": "cs2",
    "title": "CS2 — Ransomware intrusion with rich evidence",
    "shortTitle": "Ransomware intrusion with rich evidence",
    "description": "This case implementation instantiates a ransomware intrusion with initial phishing, loader execution, infrastructure discovery, lateral movement, ransomware execution, observable tooling, and impacts on protected organizational data.",
    "source": "metamodel_v2-case2.drawio.xml",
    "determinants": [
      "D2",
      "D4",
      "D6",
      "D7"
    ],
    "patterns": [
      "P2",
      "P3",
      "P4",
      "P5"
    ],
    "layout": {
      "minX": -1030.0,
      "minY": 240.0,
      "maxX": 1560.0,
      "maxY": 1180.0,
      "width": 2870.0,
      "height": 1220.0,
      "padding": 140
    }
  },
  "nodes": [
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-7",
        "name": "CS2Org",
        "label": "CS2Org",
        "metamodelEntity": "Organization",
        "description": "CS2Org is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 320.0,
          "y": 275.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "DXn6xaRNV8009_fZBqU1-5",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "target": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "CS2Org",
            "targetLabel": "Main-Infra",
            "description": "CS2Org manages Main-Infra."
          },
          {
            "id": "t9Zseuc7trHZRqGckOzh-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "target": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "CS2Org",
            "targetLabel": "BR1: Organization Data must be Protected",
            "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1550.0,
        "y": 195.0
      }
    },
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-10",
        "name": "Main-Infra",
        "label": "Main-Infra",
        "metamodelEntity": "Infrastructure",
        "description": "Main-Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 320.0,
          "y": 365.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "mOJ0zVzwKr9MfSjEqvfX-1",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "U1: Employee 1",
            "description": "Main-Infra usedBy U1: Employee 1."
          },
          {
            "id": "Zcl4WLPny9slI91kZ9_o-2",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "N1: Workstation",
            "description": "Main-Infra madeBy N1: Workstation."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-7",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "N2: Database Server",
            "description": "Main-Infra madeBy N2: Database Server."
          }
        ],
        "incomingRelations": [
          {
            "id": "DXn6xaRNV8009_fZBqU1-5",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "target": "DXn6xaRNV8009_fZBqU1-10",
            "sourceLabel": "CS2Org",
            "targetLabel": "Main-Infra",
            "description": "CS2Org manages Main-Infra."
          }
        ]
      },
      "position": {
        "x": 1550.0,
        "y": 285.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-7",
        "name": "Unknown",
        "label": "Unknown",
        "metamodelEntity": "ThreatSource",
        "description": "Unknown is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1169.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "DXTTVG0T_Y0voirAc8tk-5",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-7",
            "target": "DXTTVG0T_Y0voirAc8tk-13",
            "sourceLabel": "Unknown",
            "targetLabel": "Ransomware Attack",
            "description": "Unknown initiates Ransomware Attack."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 2399.0,
        "y": 160.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-13",
        "name": "Ransomware Attack",
        "label": "Ransomware Attack",
        "metamodelEntity": "ThreatEvent",
        "description": "Ransomware Attack is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1169.0,
          "y": 320.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-7",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "Ransomware Attack",
            "targetLabel": "AS1: Phishing Attack with Weaponized Document",
            "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document."
          }
        ],
        "incomingRelations": [
          {
            "id": "DXTTVG0T_Y0voirAc8tk-5",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-7",
            "target": "DXTTVG0T_Y0voirAc8tk-13",
            "sourceLabel": "Unknown",
            "targetLabel": "Ransomware Attack",
            "description": "Unknown initiates Ransomware Attack."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 240.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-5",
        "name": "AS1: Phishing Attack with Weaponized Document",
        "label": "AS1: Phishing Attack with Weaponized Document",
        "metamodelEntity": "AttackStepItem",
        "description": "AS1: Phishing Attack with Weaponized Document is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1134.0,
          "y": 420.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "AS2: BazarLoader Execution",
            "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution."
          },
          {
            "id": "5_uvdN_fO5OIq28JDHqv-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Prone to Phishing",
            "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing."
          },
          {
            "id": "nuMpVuPP5FOWfUhDepc9-1",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "nuMpVuPP5FOWfUhDepc9-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Phishing with Attachment",
            "description": "AS1: Phishing Attack with Weaponized Document refersTo Phishing with Attachment."
          },
          {
            "id": "7615FOlYJKEI97l76xLW-1",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "9aJOADVmqYrCJmHLZuZJ-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "T1566.001",
            "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001."
          },
          {
            "id": "niolT3tTzyHpKWggiv-i-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Weaponized Document",
            "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document."
          }
        ],
        "incomingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-7",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "Ransomware Attack",
            "targetLabel": "AS1: Phishing Attack with Weaponized Document",
            "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 345.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-6",
        "name": "AS2: BazarLoader Execution",
        "label": "AS2: BazarLoader Execution",
        "metamodelEntity": "AttackStepItem",
        "description": "AS2: BazarLoader Execution is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1134.0,
          "y": 530.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "G_SW_Vu1ddHmdaGLCPAa-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "BazarLoader",
            "description": "AS2: BazarLoader Execution employs BazarLoader."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-10",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-12",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "Install Malicious Software",
            "description": "AS2: BazarLoader Execution refersTo Install Malicious Software."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-13",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-15",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "T1105",
            "description": "AS2: BazarLoader Execution implements T1105."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-4",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "AS3: Infrastructure Discovery",
            "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery."
          }
        ],
        "incomingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "isKCdTBRIcX7ZzF2_SF_-6",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "AS2: BazarLoader Execution",
            "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 450.0
      }
    },
    {
      "data": {
        "id": "nuMpVuPP5FOWfUhDepc9-3",
        "name": "Phishing with Attachment",
        "label": "Phishing with Attachment",
        "metamodelEntity": "AttackStep",
        "description": "Phishing with Attachment is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 930.0,
          "y": 422.5,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "nuMpVuPP5FOWfUhDepc9-1",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "nuMpVuPP5FOWfUhDepc9-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Phishing with Attachment",
            "description": "AS1: Phishing Attack with Weaponized Document refersTo Phishing with Attachment."
          }
        ]
      },
      "position": {
        "x": 2170.0,
        "y": 345.0
      }
    },
    {
      "data": {
        "id": "9aJOADVmqYrCJmHLZuZJ-1",
        "name": "T1566.001",
        "label": "T1566.001",
        "metamodelEntity": "TTP",
        "description": "T1566.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1430.0,
          "y": 425.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "9aJOADVmqYrCJmHLZuZJ-1",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "T1566.001",
            "targetLabel": "Prone to Phishing",
            "description": "T1566.001 exploitsVulnerability Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "7615FOlYJKEI97l76xLW-1",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "9aJOADVmqYrCJmHLZuZJ-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "T1566.001",
            "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001."
          }
        ]
      },
      "position": {
        "x": 2632.5,
        "y": 345.0
      }
    },
    {
      "data": {
        "id": "niolT3tTzyHpKWggiv-i-3",
        "name": "Weaponized Document",
        "label": "Weaponized Document",
        "metamodelEntity": "AttackToolInstance",
        "description": "Weaponized Document is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 920.0,
          "y": 520.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
            "sourceLabel": "Weaponized Document",
            "targetLabel": "Office Document",
            "description": "Weaponized Document instanceOf Office Document."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "Weaponized Document",
            "targetLabel": "BazarLoader",
            "description": "Weaponized Document deploys BazarLoader."
          }
        ],
        "incomingRelations": [
          {
            "id": "niolT3tTzyHpKWggiv-i-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Weaponized Document",
            "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document."
          }
        ]
      },
      "position": {
        "x": 2160.0,
        "y": 440.0
      }
    },
    {
      "data": {
        "id": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "name": "Office Document",
        "label": "Office Document",
        "metamodelEntity": "AttackTool",
        "description": "Office Document is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 920.0,
          "y": 600.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
            "sourceLabel": "Weaponized Document",
            "targetLabel": "Office Document",
            "description": "Weaponized Document instanceOf Office Document."
          }
        ]
      },
      "position": {
        "x": 2160.0,
        "y": 520.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-3",
        "name": "BazarLoader",
        "label": "BazarLoader",
        "metamodelEntity": "AttackToolInstance",
        "description": "BazarLoader is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 730.0,
          "y": 570.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "G_SW_Vu1ddHmdaGLCPAa-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "BazarLoader",
            "description": "AS2: BazarLoader Execution employs BazarLoader."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "Weaponized Document",
            "targetLabel": "BazarLoader",
            "description": "Weaponized Document deploys BazarLoader."
          }
        ]
      },
      "position": {
        "x": 1970.0,
        "y": 490.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-8",
        "name": "BazarLoader",
        "label": "BazarLoader",
        "metamodelEntity": "AttackTool",
        "description": "BazarLoader is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 730.0,
          "y": 680.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": []
      },
      "position": {
        "x": 1970.0,
        "y": 600.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-12",
        "name": "Install Malicious Software",
        "label": "Install Malicious Software",
        "metamodelEntity": "AttackStep",
        "description": "Install Malicious Software is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1420.0,
          "y": 600.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-10",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-12",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "Install Malicious Software",
            "description": "AS2: BazarLoader Execution refersTo Install Malicious Software."
          }
        ]
      },
      "position": {
        "x": 2660.0,
        "y": 522.5
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-15",
        "name": "T1105",
        "label": "T1105",
        "metamodelEntity": "TTP",
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
        "drawio": {
          "x": 1430.0,
          "y": 520.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-13",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-15",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "T1105",
            "description": "AS2: BazarLoader Execution implements T1105."
          }
        ]
      },
      "position": {
        "x": 2632.5,
        "y": 440.0
      }
    },
    {
      "data": {
        "id": "1zz9dUDx6NtFQG9qIyYO-1",
        "name": "Prone to Phishing",
        "label": "Prone to Phishing",
        "metamodelEntity": "HumanVulnerability",
        "description": "Prone to Phishing is a case-study instance of the HumanVulnerability entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HumanVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 840.0,
          "y": 330.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "nj5hpQ6kMEfSOXQIEmYd-2",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "1zz9dUDx6NtFQG9qIyYO-1",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "Prone to Phishing",
            "targetLabel": "U1: Employee 1",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          }
        ],
        "incomingRelations": [
          {
            "id": "5_uvdN_fO5OIq28JDHqv-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
            "targetLabel": "Prone to Phishing",
            "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "9aJOADVmqYrCJmHLZuZJ-1",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "T1566.001",
            "targetLabel": "Prone to Phishing",
            "description": "T1566.001 exploitsVulnerability Prone to Phishing."
          }
        ]
      },
      "position": {
        "x": 2080.0,
        "y": 252.5
      }
    },
    {
      "data": {
        "id": "nj5hpQ6kMEfSOXQIEmYd-1",
        "name": "U1: Employee 1",
        "label": "U1: Employee 1",
        "metamodelEntity": "User",
        "description": "U1: Employee 1 is a case-study instance of the User entity in the feasibility-oriented metamodel. It specializes the metamodel concept: User is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 560.0,
          "y": 475.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "2yveyayf0f4Zed5tB9-e-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "nj5hpQ6kMEfSOXQIEmYd-1",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "U1: Employee 1",
            "targetLabel": "N1: Workstation",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          }
        ],
        "incomingRelations": [
          {
            "id": "mOJ0zVzwKr9MfSjEqvfX-1",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "U1: Employee 1",
            "description": "Main-Infra usedBy U1: Employee 1."
          },
          {
            "id": "nj5hpQ6kMEfSOXQIEmYd-2",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "1zz9dUDx6NtFQG9qIyYO-1",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "Prone to Phishing",
            "targetLabel": "U1: Employee 1",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          }
        ]
      },
      "position": {
        "x": 1800.0,
        "y": 397.5
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-3",
        "name": "AS3: Infrastructure Discovery",
        "label": "AS3: Infrastructure Discovery",
        "metamodelEntity": "AttackStepItem",
        "description": "AS3: Infrastructure Discovery is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1134.0,
          "y": 720.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-6",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-8",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "Remote System Discovery",
            "description": "AS3: Infrastructure Discovery refersTo Remote System Discovery."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-10",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-9",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "T1018",
            "description": "AS3: Infrastructure Discovery implements T1018."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-13",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "AS4: Lateral Movement to Other Nodes",
            "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-4",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS2: BazarLoader Execution",
            "targetLabel": "AS3: Infrastructure Discovery",
            "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 640.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-8",
        "name": "Remote System Discovery",
        "label": "Remote System Discovery",
        "metamodelEntity": "AttackStep",
        "description": "Remote System Discovery is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1420.0,
          "y": 760.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-6",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-8",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "Remote System Discovery",
            "description": "AS3: Infrastructure Discovery refersTo Remote System Discovery."
          }
        ]
      },
      "position": {
        "x": 2660.0,
        "y": 682.5
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-9",
        "name": "T1018",
        "label": "T1018",
        "metamodelEntity": "TTP",
        "description": "T1018 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1470.0,
          "y": 700.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-10",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-9",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "T1018",
            "description": "AS3: Infrastructure Discovery implements T1018."
          }
        ]
      },
      "position": {
        "x": 2672.5,
        "y": 620.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-12",
        "name": "AS4: Lateral Movement to Other Nodes",
        "label": "AS4: Lateral Movement to Other Nodes",
        "metamodelEntity": "AttackStepItem",
        "description": "AS4: Lateral Movement to Other Nodes is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1134.0,
          "y": 810.0,
          "width": 190.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-15",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-17",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "Lateral Movement",
            "description": "AS4: Lateral Movement to Other Nodes refersTo Lateral Movement."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-18",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-20",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "T1570",
            "description": "AS4: Lateral Movement to Other Nodes implements T1570."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-22",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "AS5: Ransomware Execution",
            "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-13",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS3: Infrastructure Discovery",
            "targetLabel": "AS4: Lateral Movement to Other Nodes",
            "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 740.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-17",
        "name": "Lateral Movement",
        "label": "Lateral Movement",
        "metamodelEntity": "AttackStep",
        "description": "Lateral Movement is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1420.0,
          "y": 880.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-15",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-17",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "Lateral Movement",
            "description": "AS4: Lateral Movement to Other Nodes refersTo Lateral Movement."
          }
        ]
      },
      "position": {
        "x": 2660.0,
        "y": 802.5
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-20",
        "name": "T1570",
        "label": "T1570",
        "metamodelEntity": "TTP",
        "description": "T1570 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1457.5,
          "y": 820.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-18",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-20",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "T1570",
            "description": "AS4: Lateral Movement to Other Nodes implements T1570."
          }
        ]
      },
      "position": {
        "x": 2660.0,
        "y": 740.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-21",
        "name": "AS5: Ransomware Execution",
        "label": "AS5: Ransomware Execution",
        "metamodelEntity": "AttackStepItem",
        "description": "AS5: Ransomware Execution is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 1134.0,
          "y": 940.0,
          "width": 190.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Client Data",
            "description": "AS5: Ransomware Execution targetsResource Client Data."
          },
          {
            "id": "W3w3qxBm9yhByrui9fDT-3",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Employees Data",
            "description": "AS5: Ransomware Execution targetsResource Employees Data."
          },
          {
            "id": "mb8l3Fbao_xBAS6c-KFB-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-24",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-26",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Data Encryption",
            "description": "AS5: Ransomware Execution refersTo Data Encryption."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-27",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-29",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "T1486",
            "description": "AS5: Ransomware Execution implements T1486."
          },
          {
            "id": "3yI27mflQqRDWPVXWcn1-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "3yI27mflQqRDWPVXWcn1-3",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Conti Instance",
            "description": "AS5: Ransomware Execution employs Conti Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-22",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS4: Lateral Movement to Other Nodes",
            "targetLabel": "AS5: Ransomware Execution",
            "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution."
          }
        ]
      },
      "position": {
        "x": 2399.0,
        "y": 870.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-26",
        "name": "Data Encryption",
        "label": "Data Encryption",
        "metamodelEntity": "AttackStep",
        "description": "Data Encryption is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1420.0,
          "y": 1035.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "vo9jejg2OZcYDb8uq2dd-1",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-26",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "sourceLabel": "Data Encryption",
            "targetLabel": "Integrity",
            "description": "Data Encryption violates Integrity."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-24",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-26",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Data Encryption",
            "description": "AS5: Ransomware Execution refersTo Data Encryption."
          }
        ]
      },
      "position": {
        "x": 2660.0,
        "y": 957.5
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-29",
        "name": "T1486",
        "label": "T1486",
        "metamodelEntity": "TTP",
        "description": "T1486 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 1450.0,
          "y": 970.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "p9ztlIugojwwJTmJCLig-1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-29",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "T1486",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "T1486 impacts ASR2: Integrity of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-27",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-29",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "T1486",
            "description": "AS5: Ransomware Execution implements T1486."
          }
        ]
      },
      "position": {
        "x": 2652.5,
        "y": 890.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-3",
        "name": "Conti Instance",
        "label": "Conti Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Conti Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports and case notes",
          "SIEM, EDR, IDS, proxy, DNS, and firewall telemetry",
          "Malware analysis, sandbox reports, and forensic artifacts",
          "Threat intelligence feeds, indicators, and observed campaign reporting"
        ],
        "drawio": {
          "x": 840.0,
          "y": 975.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "3yI27mflQqRDWPVXWcn1-3",
            "target": "3yI27mflQqRDWPVXWcn1-6",
            "sourceLabel": "Conti Instance",
            "targetLabel": "Conti",
            "description": "Conti Instance instanceOf Conti."
          }
        ],
        "incomingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "3yI27mflQqRDWPVXWcn1-3",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Conti Instance",
            "description": "AS5: Ransomware Execution employs Conti Instance."
          }
        ]
      },
      "position": {
        "x": 2080.0,
        "y": 895.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-6",
        "name": "Conti",
        "label": "Conti",
        "metamodelEntity": "AttackTool",
        "description": "Conti is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 840.0,
          "y": 1055.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "3yI27mflQqRDWPVXWcn1-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "3yI27mflQqRDWPVXWcn1-3",
            "target": "3yI27mflQqRDWPVXWcn1-6",
            "sourceLabel": "Conti Instance",
            "targetLabel": "Conti",
            "description": "Conti Instance instanceOf Conti."
          }
        ]
      },
      "position": {
        "x": 2080.0,
        "y": 975.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-1",
        "name": "Client Data",
        "label": "Client Data",
        "metamodelEntity": "Asset",
        "description": "Client Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 190.0,
          "y": 1070.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "XfZH5y7X7novlaDJgZcS-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Client Data",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Client Data",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Client Data",
            "description": "AS5: Ransomware Execution targetsResource Client Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Client Data",
            "description": "N2: Database Server hostsResource Client Data."
          }
        ]
      },
      "position": {
        "x": 1430.0,
        "y": 990.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-2",
        "name": "Employees Data",
        "label": "Employees Data",
        "metamodelEntity": "Asset",
        "description": "Employees Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 190.0,
          "y": 1140.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-2",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Employees Data",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Employees Data",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "W3w3qxBm9yhByrui9fDT-3",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "Employees Data",
            "description": "AS5: Ransomware Execution targetsResource Employees Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Employees Data",
            "description": "N2: Database Server hostsResource Employees Data."
          }
        ]
      },
      "position": {
        "x": 1430.0,
        "y": 1060.0
      }
    },
    {
      "data": {
        "id": "Zcl4WLPny9slI91kZ9_o-1",
        "name": "N1: Workstation",
        "label": "N1: Workstation",
        "metamodelEntity": "Node",
        "description": "N1: Workstation is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 370.0,
          "y": 556.21,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "pADUx78GfB26Rjjpd5Rp-1",
            "name": "isSource",
            "label": "isSource",
            "kind": "relationship",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N1: Workstation",
            "targetLabel": "Interact with DB",
            "description": "N1: Workstation isSource Interact with DB."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "target": "flr8XU77myX9OvzYn5zU-6",
            "sourceLabel": "N1: Workstation",
            "targetLabel": "Desktop Computer",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          }
        ],
        "incomingRelations": [
          {
            "id": "Zcl4WLPny9slI91kZ9_o-2",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "N1: Workstation",
            "description": "Main-Infra madeBy N1: Workstation."
          },
          {
            "id": "2yveyayf0f4Zed5tB9-e-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "nj5hpQ6kMEfSOXQIEmYd-1",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "U1: Employee 1",
            "targetLabel": "N1: Workstation",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          }
        ]
      },
      "position": {
        "x": 1610.0,
        "y": 478.71000000000004
      }
    },
    {
      "data": {
        "id": "fOiOA0MLRFIGU3IK7tZ9-1",
        "name": "N2: Database Server",
        "label": "N2: Database Server",
        "metamodelEntity": "Node",
        "description": "N2: Database Server is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 100.0,
          "y": 527.5,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "flr8XU77myX9OvzYn5zU-1",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Database Server",
            "description": "N2: Database Server hasNodeType Database Server."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestionation",
            "label": "isDestionation",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Interact with DB",
            "description": "N2: Database Server isDestionation Interact with DB."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-3",
            "name": "exposesPort",
            "label": "exposesPort",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "5432",
            "description": "N2: Database Server exposesPort 5432."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Client Data",
            "description": "N2: Database Server hostsResource Client Data."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Employees Data",
            "description": "N2: Database Server hostsResource Employees Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-7",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "Main-Infra",
            "targetLabel": "N2: Database Server",
            "description": "Main-Infra madeBy N2: Database Server."
          }
        ]
      },
      "position": {
        "x": 1340.0,
        "y": 450.0
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-1",
        "name": "Database Server",
        "label": "Database Server",
        "metamodelEntity": "NodeType",
        "description": "Database Server is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": -60.0,
          "y": 655.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "flr8XU77myX9OvzYn5zU-1",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Database Server",
            "description": "N2: Database Server hasNodeType Database Server."
          }
        ]
      },
      "position": {
        "x": 1180.0,
        "y": 577.5
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-6",
        "name": "Desktop Computer",
        "label": "Desktop Computer",
        "metamodelEntity": "NodeType",
        "description": "Desktop Computer is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "drawio": {
          "x": 370.0,
          "y": 651.21,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "flr8XU77myX9OvzYn5zU-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "target": "flr8XU77myX9OvzYn5zU-6",
            "sourceLabel": "N1: Workstation",
            "targetLabel": "Desktop Computer",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          }
        ]
      },
      "position": {
        "x": 1610.0,
        "y": 573.71
      }
    },
    {
      "data": {
        "id": "ze9FDJWhSHo_2HU-X0Ti-2",
        "name": "Interact with DB",
        "label": "Interact with DB",
        "metamodelEntity": "Connection",
        "description": "Interact with DB is a case-study instance of the Connection entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Connection is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 240.0,
          "y": 775.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "1qLYpMFIIv6NwulWZkVb-1",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "kind": "relationship",
            "source": "ze9FDJWhSHo_2HU-X0Ti-2",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "Interact with DB",
            "targetLabel": "5432",
            "description": "Interact with DB hasDestinationPort 5432."
          }
        ],
        "incomingRelations": [
          {
            "id": "pADUx78GfB26Rjjpd5Rp-1",
            "name": "isSource",
            "label": "isSource",
            "kind": "relationship",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N1: Workstation",
            "targetLabel": "Interact with DB",
            "description": "N1: Workstation isSource Interact with DB."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestionation",
            "label": "isDestionation",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "Interact with DB",
            "description": "N2: Database Server isDestionation Interact with DB."
          }
        ]
      },
      "position": {
        "x": 1480.0,
        "y": 697.5
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-5",
        "name": "5432",
        "label": "5432",
        "metamodelEntity": "Port",
        "description": "5432 is a case-study instance of the Port entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Port is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": 90.0,
          "y": 850.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1qLYpMFIIv6NwulWZkVb-3",
            "name": "exposesPort",
            "label": "exposesPort",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "N2: Database Server",
            "targetLabel": "5432",
            "description": "N2: Database Server exposesPort 5432."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-1",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "kind": "relationship",
            "source": "ze9FDJWhSHo_2HU-X0Ti-2",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "Interact with DB",
            "targetLabel": "5432",
            "description": "Interact with DB hasDestinationPort 5432."
          }
        ]
      },
      "position": {
        "x": 1330.0,
        "y": 772.5
      }
    },
    {
      "data": {
        "id": "t9Zseuc7trHZRqGckOzh-3",
        "name": "BR1: Organization Data must be Protected",
        "label": "BR1: Organization Data must be Protected",
        "metamodelEntity": "BusinessRequirement",
        "description": "BR1: Organization Data must be Protected is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": -100.0,
          "y": 290.0,
          "width": 250.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "eZx1rzvC6ny3f7PKwibH-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "t9Zseuc7trHZRqGckOzh-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "target": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "CS2Org",
            "targetLabel": "BR1: Organization Data must be Protected",
            "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected."
          }
        ]
      },
      "position": {
        "x": 1195.0,
        "y": 210.0
      }
    },
    {
      "data": {
        "id": "eZx1rzvC6ny3f7PKwibH-3",
        "name": "ASR1: Confidentiality of Data",
        "label": "ASR1: Confidentiality of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": -330.0,
          "y": 414.0,
          "width": 270.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "zYwYgb49FxiR_k0q7Q0m-2",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "eZx1rzvC6ny3f7PKwibH-3",
            "target": "zYwYgb49FxiR_k0q7Q0m-1",
            "sourceLabel": "ASR1: Confidentiality of Data",
            "targetLabel": "Confidentiality",
            "description": "ASR1: Confidentiality of Data implementationOf Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "XfZH5y7X7novlaDJgZcS-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Client Data",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Employees Data",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data."
          },
          {
            "id": "eZx1rzvC6ny3f7PKwibH-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "targetLabel": "ASR1: Confidentiality of Data",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data."
          }
        ]
      },
      "position": {
        "x": 975.0,
        "y": 334.0
      }
    },
    {
      "data": {
        "id": "cdA-2u69LmOZn_5sE9tN-2",
        "name": "ASR2: Integrity of Data",
        "label": "ASR2: Integrity of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR2: Integrity of Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
        "drawio": {
          "x": -584.0,
          "y": 360.0,
          "width": 270.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "YudfH6V3qxk8uhn8DXTI-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "cdA-2u69LmOZn_5sE9tN-2",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "sourceLabel": "ASR2: Integrity of Data",
            "targetLabel": "Integrity",
            "description": "ASR2: Integrity of Data implementationOf Integrity."
          }
        ],
        "incomingRelations": [
          {
            "id": "mb8l3Fbao_xBAS6c-KFB-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "AS5: Ransomware Execution",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data."
          },
          {
            "id": "p9ztlIugojwwJTmJCLig-1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-29",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "T1486",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "T1486 impacts ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Client Data",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-2",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Employees Data",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "BR1: Organization Data must be Protected",
            "targetLabel": "ASR2: Integrity of Data",
            "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data."
          }
        ]
      },
      "position": {
        "x": 721.0,
        "y": 280.0
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-8",
        "name": "Integrity",
        "label": "Integrity",
        "metamodelEntity": "SecurityRequirement",
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
        "drawio": {
          "x": -1030.0,
          "y": 405.0,
          "width": 270.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vo9jejg2OZcYDb8uq2dd-1",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-26",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "sourceLabel": "Data Encryption",
            "targetLabel": "Integrity",
            "description": "Data Encryption violates Integrity."
          },
          {
            "id": "YudfH6V3qxk8uhn8DXTI-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "cdA-2u69LmOZn_5sE9tN-2",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "sourceLabel": "ASR2: Integrity of Data",
            "targetLabel": "Integrity",
            "description": "ASR2: Integrity of Data implementationOf Integrity."
          }
        ]
      },
      "position": {
        "x": 275.0,
        "y": 325.0
      }
    },
    {
      "data": {
        "id": "zYwYgb49FxiR_k0q7Q0m-1",
        "name": "Confidentiality",
        "label": "Confidentiality",
        "metamodelEntity": "SecurityRequirement",
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
        "drawio": {
          "x": -620.0,
          "y": 240.0,
          "width": 270.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "zYwYgb49FxiR_k0q7Q0m-2",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "eZx1rzvC6ny3f7PKwibH-3",
            "target": "zYwYgb49FxiR_k0q7Q0m-1",
            "sourceLabel": "ASR1: Confidentiality of Data",
            "targetLabel": "Confidentiality",
            "description": "ASR1: Confidentiality of Data implementationOf Confidentiality."
          }
        ]
      },
      "position": {
        "x": 685.0,
        "y": 160.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-5",
        "name": "manages",
        "label": "manages",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-7",
        "target": "DXn6xaRNV8009_fZBqU1-10",
        "sourceLabel": "CS2Org",
        "targetLabel": "Main-Infra",
        "description": "CS2Org manages Main-Infra."
      }
    },
    {
      "data": {
        "id": "t9Zseuc7trHZRqGckOzh-4",
        "name": "hasBusinessRequirement",
        "label": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-7",
        "target": "t9Zseuc7trHZRqGckOzh-3",
        "sourceLabel": "CS2Org",
        "targetLabel": "BR1: Organization Data must be Protected",
        "description": "CS2Org hasBusinessRequirement BR1: Organization Data must be Protected."
      }
    },
    {
      "data": {
        "id": "mOJ0zVzwKr9MfSjEqvfX-1",
        "name": "usedBy",
        "label": "usedBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "nj5hpQ6kMEfSOXQIEmYd-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "U1: Employee 1",
        "description": "Main-Infra usedBy U1: Employee 1."
      }
    },
    {
      "data": {
        "id": "Zcl4WLPny9slI91kZ9_o-2",
        "name": "madeBy",
        "label": "madeBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "Zcl4WLPny9slI91kZ9_o-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "N1: Workstation",
        "description": "Main-Infra madeBy N1: Workstation."
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-7",
        "name": "madeBy",
        "label": "madeBy",
        "kind": "relationship",
        "source": "DXn6xaRNV8009_fZBqU1-10",
        "target": "fOiOA0MLRFIGU3IK7tZ9-1",
        "sourceLabel": "Main-Infra",
        "targetLabel": "N2: Database Server",
        "description": "Main-Infra madeBy N2: Database Server."
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-5",
        "name": "initiates",
        "label": "initiates",
        "kind": "relationship",
        "source": "DXTTVG0T_Y0voirAc8tk-7",
        "target": "DXTTVG0T_Y0voirAc8tk-13",
        "sourceLabel": "Unknown",
        "targetLabel": "Ransomware Attack",
        "description": "Unknown initiates Ransomware Attack."
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-7",
        "name": "startsWith",
        "label": "startsWith",
        "kind": "relationship",
        "source": "DXTTVG0T_Y0voirAc8tk-13",
        "target": "isKCdTBRIcX7ZzF2_SF_-5",
        "sourceLabel": "Ransomware Attack",
        "targetLabel": "AS1: Phishing Attack with Weaponized Document",
        "description": "Ransomware Attack startsWith AS1: Phishing Attack with Weaponized Document."
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-3",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "isKCdTBRIcX7ZzF2_SF_-6",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "AS2: BazarLoader Execution",
        "description": "AS1: Phishing Attack with Weaponized Document followedBy AS2: BazarLoader Execution."
      }
    },
    {
      "data": {
        "id": "5_uvdN_fO5OIq28JDHqv-1",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "1zz9dUDx6NtFQG9qIyYO-1",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "Prone to Phishing",
        "description": "AS1: Phishing Attack with Weaponized Document exploits Prone to Phishing."
      }
    },
    {
      "data": {
        "id": "G_SW_Vu1ddHmdaGLCPAa-1",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "ImEBZV-vzcU5x6acnLZ7-3",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "BazarLoader",
        "description": "AS2: BazarLoader Execution employs BazarLoader."
      }
    },
    {
      "data": {
        "id": "nuMpVuPP5FOWfUhDepc9-1",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "nuMpVuPP5FOWfUhDepc9-3",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "Phishing with Attachment",
        "description": "AS1: Phishing Attack with Weaponized Document refersTo Phishing with Attachment."
      }
    },
    {
      "data": {
        "id": "7615FOlYJKEI97l76xLW-1",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "9aJOADVmqYrCJmHLZuZJ-1",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "T1566.001",
        "description": "AS1: Phishing Attack with Weaponized Document implements T1566.001."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "9aJOADVmqYrCJmHLZuZJ-1",
        "target": "1zz9dUDx6NtFQG9qIyYO-1",
        "sourceLabel": "T1566.001",
        "targetLabel": "Prone to Phishing",
        "description": "T1566.001 exploitsVulnerability Prone to Phishing."
      }
    },
    {
      "data": {
        "id": "niolT3tTzyHpKWggiv-i-1",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-5",
        "target": "niolT3tTzyHpKWggiv-i-3",
        "sourceLabel": "AS1: Phishing Attack with Weaponized Document",
        "targetLabel": "Weaponized Document",
        "description": "AS1: Phishing Attack with Weaponized Document employs Weaponized Document."
      }
    },
    {
      "data": {
        "id": "S2bj8Yupr1EtsPe4_ZwJ-1",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "niolT3tTzyHpKWggiv-i-3",
        "target": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "sourceLabel": "Weaponized Document",
        "targetLabel": "Office Document",
        "description": "Weaponized Document instanceOf Office Document."
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-1",
        "name": "deploys",
        "label": "deploys",
        "kind": "relationship",
        "source": "niolT3tTzyHpKWggiv-i-3",
        "target": "ImEBZV-vzcU5x6acnLZ7-3",
        "sourceLabel": "Weaponized Document",
        "targetLabel": "BazarLoader",
        "description": "Weaponized Document deploys BazarLoader."
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-10",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "ImEBZV-vzcU5x6acnLZ7-12",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "Install Malicious Software",
        "description": "AS2: BazarLoader Execution refersTo Install Malicious Software."
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-13",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "ImEBZV-vzcU5x6acnLZ7-15",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "T1105",
        "description": "AS2: BazarLoader Execution implements T1105."
      }
    },
    {
      "data": {
        "id": "nj5hpQ6kMEfSOXQIEmYd-2",
        "name": "affectsUser",
        "label": "affectsUser",
        "kind": "relationship",
        "source": "1zz9dUDx6NtFQG9qIyYO-1",
        "target": "nj5hpQ6kMEfSOXQIEmYd-1",
        "sourceLabel": "Prone to Phishing",
        "targetLabel": "U1: Employee 1",
        "description": "Prone to Phishing affectsUser U1: Employee 1."
      }
    },
    {
      "data": {
        "id": "2yveyayf0f4Zed5tB9-e-1",
        "name": "hasAccessTo",
        "label": "hasAccessTo",
        "kind": "relationship",
        "source": "nj5hpQ6kMEfSOXQIEmYd-1",
        "target": "Zcl4WLPny9slI91kZ9_o-1",
        "sourceLabel": "U1: Employee 1",
        "targetLabel": "N1: Workstation",
        "description": "U1: Employee 1 hasAccessTo N1: Workstation."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-4",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "isKCdTBRIcX7ZzF2_SF_-6",
        "target": "5fuBaIPhzgW5u_tKo_7_-3",
        "sourceLabel": "AS2: BazarLoader Execution",
        "targetLabel": "AS3: Infrastructure Discovery",
        "description": "AS2: BazarLoader Execution followedBy AS3: Infrastructure Discovery."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-6",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-3",
        "target": "5fuBaIPhzgW5u_tKo_7_-8",
        "sourceLabel": "AS3: Infrastructure Discovery",
        "targetLabel": "Remote System Discovery",
        "description": "AS3: Infrastructure Discovery refersTo Remote System Discovery."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-10",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-3",
        "target": "5fuBaIPhzgW5u_tKo_7_-9",
        "sourceLabel": "AS3: Infrastructure Discovery",
        "targetLabel": "T1018",
        "description": "AS3: Infrastructure Discovery implements T1018."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-13",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-3",
        "target": "5fuBaIPhzgW5u_tKo_7_-12",
        "sourceLabel": "AS3: Infrastructure Discovery",
        "targetLabel": "AS4: Lateral Movement to Other Nodes",
        "description": "AS3: Infrastructure Discovery followedBy AS4: Lateral Movement to Other Nodes."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-15",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-12",
        "target": "5fuBaIPhzgW5u_tKo_7_-17",
        "sourceLabel": "AS4: Lateral Movement to Other Nodes",
        "targetLabel": "Lateral Movement",
        "description": "AS4: Lateral Movement to Other Nodes refersTo Lateral Movement."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-18",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-12",
        "target": "5fuBaIPhzgW5u_tKo_7_-20",
        "sourceLabel": "AS4: Lateral Movement to Other Nodes",
        "targetLabel": "T1570",
        "description": "AS4: Lateral Movement to Other Nodes implements T1570."
      }
    },
    {
      "data": {
        "id": "W3w3qxBm9yhByrui9fDT-1",
        "name": "targetsResource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "rVEplnxd9geB-yA5XOS9-1",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Client Data",
        "description": "AS5: Ransomware Execution targetsResource Client Data."
      }
    },
    {
      "data": {
        "id": "W3w3qxBm9yhByrui9fDT-3",
        "name": "targetsResource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "rVEplnxd9geB-yA5XOS9-2",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Employees Data",
        "description": "AS5: Ransomware Execution targetsResource Employees Data."
      }
    },
    {
      "data": {
        "id": "mb8l3Fbao_xBAS6c-KFB-1",
        "name": "compromises",
        "label": "compromises",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "ASR2: Integrity of Data",
        "description": "AS5: Ransomware Execution compromises ASR2: Integrity of Data."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-22",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-12",
        "target": "5fuBaIPhzgW5u_tKo_7_-21",
        "sourceLabel": "AS4: Lateral Movement to Other Nodes",
        "targetLabel": "AS5: Ransomware Execution",
        "description": "AS4: Lateral Movement to Other Nodes followedBy AS5: Ransomware Execution."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-24",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "5fuBaIPhzgW5u_tKo_7_-26",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Data Encryption",
        "description": "AS5: Ransomware Execution refersTo Data Encryption."
      }
    },
    {
      "data": {
        "id": "vo9jejg2OZcYDb8uq2dd-1",
        "name": "violates",
        "label": "violates",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-26",
        "target": "Ry1iGIntjKa-yCpNBPo0-8",
        "sourceLabel": "Data Encryption",
        "targetLabel": "Integrity",
        "description": "Data Encryption violates Integrity."
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-27",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "5fuBaIPhzgW5u_tKo_7_-29",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "T1486",
        "description": "AS5: Ransomware Execution implements T1486."
      }
    },
    {
      "data": {
        "id": "p9ztlIugojwwJTmJCLig-1",
        "name": "impacts",
        "label": "impacts",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-29",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "T1486",
        "targetLabel": "ASR2: Integrity of Data",
        "description": "T1486 impacts ASR2: Integrity of Data."
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-1",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "5fuBaIPhzgW5u_tKo_7_-21",
        "target": "3yI27mflQqRDWPVXWcn1-3",
        "sourceLabel": "AS5: Ransomware Execution",
        "targetLabel": "Conti Instance",
        "description": "AS5: Ransomware Execution employs Conti Instance."
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-4",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "3yI27mflQqRDWPVXWcn1-3",
        "target": "3yI27mflQqRDWPVXWcn1-6",
        "sourceLabel": "Conti Instance",
        "targetLabel": "Conti",
        "description": "Conti Instance instanceOf Conti."
      }
    },
    {
      "data": {
        "id": "XfZH5y7X7novlaDJgZcS-1",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-1",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "Client Data",
        "targetLabel": "ASR1: Confidentiality of Data",
        "description": "Client Data hasSecurityRequirement ASR1: Confidentiality of Data."
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-6",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-1",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "Client Data",
        "targetLabel": "ASR2: Integrity of Data",
        "description": "Client Data hasSecurityRequirement ASR2: Integrity of Data."
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-2",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-2",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "Employees Data",
        "targetLabel": "ASR2: Integrity of Data",
        "description": "Employees Data hasSecurityRequirement ASR2: Integrity of Data."
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-4",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "rVEplnxd9geB-yA5XOS9-2",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "Employees Data",
        "targetLabel": "ASR1: Confidentiality of Data",
        "description": "Employees Data hasSecurityRequirement ASR1: Confidentiality of Data."
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-1",
        "name": "isSource",
        "label": "isSource",
        "kind": "relationship",
        "source": "Zcl4WLPny9slI91kZ9_o-1",
        "target": "ze9FDJWhSHo_2HU-X0Ti-2",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Interact with DB",
        "description": "N1: Workstation isSource Interact with DB."
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-2",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "flr8XU77myX9OvzYn5zU-1",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Database Server",
        "description": "N2: Database Server hasNodeType Database Server."
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-3",
        "name": "isDestionation",
        "label": "isDestionation",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "ze9FDJWhSHo_2HU-X0Ti-2",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Interact with DB",
        "description": "N2: Database Server isDestionation Interact with DB."
      }
    },
    {
      "data": {
        "id": "1qLYpMFIIv6NwulWZkVb-3",
        "name": "exposesPort",
        "label": "exposesPort",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "pADUx78GfB26Rjjpd5Rp-5",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "5432",
        "description": "N2: Database Server exposesPort 5432."
      }
    },
    {
      "data": {
        "id": "yAQWF--oj1ht1P_PKinq-2",
        "name": "hostsResource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "rVEplnxd9geB-yA5XOS9-1",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Client Data",
        "description": "N2: Database Server hostsResource Client Data."
      }
    },
    {
      "data": {
        "id": "yAQWF--oj1ht1P_PKinq-4",
        "name": "hostsResource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "fOiOA0MLRFIGU3IK7tZ9-1",
        "target": "rVEplnxd9geB-yA5XOS9-2",
        "sourceLabel": "N2: Database Server",
        "targetLabel": "Employees Data",
        "description": "N2: Database Server hostsResource Employees Data."
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-4",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "Zcl4WLPny9slI91kZ9_o-1",
        "target": "flr8XU77myX9OvzYn5zU-6",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Desktop Computer",
        "description": "N1: Workstation hasNodeType Desktop Computer."
      }
    },
    {
      "data": {
        "id": "1qLYpMFIIv6NwulWZkVb-1",
        "name": "hasDestinationPort",
        "label": "hasDestinationPort",
        "kind": "relationship",
        "source": "ze9FDJWhSHo_2HU-X0Ti-2",
        "target": "pADUx78GfB26Rjjpd5Rp-5",
        "sourceLabel": "Interact with DB",
        "targetLabel": "5432",
        "description": "Interact with DB hasDestinationPort 5432."
      }
    },
    {
      "data": {
        "id": "eZx1rzvC6ny3f7PKwibH-4",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "t9Zseuc7trHZRqGckOzh-3",
        "target": "eZx1rzvC6ny3f7PKwibH-3",
        "sourceLabel": "BR1: Organization Data must be Protected",
        "targetLabel": "ASR1: Confidentiality of Data",
        "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR1: Confidentiality of Data."
      }
    },
    {
      "data": {
        "id": "cdA-2u69LmOZn_5sE9tN-3",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "t9Zseuc7trHZRqGckOzh-3",
        "target": "cdA-2u69LmOZn_5sE9tN-2",
        "sourceLabel": "BR1: Organization Data must be Protected",
        "targetLabel": "ASR2: Integrity of Data",
        "description": "BR1: Organization Data must be Protected drivesSecurityRequirement ASR2: Integrity of Data."
      }
    },
    {
      "data": {
        "id": "zYwYgb49FxiR_k0q7Q0m-2",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "eZx1rzvC6ny3f7PKwibH-3",
        "target": "zYwYgb49FxiR_k0q7Q0m-1",
        "sourceLabel": "ASR1: Confidentiality of Data",
        "targetLabel": "Confidentiality",
        "description": "ASR1: Confidentiality of Data implementationOf Confidentiality."
      }
    },
    {
      "data": {
        "id": "YudfH6V3qxk8uhn8DXTI-1",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "cdA-2u69LmOZn_5sE9tN-2",
        "target": "Ry1iGIntjKa-yCpNBPo0-8",
        "sourceLabel": "ASR2: Integrity of Data",
        "targetLabel": "Integrity",
        "description": "ASR2: Integrity of Data implementationOf Integrity."
      }
    }
  ]
};
