import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import App from './App';

const state = {
  categories: [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    },
    {
      idCategory: '2',
      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
      strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
    },
    {
      idCategory: '3',
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
      strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal. The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
    },
    {
      idCategory: '4',
      strCategory: 'Lamb',
      strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
      strCategoryDescription: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent. ',
    },
    {
      idCategory: '5',
      strCategory: 'Miscellaneous',
      strCategoryThumb: 'https://www.themealdb.com/images/category/miscellaneous.png',
      strCategoryDescription: "General foods that don't fit into another category",
    },
    {
      idCategory: '6',
      strCategory: 'Pasta',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
      strCategoryDescription: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).',
    },
    {
      idCategory: '7',
      strCategory: 'Pork',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pork.png',
      strCategoryDescription: 'Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork. Pork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.',
    },
    {
      idCategory: '9',
      strCategory: 'Side',
      strCategoryThumb: 'https://www.themealdb.com/images/category/side.png',
      strCategoryDescription: 'A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).',
    },
    {
      idCategory: '10',
      strCategory: 'Starter',
      strCategoryThumb: 'https://www.themealdb.com/images/category/starter.png',
      strCategoryDescription: 'An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal. Historically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25',
    },
    {
      idCategory: '11',
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
      strCategoryDescription: 'Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.',
    },
    {
      idCategory: '12',
      strCategory: 'Vegetarian',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegetarian.png',
      strCategoryDescription: 'Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter. Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.',
    },
    {
      idCategory: '14',
      strCategory: 'Goat',
      strCategoryThumb: 'https://www.themealdb.com/images/category/goat.png',
      strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.',
    },
  ],
};

const store = configureStore(state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
