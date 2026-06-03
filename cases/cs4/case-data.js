const caseData = {
  "metadata": {
    "id": "cs4",
    "title": "CS4 \u2014 Phishing-led compromise and access misuse",
    "shortTitle": "Phishing-led compromise and access misuse",
    "description": "This case implementation instantiates a human-mediated phishing compromise scenario involving phishing delivery, user interaction, malicious payload execution, tooling deployment, access misuse, and downstream impact on protected information assets.",
    "source": "metamodel_v2-case4.drawio (1).xml",
    "determinants": [
      "D3",
      "D6",
      "D7"
    ],
    "patterns": [
      "P2",
      "P4",
      "P5"
    ],
    "layout": {
      "minX": -660.0,
      "minY": 30.0,
      "maxX": 1480.0,
      "maxY": 1270.0,
      "width": 2460.0,
      "height": 1560.0,
      "padding": 160
    }
  },
  "nodes": [
    {
      "data": {
        "id": "Wo6s_1948o2_fHKdvt1y-1",
        "name": "USAHomeCountry",
        "label": "USAHomeCountry",
        "instanceName": "USA",
        "metamodelEntity": "HomeCountry",
        "description": "USAHomeCountry is a case-study instance of the HomeCountry entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HomeCountry is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": -250.0,
          "y": 190.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5_aewu5AFsPlSYAPBgC2-1",
            "name": "basedIn",
            "label": "basedIn",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "Wo6s_1948o2_fHKdvt1y-1",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "USAHomeCountry",
            "description": "FourOrgOrganization basedIn USAHomeCountry."
          }
        ]
      },
      "position": {
        "x": 570.0,
        "y": 320.0
      }
    },
    {
      "data": {
        "id": "HZHTnUwxUhuAmBVm-COV-1",
        "name": "FourOrgOrganization",
        "label": "FourOrgOrganization",
        "instanceName": "FourOrg",
        "metamodelEntity": "Organization",
        "description": "FourOrgOrganization is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -130.0,
          "y": 60.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "5_aewu5AFsPlSYAPBgC2-1",
            "name": "basedIn",
            "label": "basedIn",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "Wo6s_1948o2_fHKdvt1y-1",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "USAHomeCountry",
            "description": "FourOrgOrganization basedIn USAHomeCountry."
          },
          {
            "id": "5_aewu5AFsPlSYAPBgC2-4",
            "name": "operatesIn",
            "label": "operatesIn",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "5_aewu5AFsPlSYAPBgC2-3",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "USAHomeCountry",
            "description": "FourOrgOrganization operatesIn USAHomeCountry."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-39",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "Prod-InfraInfrastructure",
            "description": "FourOrgOrganization manages Prod-InfraInfrastructure."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-6",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "qVrTcyufrUnFQZm5Z7Rl-5",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
            "description": "FourOrgOrganization hasBusinessRequirement BR1: Organization's data must remain confidentialBusinessRequirement."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 690.0,
        "y": 190.0
      }
    },
    {
      "data": {
        "id": "5_aewu5AFsPlSYAPBgC2-3",
        "name": "USAHomeCountry",
        "label": "USAHomeCountry",
        "instanceName": "USA",
        "metamodelEntity": "HomeCountry",
        "description": "USAHomeCountry is a case-study instance of the HomeCountry entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HomeCountry is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 30.0,
          "y": 140.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "5_aewu5AFsPlSYAPBgC2-4",
            "name": "operatesIn",
            "label": "operatesIn",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "5_aewu5AFsPlSYAPBgC2-3",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "USAHomeCountry",
            "description": "FourOrgOrganization operatesIn USAHomeCountry."
          }
        ]
      },
      "position": {
        "x": 850.0,
        "y": 270.0
      }
    },
    {
      "data": {
        "id": "LVuWc9dPByfjlFdt02Zd-1",
        "name": "APT29ThreatSource",
        "label": "APT29ThreatSource",
        "instanceName": "APT29",
        "metamodelEntity": "ThreatSource",
        "description": "APT29ThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-2",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "CozyBearThreatSource",
            "description": "APT29ThreatSource alias CozyBearThreatSource."
          },
          {
            "id": "-MfVsttqaDO7kn--14NE-5",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-4",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "YTTRIUMThreatSource",
            "description": "APT29ThreatSource alias YTTRIUMThreatSource."
          },
          {
            "id": "dCjMzqmgwiT5h25rW3wv-1",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-9",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "Russia's SVRAdversary",
            "description": "APT29ThreatSource relatedTo Russia's SVRAdversary."
          },
          {
            "id": "xuD4CoUZLWJXzUS_sh0j-3",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "xuD4CoUZLWJXzUS_sh0j-2",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "Spearphishing AttackThreatEvent",
            "description": "APT29ThreatSource initiates Spearphishing AttackThreatEvent."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1710.0,
        "y": 200.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-1",
        "name": "CozyBearThreatSource",
        "label": "CozyBearThreatSource",
        "instanceName": "CozyBear",
        "metamodelEntity": "ThreatSource",
        "description": "CozyBearThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 710.0,
          "y": 30.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-2",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "CozyBearThreatSource",
            "description": "APT29ThreatSource alias CozyBearThreatSource."
          },
          {
            "id": "-MfVsttqaDO7kn--14NE-7",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "-MfVsttqaDO7kn--14NE-4",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "sourceLabel": "YTTRIUMThreatSource",
            "targetLabel": "CozyBearThreatSource",
            "description": "YTTRIUMThreatSource alias CozyBearThreatSource."
          }
        ]
      },
      "position": {
        "x": 1530.0,
        "y": 160.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-4",
        "name": "YTTRIUMThreatSource",
        "label": "YTTRIUMThreatSource",
        "instanceName": "YTTRIUM",
        "metamodelEntity": "ThreatSource",
        "description": "YTTRIUMThreatSource is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 720.0,
          "y": 150.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-7",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "-MfVsttqaDO7kn--14NE-4",
            "target": "-MfVsttqaDO7kn--14NE-1",
            "sourceLabel": "YTTRIUMThreatSource",
            "targetLabel": "CozyBearThreatSource",
            "description": "YTTRIUMThreatSource alias CozyBearThreatSource."
          }
        ],
        "incomingRelations": [
          {
            "id": "-MfVsttqaDO7kn--14NE-5",
            "name": "alias",
            "label": "alias",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-4",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "YTTRIUMThreatSource",
            "description": "APT29ThreatSource alias YTTRIUMThreatSource."
          }
        ]
      },
      "position": {
        "x": 1540.0,
        "y": 280.0
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-9",
        "name": "Russia's SVRAdversary",
        "label": "Russia's SVRAdversary",
        "instanceName": "Russia's SVR",
        "metamodelEntity": "Adversary",
        "description": "Russia's SVRAdversary is a case-study instance of the Adversary entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Adversary is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 1100.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "dCjMzqmgwiT5h25rW3wv-4",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "kind": "relationship",
            "source": "-MfVsttqaDO7kn--14NE-9",
            "target": "dCjMzqmgwiT5h25rW3wv-3",
            "sourceLabel": "Russia's SVRAdversary",
            "targetLabel": "Nation StateAdversaryType",
            "description": "Russia's SVRAdversary hasAdversaryType Nation StateAdversaryType."
          }
        ],
        "incomingRelations": [
          {
            "id": "dCjMzqmgwiT5h25rW3wv-1",
            "name": "relatedTo",
            "label": "relatedTo",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "-MfVsttqaDO7kn--14NE-9",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "Russia's SVRAdversary",
            "description": "APT29ThreatSource relatedTo Russia's SVRAdversary."
          }
        ]
      },
      "position": {
        "x": 1920.0,
        "y": 200.0
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-3",
        "name": "Nation StateAdversaryType",
        "label": "Nation StateAdversaryType",
        "instanceName": "Nation State",
        "metamodelEntity": "AdversaryType",
        "description": "Nation StateAdversaryType is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AdversaryType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1100.0,
          "y": 150.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "dCjMzqmgwiT5h25rW3wv-4",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "kind": "relationship",
            "source": "-MfVsttqaDO7kn--14NE-9",
            "target": "dCjMzqmgwiT5h25rW3wv-3",
            "sourceLabel": "Russia's SVRAdversary",
            "targetLabel": "Nation StateAdversaryType",
            "description": "Russia's SVRAdversary hasAdversaryType Nation StateAdversaryType."
          }
        ]
      },
      "position": {
        "x": 1920.0,
        "y": 280.0
      }
    },
    {
      "data": {
        "id": "xuD4CoUZLWJXzUS_sh0j-2",
        "name": "Spearphishing AttackThreatEvent",
        "label": "Spearphishing AttackThreatEvent",
        "instanceName": "Spearphishing Attack",
        "metamodelEntity": "ThreatEvent",
        "description": "Spearphishing AttackThreatEvent is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 190.0,
          "width": 120.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "5p-efhzWygpeI9_lYFaW-3",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "xuD4CoUZLWJXzUS_sh0j-2",
            "target": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "Spearphishing AttackThreatEvent",
            "targetLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "description": "Spearphishing AttackThreatEvent startsWith AS1: Spearphishing mimicking OnedriveAttackStepItem."
          }
        ],
        "incomingRelations": [
          {
            "id": "xuD4CoUZLWJXzUS_sh0j-3",
            "name": "initiates",
            "label": "initiates",
            "kind": "relationship",
            "source": "LVuWc9dPByfjlFdt02Zd-1",
            "target": "xuD4CoUZLWJXzUS_sh0j-2",
            "sourceLabel": "APT29ThreatSource",
            "targetLabel": "Spearphishing AttackThreatEvent",
            "description": "APT29ThreatSource initiates Spearphishing AttackThreatEvent."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 320.0
      }
    },
    {
      "data": {
        "id": "5p-efhzWygpeI9_lYFaW-2",
        "name": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "label": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "instanceName": "AS1: Spearphishing mimicking Onedrive",
        "metamodelEntity": "AttackStepItem",
        "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 280.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "MH3u3nxTp3A76fCaIXuf-2",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "MH3u3nxTp3A76fCaIXuf-1",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "SpearphishingAttackStep",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem refersTo SpearphishingAttackStep."
          },
          {
            "id": "QWGctnTdT4-Q2VtuhLHI-3",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "QWGctnTdT4-Q2VtuhLHI-2",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "T1566.003TTP",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem implements T1566.003TTP."
          },
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem followedBy AS2: Redirect to compromised websiteAttackStepItem."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-3",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem exploits Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "5p-efhzWygpeI9_lYFaW-3",
            "name": "startsWith",
            "label": "startsWith",
            "kind": "relationship",
            "source": "xuD4CoUZLWJXzUS_sh0j-2",
            "target": "5p-efhzWygpeI9_lYFaW-2",
            "sourceLabel": "Spearphishing AttackThreatEvent",
            "targetLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "description": "Spearphishing AttackThreatEvent startsWith AS1: Spearphishing mimicking OnedriveAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 410.0
      }
    },
    {
      "data": {
        "id": "MH3u3nxTp3A76fCaIXuf-1",
        "name": "SpearphishingAttackStep",
        "label": "SpearphishingAttackStep",
        "instanceName": "Spearphishing",
        "metamodelEntity": "AttackStep",
        "description": "SpearphishingAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 660.0,
          "y": 285.0,
          "width": 120.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "MH3u3nxTp3A76fCaIXuf-2",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "MH3u3nxTp3A76fCaIXuf-1",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "SpearphishingAttackStep",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem refersTo SpearphishingAttackStep."
          }
        ]
      },
      "position": {
        "x": 1480.0,
        "y": 415.0
      }
    },
    {
      "data": {
        "id": "QWGctnTdT4-Q2VtuhLHI-2",
        "name": "T1566.003TTP",
        "label": "T1566.003TTP",
        "instanceName": "T1566.003",
        "metamodelEntity": "TTP",
        "description": "T1566.003TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1090.0,
          "y": 285.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "lRILMvQgxyY53MFmug6h-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "QWGctnTdT4-Q2VtuhLHI-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1566.003TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1566.003TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "QWGctnTdT4-Q2VtuhLHI-3",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "QWGctnTdT4-Q2VtuhLHI-2",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "T1566.003TTP",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem implements T1566.003TTP."
          }
        ]
      },
      "position": {
        "x": 1910.0,
        "y": 415.0
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-2",
        "name": "AS2: Redirect to compromised websiteAttackStepItem",
        "label": "AS2: Redirect to compromised websiteAttackStepItem",
        "instanceName": "AS2: Redirect to compromised website",
        "metamodelEntity": "AttackStepItem",
        "description": "AS2: Redirect to compromised websiteAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 420.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-10",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-9",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "Use of compromised websiteAttackStep",
            "description": "AS2: Redirect to compromised websiteAttackStepItem refersTo Use of compromised websiteAttackStep."
          },
          {
            "id": "gcXcCobT5xsXrkAcETY5-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS2: Redirect to compromised websiteAttackStepItem exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-4",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "description": "AS2: Redirect to compromised websiteAttackStepItem followedBy AS3: Download and Execute Malicious ZIPAttackStepItem."
          },
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-6",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-8",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "T1584.001TTP",
            "description": "AS2: Redirect to compromised websiteAttackStepItem implements T1584.001TTP."
          }
        ],
        "incomingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-2",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem followedBy AS2: Redirect to compromised websiteAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 550.0
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-8",
        "name": "T1584.001TTP",
        "label": "T1584.001TTP",
        "instanceName": "T1584.001",
        "metamodelEntity": "TTP",
        "description": "T1584.001TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1100.0,
          "y": 425.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-8",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1584.001TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1584.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-6",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-8",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "T1584.001TTP",
            "description": "AS2: Redirect to compromised websiteAttackStepItem implements T1584.001TTP."
          }
        ]
      },
      "position": {
        "x": 1920.0,
        "y": 555.0
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-9",
        "name": "Use of compromised websiteAttackStep",
        "label": "Use of compromised websiteAttackStep",
        "instanceName": "Use of compromised website",
        "metamodelEntity": "AttackStep",
        "description": "Use of compromised websiteAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 650.0,
          "y": 420.0,
          "width": 130.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "P7PCyI3RzNPrK-RiMjAq-10",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "P7PCyI3RzNPrK-RiMjAq-9",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "Use of compromised websiteAttackStep",
            "description": "AS2: Redirect to compromised websiteAttackStepItem refersTo Use of compromised websiteAttackStep."
          }
        ]
      },
      "position": {
        "x": 1470.0,
        "y": 550.0
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-3",
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
          "x": 320.0,
          "y": 295.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-3",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
          }
        ],
        "incomingRelations": [
          {
            "id": "lRILMvQgxyY53MFmug6h-5",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "lRILMvQgxyY53MFmug6h-7",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-41",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
          }
        ]
      },
      "position": {
        "x": 1140.0,
        "y": 425.0
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-6",
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
          "x": 220.0,
          "y": 445.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "target": "1cakm77nuum5QVv6bJuu-7",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
          },
          {
            "id": "WG_jXR4R0mnxslE-pLWJ-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Project DataAsset",
            "description": "N1: WorkstationNode hostsResource Project DataAsset."
          }
        ],
        "incomingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-1",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-3",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "U1: Employee 1User",
            "targetLabel": "N1: WorkstationNode",
            "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-3",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
          }
        ]
      },
      "position": {
        "x": 1040.0,
        "y": 575.0
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-7",
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
          "x": 220.0,
          "y": 545.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "1cakm77nuum5QVv6bJuu-4",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "target": "1cakm77nuum5QVv6bJuu-7",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Desktop ComputerNodeType",
            "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
          }
        ]
      },
      "position": {
        "x": 1040.0,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-7",
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
          "x": 470.0,
          "y": 195.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "lRILMvQgxyY53MFmug6h-5",
            "name": "affectsUser",
            "label": "affectsUser",
            "kind": "relationship",
            "source": "lRILMvQgxyY53MFmug6h-7",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "Prone to PhishingHumanVulnerability",
            "targetLabel": "U1: Employee 1User",
            "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
          }
        ],
        "incomingRelations": [
          {
            "id": "gcXcCobT5xsXrkAcETY5-1",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS2: Redirect to compromised websiteAttackStepItem exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-8",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1584.001TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1584.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "QWGctnTdT4-Q2VtuhLHI-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1566.003TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1566.003TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          },
          {
            "id": "lRILMvQgxyY53MFmug6h-3",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "5p-efhzWygpeI9_lYFaW-2",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-9",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-6",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "User Execution of Malicious FilesAttackStep",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "User Execution of Malicious FilesAttackStep exploits Prone to PhishingHumanVulnerability."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-14",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-11",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1204.002TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1204.002TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ]
      },
      "position": {
        "x": 1290.0,
        "y": 325.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-3",
        "name": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "label": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "instanceName": "AS3: Download and Execute Malicious ZIP",
        "metamodelEntity": "AttackStepItem",
        "description": "AS3: Download and Execute Malicious ZIPAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 560.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-7",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-6",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "User Execution of Malicious FilesAttackStep",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem refersTo User Execution of Malicious FilesAttackStep."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-12",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-11",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "T1204.002TTP",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem implements T1204.002TTP."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-17",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem followedBy AS4: DLL Implant with PowershellAttackStepItem."
          },
          {
            "id": "kntNElvYiTp8xnw6UYOk-2",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "ds7002.zipAttackToolInstance",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem employs ds7002.zipAttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-4",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "P7PCyI3RzNPrK-RiMjAq-2",
            "target": "Hs5jixxFsbNwWR-Au2Cb-3",
            "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
            "targetLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "description": "AS2: Redirect to compromised websiteAttackStepItem followedBy AS3: Download and Execute Malicious ZIPAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 690.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-6",
        "name": "User Execution of Malicious FilesAttackStep",
        "label": "User Execution of Malicious FilesAttackStep",
        "instanceName": "User Execution of Malicious Files",
        "metamodelEntity": "AttackStep",
        "description": "User Execution of Malicious FilesAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 650.0,
          "y": 565.0,
          "width": 130.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-9",
            "name": "exploits",
            "label": "exploits",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-6",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "User Execution of Malicious FilesAttackStep",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "User Execution of Malicious FilesAttackStep exploits Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-7",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-6",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "User Execution of Malicious FilesAttackStep",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem refersTo User Execution of Malicious FilesAttackStep."
          }
        ]
      },
      "position": {
        "x": 1470.0,
        "y": 695.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-11",
        "name": "T1204.002TTP",
        "label": "T1204.002TTP",
        "instanceName": "T1204.002",
        "metamodelEntity": "TTP",
        "description": "T1204.002TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1100.0,
          "y": 565.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-14",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-11",
            "target": "lRILMvQgxyY53MFmug6h-7",
            "sourceLabel": "T1204.002TTP",
            "targetLabel": "Prone to PhishingHumanVulnerability",
            "description": "T1204.002TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-12",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-11",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "T1204.002TTP",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem implements T1204.002TTP."
          }
        ]
      },
      "position": {
        "x": 1920.0,
        "y": 695.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-16",
        "name": "AS4: DLL Implant with PowershellAttackStepItem",
        "label": "AS4: DLL Implant with PowershellAttackStepItem",
        "instanceName": "AS4: DLL Implant with Powershell",
        "metamodelEntity": "AttackStepItem",
        "description": "AS4: DLL Implant with PowershellAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 890.0,
          "y": 680.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-23",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "Hs5jixxFsbNwWR-Au2Cb-22",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "Inject of Malicious FilesAttackStep",
            "description": "AS4: DLL Implant with PowershellAttackStepItem refersTo Inject of Malicious FilesAttackStep."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "description": "AS4: DLL Implant with PowershellAttackStepItem followedBy AS5: Malicious File ExecutionAttackStepItem."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-11",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "Powershell InstanceAttackToolInstance",
            "description": "AS4: DLL Implant with PowershellAttackStepItem employs Powershell InstanceAttackToolInstance."
          },
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-19",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "Hs5jixxFsbNwWR-Au2Cb-21",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "T1059.001TTP",
            "description": "AS4: DLL Implant with PowershellAttackStepItem implements T1059.001TTP."
          }
        ],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-17",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "Hs5jixxFsbNwWR-Au2Cb-16",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem followedBy AS4: DLL Implant with PowershellAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 810.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-21",
        "name": "T1059.001TTP",
        "label": "T1059.001TTP",
        "instanceName": "T1059.001",
        "metamodelEntity": "TTP",
        "description": "T1059.001TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1100.0,
          "y": 685.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-19",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "Hs5jixxFsbNwWR-Au2Cb-21",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "T1059.001TTP",
            "description": "AS4: DLL Implant with PowershellAttackStepItem implements T1059.001TTP."
          }
        ]
      },
      "position": {
        "x": 1920.0,
        "y": 815.0
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-22",
        "name": "Inject of Malicious FilesAttackStep",
        "label": "Inject of Malicious FilesAttackStep",
        "instanceName": "Inject of Malicious Files",
        "metamodelEntity": "AttackStep",
        "description": "Inject of Malicious FilesAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 655.0,
          "y": 685.0,
          "width": 130.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Hs5jixxFsbNwWR-Au2Cb-23",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "Hs5jixxFsbNwWR-Au2Cb-22",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "Inject of Malicious FilesAttackStep",
            "description": "AS4: DLL Implant with PowershellAttackStepItem refersTo Inject of Malicious FilesAttackStep."
          },
          {
            "id": "JgCm936JxhOEmBgDc_UP-4",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "Hs5jixxFsbNwWR-Au2Cb-22",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "Inject of Malicious FilesAttackStep",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem refersTo Inject of Malicious FilesAttackStep."
          }
        ]
      },
      "position": {
        "x": 1475.0,
        "y": 815.0
      }
    },
    {
      "data": {
        "id": "kntNElvYiTp8xnw6UYOk-1",
        "name": "ds7002.zipAttackToolInstance",
        "label": "ds7002.zipAttackToolInstance",
        "instanceName": "ds7002.zip",
        "metamodelEntity": "AttackToolInstance",
        "description": "ds7002.zipAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 414.0,
          "y": 650.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "7ORuww9_r7kVZ126CwW4-3",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "target": "7ORuww9_r7kVZ126CwW4-2",
            "sourceLabel": "ds7002.zipAttackToolInstance",
            "targetLabel": "ZIP FileAttackTool",
            "description": "ds7002.zipAttackToolInstance instanceOf ZIP FileAttackTool."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-16",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "target": "i68WAE7NELcuDDsLpOV2-15",
            "sourceLabel": "ds7002.zipAttackToolInstance",
            "targetLabel": "ds7002.lnkAttackToolInstance",
            "description": "ds7002.zipAttackToolInstance deploys ds7002.lnkAttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "kntNElvYiTp8xnw6UYOk-2",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-3",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
            "targetLabel": "ds7002.zipAttackToolInstance",
            "description": "AS3: Download and Execute Malicious ZIPAttackStepItem employs ds7002.zipAttackToolInstance."
          },
          {
            "id": "afhzImNPabiAoD0HF1qV-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "kind": "relationship",
            "source": "afhzImNPabiAoD0HF1qV-1",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator",
            "targetLabel": "ds7002.zipAttackToolInstance",
            "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator associatedTo ds7002.zipAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1234.0,
        "y": 780.0
      }
    },
    {
      "data": {
        "id": "afhzImNPabiAoD0HF1qV-1",
        "name": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator",
        "label": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator",
        "instanceName": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1",
        "metamodelEntity": "Indicator",
        "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator is a case-study instance of the Indicator entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Indicator is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 405.0,
          "y": 840.0,
          "width": 270.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "afhzImNPabiAoD0HF1qV-2",
            "name": "associatedTo",
            "label": "associatedTo",
            "kind": "relationship",
            "source": "afhzImNPabiAoD0HF1qV-1",
            "target": "kntNElvYiTp8xnw6UYOk-1",
            "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator",
            "targetLabel": "ds7002.zipAttackToolInstance",
            "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator associatedTo ds7002.zipAttackToolInstance."
          }
        ],
        "incomingRelations": []
      },
      "position": {
        "x": 1225.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "7ORuww9_r7kVZ126CwW4-2",
        "name": "ZIP FileAttackTool",
        "label": "ZIP FileAttackTool",
        "instanceName": "ZIP File",
        "metamodelEntity": "AttackTool",
        "description": "ZIP FileAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 535.0,
          "y": 760.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "7ORuww9_r7kVZ126CwW4-3",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "target": "7ORuww9_r7kVZ126CwW4-2",
            "sourceLabel": "ds7002.zipAttackToolInstance",
            "targetLabel": "ZIP FileAttackTool",
            "description": "ds7002.zipAttackToolInstance instanceOf ZIP FileAttackTool."
          }
        ]
      },
      "position": {
        "x": 1355.0,
        "y": 890.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-2",
        "name": "AS5: Malicious File ExecutionAttackStepItem",
        "label": "AS5: Malicious File ExecutionAttackStepItem",
        "instanceName": "AS5: Malicious File Execution",
        "metamodelEntity": "AttackStepItem",
        "description": "AS5: Malicious File ExecutionAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 1180.0,
          "y": 900.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-20",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-19",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "T1218.011TTP",
            "description": "AS5: Malicious File ExecutionAttackStepItem implements T1218.011TTP."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-22",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "Powershell InstanceAttackToolInstance",
            "description": "AS5: Malicious File ExecutionAttackStepItem employs Powershell InstanceAttackToolInstance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-24",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "cyzfc.datAttackToolInstance",
            "description": "AS5: Malicious File ExecutionAttackStepItem employs cyzfc.datAttackToolInstance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-27",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "description": "AS5: Malicious File ExecutionAttackStepItem followedBy AS6: Deploy Cobalt StrikeAttackStepItem."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-16",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-18",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "Execute DLLAttackStep",
            "description": "AS5: Malicious File ExecutionAttackStepItem refersTo Execute DLLAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-3",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "i68WAE7NELcuDDsLpOV2-2",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "description": "AS4: DLL Implant with PowershellAttackStepItem followedBy AS5: Malicious File ExecutionAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2000.0,
        "y": 1030.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-6",
        "name": "Powershell InstanceAttackToolInstance",
        "label": "Powershell InstanceAttackToolInstance",
        "instanceName": "Powershell Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Powershell InstanceAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 664.0,
          "y": 970.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-13",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "i68WAE7NELcuDDsLpOV2-12",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "ds7002.PDFAttackToolInstance",
            "description": "Powershell InstanceAttackToolInstance deploys ds7002.PDFAttackToolInstance."
          },
          {
            "id": "i68WAE7NELcuDDsLpOV2-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "i68WAE7NELcuDDsLpOV2-10",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "PowershellAttackTool",
            "description": "Powershell InstanceAttackToolInstance instanceOf PowershellAttackTool."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-4",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "cyzfc.datAttackToolInstance",
            "description": "Powershell InstanceAttackToolInstance deploys cyzfc.datAttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-11",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "Hs5jixxFsbNwWR-Au2Cb-16",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
            "targetLabel": "Powershell InstanceAttackToolInstance",
            "description": "AS4: DLL Implant with PowershellAttackStepItem employs Powershell InstanceAttackToolInstance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-22",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "i68WAE7NELcuDDsLpOV2-6",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "Powershell InstanceAttackToolInstance",
            "description": "AS5: Malicious File ExecutionAttackStepItem employs Powershell InstanceAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1484.0,
        "y": 1100.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-10",
        "name": "PowershellAttackTool",
        "label": "PowershellAttackTool",
        "instanceName": "Powershell",
        "metamodelEntity": "AttackTool",
        "description": "PowershellAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 665.0,
          "y": 1080.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-4",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "i68WAE7NELcuDDsLpOV2-10",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "PowershellAttackTool",
            "description": "Powershell InstanceAttackToolInstance instanceOf PowershellAttackTool."
          }
        ]
      },
      "position": {
        "x": 1485.0,
        "y": 1210.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-12",
        "name": "ds7002.PDFAttackToolInstance",
        "label": "ds7002.PDFAttackToolInstance",
        "instanceName": "ds7002.PDF",
        "metamodelEntity": "AttackToolInstance",
        "description": "ds7002.PDFAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 285.0,
          "y": 940.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-10",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-12",
            "target": "qzW-ANQ4cShhyDxj2iRk-9",
            "sourceLabel": "ds7002.PDFAttackToolInstance",
            "targetLabel": "PDF FileAttackTool",
            "description": "ds7002.PDFAttackToolInstance instanceOf PDF FileAttackTool."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-13",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "i68WAE7NELcuDDsLpOV2-12",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "ds7002.PDFAttackToolInstance",
            "description": "Powershell InstanceAttackToolInstance deploys ds7002.PDFAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1105.0,
        "y": 1070.0
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-15",
        "name": "ds7002.lnkAttackToolInstance",
        "label": "ds7002.lnkAttackToolInstance",
        "instanceName": "ds7002.lnk",
        "metamodelEntity": "AttackToolInstance",
        "description": "ds7002.lnkAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 140.0,
          "y": 760.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-7",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-15",
            "target": "qzW-ANQ4cShhyDxj2iRk-6",
            "sourceLabel": "ds7002.lnkAttackToolInstance",
            "targetLabel": "LNK FileAttackTool",
            "description": "ds7002.lnkAttackToolInstance instanceOf LNK FileAttackTool."
          }
        ],
        "incomingRelations": [
          {
            "id": "i68WAE7NELcuDDsLpOV2-16",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "kntNElvYiTp8xnw6UYOk-1",
            "target": "i68WAE7NELcuDDsLpOV2-15",
            "sourceLabel": "ds7002.zipAttackToolInstance",
            "targetLabel": "ds7002.lnkAttackToolInstance",
            "description": "ds7002.zipAttackToolInstance deploys ds7002.lnkAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 960.0,
        "y": 890.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-3",
        "name": "cyzfc.datAttackToolInstance",
        "label": "cyzfc.datAttackToolInstance",
        "instanceName": "cyzfc.dat",
        "metamodelEntity": "AttackToolInstance",
        "description": "cyzfc.datAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 285.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-13",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-3",
            "target": "qzW-ANQ4cShhyDxj2iRk-12",
            "sourceLabel": "cyzfc.datAttackToolInstance",
            "targetLabel": "DAT FileAttackTool",
            "description": "cyzfc.datAttackToolInstance instanceOf DAT FileAttackTool."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-24",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "cyzfc.datAttackToolInstance",
            "description": "AS5: Malicious File ExecutionAttackStepItem employs cyzfc.datAttackToolInstance."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-4",
            "name": "deploys",
            "label": "deploys",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-6",
            "target": "qzW-ANQ4cShhyDxj2iRk-3",
            "sourceLabel": "Powershell InstanceAttackToolInstance",
            "targetLabel": "cyzfc.datAttackToolInstance",
            "description": "Powershell InstanceAttackToolInstance deploys cyzfc.datAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1105.0,
        "y": 1160.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-6",
        "name": "LNK FileAttackTool",
        "label": "LNK FileAttackTool",
        "instanceName": "LNK File",
        "metamodelEntity": "AttackTool",
        "description": "LNK FileAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": -20.0,
          "y": 840.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-7",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-15",
            "target": "qzW-ANQ4cShhyDxj2iRk-6",
            "sourceLabel": "ds7002.lnkAttackToolInstance",
            "targetLabel": "LNK FileAttackTool",
            "description": "ds7002.lnkAttackToolInstance instanceOf LNK FileAttackTool."
          }
        ]
      },
      "position": {
        "x": 800.0,
        "y": 970.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-9",
        "name": "PDF FileAttackTool",
        "label": "PDF FileAttackTool",
        "instanceName": "PDF File",
        "metamodelEntity": "AttackTool",
        "description": "PDF FileAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": -20.0,
          "y": 930.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-10",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-12",
            "target": "qzW-ANQ4cShhyDxj2iRk-9",
            "sourceLabel": "ds7002.PDFAttackToolInstance",
            "targetLabel": "PDF FileAttackTool",
            "description": "ds7002.PDFAttackToolInstance instanceOf PDF FileAttackTool."
          }
        ]
      },
      "position": {
        "x": 800.0,
        "y": 1060.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-12",
        "name": "DAT FileAttackTool",
        "label": "DAT FileAttackTool",
        "instanceName": "DAT File",
        "metamodelEntity": "AttackTool",
        "description": "DAT FileAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": -20.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-13",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-3",
            "target": "qzW-ANQ4cShhyDxj2iRk-12",
            "sourceLabel": "cyzfc.datAttackToolInstance",
            "targetLabel": "DAT FileAttackTool",
            "description": "cyzfc.datAttackToolInstance instanceOf DAT FileAttackTool."
          }
        ]
      },
      "position": {
        "x": 800.0,
        "y": 1160.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-18",
        "name": "Execute DLLAttackStep",
        "label": "Execute DLLAttackStep",
        "instanceName": "Execute DLL",
        "metamodelEntity": "AttackStep",
        "description": "Execute DLLAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 890.0,
          "y": 860.0,
          "width": 130.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-16",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-18",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "Execute DLLAttackStep",
            "description": "AS5: Malicious File ExecutionAttackStepItem refersTo Execute DLLAttackStep."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 990.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-19",
        "name": "T1218.011TTP",
        "label": "T1218.011TTP",
        "instanceName": "T1218.011",
        "metamodelEntity": "TTP",
        "description": "T1218.011TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1350.0,
          "y": 810.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-20",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-19",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "T1218.011TTP",
            "description": "AS5: Malicious File ExecutionAttackStepItem implements T1218.011TTP."
          }
        ]
      },
      "position": {
        "x": 2170.0,
        "y": 940.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-26",
        "name": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "label": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "instanceName": "AS6: Deploy Cobalt Strike",
        "metamodelEntity": "AttackStepItem",
        "description": "AS6: Deploy Cobalt StrikeAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 1180.0,
          "y": 1030.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-7",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "JgCm936JxhOEmBgDc_UP-6",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "T1588.002TTP",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem implements T1588.002TTP."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-30",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem followedBy AS7: Backdoor ImplementationAttackStepItem."
          },
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-33",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "qzW-ANQ4cShhyDxj2iRk-32",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "Cobalt Strike InstanceAttackToolInstance",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem employs Cobalt Strike InstanceAttackToolInstance."
          },
          {
            "id": "JgCm936JxhOEmBgDc_UP-4",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "Hs5jixxFsbNwWR-Au2Cb-22",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "Inject of Malicious FilesAttackStep",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem refersTo Inject of Malicious FilesAttackStep."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-27",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "i68WAE7NELcuDDsLpOV2-2",
            "target": "qzW-ANQ4cShhyDxj2iRk-26",
            "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
            "targetLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "description": "AS5: Malicious File ExecutionAttackStepItem followedBy AS6: Deploy Cobalt StrikeAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2000.0,
        "y": 1160.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-29",
        "name": "AS7: Backdoor ImplementationAttackStepItem",
        "label": "AS7: Backdoor ImplementationAttackStepItem",
        "instanceName": "AS7: Backdoor Implementation",
        "metamodelEntity": "AttackStepItem",
        "description": "AS7: Backdoor ImplementationAttackStepItem is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 1180.0,
          "y": 1160.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-11",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "JgCm936JxhOEmBgDc_UP-10",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "T1005TTP",
            "description": "AS7: Backdoor ImplementationAttackStepItem implements T1005TTP."
          },
          {
            "id": "JgCm936JxhOEmBgDc_UP-14",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "JgCm936JxhOEmBgDc_UP-13",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "BackdoorAttackStep",
            "description": "AS7: Backdoor ImplementationAttackStepItem refersTo BackdoorAttackStep."
          },
          {
            "id": "xL1UhOB1JyQPO_Ga4dQB-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "AS7: Backdoor ImplementationAttackStepItem compromises ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          },
          {
            "id": "sm1cul3d3wHS5KGZIJT--1",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "Project DataAsset",
            "description": "AS7: Backdoor ImplementationAttackStepItem targetsResource Project DataAsset."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-30",
            "name": "followedBy",
            "label": "followedBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "qzW-ANQ4cShhyDxj2iRk-29",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem followedBy AS7: Backdoor ImplementationAttackStepItem."
          }
        ]
      },
      "position": {
        "x": 2000.0,
        "y": 1290.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-32",
        "name": "Cobalt Strike InstanceAttackToolInstance",
        "label": "Cobalt Strike InstanceAttackToolInstance",
        "instanceName": "Cobalt Strike Instance",
        "metamodelEntity": "AttackToolInstance",
        "description": "Cobalt Strike InstanceAttackToolInstance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [],
        "drawio": {
          "x": 664.0,
          "y": 1200.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-36",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-32",
            "target": "qzW-ANQ4cShhyDxj2iRk-35",
            "sourceLabel": "Cobalt Strike InstanceAttackToolInstance",
            "targetLabel": "Cobalt StrikeAttackTool",
            "description": "Cobalt Strike InstanceAttackToolInstance instanceOf Cobalt StrikeAttackTool."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-33",
            "name": "employs",
            "label": "employs",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "qzW-ANQ4cShhyDxj2iRk-32",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "Cobalt Strike InstanceAttackToolInstance",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem employs Cobalt Strike InstanceAttackToolInstance."
          }
        ]
      },
      "position": {
        "x": 1484.0,
        "y": 1330.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-35",
        "name": "Cobalt StrikeAttackTool",
        "label": "Cobalt StrikeAttackTool",
        "instanceName": "Cobalt Strike",
        "metamodelEntity": "AttackTool",
        "description": "Cobalt StrikeAttackTool is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 360.0,
          "y": 1200.0,
          "width": 120.0,
          "height": 60.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-36",
            "name": "instanceOf",
            "label": "instanceOf",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-32",
            "target": "qzW-ANQ4cShhyDxj2iRk-35",
            "sourceLabel": "Cobalt Strike InstanceAttackToolInstance",
            "targetLabel": "Cobalt StrikeAttackTool",
            "description": "Cobalt Strike InstanceAttackToolInstance instanceOf Cobalt StrikeAttackTool."
          }
        ]
      },
      "position": {
        "x": 1180.0,
        "y": 1330.0
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-38",
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
          "x": -130.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-41",
            "name": "usedBy",
            "label": "usedBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "target": "1cakm77nuum5QVv6bJuu-3",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "U1: Employee 1User",
            "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
          },
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-3",
            "name": "madeBy",
            "label": "madeBy",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-38",
            "target": "1cakm77nuum5QVv6bJuu-6",
            "sourceLabel": "Prod-InfraInfrastructure",
            "targetLabel": "N1: WorkstationNode",
            "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
          }
        ],
        "incomingRelations": [
          {
            "id": "qzW-ANQ4cShhyDxj2iRk-39",
            "name": "manages",
            "label": "manages",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "qzW-ANQ4cShhyDxj2iRk-38",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "Prod-InfraInfrastructure",
            "description": "FourOrgOrganization manages Prod-InfraInfrastructure."
          }
        ]
      },
      "position": {
        "x": 690.0,
        "y": 370.0
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-5",
        "name": "BR1: Organization's data must remain confidentialBusinessRequirement",
        "label": "BR1: Organization's data must remain confidentialBusinessRequirement",
        "instanceName": "BR1: Organization's data must remain confidential",
        "metamodelEntity": "BusinessRequirement",
        "description": "BR1: Organization's data must remain confidentialBusinessRequirement is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -430.0,
          "y": 280.0,
          "width": 180.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "qSmbUWHLwFiRWG7dhJGA-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "qVrTcyufrUnFQZm5Z7Rl-5",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "BR1: Organization's data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "qVrTcyufrUnFQZm5Z7Rl-6",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "kind": "relationship",
            "source": "HZHTnUwxUhuAmBVm-COV-1",
            "target": "qVrTcyufrUnFQZm5Z7Rl-5",
            "sourceLabel": "FourOrgOrganization",
            "targetLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
            "description": "FourOrgOrganization hasBusinessRequirement BR1: Organization's data must remain confidentialBusinessRequirement."
          }
        ]
      },
      "position": {
        "x": 390.0,
        "y": 410.0
      }
    },
    {
      "data": {
        "id": "qSmbUWHLwFiRWG7dhJGA-1",
        "name": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "label": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "instanceName": "ASR1: Confidentiality of organization's data",
        "metamodelEntity": "AssetSecurityRequirement",
        "description": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -430.0,
          "y": 390.0,
          "width": 180.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "9SliPCzggZYN6JWVdhkB-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "qSmbUWHLwFiRWG7dhJGA-1",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "sourceLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "xL1UhOB1JyQPO_Ga4dQB-1",
            "name": "compromises",
            "label": "compromises",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "AS7: Backdoor ImplementationAttackStepItem compromises ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          },
          {
            "id": "qSmbUWHLwFiRWG7dhJGA-2",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "kind": "relationship",
            "source": "qVrTcyufrUnFQZm5Z7Rl-5",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "BR1: Organization's data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          },
          {
            "id": "QCLqYGuow9h_xnNMhb7T-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "QCLqYGuow9h_xnNMhb7T-2",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "Project DataAsset",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "Project DataAsset hasSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          },
          {
            "id": "PxmGDmhAHKnVwSBL0HCw-1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "JgCm936JxhOEmBgDc_UP-10",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "T1005TTP",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "T1005TTP impacts ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 390.0,
        "y": 520.0
      }
    },
    {
      "data": {
        "id": "9SliPCzggZYN6JWVdhkB-2",
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
          "x": -660.0,
          "y": 445.0,
          "width": 180.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9SliPCzggZYN6JWVdhkB-3",
            "name": "implementationOf",
            "label": "implementationOf",
            "kind": "relationship",
            "source": "qSmbUWHLwFiRWG7dhJGA-1",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "sourceLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
          },
          {
            "id": "zjPglk1kbyInOb65LJGi-1",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "JgCm936JxhOEmBgDc_UP-13",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "sourceLabel": "BackdoorAttackStep",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "BackdoorAttackStep violates ConfidentialitySecurityRequirement."
          }
        ]
      },
      "position": {
        "x": 160.0,
        "y": 575.0
      }
    },
    {
      "data": {
        "id": "QCLqYGuow9h_xnNMhb7T-2",
        "name": "Project DataAsset",
        "label": "Project DataAsset",
        "instanceName": "Project Data",
        "metamodelEntity": "Asset",
        "description": "Project DataAsset is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
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
          "x": -200.0,
          "y": 545.0,
          "width": 140.0,
          "height": 45.0
        },
        "outgoingRelations": [
          {
            "id": "QCLqYGuow9h_xnNMhb7T-4",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "kind": "relationship",
            "source": "QCLqYGuow9h_xnNMhb7T-2",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "Project DataAsset",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "Project DataAsset hasSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "WG_jXR4R0mnxslE-pLWJ-2",
            "name": "hostsResource",
            "label": "hostsResource",
            "kind": "relationship",
            "source": "1cakm77nuum5QVv6bJuu-6",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "N1: WorkstationNode",
            "targetLabel": "Project DataAsset",
            "description": "N1: WorkstationNode hostsResource Project DataAsset."
          },
          {
            "id": "sm1cul3d3wHS5KGZIJT--1",
            "name": "targetsResource",
            "label": "targetsResource",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "QCLqYGuow9h_xnNMhb7T-2",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "Project DataAsset",
            "description": "AS7: Backdoor ImplementationAttackStepItem targetsResource Project DataAsset."
          }
        ]
      },
      "position": {
        "x": 620.0,
        "y": 675.0
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-6",
        "name": "T1588.002TTP",
        "label": "T1588.002TTP",
        "instanceName": "T1588.002",
        "metamodelEntity": "TTP",
        "description": "T1588.002TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1410.0,
          "y": 1035.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-7",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-26",
            "target": "JgCm936JxhOEmBgDc_UP-6",
            "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
            "targetLabel": "T1588.002TTP",
            "description": "AS6: Deploy Cobalt StrikeAttackStepItem implements T1588.002TTP."
          }
        ]
      },
      "position": {
        "x": 2230.0,
        "y": 1165.0
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-10",
        "name": "T1005TTP",
        "label": "T1005TTP",
        "instanceName": "T1005",
        "metamodelEntity": "TTP",
        "description": "T1005TTP is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 1410.0,
          "y": 1165.0,
          "width": 70.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "PxmGDmhAHKnVwSBL0HCw-1",
            "name": "impacts",
            "label": "impacts",
            "kind": "relationship",
            "source": "JgCm936JxhOEmBgDc_UP-10",
            "target": "qSmbUWHLwFiRWG7dhJGA-1",
            "sourceLabel": "T1005TTP",
            "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
            "description": "T1005TTP impacts ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-11",
            "name": "implements",
            "label": "implements",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "JgCm936JxhOEmBgDc_UP-10",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "T1005TTP",
            "description": "AS7: Backdoor ImplementationAttackStepItem implements T1005TTP."
          }
        ]
      },
      "position": {
        "x": 2230.0,
        "y": 1295.0
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-13",
        "name": "BackdoorAttackStep",
        "label": "BackdoorAttackStep",
        "instanceName": "Backdoor",
        "metamodelEntity": "AttackStep",
        "description": "BackdoorAttackStep is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
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
          "x": 890.0,
          "y": 1220.0,
          "width": 130.0,
          "height": 50.0
        },
        "outgoingRelations": [
          {
            "id": "zjPglk1kbyInOb65LJGi-1",
            "name": "violates",
            "label": "violates",
            "kind": "relationship",
            "source": "JgCm936JxhOEmBgDc_UP-13",
            "target": "9SliPCzggZYN6JWVdhkB-2",
            "sourceLabel": "BackdoorAttackStep",
            "targetLabel": "ConfidentialitySecurityRequirement",
            "description": "BackdoorAttackStep violates ConfidentialitySecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "JgCm936JxhOEmBgDc_UP-14",
            "name": "refersTo",
            "label": "refersTo",
            "kind": "relationship",
            "source": "qzW-ANQ4cShhyDxj2iRk-29",
            "target": "JgCm936JxhOEmBgDc_UP-13",
            "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
            "targetLabel": "BackdoorAttackStep",
            "description": "AS7: Backdoor ImplementationAttackStepItem refersTo BackdoorAttackStep."
          }
        ]
      },
      "position": {
        "x": 1710.0,
        "y": 1350.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "5_aewu5AFsPlSYAPBgC2-1",
        "name": "basedIn",
        "label": "basedIn",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "Wo6s_1948o2_fHKdvt1y-1",
        "sourceLabel": "FourOrgOrganization",
        "targetLabel": "USAHomeCountry",
        "description": "FourOrgOrganization basedIn USAHomeCountry."
      }
    },
    {
      "data": {
        "id": "5_aewu5AFsPlSYAPBgC2-4",
        "name": "operatesIn",
        "label": "operatesIn",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "5_aewu5AFsPlSYAPBgC2-3",
        "sourceLabel": "FourOrgOrganization",
        "targetLabel": "USAHomeCountry",
        "description": "FourOrgOrganization operatesIn USAHomeCountry."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-39",
        "name": "manages",
        "label": "manages",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "qzW-ANQ4cShhyDxj2iRk-38",
        "sourceLabel": "FourOrgOrganization",
        "targetLabel": "Prod-InfraInfrastructure",
        "description": "FourOrgOrganization manages Prod-InfraInfrastructure."
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-6",
        "name": "hasBusinessRequirement",
        "label": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "HZHTnUwxUhuAmBVm-COV-1",
        "target": "qVrTcyufrUnFQZm5Z7Rl-5",
        "sourceLabel": "FourOrgOrganization",
        "targetLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
        "description": "FourOrgOrganization hasBusinessRequirement BR1: Organization's data must remain confidentialBusinessRequirement."
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-2",
        "name": "alias",
        "label": "alias",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-1",
        "sourceLabel": "APT29ThreatSource",
        "targetLabel": "CozyBearThreatSource",
        "description": "APT29ThreatSource alias CozyBearThreatSource."
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-5",
        "name": "alias",
        "label": "alias",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-4",
        "sourceLabel": "APT29ThreatSource",
        "targetLabel": "YTTRIUMThreatSource",
        "description": "APT29ThreatSource alias YTTRIUMThreatSource."
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-1",
        "name": "relatedTo",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "-MfVsttqaDO7kn--14NE-9",
        "sourceLabel": "APT29ThreatSource",
        "targetLabel": "Russia's SVRAdversary",
        "description": "APT29ThreatSource relatedTo Russia's SVRAdversary."
      }
    },
    {
      "data": {
        "id": "xuD4CoUZLWJXzUS_sh0j-3",
        "name": "initiates",
        "label": "initiates",
        "kind": "relationship",
        "source": "LVuWc9dPByfjlFdt02Zd-1",
        "target": "xuD4CoUZLWJXzUS_sh0j-2",
        "sourceLabel": "APT29ThreatSource",
        "targetLabel": "Spearphishing AttackThreatEvent",
        "description": "APT29ThreatSource initiates Spearphishing AttackThreatEvent."
      }
    },
    {
      "data": {
        "id": "-MfVsttqaDO7kn--14NE-7",
        "name": "alias",
        "label": "alias",
        "kind": "relationship",
        "source": "-MfVsttqaDO7kn--14NE-4",
        "target": "-MfVsttqaDO7kn--14NE-1",
        "sourceLabel": "YTTRIUMThreatSource",
        "targetLabel": "CozyBearThreatSource",
        "description": "YTTRIUMThreatSource alias CozyBearThreatSource."
      }
    },
    {
      "data": {
        "id": "dCjMzqmgwiT5h25rW3wv-4",
        "name": "hasAdversaryType",
        "label": "hasAdversaryType",
        "kind": "relationship",
        "source": "-MfVsttqaDO7kn--14NE-9",
        "target": "dCjMzqmgwiT5h25rW3wv-3",
        "sourceLabel": "Russia's SVRAdversary",
        "targetLabel": "Nation StateAdversaryType",
        "description": "Russia's SVRAdversary hasAdversaryType Nation StateAdversaryType."
      }
    },
    {
      "data": {
        "id": "5p-efhzWygpeI9_lYFaW-3",
        "name": "startsWith",
        "label": "startsWith",
        "kind": "relationship",
        "source": "xuD4CoUZLWJXzUS_sh0j-2",
        "target": "5p-efhzWygpeI9_lYFaW-2",
        "sourceLabel": "Spearphishing AttackThreatEvent",
        "targetLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "description": "Spearphishing AttackThreatEvent startsWith AS1: Spearphishing mimicking OnedriveAttackStepItem."
      }
    },
    {
      "data": {
        "id": "MH3u3nxTp3A76fCaIXuf-2",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "MH3u3nxTp3A76fCaIXuf-1",
        "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "targetLabel": "SpearphishingAttackStep",
        "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem refersTo SpearphishingAttackStep."
      }
    },
    {
      "data": {
        "id": "QWGctnTdT4-Q2VtuhLHI-3",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "QWGctnTdT4-Q2VtuhLHI-2",
        "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "targetLabel": "T1566.003TTP",
        "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem implements T1566.003TTP."
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-3",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "P7PCyI3RzNPrK-RiMjAq-2",
        "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "targetLabel": "AS2: Redirect to compromised websiteAttackStepItem",
        "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem followedBy AS2: Redirect to compromised websiteAttackStepItem."
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-10",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "P7PCyI3RzNPrK-RiMjAq-9",
        "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
        "targetLabel": "Use of compromised websiteAttackStep",
        "description": "AS2: Redirect to compromised websiteAttackStepItem refersTo Use of compromised websiteAttackStep."
      }
    },
    {
      "data": {
        "id": "gcXcCobT5xsXrkAcETY5-1",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "AS2: Redirect to compromised websiteAttackStepItem exploits Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-4",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "Hs5jixxFsbNwWR-Au2Cb-3",
        "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
        "targetLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "description": "AS2: Redirect to compromised websiteAttackStepItem followedBy AS3: Download and Execute Malicious ZIPAttackStepItem."
      }
    },
    {
      "data": {
        "id": "P7PCyI3RzNPrK-RiMjAq-6",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-2",
        "target": "P7PCyI3RzNPrK-RiMjAq-8",
        "sourceLabel": "AS2: Redirect to compromised websiteAttackStepItem",
        "targetLabel": "T1584.001TTP",
        "description": "AS2: Redirect to compromised websiteAttackStepItem implements T1584.001TTP."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "P7PCyI3RzNPrK-RiMjAq-8",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1584.001TTP",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "T1584.001TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-1",
        "name": "hasAccessTo",
        "label": "hasAccessTo",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-3",
        "target": "1cakm77nuum5QVv6bJuu-6",
        "sourceLabel": "U1: Employee 1User",
        "targetLabel": "N1: WorkstationNode",
        "description": "U1: Employee 1User hasAccessTo N1: WorkstationNode."
      }
    },
    {
      "data": {
        "id": "1cakm77nuum5QVv6bJuu-4",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-6",
        "target": "1cakm77nuum5QVv6bJuu-7",
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Desktop ComputerNodeType",
        "description": "N1: WorkstationNode hasNodeType Desktop ComputerNodeType."
      }
    },
    {
      "data": {
        "id": "WG_jXR4R0mnxslE-pLWJ-2",
        "name": "hostsResource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "1cakm77nuum5QVv6bJuu-6",
        "target": "QCLqYGuow9h_xnNMhb7T-2",
        "sourceLabel": "N1: WorkstationNode",
        "targetLabel": "Project DataAsset",
        "description": "N1: WorkstationNode hostsResource Project DataAsset."
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "QWGctnTdT4-Q2VtuhLHI-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1566.003TTP",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "T1566.003TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-3",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "5p-efhzWygpeI9_lYFaW-2",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "AS1: Spearphishing mimicking OnedriveAttackStepItem",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "AS1: Spearphishing mimicking OnedriveAttackStepItem exploits Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "lRILMvQgxyY53MFmug6h-5",
        "name": "affectsUser",
        "label": "affectsUser",
        "kind": "relationship",
        "source": "lRILMvQgxyY53MFmug6h-7",
        "target": "1cakm77nuum5QVv6bJuu-3",
        "sourceLabel": "Prone to PhishingHumanVulnerability",
        "targetLabel": "U1: Employee 1User",
        "description": "Prone to PhishingHumanVulnerability affectsUser U1: Employee 1User."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-7",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "Hs5jixxFsbNwWR-Au2Cb-6",
        "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "targetLabel": "User Execution of Malicious FilesAttackStep",
        "description": "AS3: Download and Execute Malicious ZIPAttackStepItem refersTo User Execution of Malicious FilesAttackStep."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-12",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "Hs5jixxFsbNwWR-Au2Cb-11",
        "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "targetLabel": "T1204.002TTP",
        "description": "AS3: Download and Execute Malicious ZIPAttackStepItem implements T1204.002TTP."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-17",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "Hs5jixxFsbNwWR-Au2Cb-16",
        "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "targetLabel": "AS4: DLL Implant with PowershellAttackStepItem",
        "description": "AS3: Download and Execute Malicious ZIPAttackStepItem followedBy AS4: DLL Implant with PowershellAttackStepItem."
      }
    },
    {
      "data": {
        "id": "kntNElvYiTp8xnw6UYOk-2",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-3",
        "target": "kntNElvYiTp8xnw6UYOk-1",
        "sourceLabel": "AS3: Download and Execute Malicious ZIPAttackStepItem",
        "targetLabel": "ds7002.zipAttackToolInstance",
        "description": "AS3: Download and Execute Malicious ZIPAttackStepItem employs ds7002.zipAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-9",
        "name": "exploits",
        "label": "exploits",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-6",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "User Execution of Malicious FilesAttackStep",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "User Execution of Malicious FilesAttackStep exploits Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-14",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-11",
        "target": "lRILMvQgxyY53MFmug6h-7",
        "sourceLabel": "T1204.002TTP",
        "targetLabel": "Prone to PhishingHumanVulnerability",
        "description": "T1204.002TTP exploitsVulnerability Prone to PhishingHumanVulnerability."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-23",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "Hs5jixxFsbNwWR-Au2Cb-22",
        "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
        "targetLabel": "Inject of Malicious FilesAttackStep",
        "description": "AS4: DLL Implant with PowershellAttackStepItem refersTo Inject of Malicious FilesAttackStep."
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-3",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "i68WAE7NELcuDDsLpOV2-2",
        "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
        "targetLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "description": "AS4: DLL Implant with PowershellAttackStepItem followedBy AS5: Malicious File ExecutionAttackStepItem."
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-11",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "i68WAE7NELcuDDsLpOV2-6",
        "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
        "targetLabel": "Powershell InstanceAttackToolInstance",
        "description": "AS4: DLL Implant with PowershellAttackStepItem employs Powershell InstanceAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "Hs5jixxFsbNwWR-Au2Cb-19",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "Hs5jixxFsbNwWR-Au2Cb-16",
        "target": "Hs5jixxFsbNwWR-Au2Cb-21",
        "sourceLabel": "AS4: DLL Implant with PowershellAttackStepItem",
        "targetLabel": "T1059.001TTP",
        "description": "AS4: DLL Implant with PowershellAttackStepItem implements T1059.001TTP."
      }
    },
    {
      "data": {
        "id": "7ORuww9_r7kVZ126CwW4-3",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "kntNElvYiTp8xnw6UYOk-1",
        "target": "7ORuww9_r7kVZ126CwW4-2",
        "sourceLabel": "ds7002.zipAttackToolInstance",
        "targetLabel": "ZIP FileAttackTool",
        "description": "ds7002.zipAttackToolInstance instanceOf ZIP FileAttackTool."
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-13",
        "name": "deploys",
        "label": "deploys",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "i68WAE7NELcuDDsLpOV2-12",
        "sourceLabel": "Powershell InstanceAttackToolInstance",
        "targetLabel": "ds7002.PDFAttackToolInstance",
        "description": "Powershell InstanceAttackToolInstance deploys ds7002.PDFAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-16",
        "name": "deploys",
        "label": "deploys",
        "kind": "relationship",
        "source": "kntNElvYiTp8xnw6UYOk-1",
        "target": "i68WAE7NELcuDDsLpOV2-15",
        "sourceLabel": "ds7002.zipAttackToolInstance",
        "targetLabel": "ds7002.lnkAttackToolInstance",
        "description": "ds7002.zipAttackToolInstance deploys ds7002.lnkAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "afhzImNPabiAoD0HF1qV-2",
        "name": "associatedTo",
        "label": "associatedTo",
        "kind": "relationship",
        "source": "afhzImNPabiAoD0HF1qV-1",
        "target": "kntNElvYiTp8xnw6UYOk-1",
        "sourceLabel": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator",
        "targetLabel": "ds7002.zipAttackToolInstance",
        "description": "cd92f19d3ad4ec50f6d19652af010fe07dca55e1Indicator associatedTo ds7002.zipAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-20",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-19",
        "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "targetLabel": "T1218.011TTP",
        "description": "AS5: Malicious File ExecutionAttackStepItem implements T1218.011TTP."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-22",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "i68WAE7NELcuDDsLpOV2-6",
        "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "targetLabel": "Powershell InstanceAttackToolInstance",
        "description": "AS5: Malicious File ExecutionAttackStepItem employs Powershell InstanceAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-24",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-3",
        "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "targetLabel": "cyzfc.datAttackToolInstance",
        "description": "AS5: Malicious File ExecutionAttackStepItem employs cyzfc.datAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-27",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-26",
        "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "targetLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "description": "AS5: Malicious File ExecutionAttackStepItem followedBy AS6: Deploy Cobalt StrikeAttackStepItem."
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-7",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "JgCm936JxhOEmBgDc_UP-6",
        "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "targetLabel": "T1588.002TTP",
        "description": "AS6: Deploy Cobalt StrikeAttackStepItem implements T1588.002TTP."
      }
    },
    {
      "data": {
        "id": "i68WAE7NELcuDDsLpOV2-4",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "i68WAE7NELcuDDsLpOV2-10",
        "sourceLabel": "Powershell InstanceAttackToolInstance",
        "targetLabel": "PowershellAttackTool",
        "description": "Powershell InstanceAttackToolInstance instanceOf PowershellAttackTool."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-4",
        "name": "deploys",
        "label": "deploys",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-6",
        "target": "qzW-ANQ4cShhyDxj2iRk-3",
        "sourceLabel": "Powershell InstanceAttackToolInstance",
        "targetLabel": "cyzfc.datAttackToolInstance",
        "description": "Powershell InstanceAttackToolInstance deploys cyzfc.datAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-10",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-12",
        "target": "qzW-ANQ4cShhyDxj2iRk-9",
        "sourceLabel": "ds7002.PDFAttackToolInstance",
        "targetLabel": "PDF FileAttackTool",
        "description": "ds7002.PDFAttackToolInstance instanceOf PDF FileAttackTool."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-7",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-15",
        "target": "qzW-ANQ4cShhyDxj2iRk-6",
        "sourceLabel": "ds7002.lnkAttackToolInstance",
        "targetLabel": "LNK FileAttackTool",
        "description": "ds7002.lnkAttackToolInstance instanceOf LNK FileAttackTool."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-13",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-3",
        "target": "qzW-ANQ4cShhyDxj2iRk-12",
        "sourceLabel": "cyzfc.datAttackToolInstance",
        "targetLabel": "DAT FileAttackTool",
        "description": "cyzfc.datAttackToolInstance instanceOf DAT FileAttackTool."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-16",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "i68WAE7NELcuDDsLpOV2-2",
        "target": "qzW-ANQ4cShhyDxj2iRk-18",
        "sourceLabel": "AS5: Malicious File ExecutionAttackStepItem",
        "targetLabel": "Execute DLLAttackStep",
        "description": "AS5: Malicious File ExecutionAttackStepItem refersTo Execute DLLAttackStep."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-30",
        "name": "followedBy",
        "label": "followedBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "qzW-ANQ4cShhyDxj2iRk-29",
        "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "targetLabel": "AS7: Backdoor ImplementationAttackStepItem",
        "description": "AS6: Deploy Cobalt StrikeAttackStepItem followedBy AS7: Backdoor ImplementationAttackStepItem."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-33",
        "name": "employs",
        "label": "employs",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "qzW-ANQ4cShhyDxj2iRk-32",
        "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "targetLabel": "Cobalt Strike InstanceAttackToolInstance",
        "description": "AS6: Deploy Cobalt StrikeAttackStepItem employs Cobalt Strike InstanceAttackToolInstance."
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-4",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-26",
        "target": "Hs5jixxFsbNwWR-Au2Cb-22",
        "sourceLabel": "AS6: Deploy Cobalt StrikeAttackStepItem",
        "targetLabel": "Inject of Malicious FilesAttackStep",
        "description": "AS6: Deploy Cobalt StrikeAttackStepItem refersTo Inject of Malicious FilesAttackStep."
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-11",
        "name": "implements",
        "label": "implements",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "JgCm936JxhOEmBgDc_UP-10",
        "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
        "targetLabel": "T1005TTP",
        "description": "AS7: Backdoor ImplementationAttackStepItem implements T1005TTP."
      }
    },
    {
      "data": {
        "id": "JgCm936JxhOEmBgDc_UP-14",
        "name": "refersTo",
        "label": "refersTo",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "JgCm936JxhOEmBgDc_UP-13",
        "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
        "targetLabel": "BackdoorAttackStep",
        "description": "AS7: Backdoor ImplementationAttackStepItem refersTo BackdoorAttackStep."
      }
    },
    {
      "data": {
        "id": "xL1UhOB1JyQPO_Ga4dQB-1",
        "name": "compromises",
        "label": "compromises",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
        "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "description": "AS7: Backdoor ImplementationAttackStepItem compromises ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "sm1cul3d3wHS5KGZIJT--1",
        "name": "targetsResource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-29",
        "target": "QCLqYGuow9h_xnNMhb7T-2",
        "sourceLabel": "AS7: Backdoor ImplementationAttackStepItem",
        "targetLabel": "Project DataAsset",
        "description": "AS7: Backdoor ImplementationAttackStepItem targetsResource Project DataAsset."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-36",
        "name": "instanceOf",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-32",
        "target": "qzW-ANQ4cShhyDxj2iRk-35",
        "sourceLabel": "Cobalt Strike InstanceAttackToolInstance",
        "targetLabel": "Cobalt StrikeAttackTool",
        "description": "Cobalt Strike InstanceAttackToolInstance instanceOf Cobalt StrikeAttackTool."
      }
    },
    {
      "data": {
        "id": "qzW-ANQ4cShhyDxj2iRk-41",
        "name": "usedBy",
        "label": "usedBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-38",
        "target": "1cakm77nuum5QVv6bJuu-3",
        "sourceLabel": "Prod-InfraInfrastructure",
        "targetLabel": "U1: Employee 1User",
        "description": "Prod-InfraInfrastructure usedBy U1: Employee 1User."
      }
    },
    {
      "data": {
        "id": "qVrTcyufrUnFQZm5Z7Rl-3",
        "name": "madeBy",
        "label": "madeBy",
        "kind": "relationship",
        "source": "qzW-ANQ4cShhyDxj2iRk-38",
        "target": "1cakm77nuum5QVv6bJuu-6",
        "sourceLabel": "Prod-InfraInfrastructure",
        "targetLabel": "N1: WorkstationNode",
        "description": "Prod-InfraInfrastructure madeBy N1: WorkstationNode."
      }
    },
    {
      "data": {
        "id": "qSmbUWHLwFiRWG7dhJGA-2",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "qVrTcyufrUnFQZm5Z7Rl-5",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "BR1: Organization's data must remain confidentialBusinessRequirement",
        "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "description": "BR1: Organization's data must remain confidentialBusinessRequirement drivesSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "9SliPCzggZYN6JWVdhkB-3",
        "name": "implementationOf",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "qSmbUWHLwFiRWG7dhJGA-1",
        "target": "9SliPCzggZYN6JWVdhkB-2",
        "sourceLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "targetLabel": "ConfidentialitySecurityRequirement",
        "description": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement implementationOf ConfidentialitySecurityRequirement."
      }
    },
    {
      "data": {
        "id": "QCLqYGuow9h_xnNMhb7T-4",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "QCLqYGuow9h_xnNMhb7T-2",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "Project DataAsset",
        "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "description": "Project DataAsset hasSecurityRequirement ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "PxmGDmhAHKnVwSBL0HCw-1",
        "name": "impacts",
        "label": "impacts",
        "kind": "relationship",
        "source": "JgCm936JxhOEmBgDc_UP-10",
        "target": "qSmbUWHLwFiRWG7dhJGA-1",
        "sourceLabel": "T1005TTP",
        "targetLabel": "ASR1: Confidentiality of organization's dataAssetSecurityRequirement",
        "description": "T1005TTP impacts ASR1: Confidentiality of organization's dataAssetSecurityRequirement."
      }
    },
    {
      "data": {
        "id": "zjPglk1kbyInOb65LJGi-1",
        "name": "violates",
        "label": "violates",
        "kind": "relationship",
        "source": "JgCm936JxhOEmBgDc_UP-13",
        "target": "9SliPCzggZYN6JWVdhkB-2",
        "sourceLabel": "BackdoorAttackStep",
        "targetLabel": "ConfidentialitySecurityRequirement",
        "description": "BackdoorAttackStep violates ConfidentialitySecurityRequirement."
      }
    }
  ]
};
