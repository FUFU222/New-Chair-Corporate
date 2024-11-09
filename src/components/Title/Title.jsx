import React from 'react';
import sectionData from '@/src/data/sectionData';

export default function Title({ sectionId }) {

  const section = sectionData.find((item => item.id === sectionId))

  return (
    <div>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </div>
  );
}