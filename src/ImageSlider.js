import React from "react";
import ImageGallery from "react-image-gallery";

function ImageSlider(props) {
  return (
    <div
      style={{
        boxShadow: "0 0 20px 0px #0000008c",
        marginRight: 100,
      }}
    >
      <ImageGallery
        items={props.items}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={props.showBullets}
        autoPlay={props.autoPlay}
        showThumbnails={props.thumbnails}
        showNav={props.nav}
        infinite={true}
      />
    </div>
  );
}

export default ImageSlider;

/*infinite: Boolean, default true

infinite sliding
lazyLoad: Boolean, default false

showNav: Boolean, default true

showThumbnails: Boolean, default true

thumbnailPosition: String, default bottom

available positions: top, right, bottom, left
showFullscreenButton: Boolean, default true

useBrowserFullscreen: Boolean, default true

if false, fullscreen will be done via css within the browser
useTranslate3D: Boolean, default true

if false, will use translate instead of translate3d css property to transition slides
showPlayButton: Boolean, default true

isRTL: Boolean, default false

if true, gallery's direction will be from right-to-left (to support right-to-left languages)
showBullets: Boolean, default false

showIndex: Boolean, default false

autoPlay: Boolean, default false

disableThumbnailScroll: Boolean, default false

disables the thumbnail container from adjusting
disableKeyDown: Boolean, default false

disables keydown listener for keyboard shortcuts (left arrow, right arrow, esc key)
disableSwipe: Boolean, default false

onErrorImageURL: String, default undefined

an image src pointing to your default image if an image fails to load
handles both slide image, and thumbnail image
indexSeparator: String, default ' / ', ignored if showIndex is false

slideDuration: Number, default 450

transition duration during image slide in milliseconds
swipingTransitionDuration: Number, default 0

transition duration while swiping in milliseconds
slideInterval: Number, default 3000

slideOnThumbnailOver: Boolean, default false

flickThreshold: Number (float), default 0.4

Determines the max velocity of a swipe before it's considered a flick (lower = more sensitive)
swipeThreshold: Number, default 30

A percentage of how far the offset of the current slide is swiped to trigger a slide event. e.g. If the current slide is swiped less than 30% to the left or right, it will not trigger a slide event.
stopPropagation: Boolean, default false

Automatically calls stopPropagation on all 'swipe' events.
preventDefaultTouchmoveEvent: Boolean, default false

An option to prevent the browser's touchmove event (stops the gallery from scrolling up or down when swiping)
startIndex: Number, default 0

onImageError: Function, callback(event)

overrides onErrorImage
onThumbnailError: Function, callback(event)

overrides onErrorImage
onThumbnailClick: Function, callback(event, index)

onImageLoad: Function, callback(event)

onSlide: Function, callback(currentIndex)

onBeforeSlide: Function, callback(nextIndex)

onScreenChange: Function, callback(boolean)

When fullscreen is toggled a boolean is passed to the callback
onPause: Function, callback(currentIndex)

onPlay: Function, callback(currentIndex)

onClick: Function, callback(event)

onTouchMove: Function, callback(event) on gallery slide

onTouchEnd: Function, callback(event) on gallery slide

onTouchStart: Function, callback(event) on gallery slide

onMouseOver: Function, callback(event) on gallery slide

onMouseLeave: Function, callback(event) on gallery slide

additionalClass: String,
*/
