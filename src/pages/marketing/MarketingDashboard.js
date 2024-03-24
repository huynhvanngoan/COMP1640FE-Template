// AdminStatistic.js
import React from 'react';

import MarketingArticles from './MarketingArticles';
import MarketingAccount from './MarketingAccount';

export default function AdminDashboard({ selected }) {
  // Logic to render content based on selected index
  const content = [
    // Content for Articles
    <div key={2}><MarketingArticles /></div>,
    // Content for Accounts
    <div key={3}><MarketingAccount /></div>
  ];

  return (
    <div className="bg-white p-4">
      {content[selected]}
    </div>
  );
}
