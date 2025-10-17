import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonText } from '@ionic/react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryListProps {
  selectedCategory: string;
  onCategorySelect: (categoryName: string) => void;
}

const categories: Category[] = [
  { id: '1', name: 'Frutas', icon: '🍎' },
  { id: '2', name: 'Leite e ovos', icon: '🥛' },
  { id: '3', name: 'Bebidas', icon: '🥤' },
  { id: '5', name: 'Legumes', icon: '🥬' }
];

const CategoryList: React.FC<CategoryListProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div style={{ padding: '12px 16px' }}>
      {/* Título */}
      <IonText color="dark">
        <h2 style={{
          marginBottom: '12px',
          marginTop: '8px',
          textAlign: 'left',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#1a1a1a',
        }}>
          Categorias
        </h2>
      </IonText>

      <IonSegment
        scrollable
        value={selectedCategory}
        onIonChange={(e) => onCategorySelect(e.detail.value as string)}
        style={{
          padding: '8px 0',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {categories.map((category) => (
          <IonSegmentButton
            key={category.id}
            value={category.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 0'
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: selectedCategory === category.name ? '#0ca201' : '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                transition: '0.2s'
              }}
            >
              {category.icon}
            </div>
            <IonLabel
              style={{
                fontSize: '12px',
                marginTop: '4px',
                color: selectedCategory === category.name ? '#0ca201' : '#4a4a4a'
              }}
            >
              {category.name}
            </IonLabel>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </div>
  );
};

export default CategoryList;
