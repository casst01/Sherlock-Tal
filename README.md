# Facebook on TAL


## Overview
This is a simple project for consuming the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) using the [TAL Framework](https://github.com/fmtvp/tal). This document outlines how to get up and running with the project so you can start creating your own apps.

As this is a base project, there are some things that it does not do for you, yet. These are outlined below.

## Whats in the Box ?
Out of the box this app provides:

* Basic OAuth authentication
* Datasource Management
* Basic routing

## Getting Started

### Facebook App
To use the [Facebook Graph API](https://developers.facebook.com/docs/reference/api/) you will need to create a Facebook App to obtain an App ID

### Grab the project code
First things first, checkout the code for the project:

	git clone https://github.com/casst01/tal_fb.git myapp

### Grab the TAL Framework
Next, navigate into your app directory and checout the [TAL Framework](https://github.com/fmtvp/tal):

	cd myapp
	git clone https://github.com/fmtvp/tal.git antie
	
*Note: This must be checked out into a directory called `antie`. See the [TAL Documentation](http://fmtvp.github.io/tal/) for more details.*

### Update your App ID and URL
Now that the code is checked out you will need to update `index.php` with your Facebook Application ID, the base url of your Facebook Application (this must match that defined in your Facebook Application control panel), and finally an array of permissions.

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
- Move facebook datsources from datasourcemanager to facebookdatasource manager
- CSS + polish
- Dummy FB Account for demo

# What this base project doesnt do..
- Deal with peristing access token
- Deal with access token expiry

# Caveats
- TALs carousel breaks when it has just one item.