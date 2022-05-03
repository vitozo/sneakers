


function App() {
  return (
    <div className="wrapper">
      <header className="header d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="ml-15">
            <div className="headerTitle">
              React sneakers
            </div>
            <div className="headerSubtitle">
              <p>
                Магазин лучших кроссовок
              </p>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <ul className="header__list d-flex">
            <li className="header__item">
              <img width={18} height={18} src="/img/cart.svg" alt="" />
              <span>15$</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="" />
            </li>
          </ul>
        </div>
      </header>
      <section className="content">
        <h1 className="content__title"> Все кроссовки</h1>

        <div className="sneakers">
          <div className="card">
            <div>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            </div>
            <div className="card__title">
              <p>
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
            </div>
            <div className="card__bottom">
              <div className="card__price">
                <span className="card__price-text">Цена:</span>
                <span className="card__value">180$</span>
              </div>
              <button className="card__btn">
                <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div>
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            </div>
            <div className="card__title">
              <p>
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
            </div>
            <div className="card__bottom">
              <div className="card__price">
                <span className="card__price-text">Цена:</span>
                <span className="card__value">180$</span>
              </div>
              <button className="card__btn">
                <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div>
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            </div>
            <div className="card__title">
              <p>
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
            </div>
            <div className="card__bottom">
              <div className="card__price">
                <span className="card__price-text">Цена:</span>
                <span className="card__value">180$</span>
              </div>
              <button className="card__btn">
                <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div>
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            </div>
            <div className="card__title">
              <p>
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
            </div>
            <div className="card__bottom">
              <div className="card__price">
                <span className="card__price-text">Цена:</span>
                <span className="card__value">180$</span>
              </div>
              <button className="card__btn">
                <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>



      </section>
    </div>
  );
};

export default App;
