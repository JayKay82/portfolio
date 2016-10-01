'use strict';

describe('PostsCtrl', function(){
  // before each test instatiate a fresh app
  beforeEach(module('jaykayPortfolio'));

  // before each test instatiate a new controller
  // and populate its posts attribute with two posts
  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('PostsCtrl');
    ctrl.posts = [{
      id: 1,
      title: "Title 1",
      body: "Body 1",
      categories: ["Cat 1"],
      tags: ["Tag 1"],
      created_at: "1st September '16"
    },
    {
      id: 2,
      title: "Title 2",
      body: "Body 2",
      categories: ["Cat 2"],
      tags: ["Tag 2"],
      created_at: "1st September '16"
    }];
  }));

  it('should have a posts attribute containing 4 posts', function(){
    expect(ctrl.posts.length).toEqual(2);
  });

  it('should contain posts', function(){
    expect(ctrl.posts[0]).toEqual({
      id: 1,
      title: "Title 1",
      body: "Body 1",
      categories: ["Cat 1"],
      tags: ["Tag 1"],
      created_at: "1st September '16"
    })
  });
});
