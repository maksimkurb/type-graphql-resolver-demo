import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import { Recipe } from "./recipe-type";
import { RecipeService } from "./recipe-service";

@Resolver(of => Recipe)
export class TestResolver {
  constructor(
    // constructor injection of service
    private readonly recipeService: RecipeService
  ) {}

  @Query(type => String, { nullable: true })
  async testRequest() {
    return "Test";
  }

  @FieldResolver()
  async numberInCollection(@Root() recipe: Recipe): Promise<number> {
    return 123123123;
  }
}
