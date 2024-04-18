import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="col-3">
        <div className="nav flex-column nav-pills">
          <a href="main" className="nav-link active">Главная</a>
          <a href="profile" className="nav-link">Профиль</a>
          <a href="friends" className="nav-link">Друзья</a>
          <a href="shop" className="nav-link">Магазин</a>
        </div>
      </div>
      <div className="col-9">

      </div>
    </div>
  );
}

export default App;
