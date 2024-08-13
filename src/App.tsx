import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import {style} from './styles.css.ts';
import * as styles from './styles.css.ts'; 

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.exampleH1}>Vite + React + Typescript + MSW + zustand + vanilla-extract</h1>
      </div>
      <QueryClientProvider client={queryClient}>
        {/*  */}
      </QueryClientProvider>
    </>
  )
}

export default App
