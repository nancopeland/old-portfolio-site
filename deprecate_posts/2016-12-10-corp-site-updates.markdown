---
layout: post
title:  "Industrydive.com updates"
description: Functionality updates to Industry Dive's corporate site 
image-class: news-page
prev-story: /2016/12/29/pub-site-redesign.html
next-story: /2016/12/01/living-style-guide.html
---

In addition to maintaining Industry Dive's publication sites, I also update **Industry Dive's [corporate site](http://industrydive.com/)**. Usually, the updates make the site easier to use for both current employees and outside users coming to the site for more information on the company. 

{:.p-img}
![corp site]({{ site.url }}/assets/img/corp_site_filtering/corp_site.jpg)

**NEWS PAGE**

**Problem:** The news/blog page were tagged with different topics but there was no way to filter the posts with said topics.  

**Solution:** Use a `<select>` dropdown that visualizes filtering the posts. I used [Ted's talks page](http://www.ted.com/talks) for inspiration. 

See this page [here](http://industrydive.com/news/).

{:.p-img}
![news page]({{ site.url }}/assets/img/corp_site_filtering/news_page.jpg)

{:.p-img}
![news page filtering]({{ site.url }}/assets/img/corp_site_filtering/news_page_filtering.gif){:width='300px'}

{:.p-img}
![news page filtering close up]({{ site.url }}/assets/img/corp_site_filtering/news_page_filtering_zoom.gif){:width='500px'}

**TEAM PAGE**

**Problem:** The "About" page was too long: it had both the company's history and team department links (which took you to all the members in each department) on one page. This was confusing to a reader who just wanted to find the history or just wanted to find a team member. There were also a lot of steps involved to find the team member you were looking for. 

**Solution:** Split up the "About" page into two pages: "History" and "Team". For the "Team" page, have all team members on the page when it loads (instead of broken up by default) and have options to filter team members by department for ease of navigation. 

See this page [here](http://industrydive.com/team/). 

{:.p-img}
![team page]({{ site.url }}/assets/img/corp_site_filtering/team_page.jpg)

{:.p-img}
![new about page process](https://s3.amazonaws.com/dive_static/diveimages/new_process.gif){:width='550px'}

Read more about the team page [here](http://industrydive.com/news/post/user-experience-lesson-1-ease-of-navigation/). Back-end code for both projects was done by [Ryan Schuster](http://stackoverflow.com/users/2855226/ryan-schuster). 

