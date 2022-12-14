export default function Projects() {
  return (
    <section className='projects' style={{ display: 'none' }}>
      <h1>Projects</h1>
      <h3>Full Stack</h3>
      <dl>
        <dt>Puttsly</dt>
        <dd>Created a REST API with Python 3.10 and Falcon 3.0.1.</dd>
        <dd>Implemented data store via repository pattern with SQLAlchemy and Postgres.</dd>
        <dd>Applied MVC architecture to back end design.</dd>
        <dd>Built using TDD with Pytest and Continuous Integration with Github actions.</dd>
        <dd>Designed front end with React 17 using Typescript</dd>
        <dd>Containerized with Docker Compose</dd>
        <dt>Wifiology</dt>
        <dd>Created a REST API with NodeJS.</dd>
        <dd>Implemented data store with Postgres.</dd>
        <dd>Deployed on Heroku using built in CI/CD tooling from Github and Heroku.</dd>
        <dd><a href="https://github.com/404-group-does-not-exist/Wifiology">View Code</a></dd>
      </dl>
    </section>
  );
}