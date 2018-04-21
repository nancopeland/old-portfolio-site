---
layout: post
title:  "Flex grid menu"
description: Making Industry Dive's menu more dynamic with the flex grid
image-class: flex-menu
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2018/02/17/support-page.html
---

I re-coded the **[menu](https://www.retaildive.com/){:target="_blank"}** for all Industry Dive products using a flex grid. This resulted in a more accessible menu with code that scales better for growth.

**Role:** Designer/Front-End Developer

{:.p-img}
![menu]({{ site.url }}/assets/img/flex_menu/menu.png){:style="border: 1px solid #eee;"}

**Goals**

Going into this project, my two main goals were: 

1. Make the menu more accessible at a higher number of screen sizes
2. Make the code more scalable for a growing number of variants in the menu

For inspiration, I looked at both [Vox](https://www.vox.com/){:target="_blank"} and [GitHub's](https://github.com/){:target="_blank"} menus to see how they structured their HTML and CSS because they had similar content (logo, regular menu and sub menu). Both publications use flex grids.

**Research**

I started by researching all grid methods. Industry Dive currently uses a modified [Foundation grid](https://foundation.zurb.com/){:target="_blank"} for all sites because it is responsive and well-supported. When I had brought up an alternate grid before, the main concern was support, specifically in Internet Explorer, so I needed to prove that whatever I chose would work within these constraints.

The most helpful articles were [this Hacker Noon article](https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf){:target="_blank"} that explains flex vs. CSS grid and [Philip Walton's article](https://philipwalton.github.io/solved-by-flexbox/demos/grids/){:target="_blank"} on how flex grids work in general. 

The Hacker Noon article mentions that "Flexbox is made for one dimensional layouts and Grid is made for two dimensional layouts." Because I was only re-coding the menu (not the whole site), I decided to go with flex. As you can see below, flexbox has great support. From my research, CSS grids seem really cool but are still pretty new and not well-supported. 

<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/flex_support.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;">Flex grid support, screenshot from <a href="https://caniuse.com/#feat=flexbox">Can I Use</a></span>
</div>

**Reassessing the menu SCSS**

First, I broke up the menu SCSS so it was easier to manage. This was pretty straightforward: the menu CSS was previously all in one SCSS partial so I broke it up into three partials: <span class="inline-code">`_base.scss`</span>, <span class="inline-code">`_desktop.scss`</span> and <span class="inline-code">`_mobile.scss`</span>. 

Currently, the desktop and mobile menus run off almost completely separate code and the small amount of code shared is in `_base.scss`. To implement the flex grid, I would mainly be editing the desktop and base menus so the split made the code more maintainable and easier to read.

{% highlight scss %}
/* _menu.scss */
@import 'base'; 
@import 'mobile';
@import 'desktop';
{% endhighlight %}

**Setting up flex grid**

As previously mentioned, the menu was originally written using a Foundation (float) grid. Because this only controls the widths, floats and clearing for each column, all other elements needed to be manually styled. For example, each <span class="inline-code">`<ul>`</span> list below's <span class="inline-code">`<li>`</span> items needed to be styled with <span class="inline-code">`display: inline-block`</span> to make the menu horizontal. 

With the new flex grid structure, neither the floats nor inline styling were necessary, because the flex grid does this for you. This is easier to manage and scale. 

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

For the SCSS, most of it made sense after reading the flex grid documentation mentioned above. 

The most confusing property related to the flex grid is [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex){:target="_blank"}. The two most frequently used styles are <span class="inline-code">`flex: auto`</span> and <span class="inline-code">`flex: initial`</span>. <span class="inline-code">`auto`</span> grows or shrinks according to the free space in the container while <span class="inline-code">`flex: initial`</span> only shrinks to fill the minimum size of the container. Both styles are used on <span class="inline-code">`.menu-content-wrapper`</span>, which wraps both menus. <span class="inline-code">`initial`</span> is used on mobile screens while <span class="inline-code">`auto`</span> is used on medium and large screens. 

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
.desktop-menu-main,
.desktop-menu-sub {
    display: flex; 
}
{% endhighlight %}

**Making the flex grid responsive**

So far, the changes to the menu haven't changed what it actually looks like. But, as previously stated, one of the goals of this project was to make the menu more accessible on smaller screen sizes. Making it work on mobile is a different project but what about tablets and small laptops? This was going to involve some slight visual changes.

<div class="row">
	<span class="help-text" style="font-weight: 700; margin-top: 3rem;">Before:</span>
	<div class="columns">
		<img class="p-img" alt="medium menu before" src="{{ site.url }}/assets/img/flex_menu/medium_menu_before.png" style="margin: 0 auto 1.5rem auto; border: 1px solid #eee;">
	</div>
</div>
<div class="row">
	<span class="help-text" style="font-weight: 700; margin-top: 1.5rem;">After:</span>
	<div class="columns">
		<img class="p-img" alt="medium menu after" src="{{ site.url }}/assets/img/flex_menu/medium_menu_after.png" style="margin: 0 auto 3rem auto; border: 1px solid #eee;">
	</div>
</div>

The first thing to change was the **sub menu CTAs** (the menu on the right). To account for the thinner screen width, I removed the CTA for "search" because the magnifying glass is fairly universally known to represent "search". I considered removing the CTA for the newsletter signup link as well but I don't think the email icon makes much sense without "signup". 

The other element to address was the **"Topics" menu**. On desktop, the "Topics" menu is visible at the top of the page but changes to a dropdown on scroll (see screenshot above). It is also a horizontal menu. I knew on a medium-sized screen, all the items in the menu wouldn't fit horizontally so it should be vertical.

<div class="row">
	<div class="columns">
		<img class="p-img" alt="topics menu" src="{{ site.url }}/assets/img/flex_menu/medium_topics_menu_open.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;">Topics menu open on medium screens</span>
</div>

**Finishing touches**

To make the menu fully work, I had to reassess the JS associated with the menu and update the SCSS breakpoints so this actually worked across the 15 different menus running on this code (see all pubs [here](https://www.retaildive.com/about/){:target="_blank"}).

<div class="row">
	<div class="columns">
		<img class="p-img" alt="smt menu" src="{{ site.url }}/assets/img/flex_menu/smt_menu.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text"><a target="_blank" href="https://www.socialmediatoday.com/">Social Media Today</a> menu on medium screens</span>
</div>
<div class="row">
	<div class="columns">
		<img class="p-img" alt="biopharma menu" src="{{ site.url }}/assets/img/flex_menu/biopharma_menu.png" style="margin: 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;"><a target="_blank" href="https://www.biopharmadive.com/">BioPharma Dive</a> menu on medium screens</span>
</div>

Although the JS and SCSS breakpoints brought about some complications, I plan to clean them up in the future. I also want to update the code so the menu is fully responsive from mobile to desktop (goodbye hamburger menu), not just across medium and desktop. 



