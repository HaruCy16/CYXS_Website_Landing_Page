const sharp = require('sharp');

sharp('assets/logo-cyxs.png')
  .resize(400, 400, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .toFile('assets/logo-cyxs-resized.png', (err, info) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized successfully:', info);
    }
  });
