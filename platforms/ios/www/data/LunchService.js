var lunch = angular.module('ionicApp');

lunch.factory('LunchService', function() {
    var recipes = [
        {   id: '0',
            title: 'Salsa Smothered Chicken Breasts',
            preptime: '45 Minutes',
            servings: '2',
            ingredients: [
                '2 pcs chicken thighs',
                '2 tbsp coconut oil',
                '1 red onion, diced',
                '1 can of organic diced tomatoes, drained',
                '1 jar of organic salsa of your choice',
                '1 tbsp cumin powder',
                '1/2 tbsp paprika',
                'Pinch of sea salt',
                'Pinch of black pepper'],
            directions: [
                '1. Grease pressure cooker with coconut oil.',
                '2. Rub chicken with sea salt and brown each side in a hot pan.',
                '3. Once ready, remove from heat and saute onions in the same pan.  Add tomatoes, cumin, salsa, paprika, and pepper.',
                '4. Pour sauce in pressure cooker and add chicken.',
                '5. Cover and cook on high for about 15-20 minutes.'
            ]
        },
        {   id: '1',
            title: 'Chicken and Arugula Roll-ups',
            preptime: '20 Minutes',
            servings: '3-4',
            ingredients: [
                '4 chicken breasts, sliced in half',
                '3 carrots, cut into thin strips',
                '3 zucchini, cut into thin strips',
                '1 bunch arugula',
                '3 tbsp olive oil',
                '1/2 tsp sea salt',
                'Sprig of fresh rosemary, diced',
                'Sea salt and black pepper, for seasoning',
                '8 slices of bacon',
                '1/2 cup of chicken broth'],
            directions: [
                '1. Set oven to 350 degrees.',
                '2. Flatten chicken using a mallet.',
                '3. Coat vegetables with olive oil, pepper, salt, and diced rosemary.',
                '4. Assemble chicken by placing arugula, a strip of zucchini and a strip of carrot at the end of the chicken and rolling tightly.',
                '5. Wrap bacon around the chicken and secure with toothpick.',
                '6. Arrange chicken on a baking dish and pour chicken broth over it.',
                '7. Place in the oven and cook for 45 minutes or until chicken is cooked through.'
            ]
          },
        {   id: '2',
            title: 'Chipotle Chicken with Mango Mayo',
            preptime: '30 Minutes',
            servings: '2-4',
            ingredients: [
                '5 bacon strips, diced',
                '1/2 cup red bell pepper, diced',
                '1 jalapeno, seeds removed and diced',
                '3 cups chicken, cooked and diced',
                '1 cup mango, diced',
                '1/2 cup paleo-friendly mayo',
                '1/2 tsp chipotle powder',
                'Shredded romain lettuce',
                'Almonds, sliced'],
            directions: [
                '1. Fry bacon until crisp. Add red pepper and jalapeno and cook until vegetables are tender.',
                '2. Add chicken and diced mango. Mix thoroughly.',
                '3. In a separate bowl, whisk chipotle powder with paleo-friendly mayo.',
                '4. Place shredded lettuce on a plate and top with mango mixture. Add a dollop of chipotle-mayo.',
                '5. Add a sprinkle of almonds, and enjoy!'
            ]
        },

        {   id: '3',
            title: 'Baked Chicken with Sun-dried Tomatoes',
            preptime: '30 Minutes',
            servings: '4-6',
            ingredients: [
                '2 lbs chicken breasts, deboned and skinless',
                '8 oz can of sundried tomatoes',
                '8 garlic cloves, thinly sliced',
                '2 tbsps dried basil',
                'Sea salt',
                'Black pepper',
                '2 tbsp olive oil'],
            directions: [
                '1. Set oven to 375 degrees.',
                '2. In a baking dish, place the chicken and rub dry spices onto it.',
                '3. Add garlic and smother chicken with sun dried tomatoes and olive oil.',
                '4. Cover with tin foil and bake for 15 - 20 minutes.'
            ]
        },
        {   id: '4',
            title: 'Easy Chicken and Cabbage Salad',
            preptime: '5 Minutes',
            servings: '4-6',
            ingredients: [
                '4 chicken breasts, cooked and diced',
                '4 eggs, hard boiled and diced',
                '1/2 head of purple cabbage, shredded',
                '1 cucumber diced',
                '1/2 head of broccoli or broccolini, finely chopped',
                'Handful of sliced almonds',
                '1/4 cup of parsley, diced',
                '1 cup of olive oil',
                'Splash of balsamic vinegar',
                '1/8 cup spicy brown mustard',
                'Dried dill',
                'Black pepper',
                'Sea salt'],
            directions: [
                '1. Mix all ingredients together in a bowl.',
                '2. Make sure chicken is well coated with dressing, and enjoy!'
            ]
        },
        {   id: '5',
            title: 'Bacon Arugula Chicken Salad',
            preptime: '15 Minutes',
            servings: '4',
            ingredients: [
                '4 chicken breast, cooked and diced',
                '2 cups cabbage, shredded',
                '6 cups arugula',
                '1 apple, diced',
                '6 strips bacon, diced',
                '3 tbsp rosemary',
                '4 1/2 oz sun dried tomatoes with olive oil, julienned',
                '3 green onions, diced',
                '1/2 lemon, juiced',
                '1/4 cup olive oil',
                'Black pepper'],
            directions: [
                '1. Mix arugula, apple, onions, and cabbage with chicken and bacon.',
                '2. Mix well before adding sun dried tomatoes, rosemary, olive oil, and black pepper.',
                '3. Squeeze lemon juice and toss all ingredients together.'
            ]
        },
        {   id: '6',
            title: 'Paleo Chicken Lettuce Wraps',
            preptime: '35 Minutes',
            servings: '4',
            ingredients: [
                '16 Boston lettuce leaves',
                '1 pound ground chicken',
                '5 ounces shiitake mushrooms, finely diced',
                '1/3 cup scallions, chopped',
                '4-6 cloves of garlic, minced',
                '1 tablespoon fresh ginger, minced',
                '1 tablespoon sesame oil',
                '1/4 cup slivered almonds',
                '1 teaspoon white wine vinegar',
                '1 tablespoon Dijon mustard',
                '1 tablespoon Sriracha (or preferred hot sauce)',
                '1 tablespoon honey',
                '1/4 teaspoon sea salt',
                '1 - 2 tablespoons coconut aminos'],
            directions: [
                '1. In a skillet, heat sesame oil on medium heat. Add ground chicken. Cook until almost done.',
                '2. Add mushrooms, scallions, and ginger. Cook until onions and mushrooms are limp. Stir in garlic, almonds, white wine vinegar, coconut aminos, mustard, Sriracha, honey and salt.',
                '3. Serve the chicken mixture in a bowl with the lettuce cups on the plate. Let your guests spoon the mixture in the center of the leaves and then hold like a soft taco to eat.'
            ]
        },
        {   id: '7',
            title: 'Grilled Chicken with Asparagus & Eggplant',
            preptime: '30 Minutes',
            servings: '2-4',
            ingredients: [
                '1 bunch of asparagus',
                '2 small eggplant, peeled and sliced',
                'Avocado or olive oil',
                '4 chicken breasts',
                '2 egg yolks',
                '2 teaspoons water',
                '2 teaspoons freshly squeezed lemon juice (about 1/2 lemon)',
                '5 tablespoons organic butter or ghee, cut into pieces',
                '1 tablespoon Dijon mustard',
                '1 cup grape tomatoes, halved',
                'Balsamic vinegar (to drizzle)'],
            directions: [
                '1. Preheat oven to 350 degrees F.',
                '2. On a baking sheet lined with parchment paper, place eggplant.  Drizzle with preferred oil (or alternately, place eggplant in a bowl and toss with a little oil).  Bake for 10 minutes.  Flip eggplant and cook for an additional 7 - 10 minutes.  Depending on how thick you cut your eggplant, check if more or less time is needed for baking.',
                '3. Heat and lightly grease your grill or grilling pan. Pound out your chicken breasts to about 1/2 inch thickness.  Season with salt and pepper on each side.  Cook your chicken for about 3-4 minutes per side until cooked.',
                '4. Start your Dijon Hollandaise Sauce.  In a double-boiler, place the egg yolks, water, and lemon juice over medium heat.  Whisk in butter pats one at a time until sauce thickens.  Whisk in Dijon mustard.',
                '5. Plate chicken.  Arrange steamed asparagus and drizzle with hollandaise.  Sprinkle with optional smoked paprika.',
                '6. Arrange some eggplant slices and then garnish with sliced tomatoes, and balsamic vinegar.'
            ]
        },
        {   id: '8',
            title: 'Buffalo Chicken Tenders',
            preptime: '40 Minutes',
            servings: '4-6',
            ingredients: [
                '2 lbs boneless, skinless chicken breast',
                '1/2 cup cider vinegar',
                '1/2 cup water',
                '3 tbsp cayenne pepper',
                'Dried oregano',
                'Garlic powder',
                'Ground Cumin',
                'Chili Powder'],
            directions: [
                '1. Cut the chicken into strips/medium sized pieces&#8211;I usually get about 4-5 small strips out of each piece.',
                '2. Place the chicken in a large ziplock bag, and add the vinegar, water, and cayenne pepper. Mix around so the cayenne distributes evenly in the liquid, then seal the bag, and place in the fridge for about 40 minutes.',
                '3. Preheat oven to 350F.',
                '4. Arrange the chicken pieces on a large baking sheet. Liberally sprinkle the remaining seasonings over the chicken pieces. Flip the pieces over, and sprinkle the other side with the seasonings.',
                '5. Bake for about 20 minutes or until done.']
        },
        {   id: '9',
            title: 'Pecan Pesto Stuffed Chicken',
            preptime: '15 Minutes',
            servings: '2',
            ingredients: [
                '2 large chicken breasts',
                '1/3 cup Pecans, chopped and roasted',
                '3 oz fresh basil leaves',
                '2 cloves garlic',
                '2 tbsps extra virgin olive oil',
                '1 tsp dried rosemary leaves',
                'Sea salt and black pepper'],
            directions: [
                '1. Using a small food processor, blend together the pecans, basil, oil and garlic until a chunky paste.',
                '2. Butterfly each chicken breast (make a slit through the meat then fold it open). Cover and beat with a heavy object until the breast is somewhat flattened.',
                '3. Put a tbsp of pesto in each breast, lining it along the ‘seam’ and then rolling over the top part like a flap. Make sure the chicken seals over the pesto and there’s none poking out.',
                '4. Season the chicken well, sprinkle over the rosemary and bake at 375 for 30-35 minutes.'
            ]
        },
        {   id: '10',
            title: 'Lemon Garlic Chicken Breast',
            preptime: '10 Minutes',
            servings: '2',
            ingredients: [
                '3 boneless, skinless chicken breasts',
                '3 cloves garlic',
                '2 small lemons',
                '1-2 tablespoons cooking oil',
                'salt and pepper'],
            directions: [
                '1. Warm cooking oil in a pan over medium heat. Crush and chop garlic. Add the garlic to the oil and cook for about a minute.',
                '2. Slice the lemons and add about half of the slices to the bottom of the pan. Salt and pepper both sides of the chicken breasts and lay them on top of the garlic/lemon slices in the bottom of the pan. Top the chicken breasts with the rest of the slices.',
                '3. Cover the pan with a lid and turn down to medium low. Cook until the chicken breasts are cooked through, turning once. The amount of time this will take will depend on how thick the chicken breasts are. Just keep an eye on them. But try not to open the lid too many times because you\'ll let the moisture out.',
                '4. Once they\'re cooked through, take the lid off and turn up to medium. Let cook for a minute or two on each side to brown them a little.',
                '5. Once they\'re done, either serve and enjoy, or slice them up and store in the fridge to serve later!'
            ]
        },
        {   id: '11',
            title: 'Bacon Wrapped Stuffed Chicken Breasts',
            preptime: '30 Minutes',
            servings: '4',
            ingredients: [
                '2 large skinless, boneless chicken breasts (450g each)',
                '¼ tsp sea salt',
                '10 slices bacon',
                'Stuffing: 1/2 can artichoke hearts. 1/2 cup sliced water chestnuts chopped. 50g sundried tomatoes. 1/4 cup pine nuts. 1 large clove garlic, minced. 1 tsp fresh rosemary, finely chopped. 1/2 tsp smoked paprika. '],
            directions: [
                '1. First, make the stuffing by mixing all the ingredients in a small mixing bowl. Set aside.',
                '2. Preheat oven to 375F.',
                '3. Slice your chicken breasts open. To do that, place the blade of your knife parallel to your cutting board, put your hand flat on top of the breast and carefully slice down the middle almost all the way to the end. You’ll want to stop about ¾ of the way through.',
                '4. Lay the chicken breasts open on a cutting board and, with a meat mallet or small saucepan, delicately pound them until they’re about ½ inch thick.',
                '5. Place your now flat chicken breasts on your cutting board, sprinkle with salt and deposit half the stuffing in the middle of each breast. Spread the stuffing as evenly as possible but don\'t go all the way to the edge; you want to leave about one inch all around.',
                '6. Roll the breasts as tightly as you can then carefully wrap each one with the bacon strips.',
                '7. Place the breasts seam side down in a baking dish, cover with aluminum foil and bake at 375F for 40 minutes.',
                '8. Remove foil, drain pan juices (do not discard) and return to the oven, uncovered, for 15-20 minutes or until bacon is crispy.',
                '9. If you want your bacon really crispy, you can set your oven to broil for the final 5 minutes or so. ',
                '10. Remove from oven, and let the meat rest for 10-15 minutes before slicing.'
            ]
        },
        {   id: '12',
            title: 'Go-to Marinated Chicken Breasts',
            preptime: '5 Minutes Plus Time Spent Marinating (1 - 24 hours)',
            servings: '4',
            ingredients: [
                '1/4 cup olive oil',
                '1/4 cup balsamic vinegar',
                '2 cloves garlic, minced',
                '1 tbsp fresh basil',
                'Salt and pepper',
                '4 chicken breasts'],
            directions: [
                '1. In a large zip lock bag combine the olive oil, balsamic vinegar, garlic, basil, salt and pepper and mix well',
                '2. Add the chicken breasts and seal, mixing to coat',
                '3. Place in the refrigerator for 1-24 hours',
                '4. Preheat oven to 400F',
                '5. Place the chicken in a baking dish and bake for 25 minutes'
            ]
        },
        {   id: '13',
            title: 'Go-to Basic Avocado Grilled Chicken Salad',
            preptime: '10 Minutes',
            servings: '1',
            ingredients: [
                '2½-3 c. loosely packed mixed salad greens of your choosing',
                '5 thin slices cucumber',
                '¼ small carrot, sliced thinly (optional)',
                '3 cherry tomatoes, sliced',
                '3 oz. grilled chicken breast, sliced thin',
                '1½ teaspoon Balsamic Vinaigrette',
                '1/4 avocado, sliced'],
            directions: [
                '1. Cut up and plate the salad greens, carrot, tomatoes, avocado and cucumbers.',
                '2. Slice and add the grilled chicken.',
                '3. Top with the dressing and serve.'
            ]
        },
        {   id: '14',
            title: 'Orange Chicken Almond Salad',
            preptime: '15 Minutes',
            servings: '3-4',
            ingredients: [
                '1lb chicken breasts',
                '2 scallions',
                '3 tbs pumpkin seeds (optional)',
                '1tbs tamari',
                '3tbs almonds',
                '8oz watercress',
                '1 orange',
                '3tbs olive oil',
                '2tbs raspberry vinegar (any vinegar will work)',
                '1tbs mustard',
                'Sea salt',
                'Black pepper'
            ],
            directions: [
                '1. Place a pan over medium heat, add a splash of fat of your choice and throw in the pumpkin seeds, once they start popping quench them with the tamari and set aside.',
                '2. Grate the peel of the orange untill you have about 1tbs, cut the scallions up and halve the almonds.',
                '3. In the same pan, fry the chicken together with the scallions, orange peel and almonds, add some extra spices if you like, garlic, chili powder, or lemongrass go nicely with it.',
                '4. When the chicken is almost done add the pumpkin seeds back in, together with the cut up orange flesh.',
                '5. For the Dressing: whisk the olive oil, mustard, vinegar, pepper and salt together.',
                '6. Arrange the watercress on plates, drizzle some of the dressing over it, dump the chicken mix over it, add some more dressing.'
            ]
        },
        {   id: '15',
            title: 'Crunchy Almond Chicken Veggie Bowl',
            preptime: '20 Minutes',
            servings: '2',
            ingredients: [
                '8 - 12 oz chicken breast',
                '2-3 small turnips, diced',
                '1 carrot, diced',
                '1 zucchini, diced',
                '4-5 collard green leaves',
                '1 small to medium onion',
                '1 teaspoon smoked paprika',
                '1 clove of garlic, minced',
                'Handful of raw almonds',
                '3 tablesppons olive oil',
                'Sea salt',
                'Black pepper',
                '1 teaspoon of favorite spice blend'
            ],
            directions: [
                '1. Chop the onion and dice the carrot, zucchini and turnips in small cubes.',
                '2. Cut the chicken breast in strips. Drizzle olive oil in a pan on high heat, add the chicken pieces and cook for 6-8 minutes, turning the heat down to medium halfway through and stirring frequently. Add the paprika, stir to coat, then remove the chicken from the heat and transfer to a plate',
                '3. Return the pan to the heat, add in some more olive oil and cook the onion for 4-5 minutes. Add in the diced root vegetables, the minced garlic and the spice blend, salt and pepper and continue cooking until the vegetables are tender, about 10-15 minutes.',
                '4. Chop the collard greens into strips. I remove the end of the stem, roll the leaves into a bundle and slice them with a knife cross-wise.  When the vegetables are almost done, add the collard greens and stir constantly until they have reduced.',
                '5. Add the chicken back in, stir to combine and top with a handful of coarsely chopped almonds. Serve right away.'
            ]
        },
        {   id: '16',
            title: 'Paleo Butter Chicken',
            preptime: '20 Minutes',
            servings: '2',
            ingredients: [
                '8 - 12 ounces chicken breast cut into cubes',
                '1 large onion, diced',
                '3 tomatoes, pureed',
                '1 teaspoon coriander powder',
                '1 teaspoon chili powder',
                '1/2 teaspoon turmeric powder',
                '1 teaspoon garam masala',
                '1 teaspoon ginger and garlic paste mixed',
                'Sea salt to taste',
                '1 teaspoon ghee / butter',
                '1 bay leaf for flavor',
                '1 cup coconut milk'
            ],
            directions: [
                '1. Wash and marinate the chicken with ginger garlic paste , turmeric , salt, coriander powder , chili powder and garam masala for 30 minutes in a fridge.',
                '2. In a pan add the ghee , bay leaf , onions and fry them until the onions turn golden brown.',
                '3. Add the marinated chicken into the onions and fry them for 5 minutes.',
                '4. Add the tomato puree and coconut milk and let the chicken cook for 10 to 12 minutes.',
                '5. Garnish with onion and a dollop of butter.'
            ]
        },
        {   id: '17',
            title: 'Chicken Curry Stir Fry',
            preptime: '15 Minutes',
            servings: '2-4',
            ingredients: [
                '2 cooked chicken breasts, chopped',
                '3 carrots, chopped',
                '3 sticks celery, chopped',
                '1-2 heads broccoli, chopped',
                '1/2 medium onion, chopped',
                '2 cloves chesnok red garlic (or other varieties)',
                '1/2c coconut milk',
                '1/2c almond or other alternative milk ',
                '1 tbsp turmeric',
                '2 tbsp curry powder',
                '3 tbsp coconut oil'
            ],
            directions: [
                '1. Put coconut oil in pan and add chopped onion. Cook until onion softens up, add garlic and cook for an additional few minutes. ',
                '2. Add carrots, celery, and broccoli. Cook until softened (but are not fully cooked)',
                '3. Add chicken, coconut milk, other milk, and curry spices.',
                '4. Stir everything together,cook for 5-10 minutes or until cooked to your liking, and serve hot.'
            ]
        },
        {   id: '18',
            title: 'San Diego Burrito Bowl',
            preptime: '10 Minutes',
            servings: '4 - 6',
            ingredients: [
                '3-4 boneless skinless chicken breasts (pre-cooked)',
                '1/2 cup salsa of your choice',
                '1 teaspoon cumin',
                '1 teaspoon chili powder',
                '12-15 ounces of lettuce, spinach or a mix',
                '1 tomato',
                '2 avocados',
                '1 lime',
                'Daiya dairy free cheese'
            ],
            directions: [
                '1. Place chicken in skillet.',
                '2. Sprinkle chicken with the cumin/chili powder, pour salsa over and squeeze half of the juice of the lime over it.',
                '3. Saute over medium heat until cooked.',
                '4. While chicken is heating, make guacamole by mashing the flesh of two avocados with 1 cup of salsa and a teaspoon of lime juice. ',
                '5. Assemble any other toppings you are serving. ',
                '6. Serve chicken atop a bed of lettuce with any desired toppings.'
            ]
        },
        {   id: '19',
            title: 'Creamy Bacon Chicken Bowl',
            preptime: '10 Minutes',
            servings: '4',
            ingredients: [
                '4 oz bacon, chopped',
                '1 onion, chopped',
                '2 leeks, chopped',
                '1 package mushrooms, halved',
                '1 red bell pepper, diced',
                '2 chicken breasts, diced',
                '1/4 to 1/2 cup white wine',
                '14oz coconut milk',
                '1 tablespoon arrowroot powder dissolved in the reserved 1/4 cup of coconut milk (optional)'
            ],
            directions: [
                '1. Heat a large frying pan over medium high heat.',
                '2. Add the chopped bacon and fry until crispy, set aside in a large bowl, and drain off all but 2 TBS bacon fat.',
                '3. Add the onion and leeks to the pan and cook for 4 minutes or until the onion starts become cooked',
                '4. Add chicken, mushrooms, cooked bacon and red bell pepper. Cook for another 5 minutes.',
                '5. Add white wine and cook until wine is reduced by 3/4',
                '6. Add all but a ¼ cup of the coconut milk.',
                '7. Add the TBS of arrowroot to the ¼ cup of reserved coconut milk and cook until thickened. If too thick, you can add a splash of water to thin it out a little.',
                '8. Season with salt and pepper.',
                '9. Serve hot, enjoy!'
            ]
        },
        {   id: '20',
            title: 'Go-to Paleo Chicken Caesar',
            preptime: '20 Minutes',
            servings: '4',
            ingredients: [
                '1-2 heads romaine lettuce',
                '1 pound chicken breast, diced and cooked',
                '¼ cup pine nuts',
                'Fresh cracked pepper, to taste',
                '2 cloves garlic',
                '2 egg yolks',
                '½ cup olive oil',
                '¼ cup water',
                'Juice of 1 lemon',
                '1 teaspoon sea salt',
                '½ teaspoon black pepper'
            ],
            directions: [
                '1. Clean and chop lettuce.',
                '2. In a medium sized salad bowl, layer chopped romaine lettuce, chopped chicken, ¼ cup pine nuts, and fresh cracked pepper to taste.',
                '3. In a blender, mix together garlic, ¼ cup pine nuts, egg yolks, olive oil, water, lemon juice, sea salt, and black pepper.',
                '4. Drizzle half of the dressing over the salad and toss. Taste and add more dressing if desired.',
                '5. Serve immediately or chill in the refrigerator.'
            ]
        },
        {   id: '21',
            title: 'Paleo Double Down Sandwich',
            preptime: '10 Minutes',
            servings: '4',
            ingredients: [
                '4 large chicken breasts',
                '1 teaspoon olive oil',
                '¼ teaspoon dill',
                '¼ teaspoon garlic powder',
                '¼ teaspoon onion powder',
                '¼ teaspoon sea salt',
                '12 pieces bacon',
                '1 cup iceberg lettuce, shredded',
                '1 tomato, sliced',
                '1 red onion, sliced',
                '4 tablespoons Chipotle Mayonnaise'
            ],
            directions: [
                '1. Fillet each chicken breast.',
                '2. Pour the olive oil in a large frying pan and heat it to high heat. ',
                '3. Season the chicken fillets with dill, garlic powder, onion powder, and sea salt.',
                '4. Cook each fillet 4-6 minutes per side.',
                '5. Fry the bacon until crisp. ',
                '6. Prepare the chipotle mayonnaise.',
                '7. Blot any excess moisture off the chicken with a paper towel then spread a tablespoon of the mayo on a chicken breast. ',
                '8. Top with bacon, tomato, onion, and lettuce. Then sandwich it with a second chicken fillet.'
            ]
        },
        {   id: '22',
            title: 'Bangin Oriental Chicken Salad',
            preptime: '20 Minutes',
            servings: '4',
            ingredients: [
                '1 1/2 lb chicken breast, diced and cooked',
                '¼ cup red cabbage, sliced',
                '¼ cup green cabbage, sliced',
                '¼ white onion, thinly sliced',
                '1 small carrot, minced',
                '2 celery stalks, diced',
                'Chopped green onions for garnish',
                '3-4 tablespoons sliced almonds for garnish',
                'Oriental Mayo: 2/3 cup avocado oil. 2 egg. 2 teaspoon lemon juice. 1/4 teaspoon garlic powder. 1/4 teaspoon salt. 1/4 teapsoon pepper. 1 teapoon sesame oil. 1 tablespoon sriracha. 1 teaspoon honey. 1/2 teaspoon coconut aminos'
            ],
            directions: [
                '1. In a container, add egg, lemon juice, dijon mustard, garlic powder, and a bit of salt and pepper.',
                '2. Place an immersion blender to the bottom of the container, turn on and wait until the mixture thickens. You may need to raise the immersion blender a bit to help mix all of the oil.',
                '3. If no immersion blender available, mix in food processor.',
                '4. Place in refrigerator to cool.',
                '5. While the mayo cools, mix together the chicken, cabbage, onion, carrot, and celery in a large bowl.',
                '6. Then place sliced almonds in a small skillet over medium heat. They will need to toast for about 5-7 minutes until slightly browned.',
                '7. Add all of the mayo to the chicken salad ingredients and mix well.',
                '8. Garnish with toasted almonds and green onions.'
            ]
        },
        {   id: '23',
            title: 'Albuquerque Chicken Salad',
            preptime: '10 Minutes',
            servings: '2-3',
            ingredients: [
                '1 pound chicken breast, diced and cooked',
                '4 stalks of celery, finely chopped',
                '¼ white onion, finely chopped',
                'Albuquerque Mayo: ⅔ cup avocado oil. 1 egg. 1 teaspoon lemon juice. 1 teaspoon chipotle adobo sauce or sriracha. 1/4 teaspoon cayenne. 1/4 teaspoon garlic powder. Salt and pepper to taste.'
            ],
            directions: [
                '1. Mix together chopped chicken, celery, and white onion.',
                '2. Place all mayo ingredients in a container, put immersion blender to the bottom of the container and turn on. Keep immersion blender on until the oil turns to a white color and into mayo. Should take just a little over 30 seconds.',
                '3. Mix mayo ingredients in food processor if no immersion blender is available.',
                '4. Mix mayo with chicken, celery and onio',
                '5. Enjoy!'
            ]
        },
        {   id: '24',
            title: 'Kale Herb Chicken Burgers',
            preptime: '25 Minutes',
            servings: '2-4',
            ingredients: [
                '1 pound ground chicken',
                '1/4 cup parsley, chopped',
                '1/5 cups kale, chopped',
                '1/2 onion, diced',
                '2 garlic cloves, minced',
                '1 teaspoon died thyme',
                '1 teaspoon dried basil',
                '1 teaspoon garlic powder',
                '1 avocado, sliced',
                'Sea salt',
                'Pepper',
                'Carmelized Onions: 1 large yello onion, thinly sliced. 2 tablespoons coconut or avocado oil. 1 tablespoon water. Sea salt to taste.'
            ],
            directions: [
                '1. Place a saucepan over medium heat along with the oil and sliced onions for your caramelized onions.',
                '2. Let onions begin to cook down, moving them around at times to make sure they don’t stick. When onions begin to brown slightly, pour in a tablespoon of water to help steam and cook the onions perfect.',
                '3. While onions cook down, in a large bowl, add all the ingredients for your burgers (parsley, kale, onion, garlic, thyme, basil, garlic powder, salt & pepper) and use your hands to mix.',
                '4. Form 3 - 4 burgers with your hands',
                '5. Place a non-stick large skillet over medium heat. Once skillet is hot, place a couple of your burgers onto the skillet then press down with a spatula to flatten out.',
                '6. Cook on both sides for 6-8 minutes, flipping a couple of times.',
                '7. Once burgers are done cooking, top with onions and avocado'
            ]
        },
        {   id: '25',
            title: 'Quick Paleo Chicken Salad',
            preptime: '10 Minutes',
            servings: '2',
            ingredients: [
                '2 cooked chicken breasts (cubed)',
                '2 celery stalks (chopped)',
                '1/2 cup pecans (chopped)',
                '1/2 cup dried cranberries',
                '1/3 cup paleo mayonnaise',
                '1 teaspoon poppyseeds',
                '1 tablespoon apple cider vinegar',
                '1 tablespoon honey'
            ],
            directions: [
                '1. Combine all ingredients in a bowl and mix together!'
            ]
        },
        {   id: '26',
            title: 'Easy Everything Chicken Salad',
            preptime: '20 Minutes',
            servings: '4',
            ingredients: [
                '4 chicken breasts, cooked and diced',
                '4 hard boiled eggs, cooled and diced',
                '1/2 head of purple cabbage, diced',
                '1 English cucumber, diced',
                '1/2 head broccoli, finely chopped',
                'Handful of sliced almonds',
                '1/4 cup of parsley, diced',
                '1/4 cup olive oil',
                'Splash of balsamic vinegar',
                '1 tablespoon spicy mustard',
                '1 teaspoon black pepper',
                '1/4 teaspoon sea salt'
            ],
            directions: [
                '1. Toss all ingredients together and eat!'
            ]
        },
        {   id: '27',
            title: 'Bacon Wrapped Chicken Strips',
            preptime: '15 Minutes',
            servings: '6',
            ingredients: [
                '2 pounds boneless, skinless chicken breasts',
                'Sea salt',
                'Ground pepper',
                'Garlic powder',
                '2 packages bacon',
                '1/3 cup honey',
                '1/2 cup prepared mustard',
                '3 tbsp apple cider vinegar',
                '2 tablespoons sriracha'
            ],
            directions: [
                '1. Preheat oven to 400F.',
                '2. Sprinkle chicken breasts lightly with sea salt, ground pepper and garlic powder.',
                '3. Slice chicken strips to about 1 1/2 inches thick and wrap in bacon. Place each on a wire rack and place rack over a baking pan wrapped in aluminum foil to catch drippings.',
                '4. Mix the raw honey, mustard, vinegar and sriracha in a small mixing bowl until combined.',
                '5. Baste the top of the chicken strips with the honey mustard mixture and place in the oven for about 12-15 minutes. ',
                '6. Remove the pan from the oven and flip over the chicken strips with a pair of kitchen tongs. ',
                '7. Baste the other side of the strips with the mixture and return to the oven for another 12-15 minutes or until bacon is crispy. ',
                '8. Remove from oven and serve.'
            ]
        },
        {   id: '28',
            title: 'Paleo Chicken Slaw',
            preptime: '10 Minutes',
            servings: '3-4',
            ingredients: [
                '3 cups cooked chicken, diced',
                '2 cups broccoli slaw',
                '1/2 cup cucumber, diced',
                '1 cup diced jicama',
                '1/2 cup paleo mayo',
                '1 tablespoon balsamic vinegar',
                '1 teaspoon paprika',
                '1/2 teaspoon chili powder',
                'Pinch of cayenne pepper'
            ],
            directions: [
                '1. Mix all ingredients together and enjoy! '
            ]
        },
        {   id: '29',
            title: 'Chicken Nuggets',
            preptime: '10 Minutes',
            servings: '4',
            ingredients: [
                '1.5 lbs chicken breast, sliced into nugget sized chunks',
                '2 cups almond meal flour ',
                '1/2 tsp italian seasoning',
                '1/4 tsp sea salt',
                '1/4 tsp pepper',
                '1/2 tsp garlic powder',
                '4 eggs',
                '2 tablespoons coconut oil or fat of choice'
            ],
            directions: [
                '1. In a bowl, place almond flour, italian seasoning, sea salt, and garlic powder then mix thoroughly.',
                '2. In another bowl, whisk 4 eggs until mixed well.',
                '3. Take a strip of chicken and dip it in the egg mixture.',
                '4. Put the chicken in the flour mixture.',
                '5. Brush flour mixture over the chicken and egg.',
                '6. Shake off excess',
                '7. After the strips have each been dipped in egg and flour twice, lightly shake the excess again and place them on a greased wire rack over a cookie sheet or onto a greased broiler pan.',
                '8. Bake at 450 degrees for about 20minutes, remove and enjoy!'
            ]
        },
        {   id: '30',
            title: 'Buffalo Greek Caesar Salad',
            preptime: '20 Minutes',
            servings: '2-3',
            ingredients: [
                '1 lb chicken, chopped in ½” cubes',
                '3 tablespoons oil of choice',
                '4 tablespoons hot sauce of choice',
                '1 teaspoon cajun seasoning',
                '½ cup paleo mayo',
                '2 tablespoons white wine or apple cider vinegar',
                '6 cloves roasted garlic or 1 teaspoon granulated garlic',
                '1/2 teaspoon salt',
                '1 teaspoon pepper',
                '2 heads romaine, chopped',
                'Kalamata olives',
                '8 oz mushrooms, sliced thin'
            ],
            directions: [
                '1. Heat 2 tablespoons oil in pan and add chicken, cook until brown on outside and cooked all the way through.',
                '2. When almost cooked, add hot sauce and cajun seasoning, mix well and leave in pan until ready to serve.',
                '3. Peel the garlic cloves and place in a piece of foil, drizzle with olive oil and crumple the foil into a pouch shape. Roast the garlic in a 400°F oven until golden brown (about 10 minutes). ',
                '4. Add mayo, garlic, vinegar, 1/4 teaspoon salt and 1/2 teaspoon pepper into food processor and blend until smooth.',
                '5. Clean mushrooms, saute in separate pan with 1 tablespoon oil until soft.',
                '6. Serve romaine topped with sauteed mushrooms, diced red pepper, olives, buffalo chicken and garlic dressing.'
            ]
        },
        {   id: '31',
            title: 'Ethiopian Chicken Salad',
            preptime: '15 Minutes',
            servings: '2',
            ingredients: [
                '1 lb. chicken breasts, sliced in 1/2 width wise and pounded thin with a meat mallet',
                '3 oz. arugula',
                '1/3 c oil cured olives, pitted',
                '3 oranges supremed',
                '1/3 c avocado or olive oil (for dressing)',
                '1 tablespoon coconut oil or fat of choice (for cooking)',
                '1/3 c orange juice',
                '1/3 c roasted red peppers',
                'Zest of 1 orange',
                '1 teaspoon chili garlic sauce',
                '1 teaspoon each cumin, coriander, paprika',
                '1/4 teaspoon salt',
                '1/4 teaspoon black pepper'
            ],
            directions: [
                '1. Dressing: In a food processor, mix avocado or olive oil, orange juice, roasted red peppers, orange zest, garlic sauce, cumin, coriander, paprika, salt and pepper.',
                '2. Heat 1 tablespoon of oil in pan.',
                '3. Cook the chicken until it’s about 3/4s of the way there on one side.',
                '4. You’ll see the sides of the chicken turn from pink to white.',
                '5. Flip it over and sear for a quick minute or until done.',
                '6. In a bowl, mix the dressing with the arugula, olives and orange supremes. ',
                '7. Place the chicken on a serving plate and place salad on top of chicken.'
            ]
        },
        {   id: '32',
            title: 'Curried Chicken Salad',
            preptime: '10 Minutes',
            servings: '4',
            ingredients: [
                '1 lb. boneless, skinless chicken breasts',
                '1 lb. boneless, skinless chicken thighs',
                '1 cup paleo or avocado mayo',
                '2 teaspoons yellow curry powder',
                '1 teaspoon garam masala(Garam masala is an mixture cinnamon, ginger, cumin, coriander, nutmeg. You can find it at most grocery stores.)',
                '1 cup raisins',
                '2 tablespoon mango chutney',
                '1 cup slivered almonds, toasted',
                '1/4 cup cilantro, chopped',
                'Salt',
                'Black pepper',
                ''
            ],
            directions: [
                '1. Place the chicken on a baking sheet and bake until cooked through, about 25 minutes on 350º',
                '2. While the chicken is baking, take out a large bowl and  mix together the rest of the ingredients. ',
                '3. Once the chicken is cool enough to handle, chop it into bite sized pieces and place into the large bowl. ',
                '4. Mix.',
                '5. Serve cold.'
            ]
        },
        {   id: '33',
            title: 'Blackened Chicken Salad',
            preptime: '15 Minutes',
            servings: '4-6',
            ingredients: [
                '1 cup paleo or avocado mayonnaise',
                '¼ cup dijon mustard',
                '¼ cup cider vinegar',
                '2½ pounds boneless skinless chicken breast',
                '2 tablespoons canola oil',
                '⅓ cup blackening seasoning',
                '1 large carrot, grated',
                '½ red onion, thinly sliced',
                '3 scallions, sliced thinly (optional)'
            ],
            directions: [
                '1. Combine mayo, Dijon, and cider vinegar in a small bowl until well-blended. Set aside',
                '2. Preheat oven to 375.',
                '3. Rinse and pat dry chicken breasts, and place on a plate. ',
                '4. Brush with ½ of the oil and sprinkle ½ of the seasoning over the chicken breasts. ',
                '5. Flip over and repeat.',
                '6. Heat a cast iron skillet on medium high. Carefully place chicken breasts in pan. ',
                '7. Cook each side for 5 minutes, and then place hot skillet in preheated oven for 10 minutes to finish cooking. Remove and cool chicken.',
                '8. Once chicken has cooled, cut it into small pieces and place in a large bowl. ',
                '9. Pour the dressing over it and mix.',
                '10. Add carrots, onions, and scallions and toss to combine.',
                '11. Serve cold over lettuce, or in a wrap.'
            ]
        },
        {   id: '34',
            title: 'Kale Caesar Salad with Almond Crusted Chicken',
            preptime: '15 Minutes',
            servings: '4',
            ingredients: [
                '2 large heads of curly kale',
                '1 cup shredded carrots',
                '1/2 cup cashews',
                '1/4 cup pine nuts',
                '3 tablespoons lemon juice',
                '2 tablespoons mild white miso',
                'Fresh cracked pepper',
                '4 cloves garlic, minced',
                '1/2 cup water',
                '2-4 organic, skinless chicken breasts',
                '1 cup almond flour – you could also use coconut flour',
                '1 tablespoon spices of choice',
                'Sea salt',
                '1 egg, beaten'
            ],
            directions: [
                '1. For the Almond Crusted Chicken you’ll need to Preheat oven to 425 deg, line a large baking sheet with foil, and set aside.',
                '2. You will need 2 large bowls. In the first bowl, add your almond meal, salt, pepper, and spices of choice and mix thoroughly.',
                '3. In a second large bowl, crack 1 egg and beat with a fork or whisk until combined.',
                '4. Dip each chicken breast into the egg mixture and coat both sides. Then dip the coated chicken into the almond meal mixture, coat both sides and place on a large baking sheet lined with foil.',
                '5. Bake at 425 for about 20mins or until browned on the outside and cooked through.',
                '6. For the dressing combine the cashews, pine nuts, lemon juice, miso, sea salt, a lot of fresh cracked pepper, 4 cloves garlic, and water into a blender.',
                '7. Blend all ingredients in a high speed blender until smooth. ',
                '8. Pour dressing into bowl with the kale and shredded carrots, mix until well coated.',
                '9. Pour your Ceasar Salad mixture onto a large plate, place 1 sliced chicken breast on top and serve immediately.'
            ]
        },
        {   id: '35',
            title: 'Pesto Chicken Salad',
            preptime: '25 Minutes',
            servings: '4',
            ingredients: [
                '2 cups organic basil leaves, packed',
                '1/2 cup raw walnuts, toasted',
                '4 cloves garlic',
                '1/4 cup sun dried tomatoes (for pesto sauce)',
                'Salt and pepper to taste',
                '1/2 cup olive oil',
                '3/4 cup pesto sauce *',
                '1½ lbs chicken breast, cooked and cubed',
                '1-15oz can artichoke hearts, rinsed and drained',
                '½ cup sun dried tomatoes (for chicken salad)'
            ],
            directions: [
                '1. To prepare the pesto: Add the first 6 pesto ingredients (basil, walnuts, garlic, 1/4 cup sundried tomato, salt and pepper) and pulse in a food processor for 15 seconds. Slowly drizzle in the olive oil and pulse for 30 more seconds until everything is mixed together. Set aside.',
                '2. Combine chicken, artichoke hearts and sun dried tomatoes in a bowl. ',
                '3. Drizzle ¾ cup of pesto (add more or less depending on taste preference) and mix until the pesto coats each ingredient.',
                '4. Serve immediately or chill in the fridge to enjoy later.'
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