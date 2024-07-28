
import React from 'react';

function About() {
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img 
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="d-block mx-lg-auto img-fluid" 
            alt="Bootstrap Themes" 
            width="700" 
            height="500" 
            loading="lazy" 
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">App Store</h1>
          <p className="lead">
          Explore a vast selection of apps, each vetted for quality, privacy, and security. Our curated store ensures you find only the best for your digital needs. Enhance your experience with confidence and ease.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Apps</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=600" 
              className="card-img-top" 
              height={300} 
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Games</h5>
              <p className="card-text">
                Feature that enables you to experience the adventure and HD resolution games .
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=600" 
              className="card-img-top" 
              height={300} 
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Fitness</h5>
              <p className="card-text">
              A fitness app provides workout programs, diet instructions, nutrient info, and even live healthcare coaching to help users achieve their goals. Artificial intelligence and machine learning build
               personalized training routines for its customers in these apps.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600" 
              className="card-img-top" 
              height={300} 
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Stock Market</h5>
              <p className="card-text">
                Invest your hard earned money in stocks like equity,Intrday for a better future.
              Stocks are shares of ownership in a public company, and the stock market is where 
              investors connect to buy and sell investments like stocks.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
