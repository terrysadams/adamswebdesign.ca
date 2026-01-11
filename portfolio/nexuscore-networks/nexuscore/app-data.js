// NexusCore Networks - Device Data
// app-data.js

var devices = [
  {"ip":"10.11.1.154","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Vault Sector 5.4","hardware":"PMP100 2x","software":"","bandwidth":"20 MHz","mac":"0A003E52672A","frequency":"5580","color":201},
  {"ip":"10.11.1.21","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Vault Sector 900","hardware":"PMP450i","software":"","bandwidth":"7 MHz","mac":"0A003E458A58","frequency":"915","color":23},
  {"ip":"10.11.1.20","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Vault Sector ePMP3000","hardware":"ePMP3000","software":"","bandwidth":"10 MHz","mac":"58C17A703B9C","frequency":"5180","color":""},
  {"ip":"10.11.1.24","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Cipher Node Cyclone","hardware":"ePMP2000 GPS","software":"","bandwidth":"20 MHz","mac":"000456D7EFD0","frequency":"5160","color":""},
  {"ip":"10.11.1.99","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point 2.4 (90°)","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003E48833C","frequency":"2435","color":45},
  {"ip":"10.11.1.100","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point 900 (65°)","hardware":"PMP450i","software":"","bandwidth":"5 MHz","mac":"0A003E4590A8","frequency":"910","color":30},
  {"ip":"10.11.1.98","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point 3.65 West (90°)","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003E40DBC6","frequency":"3745","color":81},
  {"ip":"10.11.1.76","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point 3.65 East (90°)","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003E40DC08","frequency":"3550","color":80},
  {"ip":"10.11.1.96","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point 5 PMP450i North","hardware":"PMP450i","software":"","bandwidth":"20 MHz","mac":"0A003EBCD740","frequency":"5820","color":82},
  {"ip":"10.11.1.19","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Hyperlink 9 to 9 Mile","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003EA2804F","frequency":"5840","color":250},
  {"ip":"10.11.1.11","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Slave Cyclone","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003EB12A7E","frequency":"5620","color":85},
  {"ip":"10.11.1.37","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Photon Array Cyclone","hardware":"PMP450i","software":"","bandwidth":"20 MHz","mac":"0A003EBBC3BB","frequency":"5520","color":3},
  {"ip":"10.11.1.59","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Photon Array 900","hardware":"PMP450","software":"","bandwidth":"7 MHz","mac":"0A003E9008F4","frequency":"924","color":20},
  {"ip":"10.11.2.13","region":"Crimson Grid","deviceClass":"Access Point (PMP)","device":"Crimson Grid 2.4 Cyclone","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E206B67","frequency":"2455","color":35},
  {"ip":"10.11.2.19","region":"Crimson Grid","deviceClass":"Access Point (PMP)","device":"Crimson Grid Lift Station","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E056E48","frequency":"5325","color":95},
  {"ip":"10.11.2.14","region":"Crimson Grid","deviceClass":"Access Point (PMP)","device":"Crimson Grid 900 (H)","hardware":"","software":"","bandwidth":"7 MHz","mac":"0A003E9678D8","frequency":"924","color":200},
  {"ip":"10.11.2.26","region":"Crimson Grid","deviceClass":"Access Point (PMP)","device":"Crimson Grid 3.65","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003E404B9E","frequency":"3660","color":36},
  {"ip":"10.11.3.14","region":"Nebula Station","deviceClass":"Access Point (PMP)","device":"Nebula Station 2.4/199","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E24841E","frequency":"2415","color":199},
  {"ip":"10.11.3.15","region":"Nebula Station","deviceClass":"Access Point (PMP)","device":"Nebula Station 2.4/200","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E25D26F","frequency":"2457.5","color":200},
  {"ip":"10.11.3.16","region":"Nebula Station","deviceClass":"Access Point (PMP)","device":"Nebula Station 5.2 Cyclone","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E05972C","frequency":"5275","color":59},
  {"ip":"10.11.3.13","region":"Nebula Station","deviceClass":"Access Point (PMP)","device":"Nebula Station 900 (H)","hardware":"","software":"","bandwidth":"7 MHz","mac":"0A003E929914","frequency":"924","color":254},
  {"ip":"10.11.3.17","region":"Nebula Station","deviceClass":"Access Point (PMP)","device":"Nebula Station 3.65","hardware":"PMP450","software":"","bandwidth":"20 MHz","mac":"0A003E4082AD","frequency":"3715","color":70},
  {"ip":"10.11.1.66","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Zenith Point Beach 900","hardware":"","software":"","bandwidth":"7 MHz","mac":"0A003E90A051","frequency":"924","color":15},
  {"ip":"10.11.1.33","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Synapse Hub 5.2","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E01657F","frequency":"5300","color":4},
  {"ip":"10.11.1.38","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Synapse Hub 2.4","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003E2072BD","frequency":"2435","color":35},
  {"ip":"10.11.1.67","region":"Quantum Bay","deviceClass":"Access Point (PMP)","device":"Echo Station MicroPOP","hardware":"","software":"","bandwidth":"20 MHz","mac":"BCE67C33FFD0","frequency":"5180","color":""},
  {"ip":"10.11.1.75","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"IPC South Mooney PTP Master","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003EB0A677","frequency":"5540","color":25},
  {"ip":"10.11.2.17","region":"Crimson Grid","deviceClass":"Backhaul (PTP)","device":"Crimson Grid Lift Station Master","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003EB0548D","frequency":"5495","color":95},
  {"ip":"10.11.2.18","region":"Crimson Grid","deviceClass":"Backhaul (PTP)","device":"Crimson Grid Lift Station Slave","hardware":"","software":"","bandwidth":"20 MHz","mac":"0A003EB0403F","frequency":"5495","color":95},
  {"ip":"10.11.1.48","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Vault Sector Master","hardware":"","software":"","bandwidth":"30 MHz","mac":"000456809840","frequency":"5620 iDFS","color":"Link Access"},
  {"ip":"10.11.1.49","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Vault Sector Slave","hardware":"","software":"","bandwidth":"30 MHz","mac":"0004568079BD","frequency":"5620 iDFS","color":"Link Access"},
  {"ip":"10.11.1.16","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Nexus Prime Master","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EA2D087","frequency":"5700","color":20},
  {"ip":"10.11.1.17","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Nexus Prime Slave","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EB0EC89","frequency":"5700","color":20},
  {"ip":"10.11.1.46","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Cipher Node Master","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EA2CF7F","frequency":"5740","color":200},
  {"ip":"10.11.1.47","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Cipher Node Slave","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EA2CFED","frequency":"5740","color":200},
  {"ip":"10.11.1.35","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Zenith Point Master","hardware":"PTP450","software":"","bandwidth":"30 MHz","mac":"0A003EB35889","frequency":"5840","color":100},
  {"ip":"10.11.1.36","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Zenith Point Slave","hardware":"PTP450","software":"","bandwidth":"30 MHz","mac":"0A003EB359E2","frequency":"5840","color":100},
  {"ip":"10.11.1.44","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Photon Array Master","hardware":"PTP450i","software":"","bandwidth":"20 MHz","mac":"0A003E525E46","frequency":"5560","color":55},
  {"ip":"10.11.1.45","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Quantum Bay Photon Array Slave","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003E526276","frequency":"5560","color":55},
  {"ip":"10.11.3.30","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Polar Grid McMullen Master","hardware":"PTP670","software":"","bandwidth":"10 MHz","mac":"000456583D0D","frequency":"5735","color":"A"},
  {"ip":"10.11.3.31","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Polar Grid McMullen Slave","hardware":"PTP670","software":"","bandwidth":"10 MHz","mac":"000456583D6A","frequency":"5735","color":"A"},
  {"ip":"10.11.3.32","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Polar Grid McMullen Master","hardware":"PTP450","software":"","bandwidth":"10 MHz","mac":"0A003EB2E4E0","frequency":"5480","color":10},
  {"ip":"10.11.3.33","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Polar Grid McMullen Slave","hardware":"PTP450","software":"","bandwidth":"10 MHz","mac":"0A003EB2DF4A","frequency":"5480","color":10},
  {"ip":"10.11.1.80","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Vector Plains Master","hardware":"PTP670","software":"","bandwidth":"10 MHz","mac":"000456586311","frequency":"5160","color":"A"},
  {"ip":"10.11.1.81","region":"Quantum Bay","deviceClass":"Backhaul (PTP)","device":"Vector Plains Slave","hardware":"PTP670","software":"","bandwidth":"10 MHz","mac":"000456587BC4","frequency":"5160","color":"A"},
  {"ip":"10.11.14.10","region":"Axiom Point","deviceClass":"Backhaul (PTP)","device":"Axiom Point Axia Master","hardware":"PTP670","software":"","bandwidth":"45 MHz","mac":"000456588369","frequency":"5495","color":"A"},
  {"ip":"10.11.14.11","region":"Axiom Point","deviceClass":"Backhaul (PTP)","device":"Axiom Point Axia Slave","hardware":"PTP670","software":"","bandwidth":"45 MHz","mac":"0004565882F2","frequency":"5495","color":"A"},
  {"ip":"10.11.3.11","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Nebula Station POP Master","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EB0ED2F","frequency":"5610","color":229},
  {"ip":"10.11.3.10","region":"Nebula Station","deviceClass":"Backhaul (PTP)","device":"Nebula Station POP Slave","hardware":"PTP450","software":"","bandwidth":"20 MHz","mac":"0A003EB0ED41","frequency":"5610","color":229}
];

var micros = [
  { "name": "Nexus Prime Micro", "ip": "10.11.1.28" },
  { "name": "Zenith Point CMM4", "ip": "10.11.1.34" },
  { "name": "Crimson Grid Micro", "ip": "10.11.2.12" },
  { "name": "Quantum Bay Micro", "ip": "10.11.1.10" },
  { "name": "Nebula Station Micro", "ip": "10.11.3.12" }
];

var switches = [
  { "name": "Vault Sector", "ip": "10.11.1.60" },
  { "name": "Zenith Point Mountain", "ip": "10.11.1.9" },
  { "name": "Echo Station Switch", "ip": "10.11.1.63" },
  { "name": "Crimson Grid POP", "ip": "10.11.2.4" },
  { "name": "Crimson Grid Tower", "ip": "10.11.2.2" },
  { "name": "Quantum Bay POP", "ip": "10.11.1.4" },
  { "name": "Cipher Node Office", "ip": "10.11.1.2" },
  { "name": "Nebula Station POP", "ip": "10.11.3.4" },
  { "name": "Nebula Station Tower", "ip": "10.11.3.2" }
];

var cameras = [
  { "name": "Office Camera", "ip": "192.168.1.10" },
  { "name": "Crimson Grid Camera", "ip": "10.11.2.203" },
  { "name": "Nebula Station Camera", "ip": "10.11.3.203" }
];

var servers = [
  { "name": "cnMaestro Cloud", "url": "https://cloud.cambiumnetworks.com", "ip": "" },
  { "name": "On-Premise", "ip": "10.11.1.201" },
  { "name": "DHCP Server", "url": "http://192.168.1.9/dhcp", "ip": "" },
  { "name": "ESXi Server #1", "ip": "192.168.1.47" },
  { "name": "ESXi Server #2", "ip": "192.168.1.48" },
  { "name": "IP Management", "ip": "192.168.1.6" },
  { "name": "RADIUS Server", "url": "http://10.11.1.200/daloradius", "ip": "" },
  { "name": "vCenter Server", "ip": "192.168.1.49" },
  { "name": "PRTG", "ip": "192.168.1.5" },
  { "name": "phpMyAdmin", "url": "http://192.168.1.9/phpmyadmin", "ip": "" }
];

var thirdPartyLinks = [
  { "name": "Adobe Acrobat", "url": "https://acrobat.adobe.com/" },
  { "name": "ATCO Electric", "url": "https://electric.atco.com/" },
  { "name": "GUI Enhancer", "url": "https://chrome.google.com/webstore" },
  { "name": "IE Tab Extension", "url": "https://chrome.google.com/webstore" },
  { "name": "Admin Webmail", "url": "https://admin.hostdomain.com/" },
  { "name": "User Webmail", "url": "https://email.hostdomain.com/" },
  { "name": "PuTTY", "url": "https://www.putty.org/" },
  { "name": "WinSCP", "url": "https://winscp.net/" },
  { "name": "3CXammer", "url": "https://3cxammer.update.com/" },
  { "name": "LINKPlanner", "url": "https://www.cambiumnetworks.com/products/software/linkplanner/" },
  { "name": "Wireshark", "url": "https://www.wireshark.org/" },
  { "name": "Google Chrome", "url": "https://www.google.com/chrome/" },
  { "name": "MIB Browser", "url": "https://www.ireasoning.com/" },
  { "name": "CNIT", "url": "https://support.cambiumnetworks.com/" },
  { "name": "iPerf", "url": "https://iperf.fr/" },
  { "name": "WinRAR", "url": "https://www.win-rar.com/" },
  { "name": "AnyDesk", "url": "https://anydesk.com/" },
  { "name": "OfficeSuite", "url": "https://www.officesuite.com/" }
];

var regions = ["Quantum Bay", "Crimson Grid", "Nebula Station", "Axiom Point"];
var deviceClasses = ["Access Point (PMP)", "Backhaul (PTP)"];