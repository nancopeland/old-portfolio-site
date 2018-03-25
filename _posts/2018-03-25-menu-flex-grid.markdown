---
layout: post
title:  "Menu restructure using CSS flex grid"
description: Making Industry Dive's menu more dynamic with the flex grid
image-class: menu-flex-grid
prev-story: /2018/02/17/support-page.html
next-story: /2017/10/14/gig-app.html
---

test test test

**BACKGROUND & RESEARCH**

Before starting this project, I research flex grids and other grid methods extensively. Industry Dive currently uses a modified [Foundation grid](https://foundation.zurb.com/) for all sites because it is responsive and well-supported. Every time I'd brought up a flex grid before, the main concern was support so my main mission was to prove that the flex grid would work for all browsers we support.

The [most helpful article](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) I found on grids was written by Google developer [Philip Walton](https://philipwalton.com/). 

1. Reassessing the menu SCSS  
2. Setting up flex grid 
3. Making the flex grid responsive
4. Accounting for topics dropdown
5. Changing menu breakpoints

**Reassessing the menu SCSS**

First, I broke up the menu SCSS so it was easier to manage. This is pretty straightforward: the menu CSS was previously all in one SCSS partial so I broke this up into <span class="inline-code">`_desktop.scss`</span> and <span class="inline-code">`_mobile.scss`</span>. 

To implement the flex grid, I would only really be editing the desktop menu so this made both the coding and QAing easier for everyone involved. 


2. Setting up flex grid 
3. Making the flex grid responsive
4. Accounting for topics dropdown
5. Changing menu breakpoints