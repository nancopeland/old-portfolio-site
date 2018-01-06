---
layout: post
title:  "Redesigning our branded content landing page in phases"
description: How design is working with the dev team to making progressive enhancements to the site's library page
image-class: library-page
prev-story: /2017/06/10/smt-user-content-admin.html
next-story: /2017/10/14/gig-app.html
---

The [library page](https://www.constructiondive.com/library/) on Industry Dive's publication sites was recently redesigned to feature more content from our in-house content studio, [Dive Brand Studio](https://www.industrydive.com/brandstudio/). Originally, the page featured both Brand Studio content along with promoted content from clients. How could the new page account for both content types while making their difference clear to the user?

<p class="centered">
	<img src="{{ site.url }}/assets/post_img/2017-12-20-library-page/old_library_page.png" alt="old library page" /> 
	<span class="caption">The old library page that <strong>doesn't</strong> show difference between the two content types</span>
</p>

### Planning

First, I spoke with the Brand Studio team about what its priorities were for this redesign:
1. Increase leads from campaigns
2. Ensure that the page is valuable to the user
3. Increase Brand Studio brand awareness
4. Create layout that is easy to manipulate (i.e. there are multiple ways to promote one item and this can easily be done through the CMS)

Then, I looked at the current options available for each listing and considered other possible requirements Brand Studio might request. This would help when explaining the scope of the project to the backend developer helping with the project. 
1. **Client** - All items have a client who is sponsoring the content regardless of the content type
2. **Item type** - Is it a playbook, a webinar, an e-book or something else?
3. **Brand Studio vs. Client** - Who created the content? 
4. **Photo vs. no photo** - Ideally all items have a photo but what if they don't?
5. **Title** 

### Wireframes

My first thought was to remove the sidebar, allowing the page to have a full-width template so it could be differentiated from the rest of the site. Also, being able to filter the content based on topic and content type would make the page easier to navigate for the user.

<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/wireframe1.jpg" alt="wireframe" /> 
			<span class="caption">Wireframe featuring one item promoted at the top</span>
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/wireframe2.jpg" alt="wireframe" /> 
			<span class="caption">Wireframe featuring multiple items promoted at the top with option to filter items by topic and content type</span>
		</div>
	</div>
</div>

To make it more appealing for the user to enter their information, the actual download process needed to be simpiler. Historically, users had to click on the title that then took them to a landing page, which took users to a third party site to download the content. Wouldn't it be easier to have it all hosted on our site? 

<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/wireframe3.jpg" alt="wireframe" /> 
			<span class="caption">Option to download item on the page</span>
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/wireframe4.jpg" alt="wireframe" /> 
			<span class="caption">Option to download item once you click through to the landing page</span>
		</div>
	</div>
</div>

### Mockups

In the first few mockups of the page, my main challenge was how to layout each item with each variant (the ones mentioned above). What happens if a photo isn't uploaded? How can I better indicate what type of content the item is? Is the item made by a client or by the Brand Studio? 

In the second mock below, I added a top ad placement, where the Brand Studio would be able to promote a particular piece. I also added ads within the feed of content to promote LinkedIn groups and the newsletter. 

<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock1.jpg" alt="mockup" /> 
			<span class="caption">First mock with filtering options</span>
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock2.jpg" alt="mockup" /> 
			<span class="caption">Mock with additional ad/signup placements</span>
		</div>
	</div>
</div>

For the download process, I looked primarily at the [Amazon's checkout process](https://www.smashingmagazine.com/2013/03/designing-a-better-mobile-checkout-process/) to see what would increase conversions. As previously stated, I wanted to make this more seamless. When talking to our audience development team, someone suggested adding the feature to sign in with LinkedIn. 

<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock_pop_1.jpg" alt="mockup" /> 
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock_pop_2.jpg" alt="mockup" /> 
		</div>
	</div>
</div>
<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock_pop_3.jpg" alt="mockup" /> 
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock_pop_4.jpg" alt="mockup" /> 
		</div>
	</div>
</div>

In the next iteration of mocks, I cleaned up the page by focusing on separating client (content in the grey box) vs. Brand Studio work (all other content on the page). I also decided that photos should be required because the icon + gradient style was starting to look a bit repetitive. 

<div class="row">
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock3.jpg" alt="mockup" /> 
			<span class="caption">Mock featuring client content at the bottom of the page</span>
		</div>
	</div>
	<div class="medium-6 columns">
		<div style="margin: 2rem 0;">
			<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/mock4.jpg" alt="mockup" /> 
			<span class="caption">This mock moves client content up the page</span>
		</div>
	</div>
</div>

### Implemetation

I knew this would be a large tech undertaking so after meeting with a developer, we decided to break it up into phases:

* **Phase 1:** General library page redesign: adding photos to each item, the differentiation between client and Brand Studio content and some back-end refactoring to make the CMS process easier for users
* **Phase 2:** Ad placements and a tool that makes the page easier to organize
* **Future improvements:** Migrating third-party landing pages to our platform for easier downloading and lead generation 

This way, the back-end could be restructured before adding new larger features, such as an "easy-to-manipulate" layout. Initially I thought a drag-and-drop layout would be ideal for laying out the page but until that is built, there are radio and checkbox inputs in the CMS to indicate the item type. 

<p class="centered" style="width: 400px;">
	<img src="{{ site.url }}/assets/post_img/2017-12-20-library-page/content_type_CMS.png" alt="CMS" />
	<span class="caption">Screenshot from library item CMS</span>
</p>

### Phase 1

The final product for Phase 1 looks relatively similar to the final mocks. The one difference is that instead of having the icon overlay on the photo, the icon along with CTA text appears on hover so the user can see the whole photo. Also the styling of the "Industry Intel" (i.e. the client content section) is slightly different. 

<p class="centered">
	<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/phase1.gif" alt="phase1 gif" />
</p>

<p class="centered" style="width: 300px;">
	<img style="border: 1px solid #eee;" src="{{ site.url }}/assets/post_img/2017-12-20-library-page/phase1_mobile.gif" alt="phase1 mobile gif" /> 
</p>

Next, I will look at engagement on the page and make tweaks accordingly as well as pushing forward on Phase 2 of the project. 