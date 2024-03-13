export default function Header() {
  return (
    <header className="container p-4">
      <div className="jumbotron text-center">
        <h1 style={{ color: "white", fontWeight: "bolder" }}>
          <img
            alt="football logo"
            src="football.svg"
            className="p-3"
            style={{ height: '6rem', width: '6rem' }}
          ></img>
          Football Manager
        </h1>
      </div>
    </header>
  );
}
