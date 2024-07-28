import './Home.css';

function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col">
            <h1>Your Trusted Source for Amazing Apps!</h1>
            <p>For over a decade, our app store has been a trusted and innovative destination, offering a safe space to discover and download apps. With nearly 2 million apps, we ensure the highest standards of privacy, security, and content quality. Our commitment to excellence means you can explore new possibilities with confidence and peace of mind.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Explore Applications</h2>
        <div className="row">
          {/* Image cards */}
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqSMeESXghp0ZGhZqzkadGeQnrfNMgVir-A&s" className="card-img-top" alt="App 1" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.spaceo.ca/wp-content/uploads/2020/05/best-health-apps.jpg" className="card-img-top" alt="App 2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://res.cloudinary.com/madimages/image/fetch/e_sharpen:100,q_auto:eco,fl_progressive:semi,h_253,w_400/https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_best_clothing_apps.webp" className="card-img-top" alt="App 3" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoKZ4ZdXblx2ZI5yDOmE-I7kGBDPAkLij4Q&s" className="card-img-top" alt="App 4" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWL1KgKVlZSCuAxV7yDpjaSKEDfjQl_ke4rg&s" className="card-img-top" alt="App 5" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JjstrMtUNAAbD25YoM60S3zmgYoeM0Dm8HJhZTRIoLVz07H95qGXkZu2Vh91Sry1J-0&usqp=CAU" className="card-img-top" alt="App 6" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Specialization</h2>
        <div className="row our-services">
          <div className="col-md-4 text-center">
            <h4>A Decade of Trust</h4>
            <p>We discover Quality Apps with Confidence!</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>More Than Just Apps</h4>
            <p>Find Your Perfect App in a Safe and Trusted Environment!




</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>Setting the Standard</h4>
            <p>Over 10 Years of Curated Excellence in Apps.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;