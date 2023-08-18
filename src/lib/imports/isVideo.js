import videoExtensions from 'video-extensions'

/**
 * Determines whether the extension is a video extension.
 * @param {string} ext 
 * @returns {boolean}
 */
const isVideo = (ext)=> {
  return videoExtensions.includes(ext)
}

export default isVideo