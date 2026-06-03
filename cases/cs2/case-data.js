const caseData = {
  "metadata": {
    "id": "cs2",
    "title": "CS2 \u2014 Ransomware intrusion with rich evidence",
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
        "name": "CS2OrgOrganization",
        "label": "CS2OrgOrganization",
        "instanceName": "CS2Org",
        "metamodelEntity": "Organization",
        "description": "CS2OrgOrganization is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "CS2OrgOrganization",
            "targetLabel": "Main-InfraInfrastructure",
            "description": "CS2OrgOrganization manages Main-InfraInfrastructure."
          },
          {
            "id": "t9Zseuc7trHZRqGckOzh-4",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-7",
            "target": "t9Zseuc7trHZRqGckOzh-3",
            "sourceLabel": "CS2OrgOrganization",
            "targetLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "description": "CS2OrgOrganization hasBusinessRequirement BR1: Organization Data must be ProtectedBusinessRequirement."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1490.0,
        "y": 175.0
      }
    },
    {
      "data": {
        "id": "DXn6xaRNV8009_fZBqU1-10",
        "name": "Main-InfraInfrastructure",
        "label": "Main-InfraInfrastructure",
        "instanceName": "Main-Infra",
        "metamodelEntity": "Infrastructure",
        "description": "Main-InfraInfrastructure is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Main-InfraInfrastructure usedBy U1: Employee 1User."
          },
          {
            "id": "Zcl4WLPny9slI91kZ9_o-2",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Main-InfraInfrastructure madeBy N1: WorkstationNode."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-7",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "DXn6xaRNV8009_fZBqU1-10",
            "target": "fOiOA0MLRFIGU3IK7tZ9-1",
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "N2: Database ServerNode",
            "description": "Main-InfraInfrastructure madeBy N2: Database ServerNode."
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
            "sourceLabel": "CS2OrgOrganization",
            "targetLabel": "Main-InfraInfrastructure",
            "description": "CS2OrgOrganization manages Main-InfraInfrastructure."
          }
        ]
      },
      "position": {
        "x": 1490.0,
        "y": 265.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-7",
        "name": "UnknownThreatSource",
        "label": "UnknownThreatSource",
        "instanceName": "Unknown",
        "metamodelEntity": "ThreatSource",
        "description": "UnknownThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "UnknownThreatSource",
            "targetLabel": "Ransomware AttackThreatEvent",
            "description": "UnknownThreatSource initiates Ransomware AttackThreatEvent."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 2339.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "DXTTVG0T_Y0voirAc8tk-13",
        "name": "Ransomware AttackThreatEvent",
        "label": "Ransomware AttackThreatEvent",
        "instanceName": "Ransomware Attack",
        "metamodelEntity": "ThreatEvent",
        "description": "Ransomware AttackThreatEvent is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 1169.0,
          "y": 320.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "Ransomware AttackThreatEvent",
            "targetLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "description": "Ransomware AttackThreatEvent relatedTo AS1: Phishing Attack with Weaponized DocumentAttackStepItem."
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
            "sourceLabel": "UnknownThreatSource",
            "targetLabel": "Ransomware AttackThreatEvent",
            "description": "UnknownThreatSource initiates Ransomware AttackThreatEvent."
          }
        ]
      },
      "position": {
        "x": 2339.0,
        "y": 220.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-5",
        "name": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "label": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "instanceName": "AS1: Phishing Attack with Weaponized Document",
        "metamodelEntity": "AttackStepItem",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem followedBy AS2: BazarLoader ExecutionAttackStepItem."
          },
          {
            "id": "5_uvdN_fO5OIq28JDHqv-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "nuMpVuPP5FOWfUhDepc9-1",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "nuMpVuPP5FOWfUhDepc9-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Phishing with AttachmentAttackStep",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem refersTo Phishing with AttachmentAttackStep."
          },
          {
            "id": "7615FOlYJKEI97l76xLW-1",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "9aJOADVmqYrCJmHLZuZJ-1",
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "T1566.001TTP",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem implements T1566.001TTP."
          },
          {
            "id": "niolT3tTzyHpKWggiv-i-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-5",
            "target": "niolT3tTzyHpKWggiv-i-3",
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Weaponized DocumentAttackToolInstance",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem employs Weaponized DocumentAttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "isKCdTBRIcX7ZzF2_SF_-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "DXTTVG0T_Y0voirAc8tk-13",
            "target": "isKCdTBRIcX7ZzF2_SF_-5",
            "sourceLabel": "Ransomware AttackThreatEvent",
            "targetLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "description": "Ransomware AttackThreatEvent relatedTo AS1: Phishing Attack with Weaponized DocumentAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2304.0,
        "y": 320.0
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-6",
        "name": "AS2: BazarLoader ExecutionAttackStepItem",
        "label": "AS2: BazarLoader ExecutionAttackStepItem",
        "instanceName": "AS2: BazarLoader Execution",
        "metamodelEntity": "AttackStepItem",
        "description": "AS2: BazarLoader ExecutionAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "BazarLoaderAttackToolInstance",
            "description": "AS2: BazarLoader ExecutionAttackStepItem employs BazarLoaderAttackToolInstance."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-10",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-12",
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "Install Malicious SoftwareAttackStep",
            "description": "AS2: BazarLoader ExecutionAttackStepItem refersTo Install Malicious SoftwareAttackStep."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-13",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "ImEBZV-vzcU5x6acnLZ7-15",
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "T1105TTP",
            "description": "AS2: BazarLoader ExecutionAttackStepItem implements T1105TTP."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-4",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "isKCdTBRIcX7ZzF2_SF_-6",
            "target": "5fuBaIPhzgW5u_tKo_7_-3",
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "description": "AS2: BazarLoader ExecutionAttackStepItem followedBy AS3: Infrastructure DiscoveryAttackStepItem."
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem followedBy AS2: BazarLoader ExecutionAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2304.0,
        "y": 430.0
      }
    },
    {
      "data": {
        "id": "nuMpVuPP5FOWfUhDepc9-3",
        "name": "Phishing with AttachmentAttackStep",
        "label": "Phishing with AttachmentAttackStep",
        "instanceName": "Phishing with Attachment",
        "metamodelEntity": "AttackStep",
        "description": "Phishing with AttachmentAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Phishing with AttachmentAttackStep",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem refersTo Phishing with AttachmentAttackStep."
          }
        ]
      },
      "position": {
        "x": 2100.0,
        "y": 322.5
      }
    },
    {
      "data": {
        "id": "9aJOADVmqYrCJmHLZuZJ-1",
        "name": "T1566.001TTP",
        "label": "T1566.001TTP",
        "instanceName": "T1566.001",
        "metamodelEntity": "TTP",
        "description": "T1566.001TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "T1566.001TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1566.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "T1566.001TTP",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem implements T1566.001TTP."
          }
        ]
      },
      "position": {
        "x": 2600.0,
        "y": 325.0
      }
    },
    {
      "data": {
        "id": "niolT3tTzyHpKWggiv-i-3",
        "name": "Weaponized DocumentAttackToolInstance",
        "label": "Weaponized DocumentAttackToolInstance",
        "instanceName": "Weaponized Document",
        "metamodelEntity": "AttackToolInstance",
        "description": "Weaponized DocumentAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "Weaponized DocumentAttackToolInstance",
            "targetLabel": "Office DocumentAttackTool",
            "description": "Weaponized DocumentAttackToolInstance instanceOf Office DocumentAttackTool."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "Weaponized DocumentAttackToolInstance",
            "targetLabel": "BazarLoaderAttackToolInstance",
            "description": "Weaponized DocumentAttackToolInstance deploys BazarLoaderAttackToolInstance."
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Weaponized DocumentAttackToolInstance",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem employs Weaponized DocumentAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 2090.0,
        "y": 420.0
      }
    },
    {
      "data": {
        "id": "S2bj8Yupr1EtsPe4_ZwJ-3",
        "name": "Office DocumentAttackTool",
        "label": "Office DocumentAttackTool",
        "instanceName": "Office Document",
        "metamodelEntity": "AttackTool",
        "description": "Office DocumentAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "Weaponized DocumentAttackToolInstance",
            "targetLabel": "Office DocumentAttackTool",
            "description": "Weaponized DocumentAttackToolInstance instanceOf Office DocumentAttackTool."
          }
        ]
      },
      "position": {
        "x": 2090.0,
        "y": 500.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-3",
        "name": "BazarLoaderAttackToolInstance",
        "label": "BazarLoaderAttackToolInstance",
        "instanceName": "BazarLoader",
        "metamodelEntity": "AttackToolInstance",
        "description": "BazarLoaderAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "BazarLoaderAttackToolInstance",
            "description": "AS2: BazarLoader ExecutionAttackStepItem employs BazarLoaderAttackToolInstance."
          },
          {
            "id": "ImEBZV-vzcU5x6acnLZ7-1",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "niolT3tTzyHpKWggiv-i-3",
            "target": "ImEBZV-vzcU5x6acnLZ7-3",
            "sourceLabel": "Weaponized DocumentAttackToolInstance",
            "targetLabel": "BazarLoaderAttackToolInstance",
            "description": "Weaponized DocumentAttackToolInstance deploys BazarLoaderAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1900.0,
        "y": 470.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-8",
        "name": "BazarLoaderAttackTool",
        "label": "BazarLoaderAttackTool",
        "instanceName": "BazarLoader",
        "metamodelEntity": "AttackTool",
        "description": "BazarLoaderAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
        "x": 1900.0,
        "y": 580.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-12",
        "name": "Install Malicious SoftwareAttackStep",
        "label": "Install Malicious SoftwareAttackStep",
        "instanceName": "Install Malicious Software",
        "metamodelEntity": "AttackStep",
        "description": "Install Malicious SoftwareAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "Install Malicious SoftwareAttackStep",
            "description": "AS2: BazarLoader ExecutionAttackStepItem refersTo Install Malicious SoftwareAttackStep."
          }
        ]
      },
      "position": {
        "x": 2590.0,
        "y": 500.0
      }
    },
    {
      "data": {
        "id": "ImEBZV-vzcU5x6acnLZ7-15",
        "name": "T1105TTP",
        "label": "T1105TTP",
        "instanceName": "T1105",
        "metamodelEntity": "TTP",
        "description": "T1105TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "T1105TTP",
            "description": "AS2: BazarLoader ExecutionAttackStepItem implements T1105TTP."
          }
        ]
      },
      "position": {
        "x": 2600.0,
        "y": 420.0
      }
    },
    {
      "data": {
        "id": "1zz9dUDx6NtFQG9qIyYO-1",
        "name": "Prone to PhishingHumanVulnerability",
        "label": "Prone to PhishingHumanVulnerability",
        "instanceName": "Prone to Phishing",
        "metamodelEntity": "HumanVulnerability",
        "description": "Prone to PhishingHumanVulnerability is a case-study instance of the HumanVulnerability entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HumanVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
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
            "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "9aJOADVmqYrCJmHLZuZJ-1",
            "target": "1zz9dUDx6NtFQG9qIyYO-1",
            "sourceLabel": "T1566.001TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1566.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ]
      },
      "position": {
        "x": 2010.0,
        "y": 230.0
      }
    },
    {
      "data": {
        "id": "nj5hpQ6kMEfSOXQIEmYd-1",
        "name": "U1: Employee 1User",
        "label": "U1: Employee 1User",
        "instanceName": "U1: Employee 1",
        "metamodelEntity": "User",
        "description": "U1: Employee 1User is a case-study instance of the User entity in the feasibility-oriented metamodel. It specializes the metamodel concept: User is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
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
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Main-InfraInfrastructure usedBy U1: Employee 1User."
          },
          {
            "id": "nj5hpQ6kMEfSOXQIEmYd-2",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "1zz9dUDx6NtFQG9qIyYO-1",
            "target": "nj5hpQ6kMEfSOXQIEmYd-1",
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
          }
        ]
      },
      "position": {
        "x": 1730.0,
        "y": 375.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-3",
        "name": "AS3: Infrastructure DiscoveryAttackStepItem",
        "label": "AS3: Infrastructure DiscoveryAttackStepItem",
        "instanceName": "AS3: Infrastructure Discovery",
        "metamodelEntity": "AttackStepItem",
        "description": "AS3: Infrastructure DiscoveryAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "Remote System DiscoveryAttackStep",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem refersTo Remote System DiscoveryAttackStep."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-10",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-9",
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "T1018TTP",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem implements T1018TTP."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-13",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-3",
            "target": "5fuBaIPhzgW5u_tKo_7_-12",
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem followedBy AS4: Lateral Movement to Other NodesAttackStepItem."
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
            "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
            "targetLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "description": "AS2: BazarLoader ExecutionAttackStepItem followedBy AS3: Infrastructure DiscoveryAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2304.0,
        "y": 620.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-8",
        "name": "Remote System DiscoveryAttackStep",
        "label": "Remote System DiscoveryAttackStep",
        "instanceName": "Remote System Discovery",
        "metamodelEntity": "AttackStep",
        "description": "Remote System DiscoveryAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "Remote System DiscoveryAttackStep",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem refersTo Remote System DiscoveryAttackStep."
          }
        ]
      },
      "position": {
        "x": 2590.0,
        "y": 660.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-9",
        "name": "T1018TTP",
        "label": "T1018TTP",
        "instanceName": "T1018",
        "metamodelEntity": "TTP",
        "description": "T1018TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "T1018TTP",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem implements T1018TTP."
          }
        ]
      },
      "position": {
        "x": 2640.0,
        "y": 600.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-12",
        "name": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "label": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "instanceName": "AS4: Lateral Movement to Other Nodes",
        "metamodelEntity": "AttackStepItem",
        "description": "AS4: Lateral Movement to Other NodesAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "Lateral MovementAttackStep",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem refersTo Lateral MovementAttackStep."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-18",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-20",
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "T1570TTP",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem implements T1570TTP."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-22",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-12",
            "target": "5fuBaIPhzgW5u_tKo_7_-21",
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem followedBy AS5: Ransomware ExecutionAttackStepItem."
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
            "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
            "targetLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "description": "AS3: Infrastructure DiscoveryAttackStepItem followedBy AS4: Lateral Movement to Other NodesAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2304.0,
        "y": 710.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-17",
        "name": "Lateral MovementAttackStep",
        "label": "Lateral MovementAttackStep",
        "instanceName": "Lateral Movement",
        "metamodelEntity": "AttackStep",
        "description": "Lateral MovementAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "Lateral MovementAttackStep",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem refersTo Lateral MovementAttackStep."
          }
        ]
      },
      "position": {
        "x": 2590.0,
        "y": 780.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-20",
        "name": "T1570TTP",
        "label": "T1570TTP",
        "instanceName": "T1570",
        "metamodelEntity": "TTP",
        "description": "T1570TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "T1570TTP",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem implements T1570TTP."
          }
        ]
      },
      "position": {
        "x": 2627.5,
        "y": 720.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-21",
        "name": "AS5: Ransomware ExecutionAttackStepItem",
        "label": "AS5: Ransomware ExecutionAttackStepItem",
        "instanceName": "AS5: Ransomware Execution",
        "metamodelEntity": "AttackStepItem",
        "description": "AS5: Ransomware ExecutionAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Client DataAsset",
            "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Client DataAsset."
          },
          {
            "id": "W3w3qxBm9yhByrui9fDT-3",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Employees DataAsset",
            "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Employees DataAsset."
          },
          {
            "id": "mb8l3Fbao_xBAS6c-KFB-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "AS5: Ransomware ExecutionAttackStepItem compromises ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-24",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-26",
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Data EncryptionAttackStep",
            "description": "AS5: Ransomware ExecutionAttackStepItem refersTo Data EncryptionAttackStep."
          },
          {
            "id": "5fuBaIPhzgW5u_tKo_7_-27",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "5fuBaIPhzgW5u_tKo_7_-29",
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "T1486TTP",
            "description": "AS5: Ransomware ExecutionAttackStepItem implements T1486TTP."
          },
          {
            "id": "3yI27mflQqRDWPVXWcn1-1",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-21",
            "target": "3yI27mflQqRDWPVXWcn1-3",
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Conti InstanceAttackToolInstance",
            "description": "AS5: Ransomware ExecutionAttackStepItem employs Conti InstanceAttackToolInstance."
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
            "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
            "targetLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "description": "AS4: Lateral Movement to Other NodesAttackStepItem followedBy AS5: Ransomware ExecutionAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2304.0,
        "y": 840.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-26",
        "name": "Data EncryptionAttackStep",
        "label": "Data EncryptionAttackStep",
        "instanceName": "Data Encryption",
        "metamodelEntity": "AttackStep",
        "description": "Data EncryptionAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "Data EncryptionAttackStep",
            "targetLabel": "IntegritySecurityRequirement",
            "description": "Data EncryptionAttackStep violates IntegritySecurityRequirement."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Data EncryptionAttackStep",
            "description": "AS5: Ransomware ExecutionAttackStepItem refersTo Data EncryptionAttackStep."
          }
        ]
      },
      "position": {
        "x": 2590.0,
        "y": 935.0
      }
    },
    {
      "data": {
        "id": "5fuBaIPhzgW5u_tKo_7_-29",
        "name": "T1486TTP",
        "label": "T1486TTP",
        "instanceName": "T1486",
        "metamodelEntity": "TTP",
        "description": "T1486TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "T1486TTP",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "T1486TTP impacts ASR2: Integrity of DataAssetSecurityRequirement."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "T1486TTP",
            "description": "AS5: Ransomware ExecutionAttackStepItem implements T1486TTP."
          }
        ]
      },
      "position": {
        "x": 2620.0,
        "y": 870.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-3",
        "name": "Conti InstanceAttackToolInstance",
        "label": "Conti InstanceAttackToolInstance",
        "instanceName": "Conti Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Conti InstanceAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
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
            "sourceLabel": "Conti InstanceAttackToolInstance",
            "targetLabel": "ContiAttackTool",
            "description": "Conti InstanceAttackToolInstance instanceOf ContiAttackTool."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Conti InstanceAttackToolInstance",
            "description": "AS5: Ransomware ExecutionAttackStepItem employs Conti InstanceAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 2010.0,
        "y": 875.0
      }
    },
    {
      "data": {
        "id": "3yI27mflQqRDWPVXWcn1-6",
        "name": "ContiAttackTool",
        "label": "ContiAttackTool",
        "instanceName": "Conti",
        "metamodelEntity": "AttackTool",
        "description": "ContiAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "Conti InstanceAttackToolInstance",
            "targetLabel": "ContiAttackTool",
            "description": "Conti InstanceAttackToolInstance instanceOf ContiAttackTool."
          }
        ]
      },
      "position": {
        "x": 2010.0,
        "y": 955.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-1",
        "name": "Client DataAsset",
        "label": "Client DataAsset",
        "instanceName": "Client Data",
        "metamodelEntity": "Asset",
        "description": "Client DataAsset is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "Client DataAsset",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "Client DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Client DataAsset",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "Client DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Client DataAsset",
            "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Client DataAsset."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Client DataAsset",
            "description": "N2: Database ServerNode hostsResource Client DataAsset."
          }
        ]
      },
      "position": {
        "x": 1360.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "rVEplnxd9geB-yA5XOS9-2",
        "name": "Employees DataAsset",
        "label": "Employees DataAsset",
        "instanceName": "Employees Data",
        "metamodelEntity": "Asset",
        "description": "Employees DataAsset is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "Employees DataAsset",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "Employees DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Employees DataAsset",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "Employees DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "Employees DataAsset",
            "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Employees DataAsset."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Employees DataAsset",
            "description": "N2: Database ServerNode hostsResource Employees DataAsset."
          }
        ]
      },
      "position": {
        "x": 1360.0,
        "y": 1040.0
      }
    },
    {
      "data": {
        "id": "Zcl4WLPny9slI91kZ9_o-1",
        "name": "N1: WorkstationNode",
        "label": "N1: WorkstationNode",
        "instanceName": "N1: Workstation",
        "metamodelEntity": "Node",
        "description": "N1: WorkstationNode is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Interact with DBConnection",
            "description": "N1: WorkstationNode isSource Interact with DBConnection."
          },
          {
            "id": "flr8XU77myX9OvzYn5zU-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "Zcl4WLPny9slI91kZ9_o-1",
            "target": "flr8XU77myX9OvzYn5zU-6",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
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
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Main-InfraInfrastructure madeBy N1: WorkstationNode."
          },
          {
            "id": "2yveyayf0f4Zed5tB9-e-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "nj5hpQ6kMEfSOXQIEmYd-1",
            "target": "Zcl4WLPny9slI91kZ9_o-1",
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
          }
        ]
      },
      "position": {
        "x": 1540.0,
        "y": 456.21000000000004
      }
    },
    {
      "data": {
        "id": "fOiOA0MLRFIGU3IK7tZ9-1",
        "name": "N2: Database ServerNode",
        "label": "N2: Database ServerNode",
        "instanceName": "N2: Database Server",
        "metamodelEntity": "Node",
        "description": "N2: Database ServerNode is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Database ServerNodeType",
            "description": "N2: Database ServerNode hasNodeType Database ServerNodeType."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestionation",
            "label": "isDestionation",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Interact with DBConnection",
            "description": "N2: Database ServerNode isDestionation Interact with DBConnection."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-3",
            "name": "exposesPort",
            "label": "exposesPort",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "5432Port",
            "description": "N2: Database ServerNode exposesPort 5432Port."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-1",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Client DataAsset",
            "description": "N2: Database ServerNode hostsResource Client DataAsset."
          },
          {
            "id": "yAQWF--oj1ht1P_PKinq-4",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "rVEplnxd9geB-yA5XOS9-2",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Employees DataAsset",
            "description": "N2: Database ServerNode hostsResource Employees DataAsset."
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
            "sourceLabel": "Main-InfraInfrastructure",
            "targetLabel": "N2: Database ServerNode",
            "description": "Main-InfraInfrastructure madeBy N2: Database ServerNode."
          }
        ]
      },
      "position": {
        "x": 1270.0,
        "y": 427.5
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-1",
        "name": "Database ServerNodeType",
        "label": "Database ServerNodeType",
        "instanceName": "Database Server",
        "metamodelEntity": "NodeType",
        "description": "Database ServerNodeType is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Database ServerNodeType",
            "description": "N2: Database ServerNode hasNodeType Database ServerNodeType."
          }
        ]
      },
      "position": {
        "x": 1110.0,
        "y": 555.0
      }
    },
    {
      "data": {
        "id": "flr8XU77myX9OvzYn5zU-6",
        "name": "Desktop ComputerNodeType",
        "label": "Desktop ComputerNodeType",
        "instanceName": "Desktop Computer",
        "metamodelEntity": "NodeType",
        "description": "Desktop ComputerNodeType is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
          }
        ]
      },
      "position": {
        "x": 1540.0,
        "y": 551.21
      }
    },
    {
      "data": {
        "id": "ze9FDJWhSHo_2HU-X0Ti-2",
        "name": "Interact with DBConnection",
        "label": "Interact with DBConnection",
        "instanceName": "Interact with DB",
        "metamodelEntity": "Connection",
        "description": "Interact with DBConnection is a case-study instance of the Connection entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Connection is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "Interact with DBConnection",
            "targetLabel": "5432Port",
            "description": "Interact with DBConnection hasDestinationPort 5432Port."
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
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Interact with DBConnection",
            "description": "N1: WorkstationNode isSource Interact with DBConnection."
          },
          {
            "id": "pADUx78GfB26Rjjpd5Rp-3",
            "name": "isDestionation",
            "label": "isDestionation",
            "kind": "relationship",
            "source": "fOiOA0MLRFIGU3IK7tZ9-1",
            "target": "ze9FDJWhSHo_2HU-X0Ti-2",
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "Interact with DBConnection",
            "description": "N2: Database ServerNode isDestionation Interact with DBConnection."
          }
        ]
      },
      "position": {
        "x": 1410.0,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "pADUx78GfB26Rjjpd5Rp-5",
        "name": "5432Port",
        "label": "5432Port",
        "instanceName": "5432",
        "metamodelEntity": "Port",
        "description": "5432Port is a case-study instance of the Port entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Port is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "N2: Database ServerNode",
            "targetLabel": "5432Port",
            "description": "N2: Database ServerNode exposesPort 5432Port."
          },
          {
            "id": "1qLYpMFIIv6NwulWZkVb-1",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "kind": "relationship",
            "source": "ze9FDJWhSHo_2HU-X0Ti-2",
            "target": "pADUx78GfB26Rjjpd5Rp-5",
            "sourceLabel": "Interact with DBConnection",
            "targetLabel": "5432Port",
            "description": "Interact with DBConnection hasDestinationPort 5432Port."
          }
        ]
      },
      "position": {
        "x": 1260.0,
        "y": 750.0
      }
    },
    {
      "data": {
        "id": "t9Zseuc7trHZRqGckOzh-3",
        "name": "BR1: Organization Data must be ProtectedBusinessRequirement",
        "label": "BR1: Organization Data must be ProtectedBusinessRequirement",
        "instanceName": "BR1: Organization Data must be Protected",
        "metamodelEntity": "BusinessRequirement",
        "description": "BR1: Organization Data must be ProtectedBusinessRequirement is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
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
            "sourceLabel": "CS2OrgOrganization",
            "targetLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "description": "CS2OrgOrganization hasBusinessRequirement BR1: Organization Data must be ProtectedBusinessRequirement."
          }
        ]
      },
      "position": {
        "x": 1070.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "eZx1rzvC6ny3f7PKwibH-3",
        "name": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "label": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "instanceName": "ASR1: Confidentiality of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of DataAssetSecurityRequirement is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of DataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
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
            "sourceLabel": "Client DataAsset",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "Client DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "Employees DataAsset",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "Employees DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
          },
          {
            "id": "eZx1rzvC6ny3f7PKwibH-4",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "eZx1rzvC6ny3f7PKwibH-3",
            "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 840.0,
        "y": 314.0
      }
    },
    {
      "data": {
        "id": "cdA-2u69LmOZn_5sE9tN-2",
        "name": "ASR2: Integrity of DataAssetSecurityRequirement",
        "label": "ASR2: Integrity of DataAssetSecurityRequirement",
        "instanceName": "ASR2: Integrity of Data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR2: Integrity of DataAssetSecurityRequirement is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "sourceLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "targetLabel": "IntegritySecurityRequirement",
            "description": "ASR2: Integrity of DataAssetSecurityRequirement implementationOf IntegritySecurityRequirement."
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
            "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "AS5: Ransomware ExecutionAttackStepItem compromises ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "p9ztlIugojwwJTmJCLig-1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "5fuBaIPhzgW5u_tKo_7_-29",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "T1486TTP",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "T1486TTP impacts ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-6",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-1",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Client DataAsset",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "Client DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "Ry1iGIntjKa-yCpNBPo0-2",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "rVEplnxd9geB-yA5XOS9-2",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "Employees DataAsset",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "Employees DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
          },
          {
            "id": "cdA-2u69LmOZn_5sE9tN-3",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "t9Zseuc7trHZRqGckOzh-3",
            "target": "cdA-2u69LmOZn_5sE9tN-2",
            "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
            "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 586.0,
        "y": 260.0
      }
    },
    {
      "data": {
        "id": "Ry1iGIntjKa-yCpNBPo0-8",
        "name": "IntegritySecurityRequirement",
        "label": "IntegritySecurityRequirement",
        "instanceName": "Integrity",
        "metamodelEntity": "SecurityRequirement",
        "description": "IntegritySecurityRequirement is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "Data EncryptionAttackStep",
            "targetLabel": "IntegritySecurityRequirement",
            "description": "Data EncryptionAttackStep violates IntegritySecurityRequirement."
          },
          {
            "id": "YudfH6V3qxk8uhn8DXTI-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "cdA-2u69LmOZn_5sE9tN-2",
            "target": "Ry1iGIntjKa-yCpNBPo0-8",
            "sourceLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
            "targetLabel": "IntegritySecurityRequirement",
            "description": "ASR2: Integrity of DataAssetSecurityRequirement implementationOf IntegritySecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 140.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "zYwYgb49FxiR_k0q7Q0m-1",
        "name": "ConfidentialitySecurityRequirement",
        "label": "ConfidentialitySecurityRequirement",
        "instanceName": "Confidentiality",
        "metamodelEntity": "SecurityRequirement",
        "description": "ConfidentialitySecurityRequirement is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "sourceLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of DataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 550.0,
        "y": 140.0
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
        "sourceLabel": "CS2OrgOrganization",
        "targetLabel": "Main-InfraInfrastructure",
        "description": "CS2OrgOrganization manages Main-InfraInfrastructure."
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
        "sourceLabel": "CS2OrgOrganization",
        "targetLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
        "description": "CS2OrgOrganization hasBusinessRequirement BR1: Organization Data must be ProtectedBusinessRequirement."
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
        "sourceLabel": "Main-InfraInfrastructure",
        "targetLabel": "U1: Employee 1User",
        "description": "Main-InfraInfrastructure usedBy U1: Employee 1User."
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
        "sourceLabel": "Main-InfraInfrastructure",
        "targetLabel": "N1: WorkstationNode",
        "description": "Main-InfraInfrastructure madeBy N1: WorkstationNode."
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
        "sourceLabel": "Main-InfraInfrastructure",
        "targetLabel": "N2: Database ServerNode",
        "description": "Main-InfraInfrastructure madeBy N2: Database ServerNode."
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
        "sourceLabel": "UnknownThreatSource",
        "targetLabel": "Ransomware AttackThreatEvent",
        "description": "UnknownThreatSource initiates Ransomware AttackThreatEvent."
      }
    },
    {
      "data": {
        "id": "isKCdTBRIcX7ZzF2_SF_-7",
        "name": "relatedTo",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "DXTTVG0T_Y0voirAc8tk-13",
        "target": "isKCdTBRIcX7ZzF2_SF_-5",
        "sourceLabel": "Ransomware AttackThreatEvent",
        "targetLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "description": "Ransomware AttackThreatEvent relatedTo AS1: Phishing Attack with Weaponized DocumentAttackStepItem."
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
        "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "targetLabel": "AS2: BazarLoader ExecutionAttackStepItem",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem followedBy AS2: BazarLoader ExecutionAttackStepItem."
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
        "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem exploits Prone to PhishingHumanVulnerability."
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
        "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
        "targetLabel": "BazarLoaderAttackToolInstance",
        "description": "AS2: BazarLoader ExecutionAttackStepItem employs BazarLoaderAttackToolInstance."
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
        "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "targetLabel": "Phishing with AttachmentAttackStep",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem refersTo Phishing with AttachmentAttackStep."
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
        "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "targetLabel": "T1566.001TTP",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem implements T1566.001TTP."
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
        "sourceLabel": "T1566.001TTP",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "T1566.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
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
        "sourceLabel": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem",
        "targetLabel": "Weaponized DocumentAttackToolInstance",
        "description": "AS1: Phishing Attack with Weaponized DocumentAttackStepItem employs Weaponized DocumentAttackToolInstance."
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
        "sourceLabel": "Weaponized DocumentAttackToolInstance",
        "targetLabel": "Office DocumentAttackTool",
        "description": "Weaponized DocumentAttackToolInstance instanceOf Office DocumentAttackTool."
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
        "sourceLabel": "Weaponized DocumentAttackToolInstance",
        "targetLabel": "BazarLoaderAttackToolInstance",
        "description": "Weaponized DocumentAttackToolInstance deploys BazarLoaderAttackToolInstance."
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
        "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
        "targetLabel": "Install Malicious SoftwareAttackStep",
        "description": "AS2: BazarLoader ExecutionAttackStepItem refersTo Install Malicious SoftwareAttackStep."
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
        "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
        "targetLabel": "T1105TTP",
        "description": "AS2: BazarLoader ExecutionAttackStepItem implements T1105TTP."
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
        "sourceLabel": "Prone to PhishingHumanVulnerability",
        "targetLabel": "U1: Employee 1User",
        "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
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
        "sourceLabel": "U1: Employee 1User",
        "targetLabel": "N1: WorkstationNode",
        "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
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
        "sourceLabel": "AS2: BazarLoader ExecutionAttackStepItem",
        "targetLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
        "description": "AS2: BazarLoader ExecutionAttackStepItem followedBy AS3: Infrastructure DiscoveryAttackStepItem."
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
        "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
        "targetLabel": "Remote System DiscoveryAttackStep",
        "description": "AS3: Infrastructure DiscoveryAttackStepItem refersTo Remote System DiscoveryAttackStep."
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
        "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
        "targetLabel": "T1018TTP",
        "description": "AS3: Infrastructure DiscoveryAttackStepItem implements T1018TTP."
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
        "sourceLabel": "AS3: Infrastructure DiscoveryAttackStepItem",
        "targetLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "description": "AS3: Infrastructure DiscoveryAttackStepItem followedBy AS4: Lateral Movement to Other NodesAttackStepItem."
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
        "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "targetLabel": "Lateral MovementAttackStep",
        "description": "AS4: Lateral Movement to Other NodesAttackStepItem refersTo Lateral MovementAttackStep."
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
        "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "targetLabel": "T1570TTP",
        "description": "AS4: Lateral Movement to Other NodesAttackStepItem implements T1570TTP."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "Client DataAsset",
        "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Client DataAsset."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "Employees DataAsset",
        "description": "AS5: Ransomware ExecutionAttackStepItem targetsResource Employees DataAsset."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "description": "AS5: Ransomware ExecutionAttackStepItem compromises ASR2: Integrity of DataAssetSecurityRequirement."
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
        "sourceLabel": "AS4: Lateral Movement to Other NodesAttackStepItem",
        "targetLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "description": "AS4: Lateral Movement to Other NodesAttackStepItem followedBy AS5: Ransomware ExecutionAttackStepItem."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "Data EncryptionAttackStep",
        "description": "AS5: Ransomware ExecutionAttackStepItem refersTo Data EncryptionAttackStep."
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
        "sourceLabel": "Data EncryptionAttackStep",
        "targetLabel": "IntegritySecurityRequirement",
        "description": "Data EncryptionAttackStep violates IntegritySecurityRequirement."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "T1486TTP",
        "description": "AS5: Ransomware ExecutionAttackStepItem implements T1486TTP."
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
        "sourceLabel": "T1486TTP",
        "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "description": "T1486TTP impacts ASR2: Integrity of DataAssetSecurityRequirement."
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
        "sourceLabel": "AS5: Ransomware ExecutionAttackStepItem",
        "targetLabel": "Conti InstanceAttackToolInstance",
        "description": "AS5: Ransomware ExecutionAttackStepItem employs Conti InstanceAttackToolInstance."
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
        "sourceLabel": "Conti InstanceAttackToolInstance",
        "targetLabel": "ContiAttackTool",
        "description": "Conti InstanceAttackToolInstance instanceOf ContiAttackTool."
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
        "sourceLabel": "Client DataAsset",
        "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "description": "Client DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
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
        "sourceLabel": "Client DataAsset",
        "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "description": "Client DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
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
        "sourceLabel": "Employees DataAsset",
        "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "description": "Employees DataAsset hasSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
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
        "sourceLabel": "Employees DataAsset",
        "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "description": "Employees DataAsset hasSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
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
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Interact with DBConnection",
        "description": "N1: WorkstationNode isSource Interact with DBConnection."
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
        "sourceLabel": "N2: Database ServerNode",
        "targetLabel": "Database ServerNodeType",
        "description": "N2: Database ServerNode hasNodeType Database ServerNodeType."
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
        "sourceLabel": "N2: Database ServerNode",
        "targetLabel": "Interact with DBConnection",
        "description": "N2: Database ServerNode isDestionation Interact with DBConnection."
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
        "sourceLabel": "N2: Database ServerNode",
        "targetLabel": "5432Port",
        "description": "N2: Database ServerNode exposesPort 5432Port."
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
        "sourceLabel": "N2: Database ServerNode",
        "targetLabel": "Client DataAsset",
        "description": "N2: Database ServerNode hostsResource Client DataAsset."
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
        "sourceLabel": "N2: Database ServerNode",
        "targetLabel": "Employees DataAsset",
        "description": "N2: Database ServerNode hostsResource Employees DataAsset."
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
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Desktop ComputerNodeType",
        "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
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
        "sourceLabel": "Interact with DBConnection",
        "targetLabel": "5432Port",
        "description": "Interact with DBConnection hasDestinationPort 5432Port."
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
        "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
        "targetLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of DataAssetSecurityRequirement."
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
        "sourceLabel": "BR1: Organization Data must be ProtectedBusinessRequirement",
        "targetLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "description": "BR1: Organization Data must be ProtectedBusinessRequirement drivesSecurityRequirement ASR2: Integrity of DataAssetSecurityRequirement."
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
        "sourceLabel": "ASR1: Confidentiality of DataAssetSecurityRequirement",
        "targetLabel": "ConfidentialitySecurityRequirement",
        "description": "ASR1: Confidentiality of DataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
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
        "sourceLabel": "ASR2: Integrity of DataAssetSecurityRequirement",
        "targetLabel": "IntegritySecurityRequirement",
        "description": "ASR2: Integrity of DataAssetSecurityRequirement implementationOf IntegritySecurityRequirement."
      }
    }
  ]
};
