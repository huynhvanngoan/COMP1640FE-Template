// AdminStatistic.js
import React from 'react';
import AdminStatistic from './AdminStatistic';
import AdminAcademic from './AdminAcademic';
import AdminArticles from './AdminArticles';
import AdminAccount from './AdminAccount';

export default function AdminDashboard({ selected }) {
  // Logic to render content based on selected index
  const content = [
    // Content for Statistic
    <div key={0}><AdminStatistic /></div>,
    // Content for Academic Year
    <div key={1}><AdminAcademic /></div>,
    // Content for Articles
    <div key={2}><AdminArticles /></div>,
    // Content for Accounts
    <div key={3}><AdminAccount /></div>
  ];

  return (
    <div className="bg-white p-4">
      {content[selected]}
    </div>
  );
}
