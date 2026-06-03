const caseData = {
  "metadata": {
    "id": "cs4",
    "title": "CS4 — Case study 4 implementation",
    "shortTitle": "Case study 4 implementation",
    "description": "Interactive case-study implementation generated from the updated Draw.io model.",
    "source": "metamodel_v2-case4.drawio (1).xml",
    "layout": {
      "minX": -660.0,
      "minY": 30.0,
      "maxX": 1480.0,
      "maxY": 1260.0,
      "width": 2380.0,
      "height": 1470.0,
      "padding": 120
    }
  },
  "nodes": [
    {
      "data": {
        "id": "HZHTnUwxUhuAmBVm-COV-1",
        "name": "FourOrg",
        "label": "FourOrg",
        "metamodelEntity": "Organization",
        "originalMetamodelEntity": "Organization",
        "description": "FourOrg is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-39",
            "name": "manages",
            "label": "manages",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "sourceLabel": "FourOrg",
            "sourceCardinality": "1",
            "target": "qzW-ANQ4cShhyDxj2iRk-38",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "FourOrg manages Prod-Infra."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-6",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "sourceLabel": "FourOrg",
            "sourceCardinality": "1",
            "target": "qVrTcyufrUnFQZm5Z7Rl-5",
            "targetLabel": "BR1: Organization's data must remain confidential",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "FourOrg hasBusinessRequirement BR1: Organization's data must remain confidential."
          }
        ],
        "incomingRelations": [],
        "drawioId": "HZHTnUwxUhuAmBVm-COV-1",
        "drawioPosition": {
          "x": -70.0,
          "y": 80.0
        },
        "drawioGeometry": {
          "x": -130.0,
          "y": 60.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 710.0,
        "y": 170.0
      }
    },
    {
      "data": {
        "id": "LVuWc9dPByfjlFdt02Zd-1",
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
        "outgoingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-2",
            "name": "alias",
            "label": "alias",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "targetLabel": "CozyBear",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "APT29 alias CozyBear."
          },
          {
            "id": "-MfVsttqaDO7kn--14NE-5",
            "name": "alias",
            "label": "alias",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-4",
            "targetLabel": "YTTRIUM",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "APT29 alias YTTRIUM."
          },
          {
            "id": "dCjMzqmgwiT5h25rW3wv-1",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "1..*",
            "target": "-MfVsttqaDO7kn--14NE-9",
            "targetLabel": "Russia's SVR",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "APT29 relatedTo Russia's SVR."
          },
          {
            "id": "xuD4CoUZLWJXzUS_sh0j-3",
            "name": "initiates",
            "label": "initiates",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "1",
            "target": "xuD4CoUZLWJXzUS_sh0j-2",
            "targetLabel": "Spearphishing Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "APT29 initiates Spearphishing Attack."
          }
        ],
        "incomingRelations": [],
        "drawioId": "LVuWc9dPByfjlFdt02Zd-1",
        "drawioPosition": {
          "x": 950.0,
          "y": 90.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 180.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-1",
        "name": "CozyBear",
        "label": "CozyBear",
        "metamodelEntity": "ThreatActor",
        "originalMetamodelEntity": "ThreatActor",
        "description": "CozyBear is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "-MfVsttqaDO7kn--14NE-2",
            "name": "alias",
            "label": "alias",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "targetLabel": "CozyBear",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "APT29 alias CozyBear."
          },
          {
            "id": "-MfVsttqaDO7kn--14NE-7",
            "name": "alias",
            "label": "alias",
            "source": "-MfVsttqaDO7kn--14NE-4",
            "sourceLabel": "YTTRIUM",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "targetLabel": "CozyBear",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "YTTRIUM alias CozyBear."
          }
        ],
        "drawioId": "-MfVsttqaDO7kn--14NE-1",
        "drawioPosition": {
          "x": 770.0,
          "y": 50.0
        },
        "drawioGeometry": {
          "x": 710.0,
          "y": 30.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1550.0,
        "y": 140.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-4",
        "name": "YTTRIUM",
        "label": "YTTRIUM",
        "metamodelEntity": "ThreatActor",
        "originalMetamodelEntity": "ThreatActor",
        "description": "YTTRIUM is a case-study instance of the ThreatActor entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "-MfVsttqaDO7kn--14NE-7",
            "name": "alias",
            "label": "alias",
            "source": "-MfVsttqaDO7kn--14NE-4",
            "sourceLabel": "YTTRIUM",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "targetLabel": "CozyBear",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "YTTRIUM alias CozyBear."
          }
        ],
        "incomingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-5",
            "name": "alias",
            "label": "alias",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "0..*",
            "target": "-MfVsttqaDO7kn--14NE-4",
            "targetLabel": "YTTRIUM",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "APT29 alias YTTRIUM."
          }
        ],
        "drawioId": "-MfVsttqaDO7kn--14NE-4",
        "drawioPosition": {
          "x": 780.0,
          "y": 170.0
        },
        "drawioGeometry": {
          "x": 720.0,
          "y": 150.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1560.0,
        "y": 260.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-9",
        "name": "Russia's SVR",
        "label": "Russia's SVR",
        "metamodelEntity": "Adversary",
        "originalMetamodelEntity": "Adversary",
        "description": "Russia's SVR is a case-study instance of the Adversary entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Adversary is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "dCjMzqmgwiT5h25rW3wv-4",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "-MfVsttqaDO7kn--14NE-9",
            "sourceLabel": "Russia's SVR",
            "sourceCardinality": "1..*",
            "target": "dCjMzqmgwiT5h25rW3wv-3",
            "targetLabel": "Nation State",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "Russia's SVR hasAdversaryType Nation State."
          }
        ],
        "incomingRelations": [
          {
            "id": "dCjMzqmgwiT5h25rW3wv-1",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "1..*",
            "target": "-MfVsttqaDO7kn--14NE-9",
            "targetLabel": "Russia's SVR",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "APT29 relatedTo Russia's SVR."
          }
        ],
        "drawioId": "-MfVsttqaDO7kn--14NE-9",
        "drawioPosition": {
          "x": 1160.0,
          "y": 90.0
        },
        "drawioGeometry": {
          "x": 1100.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1940.0,
        "y": 180.0
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-3",
        "name": "Nation State",
        "label": "Nation State",
        "metamodelEntity": "AdversaryType",
        "originalMetamodelEntity": "AdversaryType",
        "description": "Nation State is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AdversaryType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "dCjMzqmgwiT5h25rW3wv-4",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "-MfVsttqaDO7kn--14NE-9",
            "sourceLabel": "Russia's SVR",
            "sourceCardinality": "1..*",
            "target": "dCjMzqmgwiT5h25rW3wv-3",
            "targetLabel": "Nation State",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "Russia's SVR hasAdversaryType Nation State."
          }
        ],
        "drawioId": "dCjMzqmgwiT5h25rW3wv-3",
        "drawioPosition": {
          "x": 1160.0,
          "y": 170.0
        },
        "drawioGeometry": {
          "x": 1100.0,
          "y": 150.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1940.0,
        "y": 260.0
      }
    },
    {
      "data": {
        "id": "xuD4CoUZLWJXzUS_sh0j-2",
        "name": "Spearphishing Attack",
        "label": "Spearphishing Attack",
        "metamodelEntity": "Threat",
        "originalMetamodelEntity": "Threat",
        "description": "Spearphishing Attack is a case-study instance of the Threat entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "5p-efhzWygpeI9_lYFaW-3",
            "name": "startsWith",
            "label": "startsWith",
            "source": "xuD4CoUZLWJXzUS_sh0j-2",
            "sourceLabel": "Spearphishing Attack",
            "sourceCardinality": "",
            "target": "5p-efhzWygpeI9_lYFaW-2",
            "targetLabel": "AS1: Spearphishing mimicking Onedrive",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Spearphishing Attack startsWith AS1: Spearphishing mimicking Onedrive."
          }
        ],
        "incomingRelations": [
          {
            "id": "xuD4CoUZLWJXzUS_sh0j-3",
            "name": "initiates",
            "label": "initiates",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "sourceLabel": "APT29",
            "sourceCardinality": "1",
            "target": "xuD4CoUZLWJXzUS_sh0j-2",
            "targetLabel": "Spearphishing Attack",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "APT29 initiates Spearphishing Attack."
          }
        ],
        "drawioId": "xuD4CoUZLWJXzUS_sh0j-2",
        "drawioPosition": {
          "x": 950.0,
          "y": 215.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 190.0,
          "width": 120.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 305.0
      }
    },
    {
      "data": {
        "id": "5p-efhzWygpeI9_lYFaW-2",
        "name": "AS1: Spearphishing mimicking Onedrive",
        "label": "AS1: Spearphishing mimicking Onedrive",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS1: Spearphishing mimicking Onedrive is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "QWGctnTdT4-Q2VtuhLHI-3",
            "name": "implements",
            "label": "implements",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "1..*",
            "target": "QWGctnTdT4-Q2VtuhLHI-2",
            "targetLabel": "T1566.003",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Spearphishing mimicking Onedrive implements T1566.003."
          },
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "0..*",
            "target": "P7PCyI3RzNPrK-RiMjAq-2",
            "targetLabel": "AS2: Redirect to compromised website",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Spearphishing mimicking Onedrive followedBy AS2: Redirect to compromised website."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-3",
            "name": "exploits",
            "label": "exploits",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Spearphishing mimicking Onedrive exploits Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "5p-efhzWygpeI9_lYFaW-3",
            "name": "startsWith",
            "label": "startsWith",
            "source": "xuD4CoUZLWJXzUS_sh0j-2",
            "sourceLabel": "Spearphishing Attack",
            "sourceCardinality": "",
            "target": "5p-efhzWygpeI9_lYFaW-2",
            "targetLabel": "AS1: Spearphishing mimicking Onedrive",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Spearphishing Attack startsWith AS1: Spearphishing mimicking Onedrive."
          }
        ],
        "drawioId": "5p-efhzWygpeI9_lYFaW-2",
        "drawioPosition": {
          "x": 950.0,
          "y": 310.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 280.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 400.0
      }
    },
    {
      "data": {
        "id": "QWGctnTdT4-Q2VtuhLHI-2",
        "name": "T1566.003",
        "label": "T1566.003",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1566.003 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "lRILMvQgxyY53MFmug6h-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "QWGctnTdT4-Q2VtuhLHI-2",
            "sourceLabel": "T1566.003",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1566.003 exploitsVulnerability Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "QWGctnTdT4-Q2VtuhLHI-3",
            "name": "implements",
            "label": "implements",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "1..*",
            "target": "QWGctnTdT4-Q2VtuhLHI-2",
            "targetLabel": "T1566.003",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS1: Spearphishing mimicking Onedrive implements T1566.003."
          }
        ],
        "drawioId": "QWGctnTdT4-Q2VtuhLHI-2",
        "drawioPosition": {
          "x": 1125.0,
          "y": 310.0
        },
        "drawioGeometry": {
          "x": 1090.0,
          "y": 285.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 1905.0,
        "y": 400.0
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-2",
        "name": "AS2: Redirect to compromised website",
        "label": "AS2: Redirect to compromised website",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS2: Redirect to compromised website is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "gcXcCobT5xsXrkAcETY5-1",
            "name": "exploits",
            "label": "exploits",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Redirect to compromised website exploits Prone to Phishing."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-4",
            "name": "followedBy",
            "label": "followedBy",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "0..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-3",
            "targetLabel": "AS3: Download and Execute Malicious ZIP",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Redirect to compromised website followedBy AS3: Download and Execute Malicious ZIP."
          },
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-6",
            "name": "implements",
            "label": "implements",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "1..*",
            "target": "P7PCyI3RzNPrK-RiMjAq-8",
            "targetLabel": "T1584.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Redirect to compromised website implements T1584.001."
          }
        ],
        "incomingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "0..*",
            "target": "P7PCyI3RzNPrK-RiMjAq-2",
            "targetLabel": "AS2: Redirect to compromised website",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS1: Spearphishing mimicking Onedrive followedBy AS2: Redirect to compromised website."
          }
        ],
        "drawioId": "P7PCyI3RzNPrK-RiMjAq-2",
        "drawioPosition": {
          "x": 950.0,
          "y": 450.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 420.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 540.0
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-8",
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
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "P7PCyI3RzNPrK-RiMjAq-8",
            "sourceLabel": "T1584.001",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1584.001 exploitsVulnerability Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-6",
            "name": "implements",
            "label": "implements",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "1..*",
            "target": "P7PCyI3RzNPrK-RiMjAq-8",
            "targetLabel": "T1584.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS2: Redirect to compromised website implements T1584.001."
          }
        ],
        "drawioId": "P7PCyI3RzNPrK-RiMjAq-8",
        "drawioPosition": {
          "x": 1135.0,
          "y": 450.0
        },
        "drawioGeometry": {
          "x": 1100.0,
          "y": 425.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 1915.0,
        "y": 540.0
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-3",
        "name": "U1: Employee 1",
        "label": "U1: Employee 1",
        "metamodelEntity": "User",
        "originalMetamodelEntity": "User",
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
        "outgoingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "cardinality": "",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          }
        ],
        "incomingRelations": [
          {
            "id": "lRILMvQgxyY53MFmug6h-5",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-41",
            "name": "usedBy",
            "label": "usedBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod-Infra usedBy U1: Employee 1."
          }
        ],
        "drawioId": "1cakm77nuum5QVv6bJuu-3",
        "drawioPosition": {
          "x": 390.0,
          "y": 317.5
        },
        "drawioGeometry": {
          "x": 320.0,
          "y": 295.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 1170.0,
        "y": 407.5
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-6",
        "name": "N1: Workstation",
        "label": "N1: Workstation",
        "metamodelEntity": "Node",
        "originalMetamodelEntity": "Node",
        "description": "N1: Workstation is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "1cakm77nuum5QVv6bJuu-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "target": "1cakm77nuum5QVv6bJuu-7",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          },
          {
            "id": "WG_jXR4R0mnxslE-pLWJ-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "targetLabel": "Project Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Workstation hostsResource Project Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "U1: Employee 1",
            "sourceCardinality": "",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "",
            "cardinality": "",
            "description": "U1: Employee 1 hasAccessTo N1: Workstation."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-3",
            "name": "madeBy",
            "label": "madeBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Workstation."
          }
        ],
        "drawioId": "1cakm77nuum5QVv6bJuu-6",
        "drawioPosition": {
          "x": 290.0,
          "y": 467.5
        },
        "drawioGeometry": {
          "x": 220.0,
          "y": 445.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 1070.0,
        "y": 557.5
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-7",
        "name": "Desktop Computer",
        "label": "Desktop Computer",
        "metamodelEntity": "NodeType",
        "originalMetamodelEntity": "NodeType",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1..*",
            "target": "1cakm77nuum5QVv6bJuu-7",
            "targetLabel": "Desktop Computer",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "N1: Workstation hasNodeType Desktop Computer."
          }
        ],
        "drawioId": "1cakm77nuum5QVv6bJuu-7",
        "drawioPosition": {
          "x": 290.0,
          "y": 567.5
        },
        "drawioGeometry": {
          "x": 220.0,
          "y": 545.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 1070.0,
        "y": 657.5
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-7",
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
            "id": "lRILMvQgxyY53MFmug6h-5",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "Prone to Phishing",
            "sourceCardinality": "0..*",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "Prone to Phishing affectsUser U1: Employee 1."
          }
        ],
        "incomingRelations": [
          {
            "id": "gcXcCobT5xsXrkAcETY5-1",
            "name": "exploits",
            "label": "exploits",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS2: Redirect to compromised website exploits Prone to Phishing."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "P7PCyI3RzNPrK-RiMjAq-8",
            "sourceLabel": "T1584.001",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1584.001 exploitsVulnerability Prone to Phishing."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "QWGctnTdT4-Q2VtuhLHI-2",
            "sourceLabel": "T1566.003",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1566.003 exploitsVulnerability Prone to Phishing."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-3",
            "name": "exploits",
            "label": "exploits",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS1: Spearphishing mimicking Onedrive exploits Prone to Phishing."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-9",
            "name": "exploits",
            "label": "exploits",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS3: Download and Execute Malicious ZIP exploits Prone to Phishing."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-14",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "Hs5jixxFsbNwWR-Au2Cb-11",
            "sourceLabel": "T1204.002",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1204.002 exploitsVulnerability Prone to Phishing."
          }
        ],
        "drawioId": "lRILMvQgxyY53MFmug6h-7",
        "drawioPosition": {
          "x": 540.0,
          "y": 217.5
        },
        "drawioGeometry": {
          "x": 470.0,
          "y": 195.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 1320.0,
        "y": 307.5
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-3",
        "name": "AS3: Download and Execute Malicious ZIP",
        "label": "AS3: Download and Execute Malicious ZIP",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS3: Download and Execute Malicious ZIP is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "Hs5jixxFsbNwWR-Au2Cb-12",
            "name": "implements",
            "label": "implements",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "1..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-11",
            "targetLabel": "T1204.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Download and Execute Malicious ZIP implements T1204.002."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-17",
            "name": "followedBy",
            "label": "followedBy",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "0..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-16",
            "targetLabel": "AS4: DLL Implant with Powershell",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Download and Execute Malicious ZIP followedBy AS4: DLL Implant with Powershell."
          },
          {
            "id": "kntNElvYiTp8xnw6UYOk-2",
            "name": "employs",
            "label": "employs",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "1..*",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "targetLabel": "ds7002.zip",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS3: Download and Execute Malicious ZIP employs ds7002.zip."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-9",
            "name": "exploits",
            "label": "exploits",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS3: Download and Execute Malicious ZIP exploits Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-4",
            "name": "followedBy",
            "label": "followedBy",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS2: Redirect to compromised website",
            "sourceCardinality": "0..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-3",
            "targetLabel": "AS3: Download and Execute Malicious ZIP",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS2: Redirect to compromised website followedBy AS3: Download and Execute Malicious ZIP."
          }
        ],
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-3",
        "drawioPosition": {
          "x": 950.0,
          "y": 590.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 560.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 680.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-11",
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
            "id": "Hs5jixxFsbNwWR-Au2Cb-14",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "Hs5jixxFsbNwWR-Au2Cb-11",
            "sourceLabel": "T1204.002",
            "sourceCardinality": "1..*",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "targetLabel": "Prone to Phishing",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "T1204.002 exploitsVulnerability Prone to Phishing."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-12",
            "name": "implements",
            "label": "implements",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "1..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-11",
            "targetLabel": "T1204.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS3: Download and Execute Malicious ZIP implements T1204.002."
          }
        ],
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-11",
        "drawioPosition": {
          "x": 1135.0,
          "y": 590.0
        },
        "drawioGeometry": {
          "x": 1100.0,
          "y": 565.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 1915.0,
        "y": 680.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-16",
        "name": "AS4: DLL Implant with Powershell",
        "label": "AS4: DLL Implant with Powershell",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS4: DLL Implant with Powershell is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "i68WAE7NELcuDDsLpOV2-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-2",
            "targetLabel": "AS5: Malicious File Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: DLL Implant with Powershell followedBy AS5: Malicious File Execution."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-11",
            "name": "employs",
            "label": "employs",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: DLL Implant with Powershell employs Powershell Instance."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-19",
            "name": "implements",
            "label": "implements",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "1..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-21",
            "targetLabel": "T1059.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: DLL Implant with Powershell implements T1059.001."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-17",
            "name": "followedBy",
            "label": "followedBy",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "0..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-16",
            "targetLabel": "AS4: DLL Implant with Powershell",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS3: Download and Execute Malicious ZIP followedBy AS4: DLL Implant with Powershell."
          }
        ],
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-16",
        "drawioPosition": {
          "x": 950.0,
          "y": 710.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 680.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1730.0,
        "y": 800.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-21",
        "name": "T1059.001",
        "label": "T1059.001",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1059.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "Hs5jixxFsbNwWR-Au2Cb-19",
            "name": "implements",
            "label": "implements",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "1..*",
            "target": "Hs5jixxFsbNwWR-Au2Cb-21",
            "targetLabel": "T1059.001",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS4: DLL Implant with Powershell implements T1059.001."
          }
        ],
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-21",
        "drawioPosition": {
          "x": 1135.0,
          "y": 710.0
        },
        "drawioGeometry": {
          "x": 1100.0,
          "y": 685.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 1915.0,
        "y": 800.0
      }
    },
    {
      "data": {
        "id": "kntNElvYiTp8xnw6UYOk-1",
        "name": "ds7002.zip",
        "label": "ds7002.zip",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "ds7002.zip is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "7ORuww9_r7kVZ126CwW4-3",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "ds7002.zip",
            "sourceCardinality": "1..*",
            "target": "7ORuww9_r7kVZ126CwW4-2",
            "targetLabel": "ZIP File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.zip instanceOf ZIP File."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-16",
            "name": "deploys",
            "label": "deploys",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "ds7002.zip",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-15",
            "targetLabel": "ds7002.lnk",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "ds7002.zip deploys ds7002.lnk."
          }
        ],
        "incomingRelations": [
          {
            "id": "kntNElvYiTp8xnw6UYOk-2",
            "name": "employs",
            "label": "employs",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS3: Download and Execute Malicious ZIP",
            "sourceCardinality": "1..*",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "targetLabel": "ds7002.zip",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS3: Download and Execute Malicious ZIP employs ds7002.zip."
          },
          {
            "id": "afhzImNPabiAoD0HF1qV-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "afhzImNPabiAoD0HF1qV-1",
            "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
            "sourceCardinality": "1..*",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "targetLabel": "ds7002.zip",
            "targetCardinality": "1",
            "cardinality": "Indicator 1..* — 1 AttackToolInstance",
            "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1 associatedTo ds7002.zip."
          }
        ],
        "drawioId": "kntNElvYiTp8xnw6UYOk-1",
        "drawioPosition": {
          "x": 474.0,
          "y": 680.0
        },
        "drawioGeometry": {
          "x": 414.0,
          "y": 650.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1254.0,
        "y": 770.0
      }
    },
    {
      "data": {
        "id": "afhzImNPabiAoD0HF1qV-1",
        "name": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
        "label": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
        "metamodelEntity": "Indicator",
        "originalMetamodelEntity": "Indicator",
        "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1 is a case-study instance of the Indicator entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Indicator is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "afhzImNPabiAoD0HF1qV-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "afhzImNPabiAoD0HF1qV-1",
            "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
            "sourceCardinality": "1..*",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "targetLabel": "ds7002.zip",
            "targetCardinality": "1",
            "cardinality": "Indicator 1..* — 1 AttackToolInstance",
            "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1 associatedTo ds7002.zip."
          }
        ],
        "incomingRelations": [],
        "drawioId": "afhzImNPabiAoD0HF1qV-1",
        "drawioPosition": {
          "x": 540.0,
          "y": 870.0
        },
        "drawioGeometry": {
          "x": 405.0,
          "y": 840.0,
          "width": 270.0,
          "height": 60.0
        },
        "layoutWidth": 270.0,
        "layoutHeight": 60.0,
        "textMaxWidth": 258.0
      },
      "position": {
        "x": 1320.0,
        "y": 960.0
      }
    },
    {
      "data": {
        "id": "7ORuww9_r7kVZ126CwW4-2",
        "name": "ZIP File",
        "label": "ZIP File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "ZIP File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "7ORuww9_r7kVZ126CwW4-3",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "ds7002.zip",
            "sourceCardinality": "1..*",
            "target": "7ORuww9_r7kVZ126CwW4-2",
            "targetLabel": "ZIP File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.zip instanceOf ZIP File."
          }
        ],
        "drawioId": "7ORuww9_r7kVZ126CwW4-2",
        "drawioPosition": {
          "x": 595.0,
          "y": 790.0
        },
        "drawioGeometry": {
          "x": 535.0,
          "y": 760.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1375.0,
        "y": 880.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-2",
        "name": "AS5: Malicious File Execution",
        "label": "AS5: Malicious File Execution",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS5: Malicious File Execution is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-20",
            "name": "implements",
            "label": "implements",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-19",
            "targetLabel": "T1218.011",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Malicious File Execution implements T1218.011."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-22",
            "name": "employs",
            "label": "employs",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Malicious File Execution employs Powershell Instance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-24",
            "name": "employs",
            "label": "employs",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "targetLabel": "cyzfc.dat",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Malicious File Execution employs cyzfc.dat."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-27",
            "name": "followedBy",
            "label": "followedBy",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-26",
            "targetLabel": "AS6: Deploy Cobalt Strike",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS5: Malicious File Execution followedBy AS6: Deploy Cobalt Strike."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-16",
            "name": "refersTo",
            "label": "refersTo",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "",
            "target": "qzW-ANQ4cShhyDxj2iRk-18",
            "targetLabel": "Execute DLL",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS5: Malicious File Execution refersTo Execute DLL."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-3",
            "name": "followedBy",
            "label": "followedBy",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-2",
            "targetLabel": "AS5: Malicious File Execution",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS4: DLL Implant with Powershell followedBy AS5: Malicious File Execution."
          }
        ],
        "drawioId": "i68WAE7NELcuDDsLpOV2-2",
        "drawioPosition": {
          "x": 1240.0,
          "y": 930.0
        },
        "drawioGeometry": {
          "x": 1180.0,
          "y": 900.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 2020.0,
        "y": 1020.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-6",
        "name": "Powershell Instance",
        "label": "Powershell Instance",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "Powershell Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "i68WAE7NELcuDDsLpOV2-13",
            "name": "deploys",
            "label": "deploys",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-12",
            "targetLabel": "ds7002.PDF",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys ds7002.PDF."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-10",
            "targetLabel": "Powershell",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Powershell Instance instanceOf Powershell."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-4",
            "name": "deploys",
            "label": "deploys",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "targetLabel": "cyzfc.dat",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys cyzfc.dat."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-11",
            "name": "employs",
            "label": "employs",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS4: DLL Implant with Powershell",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS4: DLL Implant with Powershell employs Powershell Instance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-22",
            "name": "employs",
            "label": "employs",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "targetLabel": "Powershell Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Malicious File Execution employs Powershell Instance."
          }
        ],
        "drawioId": "i68WAE7NELcuDDsLpOV2-6",
        "drawioPosition": {
          "x": 724.0,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 664.0,
          "y": 970.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1504.0,
        "y": 1090.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-10",
        "name": "Powershell",
        "label": "Powershell",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "Powershell is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "i68WAE7NELcuDDsLpOV2-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "1..*",
            "target": "i68WAE7NELcuDDsLpOV2-10",
            "targetLabel": "Powershell",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Powershell Instance instanceOf Powershell."
          }
        ],
        "drawioId": "i68WAE7NELcuDDsLpOV2-10",
        "drawioPosition": {
          "x": 725.0,
          "y": 1110.0
        },
        "drawioGeometry": {
          "x": 665.0,
          "y": 1080.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1505.0,
        "y": 1200.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-12",
        "name": "ds7002.PDF",
        "label": "ds7002.PDF",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "ds7002.PDF is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-10",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-12",
            "sourceLabel": "ds7002.PDF",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-9",
            "targetLabel": "PDF File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.PDF instanceOf PDF File."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-13",
            "name": "deploys",
            "label": "deploys",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-12",
            "targetLabel": "ds7002.PDF",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys ds7002.PDF."
          }
        ],
        "drawioId": "i68WAE7NELcuDDsLpOV2-12",
        "drawioPosition": {
          "x": 345.0,
          "y": 970.0
        },
        "drawioGeometry": {
          "x": 285.0,
          "y": 940.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1125.0,
        "y": 1060.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-15",
        "name": "ds7002.lnk",
        "label": "ds7002.lnk",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "ds7002.lnk is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-7",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-15",
            "sourceLabel": "ds7002.lnk",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-6",
            "targetLabel": "LNK File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.lnk instanceOf LNK File."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-16",
            "name": "deploys",
            "label": "deploys",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "ds7002.zip",
            "sourceCardinality": "0..*",
            "target": "i68WAE7NELcuDDsLpOV2-15",
            "targetLabel": "ds7002.lnk",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "ds7002.zip deploys ds7002.lnk."
          }
        ],
        "drawioId": "i68WAE7NELcuDDsLpOV2-15",
        "drawioPosition": {
          "x": 200.0,
          "y": 790.0
        },
        "drawioGeometry": {
          "x": 140.0,
          "y": 760.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 980.0,
        "y": 880.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-3",
        "name": "cyzfc.dat",
        "label": "cyzfc.dat",
        "metamodelEntity": "AttackToolInstance",
        "originalMetamodelEntity": "AttackToolInstance",
        "description": "cyzfc.dat is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-13",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "cyzfc.dat",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-12",
            "targetLabel": "DAT File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "cyzfc.dat instanceOf DAT File."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-24",
            "name": "employs",
            "label": "employs",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "targetLabel": "cyzfc.dat",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS5: Malicious File Execution employs cyzfc.dat."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-4",
            "name": "deploys",
            "label": "deploys",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "Powershell Instance",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "targetLabel": "cyzfc.dat",
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "Powershell Instance deploys cyzfc.dat."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-3",
        "drawioPosition": {
          "x": 345.0,
          "y": 1060.0
        },
        "drawioGeometry": {
          "x": 285.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1125.0,
        "y": 1150.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-6",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-7",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-15",
            "sourceLabel": "ds7002.lnk",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-6",
            "targetLabel": "LNK File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.lnk instanceOf LNK File."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-6",
        "drawioPosition": {
          "x": 40.0,
          "y": 870.0
        },
        "drawioGeometry": {
          "x": -20.0,
          "y": 840.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 820.0,
        "y": 960.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-9",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-10",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "i68WAE7NELcuDDsLpOV2-12",
            "sourceLabel": "ds7002.PDF",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-9",
            "targetLabel": "PDF File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "ds7002.PDF instanceOf PDF File."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-9",
        "drawioPosition": {
          "x": 40.0,
          "y": 960.0
        },
        "drawioGeometry": {
          "x": -20.0,
          "y": 930.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 820.0,
        "y": 1050.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-12",
        "name": "DAT File",
        "label": "DAT File",
        "metamodelEntity": "AttackTool",
        "originalMetamodelEntity": "AttackTool",
        "description": "DAT File is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-13",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "cyzfc.dat",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-12",
            "targetLabel": "DAT File",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "cyzfc.dat instanceOf DAT File."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-12",
        "drawioPosition": {
          "x": 40.0,
          "y": 1060.0
        },
        "drawioGeometry": {
          "x": -20.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 820.0,
        "y": 1150.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-18",
        "name": "Execute DLL",
        "label": "Execute DLL",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "AttackStep",
        "description": "Execute DLL is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-16",
            "name": "refersTo",
            "label": "refersTo",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "",
            "target": "qzW-ANQ4cShhyDxj2iRk-18",
            "targetLabel": "Execute DLL",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AS5: Malicious File Execution refersTo Execute DLL."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-18",
        "drawioPosition": {
          "x": 955.0,
          "y": 885.0
        },
        "drawioGeometry": {
          "x": 890.0,
          "y": 860.0,
          "width": 130.0,
          "height": 50.0
        },
        "layoutWidth": 130.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 118.0
      },
      "position": {
        "x": 1735.0,
        "y": 975.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-19",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-20",
            "name": "implements",
            "label": "implements",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-19",
            "targetLabel": "T1218.011",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS5: Malicious File Execution implements T1218.011."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-19",
        "drawioPosition": {
          "x": 1385.0,
          "y": 835.0
        },
        "drawioGeometry": {
          "x": 1350.0,
          "y": 810.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 2165.0,
        "y": 925.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-26",
        "name": "AS6: Deploy Cobalt Strike",
        "label": "AS6: Deploy Cobalt Strike",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS6: Deploy Cobalt Strike is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "JgCm936JxhOEmBgDc_UP-7",
            "name": "implements",
            "label": "implements",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "1..*",
            "target": "JgCm936JxhOEmBgDc_UP-6",
            "targetLabel": "T1588.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS6: Deploy Cobalt Strike implements T1588.002."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-30",
            "name": "followedBy",
            "label": "followedBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-29",
            "targetLabel": "AS7: Backdoor Implementation",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS6: Deploy Cobalt Strike followedBy AS7: Backdoor Implementation."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-33",
            "name": "employs",
            "label": "employs",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-32",
            "targetLabel": "Cobalt Strike Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS6: Deploy Cobalt Strike employs Cobalt Strike Instance."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-27",
            "name": "followedBy",
            "label": "followedBy",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS5: Malicious File Execution",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-26",
            "targetLabel": "AS6: Deploy Cobalt Strike",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS5: Malicious File Execution followedBy AS6: Deploy Cobalt Strike."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-26",
        "drawioPosition": {
          "x": 1240.0,
          "y": 1060.0
        },
        "drawioGeometry": {
          "x": 1180.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 2020.0,
        "y": 1150.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-29",
        "name": "AS7: Backdoor Implementation",
        "label": "AS7: Backdoor Implementation",
        "metamodelEntity": "ThreatStep",
        "originalMetamodelEntity": "ThreatStep",
        "description": "AS7: Backdoor Implementation is a case-study instance of the ThreatStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
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
            "id": "JgCm936JxhOEmBgDc_UP-11",
            "name": "implements",
            "label": "implements",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "JgCm936JxhOEmBgDc_UP-10",
            "targetLabel": "T1005",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS7: Backdoor Implementation implements T1005."
          },
          {
            "id": "xL1UhOB1JyQPO_Ga4dQB-1",
            "name": "compromises",
            "label": "compromises",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Backdoor Implementation compromises ASR1: Confidentiality of organization's data."
          },
          {
            "id": "sm1cul3d3wHS5KGZIJT--1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "targetLabel": "Project Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS7: Backdoor Implementation targetsResource Project Data."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-30",
            "name": "followedBy",
            "label": "followedBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "0..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-29",
            "targetLabel": "AS7: Backdoor Implementation",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "AS6: Deploy Cobalt Strike followedBy AS7: Backdoor Implementation."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-29",
        "drawioPosition": {
          "x": 1240.0,
          "y": 1190.0
        },
        "drawioGeometry": {
          "x": 1180.0,
          "y": 1160.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 2020.0,
        "y": 1280.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-32",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-36",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "qzW-ANQ4cShhyDxj2iRk-32",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-35",
            "targetLabel": "Cobalt Strike",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Cobalt Strike Instance instanceOf Cobalt Strike."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-33",
            "name": "employs",
            "label": "employs",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-32",
            "targetLabel": "Cobalt Strike Instance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "AS6: Deploy Cobalt Strike employs Cobalt Strike Instance."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-32",
        "drawioPosition": {
          "x": 724.0,
          "y": 1230.0
        },
        "drawioGeometry": {
          "x": 664.0,
          "y": 1200.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1504.0,
        "y": 1320.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-35",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-36",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "qzW-ANQ4cShhyDxj2iRk-32",
            "sourceLabel": "Cobalt Strike Instance",
            "sourceCardinality": "1..*",
            "target": "qzW-ANQ4cShhyDxj2iRk-35",
            "targetLabel": "Cobalt Strike",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "Cobalt Strike Instance instanceOf Cobalt Strike."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-35",
        "drawioPosition": {
          "x": 420.0,
          "y": 1230.0
        },
        "drawioGeometry": {
          "x": 360.0,
          "y": 1200.0,
          "width": 120.0,
          "height": 60.0
        },
        "layoutWidth": 120,
        "layoutHeight": 60.0,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 1200.0,
        "y": 1320.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-38",
        "name": "Prod-Infra",
        "label": "Prod-Infra",
        "metamodelEntity": "Infrastructure",
        "originalMetamodelEntity": "Infrastructure",
        "description": "Prod-Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "qzW-ANQ4cShhyDxj2iRk-41",
            "name": "usedBy",
            "label": "usedBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "targetLabel": "U1: Employee 1",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Prod-Infra usedBy U1: Employee 1."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-3",
            "name": "madeBy",
            "label": "madeBy",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "Prod-Infra",
            "sourceCardinality": "1",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "targetLabel": "N1: Workstation",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Prod-Infra madeBy N1: Workstation."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-39",
            "name": "manages",
            "label": "manages",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "sourceLabel": "FourOrg",
            "sourceCardinality": "1",
            "target": "qzW-ANQ4cShhyDxj2iRk-38",
            "targetLabel": "Prod-Infra",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "FourOrg manages Prod-Infra."
          }
        ],
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-38",
        "drawioPosition": {
          "x": -70.0,
          "y": 260.0
        },
        "drawioGeometry": {
          "x": -130.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120,
        "layoutHeight": 40,
        "textMaxWidth": 108.0
      },
      "position": {
        "x": 710.0,
        "y": 350.0
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-5",
        "name": "BR1: Organization's data must remain confidential",
        "label": "BR1: Organization's data must remain confidential",
        "metamodelEntity": "BusinessRequirement",
        "originalMetamodelEntity": "BusinessRequirement",
        "description": "BR1: Organization's data must remain confidential is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "qSmbUWHLwFiRWG7dhJGA-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "qVrTcyufrUnFQZm5Z7Rl-5",
            "sourceLabel": "BR1: Organization's data must remain confidential",
            "sourceCardinality": "1..*",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization's data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of organization's data."
          }
        ],
        "incomingRelations": [
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-6",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "sourceLabel": "FourOrg",
            "sourceCardinality": "1",
            "target": "qVrTcyufrUnFQZm5Z7Rl-5",
            "targetLabel": "BR1: Organization's data must remain confidential",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "FourOrg hasBusinessRequirement BR1: Organization's data must remain confidential."
          }
        ],
        "drawioId": "qVrTcyufrUnFQZm5Z7Rl-5",
        "drawioPosition": {
          "x": -340.0,
          "y": 305.0
        },
        "drawioGeometry": {
          "x": -430.0,
          "y": 280.0,
          "width": 180.0,
          "height": 50.0
        },
        "layoutWidth": 180.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 168.0
      },
      "position": {
        "x": 440.0,
        "y": 395.0
      }
    },
    {
      "data": {
        "id": "qSmbUWHLwFiRWG7dhJGA-1",
        "name": "ASR1: Confidentiality of organization's data",
        "label": "ASR1: Confidentiality of organization's data",
        "metamodelEntity": "Asset\nSecurityRequirement",
        "originalMetamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of organization's data is a case-study instance of the Asset\nSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "9SliPCzggZYN6JWVdhkB-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "ASR1: Confidentiality of organization's data",
            "sourceCardinality": "1..*",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of organization's data implementationOf Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "xL1UhOB1JyQPO_Ga4dQB-1",
            "name": "compromises",
            "label": "compromises",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "AS7: Backdoor Implementation compromises ASR1: Confidentiality of organization's data."
          },
          {
            "id": "qSmbUWHLwFiRWG7dhJGA-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "qVrTcyufrUnFQZm5Z7Rl-5",
            "sourceLabel": "BR1: Organization's data must remain confidential",
            "sourceCardinality": "1..*",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BR1: Organization's data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of organization's data."
          },
          {
            "id": "QCLqYGuow9h_xnNMhb7T-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "Project Data",
            "sourceCardinality": "1",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Project Data hasSecurityRequirement ASR1: Confidentiality of organization's data."
          }
        ],
        "drawioId": "qSmbUWHLwFiRWG7dhJGA-1",
        "drawioPosition": {
          "x": -340.0,
          "y": 415.0
        },
        "drawioGeometry": {
          "x": -430.0,
          "y": 390.0,
          "width": 180.0,
          "height": 50.0
        },
        "layoutWidth": 180.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 168.0
      },
      "position": {
        "x": 440.0,
        "y": 505.0
      }
    },
    {
      "data": {
        "id": "9SliPCzggZYN6JWVdhkB-2",
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
            "id": "9SliPCzggZYN6JWVdhkB-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "ASR1: Confidentiality of organization's data",
            "sourceCardinality": "1..*",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "ASR1: Confidentiality of organization's data implementationOf Confidentiality."
          },
          {
            "id": "zjPglk1kbyInOb65LJGi-1",
            "name": "violates",
            "label": "violates",
            "source": "JgCm936JxhOEmBgDc_UP-10",
            "sourceLabel": "T1005",
            "sourceCardinality": "1..*",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1005 violates Confidentiality."
          }
        ],
        "drawioId": "9SliPCzggZYN6JWVdhkB-2",
        "drawioPosition": {
          "x": -570.0,
          "y": 470.0
        },
        "drawioGeometry": {
          "x": -660.0,
          "y": 445.0,
          "width": 180.0,
          "height": 50.0
        },
        "layoutWidth": 180.0,
        "layoutHeight": 50.0,
        "textMaxWidth": 168.0
      },
      "position": {
        "x": 210.0,
        "y": 560.0
      }
    },
    {
      "data": {
        "id": "QCLqYGuow9h_xnNMhb7T-2",
        "name": "Project Data",
        "label": "Project Data",
        "metamodelEntity": "Asset",
        "originalMetamodelEntity": "Asset",
        "description": "Project Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
            "id": "QCLqYGuow9h_xnNMhb7T-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "Project Data",
            "sourceCardinality": "1",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "targetLabel": "ASR1: Confidentiality of organization's data",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Project Data hasSecurityRequirement ASR1: Confidentiality of organization's data."
          }
        ],
        "incomingRelations": [
          {
            "id": "WG_jXR4R0mnxslE-pLWJ-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "N1: Workstation",
            "sourceCardinality": "1",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "targetLabel": "Project Data",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "N1: Workstation hostsResource Project Data."
          },
          {
            "id": "sm1cul3d3wHS5KGZIJT--1",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "targetLabel": "Project Data",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "AS7: Backdoor Implementation targetsResource Project Data."
          }
        ],
        "drawioId": "QCLqYGuow9h_xnNMhb7T-2",
        "drawioPosition": {
          "x": -130.0,
          "y": 567.5
        },
        "drawioGeometry": {
          "x": -200.0,
          "y": 545.0,
          "width": 140.0,
          "height": 45.0
        },
        "layoutWidth": 140.0,
        "layoutHeight": 45.0,
        "textMaxWidth": 128.0
      },
      "position": {
        "x": 650.0,
        "y": 657.5
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-6",
        "name": "T1588.002",
        "label": "T1588.002",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1588.002 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "JgCm936JxhOEmBgDc_UP-7",
            "name": "implements",
            "label": "implements",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS6: Deploy Cobalt Strike",
            "sourceCardinality": "1..*",
            "target": "JgCm936JxhOEmBgDc_UP-6",
            "targetLabel": "T1588.002",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS6: Deploy Cobalt Strike implements T1588.002."
          }
        ],
        "drawioId": "JgCm936JxhOEmBgDc_UP-6",
        "drawioPosition": {
          "x": 1445.0,
          "y": 1060.0
        },
        "drawioGeometry": {
          "x": 1410.0,
          "y": 1035.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 2225.0,
        "y": 1150.0
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-10",
        "name": "T1005",
        "label": "T1005",
        "metamodelEntity": "TTP",
        "originalMetamodelEntity": "TTP",
        "description": "T1005 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
            "id": "zjPglk1kbyInOb65LJGi-1",
            "name": "violates",
            "label": "violates",
            "source": "JgCm936JxhOEmBgDc_UP-10",
            "sourceLabel": "T1005",
            "sourceCardinality": "1..*",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "targetLabel": "Confidentiality",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "T1005 violates Confidentiality."
          }
        ],
        "incomingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-11",
            "name": "implements",
            "label": "implements",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS7: Backdoor Implementation",
            "sourceCardinality": "1..*",
            "target": "JgCm936JxhOEmBgDc_UP-10",
            "targetLabel": "T1005",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "AS7: Backdoor Implementation implements T1005."
          }
        ],
        "drawioId": "JgCm936JxhOEmBgDc_UP-10",
        "drawioPosition": {
          "x": 1445.0,
          "y": 1190.0
        },
        "drawioGeometry": {
          "x": 1410.0,
          "y": 1165.0,
          "width": 70.0,
          "height": 50.0
        },
        "layoutWidth": 120,
        "layoutHeight": 50.0,
        "textMaxWidth": 90
      },
      "position": {
        "x": 2225.0,
        "y": 1280.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-39",
        "label": "manages",
        "name": "manages",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "qzW-ANQ4cShhyDxj2iRk-38",
        "sourceLabel": "FourOrg",
        "targetLabel": "Prod-Infra",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "Infrastructure",
        "description": "FourOrg manages Prod-Infra.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-39",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure"
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-6",
        "label": "hasBusinessRequirement",
        "name": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "qVrTcyufrUnFQZm5Z7Rl-5",
        "sourceLabel": "FourOrg",
        "targetLabel": "BR1: Organization's data must remain confidential",
        "sourceMetamodelEntity": "Organization",
        "targetMetamodelEntity": "BusinessRequirement",
        "description": "FourOrg hasBusinessRequirement BR1: Organization's data must remain confidential.",
        "drawioId": "qVrTcyufrUnFQZm5Z7Rl-6",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* BusinessRequirement"
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-2",
        "label": "alias",
        "name": "alias",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-1",
        "sourceLabel": "APT29",
        "targetLabel": "CozyBear",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "ThreatActor",
        "description": "APT29 alias CozyBear.",
        "drawioId": "-MfVsttqaDO7kn--14NE-2",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor"
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-5",
        "label": "alias",
        "name": "alias",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-4",
        "sourceLabel": "APT29",
        "targetLabel": "YTTRIUM",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "ThreatActor",
        "description": "APT29 alias YTTRIUM.",
        "drawioId": "-MfVsttqaDO7kn--14NE-5",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor"
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-1",
        "label": "relatedTo",
        "name": "relatedTo",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-9",
        "sourceLabel": "APT29",
        "targetLabel": "Russia's SVR",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Adversary",
        "description": "APT29 relatedTo Russia's SVR.",
        "drawioId": "dCjMzqmgwiT5h25rW3wv-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatActor 1..* — 0..* Adversary"
      }
    },
    {
      "data": {
        "id": "xuD4CoUZLWJXzUS_sh0j-3",
        "label": "initiates",
        "name": "initiates",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "xuD4CoUZLWJXzUS_sh0j-2",
        "sourceLabel": "APT29",
        "targetLabel": "Spearphishing Attack",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "Threat",
        "description": "APT29 initiates Spearphishing Attack.",
        "drawioId": "xuD4CoUZLWJXzUS_sh0j-3",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat"
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-7",
        "label": "alias",
        "name": "alias",
        "kind": "relationship",
        "source": "-MfVsttqaDO7kn--14NE-4",
        "target": "-MfVsttqaDO7kn--14NE-1",
        "sourceLabel": "YTTRIUM",
        "targetLabel": "CozyBear",
        "sourceMetamodelEntity": "ThreatActor",
        "targetMetamodelEntity": "ThreatActor",
        "description": "YTTRIUM alias CozyBear.",
        "drawioId": "-MfVsttqaDO7kn--14NE-7",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor"
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-4",
        "label": "hasAdversaryType",
        "name": "hasAdversaryType",
        "kind": "relationship",
        "source": "-MfVsttqaDO7kn--14NE-9",
        "target": "dCjMzqmgwiT5h25rW3wv-3",
        "sourceLabel": "Russia's SVR",
        "targetLabel": "Nation State",
        "sourceMetamodelEntity": "Adversary",
        "targetMetamodelEntity": "AdversaryType",
        "description": "Russia's SVR hasAdversaryType Nation State.",
        "drawioId": "dCjMzqmgwiT5h25rW3wv-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Adversary 1..* — 1 AdversaryType"
      }
    },
    {
      "data": {
        "id": "5p-efhzWygpeI9_lYFaW-3",
        "label": "startsWith",
        "name": "startsWith",
        "kind": "relationship",
        "source": "xuD4CoUZLWJXzUS_sh0j-2",
        "target": "5p-efhzWygpeI9_lYFaW-2",
        "sourceLabel": "Spearphishing Attack",
        "targetLabel": "AS1: Spearphishing mimicking Onedrive",
        "sourceMetamodelEntity": "Threat",
        "targetMetamodelEntity": "ThreatStep",
        "description": "Spearphishing Attack startsWith AS1: Spearphishing mimicking Onedrive.",
        "drawioId": "5p-efhzWygpeI9_lYFaW-3",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "QWGctnTdT4-Q2VtuhLHI-3",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "QWGctnTdT4-Q2VtuhLHI-2",
        "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
        "targetLabel": "T1566.003",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS1: Spearphishing mimicking Onedrive implements T1566.003.",
        "drawioId": "QWGctnTdT4-Q2VtuhLHI-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-3",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "P7PCyI3RzNPrK-RiMjAq-2",
        "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
        "targetLabel": "AS2: Redirect to compromised website",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS1: Spearphishing mimicking Onedrive followedBy AS2: Redirect to compromised website.",
        "drawioId": "P7PCyI3RzNPrK-RiMjAq-3",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "gcXcCobT5xsXrkAcETY5-1",
        "label": "exploits",
        "name": "exploits",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "AS2: Redirect to compromised website",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS2: Redirect to compromised website exploits Prone to Phishing.",
        "drawioId": "gcXcCobT5xsXrkAcETY5-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-4",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "Hs5jixxFsbNwWR-Au2Cb-3",
        "sourceLabel": "AS2: Redirect to compromised website",
        "targetLabel": "AS3: Download and Execute Malicious ZIP",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS2: Redirect to compromised website followedBy AS3: Download and Execute Malicious ZIP.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-4",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-6",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "P7PCyI3RzNPrK-RiMjAq-8",
        "sourceLabel": "AS2: Redirect to compromised website",
        "targetLabel": "T1584.001",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS2: Redirect to compromised website implements T1584.001.",
        "drawioId": "P7PCyI3RzNPrK-RiMjAq-6",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-1",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-8",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1584.001",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1584.001 exploitsVulnerability Prone to Phishing.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-1",
        "label": "hasAccessTo",
        "name": "hasAccessTo",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-3",
        "target": "1cakm77nuum5QVv6bJuu-6",
        "sourceLabel": "U1: Employee 1",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "User",
        "targetMetamodelEntity": "Node",
        "description": "U1: Employee 1 hasAccessTo N1: Workstation.",
        "drawioId": "1cakm77nuum5QVv6bJuu-1",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-4",
        "label": "hasNodeType",
        "name": "hasNodeType",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-6",
        "target": "1cakm77nuum5QVv6bJuu-7",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Desktop Computer",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "NodeType",
        "description": "N1: Workstation hasNodeType Desktop Computer.",
        "drawioId": "1cakm77nuum5QVv6bJuu-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType"
      }
    },
    {
      "data": {
        "id": "WG_jXR4R0mnxslE-pLWJ-2",
        "label": "hostsResource",
        "name": "hostsResource",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-6",
        "target": "QCLqYGuow9h_xnNMhb7T-2",
        "sourceLabel": "N1: Workstation",
        "targetLabel": "Project Data",
        "sourceMetamodelEntity": "Node",
        "targetMetamodelEntity": "Asset",
        "description": "N1: Workstation hostsResource Project Data.",
        "drawioId": "WG_jXR4R0mnxslE-pLWJ-2",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-1",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "QWGctnTdT4-Q2VtuhLHI-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1566.003",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1566.003 exploitsVulnerability Prone to Phishing.",
        "drawioId": "lRILMvQgxyY53MFmug6h-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-3",
        "label": "exploits",
        "name": "exploits",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "AS1: Spearphishing mimicking Onedrive",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS1: Spearphishing mimicking Onedrive exploits Prone to Phishing.",
        "drawioId": "lRILMvQgxyY53MFmug6h-3",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-5",
        "label": "affectsUser",
        "name": "affectsUser",
        "kind": "relationship",
        "source": "lRILMvQgxyY53MFmug6h-7",
        "target": "1cakm77nuum5QVv6bJuu-3",
        "sourceLabel": "Prone to Phishing",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "HumanVulnerability",
        "targetMetamodelEntity": "User",
        "description": "Prone to Phishing affectsUser U1: Employee 1.",
        "drawioId": "lRILMvQgxyY53MFmug6h-5",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HumanVulnerability 0..* — 0..* User"
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-12",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "Hs5jixxFsbNwWR-Au2Cb-11",
        "sourceLabel": "AS3: Download and Execute Malicious ZIP",
        "targetLabel": "T1204.002",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS3: Download and Execute Malicious ZIP implements T1204.002.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-12",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-17",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "Hs5jixxFsbNwWR-Au2Cb-16",
        "sourceLabel": "AS3: Download and Execute Malicious ZIP",
        "targetLabel": "AS4: DLL Implant with Powershell",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS3: Download and Execute Malicious ZIP followedBy AS4: DLL Implant with Powershell.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-17",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "kntNElvYiTp8xnw6UYOk-2",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "kntNElvYiTp8xnw6UYOk-1",
        "sourceLabel": "AS3: Download and Execute Malicious ZIP",
        "targetLabel": "ds7002.zip",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS3: Download and Execute Malicious ZIP employs ds7002.zip.",
        "drawioId": "kntNElvYiTp8xnw6UYOk-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-9",
        "label": "exploits",
        "name": "exploits",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "AS3: Download and Execute Malicious ZIP",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "AS3: Download and Execute Malicious ZIP exploits Prone to Phishing.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-9",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-14",
        "label": "exploitsVulnerability",
        "name": "exploitsVulnerability",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-11",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1204.002",
        "targetLabel": "Prone to Phishing",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "HumanVulnerability",
        "description": "T1204.002 exploitsVulnerability Prone to Phishing.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-14",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-3",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "i68WAE7NELcuDDsLpOV2-2",
        "sourceLabel": "AS4: DLL Implant with Powershell",
        "targetLabel": "AS5: Malicious File Execution",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS4: DLL Implant with Powershell followedBy AS5: Malicious File Execution.",
        "drawioId": "i68WAE7NELcuDDsLpOV2-3",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-11",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "i68WAE7NELcuDDsLpOV2-6",
        "sourceLabel": "AS4: DLL Implant with Powershell",
        "targetLabel": "Powershell Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS4: DLL Implant with Powershell employs Powershell Instance.",
        "drawioId": "i68WAE7NELcuDDsLpOV2-11",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-19",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "Hs5jixxFsbNwWR-Au2Cb-21",
        "sourceLabel": "AS4: DLL Implant with Powershell",
        "targetLabel": "T1059.001",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS4: DLL Implant with Powershell implements T1059.001.",
        "drawioId": "Hs5jixxFsbNwWR-Au2Cb-19",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "7ORuww9_r7kVZ126CwW4-3",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "kntNElvYiTp8xnw6UYOk-1",
        "target": "7ORuww9_r7kVZ126CwW4-2",
        "sourceLabel": "ds7002.zip",
        "targetLabel": "ZIP File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "ds7002.zip instanceOf ZIP File.",
        "drawioId": "7ORuww9_r7kVZ126CwW4-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-13",
        "label": "deploys",
        "name": "deploys",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "i68WAE7NELcuDDsLpOV2-12",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "ds7002.PDF",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Powershell Instance deploys ds7002.PDF.",
        "drawioId": "i68WAE7NELcuDDsLpOV2-13",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-16",
        "label": "deploys",
        "name": "deploys",
        "kind": "relationship",
        "source": "kntNElvYiTp8xnw6UYOk-1",
        "target": "i68WAE7NELcuDDsLpOV2-15",
        "sourceLabel": "ds7002.zip",
        "targetLabel": "ds7002.lnk",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "ds7002.zip deploys ds7002.lnk.",
        "drawioId": "i68WAE7NELcuDDsLpOV2-16",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "afhzImNPabiAoD0HF1qV-2",
        "label": "associatedTo",
        "name": "associatedTo",
        "kind": "relationship",
        "source": "afhzImNPabiAoD0HF1qV-1",
        "target": "kntNElvYiTp8xnw6UYOk-1",
        "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
        "targetLabel": "ds7002.zip",
        "sourceMetamodelEntity": "Indicator",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1 associatedTo ds7002.zip.",
        "drawioId": "afhzImNPabiAoD0HF1qV-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Indicator 1..* — 1 AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-20",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-19",
        "sourceLabel": "AS5: Malicious File Execution",
        "targetLabel": "T1218.011",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS5: Malicious File Execution implements T1218.011.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-20",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-22",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "i68WAE7NELcuDDsLpOV2-6",
        "sourceLabel": "AS5: Malicious File Execution",
        "targetLabel": "Powershell Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS5: Malicious File Execution employs Powershell Instance.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-22",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-24",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-3",
        "sourceLabel": "AS5: Malicious File Execution",
        "targetLabel": "cyzfc.dat",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS5: Malicious File Execution employs cyzfc.dat.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-24",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-27",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-26",
        "sourceLabel": "AS5: Malicious File Execution",
        "targetLabel": "AS6: Deploy Cobalt Strike",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS5: Malicious File Execution followedBy AS6: Deploy Cobalt Strike.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-27",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-7",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "JgCm936JxhOEmBgDc_UP-6",
        "sourceLabel": "AS6: Deploy Cobalt Strike",
        "targetLabel": "T1588.002",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS6: Deploy Cobalt Strike implements T1588.002.",
        "drawioId": "JgCm936JxhOEmBgDc_UP-7",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-4",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "i68WAE7NELcuDDsLpOV2-10",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "Powershell",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Powershell Instance instanceOf Powershell.",
        "drawioId": "i68WAE7NELcuDDsLpOV2-4",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-4",
        "label": "deploys",
        "name": "deploys",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "qzW-ANQ4cShhyDxj2iRk-3",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "cyzfc.dat",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "Powershell Instance deploys cyzfc.dat.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-4",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-10",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-12",
        "target": "qzW-ANQ4cShhyDxj2iRk-9",
        "sourceLabel": "ds7002.PDF",
        "targetLabel": "PDF File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "ds7002.PDF instanceOf PDF File.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-10",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-7",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-15",
        "target": "qzW-ANQ4cShhyDxj2iRk-6",
        "sourceLabel": "ds7002.lnk",
        "targetLabel": "LNK File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "ds7002.lnk instanceOf LNK File.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-7",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-13",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-3",
        "target": "qzW-ANQ4cShhyDxj2iRk-12",
        "sourceLabel": "cyzfc.dat",
        "targetLabel": "DAT File",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "cyzfc.dat instanceOf DAT File.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-13",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-16",
        "label": "refersTo",
        "name": "refersTo",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-18",
        "sourceLabel": "AS5: Malicious File Execution",
        "targetLabel": "Execute DLL",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS5: Malicious File Execution refersTo Execute DLL.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-16",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-30",
        "label": "followedBy",
        "name": "followedBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "qzW-ANQ4cShhyDxj2iRk-29",
        "sourceLabel": "AS6: Deploy Cobalt Strike",
        "targetLabel": "AS7: Backdoor Implementation",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "ThreatStep",
        "description": "AS6: Deploy Cobalt Strike followedBy AS7: Backdoor Implementation.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-30",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-33",
        "label": "employs",
        "name": "employs",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "qzW-ANQ4cShhyDxj2iRk-32",
        "sourceLabel": "AS6: Deploy Cobalt Strike",
        "targetLabel": "Cobalt Strike Instance",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "AttackToolInstance",
        "description": "AS6: Deploy Cobalt Strike employs Cobalt Strike Instance.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-33",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-11",
        "label": "implements",
        "name": "implements",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "JgCm936JxhOEmBgDc_UP-10",
        "sourceLabel": "AS7: Backdoor Implementation",
        "targetLabel": "T1005",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "TTP",
        "description": "AS7: Backdoor Implementation implements T1005.",
        "drawioId": "JgCm936JxhOEmBgDc_UP-11",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
      }
    },
    {
      "data": {
        "id": "xL1UhOB1JyQPO_Ga4dQB-1",
        "label": "compromises",
        "name": "compromises",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "AS7: Backdoor Implementation",
        "targetLabel": "ASR1: Confidentiality of organization's data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset\nSecurityRequirement",
        "description": "AS7: Backdoor Implementation compromises ASR1: Confidentiality of organization's data.",
        "drawioId": "xL1UhOB1JyQPO_Ga4dQB-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "sm1cul3d3wHS5KGZIJT--1",
        "label": "targetsResource",
        "name": "targetsResource",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "QCLqYGuow9h_xnNMhb7T-2",
        "sourceLabel": "AS7: Backdoor Implementation",
        "targetLabel": "Project Data",
        "sourceMetamodelEntity": "ThreatStep",
        "targetMetamodelEntity": "Asset",
        "description": "AS7: Backdoor Implementation targetsResource Project Data.",
        "drawioId": "sm1cul3d3wHS5KGZIJT--1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-36",
        "label": "instanceOf",
        "name": "instanceOf",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-32",
        "target": "qzW-ANQ4cShhyDxj2iRk-35",
        "sourceLabel": "Cobalt Strike Instance",
        "targetLabel": "Cobalt Strike",
        "sourceMetamodelEntity": "AttackToolInstance",
        "targetMetamodelEntity": "AttackTool",
        "description": "Cobalt Strike Instance instanceOf Cobalt Strike.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-36",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-41",
        "label": "usedBy",
        "name": "usedBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-38",
        "target": "1cakm77nuum5QVv6bJuu-3",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "U1: Employee 1",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "User",
        "description": "Prod-Infra usedBy U1: Employee 1.",
        "drawioId": "qzW-ANQ4cShhyDxj2iRk-41",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* User"
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-3",
        "label": "madeBy",
        "name": "madeBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-38",
        "target": "1cakm77nuum5QVv6bJuu-6",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "N1: Workstation",
        "sourceMetamodelEntity": "Infrastructure",
        "targetMetamodelEntity": "Node",
        "description": "Prod-Infra madeBy N1: Workstation.",
        "drawioId": "qVrTcyufrUnFQZm5Z7Rl-3",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node"
      }
    },
    {
      "data": {
        "id": "qSmbUWHLwFiRWG7dhJGA-2",
        "label": "drivesSecurityRequirement",
        "name": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "qVrTcyufrUnFQZm5Z7Rl-5",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "BR1: Organization's data must remain confidential",
        "targetLabel": "ASR1: Confidentiality of organization's data",
        "sourceMetamodelEntity": "BusinessRequirement",
        "targetMetamodelEntity": "Asset\nSecurityRequirement",
        "description": "BR1: Organization's data must remain confidential drivesSecurityRequirement ASR1: Confidentiality of organization's data.",
        "drawioId": "qSmbUWHLwFiRWG7dhJGA-2",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "9SliPCzggZYN6JWVdhkB-3",
        "label": "implementationOf",
        "name": "implementationOf",
        "kind": "relationship",
        "source": "qSmbUWHLwFiRWG7dhJGA-1",
        "target": "9SliPCzggZYN6JWVdhkB-2",
        "sourceLabel": "ASR1: Confidentiality of organization's data",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "Asset\nSecurityRequirement",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "ASR1: Confidentiality of organization's data implementationOf Confidentiality.",
        "drawioId": "9SliPCzggZYN6JWVdhkB-3",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "QCLqYGuow9h_xnNMhb7T-4",
        "label": "hasSecurityRequirement",
        "name": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "QCLqYGuow9h_xnNMhb7T-2",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "Project Data",
        "targetLabel": "ASR1: Confidentiality of organization's data",
        "sourceMetamodelEntity": "Asset",
        "targetMetamodelEntity": "Asset\nSecurityRequirement",
        "description": "Project Data hasSecurityRequirement ASR1: Confidentiality of organization's data.",
        "drawioId": "QCLqYGuow9h_xnNMhb7T-4",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "zjPglk1kbyInOb65LJGi-1",
        "label": "violates",
        "name": "violates",
        "kind": "relationship",
        "source": "JgCm936JxhOEmBgDc_UP-10",
        "target": "9SliPCzggZYN6JWVdhkB-2",
        "sourceLabel": "T1005",
        "targetLabel": "Confidentiality",
        "sourceMetamodelEntity": "TTP",
        "targetMetamodelEntity": "SecurityRequirement",
        "description": "T1005 violates Confidentiality.",
        "drawioId": "zjPglk1kbyInOb65LJGi-1",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement"
      }
    }
  ]
};
