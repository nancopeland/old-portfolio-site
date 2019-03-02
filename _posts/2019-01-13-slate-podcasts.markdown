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

Product Manager [Chris Schieffer](https://twitter.com/cschieffer){:target="_blank"} conducted extensive interviews with various Slate people to see what they wanted out of the new podcast pages. He decided there would be three pages and came up with the following priorities for each page:

{:.p-img}
![screenshot of each pages' priorities]({{ site.url }}/assets/img/slate_podcasts/page_priorities.png){:style="margin: 3rem auto 1rem auto;"}
<span class="help-text" style="margin-bottom: 3rem;">Screenshot from planning notes</span>

**Wireframes & Mocks**

**User Testing**

While making the mocks, I had a few questions about the experience that I wanted to user test: 

1. Should the shows on the landing page be structured alphabetically or by section? 
2. Do users understand how to use the "How to Listen" section on the show page? 

**For the first question**, I tested a mock with all the "featured shows" alphabetically vs. grouped by section. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
	</div>
	<div class="img-flex-50">
		<img class="p-img" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
	</div>
</div>

I tested a group of Slate readers and a group of non-Slate readers. While users understood the alphabetical section they preferred the shows grouped by section because it is easier for a user to know what the show is about. If a user wanted to avoid all "News & Politics" shows, they could easily skip that section and move to the next. 

The one argument for the alphabetical ordering of shows was if the user knew exactly what they were looking for. But, as you can see in the list of priorities for each page, the point of this page was to show the breadth of Slate's offerings so we decided to go with the section grouping. 

**For the second question**, I tested ________. I wanted to see if users preferred the mock with both the texting option + the app buttons or just the mock with the app buttons. Did the text form help or confuse the user? 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
	</div>
	<div class="img-flex-50">
		<img class="p-img" src="{{ site.url }}/assets/img/slate_podcasts/xxx.png">
	</div>
</div>

While most users said they'd use the app buttons to subscribe to each podcast (or even just going to the app and searching for the podcast), they liked the option to text. So, we kept the version with the text form. 

**Implementation**
