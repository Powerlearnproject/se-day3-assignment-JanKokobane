import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import styles from './Products.module.css';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

const Products: React.FC = () => {

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true); 
  }, []);

  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Custom Cupboards',
      description: 'Handcrafted storage solutions tailored to your space and style preferences.',
      category: 'Storage',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true
    },
    {
      id: 2,
      name: 'Shoe Racks',
      description: 'Organized shoe storage systems that keep your entryway neat and stylish.',
      category: 'Storage',
      image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 3,
      name: 'Dining Tables',
      description: 'Elegant dining tables crafted from premium materials for lasting beauty.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true
    },
    {
      id: 4,
      name: 'TV Stands',
      description: 'Modern entertainment centers with cable management and storage options.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 5,
      name: 'Bedside Pedestals',
      description: 'Stylish nightstands with drawers and compartments for bedroom essentials.',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 6,
      name: 'Headboards',
      description: 'Custom headboards that transform your bedroom into a luxurious retreat.',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true
    },
    {
      id: 7,
      name: 'Wine Racks',
      description: 'Elegant wine storage solutions for wine enthusiasts and collectors.',
      category: 'Storage',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 8,
      name: 'Wardrobes',
      description: 'Spacious wardrobes with customizable compartments and hanging space.',
      category: 'Storage',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Storage', 'Furniture', 'Bedroom'];

  useEffect(() => {
    const filtered = selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory);
    setVisibleProducts(filtered);
  }, [selectedCategory, products]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#products');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className={`${styles.products} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <span className={styles.topper}>Handcrafted Furniture & Storage Solutions</span>
            <h2 className={styles.title}>
              Our <span className={`${styles.titleHighlight} ${visible ? styles.visible : ""}`}>Products</span>
            </h2>
            <p className={styles.description}>
              From custom cupboards to elegant dining tables, we create furniture that combines 
              functionality with timeless style. Each piece is crafted with attention to detail 
              and built to last.
            </p>
          </div>

          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.productsGrid}>
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${product.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.featured && (
                <div className={styles.featuredBadge}>
                  <Star className={styles.starIcon} />
                  Featured
                </div>
              )}
              
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.productInfo}>
                <div className={styles.productHeader}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.category}>{product.category}</span>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;