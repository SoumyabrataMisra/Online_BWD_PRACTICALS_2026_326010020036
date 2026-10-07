Steps Required to Upload the Website and Access It Through a Web Browser Using GitHub

1. Prepare the Website Files

First, keep all the website files inside one folder.

For example:

College Website/
│
├── index.html
├── about.html
├── courses.html
├── faculty.html
├── contact.html
├── style.css
├── script.js
├── README.md
└── images/

The index.html file should be the main/home page of the website.

Before uploading, open index.html in a web browser and check that all pages, buttons, images, CSS, and JavaScript are working correctly.

2. Create a GitHub Account

Open a web browser.

Go to GitHub.

Create a GitHub account if you do not already have one.

Log in to your GitHub account.

3. Create a New Repository

After logging in, click the + button at the top-right corner.

Select New repository.

Enter a repository name.

For example:

college-website

Select Public so that the website can be accessed through the internet.

Click Create repository.

4. Upload the Website Files

After creating the repository:

Open the new repository.

Click Add file.

Select Upload files.

Drag and drop the complete website files and folders into the upload area.

Make sure that index.html is directly inside the main repository folder.

Scroll down to the bottom.

Enter a message such as:

Upload college website

Click Commit changes.

The website files are now stored in the GitHub repository.

5. Enable GitHub Pages

GitHub Pages is used to publish the HTML website on the internet.

Open your GitHub repository.

Click Settings.

Find Pages in the left-side menu.

Under Build and deployment, select:

Source: Deploy from a branch

Select the branch:

main

Select the folder:

/root

Click Save.

GitHub will then publish the website.

6. Wait for the Website to Be Published

After enabling GitHub Pages, wait for a short time while GitHub publishes the website.

The published website address will normally look similar to:

https://your-username.github.io/college-website/

Here:

your-username = your GitHub username

college-website = the repository name

7. Access the Website Through a Web Browser

Open Chrome, Edge, Firefox, or another web browser.

Enter the GitHub Pages website address.

Press Enter.

For example:

https://your-username.github.io/college-website/

The index.html page will open as the home page.

From the navigation menu, the user can open:

Home
About
Courses
Faculty
Contact

8. Check the Website

After publishing, check the following:

Home page opens correctly.

Navigation links work.

About page opens.

Courses page opens.

Faculty page opens.

Contact page opens.

CSS styling is displayed correctly.

JavaScript functions work.

Images are displayed correctly.

Website works on both computer and mobile screen sizes.

9. Updating the Website

If any changes are required later:

Open the GitHub repository.

Open the required file.

Click the edit option.

Make the changes.

Click Commit changes.

GitHub Pages will automatically update the published website after the changes are deployed.

10. Final Result

After completing all the steps, the website is available online through a web browser using the GitHub Pages URL.

The basic process is:

Create Website
      ↓
Create GitHub Account
      ↓
Create Repository
      ↓
Upload Website Files
      ↓
Enable GitHub Pages
      ↓
Select main Branch
      ↓
Publish Website
      ↓
Open Website URL
      ↓
Website Accessible Through Browser

Conclusion

GitHub Pages provides a simple way to publish a static HTML, CSS, Bootstrap, and JavaScript website. By uploading the website files to a GitHub repository and enabling GitHub Pages, the website can be accessed through a web browser without installing a separate web server.