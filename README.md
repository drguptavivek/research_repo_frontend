Svelte based frontend

# Gettnhg started with blank directory and an empty GITHIB Repo

create a GithUb Repo and added the template of NODEJS
On desktop, go to folder inside whihc the development folder will reside
Clone the Github Repo. This will create a folder research_repo_frontend
The research_repo_frontend folder has GIT initialised. So all of our code must be inside this folder and not in a sub folder. To keep thigs clean, we first create a local branch called desktop and  checkout that branch. 
We cannot run "npx sv create app" inside research_repo_frontend. We need to run the npx sv create in the parent folder of research_repo_frontend. Further we must name the svelte app as research_repo_frontend. Now all our code will be inside the research_repo_frontend folder that is ahead of the server repo on  a branch called "desktop". 
We work with the branch and push changes to GitHub "desktop" branch
On Github, create pull request, merge changes and delete dekstop branch
Again on desktop, detach the desktop branch, checkout main and pull updates from server.

```bash
# FIRST COMMITS
cd c:/workspace
cd RESPUBDIR
git clone https://github.com/drguptavivek/research_repo_frontend.git
cd research_repo_frontend
git status
git branch desktop
git checkout desktop
git branch -a
cd ..
npx sv create research_repo_frontend
cd research_repo_frontend
git add .
git commit  -m "About to Git push a local branch desktop upstream to a remote GitHub repo at desktop."
# Push local branch code to remote desktop branch
git push -u origin desktop 
# Go to https://github.com/drguptavivek/research_repo_frontend
# merge desktop with main on GitHub
# Delete remote  desktop on GitHub
# remote main branch has all latest code

#### RINSE AND REPEAT
# Back on a computer
git remote show origin
git checkout main # Latest code from server
git pull
git branch -D desktop # Detach / delete preexisting local branch desktop
git push origin --delete desktop # Detach / delete preexisting REMOTE branch desktop

git branch desktop # Recreate a local  branch
git checkout desktop # Start working with t lcoal branch
git branch -a # List all branches and remotes
# Make changes to code

git status
git add .
git commit  -m "Changed dark mode settings - Tailwind use slectpor strategy and sun icon on footer. Classes on BODY tag and base styles"
git status
# Push local branch code to remote
git push -u origin desktop 
# merge desktop with main on GitHub
# Delete remote  desktop on GitHub




```



### VERSION CONTROL
1. The 'main' branch contains all the main code - `git clone https://github.com/drguptavivek/research_repo_frontend.git; git checkout main`
2. Create branches for development locally  `git branch macbook; git checkout macbook`
3. All work done on the various machines will be COMMITTED locally `git add; git commit `.  
4. Once work is completed -PUSH from local branch to the GitHub remote / upstream  branch `git push -u origin macbook` 
5. Got to GitHub website and create a  PULL REQUEST (merge request): e.g. 
   - https://github.com/drguptavivek/research_repo_frontend.git/pull/new/macbook
   - https://github.com/drguptavivek/research_repo_frontend.git/pull/new/desktop
6. Merge the branch on GitHub website with `main` branch
7. Checkout the `main` on local machine ``git remote show origin ; git checkout main ``
   - Now the `main` on local desktop/laptop would be behind the server main
8. Pull the changes from `main` on server to `main` on local - `git pull `


```shell
git clone https://github.com/drguptavivek/research_repo_frontend.git
git checkout main
git remote show origin 
git branch -a

# Create branch for local work
git branch macbook
git checkout macbook
git add 
git commit  -m "About to Git push a local branch upstream to a remote GitHub repo."
# Push local branch code to remote
git push -u origin macbook
# remote: Create a pull request for 'macbook' on GitHub by visiting:
# remote:      https://github.com/drguptavivek/research_repo_frontend.git/pull/new/macbook
# merge on GitHub; Delete remote  macbook on GitHub


```