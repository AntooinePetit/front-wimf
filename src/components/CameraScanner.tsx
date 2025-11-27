import { X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { scanImage } from "../services/api";
import "../styles/components/CameraScanner.scss";

const videoConstraints = {
  facingMode: { exact: "environment" },
  width: { ideal: 1280 },
  height: { ideal: 720 },
};

interface CameraScannerProps {
  setShowCamera: (value: boolean) => void;
  setIngredients: (ingredients: []) => void;
  setIsScanned: (value: boolean) => void;
  setShowIngredients: (value: boolean) => void;
  setScanError: (value: boolean) => void;
}

const CameraScanner = ({
  setShowCamera,
  setIngredients,
  setShowIngredients,
  setIsScanned,
  setScanError,
}: CameraScannerProps) => {
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
      const data = await scanImage(capturedImage);
      setIngredients(data.ingredients);
    } catch (err) {
      console.error("Erreur upload:", err);
      setScanError(true);
    }
    setIsScanned(true);
    setShowIngredients(true);
    setShowCamera(false);
  };

  return (
    <div className="camera-wrapper">
      <button id="close-camera" onClick={() => setShowCamera(false)}>
        <X size={30} />
      </button>

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
          <button className="take" onClick={takePhoto}>
            Prendre une photo
          </button>
        )}

        {capturedImage && (
          <>
            <button className="retry" onClick={retryPhoto}>
              Reprendre
            </button>
            <button className="validate" onClick={validatePhoto}>
              Valider
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraScanner;
