import { X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "../styles/components/CameraScanner.scss";
import { config } from "../config";

const videoConstraints = {
  facingMode: { exact: "environment" },
  width: { ideal: 1280 },
  height: { ideal: 720 },
};

interface CameraScannerProps {
  setShowCamera: (value: boolean) => void,
  setIngredients: (ingredients: unknown) => void,
  setShowIngredients: (value: boolean) => void
}

const CameraScanner = ({ setShowCamera, setIngredients, setShowIngredients }: CameraScannerProps) => {
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
      const res = await fetch(`${config.apiUrl}/api/v1/ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ picture: capturedImage }),
      });

      const data = await res.json();

      console.log("Réponse backend:", data);

      setIngredients(data.ingredients)
      setShowIngredients(true)
      setShowCamera(false)

    } catch (err) {
      console.error("Erreur upload:", err);
    }
  };

  return (
    <div className="camera-wrapper">
      <button id="close-camera" onClick={() => setShowCamera(false)}>
        <X size={30}/>
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
