import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { Benefits } from '../components/Benefits';
import { Stats } from '../components/Stats';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <Benefits />
      <Stats />
    </main>
  );
}