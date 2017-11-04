---
layout: post
title:  "Creating downloadable PDFs using the .print window"
description: How to create and style a PDF using the browser print window that anyone familiar with code can use
image-class: pdf-button
prev-story: /2017/10/14/gig-app.html 
next-story: /2017/06/10/smt-user-content-admin.html
---

Recently, we added a tool to our site for our Ad Operations team that allows them to print styled articles for clients. This saves both the Ad Operations (Ad Ops) and Design teams time and also streamlines the process so there are fewer errors and back and forth between teams. 

_photo goes here_

**The Problem**

When our clients run sponsored articles on our site, we send them a PDF after the campaign finishes. Previously, designers had to copy and paste the article content from the site into InDesign and style it. While this allowed for lots of customization, the process was tedious and pretty boring for a designer to complete. As the demand for these PDFs increased, designers as well as the Ad Ops team became frustrated. What could we do to fix this?  

After looking at the problem, I decided to create a tool that would...
1. be easy for any member of Ad Ops to use 
2. require little work from the design team (unless bugs arise)
3. be customizable with simple CSS, as needed

**Building the Tool**

I decided to build this feature using the browser print window. Instead of sending the page to an actual printer, the user could "Save as a PDF."

{:.p-img}
![browser print box]({{ site.url }}/assets/img/pdf_button/print_box.png)

All I needed was a custom print stylesheet to apply to this specific article type.

Because this is an internal feature, I wrote the code so that a class is conditionally added to articles when they are **sponsored** and the user is **logged into CMS**. This ensures our readers don't experience negative load times on the page. 

All styling was wrapped in the following class inside a print media query.

{% highlight scss %}
@media print {
	.admin-pdf-styling { 
		// custom print styling goes here
	}
}
{% endhighlight %}

In terms of styling, writing SCSS for a print stylesheet is a bit different from the web. First, I knew I wanted a full-width image, so I zeroed out all the padding on the wrappers. 

{% highlight scss %}
@media print {
	.admin-pdf-styling { 
		.wrapper {
			padding: 0; 
			width: inherit; // resets page width
		}
		.main-image { 
			width: 100%; 
		}
	}
}
{% endhighlight %}

Then, I set widths on the wrappers around the content so they were centered in a block on the page. This makes the PDF cleaner and easier to read. I used inches because I knew the PDF might actually be printed by the end user. 

{% highlight scss %}
@media print {
	.admin-pdf-styling { 
		.content-wrapper {
			margin: 0 auto;
			width: 5.25in;
		}
	}
}
{% endhighlight %}

{:.p-img}
![pdf page]({{ site.url }}/assets/img/pdf_button/pdf_page.png)

The last thing to note about styling for PDFs is page breaks. Read more about them [here](https://css-tricks.com/almanac/properties/p/page-break/), because they're a bit tricky. I wanted to make sure that the page broke when the copy started. I also wanted to avoid one line of copy from a paragraph being on a page by itself. I had to play around with this but found a way to address both problems. 

{% highlight scss %}
@media print {
	.admin-pdf-styling { 
		.copy-wrapper { // only wraps copy, not title
			page-break-inside: avoid;
			p { 
				page-break-inside: avoid; // avoids one line on different page
			}
		}
	}
}
{% endhighlight %}

**How does it work?**

To make this user friendly, when the user is logged into the CMS, they see the "Download Story PDF." 

{:.p-img}
![button screenshot]({{ site.url }}/assets/img/pdf_button/button.jpg)
<span class="help-text">If you're logged into the CMS, you can see the information above the sidebar on the right, including the "Download Story PDF" button.</span>

If you click on the button, the browser's print window pops up. Inside here, the user must make sure they change the printer to "Save as PDF" (as specified above) and uncheck "Headers and footers" and "Background graphics."

{:.p-img}
![browser print box]({{ site.url }}/assets/img/pdf_button/print_box_big.png)
<span class="help-text">Example of what the print window should look like</span>

If the person downloading wants to customize the look of the PDF, I created a document in our internal [Confluence](https://www.atlassian.com/software/confluence) space that details how to do this. It includes how to change the color of links, how to change the size of the headings and how to change the width of logos all to make sure the PDF is optimized for the client. All code is manually added through the CMS. 

{:.p-img}
![custom css input in the CMS]({{ site.url }}/assets/img/pdf_button/custom_css.png)
<span class="help-text">This is where the user enters the custom CSS in the CMS</span>

{:.p-img}
![final pdf gif]({{ site.url }}/assets/img/pdf_button/final_pdf.gif)
<span class="help-text">Scrolling through final PDF</span>

The Confluence document includes code snippets the user can copy and paste so it is easy to change the design. After adding some custom CSS, the PDF has the potential to look pretty good! While InDesign allows for more customization, this tool saves multiple teams time and produces a nice looking product for clients to use. 

_**UPDATE:** We recently rolled this tool out to all stories (not just sponsored) so any company member has the ability to print any article in this format. This is still used mainly for sending content to clients._
