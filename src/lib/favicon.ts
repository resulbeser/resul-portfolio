export function createRoundFavicon(imagePath: string) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = function() {
    // Canvas boyutları
    const sizes = [16, 32, 48, 64, 128, 180];
    
    sizes.forEach(size => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      canvas.width = size;
      canvas.height = size;
      
      // Yuvarlak maske oluştur
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      
      // Resmi çiz
      ctx.drawImage(img, 0, 0, size, size);
      
      // Canvas'ı blob'a çevir ve favicon olarak ayarla
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          updateFavicon(url, size);
        }
      }, 'image/png');
    });
  };
  
  img.src = imagePath;
}

function updateFavicon(url: string, size: number) {
  // Mevcut favicon'ları kaldır
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(favicon => favicon.remove());
  
  // Yeni yuvarlak favicon ekle
  const link = document.createElement('link');
  link.rel = size === 180 ? 'apple-touch-icon' : 'icon';
  link.type = 'image/png';
  link.sizes = `${size}x${size}`;
  link.href = url;
  
  document.head.appendChild(link);
}

// Sayfa yüklendiğinde yuvarlak favicon oluştur
export function initRoundFavicon() {
  if (typeof window !== 'undefined') {
    createRoundFavicon('/RR-Logo-BW.png');
  }
}