// components/ImageUploader.js
import { useState } from 'react';
import Image from 'next/image';

const ImageUploader = () => {
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Armazena a imagem base64
                setPreview(reader.result); // Para exibição
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1>Carregador de Imagem</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
                <div>
                    <h2>Pré-visualização da Imagem:</h2>
                    <Image
                        src={preview}
                        alt="Imagem Carregada"
                        width={300} // Defina a largura da imagem
                        height={200} // Defina a altura da imagem
                        style={{ borderRadius: '8px' }} // Exemplo de estilo opcional
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
