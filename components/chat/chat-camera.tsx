"use client";
import { readFileAsDataURL } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import ImagePreviewDialog from "./image-preview-dialog";
import SelectUserDialog from "./select-user-dialog";

const ChatCamera = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [step, setStep] = useState(0);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataURL(file);
      setSelectedFile(dataUrl);
    }
  };

  const closeDialog = () => {
    setSelectedFile("");
    setStep(0);
  };

  return (
    <>
      <div className="">
        <div
          className="rounded-full p-8 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 cursor-pointer"
          onClick={() => imgRef.current!.click()}
        >
          <Image
            src={"/camera.svg"}
            height={0}
            width={0}
            style={{ width: "150px", height: "auto" }}
            className="hover:opacity-90"
            alt="Camera Icon"
          />

          <input
            type="file"
            accept="image/*"
            hidden
            ref={imgRef}
            onChange={handleFileChange}
          />
        </div>
        <p className="w- text-center text-white mt-4 font-semibold">
          Send Image.
        </p>
      </div>
      {step === 0 ? (
        <ImagePreviewDialog
          selectedFile={selectedFile}
          onClose={closeDialog}
          onImageChange={() => imgRef.current!.click()}
          setStep={setStep}
        />
      ) : (
        <SelectUserDialog
          selectedFile={selectedFile}
          onClose={closeDialog}
          onPrev={() => setStep(0)}
        />
      )}
    </>
  );
};
export default ChatCamera;
