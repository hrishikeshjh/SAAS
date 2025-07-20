import React from 'react';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur">
      <img
        src="/loading.gif"
        alt="Loading..."
        className="w-60 h-60 object-contain"
      />
    </div>
  );
}
