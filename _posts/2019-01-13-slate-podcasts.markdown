---
layout: post
title:  "Slate Podcasts"
description: Updating the podcast process to make it easier for users to navigate
image-class: slate-podcasts
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2018/03/25/menu-flex-grid.html
---

I updated the Slate podcasts process to make it easier for users to explore Slate's shows, find what they're looking for and subscribe. The design was updated to fit the [new Slate brand launched in 2018](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html){:target="_blank"}. 

{:.p-img}
![podcasts homepage]({{ site.url }}/assets/img/slate_podcasts/xxx.png)

**Background**

The podcast redesign process followed [Slate's site redesign](https://slate.com/briefing/2018/01/why-we-redesigned-slate.html){:target="_blank"} where Slate updated their [design process](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html){:target="_blank"} and [CMS](https://slate.com/briefing/2018/01/slates-new-cms.html){:target="_blank"}. Slate's articles were prioritized during this process so when I started as a designer, podcast publishing was still done using the old CMS. 

When the old site was built, podcasts weren't as high of a priority for Slate so the old podcasts landing page was just a "podcasts" tag page that featured the latest podcast episodes in reverse chronological order. 

{:.p-img}
![screenshot of old podcasts page]({{ site.url }}/assets/img/slate_podcasts/old_landing_page.png){:style="margin: 3rem auto 1rem auto;"}
<span class="help-text" style="margin-bottom: 3rem;">Old Slate podcasts landing page</span>

This had started to become an issue because this was the first page on Google when people searched "slate podcasts" and it didn't offer much information on each show nor did it allow for much exploration. 

**Planning**

Product Manager [Chris Schieffer](https://twitter.com/cschieffer){:target="_blank"} conducted extensive interviews with various Slate people to see what they wanted out of the new podcast pages. He decided there would be three pages and came up with the following priorities and features for each page:

Landing Page: 
- Understanding the breadth of what podcasts Slate is making right now
- Listen to a trailer
- Subscribe
- Slate Plus pitch

Show Page: 
- Learn about the show
- Listen to a trailer
- Subscribe
- Slate Plus pitch
- Interact with episodes inside of show
- Social links, newsletter sign up, link to discussion group

Episode Page: 
- Learn about the episode
- Listen to a trailer
- Subscribe
- Slate Plus pitch
- Recirculation (text and audio via topic)
- Social links, newsletter sign up, link to discussion group

**Design Process**

After carefully reviewing Chris's notes on the project, I started on some very basic wireframes. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="wireframe" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
		<span class="help-text" style="margin-top: 1rem;">xxx</span>
	</div>
	<div class="img-flex-33">
		<img alt="wireframe" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
		<span class="help-text" style="margin-top: 1rem;">xxx</span>
	</div>
	<div class="img-flex-33">
		<img alt="wireframe" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
		<span class="help-text" style="margin-top: 1rem;">xxx</span>
	</div>
</div>

After each iteration of wireframes and mocks, I met with Chris and Design Director [Jason Santa Maria](https://twitter.com/jasonsantamaria){:target="_blank"} to address both how the pages looked but also if they were meeting the original goals Chris had for each page (listed above). 

One thing we realized during this process is that in addition to the three main pages, we would need an archive page. Slate has so many shows and it didn't make sense to feature old ones that are no longer in production on the landing page so an archive page seemed like the right answer. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="archive link" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
		<span class="help-text" style="margin-top: 1rem;">xxx</span>
	</div>
	<div class="img-flex-50">
		<img alt="archive page" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
		<span class="help-text" style="margin-top: 1rem;">xxx</span>
	</div>
</div>

**User Testing**

While making the mocks, I had a few questions about the experience that I wanted to user test: 

1. Should the shows on the landing page be structured alphabetically or by section? 
2. Do users understand how to use the "How to Listen" section on the show page? 

**For the first question**, I tested a mock with all the "featured shows" alphabetically vs. grouped by section. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="{{ site.url }}/assets/img/slate_podcasts/lp_alphabetical.jpg">
		<span class="help-text" style="margin-top: 1rem;">Podcasts sorted alphabetically</span>
	</div>
	<div class="img-flex-50">
		<img src="{{ site.url }}/assets/img/slate_podcasts/lp_sections.jpg">
		<span class="help-text" style="margin-top: 1rem;">Podcasts sorted by section</span>
	</div>
</div>

I tested a group of Slate readers and a group of non-Slate readers. While users understood the alphabetical section they preferred the shows grouped by section because it is easier for a user to know what the show is about. If a user wanted to avoid all "News & Politics" shows, they could easily skip that section and move to the next. 

The one argument for the alphabetical ordering of shows was if the user knew exactly what they were looking for. But, as you can see in the list of priorities for each page, the point of this page was to show the breadth of Slate's offerings so we decided to go with the section grouping. 

**For the second question**, I tested the "How to Listen & Subscribe" section to see if people understood the "text me a link" form. 

The app subscribe buttons are a very common way to link to shows in podcast applications but the "text me a link" form isn't. Because most people listen to podcasts on their phones, I thought the texting feature would be helpful but I wanted to user test this to make sure. Does the text form help or confuse the user? 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="{{ site.url }}/assets/img/slate_podcasts/how_to_full.png">
		<span class="help-text" style="margin-top: 1rem;">Section with both the texting form and app subscribe buttons</span>
	</div>
	<div class="img-flex-50">
		<img class="p-img" src="{{ site.url }}/assets/img/slate_podcasts/how_to_buttons.png">
		<span class="help-text" style="margin-top: 1rem;">Section with just app subscribe buttons</span>
	</div>
</div>

While most users were more likely to use the app buttons to subscribe (or even just going to the app and searching for the podcast), they liked the option to text. So, we kept the version with the text form. 

**Implementation**
