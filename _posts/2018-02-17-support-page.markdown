---
layout: post
title:  "Industry Dive Support Page"
description: Using JIRA ticket collectors to streamline internal requests
image-class: support-page
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2018/01/06/library-page.html
---

As the Industry Dive team grows, managing requests has become increasingly important to make sure everything is accounted for and not forgotten. Because of this, I recently worked on the Industry Dive support page to handle all internal requests for the Tech and Design teams using <a href="https://confluence.atlassian.com/adminjiraserver071/using-the-issue-collector-802592637.html" target="_blank">Jira issue collectors</a>. 

{:.p-img}
![support page]({{ site.url }}/assets/img/support_page/support_page.jpg){:style="border: 1px solid #eee;"}

**The Problem**

Teams at Industry Dive, specifically Tech and Design, were receiving one-off requests frequently via [Hipchat](https://www.atlassian.com/software/hipchat), an internal messaging system, and email. The requests were hard for teams to remember and keep track of. Because Industry Dive switched to [Jira](https://www.atlassian.com/software/jira) about a year ago for project management and ticket collection, the tech team’s project manager, Tony, decided we would use a Jira issue system. But, each team was still receiving one-off requests that they would then manually enter into the Jira system. How could we use Jira to improve this process across multiple departments?

{:.p-img}
![JIRA issue collectors]({{ site.url }}/assets/img/support_page/issue_collector1.png){:style="border: 1px solid #eee;"}

**The Solution**

First, issue collectors were created for both teams. Each collector has different form fields (i.e. description, due date, computer/browser type) depending on the issue type. By making each issue collector “custom” in Jira, I was able to manipulate the functionality of each button therefore making it easier to add multiple issue collectors to one page.

<img alt="issue collector" class="p-img" src="{{ site.url }}/assets/img/support_page/issue_collector_popup.png" style="border: 1px solid #eee; margin: 3rem auto;">

After adding each issue collector to one central page, all departments could now access the page and make requests from Tech and Design. 
 
As for the design, I first tried just putting all issue collectors on the page with small descriptions for each type. I also added gifs to try and differentiate the request types.

<img alt="old page" class="p-img" src="{{ site.url }}/assets/img/support_page/old_support_page.png" alt="initial layout" style="border: 1px solid #eee; margin: 3rem auto;">

While that was fun, other departments were often submitting requests to the incorrect issue collector. I decided the best and most scalable design was putting the designated issue collectors under each department name with additional help text for each department’s issue collectors. This way, users would know which team their request was going to.

{:.p-img}
![design ticket collectors]({{ site.url }}/assets/img/support_page/design_collectors.png){:style="border: 1px solid #eee;"}

{:.p-img}
![support page]({{ site.url }}/assets/img/support_page/support_page_demo.gif){:style="border: 1px solid #eee;"}

Recently, I added issue collectors for the Sales Ops team and hopefully, because of the scalable design, more teams will be interested in adding their own collectors to manage their ongoing projects and requests.

<p style="font-style: italic; margin-top: 3rem;">Project Manager: <a target="_blank" href="https://www.linkedin.com/in/tonybagdon/">Tony Bagdon</a></p>

