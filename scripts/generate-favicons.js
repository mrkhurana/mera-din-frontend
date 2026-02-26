const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'favicon.svg');

// Favicon sizes needed
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 },
];

async function generateFavicons() {
  try {
    console.log('🎨 Generating favicons from SVG...\n');

    // Generate PNG files
    for (const { name, size } of sizes) {
      const outputPath = path.join(publicDir, name);
      await sharp(svgPath)
        .png()
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(outputPath);
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Generate ICO file (using 32x32 as base)
    const icoPath = path.join(publicDir, 'favicon.ico');
    await sharp(svgPath)
      .png()
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(icoPath);
    console.log(`✅ Generated favicon.ico (32x32)`);

    console.log('\n✨ All favicons generated successfully!');
    console.log(`📁 Files saved to: ${publicDir}`);
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
