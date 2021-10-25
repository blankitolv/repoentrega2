function NavBar() {
     return (
          <div className="App">
               <div className="menu">
                    <h1>Editorial Intelectos</h1>
                    <nav>
                         <ul>
                              <li className="selected"><a href="#">INICIO</a></li>
                              <li><a href="#">PRODUCTOS</a></li>
                              <li><a href="#">CONTACTO</a></li>
                              <li><a href="#">CARRITO</a></li>
                         </ul>
                    </nav>
               </div>
          </div>
     );
}
export default NavBar;