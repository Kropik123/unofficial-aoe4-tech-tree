const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sslDir = path.resolve(__dirname, '../node_modules/webpack-dev-server/ssl');
const certFile = 'cert.pem';
const keyFile = 'key.pem';
const outputFile = path.join(sslDir, 'server.pem');

try {
    execSync('mkcert -install', { stdio: 'inherit' });
    execSync(`mkcert -cert-file ${certFile} -key-file ${keyFile} localhost`, { stdio: 'inherit' });

    fs.mkdirSync(sslDir, { recursive: true });

    const cert = fs.readFileSync(certFile);
    const key = fs.readFileSync(keyFile);
    fs.writeFileSync(outputFile, cert + key);

    fs.unlinkSync(certFile);
    fs.unlinkSync(keyFile);

    console.log('✅ Certificate generated successfully.');
} catch (err) {
    console.error('❌ Failed to generate certificate:', err);
    process.exit(1);
}
