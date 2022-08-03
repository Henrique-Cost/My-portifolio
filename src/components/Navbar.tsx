export default function Navbar() {
  return (
  <html lang="pt-br">
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
  </head>
  <header>
      <nav className="navbar navbar-expand-lg bg-slate-300">
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse flex justify-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href='/personal-projects'>
            Personal projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href='/formation'>Formation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <body>
    
  </body>
  </html>
    );
}