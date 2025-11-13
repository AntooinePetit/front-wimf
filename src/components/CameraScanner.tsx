import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraScanner = () => {
  const [image, setImage] = useState()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: { exact: "environment" },
  };

  return (
    <section id="camera">
      <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
      <button id="reject-photo" />
      <button id="take-photo" onClick={capture}/>
      <button id="validate-photo" />
      <img src={image} alt="Test" />
    </section>
  );
};

export default CameraScanner;
