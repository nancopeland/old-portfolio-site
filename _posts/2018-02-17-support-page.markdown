---
layout: post
title:  "Industry Dive Support Page"
description: Using JIRA ticket collectors to streamline internal requests
image-class: support-page
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2018/01/06/library-page.html
---

I designed and coded the **<a target="_blank" href="https://support.industrydive.com/">Industry Dive Support Page</a>** which handles all internal requests for the Tech and Design teams. 

{:.p-img}
![support page]({{ site.url }}/assets/img/support_page/support_page.jpg)

**The Problem**

Teams at Industry Dive, specifically Tech and Design, were receiving one-off requests frequently via Hipchat and email but they were hard to remember and keep track of. Since Industry Dive switched to JIRA about a year ago for project management and ticket collection, Tech's project manager had already decided we would use an issue collector but how could this be scaled for multiple issue collectors and multiple teams? 

{:.p-img}
![JIRA issue collectors]({{ site.url }}/assets/img/support_page/issue_collector1.png)

{:.p-img}
![JIRA issue collectors]({{ site.url }}/assets/img/support_page/issue_collector2.png)

**Process**

First, Tech's project manager and I created Issue Collectors for both teams. Each issue collector has different form fields (i.e. description, due date, computer/browser type) depending on the issue type. By making each issue collector "Custom" in JIRA, I was able to manipulate the functionality and look of each issue collector button therefore making it easier to add multiple to a page. 

<img alt="custom trigger selection" class="p-img" src="{{ site.url }}//assets/img/support_page/custom_trigger.png" style="margin: 3rem auto;">
<img alt="issue collector" class="p-img" src="{{ site.url }}//assets/img/support_page/issue_collector_popup.png" style="margin: 3rem auto;">

Then, I added the issue collectors to the page. I tried this in a variety of layouts but the best and most scalable design was putting the designated issue collectors under each department/team name. This way, users would know which team their request was going to (usually my coworkers know which team they want to receive their request). 

<img alt="support page" class="p-img" src="{{ site.url }}//assets/img/support_page/support_page_demo.gif" style="margin: 3rem auto;">

Recently, I added issue collectors for the Sales Ops team and hopefully, because the scalable design, more teams will be interested in adding their own collectors. 

<p style="font-style: italic; margin-top: 3rem;">Project Manager: <a target="_blank" href="https://www.linkedin.com/in/tonybagdon/">Tony Bagdon</a></p>

