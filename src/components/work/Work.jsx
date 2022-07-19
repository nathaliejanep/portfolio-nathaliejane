import { useEffect, useState } from 'react';
import './work.scss';
const Work = () => {
  // fetch github respositories
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/nathaliejanep/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  //loop through repos and display
  const repoItems = repos.map((repo) => (
    <div className="repo-item" key={repo.id}>
      <h4 className="repo-item__name">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h4>
      <div className="repo-item__description">{repo.description}</div>
    </div>
  ));

  return (
    <div className="container">
      <div className="content">
        <h2>Github repositories</h2>
        <p>
          Projects built with JavaScript, TypeScript, React, Angular, NodeJS,
          HTML and CSS. The main focus on my projects has been to implement
          functionality and clean code.
        </p>
        <div className="githubrepos">{repoItems}</div>
      </div>
    </div>
  );
};
export default Work;
