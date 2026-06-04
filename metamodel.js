const metamodel = {
  "metadata": {
    "title": "Feasibility-Oriented Metamodel",
    "source": "metamodel_v2-Leonardo's touch.drawio.xml",
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
        "description": "Organizational context, business requirements, sectors, countries, and security requirements."
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
      "sourceMinX": 40.0,
      "sourceMinY": 740.0,
      "sourceWidth": 1734.0,
      "sourceHeight": 950.0,
      "spacing": 1.18,
      "marginX": 160,
      "marginY": 120,
      "description": "Coordinates extracted from the Leonardo's touch Draw.io diagram."
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
            "sourceCardinality": "1",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
            "description": "Organization operatesIn Sector."
          },
          {
            "id": "organization-manages-infrastructure",
            "name": "manages",
            "label": "manages",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "1",
            "target": "infrastructure",
            "targetLabel": "Infrastructure",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "Organization manages Infrastructure."
          },
          {
            "id": "organization-based-in-home-country",
            "name": "basedIn",
            "label": "basedIn",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "1",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "",
            "cardinality": "Organization 1 —  HomeCountry",
            "description": "Organization basedIn HomeCountry."
          },
          {
            "id": "organization-has-business-requirement-business-requirement",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "1",
            "target": "business-requirement",
            "targetLabel": "BusinessRequirement",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "Organization hasBusinessRequirement BusinessRequirement."
          }
        ],
        "incomingRelations": [],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.121107,
          "y": 0.031579
        }
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
            "sourceCardinality": "1",
            "target": "sector",
            "targetLabel": "Sector",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Sector",
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.201845,
          "y": 0.421053
        }
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
            "sourceCardinality": "1..*",
            "target": "node-type",
            "targetLabel": "NodeType",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "Node hasNodeType NodeType."
          },
          {
            "id": "node-hosts-resource-resource",
            "name": "hostsResource",
            "label": "hostsResource",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "Node hostsResource Resource."
          },
          {
            "id": "node-exposes-port-port",
            "name": "exposesPort",
            "label": "exposesPort",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Port",
            "description": "Node exposesPort Port."
          },
          {
            "id": "node-is-destination-connection",
            "name": "isDestination",
            "label": "isDestination",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "connection",
            "targetLabel": "Connection",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "Node isDestination Connection."
          },
          {
            "id": "node-runs-os-osinstance",
            "name": "runsOS",
            "label": "runsOS",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "osinstance",
            "targetLabel": "OSInstance",
            "targetCardinality": "1",
            "cardinality": "Node 1 — 1 OSInstance",
            "description": "Node runsOS OSInstance."
          },
          {
            "id": "node-runs-app-application-instance",
            "name": "runsApp",
            "label": "runsApp",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "application-instance",
            "targetLabel": "ApplicationInstance",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* ApplicationInstance",
            "description": "Node runsApp ApplicationInstance."
          },
          {
            "id": "node-runs-node",
            "name": "runs",
            "label": "runs",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Node",
            "description": "Node runs Node."
          }
        ],
        "incomingRelations": [
          {
            "id": "infrastructure-made-by-node",
            "name": "madeBy",
            "label": "madeBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "1",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Infrastructure madeBy Node."
          },
          {
            "id": "user-has-access-to-node",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "",
            "cardinality": "",
            "description": "User hasAccessTo Node."
          },
          {
            "id": "node-runs-node",
            "name": "runs",
            "label": "runs",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Node",
            "description": "Node runs Node."
          },
          {
            "id": "attack-tool-instance-deployed-to-node",
            "name": "deployedTo",
            "label": "deployedTo",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AttackToolInstance deployedTo Node."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.299885,
          "y": 0.642105
        }
      }
    },
    {
      "data": {
        "id": "osinstance",
        "label": "OSInstance",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "OS is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-25",
        "name": "OSInstance",
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
        "outgoingRelations": [
          {
            "id": "osinstance-instance-of-os",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "osinstance",
            "sourceLabel": "OSInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "OSInstance 0..* — 1 OS",
            "description": "OSInstance instanceOf OS."
          }
        ],
        "incomingRelations": [
          {
            "id": "node-runs-os-osinstance",
            "name": "runsOS",
            "label": "runsOS",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "osinstance",
            "targetLabel": "OSInstance",
            "targetCardinality": "1",
            "cardinality": "Node 1 — 1 OSInstance",
            "description": "Node runsOS OSInstance."
          },
          {
            "id": "attack-tool-instance-designed-for-osinstance",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1..*",
            "target": "osinstance",
            "targetLabel": "OSInstance",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 OSInstance",
            "description": "AttackToolInstance designedFor OSInstance."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.461361,
          "y": 0.789474
        }
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
            "sourceCardinality": "1",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Port",
            "description": "Node exposesPort Port."
          },
          {
            "id": "code-listens-on-port",
            "name": "listensOn",
            "label": "listensOn",
            "source": "code",
            "sourceLabel": "Code",
            "sourceCardinality": "1",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Code 1 — 0..* Port",
            "description": "Code listensOn Port."
          },
          {
            "id": "connection-has-destination-port-port",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "connection",
            "sourceLabel": "Connection",
            "sourceCardinality": "1..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "1",
            "cardinality": "Connection 1..* — 1 Port",
            "description": "Connection hasDestinationPort Port."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.299885,
          "y": 0.978947
        }
      }
    },
    {
      "data": {
        "id": "threat-actor",
        "label": "ThreatActor",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "ThreatSource is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-41",
        "name": "ThreatActor",
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
            "id": "threat-actor-related-to-adversary",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1..*",
            "target": "adversary",
            "targetLabel": "Adversary",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "ThreatActor relatedTo Adversary."
          },
          {
            "id": "threat-actor-initiates-threat",
            "name": "initiates",
            "label": "initiates",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1",
            "target": "threat",
            "targetLabel": "Threat",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "ThreatActor initiates Threat."
          },
          {
            "id": "threat-actor-has-expertise-expertise",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1..* — 1 Expertise",
            "description": "ThreatActor hasExpertise Expertise."
          },
          {
            "id": "threat-actor-alias-threat-actor",
            "name": "alias",
            "label": "alias",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "0..*",
            "target": "threat-actor",
            "targetLabel": "ThreatActor",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "ThreatActor alias ThreatActor."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-actor-alias-threat-actor",
            "name": "alias",
            "label": "alias",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "0..*",
            "target": "threat-actor",
            "targetLabel": "ThreatActor",
            "targetCardinality": "",
            "cardinality": "ThreatActor 0..* —  ThreatActor",
            "description": "ThreatActor alias ThreatActor."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.813149,
          "y": 0.168421
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "outgoingRelations": [
          {
            "id": "attack-tool-instance-produces-indicator",
            "name": "produces",
            "label": "produces",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1",
            "target": "indicator",
            "targetLabel": "Indicator",
            "targetCardinality": "1..*",
            "cardinality": "AttackToolInstance 1 — 1..* Indicator",
            "description": "AttackToolInstance produces Indicator."
          },
          {
            "id": "attack-tool-instance-instance-of-attack-tool",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1..*",
            "target": "attack-tool",
            "targetLabel": "AttackTool",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "AttackToolInstance instanceOf AttackTool."
          },
          {
            "id": "attack-tool-instance-has-config-attack-tool-configuration",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration",
            "description": "AttackToolInstance hasConfig AttackToolConfiguration."
          },
          {
            "id": "attack-tool-instance-designed-for-osinstance",
            "name": "designedFor",
            "label": "designedFor",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1..*",
            "target": "osinstance",
            "targetLabel": "OSInstance",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 OSInstance",
            "description": "AttackToolInstance designedFor OSInstance."
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
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "AttackToolInstance deploys AttackToolInstance."
          },
          {
            "id": "attack-tool-instance-deployed-to-node",
            "name": "deployedTo",
            "label": "deployedTo",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AttackToolInstance deployedTo Node."
          }
        ],
        "incomingRelations": [
          {
            "id": "indicator-associated-to-attack-tool-instance",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "indicator",
            "sourceLabel": "Indicator",
            "sourceCardinality": "1..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "1",
            "cardinality": "Indicator 1..* — 1 AttackToolInstance",
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
            "targetCardinality": "",
            "cardinality": "AttackToolInstance 0..* —  AttackToolInstance",
            "description": "AttackToolInstance deploys AttackToolInstance."
          },
          {
            "id": "threat-step-employs-attack-tool-instance",
            "name": "employs",
            "label": "employs",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "ThreatStep employs AttackToolInstance."
          }
        ],
        "drawioPosition": {
          "x": 1349.0,
          "y": 1250.0
        },
        "drawioGeometry": {
          "x": 1289.0,
          "y": 1230.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.754902,
          "y": 0.536842
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
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
          },
          {
            "id": "campaign-targets-international-body-international-body",
            "name": "targetsInternationalBody",
            "label": "targetsInternationalBody",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* International Body",
            "description": "Campaign targetsInternationalBody International Body."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-parts-of-campaign",
            "name": "partsOf",
            "label": "partsOf",
            "source": "threat",
            "sourceLabel": "Threat",
            "sourceCardinality": "1..*",
            "target": "campaign",
            "targetLabel": "Campaign",
            "targetCardinality": "1",
            "cardinality": "Threat 1..* — 1 Campaign",
            "description": "Threat partsOf Campaign."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.893858,
          "y": 0.368421
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "outgoingRelations": [
          {
            "id": "indicator-associated-to-attack-tool-instance",
            "name": "associatedTo",
            "label": "associatedTo",
            "source": "indicator",
            "sourceLabel": "Indicator",
            "sourceCardinality": "1..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "1",
            "cardinality": "Indicator 1..* — 1 AttackToolInstance",
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
            "sourceCardinality": "1",
            "target": "indicator",
            "targetLabel": "Indicator",
            "targetCardinality": "1..*",
            "cardinality": "AttackToolInstance 1 — 1..* Indicator",
            "description": "AttackToolInstance produces Indicator."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.737889,
          "y": 0.663158
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [
          {
            "id": "ttp-exploits-vulnerability-vulnerability",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "1..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "TTP exploitsVulnerability Vulnerability."
          },
          {
            "id": "ttp-violates-security-requirement",
            "name": "violates",
            "label": "violates",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "1..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "TTP violates SecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-step-implements-ttp",
            "name": "implements",
            "label": "implements",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "ttp",
            "targetLabel": "TTP",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "ThreatStep implements TTP."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.813149,
          "y": 0.463158
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "infrastructure-made-by-node",
            "name": "madeBy",
            "label": "madeBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "1",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* Node",
            "description": "Infrastructure madeBy Node."
          },
          {
            "id": "infrastructure-used-by-user",
            "name": "usedBy",
            "label": "usedBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "1",
            "target": "user",
            "targetLabel": "User",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Infrastructure usedBy User."
          }
        ],
        "incomingRelations": [
          {
            "id": "organization-manages-infrastructure",
            "name": "manages",
            "label": "manages",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "1",
            "target": "infrastructure",
            "targetLabel": "Infrastructure",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* Infrastructure",
            "description": "Organization manages Infrastructure."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.299885,
          "y": 0.421053
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "node-has-node-type-node-type",
            "name": "hasNodeType",
            "label": "hasNodeType",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1..*",
            "target": "node-type",
            "targetLabel": "NodeType",
            "targetCardinality": "1",
            "cardinality": "Node 1..* — 1 NodeType",
            "description": "Node hasNodeType NodeType."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.242215,
          "y": 0.789474
        }
      }
    },
    {
      "data": {
        "id": "application",
        "label": "Application",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "ApplicationType is an entity in the feasibility-oriented metamodel. It is classified as generic a priori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-70",
        "name": "Application",
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
            "id": "application-instance-instance-of-application",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "application",
            "targetLabel": "Application",
            "targetCardinality": "1",
            "cardinality": "ApplicationInstance 0..* — 1 Application",
            "description": "ApplicationInstance instanceOf Application."
          },
          {
            "id": "software-vulnerability-affects-application",
            "name": "affects",
            "label": "affects",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "0..*",
            "target": "application",
            "targetLabel": "Application",
            "targetCardinality": "1",
            "cardinality": "SoftwareVulnerability 0..* — 1 Application",
            "description": "SoftwareVulnerability affects Application."
          }
        ],
        "drawioPosition": {
          "x": 970.0,
          "y": 1670.0
        },
        "drawioGeometry": {
          "x": 910.0,
          "y": 1650.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.536332,
          "y": 0.978947
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "outgoingRelations": [
          {
            "id": "config-vulnerability-affects-code",
            "name": "affects",
            "label": "affects",
            "source": "config-vulnerability",
            "sourceLabel": "ConfigVulnerability",
            "sourceCardinality": "0..*",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "1..*",
            "cardinality": "ConfigVulnerability 0..* — 1..* Code",
            "description": "ConfigVulnerability affects Code."
          }
        ],
        "incomingRelations": [],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.594002,
          "y": 0.778947
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "threat-step-exploits-vulnerability",
            "name": "exploits",
            "label": "exploits",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "ThreatStep exploits Vulnerability."
          },
          {
            "id": "ttp-exploits-vulnerability-vulnerability",
            "name": "exploitsVulnerability",
            "label": "exploitsVulnerability",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "1..*",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 Vulnerability",
            "description": "TTP exploitsVulnerability Vulnerability."
          },
          {
            "id": "software-vulnerability-relates-to-vulnerability",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "SoftwareVulnerability relatesTo Vulnerability."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.657439,
          "y": 0.273684
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [
          {
            "id": "home-country-parts-of-international-body",
            "name": "partsOf",
            "label": "partsOf",
            "source": "home-country",
            "sourceLabel": "HomeCountry",
            "sourceCardinality": "1..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
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
            "sourceCardinality": "1",
            "target": "home-country",
            "targetLabel": "HomeCountry",
            "targetCardinality": "",
            "cardinality": "Organization 1 —  HomeCountry",
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.034602,
          "y": 0.410526
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "resource-relates-to-code",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Resource relatesTo Code."
          },
          {
            "id": "resource-relates-to-asset",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "",
            "target": "asset",
            "targetLabel": "Asset",
            "targetCardinality": "",
            "cardinality": "",
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
            "sourceCardinality": "1",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "1..*",
            "cardinality": "Node 1 — 1..* Resource",
            "description": "Node hostsResource Resource."
          },
          {
            "id": "threat-step-targets-resource-resource",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "ThreatStep targetsResource Resource."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.536332,
          "y": 0.557895
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "information-has-information-type-information-type",
            "name": "hasInformationType",
            "label": "hasInformationType",
            "source": "information",
            "sourceLabel": "Information",
            "sourceCardinality": "1..*",
            "target": "information-type",
            "targetLabel": "InformationType",
            "targetCardinality": "1",
            "cardinality": "Information 1..* — 1 InformationType",
            "description": "Information hasInformationType InformationType."
          }
        ],
        "drawioPosition": {
          "x": 1111.0,
          "y": 1410.0
        },
        "drawioGeometry": {
          "x": 1051.0,
          "y": 1390.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.617647,
          "y": 0.705263
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "outgoingRelations": [
          {
            "id": "adversary-has-adversary-type-adversary-type",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "adversary",
            "sourceLabel": "Adversary",
            "sourceCardinality": "1..*",
            "target": "adversary-type",
            "targetLabel": "AdversaryType",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "Adversary hasAdversaryType AdversaryType."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-actor-related-to-adversary",
            "name": "relatedTo",
            "label": "relatedTo",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1..*",
            "target": "adversary",
            "targetLabel": "Adversary",
            "targetCardinality": "0..*",
            "cardinality": "ThreatActor 1..* — 0..* Adversary",
            "description": "ThreatActor relatedTo Adversary."
          }
        ],
        "drawioPosition": {
          "x": 1714.0,
          "y": 900.0
        },
        "drawioGeometry": {
          "x": 1654.0,
          "y": 880.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.965398,
          "y": 0.168421
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "campaign-targets-international-body-international-body",
            "name": "targetsInternationalBody",
            "label": "targetsInternationalBody",
            "source": "campaign",
            "sourceLabel": "Campaign",
            "sourceCardinality": "0..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "0..*",
            "cardinality": "Campaign 0..* — 0..* International Body",
            "description": "Campaign targetsInternationalBody International Body."
          },
          {
            "id": "home-country-parts-of-international-body",
            "name": "partsOf",
            "label": "partsOf",
            "source": "home-country",
            "sourceLabel": "HomeCountry",
            "sourceCardinality": "1..*",
            "target": "international-body",
            "targetLabel": "International Body",
            "targetCardinality": "1..*",
            "cardinality": "HomeCountry 1..* — 1..* International Body",
            "description": "HomeCountry partsOf International Body."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.126874,
          "y": 0.557895
        }
      }
    },
    {
      "data": {
        "id": "threat",
        "label": "Threat",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "ThreatEvent is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-89",
        "name": "Threat",
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
            "id": "threat-parts-of-campaign",
            "name": "partsOf",
            "label": "partsOf",
            "source": "threat",
            "sourceLabel": "Threat",
            "sourceCardinality": "1..*",
            "target": "campaign",
            "targetLabel": "Campaign",
            "targetCardinality": "1",
            "cardinality": "Threat 1..* — 1 Campaign",
            "description": "Threat partsOf Campaign."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-actor-initiates-threat",
            "name": "initiates",
            "label": "initiates",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1",
            "target": "threat",
            "targetLabel": "Threat",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1 — 1 Threat",
            "description": "ThreatActor initiates Threat."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.813149,
          "y": 0.273684
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.669262,
          "y": 0.778947
        }
      }
    },
    {
      "data": {
        "id": "code",
        "label": "Code",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "Process is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-97",
        "name": "Code",
        "informationClass": "instance-specific",
        "informationClassLabel": "Instance specific",
        "submetamodel": "infrastructure",
        "submetamodelLabel": "Infrastructure",
        "possibleSourcesOfInformation": [
          "Source-code repositories",
          "Deployment artifacts and package manifests",
          "Application inventory",
          "Software bill of materials"
        ],
        "outgoingRelations": [
          {
            "id": "code-access-information",
            "name": "access",
            "label": "access",
            "source": "code",
            "sourceLabel": "Code",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "Code 0..* — 0..* Information",
            "description": "Code access Information."
          },
          {
            "id": "code-listens-on-port",
            "name": "listensOn",
            "label": "listensOn",
            "source": "code",
            "sourceLabel": "Code",
            "sourceCardinality": "1",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "0..*",
            "cardinality": "Code 1 — 0..* Port",
            "description": "Code listensOn Port."
          }
        ],
        "incomingRelations": [
          {
            "id": "config-vulnerability-affects-code",
            "name": "affects",
            "label": "affects",
            "source": "config-vulnerability",
            "sourceLabel": "ConfigVulnerability",
            "sourceCardinality": "0..*",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "1..*",
            "cardinality": "ConfigVulnerability 0..* — 1..* Code",
            "description": "ConfigVulnerability affects Code."
          },
          {
            "id": "resource-relates-to-code",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Resource relatesTo Code."
          },
          {
            "id": "user-launches-code",
            "name": "launches",
            "label": "launches",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "0..*",
            "cardinality": "User 1 — 0..* Code",
            "description": "User launches Code."
          },
          {
            "id": "application-instance-relates-to-code",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "",
            "cardinality": "",
            "description": "ApplicationInstance relatesTo Code."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.438293,
          "y": 0.642105
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "information-has-information-type-information-type",
            "name": "hasInformationType",
            "label": "hasInformationType",
            "source": "information",
            "sourceLabel": "Information",
            "sourceCardinality": "1..*",
            "target": "information-type",
            "targetLabel": "InformationType",
            "targetCardinality": "1",
            "cardinality": "Information 1..* — 1 InformationType",
            "description": "Information hasInformationType InformationType."
          }
        ],
        "incomingRelations": [
          {
            "id": "code-access-information",
            "name": "access",
            "label": "access",
            "source": "code",
            "sourceLabel": "Code",
            "sourceCardinality": "0..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "Code 0..* — 0..* Information",
            "description": "Code access Information."
          },
          {
            "id": "user-access-information-information",
            "name": "accessInformation",
            "label": "accessInformation",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "User 1..* — 0..* Information",
            "description": "User accessInformation Information."
          }
        ],
        "drawioPosition": {
          "x": 970.0,
          "y": 1360.0
        },
        "drawioGeometry": {
          "x": 910.0,
          "y": 1340.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.536332,
          "y": 0.652632
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "business-requirement-drives-security-requirement-asset-security-requirement",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "business-requirement",
            "sourceLabel": "BusinessRequirement",
            "sourceCardinality": "1..*",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BusinessRequirement drivesSecurityRequirement Asset\nSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "organization-has-business-requirement-business-requirement",
            "name": "hasBusinessRequirement",
            "label": "hasBusinessRequirement",
            "source": "organization",
            "sourceLabel": "Organization",
            "sourceCardinality": "1",
            "target": "business-requirement",
            "targetLabel": "BusinessRequirement",
            "targetCardinality": "1..*",
            "cardinality": "Organization 1 — 1..* BusinessRequirement",
            "description": "Organization hasBusinessRequirement BusinessRequirement."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.449827,
          "y": 0.021053
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "user-has-access-to-node",
            "name": "hasAccessTo",
            "label": "hasAccessTo",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "",
            "target": "node",
            "targetLabel": "Node",
            "targetCardinality": "",
            "cardinality": "",
            "description": "User hasAccessTo Node."
          },
          {
            "id": "user-launches-code",
            "name": "launches",
            "label": "launches",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "0..*",
            "cardinality": "User 1 — 0..* Code",
            "description": "User launches Code."
          },
          {
            "id": "user-access-information-information",
            "name": "accessInformation",
            "label": "accessInformation",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1..*",
            "target": "information",
            "targetLabel": "Information",
            "targetCardinality": "0..*",
            "cardinality": "User 1..* — 0..* Information",
            "description": "User accessInformation Information."
          },
          {
            "id": "user-has-user-type-user-type",
            "name": "hasUserType",
            "label": "hasUserType",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1..*",
            "target": "user-type",
            "targetLabel": "UserType",
            "targetCardinality": "1",
            "cardinality": "User 1..* — 1 UserType",
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
          },
          {
            "id": "infrastructure-used-by-user",
            "name": "usedBy",
            "label": "usedBy",
            "source": "infrastructure",
            "sourceLabel": "Infrastructure",
            "sourceCardinality": "1",
            "target": "user",
            "targetLabel": "User",
            "targetCardinality": "1..*",
            "cardinality": "Infrastructure 1 — 1..* User",
            "description": "Infrastructure usedBy User."
          }
        ],
        "drawioPosition": {
          "x": 1100.0,
          "y": 1260.0
        },
        "drawioGeometry": {
          "x": 1040.0,
          "y": 1240.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.611303,
          "y": 0.547368
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "application-instance-instance-of-application",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "0..*",
            "target": "application",
            "targetLabel": "Application",
            "targetCardinality": "1",
            "cardinality": "ApplicationInstance 0..* — 1 Application",
            "description": "ApplicationInstance instanceOf Application."
          },
          {
            "id": "application-instance-relates-to-code",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "application-instance",
            "sourceLabel": "ApplicationInstance",
            "sourceCardinality": "",
            "target": "code",
            "targetLabel": "Code",
            "targetCardinality": "",
            "cardinality": "",
            "description": "ApplicationInstance relatesTo Code."
          }
        ],
        "incomingRelations": [
          {
            "id": "node-runs-app-application-instance",
            "name": "runsApp",
            "label": "runsApp",
            "source": "node",
            "sourceLabel": "Node",
            "sourceCardinality": "1",
            "target": "application-instance",
            "targetLabel": "ApplicationInstance",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* ApplicationInstance",
            "description": "Node runsApp ApplicationInstance."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.461361,
          "y": 0.736842
        }
      }
    },
    {
      "data": {
        "id": "threat-step",
        "label": "ThreatStep",
        "kind": "entity",
        "nodeClass": "a-posteriori",
        "nodeClassLabel": "A posteriori",
        "description": "AttackStepItem is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-113",
        "name": "ThreatStep",
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
            "id": "threat-step-exploits-vulnerability",
            "name": "exploits",
            "label": "exploits",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "ThreatStep exploits Vulnerability."
          },
          {
            "id": "threat-step-implements-ttp",
            "name": "implements",
            "label": "implements",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "ttp",
            "targetLabel": "TTP",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 TTP",
            "description": "ThreatStep implements TTP."
          },
          {
            "id": "threat-step-compromises-asset-security-requirement",
            "name": "compromises",
            "label": "compromises",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "ThreatStep compromises Asset\nSecurityRequirement."
          },
          {
            "id": "threat-step-employs-attack-tool-instance",
            "name": "employs",
            "label": "employs",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "attack-tool-instance",
            "targetLabel": "AttackToolInstance",
            "targetCardinality": "0..*",
            "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance",
            "description": "ThreatStep employs AttackToolInstance."
          },
          {
            "id": "threat-step-followed-by-threat-step",
            "name": "followedBy",
            "label": "followedBy",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "0..*",
            "target": "threat-step",
            "targetLabel": "ThreatStep",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "ThreatStep followedBy ThreatStep."
          },
          {
            "id": "threat-step-targets-resource-resource",
            "name": "targetsResource",
            "label": "targetsResource",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "resource",
            "targetLabel": "Resource",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Resource",
            "description": "ThreatStep targetsResource Resource."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-step-followed-by-threat-step",
            "name": "followedBy",
            "label": "followedBy",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "0..*",
            "target": "threat-step",
            "targetLabel": "ThreatStep",
            "targetCardinality": "",
            "cardinality": "ThreatStep 0..* —  ThreatStep",
            "description": "ThreatStep followedBy ThreatStep."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.813149,
          "y": 0.368421
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [
          {
            "id": "attack-tool-requires-attack-tool-configuration",
            "name": "requires",
            "label": "requires",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "1",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration",
            "description": "AttackTool requires AttackToolConfiguration."
          },
          {
            "id": "attack-tool-requires-expertise-expertise",
            "name": "requiresExpertise",
            "label": "requiresExpertise",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "",
            "cardinality": "",
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
            "sourceCardinality": "1..*",
            "target": "attack-tool",
            "targetLabel": "AttackTool",
            "targetCardinality": "1",
            "cardinality": "AttackToolInstance 1..* — 1 AttackTool",
            "description": "AttackToolInstance instanceOf AttackTool."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.807093,
          "y": 0.789474
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "attack-tool-instance-has-config-attack-tool-configuration",
            "name": "hasConfig",
            "label": "hasConfig",
            "source": "attack-tool-instance",
            "sourceLabel": "AttackToolInstance",
            "sourceCardinality": "1",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration",
            "description": "AttackToolInstance hasConfig AttackToolConfiguration."
          },
          {
            "id": "attack-tool-requires-attack-tool-configuration",
            "name": "requires",
            "label": "requires",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "1",
            "target": "attack-tool-configuration",
            "targetLabel": "AttackToolConfiguration",
            "targetCardinality": "0..*",
            "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration",
            "description": "AttackTool requires AttackToolConfiguration."
          }
        ],
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
        "layoutHeight": 40.0,
        "textMaxWidth": 138.0,
        "relativePosition": {
          "x": 0.754902,
          "y": 0.884211
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "asset-has-security-requirement-asset-security-requirement",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "asset",
            "sourceLabel": "Asset",
            "sourceCardinality": "1",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Asset hasSecurityRequirement Asset\nSecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "resource-relates-to-asset",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "resource",
            "sourceLabel": "Resource",
            "sourceCardinality": "",
            "target": "asset",
            "targetLabel": "Asset",
            "targetCardinality": "",
            "cardinality": "",
            "description": "Resource relatesTo Asset."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.548443,
          "y": 0.273684
        }
      }
    },
    {
      "data": {
        "id": "asset-security-requirement",
        "label": "Asset\nSecurityRequirement",
        "kind": "entity",
        "nodeClass": "instance-specific",
        "nodeClassLabel": "Instance specific",
        "description": "AssetSecurityRequirement is an entity in the feasibility-oriented metamodel. It is classified as instance specific information.",
        "attributes": [],
        "drawioId": "uKdIYOyGbmZlVRN5kjks-124",
        "name": "Asset\nSecurityRequirement",
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
            "sourceLabel": "Asset\nSecurityRequirement",
            "sourceCardinality": "1..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Asset\nSecurityRequirement implementationOf SecurityRequirement."
          }
        ],
        "incomingRelations": [
          {
            "id": "threat-step-compromises-asset-security-requirement",
            "name": "compromises",
            "label": "compromises",
            "source": "threat-step",
            "sourceLabel": "ThreatStep",
            "sourceCardinality": "1..*",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement",
            "description": "ThreatStep compromises Asset\nSecurityRequirement."
          },
          {
            "id": "business-requirement-drives-security-requirement-asset-security-requirement",
            "name": "drivesSecurityRequirement",
            "label": "drivesSecurityRequirement",
            "source": "business-requirement",
            "sourceLabel": "BusinessRequirement",
            "sourceCardinality": "1..*",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1..*",
            "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement",
            "description": "BusinessRequirement drivesSecurityRequirement Asset\nSecurityRequirement."
          },
          {
            "id": "asset-has-security-requirement-asset-security-requirement",
            "name": "hasSecurityRequirement",
            "label": "hasSecurityRequirement",
            "source": "asset",
            "sourceLabel": "Asset",
            "sourceCardinality": "1",
            "target": "asset-security-requirement",
            "targetLabel": "Asset\nSecurityRequirement",
            "targetCardinality": "1..*",
            "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement",
            "description": "Asset hasSecurityRequirement Asset\nSecurityRequirement."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.449827,
          "y": 0.273684
        }
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
          "Organizational documentation, policies, and business requirement catalogues",
          "Asset inventory, CMDB, IAM directory, network inventory, and architecture diagrams",
          "Configuration management, vulnerability scanning, EDR/SIEM inventory, and cloud-management exports",
          "Interviews, questionnaires, and manual assessment of the target organization"
        ],
        "outgoingRelations": [
          {
            "id": "connection-has-destination-port-port",
            "name": "hasDestinationPort",
            "label": "hasDestinationPort",
            "source": "connection",
            "sourceLabel": "Connection",
            "sourceCardinality": "1..*",
            "target": "port",
            "targetLabel": "Port",
            "targetCardinality": "1",
            "cardinality": "Connection 1..* — 1 Port",
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
            "sourceCardinality": "1",
            "target": "connection",
            "targetLabel": "Connection",
            "targetCardinality": "0..*",
            "cardinality": "Node 1 — 0..* Connection",
            "description": "Node isDestination Connection."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.346021,
          "y": 0.768421
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "adversary-has-adversary-type-adversary-type",
            "name": "hasAdversaryType",
            "label": "hasAdversaryType",
            "source": "adversary",
            "sourceLabel": "Adversary",
            "sourceCardinality": "1..*",
            "target": "adversary-type",
            "targetLabel": "AdversaryType",
            "targetCardinality": "1",
            "cardinality": "Adversary 1..* — 1 AdversaryType",
            "description": "Adversary hasAdversaryType AdversaryType."
          }
        ],
        "drawioPosition": {
          "x": 1714.0,
          "y": 1010.0
        },
        "drawioGeometry": {
          "x": 1654.0,
          "y": 990.0,
          "width": 120.0,
          "height": 40.0
        },
        "layoutWidth": 120.0,
        "layoutHeight": 40.0,
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.965398,
          "y": 0.284211
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "asset-security-requirement-implementation-of-security-requirement",
            "name": "implementationOf",
            "label": "implementationOf",
            "source": "asset-security-requirement",
            "sourceLabel": "Asset\nSecurityRequirement",
            "sourceCardinality": "1..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement",
            "description": "Asset\nSecurityRequirement implementationOf SecurityRequirement."
          },
          {
            "id": "ttp-violates-security-requirement",
            "name": "violates",
            "label": "violates",
            "source": "ttp",
            "sourceLabel": "TTP",
            "sourceCardinality": "1..*",
            "target": "security-requirement",
            "targetLabel": "SecurityRequirement",
            "targetCardinality": "1",
            "cardinality": "TTP 1..* — 1 SecurityRequirement",
            "description": "TTP violates SecurityRequirement."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.357555,
          "y": 0.168421
        }
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
          "Cyber Threat Intelligence reports and knowledge bases",
          "MITRE ATT&CK, CAPEC, CWE, CVE/NVD, and vendor advisories",
          "Public standards, taxonomies, catalogues, and domain ontologies",
          "Sector-level or technology-level documentation independent of a specific organization"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "user-has-user-type-user-type",
            "name": "hasUserType",
            "label": "hasUserType",
            "source": "user",
            "sourceLabel": "User",
            "sourceCardinality": "1..*",
            "target": "user-type",
            "targetLabel": "UserType",
            "targetCardinality": "1",
            "cardinality": "User 1..* — 1 UserType",
            "description": "User hasUserType UserType."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.611303,
          "y": 0.431579
        }
      }
    },
    {
      "data": {
        "id": "software-vulnerability",
        "label": "SoftwareVulnerability",
        "kind": "entity",
        "nodeClass": "generic-a-priori",
        "nodeClassLabel": "Generic a priori",
        "description": "SoftwareVulnerability is an entity in the feasibility-oriented metamodel. It is classified as a posteriori information.",
        "attributes": [],
        "drawioId": "NVh1UeR0c02L9Xc4LGjI-0",
        "name": "SoftwareVulnerability",
        "informationClass": "generic-a-priori",
        "informationClassLabel": "Generic a priori",
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
            "id": "software-vulnerability-relates-to-vulnerability",
            "name": "relatesTo",
            "label": "relatesTo",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "",
            "target": "vulnerability",
            "targetLabel": "Vulnerability",
            "targetCardinality": "",
            "cardinality": "",
            "description": "SoftwareVulnerability relatesTo Vulnerability."
          },
          {
            "id": "software-vulnerability-affects-application",
            "name": "affects",
            "label": "affects",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "0..*",
            "target": "application",
            "targetLabel": "Application",
            "targetCardinality": "1",
            "cardinality": "SoftwareVulnerability 0..* — 1 Application",
            "description": "SoftwareVulnerability affects Application."
          },
          {
            "id": "software-vulnerability-affects-os",
            "name": "affects",
            "label": "affects",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "1..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "SoftwareVulnerability 1..* — 1 OS",
            "description": "SoftwareVulnerability affects OS."
          }
        ],
        "incomingRelations": [],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.548443,
          "y": 0.852632
        }
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
          "Cyber Threat Intelligence reports",
          "MITRE ATT&CK and related threat knowledge bases",
          "Incident response reports",
          "SIEM, EDR, network, and forensic telemetry"
        ],
        "outgoingRelations": [],
        "incomingRelations": [
          {
            "id": "threat-actor-has-expertise-expertise",
            "name": "hasExpertise",
            "label": "hasExpertise",
            "source": "threat-actor",
            "sourceLabel": "ThreatActor",
            "sourceCardinality": "1..*",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "1",
            "cardinality": "ThreatActor 1..* — 1 Expertise",
            "description": "ThreatActor hasExpertise Expertise."
          },
          {
            "id": "attack-tool-requires-expertise-expertise",
            "name": "requiresExpertise",
            "label": "requiresExpertise",
            "source": "attack-tool",
            "sourceLabel": "AttackTool",
            "sourceCardinality": "",
            "target": "expertise",
            "targetLabel": "Expertise",
            "targetCardinality": "",
            "cardinality": "",
            "description": "AttackTool requiresExpertise Expertise."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.940023,
          "y": 0.105263
        }
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
        "drawioId": "c7kL2Rsf185yzwPImgeT-57",
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
            "id": "osinstance-instance-of-os",
            "name": "instanceOf",
            "label": "instanceOf",
            "source": "osinstance",
            "sourceLabel": "OSInstance",
            "sourceCardinality": "0..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "OSInstance 0..* — 1 OS",
            "description": "OSInstance instanceOf OS."
          },
          {
            "id": "software-vulnerability-affects-os",
            "name": "affects",
            "label": "affects",
            "source": "software-vulnerability",
            "sourceLabel": "SoftwareVulnerability",
            "sourceCardinality": "1..*",
            "target": "os",
            "targetLabel": "OS",
            "targetCardinality": "1",
            "cardinality": "SoftwareVulnerability 1..* — 1 OS",
            "description": "SoftwareVulnerability affects OS."
          }
        ],
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
        "textMaxWidth": 108.0,
        "relativePosition": {
          "x": 0.44406,
          "y": 0.936842
        }
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Sector"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* Infrastructure"
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
        "sourceCardinality": "1",
        "targetCardinality": "",
        "cardinality": "Organization 1 —  HomeCountry"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* Node"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Organization 1 — 1..* BusinessRequirement"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Node 1..* — 1 NodeType"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Resource"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Port"
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
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "Node 1 — 0..* Connection"
      }
    },
    {
      "data": {
        "id": "node-runs-os-osinstance",
        "label": "runsOS",
        "kind": "relationship",
        "source": "node",
        "target": "osinstance",
        "sourceLabel": "Node",
        "targetLabel": "OSInstance",
        "description": "Node runsOS OSInstance.",
        "drawioId": "BASQ9MWghEwbMtnNXxMo-3",
        "name": "runsOS",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "Node 1 — 1 OSInstance"
      }
    },
    {
      "data": {
        "id": "node-runs-app-application-instance",
        "label": "runsApp",
        "kind": "relationship",
        "source": "node",
        "target": "application-instance",
        "sourceLabel": "Node",
        "targetLabel": "ApplicationInstance",
        "description": "Node runsApp ApplicationInstance.",
        "drawioId": "O_TDg8Gssq8FO45yOkle-2",
        "name": "runsApp",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "Node 1 — 0..* ApplicationInstance"
      }
    },
    {
      "data": {
        "id": "osinstance-instance-of-os",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "osinstance",
        "target": "os",
        "sourceLabel": "OSInstance",
        "targetLabel": "OS",
        "description": "OSInstance instanceOf OS.",
        "drawioId": "c7kL2Rsf185yzwPImgeT-62",
        "name": "instanceOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "OSInstance 0..* — 1 OS"
      }
    },
    {
      "data": {
        "id": "application-instance-instance-of-application",
        "label": "instanceOf",
        "kind": "relationship",
        "source": "application-instance",
        "target": "application",
        "sourceLabel": "ApplicationInstance",
        "targetLabel": "Application",
        "description": "ApplicationInstance instanceOf Application.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-28",
        "name": "instanceOf",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "ApplicationInstance 0..* — 1 Application"
      }
    },
    {
      "data": {
        "id": "threat-parts-of-campaign",
        "label": "partsOf",
        "kind": "relationship",
        "source": "threat",
        "target": "campaign",
        "sourceLabel": "Threat",
        "targetLabel": "Campaign",
        "description": "Threat partsOf Campaign.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-33",
        "name": "partsOf",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Threat 1..* — 1 Campaign"
      }
    },
    {
      "data": {
        "id": "threat-actor-related-to-adversary",
        "label": "relatedTo",
        "kind": "relationship",
        "source": "threat-actor",
        "target": "adversary",
        "sourceLabel": "ThreatActor",
        "targetLabel": "Adversary",
        "description": "ThreatActor relatedTo Adversary.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-35",
        "name": "relatedTo",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatActor 1..* — 0..* Adversary"
      }
    },
    {
      "data": {
        "id": "threat-actor-initiates-threat",
        "label": "initiates",
        "kind": "relationship",
        "source": "threat-actor",
        "target": "threat",
        "sourceLabel": "ThreatActor",
        "targetLabel": "Threat",
        "description": "ThreatActor initiates Threat.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-37",
        "name": "initiates",
        "sourceCardinality": "1",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1 — 1 Threat"
      }
    },
    {
      "data": {
        "id": "threat-step-exploits-vulnerability",
        "label": "exploits",
        "kind": "relationship",
        "source": "threat-step",
        "target": "vulnerability",
        "sourceLabel": "ThreatStep",
        "targetLabel": "Vulnerability",
        "description": "ThreatStep exploits Vulnerability.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-39",
        "name": "exploits",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "threat-actor-has-expertise-expertise",
        "label": "hasExpertise",
        "kind": "relationship",
        "source": "threat-actor",
        "target": "expertise",
        "sourceLabel": "ThreatActor",
        "targetLabel": "Expertise",
        "description": "ThreatActor hasExpertise Expertise.",
        "drawioId": "-5rHft1h9aHdpQshA84F-3",
        "name": "hasExpertise",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatActor 1..* — 1 Expertise"
      }
    },
    {
      "data": {
        "id": "threat-step-implements-ttp",
        "label": "implements",
        "kind": "relationship",
        "source": "threat-step",
        "target": "ttp",
        "sourceLabel": "ThreatStep",
        "targetLabel": "TTP",
        "description": "ThreatStep implements TTP.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-42",
        "name": "implements",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 TTP"
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
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "AttackToolInstance 1 — 1..* Indicator"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 AttackTool"
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
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "AttackToolInstance 1 — 0..* AttackToolConfiguration"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-designed-for-osinstance",
        "label": "designedFor",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "osinstance",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "OSInstance",
        "description": "AttackToolInstance designedFor OSInstance.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-51",
        "name": "designedFor",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "AttackToolInstance 1..* — 1 OSInstance"
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
        "id": "campaign-targets-international-body-international-body",
        "label": "targetsInternationalBody",
        "kind": "relationship",
        "source": "campaign",
        "target": "international-body",
        "sourceLabel": "Campaign",
        "targetLabel": "International Body",
        "description": "Campaign targetsInternationalBody International Body.",
        "drawioId": "0UovC9M0b2mUkjZTJ50l-2",
        "name": "targetsInternationalBody",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Campaign 0..* — 0..* International Body"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Indicator 1..* — 1 AttackToolInstance"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 Vulnerability"
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
        "targetCardinality": "",
        "cardinality": "AttackToolInstance 0..* —  AttackToolInstance"
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
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "config-vulnerability-affects-code",
        "label": "affects",
        "kind": "relationship",
        "source": "config-vulnerability",
        "target": "code",
        "sourceLabel": "ConfigVulnerability",
        "targetLabel": "Code",
        "description": "ConfigVulnerability affects Code.",
        "drawioId": "O_TDg8Gssq8FO45yOkle-0",
        "name": "affects",
        "sourceCardinality": "0..*",
        "targetCardinality": "1..*",
        "cardinality": "ConfigVulnerability 0..* — 1..* Code"
      }
    },
    {
      "data": {
        "id": "threat-step-compromises-asset-security-requirement",
        "label": "compromises",
        "kind": "relationship",
        "source": "threat-step",
        "target": "asset-security-requirement",
        "sourceLabel": "ThreatStep",
        "targetLabel": "Asset\nSecurityRequirement",
        "description": "ThreatStep compromises Asset\nSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-72",
        "name": "compromises",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Asset\nSecurityRequirement"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "HomeCountry 1..* — 1..* International Body"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Information 1..* — 1 InformationType"
      }
    },
    {
      "data": {
        "id": "resource-relates-to-code",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "resource",
        "target": "code",
        "sourceLabel": "Resource",
        "targetLabel": "Code",
        "description": "Resource relatesTo Code.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-80",
        "name": "relatesTo",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Adversary 1..* — 1 AdversaryType"
      }
    },
    {
      "data": {
        "id": "threat-actor-alias-threat-actor",
        "label": "alias",
        "kind": "relationship",
        "source": "threat-actor",
        "target": "threat-actor",
        "sourceLabel": "ThreatActor",
        "targetLabel": "ThreatActor",
        "description": "ThreatActor alias ThreatActor.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-85",
        "name": "alias",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatActor 0..* —  ThreatActor"
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
        "id": "code-access-information",
        "label": "access",
        "kind": "relationship",
        "source": "code",
        "target": "information",
        "sourceLabel": "Code",
        "targetLabel": "Information",
        "description": "Code access Information.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-3",
        "name": "access",
        "sourceCardinality": "0..*",
        "targetCardinality": "0..*",
        "cardinality": "Code 0..* — 0..* Information"
      }
    },
    {
      "data": {
        "id": "code-listens-on-port",
        "label": "listensOn",
        "kind": "relationship",
        "source": "code",
        "target": "port",
        "sourceLabel": "Code",
        "targetLabel": "Port",
        "description": "Code listensOn Port.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-16",
        "name": "listensOn",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "Code 1 — 0..* Port"
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
        "targetLabel": "Asset\nSecurityRequirement",
        "description": "BusinessRequirement drivesSecurityRequirement Asset\nSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-100",
        "name": "drivesSecurityRequirement",
        "sourceCardinality": "1..*",
        "targetCardinality": "1..*",
        "cardinality": "BusinessRequirement 1..* — 1..* Asset\nSecurityRequirement"
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
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "user-launches-code",
        "label": "launches",
        "kind": "relationship",
        "source": "user",
        "target": "code",
        "sourceLabel": "User",
        "targetLabel": "Code",
        "description": "User launches Code.",
        "drawioId": "WFLJC8hL8nc4JAM74MDT-5",
        "name": "launches",
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "User 1 — 0..* Code"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "User 1..* — 0..* Information"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "User 1..* — 1 UserType"
      }
    },
    {
      "data": {
        "id": "application-instance-relates-to-code",
        "label": "relatesTo",
        "kind": "relationship",
        "source": "application-instance",
        "target": "code",
        "sourceLabel": "ApplicationInstance",
        "targetLabel": "Code",
        "description": "ApplicationInstance relatesTo Code.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-106",
        "name": "relatesTo",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "threat-step-employs-attack-tool-instance",
        "label": "employs",
        "kind": "relationship",
        "source": "threat-step",
        "target": "attack-tool-instance",
        "sourceLabel": "ThreatStep",
        "targetLabel": "AttackToolInstance",
        "description": "ThreatStep employs AttackToolInstance.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-109",
        "name": "employs",
        "sourceCardinality": "1..*",
        "targetCardinality": "0..*",
        "cardinality": "ThreatStep 1..* — 0..* AttackToolInstance"
      }
    },
    {
      "data": {
        "id": "threat-step-followed-by-threat-step",
        "label": "followedBy",
        "kind": "relationship",
        "source": "threat-step",
        "target": "threat-step",
        "sourceLabel": "ThreatStep",
        "targetLabel": "ThreatStep",
        "description": "ThreatStep followedBy ThreatStep.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-111",
        "name": "followedBy",
        "sourceCardinality": "0..*",
        "targetCardinality": "",
        "cardinality": "ThreatStep 0..* —  ThreatStep"
      }
    },
    {
      "data": {
        "id": "infrastructure-used-by-user",
        "label": "usedBy",
        "kind": "relationship",
        "source": "infrastructure",
        "target": "user",
        "sourceLabel": "Infrastructure",
        "targetLabel": "User",
        "description": "Infrastructure usedBy User.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-114",
        "name": "usedBy",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Infrastructure 1 — 1..* User"
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
        "sourceCardinality": "1",
        "targetCardinality": "0..*",
        "cardinality": "AttackTool 1 — 0..* AttackToolConfiguration"
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
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
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
        "targetLabel": "Asset\nSecurityRequirement",
        "description": "Asset hasSecurityRequirement Asset\nSecurityRequirement.",
        "drawioId": "uKdIYOyGbmZlVRN5kjks-121",
        "name": "hasSecurityRequirement",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Asset 1 — 1..* Asset\nSecurityRequirement"
      }
    },
    {
      "data": {
        "id": "asset-security-requirement-implementation-of-security-requirement",
        "label": "implementationOf",
        "kind": "relationship",
        "source": "asset-security-requirement",
        "target": "security-requirement",
        "sourceLabel": "Asset\nSecurityRequirement",
        "targetLabel": "SecurityRequirement",
        "description": "Asset\nSecurityRequirement implementationOf SecurityRequirement.",
        "drawioId": "D0jO0kr4g-7j_zKJJSQx-4",
        "name": "implementationOf",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Asset\nSecurityRequirement 1..* — 1 SecurityRequirement"
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
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    },
    {
      "data": {
        "id": "threat-step-targets-resource-resource",
        "label": "targetsResource",
        "kind": "relationship",
        "source": "threat-step",
        "target": "resource",
        "sourceLabel": "ThreatStep",
        "targetLabel": "Resource",
        "description": "ThreatStep targetsResource Resource.",
        "drawioId": "AFeN5JUjJK33a1JbX35I-16",
        "name": "targetsResource",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "ThreatStep 1..* — 1 Resource"
      }
    },
    {
      "data": {
        "id": "ttp-violates-security-requirement",
        "label": "violates",
        "kind": "relationship",
        "source": "ttp",
        "target": "security-requirement",
        "sourceLabel": "TTP",
        "targetLabel": "SecurityRequirement",
        "description": "TTP violates SecurityRequirement.",
        "drawioId": "xTMQG-FE3YYiqCm4yd_D-0",
        "name": "violates",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "TTP 1..* — 1 SecurityRequirement"
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
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "Connection 1..* — 1 Port"
      }
    },
    {
      "data": {
        "id": "software-vulnerability-affects-application",
        "label": "affects",
        "kind": "relationship",
        "source": "software-vulnerability",
        "target": "application",
        "sourceLabel": "SoftwareVulnerability",
        "targetLabel": "Application",
        "description": "SoftwareVulnerability affects Application.",
        "drawioId": "c7kL2Rsf185yzwPImgeT-53",
        "name": "affects",
        "sourceCardinality": "0..*",
        "targetCardinality": "1",
        "cardinality": "SoftwareVulnerability 0..* — 1 Application"
      }
    },
    {
      "data": {
        "id": "software-vulnerability-affects-os",
        "label": "affects",
        "kind": "relationship",
        "source": "software-vulnerability",
        "target": "os",
        "sourceLabel": "SoftwareVulnerability",
        "targetLabel": "OS",
        "description": "SoftwareVulnerability affects OS.",
        "drawioId": "c7kL2Rsf185yzwPImgeT-58",
        "name": "affects",
        "sourceCardinality": "1..*",
        "targetCardinality": "1",
        "cardinality": "SoftwareVulnerability 1..* — 1 OS"
      }
    },
    {
      "data": {
        "id": "node-runs-node",
        "label": "runs",
        "kind": "relationship",
        "source": "node",
        "target": "node",
        "sourceLabel": "Node",
        "targetLabel": "Node",
        "description": "Node runs Node.",
        "drawioId": "O_TDg8Gssq8FO45yOkle-8",
        "name": "runs",
        "sourceCardinality": "1",
        "targetCardinality": "1..*",
        "cardinality": "Node 1 — 1..* Node"
      }
    },
    {
      "data": {
        "id": "attack-tool-instance-deployed-to-node",
        "label": "deployedTo",
        "kind": "relationship",
        "source": "attack-tool-instance",
        "target": "node",
        "sourceLabel": "AttackToolInstance",
        "targetLabel": "Node",
        "description": "AttackToolInstance deployedTo Node.",
        "drawioId": "0UovC9M0b2mUkjZTJ50l-0",
        "name": "deployedTo",
        "sourceCardinality": "",
        "targetCardinality": "",
        "cardinality": ""
      }
    }
  ]
};
