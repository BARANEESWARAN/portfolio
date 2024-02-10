import React, { useEffect, useState } from 'react';
import '../Portfolio/portfolio.css';
import { PortfolioData } from './PortfolioData';
import { LeftCircleFilled, RightCircleFilled  } from "@ant-design/icons";

function Portfolio() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
 
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 730) {
        // If window width is below 650px, set items per page to 1
        setItemsPerPage(2);
      } else {
        // Otherwise, set items per page to 3
        setItemsPerPage(3);
      }
    };

    // Call handleResize initially to set the initial number of items per page
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex(prevIndex => prevIndex + 3);
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => prevIndex - 3);
  };

  const totalItems = PortfolioData.length;
  const itemsPerPages = itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPages);
  const currentPage = Math.ceil((startIndex + 1) / itemsPerPages);
  const startIndexCurrentPage = (currentPage - 1) * itemsPerPages;
  const endIndexCurrentPage = Math.min(startIndexCurrentPage + itemsPerPages, totalItems);
  const itemsForCurrentPage = PortfolioData.slice(startIndexCurrentPage, endIndexCurrentPage);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
<div className='projects__container'>


      <div className='portfolio__container'>
        {itemsForCurrentPage.map(portfolio => (
          <div className='card__container' key={portfolio.id}>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={portfolio.image} alt='project' />
              </div>
              <h3>{portfolio.title}</h3>
              <div className='portfolio__item-btns'>
                <a href={portfolio.github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={portfolio.demo} className='btn btn-primary' target='_blank'>
                   Demo
                </a>
              </div>
            </article>
          </div>
        ))}
     

      </div>
      <div className='navigation-buttons'>
        
         {startIndex > 0 && <button onClick={handlePrev}>
          
         <LeftCircleFilled />
          </button>}
         

         
          {startIndex + itemsPerPage < totalItems && <button onClick={handleNext}>
          <RightCircleFilled /> 
            </button>}
          
       
        </div>
      </div>
     
    </section>
  );
}

export default Portfolio;
