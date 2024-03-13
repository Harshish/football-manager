export default function Header() {
  return (
    <header className="container p-4">
      <div className="jumbotron text-center">
        <h1 style={{ color: "white", fontWeight: "bolder" }}>
          <img
            src="football.svg"
            className="p-3"
            style={{ height: 100, width: 100 }}
          ></img>
          Football Manager
        </h1>
      </div>
    </header>
  );
}
