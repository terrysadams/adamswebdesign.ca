// NexusCore Networks - Core Functions
// app-functions.js

function showToast(message) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() { 
    toast.classList.remove('show'); 
  }, 2000);
}

function copyField(id, label) {
  var input = document.getElementById(id);
  var value = input.value;
  
  if (value) {
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(function() {
        showToast(label + ' copied!');
      }).catch(function(err) {
        // Fallback for older browsers
        input.select();
        document.execCommand('copy');
        showToast(label + ' copied!');
      });
    } else {
      // Fallback for older browsers
      input.select();
      document.execCommand('copy');
      showToast(label + ' copied!');
    }
  }
}

function openIP() {
  var ip = document.getElementById('ip-address').value;
  if (ip) {
    window.open('http://' + ip, '_blank');
  } else {
    showToast('Please enter an IP address');
  }
}

function createDeviceRow(name, ip, onClick) {
  var div = document.createElement('div');
  div.className = 'device-row';
  
  var nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = name;
  
  var ipSpan = document.createElement('span');
  ipSpan.className = 'ip';
  ipSpan.textContent = ip || '';
  
  div.appendChild(nameSpan);
  div.appendChild(ipSpan);
  
  if (onClick) {
    div.onclick = onClick;
  }
  
  return div;
}

function createLinkRow(name, url) {
  var div = document.createElement('div');
  div.className = 'device-row';
  
  var nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = name;
  
  var link = document.createElement('a');
  link.className = 'ip';
  link.href = url;
  link.target = '_blank';
  link.textContent = 'Open';
  link.onclick = function(e) {
    e.stopPropagation();
  };
  
  div.appendChild(nameSpan);
  div.appendChild(link);
  
  return div;
}

function selectDevice(device) {
  document.getElementById('ip-address').value = device.ip || '';
  document.getElementById('hostname').value = device.device || '';
  document.getElementById('software').value = device.software || device.hardware || '';
  document.getElementById('mac-address').value = device.mac || '';
  document.getElementById('frequency').value = device.frequency || '';
  document.getElementById('color-code').value = device.color || '';
  
  showToast('Device selected: ' + device.device);
}

function renderLists() {
  // Render Micros
  var microsList = document.getElementById('micros-list');
  microsList.innerHTML = '';
  micros.forEach(function(item) { 
    microsList.appendChild(createDeviceRow(item.name, item.ip)); 
  });
  
  // Render Switches
  var switchesList = document.getElementById('switches-list');
  switchesList.innerHTML = '';
  switches.forEach(function(item) { 
    switchesList.appendChild(createDeviceRow(item.name, item.ip)); 
  });
  
  // Render Cameras
  var camerasList = document.getElementById('cameras-list');
  camerasList.innerHTML = '';
  cameras.forEach(function(item) { 
    camerasList.appendChild(createDeviceRow(item.name, item.ip)); 
  });
  
  // Render Servers
  var serversList = document.getElementById('servers-list');
  serversList.innerHTML = '';
  servers.forEach(function(item) { 
    serversList.appendChild(createDeviceRow(item.name, item.ip || item.url)); 
  });
  
  // Render Third-Party Links
  var linksList = document.getElementById('links-list');
  linksList.innerHTML = '';
  thirdPartyLinks.forEach(function(item) { 
    linksList.appendChild(createLinkRow(item.name, item.url)); 
  });
  
  // Populate Region Filter
  var regionFilter = document.getElementById('region-filter');
  regions.forEach(function(r) {
    var opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    regionFilter.appendChild(opt);
  });
  
  // Populate Class Filter
  var classFilter = document.getElementById('class-filter');
  deviceClasses.forEach(function(c) {
    var opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    classFilter.appendChild(opt);
  });
  
  // Initial render of access points
  renderAccessPoints();
}

function renderAccessPoints() {
  var region = document.getElementById('region-filter').value;
  var deviceClass = document.getElementById('class-filter').value;
  var list = document.getElementById('access-points-list');
  list.innerHTML = '';
  
  var filtered = devices.filter(function(d) {
    // Filter by region if selected
    if (region && d.region !== region) return false;
    
    // Filter by device class if selected
    if (deviceClass && d.deviceClass !== deviceClass) return false;
    
    return true;
  });
  
  if (filtered.length === 0) {
    var emptyMsg = document.createElement('div');
    emptyMsg.style.padding = '20px';
    emptyMsg.style.textAlign = 'center';
    emptyMsg.style.color = 'var(--text-muted)';
    emptyMsg.textContent = 'No devices found';
    list.appendChild(emptyMsg);
    return;
  }
  
  filtered.forEach(function(device) {
    list.appendChild(createDeviceRow(
      device.device, 
      device.ip, 
      function() { selectDevice(device); }
    ));
  });
}

// Event Listeners
document.getElementById('region-filter').addEventListener('change', renderAccessPoints);
document.getElementById('class-filter').addEventListener('change', renderAccessPoints);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderLists();
  console.log('NexusCore Networks Dashboard loaded');
});