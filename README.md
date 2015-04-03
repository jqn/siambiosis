#SIAMBIOSIS

## Ceramics artist portfolio.

Source files for the Tuts+ tutorial: [Building an Instagram Based Portfolio With Bootstrap
](http://webdesign.tutsplus.com/tutorials/building-the-simple-instagram-based-portfolio--cms-22243)

[Original demo](http://tutsplus.github.io/building-an-instagram-based-portfolio-with-bootstrap)

* To get the instagram feed working create an app.js in js/app.js.

Add the following code:

```
$(function() {

    //Set up instafeed
    var feed = new Instafeed({
      get: 'user',
      userId:  your_user_id,
      accessToken: 'your_access_token',
      links: false,
      limit: 8,
      sortBy: 'most-recent',
      resolution: 'standard_resolution',
      template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><img src="{{image}}"></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
      useHttp: true,
    });
    feed.run();
});
```
