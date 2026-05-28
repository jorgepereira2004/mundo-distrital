import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSection from './components/HeroSection';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <TopBar />
      <Header />
      <BreakingNews />
      
      {/* Top Advertising Space */}
      <div className="bg-gray-100 dark:bg-gray-900 py-6 px-4 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-300 dark:bg-gray-800 rounded-lg h-24 flex items-center justify-center">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p className="font-semibold text-sm">Espaço Publicitário</p>
              <p className="text-xs">728 x 90</p>
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
      <MainLayout />
      <Footer />
    </div>
  );
};

export default App;
