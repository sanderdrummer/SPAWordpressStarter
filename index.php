<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body{
        background-color: #eee;
      }
    </style>
  </head>
  <body>
    <header>
      <nav id="nav" class="main fixed">
        <ul class="container nav">
          <li class="toggle icon-menu"></li>
          <li><a href="#/">Home</a></li>
          <li><a href="#/static">StaticTest</a></li>
          <li><a href="#/posts">post</a></li>
          <li><a href="#/posts/blog">blog</a></li>
          <li><a href="#/posts/gigs">gigs</a></li>
          <li><a href="#/page/2">Page</a></li>
          <li><a href="#/page/82">Vogel</a></li>
          <li><a href="#/page/80">Leweds</a></li>
          <li><a href="#/Category">Category</a></li>
        </ul>
      </nav>
    </header>
    <div id="view" class="width"></div>
    <footer>
    </footer>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/src/polyfills/fetch.js" charset="utf-8"></script>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/dist/bundle.js"></script>
    <link href="<?php bloginfo('template_url'); ?>/dist/main.css" rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One|Open+Sans' rel='stylesheet' type='text/css'>
  </body>
</html>
