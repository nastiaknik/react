import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';

export default function App() {
  return (
    <div>
      <RecipeList items={recipes} />
    </div>
  );
}
