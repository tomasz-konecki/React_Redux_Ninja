const initState = {
  posts: [
    {
      id: "1",
      title: "Title 1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet porttitor ipsum. Nulla in ipsum fringilla, semper urna ac, tincidunt odio."
    },
    {
      id: "2",
      title: "Title 2",
      body:
        "Vestibulum efficitur dui et erat hendrerit, dapibus bibendum arcu vehicula. Etiam aliquam augue consequat, posuere massa vitae, hendrerit elit."
    },
    {
      id: "3",
      title: "Title 3",
      body:
        "Aenean pellentesque facilisis erat a congue. Suspendisse dictum elit ipsum, eget ultrices ligula congue a. "
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
