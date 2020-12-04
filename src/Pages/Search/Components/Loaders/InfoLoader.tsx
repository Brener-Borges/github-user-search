import React from 'react';
import ContentLoader from 'react-content-loader';

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={600}
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="1200" height="240" /> 
    
  </ContentLoader>
)

export default InfoLoader;