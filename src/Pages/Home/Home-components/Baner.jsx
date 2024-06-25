import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'


const Baner = () => {
    return (
        <div>
            <Carousel>
            
                
                <div>
                    <img className='max-h-96' src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/the-great-wave-of-kanagawa-hokusai.jpg" />
                    <p className="legend">Mountain view canvas</p>
                </div>
                <div>
                    <img  className='max-h-96' src="https://images.unsplash.com/photo-1614189647266-8fbdad9c72de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D" />
                    <p className="legend">Floral Watercolor Art</p>
                </div>
                <div>
                    <img  className='max-h-96' src="https://plus.unsplash.com/premium_photo-1674168439153-a9b8e44d477a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXJjb2xvciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />
                    <p className="legend">Realistic Oil Portrai</p>
                </div>
                <div>
                    <img  className='max-h-96' src="https://plus.unsplash.com/premium_photo-1686546766850-f857e964814f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Figure Charcoal Sketch</p>
                </div>
                <div>
                    <img  className='max-h-96' src="https://images.unsplash.com/photo-1582201957424-621320ad670d?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Comic Strip Drawing</p>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Baner;