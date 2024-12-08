// const os = require('os');

// const interfaces = os.networkInterfaces();
// let macAddress = null;

// for (const key in interfaces) {
//   for (const details of interfaces[key]) {
//     if (details.mac && !details.internal) {
//       macAddress = details.mac;
//       break;
//     }
//   }
//   if (macAddress) break;
// }

// console.log('MAC Address:', macAddress);

const arp = require('arp-a');
const scanner = require('network-scanner');

// Function to scan the network
function scanNetwork() {
  const options = {
    // Set the IP range according to your local network
    network: '192.168.1.0/24',
    timeout: 5000,
  };

  scanner.scan(options, (err, results) => {
    if (err) {
      console.error('Error scanning network:', err);
      return;
    }

    console.log('Network scan results:', results);

    // Fetch the ARP table to get MAC addresses
    results.forEach(result => {
      arp.toMAC(result.ip, (err, mac) => {
        if (err) {
          console.error(`Error getting MAC for IP ${result.ip}:`, err);
        } else {
          console.log(`IP: ${result.ip}, MAC: ${mac}`);
        }
      });
    });
  });
}

// Run the network scan
scanNetwork();
