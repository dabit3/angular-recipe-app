var breakfast = angular.module('ionicApp');

breakfast.factory('BreakfastService', function() {
    var recipes = [
        {   id: '0',
            title: 'Chicken Apple Hash',
            preptime: '15 Minutes',
            servings: '3 - 4',
            ingredients: [
                '2 large chicken breasts',
                '1 tbsp of fresh sage, chopped',
                '1/3 cup of yellow onion, chopped',
                '2 tbsp coconut oil',
                '1/4 tsp of Allspice',
                '1/3 chopped yellow onion',
                '1 tbsp maple syrup',
                '2 tbsp of coconut oil'],
            directions: [
                '1. Mix the apple, sage, coconut oil, allspice and onion in a pan, over high heat and cook until the onions have turned translucent. Pour in the maple syrup and mix well.',
                '2. Cut the chicken breast into very small bite size pieces. Add in with the rest of the other ingredients then cook for 10 minutes, regularly stirring until the chicken is well done',
                '3. This can be served with sweet baked potato or some mash butternut squash, or some savory garden vegetable.'
            ]
        },
        {   id: '1',
            title: 'Chicken Leftovers Paleo Breakfast',
            preptime: '15 Minutes',
            servings: '4-6',
            ingredients: [
                'Leftover chicken from yesterday’s lunch or dinner',
                '2 hard boiled eggs',
                '1 cup chopped tomatoes',
                'Arugula and spinach or any mixed greens',
                'Sea salt and freshly cracked black pepper to adjust taste',
                '2 tbsp extra virgin oil'],
            directions: [
                '1. In an individual, medium-sized salad bowl, add in the tomatoes, cut up chicken meat and hard boiled eggs.',
                '2. Drizzle the olive oil over the mixture.',
                '3. Season to adjust the taste to your liking using black pepper and salt',
                '4. Cut up or chop using a fork and knife',
                '5. Serve and enjoy!']
        },
        {   id: '2',
            title: 'Chicken Pumpkin Scramble',
            preptime: '10 Minutes',
            servings: '2',
            ingredients: [
                '2 eggs',
                '3/4 - 1 cup diced chicken',
                '1 cup pumpkin diced',
                '1/2 teaspoon ginger',
                '1/2 teaspoon cinnamon',
                '1/4 cup cocount milk',
                '1 tbsp fresh thyme',
                '1/2 tsp fresh carraway seeds (optional)',
                '1 tbsp cocount oil'],
            directions: [
                '1. Whisk together in a bowl the eggs and coconut milk',
                '2. In a frying pan, heat the coconut oil and fry the diced pumpkin for about 4 minutes over the high temp. until the pumpkin start to become tender.',
                '3. Add in the cinnamon, chicken, ginger and caraway seeds then fry this for about a minute.',
                '4. Turn down the heat to a medium fire and pour the egg-mixture over the pumpkin and chicken stirring occasionally, eventually turning it into a scramble',
                '5. After 5 minutes then everything will be ready and you can now add and stir in the fresh thyme.'
            ]
        },
        {   id: '3',
            title: 'Fried Eggs with Sweet Potato Hash',
            preptime: '30 Minutes',
            servings: '2',
            ingredients: [
                '4 eggs',
                '1 tablespoon coconut oil',
                '1 medium sweet potato, diced into small cubes',
                '1/2 onion, diced',
                '2 sausages of your choice, sliced',
                '1 bell pepper, diced',
                'Black pepper',
                'Salt'],
            directions: [
                '1. In a large skillet, heat 2 teaspoons coconut oil over medium heat.',
                '2. Add the onions and sweet potatoes, and sauté for 5 minutes.',
                '3. Add the sausages and continue to cook until sausages are browned and sweet potatoes are slightly softened.',
                '4. Add bell peppers and 2 Tbs of water.',
                '5. Cover and cook for 15 minutes or until the potatoes are completely soft, stirring frequently.',
                '6. Meanwhile, fry eggs in 1 teaspoon coconut oil.',
                '7. Season with salt freshly ground black pepper and serve over sweet potato hash.'
            ]
        },
        {   id: '4',
            title: 'Chicken Frittata',
            preptime: '5 Minutes',
            servings: '2',
            ingredients: [
                '1 tablespoon coconut oil or fat of choice',
                '1 cup grilled chicken or leftover chicken',
                '1 cup frozen broccoli (or any leftover or frozen veggies)',
                '4 large pastured eggs',
                '2 tablespoons coconut milk',
                '1 teaspoon kosher salt',
                'Freshly-ground black pepper'],
            directions: [
                '1. First, preheat the toaster oven to 350°F and heat the coconut oil in an 8-inch cast iron skillet over medium heat. ',
                '2. Add chicken',
                '3. Cut broccoli into bite size pieces, add into the pan with the chicken.',
                '4. Crack the eggs into a medium bowl, and add the coconut milk, salt, and a few grinds of pepper and mix together.',
                '5. Pour the egg mixture into the skillet and cook for 3 to 5 minutes or until the bottom of the frittata is set.',
                '6. Place the skillet in the oven. Cook for 10 to 15 minutes, and then crank the heat up to broil for another 2 minutes or until the frittata puffs up and is cooked all the way through.',
                '7. Carefully transfer the frittata to a plate, slice, and serve.'
            ]
        },
        {   id: '5',
            title: 'Chicken Scramble',
            preptime: '20 Minutes',
            servings: '2',
            ingredients: [
                '4 bacon slices',
                '4 eggs',
                '1 medium zucchini, diced',
                '1 clove garlic, minced',
                '1 medium tomato, diced',
                '1 handful spinach' ],
            directions: [
                '1. Cook bacon, remove from pan and reserve 1 Tbs of the bacon drippings in the pan. (Alternatively, cook bacon on baking sheet in oven for 20 minutes at 350F while everything else cooks).',
                '2. Wash and chop the vegetables.',
                '3. Over medium-high heat, add the zucchini, garlic and tomato to the pan with the remaining bacon drippings.  Saute until just before tender.',
                '4. While cooking, beat eggs in a small bowl.  Set aside.',
                '5. Crumble cooked bacon and set aside.',
                '6. When the vegetables are almost done, add the beaten eggs and crumbled bacon to the pan, along with the fresh spinach.  Turn heat to medium-low and cook until the eggs are fluffy and firm.'
            ]
        },
        {   id: '6',
            title: 'Omelet Muffins',
            preptime: '25 Minutes',
            servings: '4',
            ingredients: [
                'Coconut oil or paper muffin liners',
                '8 eggs',
                '1/8 cup Water',
                '1/2 lb chicken, ham, or sausage, cooked and cut or crumbled into small pieces',
                '2 cups diced vegetables (1 red bell pepper, 1/4 lb asparagus or broccoli and 1/2 yellow onion recommended, but use whatever is on hand)',
                '1/4 tsp salt',
                '1/8 tsp ground pepper'],
            directions: [
                '1. Preheat oven to 350℉.',
                '2. Grease 8 muffin cups with coconut oil or line with paper baking cups. Fill any remaining muffin cups with 1" of water, so they do not scorch while baking.',
                '3. Beat the eggs in a medium bowl and add meat, vegetables, salt, ground pepper, and any other ingredients you wish to add.',
                '4. Pour mixture into the muffin cups.',
                '5. Bake for 18-20 minutes.'
            ]
        },
        {   id: '7',
            title: 'Italian Avocado Omelet',
            preptime: '25 Minutes',
            servings: '2',
            ingredients: [
                '1/4 - 1/2 lb chicken',
                '1 medium tomato, diced',
                '1/2 avocado, diced',
                '1 Tbs fresh cilantro, chopped',
                '1/4 tsp sea salt',
                '1/4 tsp freshly ground black pepper',
                '1 tsp coconut oil',
                '4 eggs, beaten'],
            directions: [
                '1. Cook chicken until cooked thoroughly. Chop and set aside.',
                '2. Toss tomato, avocado, and cilantro together in a small bowl. Season to taste with sea salt and freshly ground black pepper. Set aside.',
                '3. Beat eggs in a separate small bowl.',
                '4. Heat a non-stick skillet over medium-high heat. Add coconut oil when hot.',
                '5. Pour half of the eggs into the hot skillet, tilting the pan gently to cover the bottom with egg. Tilt pan and lift edges of omelet to allow uncooked egg to spread to the hot part of the pan.',
                '6. When eggs are almost fully firm, add chicken pieces onto one half of the egg.',
                '7. Fold omelet in half and cook for a minute more.',
                '8. Top with tomato and avocado mixture.',
                '9. Repeat for second omelet'
            ]
        },
        {   id: '8',
            title: 'Chorizo Chicken Scramble',
            preptime: '15 Minutes',
            servings: '2',
            ingredients: [
                '1 tbs coconut oil',
                '1/2 yellow onion, diced',
                '1 red pepper, diced',
                '1/4 lb chorizo, sliced (with no filler ingredients)',
                '1/4 lb chicken, diced',
                '4 eggs',
                'Dash of sea salt',
                '1/4 tsp freshly ground black pepper',
                'Hot pepper sauce or your choice'],
            directions: [
                '1. Cook chicken until cooked thoroughly. Chop and set aside.',
                '2. Heat a medium saute pan over medium-high heat. When hot, add coconut oil and saute onions for 5 minutes.',
                '3. Add red pepper and chorizo until the chorizo gets crispy around the edges and the onion turns slightly translucent.',
                '4. Add chicken.',
                '5. Meanwhile, beat the eggs in a small bowl and add sea salt and black pepper.',
                '6. Pour the eggs into the pan with the onions, peppers, chicken and chorizo.',
                '7. Scramble the eggs softly until cooked.',
                '8. Top with hot sauce.'
            ]
        },
        {   id: '9',
            title: 'Tex-Mex Breakfast Scramble',
            preptime: '20 Minutes',
            servings: '2',
            ingredients: [
                '1 tsp coconut oil, tallow, lard, or bacon drippings',
                '4 eggs',
                '1/2 tsp cumin',
                '1/2 tsp chili powder (or ground chipotle)',
                '1/4 tsp sea salt (optional)',
                '1 Tbs water',
                '1/4 red onion, diced',
                '1 green bell pepper, diced',
                '1 jalapeno, diced (optional)',
                '12 oz chicken breasts, chopped',
                '1 medium tomato, diced',
                '1/4 cup fresh cilantro, chopped'],
            directions: [
                '1. Cook and dice chicken breasts, set aside.',
                '2. Heat coconut oil in a medium skillet over medium-high heat.',
                '3. Meanwhile, break eggs into a small bowl. Add cumin, chili powder, sea salt, and water. Scramble with a fork until fully combined.',
                '4. Add onions, bell peppers, and jalapeno to the hot skillet. Saute 3-5 minutes, or until slightly softened.',
                '5. Add eggs and chicken, and cook while continuously stirring until eggs are light and fluffy.',
                '6. Remove from heat. Stir in tomatoes, and top with fresh cilantro to serve.'
            ]
        },
        {   id: '10',
            title: 'Chopped Mushroom Paleo Bowl',
            preptime: '30 Minutes',
            servings: '4',
            ingredients: [
                '1/4 lb chicken',
                '8 slices of bacon (save drippings)',
                '8 hard-boiled eggs, peeled and finely chopped',
                '1 medium onion, finely diced',
                '10-12 medium white mushrooms, finely chopped',
                'freshly ground black pepper, to taste'],
            directions: [
                '1. Cook chicken and set aside.',
                '2. Cook bacon fully and remove from pan. Reserve a light coating of bacon fat in the pan. Crumble bacon pieces when cool and set aside.',
                '3. Meanwhile, hard-boil the eggs.',
                '4. Cool cooked eggs in water and shell immediately.  Chop into bite-size pieces.',
                '5. Over medium-high heat, sauté the onion in the remaining bacon drippings until translucent and golden brown.',
                '6. Add the mushrooms and sauté another 5-6 minutes, stirring frequently, until softened.',
                '7. Mix saute, eggs, chicken and bacon together, and season with black pepper.',
                '8. Serve warm or cold.'
            ]
        },
        {   id: '11',
            title: 'Pesto Zucchini Bacon Frittata',
            preptime: '30 Minutes',
            servings: '4-8',
            ingredients: [
                'Homemade or store bought pesto sauce',
                '5 pieces of bacon',
                '1.5 cups chopped kale (optional)',
                '2 small zucchinis, spiralized or chopped',
                '1 cup sliced button mushrooms',
                '½ tsp garlic powder',
                '6 eggs, beaten',
                'Cracked pepper to season'],
            directions: [
                '1. Preheat the oven to 375 degrees. In a large pan over medium heat, cook the bacon until it is crispy enough for your taste. Set aside on a paper towel lined plate, leaving 1 tablespoon of bacon fat in the skillet.',
                '2. Add the mushrooms to the pan and cook for 2 minutes and then add in the kale, zucchini  and garlic powder. Cook until the kale wilts mostly.',
                '3. Pour the eggs over the zucchini, distributing evenly. Top with a generous amount of pepper and let cook for 2 minutes, letting the eggs cook to set on the bottom.',
                '4. Place in the oven for 20-25 minutes or until you can stick a knife through the center of the frittata and it comes out clean.',
                '5. When the frittata is done, serve immediately with side of basil pesto. Enjoy!'
            ]
        },
        {   id: '12 ',
            title: 'Kale Red Pepper Frittata',
            preptime: '20 Minutes',
            servings: '4',
            ingredients: [
                '1 tbsp coconut oil',
                '1/4 - 1/4 lb chicken',
                '1/2 cup chopped red pepper',
                '1/3 cup chopped onion',
                '3 slices crispy bacon, chopped',
                '2 cups chopped kale, de-stemmed and rinsed',
                '8 eggs',
                '1/2 cup almond or coconut milk',
                'Salt and pepper to taste'],
            directions: [
                '1. Dice and cook chicken, set aside',
                '2. Preheat oven to 350 degrees. In a medium bowl, whisk the eggs and milk together. Add salt and pepper. Set aside.',
                '3. In a non-stick skillet, heat about a tablespoon of coconut oil over medium heat. Add onion and red pepper and sauté for 3 minutes, until onion is translucent. Add kale and cook until it wilts, about 5 minutes.',
                '4. Add eggs and bacon.',
                '5. In a non-stick skillet, heat about a tablespoon of coconut oil over medium heat. Add onion and red pepper and sauté for 3 minutes, until onion is translucent. Add kale and cook until it wilts, about 5 minutes.',
                '6. Add eggs to the pan mixture. Cook for about 4 minutes until the bottom and edges of the frittata start to set.',
                '7. Put frittata in the oven and cook for 10-15 minutes until the frittata is cooked all the way through. Slice and serve.'
            ]
        },
        {   id: '13',
            title: 'Sausage Chicken Butternut Squash Frittata',
            preptime: '25 Minutes',
            servings: '2',
            ingredients: [
                '1/4 lb chicken, diced',
                '2 tablespoon bacon fat, duck fat or fat of choice',
                '4 ounces cooked sausage, chopped or crumbled',
                '1/4 cup onion, diced',
                '1/4 cup red pepper, diced',
                '1/2 cup butternut squash, cubed and roasted',
                '3 large eggs',
                '2 teaspoons mixed fresh herbs (or 1/2 teaspoon dried)',
                'Salt & pepper to taste'],
            directions: [
                '1. Preheat broiler.',
                '2. Cook chicken in skillet, set aside.',
                '3. Beat eggs, salt and pepper and herbs until well-combined.',
                '4. Add fat to 10-inch oven-proof skillet and sauté onions and peppers until soft. Add sausage chicken and squash and cook until heated through. Pour eggs over filling and cook until edges start to set.',
                '5. Put pan in oven and broil until frittata is puffed and brown on top, 3-5 minutes.'
            ]
        },
        {   id: '14',
            title: 'Hearty Breakfast Casserole',
            preptime: '20 Minutes',
            servings: '8-10',
            ingredients: [
                '1/2 pound breakfast sausage ',
                '1/2 pount chicken, diced',
                '1 large sweet potato or 2 medium to small, diced',
                '2-3 cups fresh baby spinach, chopped',
                '1 green onion, diced',
                '10-12 large eggs',
                'sea salt and fresh ground pepper to taste'],
            directions: [
                '1. Preheat oven to 375 degrees and grease a 9×13″ glass baking dish with coconut oil or whatever you choose. Set aside.',
                '2. Cook chicken, set aside.',
                '3. Prepare veggies.  Dice sweet potatoes, chop spinach, and dice up green onion.  Let each seperately aside.',
                '4. Heat skillet over medium-high heat.  Remove sausage from casing and add sausage to skillet.  Cook until browned and cooked through.  Remove sausage from skillet keeping the sausage grease.  Add sweet potatoes to grease and cook until tender, stir occassionally, about 10 to 15 minutes.',
                '5. Remove sweet potatoes and place in bowl.  Toss sweet potatoes with spinach, green onion, chicken, sausage, and salt and pepper until well combined.  Place the mixture into your prepared 9×13 glass dish, spreading evenly across the bottom of the dish.',
                '6. In another large bowl, whisk eggs.  Pour egg mixture evenly over the sausage and veggie mixture in dish.',
                '7. Bake in preheated over for 25 to 30 minutes or until set.  Allow to cool slightly before serving. Cut into squares and serve.'
            ]
        },
        {   id: '15',
            title: 'Country Casserole Recipe',
            preptime: '25 Minutes',
            servings: '6',
            ingredients: [
                '1/4 lb chicken breast, diced',
                '1 small, organic butternut squash',
                '1 cup diced cooked ham',
                '1/4 cup green onions, chopped',
                '4 eggs beaten',
                '½ cup canned coconut milk',
                '¼ cup flax meal',
                '1/8 teaspoon salt',
                '1/8 teaspoon pepper'],
            directions: [
                '1. Preheat the oven to 350 degrees F. Lightly grease a small casserole dish with olive oil',
                '2. Cook chicken, set aside',
                '3. Peel and seed the butternut squash. Slice into strips narrow enough to fit into the food processor opening. With the grating attachment on, shred all of the butternut squash. Arrange evenly in the casserole dish. Sprinkle with chicken ham and onions.',
                '4. Remove the grating blade from the food processor and insert the chopping blade. Combine the eggs, coconut milk, flax meal, salt and pepper in the food processor. Blend until smooth. Pour over the layers in the casserole dish',
                '5. Bake, uncovered for 45 minutes. Let stand 5 minutes before slicing. '
            ]
        },
        {   id: '16',
            title: 'Bacon Avocado Basil Omelet',
            preptime: '10 Minutes',
            servings: '2',
            ingredients: [
                '4 slices bacon',
                '1 avocado',
                '2 tbsp mined red onion',
                '4 tbsp fresh basil chopped',
                '1 tbsp minced fresh cilantro',
                '1 dash hot sauce',
                '4 eggs',
                'Salt',
                'Pepper'
            ],
            directions: [
                '1. Cook bacon until crisp.',
                '2. While bacon is cooking, cut avocado in half, remove the pit, and scoop into a bowl.',
                '3. Mash avocado up, leaving some texture.',
                '4. Add onion, cilantro and basil to avocado.',
                '5. Once bacon is done, drain and chop it, stir in with avocado mixture.',
                '6. Whip eggs, whisking avocado mixture into eggs, along with salt and pepper.',
                '7. Cook omelets, one at at aime, top with hot sauce.'
            ]
        },
        {   id: '17',
            title: 'Paleo Breakfast Wraps',
            preptime: '15 Minutes',
            servings: '5-8',
            ingredients: [
                '8-12 oz leftover chicken, diced or shredded',
                'Ten eggs',
                'Six tablespoons almond flour',
                'Three tablespoons arrowroot powder',
                'One teaspoon garlic powder',
                'Sea salt',
                'Black pepper',
                'Butter lettuce, 3-6 leaves',
                '1 tomato, sliced',
                '1 avocado, peeled and sliced',
                '4 tablespoons coconut oil or fat of choice'
            ],
            directions: [
                '1. Heat a large pan on the stove and whisk eggs in a bowl. Add remaining crepe ingredients.',
                '2. Spread coconut oil or butter around the pan and add a couple spoonfuls of crepe batter. ',
                '3. Spread batter around and let cook.',
                '4. Flip the crepe (this should be really easy to do) and let cook on the other side (about a minute). ',
                '5. Transfer to a plate and repeat with remaining batter.',
                '6. nce you\'ve made your crepes, fill with chicken, lettuce, tomato, bacon, or whatever it is you feel like having in your wrap.',
                '7.  Wrap it up and enjoy!'
            ]
        },
        {   id: '18',
            title: 'Chicken Fajita Frittata',
            preptime: '15 Minutes',
            servings: '4',
            ingredients: [
                '4 tablespoons fat of choice',
                '1 red onion, diced',
                '1 red bell pepper chopped',
                '12-16oz leftover or cooked chicken',
                '2 green onions, sliced',
                '1/2 handful of cilantro, chopped',
                '1/2 c salsa,',
                '1/4 cup fresh basil',
                '6-8 eggs',
                'Salt',
                'Black pepper'
            ],
            directions: [
                '1. Preheat your oven to 375ºF.  ',
                '2. Heat a large cast-iron or non-stick pan over medium-high heat.',
                '3. Melt your fat of choice and add the red onion and bell pepper. ',
                '4. Let them soften up and maybe even brown just a little.',
                '5. Add the chicken to the pan and let it sit on the bottom of a pan for a while.',
                '6. Now stir in the green onions, cilantro and salsa.',
                '7. Turn heat off.',
                '8. In a medium bowl, whisk together the eggs with a pinch of salt.',
                '9. Pour the eggs over the chicken & veggie mixture.',
                '10. Using the residual heat from the range, take a spatula and stir everything around until you see about 1/4 of the egg cooked.',
                '11. Place the pan in the oven and bake until the eggs are cooked through–about 10 minutes.',
                '12. Remove, slice and enjoy! (You may want to let it cool for a few minutes)'
            ]
        },
        {   id: '19',
            title: 'Breakfast Chili',
            preptime: '20 Minutes',
            servings: '6',
            ingredients: [
                '1 lb ground chicken ',
                '1/2 yellow onion, finely diced',
                '1 (28 oz) can crushed tomatoes',
                '2 to 3 cups chicken stock',
                '2 medium sweet potatoes, peeled & diced small',
                '1 tablespoon paprika',
                '4 cloves garlic, minced',
                '2 teaspoons chili powder',
                '1 teaspoon onion powder',
                '2 tablespoons lime juice',
                '2 tablespoons hot sauce',
                '2 teaspoons smoked paprika',
                'Salt',
                'Black pepper',
                '1/2lb bacon',
                '6 eggs',
                '1/4 to 1/2 avocado per serving'
            ],
            directions: [
                '1. In a large soup pot, brown the meat and and saute the onions until cooked through',
                '2. Add in the tomatoes, sweet potatoes and stock, followed by all the spices. ',
                '3. Let simmer until the sweet potatoes have cooked through, about 20-30 minutes.',
                '4. Chop up and saute the bacon until crispy. Reserve until ready to serve. ',
                '5. Fry or scramble one egg for each person you plan on serving.',
                '6. Serve by scooping the chili in a bowl, top with the fried/scrambled egg, some crispy bacon & some avocado slices.'
            ]
        }
    ];
    return {
        all: function() {
            return recipes;
        },
        get: function(recipeId) {
            // Simple index lookup
            return recipes[recipeId];
        }

    };
});