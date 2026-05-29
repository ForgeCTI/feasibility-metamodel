const caseData = {
  "metadata": {
    "id": "cs1",
    "title": "CS1 \u2014 APT espionage against a regulated sector",
    "shortTitle": "APT espionage against a regulated sector",
    "description": "This case implementation instantiates targeting context, an exposed vulnerable public-facing service, tool-supported exploitation, attack-step progression, and confidentiality impact on protected client data.",
    "source": "metamodel_v2-case1.drawio.xml",
    "determinants": [
      "D1",
      "D2",
      "D4",
      "D7"
    ],
    "patterns": [
      "P1",
      "P2",
      "P3",
      "P4"
    ],
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
        "description": "FinOrg is a case-study instance of the Organization entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": 240.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "0BvM-G4DcYzrvQnhOk9X-3",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "name": "basedIn",
            "label": "basedIn",
            "sourceLabel": "FinOrg",
            "targetLabel": "Germany",
            "description": "FinOrg basedIn Germany.",
            "kind": "relationship"
          },
          {
            "id": "izy8kfX3pBO5z0ifo8so-2",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "name": "operatesIn",
            "label": "operatesIn",
            "sourceLabel": "FinOrg",
            "targetLabel": "Finance",
            "description": "FinOrg operatesIn Finance.",
            "kind": "relationship"
          },
          {
            "id": "BLdz90eUOZqGWJi0qpWp-2",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "6eOacnnfol6akpcFKc8O-3",
            "name": "hasBusinessRequirment",
            "label": "hasBusinessRequirment",
            "sourceLabel": "FinOrg",
            "targetLabel": "Sensitive data must remain confidential",
            "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential.",
            "kind": "relationship"
          },
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-4",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "ONCgWmA4yeiABO8jPh6Q-3",
            "name": "manages",
            "label": "manages",
            "sourceLabel": "FinOrg",
            "targetLabel": "Prod-Infra",
            "description": "FinOrg manages Prod-Infra.",
            "kind": "relationship"
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
        "description": "Germany is a case-study instance of the HomeCountry entity in the feasibility-oriented metamodel. It specializes the metamodel concept: HomeCountry is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": 40.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-3",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "target": "qnMAzMPU2UIx0dhE2o8o-2",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Germany",
            "targetLabel": "European Union",
            "description": "Germany partsOf European Union.",
            "kind": "relationship"
          },
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-5",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "target": "qnMAzMPU2UIx0dhE2o8o-4",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Germany",
            "targetLabel": "NATO",
            "description": "Germany partsOf NATO.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "0BvM-G4DcYzrvQnhOk9X-3",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "name": "basedIn",
            "label": "basedIn",
            "sourceLabel": "FinOrg",
            "targetLabel": "Germany",
            "description": "FinOrg basedIn Germany.",
            "kind": "relationship"
          },
          {
            "id": "XvtYkyKbk3l0ouDT-OjV-1",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "name": "focusesOn",
            "label": "focusesOn",
            "sourceLabel": "Operation Wocao",
            "targetLabel": "Germany",
            "description": "Operation Wocao focusesOn Germany.",
            "kind": "relationship"
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
        "description": "Finance is a case-study instance of the Sector entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Sector is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": 480.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "izy8kfX3pBO5z0ifo8so-2",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "name": "operatesIn",
            "label": "operatesIn",
            "sourceLabel": "FinOrg",
            "targetLabel": "Finance",
            "description": "FinOrg operatesIn Finance.",
            "kind": "relationship"
          },
          {
            "id": "bEFLhpSV-8ZIpqk4wgaV-1",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "name": "targetsSector",
            "label": "targetsSector",
            "sourceLabel": "Operation Wocao",
            "targetLabel": "Finance",
            "description": "Operation Wocao targetsSector Finance.",
            "kind": "relationship"
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
        "metamodelEntity": "International Body",
        "description": "European Union is a case-study instance of the International Body entity in the feasibility-oriented metamodel. It specializes the metamodel concept: International Body is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": -40.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-3",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "target": "qnMAzMPU2UIx0dhE2o8o-2",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Germany",
            "targetLabel": "European Union",
            "description": "Germany partsOf European Union.",
            "kind": "relationship"
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
        "metamodelEntity": "International Body",
        "description": "NATO is a case-study instance of the International Body entity in the feasibility-oriented metamodel. It specializes the metamodel concept: International Body is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": 120.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "qnMAzMPU2UIx0dhE2o8o-5",
            "source": "0BvM-G4DcYzrvQnhOk9X-2",
            "target": "qnMAzMPU2UIx0dhE2o8o-4",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Germany",
            "targetLabel": "NATO",
            "description": "Germany partsOf NATO.",
            "kind": "relationship"
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
        "description": "APT20 is a case-study instance of the ThreatSource entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 730.0,
          "y": 160.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "vcZTPhuOb6B-M6w-B_EE-5",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "vcZTPhuOb6B-M6w-B_EE-4",
            "name": "relatedTo",
            "label": "relatedTo",
            "sourceLabel": "APT20",
            "targetLabel": "China-backed Group",
            "description": "APT20 relatedTo China-backed Group.",
            "kind": "relationship"
          },
          {
            "id": "RB2Fht_Hu-7ZOwt2WELK-2",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "RB2Fht_Hu-7ZOwt2WELK-1",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "sourceLabel": "APT20",
            "targetLabel": "Expert",
            "description": "APT20 hasExpertise Expert.",
            "kind": "relationship"
          },
          {
            "id": "9HdykkMEKshDh6IqXlot-1",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "MXbeosHEiHACBSZkGos4-1",
            "name": "initiates",
            "label": "initiates",
            "sourceLabel": "APT20",
            "targetLabel": "Attack against Organization",
            "description": "APT20 initiates Attack against Organization.",
            "kind": "relationship"
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
        "description": "China-backed Group is a case-study instance of the Adversary entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Adversary is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 930.0,
          "y": 160.0,
          "width": 130.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "Y4xnolLzykD4MCw7Hd5a-1",
            "source": "vcZTPhuOb6B-M6w-B_EE-4",
            "target": "cvImlgJpU3P0QqpsDf0G-1",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "sourceLabel": "China-backed Group",
            "targetLabel": "State-sponsored actor",
            "description": "China-backed Group hasAdversaryType State-sponsored actor.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "vcZTPhuOb6B-M6w-B_EE-5",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "vcZTPhuOb6B-M6w-B_EE-4",
            "name": "relatedTo",
            "label": "relatedTo",
            "sourceLabel": "APT20",
            "targetLabel": "China-backed Group",
            "description": "APT20 relatedTo China-backed Group.",
            "kind": "relationship"
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
        "description": "State-sponsored actor is a case-study instance of the AdversaryType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AdversaryType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 930.0,
          "y": 240.0,
          "width": 130.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "Y4xnolLzykD4MCw7Hd5a-1",
            "source": "vcZTPhuOb6B-M6w-B_EE-4",
            "target": "cvImlgJpU3P0QqpsDf0G-1",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "sourceLabel": "China-backed Group",
            "targetLabel": "State-sponsored actor",
            "description": "China-backed Group hasAdversaryType State-sponsored actor.",
            "kind": "relationship"
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
        "description": "Expert is a case-study instance of the Expertise entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Expertise is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 730.0,
          "y": 70.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "RB2Fht_Hu-7ZOwt2WELK-2",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "RB2Fht_Hu-7ZOwt2WELK-1",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "sourceLabel": "APT20",
            "targetLabel": "Expert",
            "description": "APT20 hasExpertise Expert.",
            "kind": "relationship"
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
        "description": "Attack against Organization is a case-study instance of the ThreatEvent entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 730.0,
          "y": 240.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-4",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "target": "9HdykkMEKshDh6IqXlot-3",
            "name": "startsWith",
            "label": "startsWith",
            "sourceLabel": "Attack against Organization",
            "targetLabel": "AS1: Active Recon",
            "description": "Attack against Organization startsWith AS1: Active Recon.",
            "kind": "relationship"
          },
          {
            "id": "r0pgC3ykTX_Oh4rQCJO8-2",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "target": "r0pgC3ykTX_Oh4rQCJO8-1",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Attack against Organization",
            "targetLabel": "Operation Wocao",
            "description": "Attack against Organization partsOf Operation Wocao.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-1",
            "source": "vcZTPhuOb6B-M6w-B_EE-3",
            "target": "MXbeosHEiHACBSZkGos4-1",
            "name": "initiates",
            "label": "initiates",
            "sourceLabel": "APT20",
            "targetLabel": "Attack against Organization",
            "description": "APT20 initiates Attack against Organization.",
            "kind": "relationship"
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
        "description": "AS1: Active Recon is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 695.0,
          "y": 340.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "vJn6_qnLwv68IXdAuOWm-2",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "vJn6_qnLwv68IXdAuOWm-1",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "Active Recon",
            "description": "AS1: Active Recon refersTo Active Recon.",
            "kind": "relationship"
          },
          {
            "id": "jCq8-NTqf9Jp3o_aXnjk-2",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "jCq8-NTqf9Jp3o_aXnjk-1",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "T1595",
            "description": "AS1: Active Recon implements T1595.",
            "kind": "relationship"
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-1",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "DyAQahDk-dQDjuwduhnR-1",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "AS2: Exploit JBoss Vulnerability",
            "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9HdykkMEKshDh6IqXlot-4",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "target": "9HdykkMEKshDh6IqXlot-3",
            "name": "startsWith",
            "label": "startsWith",
            "sourceLabel": "Attack against Organization",
            "targetLabel": "AS1: Active Recon",
            "description": "Attack against Organization startsWith AS1: Active Recon.",
            "kind": "relationship"
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
        "description": "Active Recon is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 540.0,
          "y": 220.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "vJn6_qnLwv68IXdAuOWm-2",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "vJn6_qnLwv68IXdAuOWm-1",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "Active Recon",
            "description": "AS1: Active Recon refersTo Active Recon.",
            "kind": "relationship"
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
        "description": "T1595 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK technique mapping",
          "Threat report abstraction"
        ],
        "drawio": {
          "x": 995.0,
          "y": 340.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "jCq8-NTqf9Jp3o_aXnjk-2",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "jCq8-NTqf9Jp3o_aXnjk-1",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "T1595",
            "description": "AS1: Active Recon implements T1595.",
            "kind": "relationship"
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
        "description": "AS2: Exploit JBoss Vulnerability is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 695.0,
          "y": 420.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-4",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-3",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "Exploit Public-Facing Application",
            "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application.",
            "kind": "relationship"
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-7",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-6",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "T1190",
            "description": "AS2: Exploit JBoss Vulnerability implements T1190.",
            "kind": "relationship"
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-10",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-9",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "AS3: Upload Webshell",
            "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell.",
            "kind": "relationship"
          },
          {
            "id": "DO7GT-WBBtTGcN2kVyb9-1",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JBoss Server",
            "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server.",
            "kind": "relationship"
          },
          {
            "id": "Dk6PDdwM20E52lIHaNhg-2",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "name": "relatesTo",
            "label": "relatesTo",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JBoss Vulnerability",
            "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability.",
            "kind": "relationship"
          },
          {
            "id": "3gRsCNvQQYv_DzA845zK-3",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "3gRsCNvQQYv_DzA845zK-2",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JexBoss Instance",
            "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-1",
            "source": "9HdykkMEKshDh6IqXlot-3",
            "target": "DyAQahDk-dQDjuwduhnR-1",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS1: Active Recon",
            "targetLabel": "AS2: Exploit JBoss Vulnerability",
            "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability.",
            "kind": "relationship"
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
        "description": "Exploit Public-Facing Application is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 490.0,
          "y": 550.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "Rnk911M4N2P_T4AlKA5v-1",
            "source": "IPQajqL7GtjNWv-qm3LO-3",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "sourceLabel": "Exploit Public-Facing Application",
            "targetLabel": "JBoss Vulnerability",
            "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-4",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-3",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "Exploit Public-Facing Application",
            "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application.",
            "kind": "relationship"
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
        "description": "T1190 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK technique mapping",
          "Threat report abstraction"
        ],
        "drawio": {
          "x": 995.0,
          "y": 420.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-7",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-6",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "T1190",
            "description": "AS2: Exploit JBoss Vulnerability implements T1190.",
            "kind": "relationship"
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
        "description": "AS3: Upload Webshell is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 830.0,
          "y": 620.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-13",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "IPQajqL7GtjNWv-qm3LO-12",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "Web Shell",
            "description": "AS3: Upload Webshell refersTo Web Shell.",
            "kind": "relationship"
          },
          {
            "id": "IPQajqL7GtjNWv-qm3LO-16",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "IPQajqL7GtjNWv-qm3LO-15",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "T1505.003",
            "description": "AS3: Upload Webshell implements T1505.003.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-5",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "9Yofr0bB0NcOsz9Q7CJN-4",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "AS4: Custom Backdoor",
            "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-10",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "IPQajqL7GtjNWv-qm3LO-9",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "AS3: Upload Webshell",
            "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell.",
            "kind": "relationship"
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
        "description": "Web Shell is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 670.0,
          "y": 730.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-13",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "IPQajqL7GtjNWv-qm3LO-12",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "Web Shell",
            "description": "AS3: Upload Webshell refersTo Web Shell.",
            "kind": "relationship"
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
        "description": "T1505.003 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK technique mapping",
          "Threat report abstraction"
        ],
        "drawio": {
          "x": 1040.0,
          "y": 680.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "IPQajqL7GtjNWv-qm3LO-16",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "IPQajqL7GtjNWv-qm3LO-15",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "T1505.003",
            "description": "AS3: Upload Webshell implements T1505.003.",
            "kind": "relationship"
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
        "description": "JBoss Server is a case-study instance of the ApplicationInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ApplicationInstance is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 150.0,
          "y": 550.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "W3W2Np_yM1KxrGV2YGuf-1",
            "source": "XqnBadelrtm9o-audj2r-1",
            "target": "Btdde5L8To60vzw6WzB_-1",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "sourceLabel": "JBoss Server",
            "targetLabel": "Web Server Application",
            "description": "JBoss Server hasApplicationType Web Server Application.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "DO7GT-WBBtTGcN2kVyb9-1",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JBoss Server",
            "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server.",
            "kind": "relationship"
          },
          {
            "id": "sxwr4EOJseUQ3gBsYOZb-2",
            "source": "Dk6PDdwM20E52lIHaNhg-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "sourceLabel": "JBoss Vulnerability",
            "targetLabel": "JBoss Server",
            "description": "JBoss Vulnerability affectsProcess JBoss Server.",
            "kind": "relationship"
          },
          {
            "id": "8OmmlQFm2b0RUREKoeL3-1",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "JBoss Server",
            "description": "N1: Web Server hostsResource JBoss Server.",
            "kind": "relationship"
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
        "description": "JBoss Vulnerability is a case-study instance of the SoftwareVulnerability entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SoftwareVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Vulnerability knowledge base",
          "Scanner output or vulnerability assessment",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 240.0,
          "y": 440.0,
          "width": 150.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "sxwr4EOJseUQ3gBsYOZb-2",
            "source": "Dk6PDdwM20E52lIHaNhg-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "sourceLabel": "JBoss Vulnerability",
            "targetLabel": "JBoss Server",
            "description": "JBoss Vulnerability affectsProcess JBoss Server.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "Dk6PDdwM20E52lIHaNhg-2",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "name": "relatesTo",
            "label": "relatesTo",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JBoss Vulnerability",
            "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability.",
            "kind": "relationship"
          },
          {
            "id": "Rnk911M4N2P_T4AlKA5v-1",
            "source": "IPQajqL7GtjNWv-qm3LO-3",
            "target": "Dk6PDdwM20E52lIHaNhg-1",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "sourceLabel": "Exploit Public-Facing Application",
            "targetLabel": "JBoss Vulnerability",
            "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability.",
            "kind": "relationship"
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
        "description": "Web Server Application is a case-study instance of the ApplicationType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: ApplicationType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 150.0,
          "y": 630.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "W3W2Np_yM1KxrGV2YGuf-1",
            "source": "XqnBadelrtm9o-audj2r-1",
            "target": "Btdde5L8To60vzw6WzB_-1",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "sourceLabel": "JBoss Server",
            "targetLabel": "Web Server Application",
            "description": "JBoss Server hasApplicationType Web Server Application.",
            "kind": "relationship"
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
        "description": "Operation Wocao is a case-study instance of the Campaign entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Campaign is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 1070.0,
          "y": 300.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "bEFLhpSV-8ZIpqk4wgaV-1",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "target": "izy8kfX3pBO5z0ifo8so-1",
            "name": "targetsSector",
            "label": "targetsSector",
            "sourceLabel": "Operation Wocao",
            "targetLabel": "Finance",
            "description": "Operation Wocao targetsSector Finance.",
            "kind": "relationship"
          },
          {
            "id": "XvtYkyKbk3l0ouDT-OjV-1",
            "source": "r0pgC3ykTX_Oh4rQCJO8-1",
            "target": "0BvM-G4DcYzrvQnhOk9X-2",
            "name": "focusesOn",
            "label": "focusesOn",
            "sourceLabel": "Operation Wocao",
            "targetLabel": "Germany",
            "description": "Operation Wocao focusesOn Germany.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "r0pgC3ykTX_Oh4rQCJO8-2",
            "source": "MXbeosHEiHACBSZkGos4-1",
            "target": "r0pgC3ykTX_Oh4rQCJO8-1",
            "name": "partsOf",
            "label": "partsOf",
            "sourceLabel": "Attack against Organization",
            "targetLabel": "Operation Wocao",
            "description": "Attack against Organization partsOf Operation Wocao.",
            "kind": "relationship"
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
        "description": "JexBoss Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 600.0,
          "y": 620.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-1",
            "source": "3gRsCNvQQYv_DzA845zK-2",
            "target": "3gRsCNvQQYv_DzA845zK-5",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "JexBoss Instance",
            "targetLabel": "JexBoss",
            "description": "JexBoss Instance instanceOf JexBoss.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "3gRsCNvQQYv_DzA845zK-3",
            "source": "DyAQahDk-dQDjuwduhnR-1",
            "target": "3gRsCNvQQYv_DzA845zK-2",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS2: Exploit JBoss Vulnerability",
            "targetLabel": "JexBoss Instance",
            "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance.",
            "kind": "relationship"
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
        "description": "JexBoss is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 480.0,
          "y": 710.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-1",
            "source": "3gRsCNvQQYv_DzA845zK-2",
            "target": "3gRsCNvQQYv_DzA845zK-5",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "JexBoss Instance",
            "targetLabel": "JexBoss",
            "description": "JexBoss Instance instanceOf JexBoss.",
            "kind": "relationship"
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
        "description": "AS5: Exfiltration using Backdoor is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 830.0,
          "y": 910.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-29",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "XServer",
            "description": "AS5: Exfiltration using Backdoor employs XServer.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-32",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-31",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "T1005",
            "description": "AS5: Exfiltration using Backdoor implements T1005.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-35",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-34",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Exfiltrate Local Data",
            "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data.",
            "kind": "relationship"
          },
          {
            "id": "Cb2qYGBpAWJw18aUzXTZ-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "0BVC2g_B0jFCjWbnhG5Y-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Client Data",
            "description": "AS5: Exfiltration using Backdoor targetsResource Client Data.",
            "kind": "relationship"
          },
          {
            "id": "pfjEKUk9ezN4QYxd3kiN-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "compromises",
            "label": "compromises",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Client Data",
            "description": "AS5: Exfiltration using Backdoor compromises Client Data.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-10",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-3",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "AS5: Exfiltration using Backdoor",
            "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor.",
            "kind": "relationship"
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
        "description": "AS4: Custom Backdoor is a case-study instance of the AttackStepItem entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 830.0,
          "y": 810.0,
          "width": 190.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-8",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-7",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "Install Custom Backdoor",
            "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-10",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-3",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "AS5: Exfiltration using Backdoor",
            "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-14",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-12",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "T1059.001",
            "description": "AS4: Custom Backdoor implements T1059.001.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-17",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-16",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "Powershell Instance",
            "description": "AS4: Custom Backdoor employs Powershell Instance.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-5",
            "source": "IPQajqL7GtjNWv-qm3LO-9",
            "target": "9Yofr0bB0NcOsz9Q7CJN-4",
            "name": "followedBy",
            "label": "followedBy",
            "sourceLabel": "AS3: Upload Webshell",
            "targetLabel": "AS4: Custom Backdoor",
            "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor.",
            "kind": "relationship"
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
        "description": "Install Custom Backdoor is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 540.0,
          "y": 810.0,
          "width": 170.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-8",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-7",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "Install Custom Backdoor",
            "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor.",
            "kind": "relationship"
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
        "description": "T1059.001 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK technique mapping",
          "Threat report abstraction"
        ],
        "drawio": {
          "x": 1040.0,
          "y": 750.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-14",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-12",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "T1059.001",
            "description": "AS4: Custom Backdoor implements T1059.001.",
            "kind": "relationship"
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
        "description": "Powershell Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 555.0,
          "y": 900.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-20",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "target": "9Yofr0bB0NcOsz9Q7CJN-19",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "Powershell Instance",
            "targetLabel": "Powershell",
            "description": "Powershell Instance instanceOf Powershell.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-24",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "target": "9Yofr0bB0NcOsz9Q7CJN-23",
            "name": "deploys",
            "label": "deploys",
            "sourceLabel": "Powershell Instance",
            "targetLabel": "XServer Instance",
            "description": "Powershell Instance deploys XServer Instance.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-17",
            "source": "9Yofr0bB0NcOsz9Q7CJN-4",
            "target": "9Yofr0bB0NcOsz9Q7CJN-16",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS4: Custom Backdoor",
            "targetLabel": "Powershell Instance",
            "description": "AS4: Custom Backdoor employs Powershell Instance.",
            "kind": "relationship"
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
        "description": "Powershell is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 555.0,
          "y": 990.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-20",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "target": "9Yofr0bB0NcOsz9Q7CJN-19",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "Powershell Instance",
            "targetLabel": "Powershell",
            "description": "Powershell Instance instanceOf Powershell.",
            "kind": "relationship"
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
        "description": "XServer Instance is a case-study instance of the AttackToolInstance entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 350.0,
          "y": 1100.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-27",
            "source": "9Yofr0bB0NcOsz9Q7CJN-23",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "XServer Instance",
            "targetLabel": "XServer",
            "description": "XServer Instance instanceOf XServer.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-24",
            "source": "9Yofr0bB0NcOsz9Q7CJN-16",
            "target": "9Yofr0bB0NcOsz9Q7CJN-23",
            "name": "deploys",
            "label": "deploys",
            "sourceLabel": "Powershell Instance",
            "targetLabel": "XServer Instance",
            "description": "Powershell Instance deploys XServer Instance.",
            "kind": "relationship"
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
        "description": "XServer is a case-study instance of the AttackTool entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report tooling description",
          "Malware/tool intelligence",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 350.0,
          "y": 1201.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-29",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "name": "employs",
            "label": "employs",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "XServer",
            "description": "AS5: Exfiltration using Backdoor employs XServer.",
            "kind": "relationship"
          },
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-27",
            "source": "9Yofr0bB0NcOsz9Q7CJN-23",
            "target": "9Yofr0bB0NcOsz9Q7CJN-26",
            "name": "instanceOf",
            "label": "instanceOf",
            "sourceLabel": "XServer Instance",
            "targetLabel": "XServer",
            "description": "XServer Instance instanceOf XServer.",
            "kind": "relationship"
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
        "description": "T1005 is a case-study instance of the TTP entity in the feasibility-oriented metamodel. It specializes the metamodel concept: TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK technique mapping",
          "Threat report abstraction"
        ],
        "drawio": {
          "x": 1040.0,
          "y": 980.0,
          "width": 65.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-31",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "impacts",
            "label": "impacts",
            "sourceLabel": "T1005",
            "targetLabel": "Client Data",
            "description": "T1005 impacts Client Data.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-32",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-31",
            "name": "implements",
            "label": "implements",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "T1005",
            "description": "AS5: Exfiltration using Backdoor implements T1005.",
            "kind": "relationship"
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
        "description": "Exfiltrate Local Data is a case-study instance of the AttackStep entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat report abstraction",
          "ATT&CK mapping",
          "Case-study CTI assumptions"
        ],
        "drawio": {
          "x": 840.0,
          "y": 1040.0,
          "width": 170.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "OhYZWlmZeSA9s69LXVcg-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-34",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "name": "violates",
            "label": "violates",
            "sourceLabel": "Exfiltrate Local Data",
            "targetLabel": "Confidentiality",
            "description": "Exfiltrate Local Data violates Confidentiality.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "9Yofr0bB0NcOsz9Q7CJN-35",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "9Yofr0bB0NcOsz9Q7CJN-34",
            "name": "refersTo",
            "label": "refersTo",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Exfiltrate Local Data",
            "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data.",
            "kind": "relationship"
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
        "description": "Confidentiality is a case-study instance of the SecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": -30.0,
          "y": 880.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "OhYZWlmZeSA9s69LXVcg-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-34",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "name": "violates",
            "label": "violates",
            "sourceLabel": "Exfiltrate Local Data",
            "targetLabel": "Confidentiality",
            "description": "Exfiltrate Local Data violates Confidentiality.",
            "kind": "relationship"
          },
          {
            "id": "6eOacnnfol6akpcFKc8O-1",
            "source": "nlouQvjGSw6mbKcphsgJ-1",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "sourceLabel": "Client Data",
            "targetLabel": "Confidentiality",
            "description": "Client Data implementationOf Confidentiality.",
            "kind": "relationship"
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
        "description": "Client Data is a case-study instance of the Asset entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 160.0,
          "y": 930.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "nlouQvjGSw6mbKcphsgJ-3",
            "source": "0BVC2g_B0jFCjWbnhG5Y-1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "sourceLabel": "Client Data",
            "targetLabel": "Client Data",
            "description": "Client Data hasSecurityRequirement Client Data.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "Cb2qYGBpAWJw18aUzXTZ-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "0BVC2g_B0jFCjWbnhG5Y-1",
            "name": "targetsResource",
            "label": "targetsResource",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Client Data",
            "description": "AS5: Exfiltration using Backdoor targetsResource Client Data.",
            "kind": "relationship"
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
        "description": "Client Data is a case-study instance of the AssetSecurityRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": 160.0,
          "y": 800.0,
          "width": 140.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "6eOacnnfol6akpcFKc8O-1",
            "source": "nlouQvjGSw6mbKcphsgJ-1",
            "target": "R0iVRIHVncbUqXWk4Rdu-1",
            "name": "implementationOf",
            "label": "implementationOf",
            "sourceLabel": "Client Data",
            "targetLabel": "Confidentiality",
            "description": "Client Data implementationOf Confidentiality.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "pfjEKUk9ezN4QYxd3kiN-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-3",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "compromises",
            "label": "compromises",
            "sourceLabel": "AS5: Exfiltration using Backdoor",
            "targetLabel": "Client Data",
            "description": "AS5: Exfiltration using Backdoor compromises Client Data.",
            "kind": "relationship"
          },
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-1",
            "source": "9Yofr0bB0NcOsz9Q7CJN-31",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "impacts",
            "label": "impacts",
            "sourceLabel": "T1005",
            "targetLabel": "Client Data",
            "description": "T1005 impacts Client Data.",
            "kind": "relationship"
          },
          {
            "id": "nlouQvjGSw6mbKcphsgJ-3",
            "source": "0BVC2g_B0jFCjWbnhG5Y-1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "sourceLabel": "Client Data",
            "targetLabel": "Client Data",
            "description": "Client Data hasSecurityRequirement Client Data.",
            "kind": "relationship"
          },
          {
            "id": "6eOacnnfol6akpcFKc8O-4",
            "source": "6eOacnnfol6akpcFKc8O-3",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "sourceLabel": "Sensitive data must remain confidential",
            "targetLabel": "Client Data",
            "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data.",
            "kind": "relationship"
          },
          {
            "id": "TQ2-MOSyF8PbvZfVK9nl-2",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "Client Data",
            "description": "N1: Web Server hostsResource Client Data.",
            "kind": "relationship"
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
        "description": "Sensitive data must remain confidential is a case-study instance of the BusinessRequirement entity in the feasibility-oriented metamodel. It specializes the metamodel concept: BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Organizational profile",
          "Risk management documentation",
          "Case-study assumptions"
        ],
        "drawio": {
          "x": -40.0,
          "y": 560.0,
          "width": 140.0,
          "height": 80.0
        },
        "outgoingRelations": [
          {
            "id": "6eOacnnfol6akpcFKc8O-4",
            "source": "6eOacnnfol6akpcFKc8O-3",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "sourceLabel": "Sensitive data must remain confidential",
            "targetLabel": "Client Data",
            "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "BLdz90eUOZqGWJi0qpWp-2",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "6eOacnnfol6akpcFKc8O-3",
            "name": "hasBusinessRequirment",
            "label": "hasBusinessRequirment",
            "sourceLabel": "FinOrg",
            "targetLabel": "Sensitive data must remain confidential",
            "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential.",
            "kind": "relationship"
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
        "description": "Prod-Infra is a case-study instance of the Infrastructure entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 360.0,
          "y": 280.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
            "source": "ONCgWmA4yeiABO8jPh6Q-3",
            "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "name": "madeBy",
            "label": "madeBy",
            "sourceLabel": "Prod-Infra",
            "targetLabel": "N1: Web Server",
            "description": "Prod-Infra madeBy N1: Web Server.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "ONCgWmA4yeiABO8jPh6Q-4",
            "source": "0BvM-G4DcYzrvQnhOk9X-1",
            "target": "ONCgWmA4yeiABO8jPh6Q-3",
            "name": "manages",
            "label": "manages",
            "sourceLabel": "FinOrg",
            "targetLabel": "Prod-Infra",
            "description": "FinOrg manages Prod-Infra.",
            "kind": "relationship"
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
        "description": "N1: Web Server is a case-study instance of the Node entity in the feasibility-oriented metamodel. It specializes the metamodel concept: Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 450.0,
          "y": 370.0,
          "width": 120.0,
          "height": 40.0
        },
        "outgoingRelations": [
          {
            "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "Web Application Server",
            "description": "N1: Web Server hasNodeType Web Application Server.",
            "kind": "relationship"
          },
          {
            "id": "8OmmlQFm2b0RUREKoeL3-1",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "XqnBadelrtm9o-audj2r-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "JBoss Server",
            "description": "N1: Web Server hostsResource JBoss Server.",
            "kind": "relationship"
          },
          {
            "id": "TQ2-MOSyF8PbvZfVK9nl-2",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "nlouQvjGSw6mbKcphsgJ-1",
            "name": "hostsResource",
            "label": "hostsResource",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "Client Data",
            "description": "N1: Web Server hostsResource Client Data.",
            "kind": "relationship"
          }
        ],
        "incomingRelations": [
          {
            "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
            "source": "ONCgWmA4yeiABO8jPh6Q-3",
            "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "name": "madeBy",
            "label": "madeBy",
            "sourceLabel": "Prod-Infra",
            "targetLabel": "N1: Web Server",
            "description": "Prod-Infra madeBy N1: Web Server.",
            "kind": "relationship"
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
        "description": "Web Application Server is a case-study instance of the NodeType entity in the feasibility-oriented metamodel. It specializes the metamodel concept: NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure inventory",
          "Configuration baseline",
          "Case-study implementation model"
        ],
        "drawio": {
          "x": 520.0,
          "y": 280.0,
          "width": 150.0,
          "height": 40.0
        },
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
            "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
            "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "sourceLabel": "N1: Web Server",
            "targetLabel": "Web Application Server",
            "description": "N1: Web Server hasNodeType Web Application Server.",
            "kind": "relationship"
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
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "0BvM-G4DcYzrvQnhOk9X-2",
        "name": "basedIn",
        "label": "basedIn",
        "sourceLabel": "FinOrg",
        "targetLabel": "Germany",
        "description": "FinOrg basedIn Germany.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "izy8kfX3pBO5z0ifo8so-2",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "izy8kfX3pBO5z0ifo8so-1",
        "name": "operatesIn",
        "label": "operatesIn",
        "sourceLabel": "FinOrg",
        "targetLabel": "Finance",
        "description": "FinOrg operatesIn Finance.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "BLdz90eUOZqGWJi0qpWp-2",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "6eOacnnfol6akpcFKc8O-3",
        "name": "hasBusinessRequirment",
        "label": "hasBusinessRequirment",
        "sourceLabel": "FinOrg",
        "targetLabel": "Sensitive data must remain confidential",
        "description": "FinOrg hasBusinessRequirment Sensitive data must remain confidential.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "ONCgWmA4yeiABO8jPh6Q-4",
        "source": "0BvM-G4DcYzrvQnhOk9X-1",
        "target": "ONCgWmA4yeiABO8jPh6Q-3",
        "name": "manages",
        "label": "manages",
        "sourceLabel": "FinOrg",
        "targetLabel": "Prod-Infra",
        "description": "FinOrg manages Prod-Infra.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-3",
        "source": "0BvM-G4DcYzrvQnhOk9X-2",
        "target": "qnMAzMPU2UIx0dhE2o8o-2",
        "name": "partsOf",
        "label": "partsOf",
        "sourceLabel": "Germany",
        "targetLabel": "European Union",
        "description": "Germany partsOf European Union.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "qnMAzMPU2UIx0dhE2o8o-5",
        "source": "0BvM-G4DcYzrvQnhOk9X-2",
        "target": "qnMAzMPU2UIx0dhE2o8o-4",
        "name": "partsOf",
        "label": "partsOf",
        "sourceLabel": "Germany",
        "targetLabel": "NATO",
        "description": "Germany partsOf NATO.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "vcZTPhuOb6B-M6w-B_EE-5",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "vcZTPhuOb6B-M6w-B_EE-4",
        "name": "relatedTo",
        "label": "relatedTo",
        "sourceLabel": "APT20",
        "targetLabel": "China-backed Group",
        "description": "APT20 relatedTo China-backed Group.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "RB2Fht_Hu-7ZOwt2WELK-2",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "RB2Fht_Hu-7ZOwt2WELK-1",
        "name": "hasExpertise",
        "label": "hasExpertise",
        "sourceLabel": "APT20",
        "targetLabel": "Expert",
        "description": "APT20 hasExpertise Expert.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9HdykkMEKshDh6IqXlot-1",
        "source": "vcZTPhuOb6B-M6w-B_EE-3",
        "target": "MXbeosHEiHACBSZkGos4-1",
        "name": "initiates",
        "label": "initiates",
        "sourceLabel": "APT20",
        "targetLabel": "Attack against Organization",
        "description": "APT20 initiates Attack against Organization.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "Y4xnolLzykD4MCw7Hd5a-1",
        "source": "vcZTPhuOb6B-M6w-B_EE-4",
        "target": "cvImlgJpU3P0QqpsDf0G-1",
        "name": "hasAdversaryType",
        "label": "hasAdversaryType",
        "sourceLabel": "China-backed Group",
        "targetLabel": "State-sponsored actor",
        "description": "China-backed Group hasAdversaryType State-sponsored actor.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9HdykkMEKshDh6IqXlot-4",
        "source": "MXbeosHEiHACBSZkGos4-1",
        "target": "9HdykkMEKshDh6IqXlot-3",
        "name": "startsWith",
        "label": "startsWith",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "AS1: Active Recon",
        "description": "Attack against Organization startsWith AS1: Active Recon.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "r0pgC3ykTX_Oh4rQCJO8-2",
        "source": "MXbeosHEiHACBSZkGos4-1",
        "target": "r0pgC3ykTX_Oh4rQCJO8-1",
        "name": "partsOf",
        "label": "partsOf",
        "sourceLabel": "Attack against Organization",
        "targetLabel": "Operation Wocao",
        "description": "Attack against Organization partsOf Operation Wocao.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "vJn6_qnLwv68IXdAuOWm-2",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "vJn6_qnLwv68IXdAuOWm-1",
        "name": "refersTo",
        "label": "refersTo",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "Active Recon",
        "description": "AS1: Active Recon refersTo Active Recon.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "jCq8-NTqf9Jp3o_aXnjk-2",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "jCq8-NTqf9Jp3o_aXnjk-1",
        "name": "implements",
        "label": "implements",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "T1595",
        "description": "AS1: Active Recon implements T1595.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-1",
        "source": "9HdykkMEKshDh6IqXlot-3",
        "target": "DyAQahDk-dQDjuwduhnR-1",
        "name": "followedBy",
        "label": "followedBy",
        "sourceLabel": "AS1: Active Recon",
        "targetLabel": "AS2: Exploit JBoss Vulnerability",
        "description": "AS1: Active Recon followedBy AS2: Exploit JBoss Vulnerability.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-4",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-3",
        "name": "refersTo",
        "label": "refersTo",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "Exploit Public-Facing Application",
        "description": "AS2: Exploit JBoss Vulnerability refersTo Exploit Public-Facing Application.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-7",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-6",
        "name": "implements",
        "label": "implements",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "T1190",
        "description": "AS2: Exploit JBoss Vulnerability implements T1190.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-10",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "IPQajqL7GtjNWv-qm3LO-9",
        "name": "followedBy",
        "label": "followedBy",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "AS3: Upload Webshell",
        "description": "AS2: Exploit JBoss Vulnerability followedBy AS3: Upload Webshell.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "DO7GT-WBBtTGcN2kVyb9-1",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "name": "targetsResource",
        "label": "targetsResource",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JBoss Server",
        "description": "AS2: Exploit JBoss Vulnerability targetsResource JBoss Server.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "Dk6PDdwM20E52lIHaNhg-2",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "Dk6PDdwM20E52lIHaNhg-1",
        "name": "relatesTo",
        "label": "relatesTo",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JBoss Vulnerability",
        "description": "AS2: Exploit JBoss Vulnerability relatesTo JBoss Vulnerability.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "3gRsCNvQQYv_DzA845zK-3",
        "source": "DyAQahDk-dQDjuwduhnR-1",
        "target": "3gRsCNvQQYv_DzA845zK-2",
        "name": "employs",
        "label": "employs",
        "sourceLabel": "AS2: Exploit JBoss Vulnerability",
        "targetLabel": "JexBoss Instance",
        "description": "AS2: Exploit JBoss Vulnerability employs JexBoss Instance.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "Rnk911M4N2P_T4AlKA5v-1",
        "source": "IPQajqL7GtjNWv-qm3LO-3",
        "target": "Dk6PDdwM20E52lIHaNhg-1",
        "name": "exploitsVulnerability",
        "label": "exploitsVulnerability",
        "sourceLabel": "Exploit Public-Facing Application",
        "targetLabel": "JBoss Vulnerability",
        "description": "Exploit Public-Facing Application exploitsVulnerability JBoss Vulnerability.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-13",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "IPQajqL7GtjNWv-qm3LO-12",
        "name": "refersTo",
        "label": "refersTo",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "Web Shell",
        "description": "AS3: Upload Webshell refersTo Web Shell.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "IPQajqL7GtjNWv-qm3LO-16",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "IPQajqL7GtjNWv-qm3LO-15",
        "name": "implements",
        "label": "implements",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "T1505.003",
        "description": "AS3: Upload Webshell implements T1505.003.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "W3W2Np_yM1KxrGV2YGuf-1",
        "source": "XqnBadelrtm9o-audj2r-1",
        "target": "Btdde5L8To60vzw6WzB_-1",
        "name": "hasApplicationType",
        "label": "hasApplicationType",
        "sourceLabel": "JBoss Server",
        "targetLabel": "Web Server Application",
        "description": "JBoss Server hasApplicationType Web Server Application.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "sxwr4EOJseUQ3gBsYOZb-2",
        "source": "Dk6PDdwM20E52lIHaNhg-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "name": "affectsProcess",
        "label": "affectsProcess",
        "sourceLabel": "JBoss Vulnerability",
        "targetLabel": "JBoss Server",
        "description": "JBoss Vulnerability affectsProcess JBoss Server.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "bEFLhpSV-8ZIpqk4wgaV-1",
        "source": "r0pgC3ykTX_Oh4rQCJO8-1",
        "target": "izy8kfX3pBO5z0ifo8so-1",
        "name": "targetsSector",
        "label": "targetsSector",
        "sourceLabel": "Operation Wocao",
        "targetLabel": "Finance",
        "description": "Operation Wocao targetsSector Finance.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "XvtYkyKbk3l0ouDT-OjV-1",
        "source": "r0pgC3ykTX_Oh4rQCJO8-1",
        "target": "0BvM-G4DcYzrvQnhOk9X-2",
        "name": "focusesOn",
        "label": "focusesOn",
        "sourceLabel": "Operation Wocao",
        "targetLabel": "Germany",
        "description": "Operation Wocao focusesOn Germany.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-1",
        "source": "3gRsCNvQQYv_DzA845zK-2",
        "target": "3gRsCNvQQYv_DzA845zK-5",
        "name": "instanceOf",
        "label": "instanceOf",
        "sourceLabel": "JexBoss Instance",
        "targetLabel": "JexBoss",
        "description": "JexBoss Instance instanceOf JexBoss.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-29",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-26",
        "name": "employs",
        "label": "employs",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "XServer",
        "description": "AS5: Exfiltration using Backdoor employs XServer.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-32",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-31",
        "name": "implements",
        "label": "implements",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "T1005",
        "description": "AS5: Exfiltration using Backdoor implements T1005.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-35",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "9Yofr0bB0NcOsz9Q7CJN-34",
        "name": "refersTo",
        "label": "refersTo",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Exfiltrate Local Data",
        "description": "AS5: Exfiltration using Backdoor refersTo Exfiltrate Local Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "Cb2qYGBpAWJw18aUzXTZ-1",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "0BVC2g_B0jFCjWbnhG5Y-1",
        "name": "targetsResource",
        "label": "targetsResource",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Client Data",
        "description": "AS5: Exfiltration using Backdoor targetsResource Client Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "pfjEKUk9ezN4QYxd3kiN-1",
        "source": "9Yofr0bB0NcOsz9Q7CJN-3",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "compromises",
        "label": "compromises",
        "sourceLabel": "AS5: Exfiltration using Backdoor",
        "targetLabel": "Client Data",
        "description": "AS5: Exfiltration using Backdoor compromises Client Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-8",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-7",
        "name": "refersTo",
        "label": "refersTo",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "Install Custom Backdoor",
        "description": "AS4: Custom Backdoor refersTo Install Custom Backdoor.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-10",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-3",
        "name": "followedBy",
        "label": "followedBy",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "AS5: Exfiltration using Backdoor",
        "description": "AS4: Custom Backdoor followedBy AS5: Exfiltration using Backdoor.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-14",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-12",
        "name": "implements",
        "label": "implements",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "T1059.001",
        "description": "AS4: Custom Backdoor implements T1059.001.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-17",
        "source": "9Yofr0bB0NcOsz9Q7CJN-4",
        "target": "9Yofr0bB0NcOsz9Q7CJN-16",
        "name": "employs",
        "label": "employs",
        "sourceLabel": "AS4: Custom Backdoor",
        "targetLabel": "Powershell Instance",
        "description": "AS4: Custom Backdoor employs Powershell Instance.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-5",
        "source": "IPQajqL7GtjNWv-qm3LO-9",
        "target": "9Yofr0bB0NcOsz9Q7CJN-4",
        "name": "followedBy",
        "label": "followedBy",
        "sourceLabel": "AS3: Upload Webshell",
        "targetLabel": "AS4: Custom Backdoor",
        "description": "AS3: Upload Webshell followedBy AS4: Custom Backdoor.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-20",
        "source": "9Yofr0bB0NcOsz9Q7CJN-16",
        "target": "9Yofr0bB0NcOsz9Q7CJN-19",
        "name": "instanceOf",
        "label": "instanceOf",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "Powershell",
        "description": "Powershell Instance instanceOf Powershell.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-24",
        "source": "9Yofr0bB0NcOsz9Q7CJN-16",
        "target": "9Yofr0bB0NcOsz9Q7CJN-23",
        "name": "deploys",
        "label": "deploys",
        "sourceLabel": "Powershell Instance",
        "targetLabel": "XServer Instance",
        "description": "Powershell Instance deploys XServer Instance.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "9Yofr0bB0NcOsz9Q7CJN-27",
        "source": "9Yofr0bB0NcOsz9Q7CJN-23",
        "target": "9Yofr0bB0NcOsz9Q7CJN-26",
        "name": "instanceOf",
        "label": "instanceOf",
        "sourceLabel": "XServer Instance",
        "targetLabel": "XServer",
        "description": "XServer Instance instanceOf XServer.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "ONCgWmA4yeiABO8jPh6Q-1",
        "source": "9Yofr0bB0NcOsz9Q7CJN-31",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "impacts",
        "label": "impacts",
        "sourceLabel": "T1005",
        "targetLabel": "Client Data",
        "description": "T1005 impacts Client Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "OhYZWlmZeSA9s69LXVcg-1",
        "source": "9Yofr0bB0NcOsz9Q7CJN-34",
        "target": "R0iVRIHVncbUqXWk4Rdu-1",
        "name": "violates",
        "label": "violates",
        "sourceLabel": "Exfiltrate Local Data",
        "targetLabel": "Confidentiality",
        "description": "Exfiltrate Local Data violates Confidentiality.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "nlouQvjGSw6mbKcphsgJ-3",
        "source": "0BVC2g_B0jFCjWbnhG5Y-1",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "hasSecurityRequirement",
        "label": "hasSecurityRequirement",
        "sourceLabel": "Client Data",
        "targetLabel": "Client Data",
        "description": "Client Data hasSecurityRequirement Client Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "6eOacnnfol6akpcFKc8O-1",
        "source": "nlouQvjGSw6mbKcphsgJ-1",
        "target": "R0iVRIHVncbUqXWk4Rdu-1",
        "name": "implementationOf",
        "label": "implementationOf",
        "sourceLabel": "Client Data",
        "targetLabel": "Confidentiality",
        "description": "Client Data implementationOf Confidentiality.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "6eOacnnfol6akpcFKc8O-4",
        "source": "6eOacnnfol6akpcFKc8O-3",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "drivesSecurityRequirement",
        "label": "drivesSecurityRequirement",
        "sourceLabel": "Sensitive data must remain confidential",
        "targetLabel": "Client Data",
        "description": "Sensitive data must remain confidential drivesSecurityRequirement Client Data.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "Ocu_n1y9aNbJ_N_YXtDR-2",
        "source": "ONCgWmA4yeiABO8jPh6Q-3",
        "target": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "name": "madeBy",
        "label": "madeBy",
        "sourceLabel": "Prod-Infra",
        "targetLabel": "N1: Web Server",
        "description": "Prod-Infra madeBy N1: Web Server.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "FMxZ0zwrN68Z7Mt1Hq2i-2",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "FMxZ0zwrN68Z7Mt1Hq2i-1",
        "name": "hasNodeType",
        "label": "hasNodeType",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "Web Application Server",
        "description": "N1: Web Server hasNodeType Web Application Server.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "8OmmlQFm2b0RUREKoeL3-1",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "XqnBadelrtm9o-audj2r-1",
        "name": "hostsResource",
        "label": "hostsResource",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "JBoss Server",
        "description": "N1: Web Server hostsResource JBoss Server.",
        "kind": "relationship"
      }
    },
    {
      "data": {
        "id": "TQ2-MOSyF8PbvZfVK9nl-2",
        "source": "Ocu_n1y9aNbJ_N_YXtDR-1",
        "target": "nlouQvjGSw6mbKcphsgJ-1",
        "name": "hostsResource",
        "label": "hostsResource",
        "sourceLabel": "N1: Web Server",
        "targetLabel": "Client Data",
        "description": "N1: Web Server hostsResource Client Data.",
        "kind": "relationship"
      }
    }
  ]
};
