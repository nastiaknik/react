import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
}
