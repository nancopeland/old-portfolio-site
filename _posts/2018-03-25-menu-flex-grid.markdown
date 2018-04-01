---
layout: post
title:  "Flex grid menu"
description: Making Industry Dive's menu more dynamic with the flex grid
image-class: flex-menu
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2018/02/17/support-page.html
---

I re-coded the **[menu](https://www.retaildive.com/){:target="_blank"}** for all Industry Dive products using a flex grid resulting in more scalable code and a more accessible menu. 

**Role:** Designer/Front-End Developer

{:.p-img}
![menu]({{ site.url }}/assets/img/flex_menu/menu.png){:style="border: 1px solid #eee;"}

**Goals**

Going into this project, my two main goals were: 

1. Make the menu more accessible at a higher number of screen sizes
2. Make the code more scalable for growing number of variants in the menu

Before researching, I had a hunch this could be done with a flex grid so I also wanted to learn more about flex grids and how they compare to float and CSS grids. 

**Research**

I started by researching all grid methods. Industry Dive currently uses a modified [Foundation grid](https://foundation.zurb.com/){:target="_blank"} for all sites because it is responsive and well-supported. Every time I'd brought up an alternate grid before, the main concern was support so I needed to prove that whatever I chose to switch to was well-supported, especially in Internet Explorer.

The [most helpful article](https://philipwalton.github.io/solved-by-flexbox/demos/grids/){:target="_blank"} I found on grids was written by Google developer [Philip Walton](https://philipwalton.com/){:target="_blank"}. 

Because I was only re-coding the menu (not the whole site), I decided to go with the flex grid. As you can see below, the flex grid has great support. From my research, CSS grids seem really cool but are still pretty new and not well-supported. 

<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/flex_support.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;">Flex grid support, screenshot from <a href="https://caniuse.com/#feat=flexbox">Can I Use</a></span>
</div>

**Reassessing the menu SCSS**

First, I broke up the menu SCSS so it was easier to manage. This was pretty straightforward: the menu CSS was previously all in one SCSS partial so I broke this up into three partials: <span class="inline-code">`_base.scss`</span>, <span class="inline-code">`_desktop.scss`</span> and <span class="inline-code">`_mobile.scss`</span>. 

To implement the flex grid, I would mostly only be editing the desktop and base menu (which is much smaller than the other two files) so this made both the coding and QAing easier for everyone involved. 

{% highlight scss %}
/* _menu.scss */
@import 'base'; 
@import 'mobile';
@import 'desktop';
{% endhighlight %}

**Setting up flex grid**

As previously mentioned, the menu was originally written using a Foundation (float) grid. Because this only controls the widths, floats and clearing for each column, all other elements needed to be manually styled. For example, each <span class="inline-code">`<ul>`</span> list below's <span class="inline-code">`<li>`</span> items needed to be styled with <span class="inline-code">`display: inline-block`</span> to make the menu horizontal. 

With the new flex grid structure, neither the floats or inline styling was necessary because the flex grid does this for you. This is easier to manage and scale. 

For inspiration, I looked at both [Vox](https://www.vox.com/){:target="_blank"} and [GitHub's](https://github.com/){:target="_blank"} menus to see how they structured their HTML and CSS because they had similar content (logo, regular menu and sub menu) and used flex grids. 

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

The most confusing property related to the flex grid is [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex){:target="_blank"}. The two most frequently used styles are <span class="inline-code">`flex: auto`</span> and <span class="inline-code">`flex: initial`</span>. <span class="inline-code">`auto`</span> grows or shrinks according to the free space in the container while <span class="inline-code">`initial`</span> only shrinks to fill the minimum size of the container. 

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
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/large_menu_after.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 1.5rem;">Large menu, looks about the same with flex grid</span>
</div>
<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/medium_menu_before.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 1.5rem;">Medium menu before flex grid</span>
</div>
<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/medium_menu_after.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
	</div>
	<span class="help-text" style="margin-bottom: 3rem;">Medium menu after flex grid</span>
</div>

The first thing to change was the **sub menu CTAs** (the menu on the right). To account for the thinner screen width, I removed the CTA for "search" because the magnifying glass is fairly universally known to represent "search". I considered removing the CTA for the newsletter signup link as well but I don't think the email icon makes much sense without "signup". 

The other element to address was the **"Topics" menu**. On desktop, the "Topics" menu is visible at the top of the page but changes to a dropdown on scroll (see screenshot above). It is also a horizontal menu. I knew on a medium-sized screen, all the items in the menu wouldn't fit horizontally so it should be vertical. 

<div class="row">
	<div class="columns">
		<img class="p-img" alt="flex grid support" src="{{ site.url }}/assets/img/flex_menu/medium_topics_menu_open.png" style="margin: 3rem auto 1.5rem auto; border: 1px solid #eee;">
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



