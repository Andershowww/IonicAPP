import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: '1', name: 'Fruits', icon: '🍎' },
  { id: '2', name: 'Milk & egg', icon: '🥛' },
  { id: '3', name: 'Beverages', icon: '🥤' },
  { id: '4', name: 'Laundry', icon: '🧺' },
  { id: '5', name: 'Vegetables', icon: '🥬' }
];

const CategoryList: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      overflowX: 'auto',
      gap: '16px',
      padding: '16px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      {categories.map((category) => (
        <div
          key={category.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '70px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            marginBottom: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            {category.icon}
          </div>
          <span style={{
            fontSize: '12px',
            color: '#4a4a4a',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
