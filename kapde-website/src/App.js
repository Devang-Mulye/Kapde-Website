import './App.css';

function App() 
{
  return (
    <>
      <header >
        <div className='header' >

        <img className='header_img' src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='img here'></img>

          <div className='nav_bar'>
            <div className='logo'><img src='https://images.unsplash.com/photo-1602335422296-6c6346ee71f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt = "Image1"></img></div>
            <div className='nav_left'>
              <ul>
                <li> <a href='#'>MENS</a></li>
                <li> <a href='#'>WOMEN</a></li>
                <li> <a href='#'>KIDS</a></li>

              </ul>
            </div>
            <div className='nav_right'>
              <ul>
                <li> <a href='#' >LOGIN</a></li>
                <li> <a href='#' >YOUR ORDERS</a></li>
                <li> <a href='#' >CART</a></li>

              </ul>
            </div>
          </div>
          
        </div>

      </header>
    <div className="MostViewedTitle"><h1>Most Viewed Items</h1></div>
      <div className="MostViewed">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardOne" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardTwo" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardThree" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="NewArrivalsTitle"><h1>New Arrivals</h1></div>
      <div className="NewArrivals">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardOne" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardTwo" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="card-img-top" alt="CardThree" />
              <div className ="Colorforcard">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
