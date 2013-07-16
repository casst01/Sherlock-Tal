# Facebook on TAL

## Contents
1. Overview
2. What's in the Box?
3. Set Up
	1. Create your Facebook App
	2. Checkout the Code
	3. Configure App ID and URL
	4. Set up Virtual Host (Recommended)
	5. Give it a Go 
4. What's Going On?
5. Where to Now ?
	1. Creating your own Component
	2. A More Detailed Example
6. Things to Note
7. What's Not in the Box?	 
8. Roadmap

## Overview
This is a simple project for consuming the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) using the [TAL Framework](https://github.com/fmtvp/tal). This document outlines how to get up and running with the project so you can start creating your own apps.

As this is a base project, there are some things that it does not do for you, yet. These are outlined below.

## Whats in the Box?
Out of the box this app provides:

* **Basic OAuth authentication**
	* This is responsible for retreiving and storing the access_token.
* **Datasource Management**
	* A single point for managing/accessing your datasources.
* **Very Basic routing**
	* Route is defaulted to Index/Index which simply calls `IndexController::index()`
* **Frames**
	* These are Containers that contain ComponentContainers, this allows us to group multiple components together.

## Set Up
To get the project up and running you will need to create a Facebook App, checkout the code, and set up a Virtual Host to serve the application. Details are outlined below.

### Facebook App

To use the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) you will need to create a Facebook App to obtain an App ID.

Head on over to the [Facebook Developers](https://developers.facebook.com/apps) page to create your app. Once created, on the summary page select `Website with Facebook Login` and enter a url for the app. This can be a url on your machine if you are developing locally. The recommended approach is to set up a virtualhost such as `http://myapp.tal.local` and use that.

### Checkout the Code
Now you have a facebook app set up, time to get the code checked out.

#### Grab the project code
First things first, checkout the code for the project:

	git clone https://github.com/casst01/tal_fb.git myapp

#### Grab the TAL Framework
Next, navigate into your app directory and checout the [TAL Framework](https://github.com/fmtvp/tal):

	cd myapp
	git clone https://github.com/fmtvp/tal.git antie
	
*Note: This must be checked out into a directory called `antie`. See the [TAL Documentation](http://fmtvp.github.io/tal/) for more details.*

#### Configure App ID and URL
Now that the code is checked out you will need to update `index.php` with your Facebook Application ID, the base url of your Facebook Application (this must match that defined in your Facebook Application control panel), and finally an array of permissions.

For the vanilla checked out application, you wont need any permissions as it just displays a list of friends so just an App ID and URL will do.

### Set up a Virtual Host (Recommended)
Now that you have the code checked out, time to set up a vhost. As mentioned in the [TAL Installation Guide](http://fmtvp.github.io/tal/getting-started/tutorial/installation.html), your server will need to be configured with PHP5 enabled.

### Give it a Go
That's it! Hit the app in a browser, you will be redirected to Facebook to confirm permissions for the application, and then redirected back to the app, where you should see a list of your friends. 

## What's Going On ?
So, what's going on under the bonnet? Below is a very breif outline of what this project does in addition to what is already provided by the [TAL Framework](https://github.com/fmtvp/tal).

- **SampleApp**
	1. route function checks if we have an access token, if not the FB object handles the rediect.
	2. if we have one, it is extracted from the url
	3. route is defaulted to index/index
	4. next a main controller is instantiated with some arguments (the application, and a datasource manager).
	5. route is called on the main controller and the route object is passed to it.
- **MainController**
	- takes the route and determines which controller/action to call.
	- the controller is instantiated and the action is called on the controller
	- as we always default to index/index, we only deal with the index function of the index controller
- **IndexController**
	- index function creates an indexFrame and adds a component to one of the frames component containers.
	- an event listener listens for the `dataound` event and then sets the componentContainer as focused. The reason we wait for this event to set focus is so that we know we have Buttons on the DOM
	
At this stage the component is shown on the page and has focus.
For more detiails on framework events checkout the [TAL Documentation](http://fmtvp.github.io/tal/)

## Where to Now?
The vanilla checkout of this project displays a carousel containing a list of the users friends. Its pretty simple, but its consuming the Facebook Graph Api and presenting that data in a navigable TAL component.

### Creating your own Component
#### Datasource
Datasources specify the Graph API endpoint that we want to consume. Simply set the url and implement the `init()` function calling `_super()` and passing along the id of the datasource.

##### Parameterized URLs
You can also specify parameterised urls using a colon to identify a parameter like so:

	https://graph.facebook.com/:albumId/photos
	
In this case you will need to implement `getUrl()` to call the `_fillParams` function. This takes a parameters object and inflates the URL.

	getUrl: function () {
        return this._fillUrlParams(this.url, {
            albumId: this._albumId
        });
    }

#### Widget
Widgets are the on-screen representation of the data. The [Tal Documentation](http://fmtvp.github.io/tal/widgets/working-with-widgets.html) has a lot of detail about widgets.

Now that you have a datasource to retrieve your data, you are going to want to create a widget to display it. Typically this involves extending `Button` so that we can receive focus. The adding various other widgets such as labels.

Checkout the `Friend` widget, it extends Button and adds a `Label` and an `Image` to be displayed for each friend.

#### Formatter
Formatters are responsible for taking the data returned from the datasource and creating a Widget. These should implement a `format()` function taking an iterator as an argument. The iterator contains all the data items recevied from the datasource.

The formatters in this project are pretty thin. They simply pass the next item in the iterator to the constructor of a new widget.

#### Component
A component brings all of the above together to provide reusable sections of UI. _(See TALs '[A First Component](http://fmtvp.github.io/tal/getting-started/tutorial/firstcomponent.html)' for more details)_

Components in this project create a Container to contain the generated widgets, and set a datasource to define where the data comes from. Checkout the `friendscarouselcomponent` to see how we do this. Here we create a new `HorizontalCarousel` to display `Friend` widgets. We do this by passing the `FriendsFormatter` to it.

We also listen for the `beforerender` event where we set the datasource of component. This comes from the `args` property of the event object. (Explained in the next section).

#### Getting Your Component on the Screen
Great, you have a component! The showing of components is handled by controllers. Each controller receives the `DatasourceManager` that it can use to get datasources. Displaying a component simply consists of getting the datasource and then calling `show` on a ComponentContainer in the frame and passing the component require path and an `args` object containing the datasource. 

### A More Detailed Example
This project simply shows a single carousel of Friends. For a more advanced example, see the `PhotoAlbums` branch of this project.


## Things to Note.

### Single Item Carousels

A Carousel set to display one item will get caught in a loop. This is due to the way it creates cloned items. To avoid this, you can set the wrap mode of the carousel to WRAP_MODE_NONE:

	carousel.setWrapMode(HorizontalCarousel.WRAP_MODE_NONE)

## What's Not in the Box?
Things that the project doesn't deal with at the moment:

- Peristing access token
- Access token expiry

## Future 
Very early stages, lots of work to do, but would aim to:

- Solidify app structure, basic at the moment.
- Routing - beyond just using index/index as it does now.
- Persisting of access_token
- Dealing with expiry of access_token
- FQL Support
- Multiquery FQL
- Parameterized FQL

---
Go make something cool.