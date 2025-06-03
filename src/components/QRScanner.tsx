import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { X } from 'lucide-react';

interface QRScannerProps {
  onScan: (restaurantId: string) => void;
  onClose: () => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose }) => {
  const [error, setError] = useState<string>('');
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode('qr-reader');

    const startScanner = async () => {
      try {
        await scannerRef.current?.start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText) => {
            // Assuming QR code contains a valid restaurant ID
            if (decodedText.startsWith('restaurant:')) {
              const restaurantId = decodedText.split(':')[1];
              onScan(restaurantId);
              stopScanner();
            }
          },
          () => {} // Ignore failures
        );
      } catch (err) {
        setError('Unable to access camera. Please ensure camera permissions are granted.');
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, [onScan]);

  const stopScanner = () => {
    if (scannerRef.current?.isScanning) {
      scannerRef.current?.stop().catch(console.error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Scan Restaurant QR Code</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div id="qr-reader" className="w-full"></div>
          {error && (
            <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};