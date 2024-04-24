const uploadButton = document.getElementById('upload-button');
const imageUpload = document.getElementById('image-upload');
const galleryContainer = document.getElementById('gallery-container');
const fullImageContainer = document.getElementById('full-image-container');
const fullImage = document.getElementById('full-image');
const closeFullImageButton = document.getElementById('close-full-image');

uploadButton.addEventListener('click', () => {
  const selectedFiles = imageUpload.files;
  if (!selectedFiles.length) {
    return;  // No files selected, do nothing
  }

  for (const file of selectedFiles) {
    const reader = new FileReader();

    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      img.alt = file.name;
      galleryContainer.appendChild(img);

      // Add click event listener to each image for full view
      img.addEventListener('click', () => {
        fullImage.src = reader.result;
        fullImageContainer.style.display = 'block';
      });
    };

    reader.readAsDataURL(file);
  }
});

// Close full image functionality
closeFullImageButton.addEventListener('click', () => {
  fullImageContainer.style.display = 'none';
});
