import React, { useState, useEffect } from "react";
import "./image-uploader.css";

export const UploadImages = () => {
    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) =>
            newImageUrls.push(URL.createObjectURL(image))
        );
        setImageUrls(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={onImageChange}
                data-testid="file-upload"
            />
            {Boolean(imageUrls.length) && (
                <div data-testid="images">
                    {imageUrls.map((imageSrc, index) => (
                        <img
                            src={imageSrc}
                            alt="Your really cool contribution!"
                            key={index}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
