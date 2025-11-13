import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const CameraScanner = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
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
    </section>
  );
};

export default CameraScanner;
