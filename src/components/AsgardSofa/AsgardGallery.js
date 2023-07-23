import React from 'react'
const AsgardGallery = () => {
  return (
    <div id='AsgardGallery'>
      {
        function toggleImage(smallImage) {
            const bigImage = document.getElementById('big-image');
            const smallImages = document.querySelectorAll('.product-small-image img');
            bigImage.classList.add('fade-out');
            setTimeout(() => {
                bigImage.src = smallImage.src;
                bigImage.classList.remove('fade-out');
            }, 500);
            smallImages.forEach((image) => {
                if (image !== smallImage) {
                    image.classList.remove('active');
                }
            });
            smallImage.classList.add('active');
        }
      }
    </div>
  )
}

export default AsgardGallery
