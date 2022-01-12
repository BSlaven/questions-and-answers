# Questions and answers app

## Pages structure
- The first thing I decided to do is determine which pages I will need for this app.
- One of the decisions was to have user's questions on their profile page (next to basic user info).
- Login page and register page use slightly different forms.
- Home page will render questions component and users component

## Tools
- React router version six brought a couple of changes: switch statement was replaced by <Routes> element and others.
- Initially I wanted to use live-server to create fake REST API entpoint but realised I could not find a way to deploy it so I can have a live version of my app.
- I decided to go with firebase backend as a service. I knew the use of firebase will mean that I will not be sending classic rest api requests.
- Firebase also provided me with a way to have live real authentication for users.
- I decided to deploy my app to Netlify. It is by far the simplest option.
  
## Some key points
- For the number of likes and dislikes I decided instead of simply counting them to actually add ids of user who liked or disliked a question. This allowed me to prevent a user from liking/disliking a question if they already did that.
- Reducer and saga functions could definitely be separated into files for better folder structure.
- Generally speaking folder structure in this app has room for improvement.
- As far as the look of the app is concerned I did what I could with the limitations of a CSS framework. I added minor inline style changes where I really needed it.
- This was my first time using redux-saga, so that was a challene in itself.
