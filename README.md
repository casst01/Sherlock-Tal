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
6. Roadmap

## Overview
This is a simple project for consuming the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) using the [TAL Framework](https://github.com/fmtvp/tal). This document outlines how to get up and running with the project so you can start creating your own apps.

As this is a base project, there are some things that it does not do for you, yet. These are outlined below.

## Whats in the Box?
_TODO_

Out of the box this app provides:

* Basic OAuth authentication
* Datasource Management
* Very Basic routing
* Frames

## Set Up

### Facebook App
_TODO_

To use the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) you will need to create a Facebook App to obtain an App ID

### Checkout the Code

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
_TODO_

### Give it a Go
_TODO_

## What's Going On ?
_TODO_
- sampleapp
	- route checks if we have an access token, if not the FB object handles the rediect.
	- if we have one, it is extracted from the url
	- route is defaulted to index/index
	- next a main controller is instantiated with some arguments (the application, and a datasource manager).
	- route is called on the main controller and the rout object is passed to it.
- maincontroller
	- takes the route and determines which controller/action to call.
	- the controller is instantiated and the action is called on the controller
	- as we always default to index/index, we only deal with the index function of the index controller
- indexcontroller
	- index function creates an indexFrame and adds a component to one of the frames component containers.
	- an event listener listens for the `dataound`event and then sets the componentContainer as focused.
	
At this stage the component is shown on the page and has focus.
For more detiails on framework events checkout the [TAL Documentation](http://fmtvp.github.io/tal/)

## Where to Now?
The vanilla checkout of this project displays a carousel containing a list of the users friends. Its pretty simple, but its consuming the Facebook Graph Api and presenting that data in a navigable TAL component.

### Creating your own Component
#### Datasource
_TODO_
#### Widget
_TODO_
#### Formatter
_TODO_
#### Component
_TODO_

### A More Detailed Example
_TODO_

## Roadmap
_TODO_
- Solidify app structure
- Routing - beyond just using index/index as it does now.
- Frames
- FQL Support
- Multiquery FQL
- Parameterized FQL

---
---
---

# Things to note

- Index controller creates its own frame.
- AlbumPhotos Datasource - Seems to struggle when only 1 data item is returned.

# Urls with dynamic params
- Create a datasource subclassing facebook/base
- define urls with params
- overide geturl to call fillParams before returning url

# TODO
/ Controller to pass datasource through as args
/ Datasources to inherit from DataSource instead of Class
/ Datasource Management
/ Dynamic Parameters in Datasources
/ Passing Arguments to components for use in ComponentEvents
/ FacebookDataSourceManager to auto pass through accessToken as arg
/ Datasource not reloading after setParam()
/ Move facebook datsources from datasourcemanager to facebookdatasource manager
/ Dummy FB Account for demo
- Simplify base state of project to just display list of friends perhaps?

# What this base project doesnt do..
- Deal with peristing access token
- Deal with access token expiry

# Caveats
- TALs carousel breaks when it has just one item. This is only when it is set to wrap, as it tries to create the clone items. Wrape mode none fixes this.
