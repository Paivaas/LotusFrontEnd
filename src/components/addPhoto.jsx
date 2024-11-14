"use client";
import Image from "next/image";
import { useState } from "react";

// Import das imagens 
import addPhoto from "@/public/icons/profile-information/grey/camera.svg";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Criar uma URL de pré-visualização da imagem
      const filePreview = URL.createObjectURL(selectedFile);
      setPreview(filePreview);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Enviar o arquivo para o servidor
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Limpar a miniatura após o upload, se necessário
        setPreview(null);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div 
      className="w-[250px] h-[216px] flex flex-col justify-center items-center rounded-3xl border-[3px] bg-white relative" 
      onSubmit={handleSubmit}
    >
      <input className="bg-slate-500 opacity-0 absolute inset-0 z-50" type="file" accept="image/*" onChange={handleFileChange} />

      <div 
        id="addPhotoDisplay" 
        className="absolute inset-0 flex flex-col justify-center items-center"
        style={{ display: preview ? 'none' : 'flex' }}
      >
        <Image className="w-[25%] max-sm:w-[10%]" alt="Baby Icon" src={addPhoto} />
        <h1>Add Photo</h1>
      </div>

      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '100px',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
    </div>
  );
}
