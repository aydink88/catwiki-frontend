import React from 'react';
import Discover from '../components/Discover';
import Hero from '../components/Hero';
import HomeInfo from '../components/HomeInfo';
import { useCats } from '../hooks/useCats';

export default function HomePage() {
  const cats = useCats();
  return (
    <div>
      <Hero cats={cats} />
      <Discover cats={cats} />
      <HomeInfo />
    </div>
  );
}
