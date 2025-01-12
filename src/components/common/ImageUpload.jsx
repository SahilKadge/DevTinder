import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import ImageUploading from 'react-images-uploading';

export const ImageUpload = ({image, setImage}) => {
    // const [image, setImage] = useState(null);
    const [text, setText] = useState(false);

    const onChange = (imageList) => {
        // Only one image will be present in the array
        console.log("Image uploaded:", imageList[0]);
        setImage(imageList[0]); // Update the state with the first image
        setText(false)
       
    };
    console.log(text)

    return (
        <div className="z-10 w-full h-full flex flex-col items-center relative">
            <ImageUploading
                multiple={false} // Allow only single image upload
                value={image ? [image] : []} // Wrap single image in an array
                onChange={onChange}
                dataURLKey="data_url"
            >
                {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
                    <div>
                        <div
                            {...dragProps}
                            style={isDragging ? { backgroundColor: 'red' } : undefined}
                            className="w-[300px] h-[400px] rounded-[20px] border-[2px] border-gray-400 border-spacing-10 border-dashed bg-gray-800 mt-[50px] flex justify-center items-center overflow-hidden"
                        >
                            {image ? (
                                <img
                                    src={image.data_url}
                                    alt="Uploaded Preview"
                                    className="w-[90%] h-[90%] object-contain"
                                />
                            ) : (
                                <div>
                                    {text ? (
                                        <div className="text-customWhite">Drop Your Image Here</div>
                                    ) : (
                                        <IoPerson className="w-[200px] h-[200px] text-customWhite" />
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                             type="button"
                            className="bg-gradient-to-right hover:bg-gradientStart cursor-pointer text-[40px] rounded-full h-[60px] w-[60px] absolute bottom-[-25px] right-[18%] flex justify-center items-center text-customWhite"
                            style={isDragging ? { backgroundColor: 'red' } : undefined}
                            onClick={() => {
                                setText(true); 
                                onImageUpload();
                            }}
                        >
                            <MdAdd />
                        </button>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};
