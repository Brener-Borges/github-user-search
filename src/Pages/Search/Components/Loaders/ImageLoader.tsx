import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="-30" y="-25" rx="2" ry="2" width="300" height="268" /> 
    <rect x="-30" y="260" rx="0" ry="0" width="153" height="36" />
  </ContentLoader>
)

export default ImageLoader