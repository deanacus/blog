---
layout: post
title: Lazy Loading Images
---

Images are an important thing on the internet - they help make it pretty! But 
sometimes, they add way too much weight to a page, and make it take forever to 
download. When that happens, I lazy load them.

My solution to this problem has been heavily inspired by the way Medium handles
it, so lets take a look at the way they handle it (from a user's point of view):

* Initially serve a blurred placeholder image.
* Then the image is within the viewport, start loading in the full-sized image.
* When the fullsized image is loaded, remove the blur and display the nice, 
  crisp image.

I like this approach, but I don't like the way they handle it from a technical
point of view. Mostly because they need to insert 3 DOM elements where a single
element would suffice.

## Build our new image element

Create a copy of your image, and resize it to something very small - I tend to 
make my placeholders no more than 20px on the shortest side - and update the src
attribute of your image element to point to the copy. Then, add a `data-src`
attribute and set it to the original file. Finally, we're going to need a new
class for styling and selection purposes - I suggest something like 
`lazy-thumb`.

You should have one or more images in your markup that look like the following:

```
<img src="/path/to/placeholder.jpg" data-src="path/to/image.jpg" class="lazy-thumb" />
```

## Smooth the pixelation

Because we've down-sampled our image so drastically, when we blow it back up to
the size of the original[^1], it's going to pixelly as hell. So we're gonna
smooth it out with a css blur filter. I find that 20px is generally a good blur
radius to smooth things out nicely.

```
.lazy-thumb {
    filter: blur(20px);
}
```

## Swap our placeholder with the final image when it's in the viewport

We're going to need some way of detecting that our image is within the viewport.
Previously, we would probably add a scroll event listener to the window object 
and do some maths on every scroll, for every image, to see whether or not it was
in the viewport. But the IntersectionObserver API has made this much simpler.

IntersectionObserver takes an array of elements, and observes their position in 
relation to the viewport asynchronously, allowing us to perform some tasks on
the observed elements (some or all of them) depending on their status.

A full explanation of IntersectionObserver is beyond the scope of this, but it's
an incredibly powerful API that I strongly suggest you investigate.

We're going to start by creating a new instance of IntersectionObserver, and
pass it an anonymous callback, like so:

```
const observer = new IntersectionObserver( function( entries ) {
    
} );
```

This will be where we handle all our image manipulation. But before we do that,
we need to observe some elements. So we're going to grab every `img` element
that has a class of `lazy-thumb` and pass it to our `observer` object with the
IntersectionObserver's observe method.

```
const images = document.querySelectorAll( 'img.lazy-thumb' );
images.map( image => observer.observe( image ) );
```

Now we can start writing the code for our callback.

We're going to do a couple of things here:

* Swap the `src` attribute value for the `data-src` attribute value
* Remove the `lazy-thumb` class from the image
* Stop the image from being observed.

```
entries.map(  entry => {
    if ( entry.isIntersecting ) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove(' lazy-thumb' );
        observer.unobserve( img );
    }
} );
```

This accomplishes everything we need, but has one fatal flaw - if a user is on a
slow connection, the blur filter get's removed before the final image has 
finished downloading, and they see the ugly pixelated, blown up placeholder.
That can be solved by adding an event listener to the image within our callback
to wait for the new image to load, then removing the class:

```
entries.map(  entry => {
    if ( entry.isIntersecting ) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener( () => img.classList.remove(' lazy-thumb' ) );
        observer.unobserve( img );
    }
} );
```

## Wrapping up

Our final code should should look something like the following:

```
const observer = new IntersectionObserver( function( entries ) {
    entries.map(  entry => {
        if ( entry.isIntersecting ) {
            var img = entry.target;
            img.src = img.dataset.src;
            img.addEventListener( () => img.classList.remove(' lazy-thumb' ) );
            observer.unobserve( img );
        }
    } );
} );

const images = document.querySelectorAll( 'img.lazy-thumb' );
images.map( image => observer.observe( image ) );
```

We could make it much more reusable, by turning it into an ES module that we can
import and intialise, rather than having to have this all in our main file. But
that's a story for another day.

[^1]: I'm assuming you've styled your images in your CSS and they'll be the same
size automatically. If not, you'll need to style your placeholder to be the same
size as the original - I'll leave that up to you.