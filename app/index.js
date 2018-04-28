
/*
* render
*
* Renders.
*/
function render() {
  var list_data = getListData();
  var list_el = getListHTML({list_data: list_data});

  return list_el;
}

/* 
* getListData
* Retrieve data, and return it in a usable format
* Return an object containing array of lists, each of which contains an array of links.
* Each link has a name and a url.
* Right now, this just returns test data.
*/
function getListData() {
  return {
    lists: [
      {
        name: 'Monty Python Movies',
        entries: [
          {
            name: 'Life of Brian',
            url: "https://en.wikipedia.org/wiki/Monty_Python%27s_Life_of_Brian"
          },
          {
            name: 'Meaning of Life',
            url: "https://en.wikipedia.org/wiki/Monty_Python%27s_The_Meaning_of_Life"
          },
          {
            name: 'Monty Python and the Holy Grail',
            url: "https://en.wikipedia.org/wiki/Monty_Python_and_the_Holy_Grail"
          },
        ]
      },
      {
        name: 'Dinner recipes',
        entries: [
          {
            name: 'Momma\'s Healthy Meatloaf',
            url: "https://www.allrecipes.com/recipe/240747/mommas-healthy-meatloaf/"
          },
          {
            name: 'Scrambled Eggs with Spinach & Parmesan',
            url: "https://www.epicurious.com/recipes/food/views/scrambled-eggs-with-spinach-parmesan-51143630"
          },
        ]
      }
    ]
  };
}

/*
* getListHTML
* Returns HTML for rendering a list, given the list data.
* Should be improved later to not be terrible
*/
function getListHTML(args) {
  var lists = args.list_data.lists;
  var el = '';

  lists.forEach(function(list) {
    var entries = list.entries;
    el += "<div class='recipe-list-header'>" + list.name + "</div>";
    el += "<ul class='recipe-list'>";
    entries.forEach(function(entry) {
      el += '<li>' + entry.name + '</li>';
    });
    el += "</ul>";
  });
  return el;
}


/*
* Main render call. Must remain outside a function.
*/
document.write(render());
