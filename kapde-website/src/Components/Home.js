import React from 'react';
import '../Css/Home.css';

function Home() 
{
  return (
    <>
    <div className='carosel'>

    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1661284871789-e05072c4cb18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
    <div className="MostViewedTitle"><h1>Most Viewed Items</h1></div>
      <div className="MostViewed">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardOne" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardTwo" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardThree" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="NewArrivalsTitle"><h1>New Arrivals</h1></div>
      <div className="NewArrivals">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardOne" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardTwo" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="card-img-top" alt="CardThree" />
              <div className ="Colorforcard">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
