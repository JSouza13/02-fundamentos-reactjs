import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="Joao Souza"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus sint nihil, unde similique, ex esse porro autem iusto quibusdam ratione illo in blanditiis sed repellendus architecto sunt quod tempore."
      />
      <Post 
        author="Diego Fernandes"
        content="Um novo post"
      />
   </div>
  )
}
