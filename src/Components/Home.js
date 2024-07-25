import React from 'react';
// import './Home.css';

const Home = () => {
  return (
    <div className="container mt-5" data-testid="home-content">
        <div className="text-center mt-4">
        <h1 className="display-4">The apps you love.</h1>
        <p className="lead">From a place you can trust.
        For over a decade, the App Store has proved to be a safe and trusted place to discover and download apps. But the App Store is more than just a storefront — it’s an innovative destination focused on bringing you amazing experiences. And a big part of those experiences is ensuring that the apps we offer are held to the highest standards for privacy, security and content. Because we offer nearly 2 million apps — and we want you to feel good about using every single one of them.</p>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 h-100" src="https://media.istockphoto.com/id/500474033/photo/business-man-using-tablet-pc.jpg?s=1024x1024&w=is&k=20&c=5j-Ls_33jDh8Tnbz_iDbEJj1uJx5uv_EcJw3suwxvoA=" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="https://media.istockphoto.com/id/877780596/photo/earth.jpg?s=1024x1024&w=is&k=20&c=tucS4AFhxRl1jSTIq7wR9GLS-VmO04SPcGS6BeHez8k=" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="https://media.istockphoto.com/id/940458676/photo/hand-using-laptop-with-application-icons-flying-around.jpg?s=1024x1024&w=is&k=20&c=97gVtwm5ErzoMahSvgvYQoz4n5kjT8c8gjwG3Z_eUMw=" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
      
    </div>
      
  );
};

export default Home;