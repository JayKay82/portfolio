'use strict';

angular.module('jaykayPortfolio')
  .controller('PostsCtrl', function(){

    // set this to a variable calles self
    var self = this;
    self.posts = [
      {
        id: 1,
        title: "Making a Good First Impression",
        body: "Keffiyeh four dollar toast everyday carry leggings mixtape subway tile. Vaporware fap semiotics letterpress 8-bit. Fanny pack kinfolk vinyl poke jean shorts",
        categories: [
          "Ethics",
          "Work"
        ],
        tags: [
          "Office",
          "Communication",
          "Planning"
        ],
        created_at: "1st September '16"
      },
      {
        id: 2,
        title: "How to Build a Load Button in ReactJS",
        body: "Distillery sustainable disrupt enamel pin single-origin coffee lyft narwhal, tumeric skateboard mustache polaroid tofu waistcoat pop-up. Activated charcoal cold-pressed occupy scenester",
        categories: [
          "Tutorial",
          "Development"
        ],
        tags: [
          "ReactJS",
          "Babel",
          "Redux"
        ],
        created_at: "1st September '16"
      },
      {
        id: 3,
        title: "The Lorem of Development",
        body: "Authentic asymmetrical gluten-free church-key, farm-to-table microdosing fingerstache poutine butcher chicharrones slow-carb austin hell of humblebrag everyday carry",
        categories: [
          "Development"
        ],
        tags: [
          "JavaScript",
          "AngularJS"
        ],
        created_at: "16th September '16"
      },
      {
        id: 4,
        title: "The Ipsum of Design",
        body: "Marfa 3 wolf moon cronut, viral gluten-free hexagon fap banjo listicle fixie raclette. Semiotics synth hexagon fanny pack four dollar toast, truffaut street art lomo",
        categories: [
          "Design",
          "Work"
        ],
        tags: [
          "Sass",
          "Illustrator CC",
          "colours"
        ],
        created_at: "20th September '16"
      }
    ];
  });
