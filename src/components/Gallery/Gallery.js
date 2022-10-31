import React from 'react'
import GalleryA1 from '../../img/gallery1.jpg'
import GalleryA2 from '../../img/gallery2.jpg'
import GalleryA3 from '../../img/gallery3.jpg'
import GalleryA4 from '../../img/gallery4.jpg'
import GalleryA5 from '../../img/gallery5.jpg'
import GalleryA6 from '../../img/gallery6.jpg'

const Gallery = () => {
  return (
    <div>
      <div className="galler_heading" id="gallery">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Gallery</h2>{' '}
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={GalleryA1}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={GalleryA2}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={GalleryA4}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={GalleryA3}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={GalleryA5}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={GalleryA6}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
