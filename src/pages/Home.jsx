import React from 'react';

const Home = () => {
  return (
    <div>
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="..." />
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card">
            <img src="veg2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">This shows the information about the veg-recipes that you would like to do.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="\non veg.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Non-Veg Recipes</h5>
              <p className="card-text">This shows the procedure to make Non-veg recipes like chicken biryani, mutton, fish, and many more.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="\snacks.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Snacks</h5>
              <p className="card-text">This shows the procedure on making the delicious snacks.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="\sweets.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sweets</h5>
              <p className="card-text">This shows the procedure to prepare the sweetest sweets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
