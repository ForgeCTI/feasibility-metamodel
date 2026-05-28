const metamodel = {
  "metadata": {
    "title": "Feasibility-Oriented Metamodel",
    "source": "metamodel_v2.drawio.html",
    "diagram": "Leonardo's touch",
    "nodeClasses": {
      "generic-a-priori": {
        "label": "Generic a priori",
        "color": "red",
        "description": "Reusable, generic knowledge available before the concrete use case."
      },
      "instance-specific": {
        "label": "Instance specific",
        "color": "blue",
        "description": "Use-case-specific entities describing the concrete organization, infrastructure, assets, and requirements."
      },
      "a-posteriori": {
        "label": "A posteriori",
        "color": "yellow",
        "description": "Observed or derived information available after or during threat analysis."
      }
    },
    "submetamodels": {
      "organization": {
        "label": "Organization",
        "description": "The organization sub-metamodel, refines the organizational context needed to scope feasibility analysis and support prioritization"
      },
      "infrastructure": {
        "label": "Infrastructure",
        "description": "Concrete assets, nodes, users, resources, applications, ports, processes, and information handled by the organization."
      },
      "cyber-threat": {
        "label": "Cyber threat",
        "description": "Threat knowledge, adversaries, campaigns, attack steps, tools, vulnerabilities, indicators, and observed events."
      }
    },
    "possibleSourcesPolicy": "Each entity includes an entity-specific possibleSourcesOfInformation array used by the sidebar renderer.",
    "positioning": "drawio-relative-layout",
    "positioningDescription": "Each node stores exact Draw.io center coordinates and normalized relative coordinates. script.js maps them to a Draw.io-like virtual canvas with a spacing multiplier to preserve distances.",
    "drawioLayout": {
      "sourceMinX": 100.0,
      "sourceMinY": 760.0,
      "sourceWidth": 1570.0,
      "sourceHeight": 910.0,
      "spacing": 1.18,
      "marginX": 160,
      "marginY": 120,
      "description": "Coordinates extracted from the Leonardo's touch page of metamodel_v2.drawio.html."
    }
  },
  "nodes": [
    {
      "data": {
        "id": "organization",
        "label": "Organization",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Organization is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-12",
        "name": "Organization",
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
            "id": "organization-operates-in-sector",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 Sector",
            "description": "Organization operatesIn Sector."
          },
          {
            "id": "organization-manages-infrastructure",
            "name": "manages",
            "label": "manages",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "infrastructure",
            "targetLabel": "Infrastructure",
            "targetCardinality": "0..*",
            "cardinality": "Organization 0..* — 0..* Infrastructure",
            "description": "Organization manages Infrastructure."
          },
          {
            "id": "organization-based-in-home-country",
            "name": "basedIn",
            "label": "basedIn",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 HomeCountry",
            "description": "Organization basedIn HomeCountry."
          },
          {
            "id": "organization-has-business-requirement-business-requirement",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "business-requirement",
            "targetLabel": "BusinessRequirement",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 BusinessRequirement",
            "description": "Organization hasBusinessRequirement BusinessRequirement."
          }
        ],
        "incomingRelations": [],
        "relativePosition": {
          "x": 0.095541,
          "y": 0.010989
        },
        "drawioPosition": {
          "x": 250.0,
          "y": 770.0
        },
        "drawioGeometry": {
          "x": 190.0,
          "y": 750.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "sector",
        "label": "Sector",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "Sector is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-13",
        "name": "Sector",
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
            "id": "organization-operates-in-sector",
            "name": "operatesIn",
            "label": "operatesIn",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 Sector",
            "description": "Organization operatesIn Sector."
          },
          {
            "id": "campaign-targets-sector-sector",
            "name": "targetsSector",
            "label": "targetsSector",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* Sector",
            "description": "Campaign targetsSector Sector."
          }
        ],
        "relativePosition": {
          "x": 0.184713,
          "y": 0.417582
        },
        "drawioPosition": {
          "x": 390.0,
          "y": 1140.0
        },
        "drawioGeometry": {
          "x": 330.0,
          "y": 1120.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "node",
        "label": "Node",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Node is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-24",
        "name": "Node",
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
            "id": "node-has-node-type-node-type",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "node-type",
            "targetLabel": "NodeType",
            "targetCardinality": "1",
            "cardinality": "Node 0..* — 1 NodeType",
            "description": "Node hasNodeType NodeType."
          },
          {
            "id": "node-hosts-resource-resource",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Resource",
            "description": "Node hostsResource Resource."
          },
          {
            "id": "node-exposes-port-port",
            "name": "exposesPort",
            "label": "exposesPort",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Port",
            "description": "Node exposesPort Port."
          },
          {
            "id": "node-is-destination-connection",
            "name": "isDestination",
            "label": "isDestination",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "connection",
            "targetLabel": "Connection",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Connection",
            "description": "Node isDestination Connection."
          },
          {
            "id": "node-runsos-os",
            "name": "runsOS",
            "label": "runsOS",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* OS",
            "description": "Node runsOS OS."
          }
        ],
        "incomingRelations": [
          {
            "id": "infrastructure-made-by-node",
            "name": "madeBy",
            "label": "madeBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "0..*",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "0..*",
            "cardinality": "Infrastructure 0..* — 0..* Node",
            "description": "Infrastructure madeBy Node."
          },
          {
            "id": "user-has-access-to-node",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Node",
            "description": "User hasAccessTo Node."
          }
        ],
        "relativePosition": {
          "x": 0.292994,
          "y": 0.648352
        },
        "drawioPosition": {
          "x": 560.0,
          "y": 1350.0
        },
        "drawioGeometry": {
          "x": 500.0,
          "y": 1330.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "os",
        "label": "OS",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "OS is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-25",
        "name": "OS",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Vendor operating-system documentation",
          "CPE dictionaries and software catalogues",
          "NVD/CVE affected-platform records",
          "Endpoint management inventory baselines"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "node-runsos-os",
            "name": "runsOS",
            "label": "runsOS",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* OS",
            "description": "Node runsOS OS."
          },
          {
            "id": "attack-tool-instance-designed-for-os",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 0..* — 1 OS",
            "description": "AttackToolInstance designedFor OS."
          },
          {
            "id": "attack-tool-instance-designed-for-os-2",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 0..* — 1 OS",
            "description": "AttackToolInstance designedFor OS."
          }
        ],
        "relativePosition": {
          "x": 0.471338,
          "y": 0.802198
        },
        "drawioPosition": {
          "x": 840.0,
          "y": 1490.0
        },
        "drawioGeometry": {
          "x": 780.0,
          "y": 1470.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "port",
        "label": "Port",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Port is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-30",
        "name": "Port",
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
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "node-exposes-port-port",
            "name": "exposesPort",
            "label": "exposesPort",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Port",
            "description": "Node exposesPort Port."
          },
          {
            "id": "config-vulnerability-affects-port-port",
            "name": "affectsPort",
            "label": "affectsPort",
            "source": "config-vulnerability",
            "sourceLabel": "ConfigVulnerability",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "ConfigVulnerability 0..* — 0..* Port",
            "description": "ConfigVulnerability affectsPort Port."
          },
          {
            "id": "process-listens-on-port",
            "name": "listensOn",
            "label": "listensOn",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* Port",
            "description": "Process listensOn Port."
          },
          {
            "id": "connection-has-destination-port-port",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "connection",
            "sourceLabel": "Connection",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Connection 0..* — 0..* Port",
            "description": "Connection hasDestinationPort Port."
          }
        ],
        "relativePosition": {
          "x": 0.292994,
          "y": 1.0
        },
        "drawioPosition": {
          "x": 560.0,
          "y": 1670.0
        },
        "drawioGeometry": {
          "x": 500.0,
          "y": 1650.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "threat-source",
        "label": "ThreatSource",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-41",
        "name": "ThreatSource",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "CTI reports and actor profiles",
          "CERT, government, or vendor threat advisories",
          "Incident reports and attribution assessments",
          "Threat intelligence platforms and knowledge bases"
        ],
        "outgoingRelations": [
          {
            "id": "threat-source-related-to-adversary",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "adversary",
            "targetLabel": "Adversary",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* Adversary",
            "description": "ThreatSource relatedTo Adversary."
          },
          {
            "id": "threat-source-initiates-threat-event",
            "name": "initiates",
            "label": "initiates",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "threat-event",
            "targetLabel": "ThreatEvent",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* ThreatEvent",
            "description": "ThreatSource initiates ThreatEvent."
          },
          {
            "id": "threat-source-has-expertise-expertise",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* Expertise",
            "description": "ThreatSource hasExpertise Expertise."
          },
          {
            "id": "threat-source-alias-threat-source",
            "name": "alias",
            "label": "alias",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "threat-source",
            "targetLabel": "ThreatSource",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* ThreatSource",
            "description": "ThreatSource alias ThreatSource."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-source-alias-threat-source",
            "name": "alias",
            "label": "alias",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "threat-source",
            "targetLabel": "ThreatSource",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* ThreatSource",
            "description": "ThreatSource alias ThreatSource."
          }
        ],
        "relativePosition": {
          "x": 0.859873,
          "y": 0.153846
        },
        "drawioPosition": {
          "x": 1450.0,
          "y": 900.0
        },
        "drawioGeometry": {
          "x": 1390.0,
          "y": 880.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "attack-tool-instance",
        "label": "AttackToolInstance",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "AttackToolInstance is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-50",
        "name": "AttackToolInstance",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident response reports",
          "Malware sandbox reports",
          "EDR/SIEM detections and telemetry",
          "Forensic artifacts from compromised hosts"
        ],
        "outgoingRelations": [
          {
            "id": "attack-tool-instance-designed-for-os",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 0..* — 1 OS",
            "description": "AttackToolInstance designedFor OS."
          },
          {
            "id": "attack-tool-instance-produces-indicator",
            "name": "produces",
            "label": "produces",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "indicator",
            "targetLabel": "Indicator",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* Indicator",
            "description": "AttackToolInstance produces Indicator."
          },
          {
            "id": "attack-tool-instance-instance-of-attack-tool",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool",
            "targetLabel": "AttackTool",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackTool",
            "description": "AttackToolInstance instanceOf AttackTool."
          },
          {
            "id": "attack-tool-instance-has-config-attack-tool-configuration",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackToolConfiguration",
            "description": "AttackToolInstance hasConfig AttackToolConfiguration."
          },
          {
            "id": "attack-tool-instance-designed-for-os-2",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 0..* — 1 OS",
            "description": "AttackToolInstance designedFor OS."
          },
          {
            "id": "attack-tool-instance-deploys-attack-tool-instance",
            "name": "deploys",
            "label": "deploys",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackToolInstance",
            "description": "AttackToolInstance deploys AttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "indicator-associated-to-attack-tool-instance",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "indicator",
            "sourceLabel": "Indicator",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "Indicator 0..* — 0..* AttackToolInstance",
            "description": "Indicator associatedTo AttackToolInstance."
          },
          {
            "id": "attack-tool-instance-deploys-attack-tool-instance",
            "name": "deploys",
            "label": "deploys",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackToolInstance",
            "description": "AttackToolInstance deploys AttackToolInstance."
          },
          {
            "id": "attack-step-item-employs-attack-tool-instance",
            "name": "employs",
            "label": "employs",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackToolInstance",
            "description": "AttackStepItem employs AttackToolInstance."
          }
        ],
        "relativePosition": {
          "x": 0.79586,
          "y": 0.527473
        },
        "drawioPosition": {
          "x": 1349.5,
          "y": 1240.0
        },
        "drawioGeometry": {
          "x": 1289.5,
          "y": 1220.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "campaign",
        "label": "Campaign",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "Campaign is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-57",
        "name": "Campaign",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "CTI campaign reports",
          "Government or CERT advisories",
          "Threat intelligence platform campaign records",
          "Incident reports linking multiple events"
        ],
        "outgoingRelations": [
          {
            "id": "campaign-targets-sector-sector",
            "name": "targetsSector",
            "label": "targetsSector",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* Sector",
            "description": "Campaign targetsSector Sector."
          },
          {
            "id": "campaign-focus-on-home-country",
            "name": "focusOn",
            "label": "focusOn",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* HomeCountry",
            "description": "Campaign focusOn HomeCountry."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-event-parts-of-campaign",
            "name": "partsOf",
            "label": "partsOf",
            "source": "threat-event",
            "sourceLabel": "ThreatEvent",
            "sourceCardinality": "0..*",
            "target": "campaign",
            "targetLabel": "Campaign",
            "targetCardinality": "0..*",
            "cardinality": "ThreatEvent 0..* — 0..* Campaign",
            "description": "ThreatEvent partsOf Campaign."
          }
        ],
        "relativePosition": {
          "x": 0.949013,
          "y": 0.362637
        },
        "drawioPosition": {
          "x": 1589.95,
          "y": 1090.0
        },
        "drawioGeometry": {
          "x": 1529.95,
          "y": 1070.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "indicator",
        "label": "Indicator",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "Indicator is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-60",
        "name": "Indicator",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "SIEM alerts and detection rules",
          "Threat intelligence feeds",
          "Malware analysis reports",
          "Network, DNS, proxy, and endpoint logs"
        ],
        "outgoingRelations": [
          {
            "id": "indicator-associated-to-attack-tool-instance",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "indicator",
            "sourceLabel": "Indicator",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "Indicator 0..* — 0..* AttackToolInstance",
            "description": "Indicator associatedTo AttackToolInstance."
          }
        ],
        "incomingRelations": [
          {
            "id": "attack-tool-instance-produces-indicator",
            "name": "produces",
            "label": "produces",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "indicator",
            "targetLabel": "Indicator",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* Indicator",
            "description": "AttackToolInstance produces Indicator."
          }
        ],
        "relativePosition": {
          "x": 0.776752,
          "y": 0.67033
        },
        "drawioPosition": {
          "x": 1319.5,
          "y": 1370.0
        },
        "drawioGeometry": {
          "x": 1259.5,
          "y": 1350.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "ttp",
        "label": "TTP",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "TTP is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-61",
        "name": "TTP",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK knowledge base",
          "CAPEC attack pattern catalogue",
          "CTI reports describing adversary behavior",
          "Red-team and incident-response reports"
        ],
        "outgoingRelations": [
          {
            "id": "ttp-impacts-asset-security-requirement",
            "name": "impacts",
            "label": "impacts",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "TTP 0..* — 0..* AssetSecurityRequirement",
            "description": "TTP impacts AssetSecurityRequirement."
          },
          {
            "id": "ttp-exploits-vulnerability-vulnerability",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "TTP 0..* — 0..* Vulnerability",
            "description": "TTP exploitsVulnerability Vulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "attack-step-item-implements-ttp",
            "name": "implements",
            "label": "implements",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "ttp",
            "targetLabel": "TTP",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* TTP",
            "description": "AttackStepItem implements TTP."
          }
        ],
        "relativePosition": {
          "x": 0.859873,
          "y": 0.461538
        },
        "drawioPosition": {
          "x": 1450.0,
          "y": 1180.0
        },
        "drawioGeometry": {
          "x": 1390.0,
          "y": 1160.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "infrastructure",
        "label": "Infrastructure",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Infrastructure is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-68",
        "name": "Infrastructure",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Enterprise architecture diagrams",
          "CMDB and asset inventory",
          "Cloud, network, and identity-management exports",
          "Infrastructure-as-code repositories"
        ],
        "outgoingRelations": [
          {
            "id": "infrastructure-made-by-node",
            "name": "madeBy",
            "label": "madeBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "0..*",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "0..*",
            "cardinality": "Infrastructure 0..* — 0..* Node",
            "description": "Infrastructure madeBy Node."
          }
        ],
        "incomingRelations": [
          {
            "id": "organization-manages-infrastructure",
            "name": "manages",
            "label": "manages",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "infrastructure",
            "targetLabel": "Infrastructure",
            "targetCardinality": "0..*",
            "cardinality": "Organization 0..* — 0..* Infrastructure",
            "description": "Organization manages Infrastructure."
          }
        ],
        "relativePosition": {
          "x": 0.292994,
          "y": 0.417582
        },
        "drawioPosition": {
          "x": 560.0,
          "y": 1140.0
        },
        "drawioGeometry": {
          "x": 500.0,
          "y": 1120.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "node-type",
        "label": "NodeType",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "NodeType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-69",
        "name": "NodeType",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Infrastructure architecture standards",
          "CMDB classification schema",
          "Cloud service catalogues",
          "Enterprise reference architecture"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "node-has-node-type-node-type",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "node-type",
            "targetLabel": "NodeType",
            "targetCardinality": "1",
            "cardinality": "Node 0..* — 1 NodeType",
            "description": "Node hasNodeType NodeType."
          }
        ],
        "relativePosition": {
          "x": 0.229299,
          "y": 0.802198
        },
        "drawioPosition": {
          "x": 460.0,
          "y": 1490.0
        },
        "drawioGeometry": {
          "x": 400.0,
          "y": 1470.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "application-type",
        "label": "ApplicationType",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "ApplicationType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-70",
        "name": "ApplicationType",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Application portfolio catalogues",
          "Software classification taxonomies",
          "Vendor product documentation",
          "Enterprise architecture repositories"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "application-instance-has-application-type-application-type",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "application-type",
            "targetLabel": "ApplicationType",
            "targetCardinality": "1",
            "cardinality": "ApplicationInstance 0..* — 1 ApplicationType",
            "description": "ApplicationInstance hasApplicationType ApplicationType."
          }
        ],
        "relativePosition": {
          "x": 0.452229,
          "y": 0.956044
        },
        "drawioPosition": {
          "x": 810.0,
          "y": 1630.0
        },
        "drawioGeometry": {
          "x": 750.0,
          "y": 1610.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "config-vulnerability",
        "label": "ConfigVulnerability",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "ConfigVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-71",
        "name": "ConfigVulnerability",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Configuration audit results",
          "CIS benchmark assessments",
          "Cloud security posture management findings",
          "Vulnerability scanner misconfiguration checks"
        ],
        "outgoingRelations": [
          {
            "id": "config-vulnerability-affects-port-port",
            "name": "affectsPort",
            "label": "affectsPort",
            "source": "config-vulnerability",
            "sourceLabel": "ConfigVulnerability",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "ConfigVulnerability 0..* — 0..* Port",
            "description": "ConfigVulnerability affectsPort Port."
          }
        ],
        "incomingRelations": [],
        "relativePosition": {
          "x": 0.617834,
          "y": 0.791209
        },
        "drawioPosition": {
          "x": 1070.0,
          "y": 1480.0
        },
        "drawioGeometry": {
          "x": 1010.0,
          "y": 1460.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "vulnerability",
        "label": "Vulnerability",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "Vulnerability is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-74",
        "name": "Vulnerability",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "NVD/CVE entries",
          "CWE weakness catalogue",
          "Vendor security advisories",
          "Vulnerability scanner knowledge bases"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "attack-step-item-exploits-vulnerability",
            "name": "exploits",
            "label": "exploits",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* Vulnerability",
            "description": "AttackStepItem exploits Vulnerability."
          },
          {
            "id": "ttp-exploits-vulnerability-vulnerability",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "TTP 0..* — 0..* Vulnerability",
            "description": "TTP exploitsVulnerability Vulnerability."
          },
          {
            "id": "software-vulnerability-relates-to-vulnerability",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "SoftwareVulnerability 0..* — 0..* Vulnerability",
            "description": "SoftwareVulnerability relatesTo Vulnerability."
          }
        ],
        "relativePosition": {
          "x": 0.687898,
          "y": 0.263736
        },
        "drawioPosition": {
          "x": 1180.0,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 1120.0,
          "y": 980.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "home-country",
        "label": "HomeCountry",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "HomeCountry is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-77",
        "name": "HomeCountry",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Official company records or public profiles",
          "Regulatory filings and procurement records",
          "Organization governance documents",
          "OSINT sources about organizational headquarters"
        ],
        "outgoingRelations": [
          {
            "id": "home-country-parts-of-international-body",
            "name": "partsOf",
            "label": "partsOf",
            "source": "home-country",
            "sourceLabel": "HomeCountry",
            "sourceCardinality": "0..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "0..*",
            "cardinality": "HomeCountry 0..* — 0..* International Body",
            "description": "HomeCountry partsOf International Body."
          }
        ],
        "incomingRelations": [
          {
            "id": "organization-based-in-home-country",
            "name": "basedIn",
            "label": "basedIn",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 HomeCountry",
            "description": "Organization basedIn HomeCountry."
          },
          {
            "id": "campaign-focus-on-home-country",
            "name": "focusOn",
            "label": "focusOn",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* HomeCountry",
            "description": "Campaign focusOn HomeCountry."
          }
        ],
        "relativePosition": {
          "x": 0.0,
          "y": 0.406593
        },
        "drawioPosition": {
          "x": 100.0,
          "y": 1130.0
        },
        "drawioGeometry": {
          "x": 40.0,
          "y": 1110.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "resource",
        "label": "Resource",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Resource is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-81",
        "name": "Resource",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Business process documentation",
          "Data inventory and asset catalogues",
          "CMDB resource records",
          "Interviews with asset owners"
        ],
        "outgoingRelations": [
          {
            "id": "resource-relates-to-process",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "Resource 0..* — 0..* Process",
            "description": "Resource relatesTo Process."
          },
          {
            "id": "resource-relates-to-asset",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "0..*",
            "target": "asset",
            "targetLabel": "Asset",
            "targetCardinality": "0..*",
            "cardinality": "Resource 0..* — 0..* Asset",
            "description": "Resource relatesTo Asset."
          }
        ],
        "incomingRelations": [
          {
            "id": "node-hosts-resource-resource",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Resource",
            "description": "Node hostsResource Resource."
          },
          {
            "id": "attack-step-item-targets-resource-resource",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* Resource",
            "description": "AttackStepItem targetsResource Resource."
          }
        ],
        "relativePosition": {
          "x": 0.55414,
          "y": 0.56044
        },
        "drawioPosition": {
          "x": 970.0,
          "y": 1270.0
        },
        "drawioGeometry": {
          "x": 910.0,
          "y": 1250.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "information-type",
        "label": "InformationType",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "InformationType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-82",
        "name": "InformationType",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Data classification policy",
          "Information governance catalogue",
          "DLP classification rules",
          "Business glossary or data dictionary"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "information-has-information-type-information-type",
            "name": "hasInformationType",
            "label": "hasInformationType",
            "source": "information",
            "sourceLabel": "Information",
            "sourceCardinality": "0..*",
            "target": "information-type",
            "targetLabel": "InformationType",
            "targetCardinality": "1",
            "cardinality": "Information 0..* — 1 InformationType",
            "description": "Information hasInformationType InformationType."
          }
        ],
        "relativePosition": {
          "x": 0.643949,
          "y": 0.703297
        },
        "drawioPosition": {
          "x": 1111.0,
          "y": 1400.0
        },
        "drawioGeometry": {
          "x": 1051.0,
          "y": 1380.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "adversary",
        "label": "Adversary",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "Adversary is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-83",
        "name": "Adversary",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat actor profiles from CTI vendors",
          "Government attribution reports",
          "Incident reports and malware-family analyses",
          "Threat intelligence platform entities"
        ],
        "outgoingRelations": [
          {
            "id": "adversary-has-adversary-type-adversary-type",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "adversary",
            "sourceLabel": "Adversary",
            "sourceCardinality": "0..*",
            "target": "adversary-type",
            "targetLabel": "AdversaryType",
            "targetCardinality": "1",
            "cardinality": "Adversary 0..* — 1 AdversaryType",
            "description": "Adversary hasAdversaryType AdversaryType."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-source-related-to-adversary",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "adversary",
            "targetLabel": "Adversary",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* Adversary",
            "description": "ThreatSource relatedTo Adversary."
          }
        ],
        "relativePosition": {
          "x": 1.0,
          "y": 0.153846
        },
        "drawioPosition": {
          "x": 1670.0,
          "y": 900.0
        },
        "drawioGeometry": {
          "x": 1610.0,
          "y": 880.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "international-body",
        "label": "International Body",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "International Body is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-84",
        "name": "International Body",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Official institutional websites",
          "Treaty or alliance membership lists",
          "Public policy and regulatory documents",
          "Organizational governance records"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "home-country-parts-of-international-body",
            "name": "partsOf",
            "label": "partsOf",
            "source": "home-country",
            "sourceLabel": "HomeCountry",
            "sourceCardinality": "0..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "0..*",
            "cardinality": "HomeCountry 0..* — 0..* International Body",
            "description": "HomeCountry partsOf International Body."
          }
        ],
        "relativePosition": {
          "x": 0.101911,
          "y": 0.56044
        },
        "drawioPosition": {
          "x": 260.0,
          "y": 1270.0
        },
        "drawioGeometry": {
          "x": 200.0,
          "y": 1250.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "threat-event",
        "label": "ThreatEvent",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-89",
        "name": "ThreatEvent",
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
            "id": "threat-event-parts-of-campaign",
            "name": "partsOf",
            "label": "partsOf",
            "source": "threat-event",
            "sourceLabel": "ThreatEvent",
            "sourceCardinality": "0..*",
            "target": "campaign",
            "targetLabel": "Campaign",
            "targetCardinality": "0..*",
            "cardinality": "ThreatEvent 0..* — 0..* Campaign",
            "description": "ThreatEvent partsOf Campaign."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-source-initiates-threat-event",
            "name": "initiates",
            "label": "initiates",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "threat-event",
            "targetLabel": "ThreatEvent",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* ThreatEvent",
            "description": "ThreatSource initiates ThreatEvent."
          }
        ],
        "relativePosition": {
          "x": 0.859873,
          "y": 0.263736
        },
        "drawioPosition": {
          "x": 1450.0,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 1390.0,
          "y": 980.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "human-vulnerability",
        "label": "HumanVulnerability",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "HumanVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-96",
        "name": "HumanVulnerability",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Security awareness assessment results",
          "Phishing simulation reports",
          "IAM and privilege review findings",
          "Incident postmortems involving human factors"
        ],
        "outgoingRelations": [
          {
            "id": "human-vulnerability-affects-user-user",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "human-vulnerability",
            "sourceLabel": "HumanVulnerability",
            "sourceCardinality": "0..*",
            "target": "user",
            "targetLabel": "User",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "HumanVulnerability affectsUser User."
          }
        ],
        "incomingRelations": [],
        "relativePosition": {
          "x": 0.700955,
          "y": 0.791209
        },
        "drawioPosition": {
          "x": 1200.5,
          "y": 1480.0
        },
        "drawioGeometry": {
          "x": 1140.5,
          "y": 1460.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "process",
        "label": "Process",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Process is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-97",
        "name": "Process",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Business process models and BPMN diagrams",
          "Operational runbooks",
          "Service management documentation",
          "Interviews with process owners"
        ],
        "outgoingRelations": [
          {
            "id": "process-affects-process-software-vulnerability",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "software-vulnerability",
            "targetLabel": "SoftwareVulnerability",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* SoftwareVulnerability",
            "description": "Process affectsProcess SoftwareVulnerability."
          },
          {
            "id": "process-access-information",
            "name": "access",
            "label": "access",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* Information",
            "description": "Process access Information."
          },
          {
            "id": "process-listens-on-port",
            "name": "listensOn",
            "label": "listensOn",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* Port",
            "description": "Process listensOn Port."
          }
        ],
        "incomingRelations": [
          {
            "id": "resource-relates-to-process",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "Resource 0..* — 0..* Process",
            "description": "Resource relatesTo Process."
          },
          {
            "id": "user-launches-process",
            "name": "launches",
            "label": "launches",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Process",
            "description": "User launches Process."
          },
          {
            "id": "application-instance-relates-to-process",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "ApplicationInstance 0..* — 0..* Process",
            "description": "ApplicationInstance relatesTo Process."
          }
        ],
        "relativePosition": {
          "x": 0.44586,
          "y": 0.648352
        },
        "drawioPosition": {
          "x": 800.0,
          "y": 1350.0
        },
        "drawioGeometry": {
          "x": 740.0,
          "y": 1330.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "information",
        "label": "Information",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Information is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-98",
        "name": "Information",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Data inventory and data catalogues",
          "DLP and classification tooling",
          "Document repositories and email systems",
          "Business owner interviews"
        ],
        "outgoingRelations": [
          {
            "id": "information-has-information-type-information-type",
            "name": "hasInformationType",
            "label": "hasInformationType",
            "source": "information",
            "sourceLabel": "Information",
            "sourceCardinality": "0..*",
            "target": "information-type",
            "targetLabel": "InformationType",
            "targetCardinality": "1",
            "cardinality": "Information 0..* — 1 InformationType",
            "description": "Information hasInformationType InformationType."
          }
        ],
        "incomingRelations": [
          {
            "id": "process-access-information",
            "name": "access",
            "label": "access",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* Information",
            "description": "Process access Information."
          },
          {
            "id": "user-access-information-information",
            "name": "accessInformation",
            "label": "accessInformation",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Information",
            "description": "User accessInformation Information."
          }
        ],
        "relativePosition": {
          "x": 0.55414,
          "y": 0.648352
        },
        "drawioPosition": {
          "x": 970.0,
          "y": 1350.0
        },
        "drawioGeometry": {
          "x": 910.0,
          "y": 1330.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "business-requirement",
        "label": "BusinessRequirement",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "BusinessRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-102",
        "name": "BusinessRequirement",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Business requirement catalogues",
          "Policies, standards, and governance documents",
          "Risk registers and compliance requirements",
          "Interviews with business stakeholders"
        ],
        "outgoingRelations": [
          {
            "id": "business-requirement-drives-security-requirement-asset-security-requirement",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "business-requirement",
            "sourceLabel": "BusinessRequirement",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "BusinessRequirement 0..* — 0..* AssetSecurityRequirement",
            "description": "BusinessRequirement drivesSecurityRequirement AssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "organization-has-business-requirement-business-requirement",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "0..*",
            "target": "business-requirement",
            "targetLabel": "BusinessRequirement",
            "targetCardinality": "1",
            "cardinality": "Organization 0..* — 1 BusinessRequirement",
            "description": "Organization hasBusinessRequirement BusinessRequirement."
          }
        ],
        "relativePosition": {
          "x": 0.458599,
          "y": 0.0
        },
        "drawioPosition": {
          "x": 820.0,
          "y": 760.0
        },
        "drawioGeometry": {
          "x": 760.0,
          "y": 740.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "user",
        "label": "User",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "User is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-105",
        "name": "User",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "IAM directory services such as Active Directory or Entra ID",
          "HR records and role assignments",
          "Privileged access management systems",
          "Application access-control lists"
        ],
        "outgoingRelations": [
          {
            "id": "user-has-access-to-node",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Node",
            "description": "User hasAccessTo Node."
          },
          {
            "id": "user-launches-process",
            "name": "launches",
            "label": "launches",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Process",
            "description": "User launches Process."
          },
          {
            "id": "user-access-information-information",
            "name": "accessInformation",
            "label": "accessInformation",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "User 0..* — 0..* Information",
            "description": "User accessInformation Information."
          },
          {
            "id": "user-has-user-type-user-type",
            "name": "hasUserType",
            "label": "hasUserType",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "user-type",
            "targetLabel": "UserType",
            "targetCardinality": "1",
            "cardinality": "User 0..* — 1 UserType",
            "description": "User hasUserType UserType."
          }
        ],
        "incomingRelations": [
          {
            "id": "human-vulnerability-affects-user-user",
            "name": "affectsUser",
            "label": "affectsUser",
            "source": "human-vulnerability",
            "sourceLabel": "HumanVulnerability",
            "sourceCardinality": "0..*",
            "target": "user",
            "targetLabel": "User",
            "targetCardinality": "0..*",
            "cardinality": "HumanVulnerability 0..* — 0..* User",
            "description": "HumanVulnerability affectsUser User."
          }
        ],
        "relativePosition": {
          "x": 0.636943,
          "y": 0.56044
        },
        "drawioPosition": {
          "x": 1100.0,
          "y": 1270.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 1250.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "application-instance",
        "label": "ApplicationInstance",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "ApplicationInstance is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-107",
        "name": "ApplicationInstance",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Application inventory and CMDB",
          "Deployment manifests and container orchestration metadata",
          "Cloud service inventory",
          "Endpoint or server software inventory"
        ],
        "outgoingRelations": [
          {
            "id": "application-instance-has-application-type-application-type",
            "name": "hasApplicationType",
            "label": "hasApplicationType",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "application-type",
            "targetLabel": "ApplicationType",
            "targetCardinality": "1",
            "cardinality": "ApplicationInstance 0..* — 1 ApplicationType",
            "description": "ApplicationInstance hasApplicationType ApplicationType."
          },
          {
            "id": "application-instance-relates-to-process",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "process",
            "targetLabel": "Process",
            "targetCardinality": "0..*",
            "cardinality": "ApplicationInstance 0..* — 0..* Process",
            "description": "ApplicationInstance relatesTo Process."
          }
        ],
        "incomingRelations": [],
        "relativePosition": {
          "x": 0.471338,
          "y": 0.747253
        },
        "drawioPosition": {
          "x": 840.0,
          "y": 1440.0
        },
        "drawioGeometry": {
          "x": 780.0,
          "y": 1420.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "attack-step-item",
        "label": "AttackStepItem",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-113",
        "name": "AttackStepItem",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Incident reports and kill-chain reconstruction",
          "CTI reports describing specific attack actions",
          "SIEM/EDR detections mapped to attack steps",
          "Forensic evidence and investigation notes"
        ],
        "outgoingRelations": [
          {
            "id": "attack-step-item-exploits-vulnerability",
            "name": "exploits",
            "label": "exploits",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* Vulnerability",
            "description": "AttackStepItem exploits Vulnerability."
          },
          {
            "id": "attack-step-item-implements-ttp",
            "name": "implements",
            "label": "implements",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "ttp",
            "targetLabel": "TTP",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* TTP",
            "description": "AttackStepItem implements TTP."
          },
          {
            "id": "attack-step-item-compromises-asset-security-requirement",
            "name": "compromises",
            "label": "compromises",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AssetSecurityRequirement",
            "description": "AttackStepItem compromises AssetSecurityRequirement."
          },
          {
            "id": "attack-step-item-employs-attack-tool-instance",
            "name": "employs",
            "label": "employs",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackToolInstance",
            "description": "AttackStepItem employs AttackToolInstance."
          },
          {
            "id": "attack-step-item-followed-by-attack-step-item",
            "name": "followedBy",
            "label": "followedBy",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-step-item",
            "targetLabel": "AttackStepItem",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackStepItem",
            "description": "AttackStepItem followedBy AttackStepItem."
          },
          {
            "id": "attack-step-item-refers-to-attack-step",
            "name": "refersTo",
            "label": "refersTo",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-step",
            "targetLabel": "AttackStep",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackStep",
            "description": "AttackStepItem refersTo AttackStep."
          },
          {
            "id": "attack-step-item-targets-resource-resource",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* Resource",
            "description": "AttackStepItem targetsResource Resource."
          }
        ],
        "incomingRelations": [
          {
            "id": "attack-step-item-followed-by-attack-step-item",
            "name": "followedBy",
            "label": "followedBy",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-step-item",
            "targetLabel": "AttackStepItem",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackStepItem",
            "description": "AttackStepItem followedBy AttackStepItem."
          }
        ],
        "relativePosition": {
          "x": 0.859873,
          "y": 0.362637
        },
        "drawioPosition": {
          "x": 1450.0,
          "y": 1090.0
        },
        "drawioGeometry": {
          "x": 1390.0,
          "y": 1070.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "attack-tool",
        "label": "AttackTool",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "AttackTool is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-117",
        "name": "AttackTool",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "CTI reports and malware/tool profiles",
          "MITRE ATT&CK software entries",
          "Malware repositories and sandbox reports",
          "Vendor and CERT advisories"
        ],
        "outgoingRelations": [
          {
            "id": "attack-tool-requires-attack-tool-configuration",
            "name": "requires",
            "label": "requires",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "0..*",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 0..* — 0..* AttackToolConfiguration",
            "description": "AttackTool requires AttackToolConfiguration."
          },
          {
            "id": "attack-tool-requires-expertise-expertise",
            "name": "requiresExpertise",
            "label": "requiresExpertise",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "0..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 0..* — 0..* Expertise",
            "description": "AttackTool requiresExpertise Expertise."
          }
        ],
        "incomingRelations": [
          {
            "id": "attack-tool-instance-instance-of-attack-tool",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool",
            "targetLabel": "AttackTool",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackTool",
            "description": "AttackToolInstance instanceOf AttackTool."
          }
        ],
        "relativePosition": {
          "x": 0.853185,
          "y": 0.802198
        },
        "drawioPosition": {
          "x": 1439.5,
          "y": 1490.0
        },
        "drawioGeometry": {
          "x": 1379.5,
          "y": 1470.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "attack-tool-configuration",
        "label": "AttackToolConfiguration",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "AttackToolConfiguration is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-118",
        "name": "AttackToolConfiguration",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Malware configuration extraction reports",
          "Tool documentation or public repositories",
          "Forensic analysis of command-line arguments and config files",
          "Incident response reports"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "attack-tool-instance-has-config-attack-tool-configuration",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "0..*",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 0..* — 0..* AttackToolConfiguration",
            "description": "AttackToolInstance hasConfig AttackToolConfiguration."
          },
          {
            "id": "attack-tool-requires-attack-tool-configuration",
            "name": "requires",
            "label": "requires",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "0..*",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 0..* — 0..* AttackToolConfiguration",
            "description": "AttackTool requires AttackToolConfiguration."
          }
        ],
        "relativePosition": {
          "x": 0.795541,
          "y": 0.901099
        },
        "drawioPosition": {
          "x": 1349.0,
          "y": 1580.0
        },
        "drawioGeometry": {
          "x": 1274.0,
          "y": 1562.5,
          "width": 150.0,
          "height": 35.0
        },
        "layoutWidth": 150.0,
        "layoutHeight": 40,
        "textMaxWidth": 138.0
      }
    },
    {
      "data": {
        "id": "asset",
        "label": "Asset",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Asset is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-123",
        "name": "Asset",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "CMDB and asset inventory",
          "Business impact analysis records",
          "Data and service ownership catalogues",
          "Enterprise architecture documentation"
        ],
        "outgoingRelations": [
          {
            "id": "asset-has-security-requirement-asset-security-requirement",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "asset",
            "sourceLabel": "Asset",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "Asset 0..* — 1 AssetSecurityRequirement",
            "description": "Asset hasSecurityRequirement AssetSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "resource-relates-to-asset",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "0..*",
            "target": "asset",
            "targetLabel": "Asset",
            "targetCardinality": "0..*",
            "cardinality": "Resource 0..* — 0..* Asset",
            "description": "Resource relatesTo Asset."
          }
        ],
        "relativePosition": {
          "x": 0.567516,
          "y": 0.263736
        },
        "drawioPosition": {
          "x": 991.0,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 931.0,
          "y": 980.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "asset-security-requirement",
        "label": "AssetSecurityRequirement",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-124",
        "name": "AssetSecurityRequirement",
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
            "id": "asset-security-requirement-implementation-of-security-requirement",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "asset-security-requirement",
            "sourceLabel": "AssetSecurityRequirement",
            "sourceCardinality": "0..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AssetSecurityRequirement 0..* — 0..* SecurityRequirement",
            "description": "AssetSecurityRequirement implementationOf SecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "ttp-impacts-asset-security-requirement",
            "name": "impacts",
            "label": "impacts",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "TTP 0..* — 0..* AssetSecurityRequirement",
            "description": "TTP impacts AssetSecurityRequirement."
          },
          {
            "id": "attack-step-item-compromises-asset-security-requirement",
            "name": "compromises",
            "label": "compromises",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AssetSecurityRequirement",
            "description": "AttackStepItem compromises AssetSecurityRequirement."
          },
          {
            "id": "business-requirement-drives-security-requirement-asset-security-requirement",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "business-requirement",
            "sourceLabel": "BusinessRequirement",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "BusinessRequirement 0..* — 0..* AssetSecurityRequirement",
            "description": "BusinessRequirement drivesSecurityRequirement AssetSecurityRequirement."
          },
          {
            "id": "asset-has-security-requirement-asset-security-requirement",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "asset",
            "sourceLabel": "Asset",
            "sourceCardinality": "0..*",
            "target": "asset-security-requirement",
            "targetLabel": "AssetSecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "Asset 0..* — 1 AssetSecurityRequirement",
            "description": "Asset hasSecurityRequirement AssetSecurityRequirement."
          }
        ],
        "relativePosition": {
          "x": 0.458599,
          "y": 0.263736
        },
        "drawioPosition": {
          "x": 820.0,
          "y": 1000.0
        },
        "drawioGeometry": {
          "x": 760.0,
          "y": 980.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "attack-step",
        "label": "AttackStep",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "AttackStep is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "a54gTwOUOqDvF5TlCa_3-0",
        "name": "AttackStep",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "MITRE ATT&CK techniques and procedures",
          "CAPEC attack patterns",
          "CTI reports and intrusion-set playbooks",
          "Red-team playbooks and threat emulation plans"
        ],
        "outgoingRelations": [
          {
            "id": "attack-step-violates-security-requirement",
            "name": "violates",
            "label": "violates",
            "source": "attack-step",
            "sourceLabel": "AttackStep",
            "sourceCardinality": "0..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AttackStep 0..* — 0..* SecurityRequirement",
            "description": "AttackStep violates SecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "attack-step-item-refers-to-attack-step",
            "name": "refersTo",
            "label": "refersTo",
            "source": "attack-step-item",
            "sourceLabel": "AttackStepItem",
            "sourceCardinality": "0..*",
            "target": "attack-step",
            "targetLabel": "AttackStep",
            "targetCardinality": "0..*",
            "cardinality": "AttackStepItem 0..* — 0..* AttackStep",
            "description": "AttackStepItem refersTo AttackStep."
          }
        ],
        "relativePosition": {
          "x": 0.738854,
          "y": 0.450549
        },
        "drawioPosition": {
          "x": 1260.0,
          "y": 1170.0
        },
        "drawioGeometry": {
          "x": 1200.0,
          "y": 1150.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "connection",
        "label": "Connection",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Connection is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "WFLJC8hL8nc4JAM74MDT-8",
        "name": "Connection",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Network topology maps",
          "Firewall rules and security-group policies",
          "Flow logs and NetFlow/IPFIX data",
          "Service dependency maps"
        ],
        "outgoingRelations": [
          {
            "id": "connection-has-destination-port-port",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "connection",
            "sourceLabel": "Connection",
            "sourceCardinality": "0..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Connection 0..* — 0..* Port",
            "description": "Connection hasDestinationPort Port."
          }
        ],
        "incomingRelations": [
          {
            "id": "node-is-destination-connection",
            "name": "isDestination",
            "label": "isDestination",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "0..*",
            "target": "connection",
            "targetLabel": "Connection",
            "targetCardinality": "0..*",
            "cardinality": "Node 0..* — 0..* Connection",
            "description": "Node isDestination Connection."
          }
        ],
        "relativePosition": {
          "x": 0.343949,
          "y": 0.78022
        },
        "drawioPosition": {
          "x": 640.0,
          "y": 1470.0
        },
        "drawioGeometry": {
          "x": 580.0,
          "y": 1450.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "adversary-type",
        "label": "AdversaryType",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "AdversaryType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "D0jO0kr4g-7j_zKJJSQx-0",
        "name": "AdversaryType",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat actor taxonomies",
          "CTI platform classification schemas",
          "Government and CERT threat reports",
          "Academic and industry threat models"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "adversary-has-adversary-type-adversary-type",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "adversary",
            "sourceLabel": "Adversary",
            "sourceCardinality": "0..*",
            "target": "adversary-type",
            "targetLabel": "AdversaryType",
            "targetCardinality": "1",
            "cardinality": "Adversary 0..* — 1 AdversaryType",
            "description": "Adversary hasAdversaryType AdversaryType."
          }
        ],
        "relativePosition": {
          "x": 1.0,
          "y": 0.274725
        },
        "drawioPosition": {
          "x": 1670.0,
          "y": 1010.0
        },
        "drawioGeometry": {
          "x": 1610.0,
          "y": 990.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "security-requirement",
        "label": "SecurityRequirement",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "SecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "D0jO0kr4g-7j_zKJJSQx-3",
        "name": "SecurityRequirement",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "organization",
        "submetamodelLabel": "Organization",
        "possibleSourcesOfInformation": [
          "Security policies and standards",
          "Control frameworks such as ISO 27001, NIST, CIS, or ENS/ENISA guidance",
          "Risk assessment methodology",
          "Compliance and audit requirements"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "asset-security-requirement-implementation-of-security-requirement",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "asset-security-requirement",
            "sourceLabel": "AssetSecurityRequirement",
            "sourceCardinality": "0..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AssetSecurityRequirement 0..* — 0..* SecurityRequirement",
            "description": "AssetSecurityRequirement implementationOf SecurityRequirement."
          },
          {
            "id": "attack-step-violates-security-requirement",
            "name": "violates",
            "label": "violates",
            "source": "attack-step",
            "sourceLabel": "AttackStep",
            "sourceCardinality": "0..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "0..*",
            "cardinality": "AttackStep 0..* — 0..* SecurityRequirement",
            "description": "AttackStep violates SecurityRequirement."
          }
        ],
        "relativePosition": {
          "x": 0.356688,
          "y": 0.153846
        },
        "drawioPosition": {
          "x": 660.0,
          "y": 900.0
        },
        "drawioGeometry": {
          "x": 600.0,
          "y": 880.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "user-type",
        "label": "UserType",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "UserType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "rdsXt6uEBotSDfQAMUaa-0",
        "name": "UserType",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "IAM role catalogues",
          "HR job family and role definitions",
          "Access-control models",
          "Privileged access management policy"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "user-has-user-type-user-type",
            "name": "hasUserType",
            "label": "hasUserType",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "0..*",
            "target": "user-type",
            "targetLabel": "UserType",
            "targetCardinality": "1",
            "cardinality": "User 0..* — 1 UserType",
            "description": "User hasUserType UserType."
          }
        ],
        "relativePosition": {
          "x": 0.636943,
          "y": 0.428571
        },
        "drawioPosition": {
          "x": 1100.0,
          "y": 1150.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 1130.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "software-vulnerability",
        "label": "SoftwareVulnerability",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "SoftwareVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "NVh1UeR0c02L9Xc4LGjI-0",
        "name": "SoftwareVulnerability",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "NVD/CVE and vendor advisories",
          "Software composition analysis tools",
          "Vulnerability scanner results",
          "Exploit databases and proof-of-concept reports"
        ],
        "outgoingRelations": [
          {
            "id": "software-vulnerability-relates-to-vulnerability",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "0..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "0..*",
            "cardinality": "SoftwareVulnerability 0..* — 0..* Vulnerability",
            "description": "SoftwareVulnerability relatesTo Vulnerability."
          }
        ],
        "incomingRelations": [
          {
            "id": "process-affects-process-software-vulnerability",
            "name": "affectsProcess",
            "label": "affectsProcess",
            "source": "process",
            "sourceLabel": "Process",
            "sourceCardinality": "0..*",
            "target": "software-vulnerability",
            "targetLabel": "SoftwareVulnerability",
            "targetCardinality": "0..*",
            "cardinality": "Process 0..* — 0..* SoftwareVulnerability",
            "description": "Process affectsProcess SoftwareVulnerability."
          }
        ],
        "relativePosition": {
          "x": 0.567516,
          "y": 0.868132
        },
        "drawioPosition": {
          "x": 991.0,
          "y": 1550.0
        },
        "drawioGeometry": {
          "x": 931.0,
          "y": 1530.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    },
    {
      "data": {
        "id": "expertise",
        "label": "Expertise",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "Expertise is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "-5rHft1h9aHdpQshA84F-2",
        "name": "Expertise",
        "informationClass": "a-posteriori",
        "informationClassLabel": "A posteriori",
        "submetamodel": "cyber-threat",
        "submetamodelLabel": "Cyber threat",
        "possibleSourcesOfInformation": [
          "Threat actor capability assessments",
          "CTI actor profiles",
          "Observed tradecraft in incident reports",
          "Malware sophistication and TTP analysis"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "threat-source-has-expertise-expertise",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "threat-source",
            "sourceLabel": "ThreatSource",
            "sourceCardinality": "0..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "0..*",
            "cardinality": "ThreatSource 0..* — 0..* Expertise",
            "description": "ThreatSource hasExpertise Expertise."
          },
          {
            "id": "attack-tool-requires-expertise-expertise",
            "name": "requiresExpertise",
            "label": "requiresExpertise",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "0..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 0..* — 0..* Expertise",
            "description": "AttackTool requiresExpertise Expertise."
          }
        ],
        "relativePosition": {
          "x": 1.0,
          "y": 0.087912
        },
        "drawioPosition": {
          "x": 1670.0,
          "y": 840.0
        },
        "drawioGeometry": {
          "x": 1610.0,
          "y": 820.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0
      }
    }
  ],
  "edges": [
    {
      "data": {
        "id": "organization-operates-in-sector",
        "label": "operatesIn",
        "kind": "relationship",
        "source": "organization",
        "target": "sector",
        "sourceLabel": "Organization",
        "targetLabel": "Sector",
        "description": "Organization operatesIn Sector.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-2",
        "name": "operatesIn",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Organization 0..* — 1 Sector"
      }
    },
    {
      "data": {
        "id": "organization-manages-infrastructure",
        "label": "manages",
        "kind": "relationship",
        "source": "organization",
        "target": "infrastructure",
        "sourceLabel": "Organization",
        "targetLabel": "Infrastructure",
        "description": "Organization manages Infrastructure.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-4",
        "name": "manages",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Organization 0..* — 0..* Infrastructure"
      }
    },
    {
      "data": {
        "id": "organization-based-in-home-country",
        "label": "basedIn",
        "kind": "relationship",
        "source": "organization",
        "target": "home-country",
        "sourceLabel": "Organization",
        "targetLabel": "HomeCountry",
        "description": "Organization basedIn HomeCountry.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-6",
        "name": "basedIn",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Organization 0..* — 1 HomeCountry"
      }
    },
    {
      "data": {
        "id": "infrastructure-made-by-node",
        "label": "madeBy",
        "kind": "relationship",
        "source": "infrastructure",
        "target": "node",
        "sourceLabel": "Infrastructure",
        "targetLabel": "Node",
        "description": "Infrastructure madeBy Node.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-8",
        "name": "madeBy",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Infrastructure 0..* — 0..* Node"
      }
    },
    {
      "data": {
        "id": "organization-has-business-requirement-business-requirement",
        "label": "hasBusinessRequirement",
        "kind": "relationship",
        "source": "organization",
        "target": "business-requirement",
        "sourceLabel": "Organization",
        "targetLabel": "BusinessRequirement",
        "description": "Organization hasBusinessRequirement BusinessRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-10",
        "name": "hasBusinessRequirement",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Organization 0..* — 1 BusinessRequirement"
      }
    },
    {
      "data": {
        "id": "node-has-node-type-node-type",
        "label": "hasNodeType",
        "kind": "relationship",
        "source": "node",
        "target": "node-type",
        "sourceLabel": "Node",
        "targetLabel": "NodeType",
        "description": "Node hasNodeType NodeType.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-18",
        "name": "hasNodeType",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Node 0..* — 1 NodeType"
      }
    },
    {
      "data": {
        "id": "node-hosts-resource-resource",
        "label": "hostsResource",
        "kind": "relationship",
        "source": "node",
        "target": "resource",
        "sourceLabel": "Node",
        "targetLabel": "Resource",
        "description": "Node hostsResource Resource.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-20",
        "name": "hostsResource",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Node 0..* — 0..* Resource"
      }
    },
    {
      "data": {
        "id": "node-exposes-port-port",
        "label": "exposesPort",
        "kind": "relationship",
        "source": "node",
        "target": "port",
        "sourceLabel": "Node",
        "targetLabel": "Port",
        "description": "Node exposesPort Port.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-22",
        "name": "exposesPort",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Node 0..* — 0..* Port"
      }
    },
    {
      "data": {
        "id": "node-is-destination-connection",
        "label": "isDestination",
        "kind": "relationship",
        "source": "node",
        "target": "connection",
        "sourceLabel": "Node",
        "targetLabel": "Connection",
        "description": "Node isDestination Connection.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-14",
        "name": "isDestination",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Node 0..* — 0..* Connection"
      }
    },
    {
      "data": {
        "id": "node-runsos-os",
        "label": "runsOS",
        "kind": "relationship",
        "source": "node",
        "target": "os",
        "sourceLabel": "Node",
        "targetLabel": "OS",
        "description": "Node runsOS OS.",
        "drawioId": "BASQ9MWghEwbMtnNXxMo-3",
        "name": "runsOS",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Node 0..* — 0..* OS"
      }
    },
    {
      "data": {
        "id": "process-affects-process-software-vulnerability",
        "label": "affectsProcess",
        "kind": "relationship",
        "source": "process",
        "target": "software-vulnerability",
        "sourceLabel": "Process",
        "targetLabel": "SoftwareVulnerability",
        "description": "Process affectsProcess SoftwareVulnerability.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-26",
        "name": "affectsProcess",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Process 0..* — 0..* SoftwareVulnerability"
      }
    },
    {
      "data": {
        "id": "application-instance-has-application-type-application-type",
        "label": "hasApplicationType",
        "kind": "relationship",
        "source": "application-instance",
        "target": "application-type",
        "sourceLabel": "ApplicationInstance",
        "targetLabel": "ApplicationType",
        "description": "ApplicationInstance hasApplicationType ApplicationType.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-28",
        "name": "hasApplicationType",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "ApplicationInstance 0..* — 1 ApplicationType"
      }
    },
    {
      "data": {
        "id": "threat-event-parts-of-campaign",
        "label": "partsOf",
        "kind": "relationship",
        "source": "threat-event",
        "target": "campaign",
        "sourceLabel": "ThreatEvent",
        "targetLabel": "Campaign",
        "description": "ThreatEvent partsOf Campaign.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-33",
        "name": "partsOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatEvent 0..* — 0..* Campaign"
      }
    },
    {
      "data": {
        "id": "threat-source-related-to-adversary",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "threat-source",
        "target": "adversary",
        "sourceLabel": "ThreatSource",
        "targetLabel": "Adversary",
        "description": "ThreatSource relatedTo Adversary.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-35",
        "name": "relatedTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatSource 0..* — 0..* Adversary"
      }
    },
    {
      "data": {
        "id": "threat-source-initiates-threat-event",
        "label": "initiates",
        "kind": "relationship",
        "source": "threat-source",
        "target": "threat-event",
        "sourceLabel": "ThreatSource",
        "targetLabel": "ThreatEvent",
        "description": "ThreatSource initiates ThreatEvent.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-37",
        "name": "initiates",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatSource 0..* — 0..* ThreatEvent"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-designed-for-os",
        "label": "designedFor",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "os",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "OS",
        "description": "AttackToolInstance designedFor OS.",
        "drawioId": "BASQ9MWghEwbMtnNXxMo-1",
        "name": "designedFor",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 0..* — 1 OS"
      }
    },
    {
      "data": {
        "id": "attack-step-item-exploits-vulnerability",
        "label": "exploits",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "vulnerability",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "Vulnerability",
        "description": "AttackStepItem exploits Vulnerability.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-39",
        "name": "exploits",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* Vulnerability"
      }
    },
    {
      "data": {
        "id": "threat-source-has-expertise-expertise",
        "label": "hasExpertise",
        "kind": "relationship",
        "source": "threat-source",
        "target": "expertise",
        "sourceLabel": "ThreatSource",
        "targetLabel": "Expertise",
        "description": "ThreatSource hasExpertise Expertise.",
        "drawioId": "-5rHft1h9aHdpQshA84F-3",
        "name": "hasExpertise",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatSource 0..* — 0..* Expertise"
      }
    },
    {
      "data": {
        "id": "attack-step-item-implements-ttp",
        "label": "implements",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "ttp",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "TTP",
        "description": "AttackStepItem implements TTP.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-42",
        "name": "implements",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* TTP"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-produces-indicator",
        "label": "produces",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "indicator",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "Indicator",
        "description": "AttackToolInstance produces Indicator.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-44",
        "name": "produces",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 0..* — 0..* Indicator"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-instance-of-attack-tool",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "attack-tool",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "AttackTool",
        "description": "AttackToolInstance instanceOf AttackTool.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-46",
        "name": "instanceOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 0..* — 0..* AttackTool"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-has-config-attack-tool-configuration",
        "label": "hasConfig",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "attack-tool-configuration",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "AttackToolConfiguration",
        "description": "AttackToolInstance hasConfig AttackToolConfiguration.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-48",
        "name": "hasConfig",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 0..* — 0..* AttackToolConfiguration"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-designed-for-os-2",
        "label": "designedFor",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "os",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "OS",
        "description": "AttackToolInstance designedFor OS.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-51",
        "name": "designedFor",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 0..* — 1 OS"
      }
    },
    {
      "data": {
        "id": "campaign-targets-sector-sector",
        "label": "targetsSector",
        "kind": "relationship",
        "source": "campaign",
        "target": "sector",
        "sourceLabel": "Campaign",
        "targetLabel": "Sector",
        "description": "Campaign targetsSector Sector.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-53",
        "name": "targetsSector",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Campaign 0..* — 0..* Sector"
      }
    },
    {
      "data": {
        "id": "campaign-focus-on-home-country",
        "label": "focusOn",
        "kind": "relationship",
        "source": "campaign",
        "target": "home-country",
        "sourceLabel": "Campaign",
        "targetLabel": "HomeCountry",
        "description": "Campaign focusOn HomeCountry.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-55",
        "name": "focusOn",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Campaign 0..* — 0..* HomeCountry"
      }
    },
    {
      "data": {
        "id": "indicator-associated-to-attack-tool-instance",
        "label": "associatedTo",
        "kind": "relationship",
        "source": "indicator",
        "target": "attack-tool-instance",
        "sourceLabel": "Indicator",
        "targetLabel": "AttackToolInstance",
        "description": "Indicator associatedTo AttackToolInstance.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-58",
        "name": "associatedTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Indicator 0..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "ttp-impacts-asset-security-requirement",
        "label": "impacts",
        "kind": "relationship",
        "source": "ttp",
        "target": "asset-security-requirement",
        "sourceLabel": "TTP",
        "targetLabel": "AssetSecurityRequirement",
        "description": "TTP impacts AssetSecurityRequirement.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-7",
        "name": "impacts",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "TTP 0..* — 0..* AssetSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "ttp-exploits-vulnerability-vulnerability",
        "label": "exploitsVulnerability",
        "kind": "relationship",
        "source": "ttp",
        "target": "vulnerability",
        "sourceLabel": "TTP",
        "targetLabel": "Vulnerability",
        "description": "TTP exploitsVulnerability Vulnerability.",
        "drawioId": "pY2hJQMgUQGyS6tkFW3p-0",
        "name": "exploitsVulnerability",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "TTP 0..* — 0..* Vulnerability"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-deploys-attack-tool-instance",
        "label": "deploys",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "attack-tool-instance",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "AttackToolInstance",
        "description": "AttackToolInstance deploys AttackToolInstance.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-62",
        "name": "deploys",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 0..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "software-vulnerability-relates-to-vulnerability",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "software-vulnerability",
        "target": "vulnerability",
        "sourceLabel": "SoftwareVulnerability",
        "targetLabel": "Vulnerability",
        "description": "SoftwareVulnerability relatesTo Vulnerability.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-64",
        "name": "relatesTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "SoftwareVulnerability 0..* — 0..* Vulnerability"
      }
    },
    {
      "data": {
        "id": "attack-step-item-compromises-asset-security-requirement",
        "label": "compromises",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "asset-security-requirement",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "AssetSecurityRequirement",
        "description": "AttackStepItem compromises AssetSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-72",
        "name": "compromises",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* AssetSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "home-country-parts-of-international-body",
        "label": "partsOf",
        "kind": "relationship",
        "source": "home-country",
        "target": "international-body",
        "sourceLabel": "HomeCountry",
        "targetLabel": "International Body",
        "description": "HomeCountry partsOf International Body.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-75",
        "name": "partsOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HomeCountry 0..* — 0..* International Body"
      }
    },
    {
      "data": {
        "id": "information-has-information-type-information-type",
        "label": "hasInformationType",
        "kind": "relationship",
        "source": "information",
        "target": "information-type",
        "sourceLabel": "Information",
        "targetLabel": "InformationType",
        "description": "Information hasInformationType InformationType.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-78",
        "name": "hasInformationType",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Information 0..* — 1 InformationType"
      }
    },
    {
      "data": {
        "id": "resource-relates-to-process",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "resource",
        "target": "process",
        "sourceLabel": "Resource",
        "targetLabel": "Process",
        "description": "Resource relatesTo Process.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-80",
        "name": "relatesTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Resource 0..* — 0..* Process"
      }
    },
    {
      "data": {
        "id": "adversary-has-adversary-type-adversary-type",
        "label": "hasAdversaryType",
        "kind": "relationship",
        "source": "adversary",
        "target": "adversary-type",
        "sourceLabel": "Adversary",
        "targetLabel": "AdversaryType",
        "description": "Adversary hasAdversaryType AdversaryType.",
        "drawioId": "D0jO0kr4g-7j_zKJJSQx-1",
        "name": "hasAdversaryType",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Adversary 0..* — 1 AdversaryType"
      }
    },
    {
      "data": {
        "id": "threat-source-alias-threat-source",
        "label": "alias",
        "kind": "relationship",
        "source": "threat-source",
        "target": "threat-source",
        "sourceLabel": "ThreatSource",
        "targetLabel": "ThreatSource",
        "description": "ThreatSource alias ThreatSource.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-85",
        "name": "alias",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatSource 0..* — 0..* ThreatSource"
      }
    },
    {
      "data": {
        "id": "config-vulnerability-affects-port-port",
        "label": "affectsPort",
        "kind": "relationship",
        "source": "config-vulnerability",
        "target": "port",
        "sourceLabel": "ConfigVulnerability",
        "targetLabel": "Port",
        "description": "ConfigVulnerability affectsPort Port.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-92",
        "name": "affectsPort",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ConfigVulnerability 0..* — 0..* Port"
      }
    },
    {
      "data": {
        "id": "human-vulnerability-affects-user-user",
        "label": "affectsUser",
        "kind": "relationship",
        "source": "human-vulnerability",
        "target": "user",
        "sourceLabel": "HumanVulnerability",
        "targetLabel": "User",
        "description": "HumanVulnerability affectsUser User.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-94",
        "name": "affectsUser",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "HumanVulnerability 0..* — 0..* User"
      }
    },
    {
      "data": {
        "id": "process-access-information",
        "label": "access",
        "kind": "relationship",
        "source": "process",
        "target": "information",
        "sourceLabel": "Process",
        "targetLabel": "Information",
        "description": "Process access Information.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-3",
        "name": "access",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Process 0..* — 0..* Information"
      }
    },
    {
      "data": {
        "id": "process-listens-on-port",
        "label": "listensOn",
        "kind": "relationship",
        "source": "process",
        "target": "port",
        "sourceLabel": "Process",
        "targetLabel": "Port",
        "description": "Process listensOn Port.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-16",
        "name": "listensOn",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Process 0..* — 0..* Port"
      }
    },
    {
      "data": {
        "id": "business-requirement-drives-security-requirement-asset-security-requirement",
        "label": "drivesSecurityRequirement",
        "kind": "relationship",
        "source": "business-requirement",
        "target": "asset-security-requirement",
        "sourceLabel": "BusinessRequirement",
        "targetLabel": "AssetSecurityRequirement",
        "description": "BusinessRequirement drivesSecurityRequirement AssetSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-100",
        "name": "drivesSecurityRequirement",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "BusinessRequirement 0..* — 0..* AssetSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "user-has-access-to-node",
        "label": "hasAccessTo",
        "kind": "relationship",
        "source": "user",
        "target": "node",
        "sourceLabel": "User",
        "targetLabel": "Node",
        "description": "User hasAccessTo Node.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-103",
        "name": "hasAccessTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "User 0..* — 0..* Node"
      }
    },
    {
      "data": {
        "id": "user-launches-process",
        "label": "launches",
        "kind": "relationship",
        "source": "user",
        "target": "process",
        "sourceLabel": "User",
        "targetLabel": "Process",
        "description": "User launches Process.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-5",
        "name": "launches",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "User 0..* — 0..* Process"
      }
    },
    {
      "data": {
        "id": "user-access-information-information",
        "label": "accessInformation",
        "kind": "relationship",
        "source": "user",
        "target": "information",
        "sourceLabel": "User",
        "targetLabel": "Information",
        "description": "User accessInformation Information.",
        "drawioId": "GkmxRLZZG02JlUlJrdg4-0",
        "name": "accessInformation",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "User 0..* — 0..* Information"
      }
    },
    {
      "data": {
        "id": "user-has-user-type-user-type",
        "label": "hasUserType",
        "kind": "relationship",
        "source": "user",
        "target": "user-type",
        "sourceLabel": "User",
        "targetLabel": "UserType",
        "description": "User hasUserType UserType.",
        "drawioId": "rdsXt6uEBotSDfQAMUaa-1",
        "name": "hasUserType",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "User 0..* — 1 UserType"
      }
    },
    {
      "data": {
        "id": "application-instance-relates-to-process",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "application-instance",
        "target": "process",
        "sourceLabel": "ApplicationInstance",
        "targetLabel": "Process",
        "description": "ApplicationInstance relatesTo Process.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-106",
        "name": "relatesTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "ApplicationInstance 0..* — 0..* Process"
      }
    },
    {
      "data": {
        "id": "attack-step-item-employs-attack-tool-instance",
        "label": "employs",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "attack-tool-instance",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "AttackToolInstance",
        "description": "AttackStepItem employs AttackToolInstance.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-109",
        "name": "employs",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "attack-step-item-followed-by-attack-step-item",
        "label": "followedBy",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "attack-step-item",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "AttackStepItem",
        "description": "AttackStepItem followedBy AttackStepItem.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-111",
        "name": "followedBy",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* AttackStepItem"
      }
    },
    {
      "data": {
        "id": "attack-step-item-refers-to-attack-step",
        "label": "refersTo",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "attack-step",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "AttackStep",
        "description": "AttackStepItem refersTo AttackStep.",
        "drawioId": "a54gTwOUOqDvF5TlCa_3-1",
        "name": "refersTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* AttackStep"
      }
    },
    {
      "data": {
        "id": "attack-tool-requires-attack-tool-configuration",
        "label": "requires",
        "kind": "relationship",
        "source": "attack-tool",
        "target": "attack-tool-configuration",
        "sourceLabel": "AttackTool",
        "targetLabel": "AttackToolConfiguration",
        "description": "AttackTool requires AttackToolConfiguration.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-115",
        "name": "requires",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackTool 0..* — 0..* AttackToolConfiguration"
      }
    },
    {
      "data": {
        "id": "attack-tool-requires-expertise-expertise",
        "label": "requiresExpertise",
        "kind": "relationship",
        "source": "attack-tool",
        "target": "expertise",
        "sourceLabel": "AttackTool",
        "targetLabel": "Expertise",
        "description": "AttackTool requiresExpertise Expertise.",
        "drawioId": "-5rHft1h9aHdpQshA84F-5",
        "name": "requiresExpertise",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackTool 0..* — 0..* Expertise"
      }
    },
    {
      "data": {
        "id": "asset-has-security-requirement-asset-security-requirement",
        "label": "hasSecurityRequirement",
        "kind": "relationship",
        "source": "asset",
        "target": "asset-security-requirement",
        "sourceLabel": "Asset",
        "targetLabel": "AssetSecurityRequirement",
        "description": "Asset hasSecurityRequirement AssetSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-121",
        "name": "hasSecurityRequirement",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "Asset 0..* — 1 AssetSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "asset-security-requirement-implementation-of-security-requirement",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "asset-security-requirement",
        "target": "security-requirement",
        "sourceLabel": "AssetSecurityRequirement",
        "targetLabel": "SecurityRequirement",
        "description": "AssetSecurityRequirement implementationOf SecurityRequirement.",
        "drawioId": "D0jO0kr4g-7j_zKJJSQx-4",
        "name": "implementationOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AssetSecurityRequirement 0..* — 0..* SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "resource-relates-to-asset",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "resource",
        "target": "asset",
        "sourceLabel": "Resource",
        "targetLabel": "Asset",
        "description": "Resource relatesTo Asset.",
        "drawioId": "AFeN5JUjJK33a1JbX35I-1",
        "name": "relatesTo",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Resource 0..* — 0..* Asset"
      }
    },
    {
      "data": {
        "id": "attack-step-item-targets-resource-resource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "attack-step-item",
        "target": "resource",
        "sourceLabel": "AttackStepItem",
        "targetLabel": "Resource",
        "description": "AttackStepItem targetsResource Resource.",
        "drawioId": "AFeN5JUjJK33a1JbX35I-16",
        "name": "targetsResource",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStepItem 0..* — 0..* Resource"
      }
    },
    {
      "data": {
        "id": "attack-step-violates-security-requirement",
        "label": "violates",
        "kind": "relationship",
        "source": "attack-step",
        "target": "security-requirement",
        "sourceLabel": "AttackStep",
        "targetLabel": "SecurityRequirement",
        "description": "AttackStep violates SecurityRequirement.",
        "drawioId": "xTMQG-FE3YYiqCm4yd_D-0",
        "name": "violates",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "AttackStep 0..* — 0..* SecurityRequirement"
      }
    },
    {
      "data": {
        "id": "connection-has-destination-port-port",
        "label": "hasDestinationPort",
        "kind": "relationship",
        "source": "connection",
        "target": "port",
        "sourceLabel": "Connection",
        "targetLabel": "Port",
        "description": "Connection hasDestinationPort Port.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-9",
        "name": "hasDestinationPort",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Connection 0..* — 0..* Port"
      }
    }
  ]
};
