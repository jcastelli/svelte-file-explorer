import { faFile, faFileExcel, faFileWord, faFilePdf, faFileVideo, faFileZipper, faFileCode } from '@fortawesome/free-solid-svg-icons'

import isVideo from './isVideo.js'
import isCode from './isCode.js'

const fileExtensionMap = {
  'default': faFile,

  'csv': faFileExcel,
  'xls': faFileExcel,
  'xlsx': faFileExcel,

  'doc': faFileWord,
  'docx': faFileWord,
  
  'pdf': faFilePdf,

  'tar': faFileZipper,
  'tar.gz': faFileZipper,
  'zip': faFileZipper,
}

const getExtensionIcon = (ext)=> {
  if(isCode(ext)) {
    return faFileCode
  } else if(isVideo(ext)) {
    return faFileVideo
  } else if(Object.prototype.hasOwnProperty.call(fileExtensionMap, ext)) {
    return fileExtensionMap[ext]
  } else {
    return faFile
  }
}

export default getExtensionIcon