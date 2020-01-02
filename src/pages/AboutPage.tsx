import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse non
        obcaecati ut quos quam aut eos deleniti, in totam.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to List of Todos
      </button>
    </>
  );
}