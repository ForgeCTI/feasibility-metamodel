const caseData = {
  "metadata": {
    "id": "cs3",
    "title": "CS3 \u2014 Cloud/SaaS exposure and data exfiltration",
    "shortTitle": "Cloud/SaaS exposure and data exfiltration",
    "description": "This case implementation instantiates a cloud/SaaS exposure scenario involving social engineering, credential and MFA acquisition, connected-application authorization, access to Salesforce data repositories, API-driven bulk exfiltration, and confidentiality impact on customer data.",
    "source": "metamodel_v2-case3.drawio.xml",
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
    "layout": {
      "minX": -810.0,
      "minY": 290.0,
      "maxX": 910.0,
      "maxY": 1080.0,
      "width": 2000.0,
      "height": 1070.0,
      "padding": 140
    }
  },
  "nodes": [
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-13",
        "name": "UNC6040ThreatSource",
        "label": "UNC6040ThreatSource",
        "instanceName": "UNC6040",
        "metamodelEntity": "ThreatSource",
        "description": "UNC6040ThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 367.0,
          "y": 340.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "W-R75xxI9TsONGAs6iK0-16",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "ShinyHuntersAdversary",
            "description": "UNC6040ThreatSource relatedTo ShinyHuntersAdversary."
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-11",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "Attack against OrganizationThreatEvent",
            "description": "UNC6040ThreatSource initiates Attack against OrganizationThreatEvent."
          },
          {
            "id": "skMsq092CygeLry3JUE3-2",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "skMsq092CygeLry3JUE3-1",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "UNC6240ThreatSource",
            "description": "UNC6040ThreatSource alias UNC6240ThreatSource."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1317.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-16",
        "name": "ShinyHuntersAdversary",
        "label": "ShinyHuntersAdversary",
        "instanceName": "ShinyHunters",
        "metamodelEntity": "Adversary",
        "description": "ShinyHuntersAdversary is a case-study instance of the Adversary entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Adversary is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 567.0,
          "y": 340.0,
          "width": 130.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-14",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-16",
            "target": "W-R75xxI9TsONGAs6iK0-17",
            "sourceLabel": "ShinyHuntersAdversary",
            "targetLabel": "Criminal GroupAdversaryType",
            "description": "ShinyHuntersAdversary hasAdversaryType Criminal GroupAdversaryType."
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-7",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "W-R75xxI9TsONGAs6iK0-16",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "ShinyHuntersAdversary",
            "description": "UNC6040ThreatSource relatedTo ShinyHuntersAdversary."
          }
        ]
      },
      "position": {
        "x": 1517.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-17",
        "name": "Criminal GroupAdversaryType",
        "label": "Criminal GroupAdversaryType",
        "instanceName": "Criminal Group",
        "metamodelEntity": "AdversaryType",
        "description": "Criminal GroupAdversaryType is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AdversaryType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 567.0,
          "y": 420.0,
          "width": 130.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-14",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-16",
            "target": "W-R75xxI9TsONGAs6iK0-17",
            "sourceLabel": "ShinyHuntersAdversary",
            "targetLabel": "Criminal GroupAdversaryType",
            "description": "ShinyHuntersAdversary hasAdversaryType Criminal GroupAdversaryType."
          }
        ]
      },
      "position": {
        "x": 1517.0,
        "y": 270.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-23",
        "name": "Attack against OrganizationThreatEvent",
        "label": "Attack against OrganizationThreatEvent",
        "instanceName": "Attack against Organization",
        "metamodelEntity": "ThreatEvent",
        "description": "Attack against OrganizationThreatEvent is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 367.0,
          "y": 430.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-19",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "target": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "Attack against OrganizationThreatEvent",
            "targetLabel": "AS1:AttackStepItem",
            "description": "Attack against OrganizationThreatEvent startsWith AS1:AttackStepItem."
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-21",
            "name": "partsOf",
            "label": "partsOf",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "target": "W-R75xxI9TsONGAs6iK0-47",
            "sourceLabel": "Attack against OrganizationThreatEvent",
            "targetLabel": "Vishing Campaign againstCampaign",
            "description": "Attack against OrganizationThreatEvent partsOf Vishing Campaign againstCampaign."
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-11",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "W-R75xxI9TsONGAs6iK0-23",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "Attack against OrganizationThreatEvent",
            "description": "UNC6040ThreatSource initiates Attack against OrganizationThreatEvent."
          }
        ]
      },
      "position": {
        "x": 1317.0,
        "y": 280.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-30",
        "name": "AS1:AttackStepItem",
        "label": "AS1:AttackStepItem",
        "instanceName": "AS1:",
        "metamodelEntity": "AttackStepItem",
        "description": "AS1:AttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 332.0,
          "y": 520.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-24",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-31",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "Phishing using VoiceAttackStep",
            "description": "AS1:AttackStepItem refersTo Phishing using VoiceAttackStep."
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-26",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-32",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "T1598.004TTP",
            "description": "AS1:AttackStepItem implements T1598.004TTP."
          },
          {
            "id": "W-R75xxI9TsONGAs6iK0-28",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "AS2:AttackStepItem",
            "description": "AS1:AttackStepItem followedBy AS2:AttackStepItem."
          },
          {
            "id": "NNmBX69VpKK8D-qhwx8O-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1:AttackStepItem exploits Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-19",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "target": "W-R75xxI9TsONGAs6iK0-30",
            "sourceLabel": "Attack against OrganizationThreatEvent",
            "targetLabel": "AS1:AttackStepItem",
            "description": "Attack against OrganizationThreatEvent startsWith AS1:AttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1282.0,
        "y": 370.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-31",
        "name": "Phishing using VoiceAttackStep",
        "label": "Phishing using VoiceAttackStep",
        "instanceName": "Phishing using Voice",
        "metamodelEntity": "AttackStep",
        "description": "Phishing using VoiceAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 130.0,
          "y": 460.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-24",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-31",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "Phishing using VoiceAttackStep",
            "description": "AS1:AttackStepItem refersTo Phishing using VoiceAttackStep."
          }
        ]
      },
      "position": {
        "x": 1080.0,
        "y": 310.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-32",
        "name": "T1598.004TTP",
        "label": "T1598.004TTP",
        "instanceName": "T1598.004",
        "metamodelEntity": "TTP",
        "description": "T1598.004TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 632.0,
          "y": 520.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "N9GxJEYAAonVYKU6PBBE-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-32",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "T1598.004TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1598.004TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-26",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-32",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "T1598.004TTP",
            "description": "AS1:AttackStepItem implements T1598.004TTP."
          }
        ]
      },
      "position": {
        "x": 1582.0,
        "y": 370.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-38",
        "name": "AS2:AttackStepItem",
        "label": "AS2:AttackStepItem",
        "instanceName": "AS2:",
        "metamodelEntity": "AttackStepItem",
        "description": "AS2:AttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 332.0,
          "y": 630.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-34",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "W-R75xxI9TsONGAs6iK0-40",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "T1078.004TTP",
            "description": "AS2:AttackStepItem implements T1078.004TTP."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-2",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "AS3:AttackStepItem",
            "description": "AS2:AttackStepItem followedBy AS3:AttackStepItem."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-23",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "vjJMpfVSzzf0KPU9cpzq-25",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "Access with Valid AccountsAttackStep",
            "description": "AS2:AttackStepItem refersTo Access with Valid AccountsAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-28",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "W-R75xxI9TsONGAs6iK0-38",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "AS2:AttackStepItem",
            "description": "AS1:AttackStepItem followedBy AS2:AttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1282.0,
        "y": 480.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-40",
        "name": "T1078.004TTP",
        "label": "T1078.004TTP",
        "instanceName": "T1078.004",
        "metamodelEntity": "TTP",
        "description": "T1078.004TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 632.0,
          "y": 635.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-34",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "W-R75xxI9TsONGAs6iK0-40",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "T1078.004TTP",
            "description": "AS2:AttackStepItem implements T1078.004TTP."
          }
        ]
      },
      "position": {
        "x": 1582.0,
        "y": 485.0
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-47",
        "name": "Vishing Campaign againstCampaign",
        "label": "Vishing Campaign againstCampaign",
        "instanceName": "Vishing Campaign against",
        "metamodelEntity": "Campaign",
        "description": "Vishing Campaign againstCampaign is a case-study instance of the Campaign entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Campaign is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 730.0,
          "y": 480.0,
          "width": 180.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W-R75xxI9TsONGAs6iK0-21",
            "name": "partsOf",
            "label": "partsOf",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-23",
            "target": "W-R75xxI9TsONGAs6iK0-47",
            "sourceLabel": "Attack against OrganizationThreatEvent",
            "targetLabel": "Vishing Campaign againstCampaign",
            "description": "Attack against OrganizationThreatEvent partsOf Vishing Campaign againstCampaign."
          }
        ]
      },
      "position": {
        "x": 1680.0,
        "y": 330.0
      }
    },
    {
      "data": {
        "id": "skMsq092CygeLry3JUE3-1",
        "name": "UNC6240ThreatSource",
        "label": "UNC6240ThreatSource",
        "instanceName": "UNC6240",
        "metamodelEntity": "ThreatSource",
        "description": "UNC6240ThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 190.0,
          "y": 290.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "skMsq092CygeLry3JUE3-2",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-13",
            "target": "skMsq092CygeLry3JUE3-1",
            "sourceLabel": "UNC6040ThreatSource",
            "targetLabel": "UNC6240ThreatSource",
            "description": "UNC6040ThreatSource alias UNC6240ThreatSource."
          }
        ]
      },
      "position": {
        "x": 1140.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-5",
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
          "x": -50.0,
          "y": 510.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "NNmBX69VpKK8D-qhwx8O-3",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "NNmBX69VpKK8D-qhwx8O-5",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
          }
        ],
        "incomingRelations": [
          {
            "id": "N9GxJEYAAonVYKU6PBBE-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-32",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "T1598.004TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1598.004TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          },
          {
            "id": "NNmBX69VpKK8D-qhwx8O-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-30",
            "target": "NNmBX69VpKK8D-qhwx8O-5",
            "sourceLabel": "AS1:AttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1:AttackStepItem exploits Prone to PhishingHumanVulnerability."
          }
        ]
      },
      "position": {
        "x": 900.0,
        "y": 360.0
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-6",
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
          "x": -260.0,
          "y": 585.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "6OHgOMSIGVsn-Z9V46qd-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "target": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
          }
        ],
        "incomingRelations": [
          {
            "id": "NNmBX69VpKK8D-qhwx8O-3",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "NNmBX69VpKK8D-qhwx8O-5",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
          },
          {
            "id": "NXt1BKSTyLYTvNq0OA_7-2",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-2",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
          }
        ]
      },
      "position": {
        "x": 690.0,
        "y": 435.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-1",
        "name": "AS3:AttackStepItem",
        "label": "AS3:AttackStepItem",
        "instanceName": "AS3:",
        "metamodelEntity": "AttackStepItem",
        "description": "AS3:AttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 332.0,
          "y": 740.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-9",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "AS4:AttackStepItem",
            "description": "AS3:AttackStepItem followedBy AS4:AttackStepItem."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-5",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-7",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "T1671TTP",
            "description": "AS3:AttackStepItem implements T1671TTP."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-26",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-28",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "Use of Third-Party ApplicationsAttackStep",
            "description": "AS3:AttackStepItem refersTo Use of Third-Party ApplicationsAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-2",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "vjJMpfVSzzf0KPU9cpzq-1",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "AS3:AttackStepItem",
            "description": "AS2:AttackStepItem followedBy AS3:AttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1282.0,
        "y": 590.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-7",
        "name": "T1671TTP",
        "label": "T1671TTP",
        "instanceName": "T1671",
        "metamodelEntity": "TTP",
        "description": "T1671TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 632.0,
          "y": 745.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-5",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-7",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "T1671TTP",
            "description": "AS3:AttackStepItem implements T1671TTP."
          }
        ]
      },
      "position": {
        "x": 1582.0,
        "y": 595.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-8",
        "name": "AS4:AttackStepItem",
        "label": "AS4:AttackStepItem",
        "instanceName": "AS4:",
        "metamodelEntity": "AttackStepItem",
        "description": "AS4:AttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 332.0,
          "y": 840.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-12",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-11",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "T1213.004TTP",
            "description": "AS4:AttackStepItem implements T1213.004TTP."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-15",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "AS5:AttackStepItem",
            "description": "AS4:AttackStepItem followedBy AS5:AttackStepItem."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-29",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-31",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "Access to Data RepositoryAttackStep",
            "description": "AS4:AttackStepItem refersTo Access to Data RepositoryAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-9",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-8",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "AS4:AttackStepItem",
            "description": "AS3:AttackStepItem followedBy AS4:AttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1282.0,
        "y": 690.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-11",
        "name": "T1213.004TTP",
        "label": "T1213.004TTP",
        "instanceName": "T1213.004",
        "metamodelEntity": "TTP",
        "description": "T1213.004TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 632.0,
          "y": 845.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-12",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-11",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "T1213.004TTP",
            "description": "AS4:AttackStepItem implements T1213.004TTP."
          }
        ]
      },
      "position": {
        "x": 1582.0,
        "y": 695.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-14",
        "name": "AS5:AttackStepItem",
        "label": "AS5:AttackStepItem",
        "instanceName": "AS5:",
        "metamodelEntity": "AttackStepItem",
        "description": "AS5:AttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 332.0,
          "y": 930.0,
          "width": 190.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "WM2iYkWpVkoMOjJOuhxM-2",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "Customer DataAsset",
            "description": "AS5:AttackStepItem targetsResource Customer DataAsset."
          },
          {
            "id": "qIbVtnW74JoUNaZ4yXt5-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "AS5:AttackStepItem compromises ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-17",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "vjJMpfVSzzf0KPU9cpzq-19",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "T1048TTP",
            "description": "AS5:AttackStepItem implements T1048TTP."
          },
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-32",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "vjJMpfVSzzf0KPU9cpzq-34",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "Data ExfiltrationAttackStep",
            "description": "AS5:AttackStepItem refersTo Data ExfiltrationAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-15",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-14",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "AS5:AttackStepItem",
            "description": "AS4:AttackStepItem followedBy AS5:AttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1282.0,
        "y": 780.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-19",
        "name": "T1048TTP",
        "label": "T1048TTP",
        "instanceName": "T1048",
        "metamodelEntity": "TTP",
        "description": "T1048TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 632.0,
          "y": 935.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "X7-cyEW40f5yK0x9vZF--1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-19",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "T1048TTP",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "T1048TTP impacts ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-17",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "vjJMpfVSzzf0KPU9cpzq-19",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "T1048TTP",
            "description": "AS5:AttackStepItem implements T1048TTP."
          }
        ]
      },
      "position": {
        "x": 1582.0,
        "y": 785.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-25",
        "name": "Access with Valid AccountsAttackStep",
        "label": "Access with Valid AccountsAttackStep",
        "instanceName": "Access with Valid Accounts",
        "metamodelEntity": "AttackStep",
        "description": "Access with Valid AccountsAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 100.0,
          "y": 630.0,
          "width": 140.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-23",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "W-R75xxI9TsONGAs6iK0-38",
            "target": "vjJMpfVSzzf0KPU9cpzq-25",
            "sourceLabel": "AS2:AttackStepItem",
            "targetLabel": "Access with Valid AccountsAttackStep",
            "description": "AS2:AttackStepItem refersTo Access with Valid AccountsAttackStep."
          }
        ]
      },
      "position": {
        "x": 1050.0,
        "y": 480.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-28",
        "name": "Use of Third-Party ApplicationsAttackStep",
        "label": "Use of Third-Party ApplicationsAttackStep",
        "instanceName": "Use of Third-Party Applications",
        "metamodelEntity": "AttackStep",
        "description": "Use of Third-Party ApplicationsAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 100.0,
          "y": 740.0,
          "width": 140.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-26",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-1",
            "target": "vjJMpfVSzzf0KPU9cpzq-28",
            "sourceLabel": "AS3:AttackStepItem",
            "targetLabel": "Use of Third-Party ApplicationsAttackStep",
            "description": "AS3:AttackStepItem refersTo Use of Third-Party ApplicationsAttackStep."
          }
        ]
      },
      "position": {
        "x": 1050.0,
        "y": 590.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-31",
        "name": "Access to Data RepositoryAttackStep",
        "label": "Access to Data RepositoryAttackStep",
        "instanceName": "Access to Data Repository",
        "metamodelEntity": "AttackStep",
        "description": "Access to Data RepositoryAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 100.0,
          "y": 840.0,
          "width": 140.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-29",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-8",
            "target": "vjJMpfVSzzf0KPU9cpzq-31",
            "sourceLabel": "AS4:AttackStepItem",
            "targetLabel": "Access to Data RepositoryAttackStep",
            "description": "AS4:AttackStepItem refersTo Access to Data RepositoryAttackStep."
          }
        ]
      },
      "position": {
        "x": 1050.0,
        "y": 690.0
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-34",
        "name": "Data ExfiltrationAttackStep",
        "label": "Data ExfiltrationAttackStep",
        "instanceName": "Data Exfiltration",
        "metamodelEntity": "AttackStep",
        "description": "Data ExfiltrationAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 100.0,
          "y": 935.0,
          "width": 140.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "Ep7i6ejaYqTg5r7JC2yi-2",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-34",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "sourceLabel": "Data ExfiltrationAttackStep",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "Data ExfiltrationAttackStep violates ConfidentialitySecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "vjJMpfVSzzf0KPU9cpzq-32",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "vjJMpfVSzzf0KPU9cpzq-34",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "Data ExfiltrationAttackStep",
            "description": "AS5:AttackStepItem refersTo Data ExfiltrationAttackStep."
          }
        ]
      },
      "position": {
        "x": 1050.0,
        "y": 785.0
      }
    },
    {
      "data": {
        "id": "WM2iYkWpVkoMOjJOuhxM-1",
        "name": "Customer DataAsset",
        "label": "Customer DataAsset",
        "instanceName": "Customer Data",
        "metamodelEntity": "Asset",
        "description": "Customer DataAsset is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -120.0,
          "y": 1030.0,
          "width": 140.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "1MHW0WUUoP0wR_9WGbNa-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "WM2iYkWpVkoMOjJOuhxM-1",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "Customer DataAsset",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "Customer DataAsset hasSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "WM2iYkWpVkoMOjJOuhxM-2",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "Customer DataAsset",
            "description": "AS5:AttackStepItem targetsResource Customer DataAsset."
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-5",
            "name": "hosts",
            "label": "hosts",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Customer DataAsset",
            "description": "N2: Salesforce EndpointNode hosts Customer DataAsset."
          }
        ]
      },
      "position": {
        "x": 830.0,
        "y": 880.0
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-1",
        "name": "OrgCS3Organization",
        "label": "OrgCS3Organization",
        "instanceName": "OrgCS3",
        "metamodelEntity": "Organization",
        "description": "OrgCS3Organization is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -390.0,
          "y": 290.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-3",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-1",
            "target": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "OrgCS3Organization",
            "targetLabel": "Prod-InfraInfrastructure",
            "description": "OrgCS3Organization manages Prod-InfraInfrastructure."
          },
          {
            "id": "eVn5_GdqCaxl72IHBsPH-1",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-1",
            "target": "eVn5_GdqCaxl72IHBsPH-3",
            "sourceLabel": "OrgCS3Organization",
            "targetLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
            "description": "OrgCS3Organization hasBusinessRequirement BR1: Customer data must remain confidentialBusinessRequirement."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 560.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-2",
        "name": "Prod-InfraInfrastructure",
        "label": "Prod-InfraInfrastructure",
        "instanceName": "Prod-Infra",
        "metamodelEntity": "Infrastructure",
        "description": "Prod-InfraInfrastructure is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -390.0,
          "y": 385.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-6",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-2",
            "target": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
          },
          {
            "id": "NXt1BKSTyLYTvNq0OA_7-2",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-2",
            "target": "NNmBX69VpKK8D-qhwx8O-6",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
          }
        ],
        "incomingRelations": [
          {
            "id": "WuCqMy39X08569D0n-v9-3",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-1",
            "target": "WuCqMy39X08569D0n-v9-2",
            "sourceLabel": "OrgCS3Organization",
            "targetLabel": "Prod-InfraInfrastructure",
            "description": "OrgCS3Organization manages Prod-InfraInfrastructure."
          }
        ]
      },
      "position": {
        "x": 560.0,
        "y": 235.0
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-5",
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
          "x": -430.0,
          "y": 720.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "1wYscN70OxNXywWxwdxa-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-5",
            "target": "1wYscN70OxNXywWxwdxa-1",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-3",
            "name": "isSource",
            "label": "isSource",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-5",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Salesforce Data ManagementConnection",
            "description": "N1: WorkstationNode isSource Salesforce Data ManagementConnection."
          }
        ],
        "incomingRelations": [
          {
            "id": "6OHgOMSIGVsn-Z9V46qd-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "NNmBX69VpKK8D-qhwx8O-6",
            "target": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
          },
          {
            "id": "WuCqMy39X08569D0n-v9-6",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-2",
            "target": "WuCqMy39X08569D0n-v9-5",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
          }
        ]
      },
      "position": {
        "x": 520.0,
        "y": 570.0
      }
    },
    {
      "data": {
        "id": "eVn5_GdqCaxl72IHBsPH-3",
        "name": "BR1: Customer data must remain confidentialBusinessRequirement",
        "label": "BR1: Customer data must remain confidentialBusinessRequirement",
        "instanceName": "BR1: Customer data must remain confidential",
        "metamodelEntity": "BusinessRequirement",
        "description": "BR1: Customer data must remain confidentialBusinessRequirement is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -650.0,
          "y": 560.0,
          "width": 170.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "F2QGTwjoN-LEskWlSwwC-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "eVn5_GdqCaxl72IHBsPH-3",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "BR1: Customer data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "eVn5_GdqCaxl72IHBsPH-1",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-1",
            "target": "eVn5_GdqCaxl72IHBsPH-3",
            "sourceLabel": "OrgCS3Organization",
            "targetLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
            "description": "OrgCS3Organization hasBusinessRequirement BR1: Customer data must remain confidentialBusinessRequirement."
          }
        ]
      },
      "position": {
        "x": 300.0,
        "y": 410.0
      }
    },
    {
      "data": {
        "id": "F2QGTwjoN-LEskWlSwwC-3",
        "name": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "label": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "instanceName": "ASR1: Confidentiality of customer data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of customer dataAssetSecurityRequirement is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -650.0,
          "y": 650.0,
          "width": 170.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "mkfqWY7xLTyuWZQTjFYf-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "F2QGTwjoN-LEskWlSwwC-3",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "sourceLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of customer dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "qIbVtnW74JoUNaZ4yXt5-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-14",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "AS5:AttackStepItem",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "AS5:AttackStepItem compromises ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          },
          {
            "id": "X7-cyEW40f5yK0x9vZF--1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-19",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "T1048TTP",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "T1048TTP impacts ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          },
          {
            "id": "1MHW0WUUoP0wR_9WGbNa-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "WM2iYkWpVkoMOjJOuhxM-1",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "Customer DataAsset",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "Customer DataAsset hasSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          },
          {
            "id": "F2QGTwjoN-LEskWlSwwC-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "eVn5_GdqCaxl72IHBsPH-3",
            "target": "F2QGTwjoN-LEskWlSwwC-3",
            "sourceLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "description": "BR1: Customer data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 300.0,
        "y": 500.0
      }
    },
    {
      "data": {
        "id": "1wYscN70OxNXywWxwdxa-1",
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
          "x": -520.0,
          "y": 820.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1wYscN70OxNXywWxwdxa-2",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-5",
            "target": "1wYscN70OxNXywWxwdxa-1",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
          }
        ]
      },
      "position": {
        "x": 430.0,
        "y": 670.0
      }
    },
    {
      "data": {
        "id": "_mnEyO-uEHkzOZovGcnc-2",
        "name": "Salesforce ServiceApplicationInstance",
        "label": "Salesforce ServiceApplicationInstance",
        "instanceName": "Salesforce Service",
        "metamodelEntity": "ApplicationInstance",
        "description": "Salesforce ServiceApplicationInstance is a case-study instance of the ApplicationInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ApplicationInstance is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -330.0,
          "y": 842.5,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "puR0N-drRlthi1GJN4Xb-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "_mnEyO-uEHkzOZovGcnc-2",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Salesforce ServiceApplicationInstance",
            "description": "N2: Salesforce EndpointNode hostsResource Salesforce ServiceApplicationInstance."
          }
        ]
      },
      "position": {
        "x": 620.0,
        "y": 692.5
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-1",
        "name": "N2: Salesforce EndpointNode",
        "label": "N2: Salesforce EndpointNode",
        "instanceName": "N2: Salesforce Endpoint",
        "metamodelEntity": "Node",
        "description": "N2: Salesforce EndpointNode is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -140.0,
          "y": 910.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "puR0N-drRlthi1GJN4Xb-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "_mnEyO-uEHkzOZovGcnc-2",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Salesforce ServiceApplicationInstance",
            "description": "N2: Salesforce EndpointNode hostsResource Salesforce ServiceApplicationInstance."
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-3",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "1v_T7K9QPGvpQHMeIzBd-2",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Web Application ServerNodeType",
            "description": "N2: Salesforce EndpointNode hasNodeType Web Application ServerNodeType."
          },
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-5",
            "name": "hosts",
            "label": "hosts",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "WM2iYkWpVkoMOjJOuhxM-1",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Customer DataAsset",
            "description": "N2: Salesforce EndpointNode hosts Customer DataAsset."
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-1",
            "name": "isDestination",
            "label": "isDestination",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Salesforce Data ManagementConnection",
            "description": "N2: Salesforce EndpointNode isDestination Salesforce Data ManagementConnection."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 810.0,
        "y": 760.0
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-2",
        "name": "Web Application ServerNodeType",
        "label": "Web Application ServerNodeType",
        "instanceName": "Web Application Server",
        "metamodelEntity": "NodeType",
        "description": "Web Application ServerNodeType is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": -340.0,
          "y": 970.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1v_T7K9QPGvpQHMeIzBd-3",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "1v_T7K9QPGvpQHMeIzBd-2",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Web Application ServerNodeType",
            "description": "N2: Salesforce EndpointNode hasNodeType Web Application ServerNodeType."
          }
        ]
      },
      "position": {
        "x": 610.0,
        "y": 820.0
      }
    },
    {
      "data": {
        "id": "wTd-3MmVqCO39iPhYjD6-1",
        "name": "Salesforce Data ManagementConnection",
        "label": "Salesforce Data ManagementConnection",
        "instanceName": "Salesforce Data Management",
        "metamodelEntity": "Connection",
        "description": "Salesforce Data ManagementConnection is a case-study instance of the Connection entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Connection is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -140.0,
          "y": 810.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-3",
            "name": "isSource",
            "label": "isSource",
            "kind": "relationship",
            "source": "WuCqMy39X08569D0n-v9-5",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Salesforce Data ManagementConnection",
            "description": "N1: WorkstationNode isSource Salesforce Data ManagementConnection."
          },
          {
            "id": "XNSAvHdaGQ6QdSv4knAv-1",
            "name": "isDestination",
            "label": "isDestination",
            "kind": "relationship",
            "source": "1v_T7K9QPGvpQHMeIzBd-1",
            "target": "wTd-3MmVqCO39iPhYjD6-1",
            "sourceLabel": "N2: Salesforce EndpointNode",
            "targetLabel": "Salesforce Data ManagementConnection",
            "description": "N2: Salesforce EndpointNode isDestination Salesforce Data ManagementConnection."
          }
        ]
      },
      "position": {
        "x": 810.0,
        "y": 660.0
      }
    },
    {
      "data": {
        "id": "mkfqWY7xLTyuWZQTjFYf-2",
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
          "x": -810.0,
          "y": 730.0,
          "width": 170.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Ep7i6ejaYqTg5r7JC2yi-2",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "vjJMpfVSzzf0KPU9cpzq-34",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "sourceLabel": "Data ExfiltrationAttackStep",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "Data ExfiltrationAttackStep violates ConfidentialitySecurityRequirement."
          },
          {
            "id": "mkfqWY7xLTyuWZQTjFYf-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "F2QGTwjoN-LEskWlSwwC-3",
            "target": "mkfqWY7xLTyuWZQTjFYf-2",
            "sourceLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of customer dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 140.0,
        "y": 580.0
      }
    },
    {
      "data": {
        "id": "YhZtFUfz3gu3ujqHkUbh-1",
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
          "x": -120.0,
          "y": 675.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": []
      },
      "position": {
        "x": 830.0,
        "y": 525.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-7",
        "name": "relatedTo",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "W-R75xxI9TsONGAs6iK0-16",
        "sourceLabel": "UNC6040ThreatSource",
        "targetLabel": "ShinyHuntersAdversary",
        "description": "UNC6040ThreatSource relatedTo ShinyHuntersAdversary."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-11",
        "name": "initiates",
        "label": "initiates",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "W-R75xxI9TsONGAs6iK0-23",
        "sourceLabel": "UNC6040ThreatSource",
        "targetLabel": "Attack against OrganizationThreatEvent",
        "description": "UNC6040ThreatSource initiates Attack against OrganizationThreatEvent."
      }
    },
    {
      "data": {
        "id": "skMsq092CygeLry3JUE3-2",
        "name": "alias",
        "label": "alias",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-13",
        "target": "skMsq092CygeLry3JUE3-1",
        "sourceLabel": "UNC6040ThreatSource",
        "targetLabel": "UNC6240ThreatSource",
        "description": "UNC6040ThreatSource alias UNC6240ThreatSource."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-14",
        "name": "hasAdversaryType",
        "label": "hasAdversaryType",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-16",
        "target": "W-R75xxI9TsONGAs6iK0-17",
        "sourceLabel": "ShinyHuntersAdversary",
        "targetLabel": "Criminal GroupAdversaryType",
        "description": "ShinyHuntersAdversary hasAdversaryType Criminal GroupAdversaryType."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-19",
        "name": "startsWith",
        "label": "startsWith",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-23",
        "target": "W-R75xxI9TsONGAs6iK0-30",
        "sourceLabel": "Attack against OrganizationThreatEvent",
        "targetLabel": "AS1:AttackStepItem",
        "description": "Attack against OrganizationThreatEvent startsWith AS1:AttackStepItem."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-21",
        "name": "partsOf",
        "label": "partsOf",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-23",
        "target": "W-R75xxI9TsONGAs6iK0-47",
        "sourceLabel": "Attack against OrganizationThreatEvent",
        "targetLabel": "Vishing Campaign againstCampaign",
        "description": "Attack against OrganizationThreatEvent partsOf Vishing Campaign againstCampaign."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-24",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "W-R75xxI9TsONGAs6iK0-31",
        "sourceLabel": "AS1:AttackStepItem",
        "targetLabel": "Phishing using VoiceAttackStep",
        "description": "AS1:AttackStepItem refersTo Phishing using VoiceAttackStep."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-26",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "W-R75xxI9TsONGAs6iK0-32",
        "sourceLabel": "AS1:AttackStepItem",
        "targetLabel": "T1598.004TTP",
        "description": "AS1:AttackStepItem implements T1598.004TTP."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-28",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "W-R75xxI9TsONGAs6iK0-38",
        "sourceLabel": "AS1:AttackStepItem",
        "targetLabel": "AS2:AttackStepItem",
        "description": "AS1:AttackStepItem followedBy AS2:AttackStepItem."
      }
    },
    {
      "data": {
        "id": "N9GxJEYAAonVYKU6PBBE-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-32",
        "target": "NNmBX69VpKK8D-qhwx8O-5",
        "sourceLabel": "T1598.004TTP",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "T1598.004TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "W-R75xxI9TsONGAs6iK0-34",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-38",
        "target": "W-R75xxI9TsONGAs6iK0-40",
        "sourceLabel": "AS2:AttackStepItem",
        "targetLabel": "T1078.004TTP",
        "description": "AS2:AttackStepItem implements T1078.004TTP."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-2",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-38",
        "target": "vjJMpfVSzzf0KPU9cpzq-1",
        "sourceLabel": "AS2:AttackStepItem",
        "targetLabel": "AS3:AttackStepItem",
        "description": "AS2:AttackStepItem followedBy AS3:AttackStepItem."
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-1",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-30",
        "target": "NNmBX69VpKK8D-qhwx8O-5",
        "sourceLabel": "AS1:AttackStepItem",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "AS1:AttackStepItem exploits Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "NNmBX69VpKK8D-qhwx8O-3",
        "name": "affectsUser",
        "label": "affectsUser",
        "kind": "relationship",
        "source": "NNmBX69VpKK8D-qhwx8O-5",
        "target": "NNmBX69VpKK8D-qhwx8O-6",
        "sourceLabel": "Prone to PhishingHumanVulnerability",
        "targetLabel": "U1: Employee 1User",
        "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
      }
    },
    {
      "data": {
        "id": "6OHgOMSIGVsn-Z9V46qd-1",
        "name": "hasAccessTo",
        "label": "hasAccessTo",
        "kind": "relationship",
        "source": "NNmBX69VpKK8D-qhwx8O-6",
        "target": "WuCqMy39X08569D0n-v9-5",
        "sourceLabel": "U1: Employee 1User",
        "targetLabel": "N1: WorkstationNode",
        "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-9",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-1",
        "target": "vjJMpfVSzzf0KPU9cpzq-8",
        "sourceLabel": "AS3:AttackStepItem",
        "targetLabel": "AS4:AttackStepItem",
        "description": "AS3:AttackStepItem followedBy AS4:AttackStepItem."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-5",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-1",
        "target": "vjJMpfVSzzf0KPU9cpzq-7",
        "sourceLabel": "AS3:AttackStepItem",
        "targetLabel": "T1671TTP",
        "description": "AS3:AttackStepItem implements T1671TTP."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-12",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-8",
        "target": "vjJMpfVSzzf0KPU9cpzq-11",
        "sourceLabel": "AS4:AttackStepItem",
        "targetLabel": "T1213.004TTP",
        "description": "AS4:AttackStepItem implements T1213.004TTP."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-15",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-8",
        "target": "vjJMpfVSzzf0KPU9cpzq-14",
        "sourceLabel": "AS4:AttackStepItem",
        "targetLabel": "AS5:AttackStepItem",
        "description": "AS4:AttackStepItem followedBy AS5:AttackStepItem."
      }
    },
    {
      "data": {
        "id": "WM2iYkWpVkoMOjJOuhxM-2",
        "name": "targetsResource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "WM2iYkWpVkoMOjJOuhxM-1",
        "sourceLabel": "AS5:AttackStepItem",
        "targetLabel": "Customer DataAsset",
        "description": "AS5:AttackStepItem targetsResource Customer DataAsset."
      }
    },
    {
      "data": {
        "id": "qIbVtnW74JoUNaZ4yXt5-1",
        "name": "compromises",
        "label": "compromises",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "AS5:AttackStepItem",
        "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "description": "AS5:AttackStepItem compromises ASR1: Confidentiality of customer dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-17",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "vjJMpfVSzzf0KPU9cpzq-19",
        "sourceLabel": "AS5:AttackStepItem",
        "targetLabel": "T1048TTP",
        "description": "AS5:AttackStepItem implements T1048TTP."
      }
    },
    {
      "data": {
        "id": "X7-cyEW40f5yK0x9vZF--1",
        "name": "impacts",
        "label": "impacts",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-19",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "T1048TTP",
        "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "description": "T1048TTP impacts ASR1: Confidentiality of customer dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-23",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "W-R75xxI9TsONGAs6iK0-38",
        "target": "vjJMpfVSzzf0KPU9cpzq-25",
        "sourceLabel": "AS2:AttackStepItem",
        "targetLabel": "Access with Valid AccountsAttackStep",
        "description": "AS2:AttackStepItem refersTo Access with Valid AccountsAttackStep."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-26",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-1",
        "target": "vjJMpfVSzzf0KPU9cpzq-28",
        "sourceLabel": "AS3:AttackStepItem",
        "targetLabel": "Use of Third-Party ApplicationsAttackStep",
        "description": "AS3:AttackStepItem refersTo Use of Third-Party ApplicationsAttackStep."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-29",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-8",
        "target": "vjJMpfVSzzf0KPU9cpzq-31",
        "sourceLabel": "AS4:AttackStepItem",
        "targetLabel": "Access to Data RepositoryAttackStep",
        "description": "AS4:AttackStepItem refersTo Access to Data RepositoryAttackStep."
      }
    },
    {
      "data": {
        "id": "vjJMpfVSzzf0KPU9cpzq-32",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-14",
        "target": "vjJMpfVSzzf0KPU9cpzq-34",
        "sourceLabel": "AS5:AttackStepItem",
        "targetLabel": "Data ExfiltrationAttackStep",
        "description": "AS5:AttackStepItem refersTo Data ExfiltrationAttackStep."
      }
    },
    {
      "data": {
        "id": "Ep7i6ejaYqTg5r7JC2yi-2",
        "name": "violates",
        "label": "violates",
        "kind": "relationship",
        "source": "vjJMpfVSzzf0KPU9cpzq-34",
        "target": "mkfqWY7xLTyuWZQTjFYf-2",
        "sourceLabel": "Data ExfiltrationAttackStep",
        "targetLabel": "ConfidentialitySecurityRequirement",
        "description": "Data ExfiltrationAttackStep violates ConfidentialitySecurityRequirement."
      }
    },
    {
      "data": {
        "id": "1MHW0WUUoP0wR_9WGbNa-1",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "WM2iYkWpVkoMOjJOuhxM-1",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "Customer DataAsset",
        "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "description": "Customer DataAsset hasSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-3",
        "name": "manages",
        "label": "manages",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-1",
        "target": "WuCqMy39X08569D0n-v9-2",
        "sourceLabel": "OrgCS3Organization",
        "targetLabel": "Prod-InfraInfrastructure",
        "description": "OrgCS3Organization manages Prod-InfraInfrastructure."
      }
    },
    {
      "data": {
        "id": "WuCqMy39X08569D0n-v9-6",
        "name": "madeBy",
        "label": "madeBy",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-2",
        "target": "WuCqMy39X08569D0n-v9-5",
        "sourceLabel": "Prod-InfraInfrastructure",
        "targetLabel": "N1: WorkstationNode",
        "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
      }
    },
    {
      "data": {
        "id": "NXt1BKSTyLYTvNq0OA_7-2",
        "name": "usedBy",
        "label": "usedBy",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-2",
        "target": "NNmBX69VpKK8D-qhwx8O-6",
        "sourceLabel": "Prod-InfraInfrastructure",
        "targetLabel": "U1: Employee 1User",
        "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
      }
    },
    {
      "data": {
        "id": "1wYscN70OxNXywWxwdxa-2",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-5",
        "target": "1wYscN70OxNXywWxwdxa-1",
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Desktop ComputerNodeType",
        "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
      }
    },
    {
      "data": {
        "id": "puR0N-drRlthi1GJN4Xb-1",
        "name": "hostsResource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "_mnEyO-uEHkzOZovGcnc-2",
        "sourceLabel": "N2: Salesforce EndpointNode",
        "targetLabel": "Salesforce ServiceApplicationInstance",
        "description": "N2: Salesforce EndpointNode hostsResource Salesforce ServiceApplicationInstance."
      }
    },
    {
      "data": {
        "id": "XNSAvHdaGQ6QdSv4knAv-3",
        "name": "isSource",
        "label": "isSource",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-5",
        "target": "wTd-3MmVqCO39iPhYjD6-1",
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Salesforce Data ManagementConnection",
        "description": "N1: WorkstationNode isSource Salesforce Data ManagementConnection."
      }
    },
    {
      "data": {
        "id": "eVn5_GdqCaxl72IHBsPH-1",
        "name": "hasBusinessRequirement",
        "label": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "WuCqMy39X08569D0n-v9-1",
        "target": "eVn5_GdqCaxl72IHBsPH-3",
        "sourceLabel": "OrgCS3Organization",
        "targetLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
        "description": "OrgCS3Organization hasBusinessRequirement BR1: Customer data must remain confidentialBusinessRequirement."
      }
    },
    {
      "data": {
        "id": "F2QGTwjoN-LEskWlSwwC-1",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "eVn5_GdqCaxl72IHBsPH-3",
        "target": "F2QGTwjoN-LEskWlSwwC-3",
        "sourceLabel": "BR1: Customer data must remain confidentialBusinessRequirement",
        "targetLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "description": "BR1: Customer data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of customer dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "mkfqWY7xLTyuWZQTjFYf-3",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "F2QGTwjoN-LEskWlSwwC-3",
        "target": "mkfqWY7xLTyuWZQTjFYf-2",
        "sourceLabel": "ASR1: Confidentiality of customer dataAssetSecurityRequirement",
        "targetLabel": "ConfidentialitySecurityRequirement",
        "description": "ASR1: Confidentiality of customer dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-3",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "1v_T7K9QPGvpQHMeIzBd-2",
        "sourceLabel": "N2: Salesforce EndpointNode",
        "targetLabel": "Web Application ServerNodeType",
        "description": "N2: Salesforce EndpointNode hasNodeType Web Application ServerNodeType."
      }
    },
    {
      "data": {
        "id": "1v_T7K9QPGvpQHMeIzBd-5",
        "name": "hosts",
        "label": "hosts",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "WM2iYkWpVkoMOjJOuhxM-1",
        "sourceLabel": "N2: Salesforce EndpointNode",
        "targetLabel": "Customer DataAsset",
        "description": "N2: Salesforce EndpointNode hosts Customer DataAsset."
      }
    },
    {
      "data": {
        "id": "XNSAvHdaGQ6QdSv4knAv-1",
        "name": "isDestination",
        "label": "isDestination",
        "kind": "relationship",
        "source": "1v_T7K9QPGvpQHMeIzBd-1",
        "target": "wTd-3MmVqCO39iPhYjD6-1",
        "sourceLabel": "N2: Salesforce EndpointNode",
        "targetLabel": "Salesforce Data ManagementConnection",
        "description": "N2: Salesforce EndpointNode isDestination Salesforce Data ManagementConnection."
      }
    }
  ]
};
