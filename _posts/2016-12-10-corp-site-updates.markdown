---
layout: post
title:  "Industrydive.com updates"
description: Functionality updates to Industry Dive's corporate site 
image-class: news-page
live-project-link: http://industrydive.com/news/
live-project-name: News Page
live-project-2: true
live-project-link-2: http://industrydive.com/team/
live-project-name-2: Team Page
---

In addition to maintaining Industry Dive's publication sites, I also update our corporate site with small tools to make it easier to use. Here are a few of those updates. 

<h2>News Page</h2>

**Problem:** The news/blog page were tagged with different topics but there was no way to filter the posts with said topics.  

**Solution:** Use a `<select>` dropdown that visualizes filtering the posts. I used [Ted's talks page](http://www.ted.com/talks) for inspiration. 

![news page filtering]({{ site.url }}/assets/img/corp_site_filtering/news_page_filtering.gif){:width='240px'}
![news page filtering close up]({{ site.url }}/assets/img/corp_site_filtering/news_page_filtering_zoom.gif){:width='460px'}

<h2>Team Page</h2>

**Problem:** The "About" page was too long: it had both the company's history and team department links (which took you to all the members in each department) on one page. This was confusing to a reader who just wanted to find the history or just wanted to find a team member. There were also a lot of steps involved to find the team member you were looking for. 

**Solution:** Split up the "About" page into two pages: "History" and "Team". For the "Team" page, have all team members on the page when it loads (instead of broken up by default) and have options to filter team members by department for ease of navigation. 

![new about page process](https://s3.amazonaws.com/dive_static/diveimages/new_process.gif){:width='500px'}

Read more about the team page [here](http://industrydive.com/news/post/user-experience-lesson-1-ease-of-navigation/). 


Back-end code for both projects: [Ryan Schuster](http://stackoverflow.com/users/2855226/ryan-schuster)