import React, { useState } from "react";

export default function PhotoUpload({
  register,
  imagePreview,
  setImagePreview,
}) {
  // State to hold a URL for the image preview.

  // Handles the file selection and updates the preview.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  return (
    <div>
      <div>
        <input
          id="file-upload"
          type="file"
          // The register function links the input to react-hook-form.
          // We also use its onChange handler to manage the preview.
          {...register("photo", { required: "Please select a file." })}
          onChange={(e) => {
            // Call the react-hook-form handler first
            register("photo").onChange(e);
            // Then call our custom handler for the preview
            handleFileChange(e);
          }}
          className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold file:text-red-600 cursor-pointer
                         "
        />
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="flex flex-col items-center mt-6 p-4 rounded-xl">
          <h2 className="text-md font-semibold text-primary mb-2">
            File Preview:
          </h2>
          <img
            src={imagePreview}
            alt="File Preview"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
}
