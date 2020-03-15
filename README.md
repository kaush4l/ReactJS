# Instructions to update the resume

## Update the dependencies
If the app fails to start it can be because of issues in the dependencies
* To update the dependencies run
~~~
  npm aduit
  npm audit fix --force
~~~

## Commands to host
Hosting ReactJS on github is done using gh-pages. All the changes are pushed to the branch called gh-pages and hosted from the branch.
Commands to push to gh-pages

~~~
  npm run deploy // pushes changes to the gh-pages branch and hosts it from there
~~~

For any doubts [refer](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)

## TODO list
### Immediate
* DarkMode
* A MarkDown page that renders the individual collection of block.
* Add FileSystem read to read the newly added MD directly.
* Add markdown any details as MarkDown file should render the details in the necessary page
* Update the experiences and projects(UI and content)
### Overkill
* Add styling to the MarkDown
* Try adding all the side projects so that they are easily accessible
* Make a generic theme and also try to host any material so that it can be shared
* A Home page with a theme or a gif picture like [this](https://christopher.su/)
