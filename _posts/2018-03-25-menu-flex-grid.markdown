---
layout: post
title:  "Menu restructure using CSS flex grid"
description: Making Industry Dive's menu more dynamic with the flex grid
image-class: menu-flex-grid
prev-story: /2018/02/17/support-page.html
next-story: /2017/10/14/gig-app.html
---

test test test

**Research**

Before starting this project, I research flex grids and other grid methods extensively. Industry Dive currently uses a modified [Foundation grid](https://foundation.zurb.com/) for all sites because it is responsive and well-supported. Every time I'd brought up a flex grid before, the main concern was support so my main mission was to prove that the flex grid would work for all browsers we support.

The [most helpful article](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) I found on grids was written by Google developer [Philip Walton](https://philipwalton.com/). 

<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/flex_support.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;">Flex grid support, screenshot from <a href="https://caniuse.com/#feat=flexbox">Can I Use</a></span>
</div>

**1. Reassessing the menu SCSS**

First, I broke up the menu SCSS so it was easier to manage. This is pretty straightforward: the menu CSS was previously all in one SCSS partial so I broke this up into three partials: <span class="inline-code">`_base.scss`</span>, <span class="inline-code">`_desktop.scss`</span> and <span class="inline-code">`_mobile.scss`</span>. 

To implement the flex grid, I would mostly only be editing the desktop and base menu (which is much smaller than the other two files) so this made both the coding and QAing easier for everyone involved. 

{% highlight scss %}
/* _menu.scss */
@import 'base'; 
@import 'mobile';
@import 'desktop';
{% endhighlight %}

**2. Setting up flex grid**

Before switching to a flex grid, the HTML was written using a Foundation float grid. Also, for each list below, each of the list items needed to be styled with <span class="inline-code">`display: inline-block`</span>. With the new structure, this was no longer necessary. 

I looked at both [Vox](https://www.vox.com/) and [GitHub's](https://github.com/) menus to see how they structured both their HTML and CSS because they had similar structures (logo, regular menu and sub menu) and used flex grids. 

{% highlight html %}
<nav class="site-menu">
    <div class="site-menu-inner">
        <div class="menu-content-wrapper">
            <ul class="desktop-menu-main">
            	<!-- desktop menu, not visible on mobile -->
            </ul>
            <button class="mobile-menu-toggle">
            	<!-- mobile menu toggle icon, not visible on desktop -->
            </button>
            <ul class="desktop-menu-sub list-no-bullets">
            	<!-- sub desktop menu, not visible on mobile -->
            </ul>
        </div>
    </div>
</nav>
{% endhighlight %}

For the SCSS, most of it made sense after reading flex grid documentation. 

The most confusing property related to the flex grid is [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex). The main thing to know is that <span class="inline-code">`flex: auto`</span> grows or shrinks according to the free space in the container while <span class="inline-code">`flex: initial`</span> only shrinks to fill the minimum size of the container. 

{% highlight scss %}
.site-menu-inner {
    align-items: center; // vertically centers all items
    display: flex; 
    height: 55px;
    justify-content: space-between; // added so mobile menu stays on the right
    margin: 0 auto; 
    max-width: 75rem; 
} 
.menu-content-wrapper {
    display: flex;
    justify-content: space-between;
    flex: initial; // initial is flex: 0 1 auto;
}
@media screen and (min-width: $menu-breakpoint) {
    .menu-content-wrapper {
        flex: auto; // auto is flex: 1 1 auto; 
    }
}
{% endhighlight %}



**3. Making the flex grid responsive/"signup" and "search"**

**4. Accounting for topics dropdown**

**5. Changing menu breakpoints**