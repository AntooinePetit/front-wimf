import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import "../styles/components/CameraScanner.scss";

const videoConstraints = {
  facingMode: { exact: "environment" },
  width: { ideal: 1280 },
  height: { ideal: 720 },
};

export default function CameraScanner() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webcamRef = useRef<any>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const takePhoto = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) setCapturedImage(imageSrc);
    }
  }, []);

  const retryPhoto = () => setCapturedImage(null);

  const validatePhoto = async () => {
    if (!capturedImage) return;

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: capturedImage }),
      });

      const data = await res.json();
      console.log("Réponse backend:", data);
    } catch (err) {
      console.error("Erreur upload:", err);
    }
  };

  return (
    <div className="camera-wrapper">
      {!capturedImage && (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="camera-view"
        />
      )}

      {capturedImage && (
        <img src={capturedImage} alt="preview" className="preview" />
      )}

      <div className="controls">
        {!capturedImage && (
          <button className="take" onClick={takePhoto}>Prendre une photo</button>
        )}

        {capturedImage && (
          <>
            <button className="retry" onClick={retryPhoto}>Reprendre</button>
            <button className="validate" onClick={validatePhoto}>Valider</button>
          </>
        )}
      </div>
    </div>
  );
}
